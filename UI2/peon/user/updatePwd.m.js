define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var login = require("$UI/peon/js/login");
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.updatePwdBtnClick = function(event){
		alert("修改密码！");
	};

	Model.prototype.logoutBtnClick = function(event){
		login.doLogout();
	};
	
	return Model;
});