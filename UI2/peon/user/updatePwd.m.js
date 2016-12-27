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
		var ck = confirm("确认要退出吗？");
		if (ck) {
			login.doLogout();
		}
	};
	
	return Model;
});