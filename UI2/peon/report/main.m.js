define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	// 为了全局引用js对象而强加在jquery上的方法。和其他区别，以peon开头
	$.peonGotoChart = function(param) {
		var url = require.toUrl("./year/yearTotal.m.w");
		justep.Shell.showPage(url);
	}

	Model.prototype.modelLoad = function(event) {
		
		var html = "<a href='javascript:void(0)' onclick='$.peonGotoChart()'>第一季度报表</a>" + 
					"</br>" + 
					"<a href='javascript:void(0)' onclick='$.peonGotoChart()'>第二季度报表</a>"
					
		this.getElementByXid("mainContent").innerHTML = html;
	}

	return Model;
});