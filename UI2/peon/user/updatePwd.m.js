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
			alert("请输入原密码");
			return;
		}
		
		var n1 = this.comp("password1").val();
		var n2 = this.comp("password3").val();
		if (!n1 || !n2 || n2 != n1) {
			alert("两次输入密码不一致");
			return;
		}
		
		if (pwdInput == n1) {
			alert("新密码不能与旧密码相同");
			return;
		}
		
		var su = localStorage.getItem(login.uk);
		var jsu = JSON.parse(su);
		if (!su || !jsu) {
			alert("登录信息失效，请重新登录");
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
				  alert(data.message);
				  return;
			  } else {
				  alert('修改密码成功，请重新登录');
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