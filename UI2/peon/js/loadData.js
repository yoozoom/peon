define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	return {
		loadDataFromFile : function(url, objData, operation) {	
			if(!data || data.length <= 0) return;
			if (operation) { objData.clear();}
			$.ajaxSettings.async = false;
			$.getJSON(url, function(data) {
				objData.loadData(data);
			});
		},
		
		loadDataFromJson : function(objData, operation, data) {
			if(!data || data.length <= 0) return;
			if (operation) { objData.clear();}
			objData.loadData(data);
		}
	}
	
	
});