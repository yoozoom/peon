define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};
	
	var gotoPage = function(url) {
		justep.Shell.showPage(require.toUrl(url));
	};

	// 燃料收购台账查询
	Model.prototype.li2Click = function(event){
		var url = "./fuelBuy/queryCondition.m.w";
		gotoPage(url);
	};

	// 燃料销售台账查询
	Model.prototype.li3Click = function(event){
		var url = "./fuelSale/queryCondition.m.w";
		gotoPage(url);
	};

	// 燃料库存台账查询
	Model.prototype.li5Click = function(event){
		var url = "./fuelStock/queryCondition.m.w";
		gotoPage(url);
	};

	// 破碎量查询
	Model.prototype.li1Click = function(event){
		var url = "./crush/queryCondition.m.w";
		gotoPage(url);
	};

	// 卸料量
	Model.prototype.li4Click = function(event){
		var url = "./discharge/queryCondition.m.w";
		gotoPage(url);
	};

	// 倒运量
	Model.prototype.li6Click = function(event){
		var url = "./transport/queryCondition.m.w";
		gotoPage(url);
	};

	// 收付信息
	Model.prototype.li7Click = function(event){
		var url = "./payable/queryCondition.m.w";
		gotoPage(url);
	};

	// 付款信息
	Model.prototype.li8Click = function(event){
		var url = "./payment/queryCondition.m.w";
		gotoPage(url);
	};

	// 月交接单
	Model.prototype.li10Click = function(event){
		var url = "./balance/queryCondition.m.w";
		gotoPage(url);
	};

	// 综合日报
	Model.prototype.li11Click = function(event){
		var url = "./compositeDaily/queryCondition.m.w";
		gotoPage(url);
	};

	// 盘存
	Model.prototype.li12Click = function(event){
		var url = "./inventory/queryCondition.m.w";
		gotoPage(url);
	};

	// 燃料收购品种月度汇总
	Model.prototype.li13Click = function(event){
		var url = "./fuelBuyCategoryMonth/queryCondition.m.w";
		gotoPage(url);
	};

	// 料场每日综合简报
	Model.prototype.li14Click = function(event){
		var url = "./daily/queryCondition.m.w";
		gotoPage(url);
	};

	return Model;
});