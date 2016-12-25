define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	
	
	var Model = function(){
		this.callParent();
	};
	
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";
	};
	
	// 点击登入按钮
	Model.prototype.loginBtnClick = function(event){
		var name = this.comp('nameInput').val();
		var password = this.comp('passwordInput').val();
		
		var sn = this.comp('checkbox1').val();
		var snp = this.comp('checkbox2').val();
		
		var User = function(user, pwd) {
			return {
				'userName':user,
				'passWord':pwd
			}
		};
		
		var doLogin = function(name, password) {
		
			if (name == "admin" && password == "1") {
				var user = null;
				if (snp == 1) {
					user = new User(name, password);
				}
				if (null == user && sn == 1) {
					user = new User(name, null);
				}
			
				if (user) {
					localStorage.setItem("zpzk_login_user", JSON.stringify(user));
				} else {
					localStorage.removeItem("zpzk_login_user");
				}
		
				var indexUrl = "./main.m.w";
				justep.Shell.showPage(require.toUrl(indexUrl));
			} else {
				alert("用户名密码错误！");
			}
		};
		
		doLogin(name, password);
	};
	Model.prototype.modelLoad = function(event){
		// 页面加载，获取保存用户名密码
		// 如果只记录了账号则填充账号
		var uc = localStorage.getItem("zpzk_login_user");
		if (uc) {
			this.comp('nameInput').val(uc['userName']);
			this.comp('passwordInput').val(uc['passWord']);
		}
	};
	return Model;
});