define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	var login = require("$UI/peon/js/login");
	
	var Model = function(){
		this.callParent();
	};
	
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";
	};
	
	// 点击登入按钮
	Model.prototype.loginBtnClick = function(event){
		var name = this.comp('nameInput').val();
		var password = this.comp('passwordInput').val();
		var sn = this.comp('checkbox1').val();
		var indexUrl = require.toUrl("./main.m.w");
		login.doLogin(name, password, sn, indexUrl);
	};
	Model.prototype.modelLoad = function(event){
		// 页面加载，获取保存用户名密码
		// 如果只记录了账号则填充账号
		var un = localStorage.getItem(login.unk);
		if (un) {
			this.comp('nameInput').val(un);
			this.comp('nameInput').val('');
		}
	};
	return Model;
});