define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");	
	require("$UI/peon/plugin/jquery-ui-1.11.4.custom/jquery-ui.min");
	require("css!$UI/peon/plugin/jquery-ui-1.11.4.custom/jquery-ui.min").load();

	var global = require("$UI/peon/js/global");
	
	var autoSize = 8;
	var rlmcMap = {};
	var rlmcComp;
	var khbhMap = {};
	var khbhComp;
	
	var Model = function(){
		this.callParent();
	};
	
	var buildParam = function(event, ctx) {
		var zgs = ctx.comp("input3").val();
		var xmb = ctx.comp("input5").val();
		var lcmc = ctx.comp("input6").val();
		var khmc = ctx.comp("input7").val();
		var khbh = "";
		if (khmc) {
			khbh = khbhMap[khmc];
		}
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
			khbh: khbh,
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
		khbhComp = this.comp("input7");
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
					successCallBack(data.data, funCtx);
				} else {

				}
			}
		});	
	};
	
	var loadCustomerCallBack = function(data, funCtx) {
		var response = funCtx.response;
		khbhMap = {};
        response($.map(data, function(item) {
        	khbhMap[customerLabelFormat(item)] = item.khbh;
            return {
            	value: customerLabelFormat(item),
            	label: customerLabelFormat(item)
            };  
        }));
	};
	
	var loadFuelvarietyCallBack = function(data, funCtx) {
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

	Model.prototype.input7Click = function(event){
		var url = global.serverDomain + "customer/selectCustomer";
		var param = {
			pageSize: autoSize
		};
		var funCtx = {};
		this.comp("input7").$domNode.autocomplete({  
		    minLength: 1, 
		    source: function(request, response) {
		    	funCtx.response = response;
		    	param.pageSize = autoSize;
	            param.khxm = request.term;
		    	loadAjaxData(url, param, this, loadCustomerCallBack, funCtx);
		    },
		    select: function(event, ui) {
		    	if(ui.item) {
		    		khbhComp.val(ui.item.label);
		    	}
		    }
		});
	};

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
	
	

	return Model;
});