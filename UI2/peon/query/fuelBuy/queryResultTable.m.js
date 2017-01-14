define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var allData = require("$UI/peon/js/loadData");
	var global = require("$UI/peon/js/global");
	
	var isEnd = false;
	var startIndex = 0;
	var pageSize = 10;

	var Model = function(){
		this.callParent();
	};
	
	var init = function() {
		isEnd = false;
	};
	
	// 加载报表
	var loadQueryData = function(event, param) {		
		var url = global.serverDomain + 'fuelBuy/query';
		var funCtx = {
			event: event,
		};
		baseLoadAjaxData(url, param, null, loadQueryDataSuccessFun, funCtx);
	};
	
	var loadQueryDataSuccessFun = function(data, funCtx) {
		var event = funCtx.event;
		startIndex += pageSize;
		allData.loadDataFromJson(event.source, true, data);
	};
	
	// 下拉报表
	var loadNextData = function(param, ctx) {
		var url = global.serverDomain + 'fuelBuy/query';
		var funCtx = {
			ctx: ctx,
		};
		baseLoadAjaxData(url, param, ctx, loadNextDataSuccessFun, funCtx);
	};
	
	var loadNextDataSuccessFun = function(data, funCtx) {
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
			success:function(data) {
				if (data.success) {
					successFun(data.data, funCtx);
				} else {
				
				}
			}
		});
	};

	Model.prototype.rsDataCustomRefresh = function(event){
		// 1、加载数据. 每次刷新都会触发此方法		
		var param = {
			"pageSize":pageSize,
			"startIndex": startIndex
		};

		loadQueryData(event, param);
		init();
	};
	
	// 每次向上滑动会调用一次这个方法
	Model.prototype.scrollView1PullUp = function(event){
		if (!isEnd) {
			var param = {
				"pageSize": pageSize,
				"startIndex": startIndex
			};
			loadNextData(param, this);
			this.comp("scrollView1").noMoreLoadLabel = "加载更多...";
		} else {
			this.comp("scrollView1").noMoreLoadLabel = "已经到最后.";
		}
		
	};

	Model.prototype.modelLoad = function(event){
		
	};

	return Model;
});