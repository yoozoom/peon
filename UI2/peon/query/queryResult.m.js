define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var allData = require("$UI/peon/js/loadData");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.rsDataCustomRefresh = function(event){
		// 1、加载数据. 每次刷新都会触发此方法
		var url = require.toUrl("$UI/peon/mock/query/queryResult.json");
		allData.loadDataFromFile(url, event.source, true);
	};

	// 每次向上滑动会调用一次这个方法
	Model.prototype.scrollView1PullUp = function(event){
		this.comp("rsData").loadData({
			"rows": [{"index":"20","id":"1905412","name":"测试项目0502","itemDate":"2016-02-01","count":"1122"}]
		}, true);
	};

	return Model;
});