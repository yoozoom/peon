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
		var kssj = ctx.comp("input1").val();
		if (kssj) {
			kssj = kssj.split("-").join("");
		}
		
		var param = {
			rq: kssj
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

	return Model;
});