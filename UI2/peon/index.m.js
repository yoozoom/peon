define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	var login = require("$UI/peon/js/login");
	
	var Model = function(){
		this.callParent();
		
		var shellImpl = new ShellImpl(this, {
			"contentsXid" : "pages",
			"pageMappings" : {
				"login" : {
					url : require.toUrl('login.m.w')
				},
				"main" : {
					url : require.toUrl('main.m.w')
				},
				"reportIndex" : {
					url : require.toUrl('./report/index.m.w')
				},
				"class" : {
					url : require.toUrl('./class.w')
				},
				"detail" : {
					url : require.toUrl('./detail.w')
				},
				"search" : {
					url : require.toUrl('./search.w')
				},
				"cart" : {
					url : require.toUrl('./cart.w')
				},
				"order" : {
					url : require.toUrl('./order.w')
				},
				"success" : {
					url : require.toUrl('./success.w')
				}
			}
		});
		shellImpl.useDefaultExitHandler = false;
	};
	
	Model.prototype.modelLoad = function(event){
		// 页面加载，获取保存用户名密码
		// 如果没有账号和密码则跳转至登录页面
		var logined = login.checkLogin();
		if (logined) {
			justep.Shell.showPage("main");
			console.log("jump to main!");
		} else {
			justep.Shell.showPage("login");
		}
		
	};

	return Model;
});