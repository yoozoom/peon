define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	serverUrl = 'http://localhost:8090';
	
	return {
		
		uk:"zpzk_login_user",
		unk:"zpzk_login_user_name",
		
		checkLogin:function(sCallback, fCallback) {
			var su = localStorage.getItem(this.uk);
			if(!su) {
				if (fCallback && typeof fCallback == 'function') fCallback();
				return;
			}
			
			this.validateUser(JSON.parse(su), sCallback, fCallback);
		},
		
		validateUser : function(user, sCallback, fCallback) {
			$.ajax({
				  url: serverUrl + '/sso/check?userName=' + user['userName'] + '&password=' + user['password'],
				  type:'get',
				  dataType:'jsonp',
				  success:function(data) {
					  console.log(data);
					  if(data.success) {
						  if (sCallback && typeof sCallback == 'function')
							  sCallback(data);
					  } else {
						  if (fCallback && typeof fCallback == 'function')
							  fCallback(data);
					  }
				  },
				  error:function() {
					  console.log('系统异常');
					  alert('系统异常, 请稍后再试');
				  }
				})
		},
		
		doLogin:function(uname, pwd, sCallback) {
			var usr = {
				'userName':uname,
				'password':pwd
			};
			this.validateUser(usr, sCallback, function(data) {
				alert(data.message);
			});
		},
		
		doLogout:function(callback) {
			localStorage.removeItem(this.uk);
			if (callback && typeof callback == 'function') callback();
			justep.Shell.showPage("login");
		}
	}
	
	
});