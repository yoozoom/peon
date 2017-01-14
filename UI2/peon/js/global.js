define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	
	window.globalServerDomain = "http://localhost:8090/peon-server/";
	
	return {
		getNowYearMonth : function(){
			var now = new Date();
			var year = now.getFullYear();
			var month = now.getMonth() + 1;
			if (month < 10) {
				month = "0" + month;
			}
			console.log(year + month);
			return (year + month);
		},
		// 全局域名
		serverDomain: window.globalServerDomain,
		// 打开蒙版
		showPopOver: function(xid, ctx) {
			var popOver2 = ctx.comp(xid);
			popOver2.show();
		},
		// 关闭蒙版
		hidePopOver: function(xid, ctx) {
			var popOver2 = ctx.comp(xid);
			popOver2.hide();
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