define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.button1Click = function(event){
		var indexUrl = "./buy.m.w";
		justep.Shell.showPage(require.toUrl(indexUrl));
	};

	return Model;
});