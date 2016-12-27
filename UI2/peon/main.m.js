define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	
	Model.prototype.modelActive = function(event){
		this.comp("mainContent").active();
		console.log("inin main page");
	};
	
	Model.prototype.modelLoad = function(event){
		console.log("modelLoad main page");
	};
	
	return Model;
});