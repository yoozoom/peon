define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	window.globalServerDomain = "http://30.34.201.249:8090/peon-server/";
	// window.globalServerDomain = "http://192.168.0.110:8090/peon-server/";

	return {
		// 全局域名
		serverDomain : window.globalServerDomain,
		ajaxTimeout : 3 * 60 * 1000,	// ajax请求超时时间，默认3分钟
		// 常量
		SYSTEM_ERROR_MSG : "网络异常",
		// date工具类
		DateUtil : {
			getNowYear : function() {
				var now = new Date();
				return now.getFullYear();	
			},
			getNowMonth : function() {
				var now = new Date();
				return now.getMonth() + 1;
			},
			getNowDate : function() {
				var now = new Date();
				return now.getDate();
			},
			getNowYearMonth : function() {
				var now = new Date();
				var year = now.getFullYear();
				var month = now.getMonth() + 1;
				if (month < 10) {
					month = "0" + month;
				}
				return (year + month);
			},
			prefixNumStr : function(month) {
				if (month === 0) {
					return "";
				} else if (month < 10) {
					return "0" + month;
				}
				return month;
			},
			getDaysByYearAndMonth : function(year, month) {
				return 32 - new Date(year, month, 32).getDate();
			},
			getSelectCompDays : function(days) {
				var data = [];
				for (var i = 1; i <= days; i++) {
					data.push({
						'fValue' : i,
						'fName' : i
					});
				}
				return data;
			},
			getSelectCompYearData : function() {
				var date = new Date();
				var year = date.getFullYear();
				var years = [];
				for (var i = 0; i < 8; i++) {
					years.push({
						'fValue' : year - i,
						'fName' : year - i
					});
				}
				return years;
			},
			getSelectCompMonthData : function() {
				var months = [];
				for (var i = 1; i <= 12; i++) {
					months.push({
						'fValue' : i,
						'fName' : i
					});
				}
				return months;
			}
		},
		// 打开蒙版
		showPopOver : function(xid, ctx) {
			var popOver2 = ctx.comp(xid);
			if (popOver2) {
				popOver2.show();
			}
		},
		// 关闭蒙版
		hidePopOver : function(xid, ctx) {
			var popOver2 = ctx.comp(xid);
			if (popOver2) {
				popOver2.hide();
			}
		},
		// 检查是否是当前page
		checkCurrentPage: function(ctx, value, key) {
			if(!key) {
				key = "compoHid";
			}
			if (ctx.getElementByXid(key)) {
				return ctx.getElementByXid(key).value == value;
			} else {
				return false;
			}
		},
		// Num相关工具类
		NumUtil : {
			// 获取较大的值
			getMax : function(item, max) {
				if (!max) {
					max = item;
				}
				if (max < item) {
					max = item;
				}
				return max;
			}
		}
	};
});