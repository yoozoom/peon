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
			}
		});
		shellImpl.useDefaultExitHandler = false;
	};
	
	Model.prototype.modelLoad = function(event) {
		if (!global.Network.checkNetwork()) {
			justep.Util.hint("网络未连接，请检查网络！", {type: 'danger'});
			return
		}
		
		// 页面加载，获取保存用户名密码
		// 如果没有账号和密码则跳转至登录页面
		login.checkLogin(function() {
			console.log("to main");
			justep.Shell.showPage("main");
		}, function() {
			console.log("to login");
		});
	};

	return Model;
});