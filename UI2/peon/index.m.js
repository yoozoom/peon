define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	
	var global = require("$UI/peon/js/global");
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
				"index" : {
					url : require.toUrl('index.m.w')
				}
//				,
//				"reportIndex" : {
//					url : require.toUrl('./report/index.m.w')
//				},
//				"class" : {
//					url : require.toUrl('./class.w')
//				},
//				"detail" : {
//					url : require.toUrl('./detail.w')
//				},
//				"search" : {
//					url : require.toUrl('./search.w')
//				},
//				"cart" : {
//					url : require.toUrl('./cart.w')
//				},
//				"order" : {
//					url : require.toUrl('./order.w')
//				},
//				"success" : {
//					url : require.toUrl('./success.w')
//				}
			}
		});
		shellImpl.useDefaultExitHandler = false;
	};
	
	Model.prototype.modelLoad = function(event) {
		if (!global.Network.checkNetwork()) {
			alert('网络未连接，请检查网络');
			justep.Shell.showPage("login");
			return
		}
		
		// 页面加载，获取保存用户名密码
		// 如果没有账号和密码则跳转至登录页面
		login.checkLogin(function() {
			console.log("to main");
//			var indexUrl = "./main.m.w";
//			justep.Shell.showPage(require.toUrl(indexUrl));
//			justep.Shell.loadPage("main");
			justep.Shell.showPage("main");
		}, function() {
			console.log("to login");
			justep.Shell.showPage("login");
//			var indexUrl = "./login.m.w";
//			justep.Shell.showPage(require.toUrl(indexUrl));
		});
	};

	return Model;
});