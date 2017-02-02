define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var echarts = require("$UI/peon/plugin/echarts/dist/echarts.min");
	var global = require("$UI/peon/js/global");
	
	var cwyiItemData = ['破碎量'];
	
	var completeCount = 0;
	var chartCount = 1;
	
	var Model = function(){
		this.callParent();
	};
	
	// 下拉框开始 -------------------------------------------
	Model.prototype.getItems = function(type){
		if ("year" == type) {
			return global.DateUtil.getSelectCompYearData();
		} else if ("month" == type) {
			return global.DateUtil.getSelectCompMonthData();
		}
		return [];
	};

	Model.prototype.yearSelectChange = function(event){
		this.comp('monthSelect').val('');
	};
	
	Model.prototype.companySelectChange = function(event){
		this.comp('projectSelect').val('');
		this.comp('projectData').refreshData();
	};

	Model.prototype.projectDataCustomRefresh = function(event){
		var projects = [];
		var datadm = event.source;
		var company = this.comp("companySelect").val();
		var param = {
			gsdm: company
		};
		
		var url = global.serverDomain + 'project/queryProject';
		var funCtx = {
			event: event
		};
		
		if (company) {
			loadAjaxData(url, param, this, buildProjectData, funCtx);
		} else {
			datadm.loadData(projects);
		}
	};
	
	var buildProjectData = function (data, ctx, funCtx) {
		var event = funCtx.event;
		var datadm = event.source;
		var projects = [];
		$.each(data, function(i, c) {
			projects.push({'fValue':c.xmbdm, 'fName':c.xmbmc});
		});
		datadm.loadData(projects);
	};
	
	Model.prototype.companyDataCustomRefresh = function(event){		
		var url = global.serverDomain + '/company/queryCompany';
		var param = {};
		var funCtx = {
			event: event
		};
		loadAjaxData(url, param, this, buildCompanyData, funCtx);
	};
	
	var buildCompanyData = function(data, ctx, funCtx) {
		var event = funCtx.event;
		var companys = []; 
		$.each(data, function(i, c) {
			companys.push({'fValue':c.gsdm, 'fName':c.gsmc});
		});
		var source = event.source;
		source.loadData(companys);
	};
	// 下拉框结束-------------------------------------------

	
	// 第1个图开始------------------------------------
	// 各年度线图
	var loadYearBuy = function(ctx) {
		var param = {};
		var url = global.serverDomain + 'psl/eachYear';
		var funCtx = {
			needCut: true
		};
		loadAjaxData(url, param, ctx, buildYearBuyEcharts, funCtx);
	};
	
	var buildYearBuyEcharts = function(data, ctx) {
		// 构建数据
		var years = [];
		var psl = [];

		$.each(data, function(i, c) {
			years.push(c.nf);
			psl.push(c.psl);
		});
		
		var option = getYearBuyOption(years, psl);
		buildBaseEcharts("div5", "div6", ctx, option);
	};
	
	var getYearBuyOption = function(years, psl) {
		var colors = ['#5793f3'];
		var option = {
		    title: {
		    	text:'各年度破碎量',
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid: {
		    	top: "20%",
		        bottom: '10%',
		        left:'13%'
		    },
		    legend: {
		    	top: '6%',
		        data: cwyiItemData
		    },
		    xAxis: [
		        {
		            type: 'category',
		            axisTick: {
		                alignWithLabel: true
		            },
		            data: years
		        }
		    ],
		    yAxis: {
	            type: 'value',
	            name: '金额',
	            min: 0
		    },
		    series: [
		        {
		            name:cwyiItemData[0],
		            type:'bar',
		            data:psl
		        }
		    ]
		};
		return option;
	};
	// 第1个图结束------------------------------------
	
	// 各项目线图
	// 第2个图开始------------------------------------
	var loadProjectBuy = function(param, ctx) {
		var date = global.DateUtil.getNowYearMonth();
		date = "201609";
		if (!param.date) {
			param.date = date;
		}
		var url = global.serverDomain + 'psl/eachProject';
		var funCtx = {
			needCut: true
		};
		loadAjaxData(url, param, ctx, buildProjectBuyEcharts, funCtx);
	};
	
	var buildProjectBuyEcharts = function(data, ctx) {
		// 基础数据准备
		var dataSize = data.length;
		var chartsHeight = dataSize * 19;
		
		var projects = [];
		var psl = [];

		$.each(data, function(i, c) {
			projects.push(c.xmbmc);
			psl.push(c.psl);
		});
		var option = getProjectBuyOption(projects, psl);
		
		var totalDiv = ctx.getElementByXid('div2');
		totalDiv.style.height = chartsHeight + "px";	// 动态设置div高度
		buildBaseEcharts("div2", "div1", ctx, option);
	};
	
	//
	var getProjectBuyOption = function(projects, psl) {
		var option = {
		    title: {
		        text: '各项目破碎量',
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		    	top: '4%',
		        data: cwyiItemData
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: {
		        type: 'value',
		        position: 'top',
		        boundaryGap: [0, 0.01]
		    },
		    yAxis: {
		        type: 'category',
		        data: projects
		    },
		    series: [
		        {
		            name: cwyiItemData[0],
		            type: 'bar',
		            data: psl
		        }
		    ]
		};
		return option;
	};
	// 第2个图结束------------------------------------
	
	// ------------- common method ------------------
	// 功能ajax请求
	var loadAjaxData = function(url, param, ctx, successCallBack, funCtx) {
		$.ajax({
			url : url,
			type : 'get',
			data : param,
			dataType : 'jsonp',
			success : function(data) {
				if (funCtx && funCtx.needCut) {
					setAndCheckComplete(ctx);
				}
				if (data.success) {
					successCallBack(data.data, ctx, funCtx);
				} else {

				}
			}
		});	
	};
	
	// 柱状图
	var buildBaseEcharts = function(eid, pid, ctx, option) {
		// 目标div
		var totalDiv = ctx.getElementByXid(eid);
		var parentDiv = ctx.getElementByXid(pid);
	
		//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
		var resizeContainer = function () {
		    totalDiv.style.width = parentDiv.clientWidth+'px';
		    totalDiv.style.height = parentDiv.clientHeight+'px';
		};
		
		//设置容器高宽
		resizeContainer();
		
		var myChart = echarts.init(totalDiv);
		myChart.setOption(option);
	    
		//用于使chart自适应高度和宽度
		window.onresize = function() {
		    //重置容器高宽
		    resizeContainer();
		    myChart.resize();
		};
	};
	
	var setAndCheckComplete = function(ctx) {
		completeCount++;
		if (completeCount >= chartCount) {
			global.hidePopOver("popOver2", ctx);
		}
	};
	
	// page load
	Model.prototype.modelLoad = function(event){
		global.showPopOver("popOver2", this);
		loadYearBuy(this);
		var param = {};	//选择获取
		loadProjectBuy(param, this);	
	};

	Model.prototype.monthSelectChange = function(event){
		var year = this.comp('yearSelect').val();
		var month = this.comp('monthSelect').val();
		if (!year || !month) {
			return;
		}
		this.comp('daysData').refreshData();
	};

	Model.prototype.searchBtnClick = function(event){
		chartCount = 1;
		completeCount = 0;
		//请求数据并显示popOver组件
		global.showPopOver("popOver2", this);
		//popOver2.hide();//请求完成后隐藏popOver组件
		var param = initSearchParam(this);
		
		refreshPageChart(param, this);
	};
	
	var refreshPageChart = function(param, ctx) {
		console.log(param);
		
		loadProjectBuy(param, ctx);
	};

	// 组装查询参数
	var initSearchParam = function(ctx) {
		var year = ctx.comp("yearSelect").val();
		var month = ctx.comp("monthSelect").val();
		var day = ctx.comp("daySelect").val();
		var company = ctx.comp("companySelect").val();
		var project = ctx.comp("projectSelect").val();
		var date = year + global.DateUtil.prefixNumStr(month) + global.DateUtil.prefixNumStr(day);
		
		return {
			year: year,
			month: month,
			day: day,
			gsdm: company,
			xmbdm: project,
			date: date
		};
	};

	Model.prototype.daysDataCustomRefresh = function(event){
		var data = event.source;
		var year = this.comp('yearSelect').val();
		var month = this.comp('monthSelect').val();
		if (!year || !month) {
			return;
		}
		var days = global.DateUtil.getDaysByYearAndMonth(year, month-1);
		var resultData = [];
		for(var i = 1; i <= days; i++) {
			resultData.push({
				name: i,
				value: i
			});
		}
		
		data.loadData(resultData);
	};

	return Model;
});