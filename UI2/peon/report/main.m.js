define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var global = require("$UI/peon/js/global");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.button1Click = function(event){
		var indexUrl = "./buy.m.w";
		justep.Shell.showPage(require.toUrl(indexUrl));
	};
	
	var loadMonthTotal = function(nowMonth, ctx) {
		$.ajax({
			url : global.serverDomain + 'index/monthTotal?month=' + nowMonth,
			type : 'get',
			dataType : 'jsonp',
			success : function(data) {
				console.log(data);
				if (data.success) {
					buildMonthTotalData(data, ctx);
				} else {

				}
			}
		})
	};
	

	var loadMonthTop10 = function(nowMonth, ctx) {
		$.ajax({
			url : global.serverDomain + 'index/monthTop10?month=' + nowMonth,
			type : 'get',
			dataType : 'jsonp',
			success : function(data) {
				if (data.success) {
					console.log(data);
					buildMonthTopData(data, ctx);
				} else {

				}
			}
		})
	}
	
	var buildMonthTotalData = function(data, ctx) {
		ctx.getElementByXid("span1").innerText = data.data.sgl;
		ctx.getElementByXid("span21").innerText = data.data.xsl;
		ctx.getElementByXid("span25").innerText = data.data.ysje;
		ctx.getElementByXid("span27").innerText = data.data.yfje;
		ctx.getElementByXid("span109").innerText = data.data.ysk;
		ctx.getElementByXid("span210").innerText = data.data.yfk;
		ctx.getElementByXid("span18").innerText = data.data.psl;
		ctx.getElementByXid("span22").innerText = data.data.pcl;
	};
	
	var buildMonthTopData = function(data, ctx) {
		var topListData = ctx.comp("topListData");
		var sourceData = data.data;
		if (sourceData) {
			for (var int = 0; int < sourceData.length; int++) {
				var array_element = sourceData[int];
				topListData.add({
					gsdm: array_element.gsdm,
					gsmc: array_element.gsmc,
					sgl: array_element.sgl
				});
			}
		}
	};

	Model.prototype.modelLoad = function(event){
		var nowMonth = global.DateUtil.getNowYearMonth();
		nowMonth = "201609";
		loadMonthTotal(nowMonth, this);
		loadMonthTop10(nowMonth, this);
	};

	Model.prototype.modelModelConstructDone = function(event){

	};

	Model.prototype.modelActive = function(event){

	};

	return Model;
});