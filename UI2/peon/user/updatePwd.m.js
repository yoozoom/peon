define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var login = require("$UI/peon/js/login");
	var global = require("$UI/peon/js/global");
	
	serverUrl = global.serverDomain;
	
	var Model = function(){
		this.callParent();
	};

	Model.prototype.updatePwdBtnClick = function(event){
		var pwdInput = this.comp("passwordInput").val();
		if (!pwdInput) {
			justep.Util.hint("请输入原密码！", {type: 'danger'});
			return;
		}
		
		var n1 = this.comp("password1").val();
		var n2 = this.comp("password3").val();
		if (!n1 || !n2 || n2 != n1) {
			justep.Util.hint("两次输入密码不一致！", {type: 'danger'});
			return;
		}
		
		if (pwdInput == n1) {
			justep.Util.hint("新密码不能与旧密码相同！", {type: 'danger'});
			return;
		}
		
		var su = localStorage.getItem(login.uk);
		var jsu = JSON.parse(su);
		if (!su || !jsu) {
			justep.Util.hint("登录信息失效，请重新登录！", {type: 'danger'});
			justep.Shell.showPage("login");
			return;
		}
		
		this.comp("passwordInput").val('');
		this.comp("password1").val('');
		this.comp("password3").val('');
		
		$.ajax({
		  url: serverUrl + '/sso/updatePwd?userName=' + jsu['userName'] + '&oldPassword=' + pwdInput + "&password=" + n1,
		  type:'post',
		  dataType:'jsonp',
		  success:function(data) {
			  console.log(data);
			  if (!data.success) {
				  justep.Util.hint(data.message, {type: 'danger'});
				  return;
			  } else {
				  justep.Util.hint("修改密码成功，请重新登录！", {type: 'danger'});
				  localStorage.removeItem(login.uk);
				  justep.Shell.showPage("login");
			  }
		  }
		})
	};

	Model.prototype.logoutBtnClick = function(event){
		var ck = confirm("确认要退出吗？", "提示");
		if (ck) {
			login.doLogout();
		}
	};
	
	return Model;
});