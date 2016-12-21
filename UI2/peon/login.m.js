define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	
	
	var Model = function(){
		this.callParent();
	};
	
	var doLogin = function(name, password) {
		if (name == "admin" && password == "1") {
			var indexUrl = "./main.m.w";
			justep.Shell.showPage(require.toUrl(indexUrl));
		} else {
			alert("用户名密码错误！");
		}
	}
	
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";
	};
	
	// 点击登入按钮
	Model.prototype.loginBtnClick = function(event){
		var name = this.comp('nameInput').val();
		var password = this.comp('passwordInput').val();
		
		doLogin(name, password);
	};
	return Model;
});