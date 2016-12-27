define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	return {
		
		uk:"zpzk_login_user",
		unk:"zpzk_login_user_name",
		
		checkLogin:function(sCallback, fCallback) {
			var su = localStorage.getItem(this.uk);
			if(!su) {
				if (fCallback && typeof fCallback == 'function') fCallback();
				return false;
			}
		
			try {
				var sur = JSON.parse(su);
				var ld = this.validateUser(sur['userName'], sur['password']);
				if (ld) {
					if (sCallback && typeof sCallback == 'function') sCallback();
					return true;
				}
			} catch (e) {
			}
			if (fCallback && typeof fCallback == 'function') fCallback();
			return false;
		},
		
		validateUser : function(uname, pwd) {
			return uname == "admin" && pwd == '1';
		},
		
		doLogin:function(uname, pwd, sCallback) {
			if(!this.validateUser(uname, pwd)) {
				alert('错误！用户名或密码有误');
				return false;
			}
			
			if(sCallback && typeof sCallback == 'function') {
				sCallback();
			}
			return true;
		},
		
		doLogout:function(callback) {
			localStorage.removeItem(this.uk);
			if (callback && typeof callback == 'function') callback();
			justep.Shell.showPage("login");
		}
	}
	
	
});