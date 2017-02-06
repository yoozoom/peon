define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");	
	require("$UI/peon/plugin/jquery-ui-1.11.4.custom/jquery-ui.min");
	require("css!$UI/peon/plugin/jquery-ui-1.11.4.custom/jquery-ui.min").load();

	var global = require("$UI/peon/js/global");
		
	var Model = function(){
		this.callParent();
	};
	
	var buildParam = function(event, ctx) {
//		var zgs = ctx.comp("input3").val();
//		var xmb = ctx.comp("input5").val();
//		var lcmc = ctx.comp("input6").val();
		
		var zgs = ctx.comp("companySelect").val();
		var xmb = ctx.comp("projectSelect").val();
		var lcbh = ctx.comp("stockgroundSelect").val();

		var kssj = ctx.comp("input1").val();
		if (kssj) {
			kssj = kssj.split("-").join("");
		}
		
		var param = {
			gsdm: zgs,
			xmbdm: xmb,
			lcbh: lcbh,
			kcrq: kssj
		};
		return param;
	};

	Model.prototype.queryBtnClick = function(event){
		var param = buildParam(event, this);
		var url = "./queryResultTable.m.w";
		console.log(param);
		justep.Shell.showPage(require.toUrl(url), param);
	};

	Model.prototype.modelLoad = function(event){
		var paramData = this.comp("paramData");
		paramData.clear();
		paramData.newData({
			"defaultValues" : [{
				"id" : justep.UUID.createUUID(),
				"startDate" : new Date(),
				"endDate" : new Date()
			}]
		});
		this.comp("input1").val("");
	};
	
	// 功能ajax请求
	var loadAjaxData = function(url, param, ctx, successCallBack, funCtx) {
		$.ajax({
			url : url,
			type : 'get',
			data : param,
			dataType : 'jsonp',
			success : function(data) {
				if (data.success) {
					successCallBack(data.data, ctx, funCtx);
				} else {

				}
			}
		});	
	};
	
	// 公司，项目，料场级联
	Model.prototype.companyDataCustomRefresh = function(event){
		var url = global.serverDomain + '/company/queryCompany';
		var param = {};
		var funCtx = {
			event: event
		};
		loadAjaxData(url, param, this, buildCompanyData, funCtx);
	};
	
	var buildCompanyData = function(data, ctx, funCtx) {
		var event = funCtx.event;
		var companys = []; 
		$.each(data, function(i, c) {
			companys.push({'fValue':c.gsdm, 'fName':c.gsmc});
		});
		var source = event.source;
		source.loadData(companys);
	};
	
	Model.prototype.companySelectChange = function(event){
		this.comp('projectSelect').val('');
		this.comp('projectData').refreshData();
	};

	Model.prototype.projectDataCustomRefresh = function(event){
		var projects = [];
		var datadm = event.source;
		var company = this.comp("companySelect").val();
		var param = {
			gsdm: company
		};
		
		var url = global.serverDomain + 'project/queryProject';
		var funCtx = {
			event: event
		};
		
		if (company) {
			loadAjaxData(url, param, this, buildProjectData, funCtx);
		} else {
			datadm.loadData(projects);
		}
	};
	
	var buildProjectData = function (data, ctx, funCtx) {
		var event = funCtx.event;
		var datadm = event.source;
		var projects = [];
		$.each(data, function(i, c) {
			projects.push({'fValue':c.xmbdm, 'fName':c.xmbmc});
		});
		datadm.loadData(projects);
	};
	
	Model.prototype.projectSelectChange = function(event){
		this.comp('stockgroundSelect').val('');
		this.comp('stockgroundData').refreshData();
	};

	Model.prototype.stockgroundDataCustomRefresh = function(event){
		var stockgrounds = [];
		var datadm = event.source;
		var xmbbh = this.comp("projectSelect").val();
		var param = {
			xmbbh: xmbbh
		};
		
		var url = global.serverDomain + 'stockground/queryStockground';
		var funCtx = {
			event: event
		};
		
		if (xmbbh) {
			loadAjaxData(url, param, this, buildStockgroundData, funCtx);
		} else {
			datadm.loadData(stockgrounds);
		}
	};
	
	var buildStockgroundData = function (data, ctx, funCtx) {
		var event = funCtx.event;
		var datadm = event.source;
		var stockgrounds = [];
		$.each(data, function(i, c) {
			stockgrounds.push({'fValue':c.lcbh, 'fName':c.lcmc});
		});
		datadm.loadData(stockgrounds);
	};

	return Model;
});