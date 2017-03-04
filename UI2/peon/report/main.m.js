define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var global = require("$UI/peon/js/global");

	var Model = function(){
		this.callParent();
	};
	
	// 将此页面全部代码移动到了main的第一个页面中，用来提高加载性能
	var loadMonthTotal = function(nowMonth, ctx) {
		$.ajax({
			url : global.serverDomain + 'index/monthTotal?month=' + nowMonth,
			type : 'get',
			dataType : 'jsonp',
			success : function(data) {
				if (data.success) {
					buildMonthTotalData(data, ctx);
				} else {

				}
			}
		});
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
		});
	};
	
	var buildMonthTotalData = function(data, ctx) {
		if (ctx.getElementByXid("span1")) {
			ctx.getElementByXid("span1").innerText = data.data.sgl + "万吨";
			ctx.getElementByXid("span21").innerText = data.data.xsl + "万吨";
			ctx.getElementByXid("span25").innerText = data.data.ysje + "万元";
			ctx.getElementByXid("span27").innerText = data.data.yfje + "万吨";
			ctx.getElementByXid("span109").innerText = data.data.ysk + "万元";
			ctx.getElementByXid("span210").innerText = data.data.yfk + "万元";
			ctx.getElementByXid("span18").innerText = data.data.psl + "万吨";
			ctx.getElementByXid("span22").innerText = data.data.pcl + "万吨";
		}
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
					sgl: array_element.sgl + "万吨"
				});
			}
		}
	};

	Model.prototype.modelLoad = function(event){
		var nowMonth = global.DateUtil.getNowYearMonth();
		loadMonthTotal(nowMonth, this);
		loadMonthTop10(nowMonth, this);
	};
	
	Model.prototype.button1Click = function(event){
		var indexUrl = "./buy.m.w";
		justep.Shell.showPage(require.toUrl(indexUrl));
	};

	Model.prototype.button2Click = function(event){
		var indexUrl = "./sale.m.w";
		justep.Shell.showPage(require.toUrl(indexUrl));
	};

	Model.prototype.button3Click = function(event){
		var indexUrl = "./finance.m.w";
		justep.Shell.showPage(require.toUrl(indexUrl));
	};

	Model.prototype.button4Click = function(event){
		var indexUrl = "./crush.m.w";
		justep.Shell.showPage(require.toUrl(indexUrl));
	};

	Model.prototype.button5Click = function(event){
		var indexUrl = "./inventory.m.w";
		justep.Shell.showPage(require.toUrl(indexUrl));
	};

	return Model;
});