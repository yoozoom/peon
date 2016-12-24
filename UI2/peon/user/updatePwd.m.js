define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.updatePwdBtnClick = function(event){
		alert("修改密码！");
	};

	Model.prototype.logoutBtnClick = function(event){
		alert("退出登录！");
	};
	
	return Model;
});