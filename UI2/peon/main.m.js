define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var CommonUtils = require("$UI/system/components/justep/common/utils");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.modelLoad = function(event){
		if (justep.Browser.isX5App) {
			CommonUtils.attachDoubleClickExitApp(function() {
				if (window.location.hash.indexOf("!main") > 0) {
					return true;
				}
				return false;
			});
		}
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