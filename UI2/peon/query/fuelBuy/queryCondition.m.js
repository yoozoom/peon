define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");	
	require("$UI/peon/plugin/jquery-ui-1.11.4.custom/jquery-ui.min");
	require("css!$UI/peon/plugin/jquery-ui-1.11.4.custom/jquery-ui.min").load();

	var global = require("$UI/peon/js/global");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.queryBtnClick = function(event){
		var url = "./queryResultTable.m.w";
		justep.Shell.showPage(require.toUrl(url));
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
	
	var loadSelectDataCallBack = function(data, funCtx) {
		var response = funCtx.response;
        response($.map(data, function(item) {
            return {
            	value: item.khbh,
            	label: customerLabelFormat(item)
            };  
        }));
	};

	Model.prototype.input7Click = function(event){
		var url = global.serverDomain + "customer/selectCustomer?khxm=刘";
		var param = {};
		var funCtx = {};
		$("#input7").autocomplete({  
		    minLength: 1, 
		    source: function(request, response) {
		    	funCtx.response = response;
		    	loadAjaxData(url, param, this, loadSelectDataCallBack, funCtx);
		    }  
		});
	};

	return Model;
});