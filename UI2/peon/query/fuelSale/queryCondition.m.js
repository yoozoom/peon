define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");	
	require("$UI/peon/plugin/jquery-ui-1.11.4.custom/jquery-ui.min");
	require("css!$UI/peon/plugin/jquery-ui-1.11.4.custom/jquery-ui.min").load();

	var global = require("$UI/peon/js/global");
	
	var autoSize = 8;
	var rlmcMap = {};
	var rlmcComp;
	// var khbhMap = {};
	// var khbhComp;
	
	var Model = function(){
		this.callParent();
	};
	
	var buildParam = function(event, ctx) {
//		var zgs = ctx.comp("input3").val();
//		var xmb = ctx.comp("input5").val();
		var lcmc = ctx.comp("input6").val();
		
		var zgs = ctx.comp("companySelect").val();
		var xmb = ctx.comp("projectSelect").val();
//		var khmc = ctx.comp("input7").val();
//		var khbh = "";
//		if (khmc) {
//			khbh = khbhMap[khmc];
//		}
		var rlmc = ctx.comp("input8").val();
		var rlbh = "";
		if (rlmc) {
			rlbh = rlmcMap[rlmc];
		}
		var rllb = ctx.comp("select4").val();
		var gblb = ctx.comp("select2").val();
		var kssj = ctx.comp("input1").val();
		if (kssj) {
			kssj = kssj.split("-").join("");
		}
		var jssj = ctx.comp("input4").val();
		if (jssj) {
			jssj = jssj.split("-").join("");
		}
		
		var param = {
			gsdm: zgs,
			xmbdm: xmb,
			lcbh: lcmc,
			rlbh: rlbh,
			rllb: rllb,
			gblx: gblb,
			gbkssj: kssj,
			gbjssj: jssj
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
		this.comp("input4").val("");
		this.comp("input1").val("");
		// khbhComp = this.comp("input7");
		rlmcComp = this.comp("input8");
	};

	var customerLabelFormat = function(item) {
		if(item) {
			return item.khxm + "|" + item.khbh + "|" + item.sfzh;
		}
		return "";
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
	
//	var loadCustomerCallBack = function(data, ctx, funCtx) {
//		var response = funCtx.response;
//		khbhMap = {};
//        response($.map(data, function(item) {
//        	khbhMap[customerLabelFormat(item)] = item.khbh;
//            return {
//            	value: customerLabelFormat(item),
//            	label: customerLabelFormat(item)
//            };  
//        }));
//	};
	
	var loadFuelvarietyCallBack = function(data, ctx, funCtx) {
		var response = funCtx.response;
		rlmcMap = {};
        response($.map(data, function(item) {
        	rlmcMap[item.rlmc] = item.rlbh;
            return {
            	value: item.rlmc,
            	label: item.rlmc
            };  
        }));
	};

//	Model.prototype.input7Click = function(event){
//		var url = global.serverDomain + "customer/selectCustomer";
//		var param = {
//			pageSize: autoSize
//		};
//		var funCtx = {};
//		this.comp("input7").$domNode.autocomplete({  
//		    minLength: 1, 
//		    source: function(request, response) {
//		    	funCtx.response = response;
//		    	param.pageSize = autoSize;
//	            param.khxm = request.term;
//		    	loadAjaxData(url, param, this, loadCustomerCallBack, funCtx);
//		    },
//		    select: function(event, ui) {
//		    	if(ui.item) {
//		    		khbhComp.val(ui.item.label);
//		    	}
//		    }
//		});
//	};

	Model.prototype.input8Click = function(event){
		var url = global.serverDomain + "fuelvariety/selectFuelvariety";
		var param = {
			pageSize: autoSize
		};
		var funCtx = {};
		this.comp("input8").$domNode.autocomplete({  
		    minLength: 1, 
		    source: function(request, response) {
		    	funCtx.response = response;
	            param.rlmc = request.term;
		    	loadAjaxData(url, param, this, loadFuelvarietyCallBack, funCtx);
		    },
		    select: function(event, ui) {
		    	if(ui.item) {
		    		rlmcComp.val(ui.item.label);
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

	return Model;
});