define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var allData = require("$UI/peon/js/loadData");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.rsDataCustomRefresh = function(event){
		/*
		 * 1、加载数据
		 */
		var url = require.toUrl("$UI/peon/mock/query/queryResult.json");
		allData.loadDataFromFile(url, event.source, true);
	};

	return Model;
});