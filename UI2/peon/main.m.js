define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.modelLoad = function(event){

	};
	
	Model.prototype.modelParamsReceive = function(event){
		if (event.params) {
			if (event.params.from == "login") {
				this.comp("mainContent").active();
			}
		}
	};
	
	return Model;
});