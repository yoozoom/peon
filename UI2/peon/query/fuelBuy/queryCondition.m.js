define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.queryBtnClick = function(event){
		// var url = "./queryResult.m.w";
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

	return Model;
});