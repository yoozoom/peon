define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var global = require("$UI/peon/js/global");
		
	return {
		
		uk:"zpzk_login_user",
		unk:"zpzk_login_user_name",

		validateUser : function(user, sCallback, fCallback) {
			$.ajax({
				url : global.serverDomain + 'sso/check?userName='
						+ user['userName'] + '&password=' + user['password'],
				type : 'get',
				dataType : 'jsonp',
				timeout : 2000,
				success : function(data) {
					console.log(data);
					if (data.success) {
						if (sCallback && typeof sCallback == 'function') {
							sCallback(data);
						}
					} else {
						if (fCallback && typeof fCallback == 'function') {
							fCallback(data);
						}
					}
				},
				error : function(data) {
					justep.Util.hint("系统异常, 请稍后再试！", {type: 'danger', parent: user.ctx.getRootNode()});
					justep.Shell.showPage("login");
				},
				complete : function(XHR, TS) {
					if (user.ctx) {
						global.hidePopOver("popOver2", user.ctx);
					}
				}
			});
		},
		
		checkLogin:function(sCallback, fCallback) {
			var su = localStorage.getItem(this.uk);
			if(!su) {
				if (fCallback && typeof fCallback == 'function') {
					fCallback();
				}
				return;
			}
			this.validateUser(JSON.parse(su), sCallback, fCallback);
		},
		
		doLogin:function(uname, pwd, ctx, sCallback) {
			var usr = {
				'userName':uname,
				'password':pwd,
				'ctx': ctx
			};
			this.validateUser(usr, sCallback, function(data) {
				justep.Util.hint(data.message, {type: 'danger', parent: ctx.getRootNode()});
			});
		},
		
		doLogout:function(callback) {
			localStorage.removeItem(this.uk);
			if (callback && typeof callback == 'function') {
				callback();
			}
			justep.Shell.showPage("login");
		}
	};
	
});