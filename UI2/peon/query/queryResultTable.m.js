define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var allData = require("$UI/peon/js/loadData");
	
	var isEnd = false;
	var downCount = 0;

	var Model = function(){
		this.callParent();
	};
	
	var init = function() {
		isEnd = false;
		downCount = 0;
	}

	Model.prototype.rsDataCustomRefresh = function(event){
		// 1、加载数据. 每次刷新都会触发此方法
		var url = require.toUrl("$UI/peon/mock/query/queryResult.json");
		allData.loadDataFromFile(url, event.source, true);
		init();
	};
	
	// 每次向上滑动会调用一次这个方法
	Model.prototype.scrollView1PullUp = function(event){
		if (downCount >= 5) {
			isEnd = true;
		}
		if (!isEnd) {
			this.comp("rsData").loadData({
				"rows": [{"index":"20","id":"1905412","name":"测试项目0502","itemDate":"2016-02-01","count":"1122"}]
			}, true);
			//this.comp("scrollView1").val("supportPullUpOption.noMoreLoadLabel", "2222");
			this.comp("scrollView1").noMoreLoadLabel = "加载更多...";
		} else {
			this.comp("scrollView1").noMoreLoadLabel = "已经到最后.";
		}
		
		downCount++;
	};

	return Model;
});