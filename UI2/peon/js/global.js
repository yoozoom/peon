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
		serverDomain: window.globalServerDomain
	}	
});