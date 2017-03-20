define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	//var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	
	var global = require("$UI/peon/js/global");
	var login = require("$UI/peon/js/login");
	
	var Model = function(){
		this.callParent();
	};
	
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";
	};
	
	// 点击登入按钮
	Model.prototype.loginBtnClick = function(event) {
		if (!global.Network.checkNetwork()) {
			justep.Util.hint("网络未连接，请检查网络！", {type: 'danger', parent: this.getRootNode()});
			return
		}
		
		var name = this.comp('nameInput').val();
		var password = this.comp('passwordInput').val();
		
		if (!name || !password) {
			justep.Util.hint("账号密码不能为空！", {type: 'danger', parent: this.getRootNode()});
			return
		}
		
		global.showPopOver("popOver2", this);
		
		var sn = this.comp('checkbox1').val();

		login.doLogin(name, password, this, function() {
			var user = {};
			user.userName = name;
			user.password = password;
			localStorage.setItem(login.uk, JSON.stringify(user));
			
			// 账户，退出登录后根据此来填充默认
			if (sn == 1) {
				localStorage.setItem(login.unk, name);
			} else {
				localStorage.removeItem(login.unk);
			}
			var params = {
				from : "login"
			};
			justep.Shell.showPage("main", params);
		});
	};
	Model.prototype.modelLoad = function(event){
		// 页面加载，获取保存用户名密码
		// 如果只记录了账号则填充账号
		var un = localStorage.getItem(login.unk);
		if (un) {
			this.comp('nameInput').val(un);
			this.comp('nameInput').val('');
		}
		global.hidePopOver("popOver2", this);
	};

	Model.prototype.modelModelConstruct = function(event){
		global.showPopOver("popOver2", this);
	};

	return Model;
});