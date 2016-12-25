define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.queryBtnClick = function(event){
		var url = "./queryResult.m.w";
		justep.Shell.showPage(require.toUrl(url));
	};

	return Model;
});