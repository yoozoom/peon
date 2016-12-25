define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	return {
		
		checkLogin:function() {
			var su = localStorage.getItem("zpzk_login_user");
			if(!su) return false;
			
			try {
				var sur = JSON.parse(su);
				return this.validateUser(sur['userName'], sur['password']);
			} catch (e) {
				return false;
			}
		},
		
		validateUser : function(uname, pwd) {
			return uname == "admin" && pwd == '1';
		},
		
		doLogin:function(uname, pwd, sn, returnUrl) {
			if(!this.validateUser(uname, pwd)) {
				alert('错误！用户名或密码有误');
				return;
			}
			var user = {};
			user.userName = uname;
			user.password = pwd;
			localStorage.setItem("zpzk_login_user", JSON.stringify(user));
			
			// 账户，退出登录后根据此来填充默认
			if (sn == 1) {
				localStorage.setItem("zpzk_login_user_name", name);
			}
			
			if(returnUrl) {
				justep.Shell.showPage(require.toUrl(returnUrl));
			}
		},
		
		doLogout:function() {
			localStorage.removeItem("zpzk_login_user");
			justep.Shell.closePage("main");
			justep.Shell.showPage("login");
		}
	}
	
	
});