define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var allData = require("$UI/peon/js/loadData");
	var global = require("$UI/peon/js/global");
	
	var isEnd = false;
	var startIndex = 0;
	var pageSize = 10;
	var queryParam = {};
	var lastNextComplete = true;

	var Model = function(){
		this.callParent();
	};
	
	var init = function() {
		isEnd = false;
	};
	
	var rsData = null;
	
	// 加载报表
	var loadQueryData = function(event, param, ctx) {		
		var url = global.serverDomain + 'inventory/query';
		var funCtx = {
			event: event,
			rsData: rsData,
			ctx: ctx
		};
		baseLoadAjaxData(url, param, ctx, loadQueryDataSuccessFun, funCtx);
	};
	
	var loadQueryDataSuccessFun = function(data, funCtx) {
		global.hidePopOver("popOver2", funCtx.ctx);
		var event = funCtx.event;
		startIndex += pageSize;
		if (!rsData) {
			rsData = event.source;
		}
		allData.loadDataFromJson(rsData, true, data);
	};
	
	// 下拉报表
	var loadNextData = function(param, ctx) {
		var url = global.serverDomain + 'inventory/query';
		var funCtx = {
			ctx: ctx,
		};
		baseLoadAjaxData(url, param, ctx, loadNextDataSuccessFun, funCtx);
	};
	
	var loadNextDataSuccessFun = function(data, funCtx) {
		lastNextComplete = true;
		var ctx = funCtx.ctx;
		if (data.length === 0) {
			isEnd = true;
		} else {
			startIndex += pageSize;
			ctx.comp("rsData").loadData({
				"rows": data
			}, true);
		}
	};
	
	var baseLoadAjaxData = function(url, param, ctx, successFun, funCtx){
		$.ajax({
			url:url,
			type:'get',
			data: param,
			dataType:'jsonp',
			timeout : global.ajaxTimeout,
			success: function(data) {
				if (data.success) {
					if (global.checkCurrentPage(ctx, "inventory", "compoHid")) {
						successFun(data.data, funCtx);
					}
				} else {
				
				}
			},
			error : function(XHR, msg, e) {
				alert(global.SYSTEM_ERROR_MSG);
			},
			complete : function(XHR, TS){
				global.hidePopOver("popOver2", ctx);
			}
		});
	};

	Model.prototype.rsDataCustomRefresh = function(event){
		// 1、加载数据. 每次刷新都会触发此方法		
		queryParam.pageSize = pageSize;
		queryParam.startIndex = startIndex;

		loadQueryData(event, queryParam, this);
		init();
	};
	
	// 每次向上滑动会调用一次这个方法
	Model.prototype.scrollView1PullUp = function(event) {
		if (!lastNextComplete) {
			return;
		}
		lastNextComplete = false;
		if (!isEnd) {
			queryParam.pageSize = pageSize;
			queryParam.startIndex = startIndex;
			loadNextData(queryParam, this);
			this.comp("scrollView1").noMoreLoadLabel = "加载更多...";
		} else {
			this.comp("scrollView1").noMoreLoadLabel = "已经到最后.";
		}
		
	};

	Model.prototype.modelLoad = function(event){
		startIndex = 0;
		pageSize = 10;
		rsData = this.comp("rsData");
	};

	Model.prototype.modelParamsReceive = function(event){
		if (event.params) {
			queryParam = event.params;
		}	
		queryParam.pageSize = pageSize;
		queryParam.startIndex = startIndex;

		global.showPopOver("popOver2", this);
		loadQueryData(event, queryParam, this);
		init();
	};

	return Model;
});