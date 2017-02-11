define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var echarts = require("$UI/peon/plugin/echarts/dist/echarts.min");
	var global = require("$UI/peon/js/global");
	
	var cwItemData = ['盘存量'];
	
	var completeCount = 0;
	var chartCount = 3;
	
	var Model = function(){
		this.callParent();
	};
	
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

	
	// 第1个图开始------------------------------------
	// 各年度线图
	var loadYearBuy = function(ctx) {
		var date = global.DateUtil.getNowYear();
		console.log(date);
		date = "2016";
		var param = {
			date : date
		};
		var url = global.serverDomain + 'pcl/eachMonth';
		var funCtx = {
			needCut: true
		};
		loadAjaxData(url, param, ctx, buildYearBuyEcharts, funCtx);
	};
	
	var buildYearBuyEcharts = function(data, ctx) {
		// 构建数据
		var years = [];
		var pcl = [];
		$.each(data, function(i, c) {
			years.push(c.yf);
			pcl.push(c.pcl);
		});
		
		var option = getYearBuyOption(years, pcl);
		console.log(option);
		buildBaseEcharts("div5", "div6", ctx, option);
	};
	
	var getYearBuyOption = function(years, pcl) {
		var colors = ['#5793f3'];
		var option = {
		    title: {
		    	text:'各月盘存量',
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
		        data:cwItemData
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
	            min: 0,
	            axisLabel: {
	                formatter: function(value) {
	                	var val100 = value / 10000;
	                	return val100 + "\n 万元";
	                }
	            }
		    },
		    series: [
		        {
		            name:cwItemData[0],
		            type:'bar',
		            data:pcl
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
		var url = global.serverDomain + 'pcl/eachProject';
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
		var pcl = [];

		$.each(data, function(i, c) {
			projects.push(c.xmbmc);
			pcl.push(c.pcl);
		});
		var option = getProjectBuyOption(projects, pcl);
		
		var totalDiv = ctx.getElementByXid('div2');
		totalDiv.style.height = chartsHeight + "px";	// 动态设置div高度
		buildBaseEcharts("div2", "div1", ctx, option);
	};
	
	//
	var getProjectBuyOption = function(projects, pcl) {
		var option = {
		    title: {
		        text: '各项目盘存量',
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		    	top: '4%',
		        data: cwItemData
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
		            name: cwItemData[0],
		            type: 'bar',
		            data: pcl
		        }
		    ]
		};
		return option;
	};
	// 第2个图结束------------------------------------
	
	// 第一个饼图
	// 第3个图开始------------------------------------
	var loadCategoryBuy = function(param, ctx) {
		var date = global.DateUtil.getNowYearMonth();
		date = "201609";
		if (!param.date) {
			param.date = date;
		}
		var url = global.serverDomain + 'pcl/eachCategory';
		var funCtx = {
			needCut: true
		};
		loadAjaxData(url, param, ctx, buildCategoryBuyEcharts, funCtx);
	};
	
	var buildCategoryBuyEcharts = function(data, ctx) {
		var chartCtx = {
			title: "盘存量占比"
		};
		buildPieEcharts(data, ctx, "div4", "div3", chartCtx);	
	};
	
	// 第3个图结束------------------------------------
	
	// ------------- common method ------------------
	// 功能ajax请求
	var loadAjaxData = function(url, param, ctx, successCallBack, funCtx) {
		$.ajax({
			url : url,
			type : 'get',
			data : param,
			dataType : 'jsonp',
			timeout : global.ajaxTimeout,
			success : function(data) {
				if (data.success) {
					if (global.checkCurrentPage(ctx, "inventory", "compoHid")) {
						successCallBack(data.data, ctx, funCtx);
					}
				} else {

				}
			},
			error : function(XHR, msg, e) {
				alert(global.SYSTEM_ERROR_MSG);
			},
			complete : function(XHR, TS){
				if (funCtx && funCtx.needCut) {
					setAndCheckComplete(ctx);
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
	
	var buildPieEcharts = function(data, ctx, pieDivId, parentDivId, chartCtx) {
		// 基础数据准备		
		var itemNames = [];
		var items = [];
		if(data && data.length > 0) {
			$.each(data, function(i, c) {
				itemNames.push(c.sjmc);
				var item = {};
				item.name = c.sjmc;
				item.value = c.pcl;
				items.push(item);
			});
		} else {
			chartCtx.title = chartCtx.title + "(无)";
		}
		var option = getPieBuyOption(itemNames, items, chartCtx);

		buildBaseEcharts(pieDivId, parentDivId, ctx, option);
	};
	
	var getPieBuyOption = function(itemNames, items, chartCtx) {
		var title = chartCtx.title;
		var option = {
		    title : {
		        text: title,
		        x:'left'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{b} : {c} ({d}%)"
		    },
		    legend: {
		        left: 'center',
		        top: '10%',
		        data: itemNames
		    },
		    series : [
		        {
		            name: '',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:items,
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};
		return option;
	};
	
	var setAndCheckComplete = function(ctx) {
		completeCount++;
		if (completeCount >= chartCount) {
			global.hidePopOver("popOver2", ctx);
		}
	};
	
	var initCxt = function(ctx) {
		completeCount = 0;
		chartCount = 3;
		ctx.comp('yearSelect').val(global.DateUtil.getNowYear());
		ctx.comp('monthSelect').val(global.DateUtil.getNowMonth());
//		ctx.comp('daysData').refreshData();
//		ctx.comp("daySelect").val(global.DateUtil.getNowDate());
	};
	
	// page load
	Model.prototype.modelLoad = function(event){
		initCxt(this);
		global.showPopOver("popOver2", this);
		loadYearBuy(this);
		var param = {};	//选择获取
		loadProjectBuy(param, this);
		loadCategoryBuy(param, this);		
	};

	Model.prototype.monthSelectChange = function(event){

	};

	Model.prototype.searchBtnClick = function(event){
		chartCount = 2;
		completeCount = 0;
		//请求数据并显示popOver组件
		global.showPopOver("popOver2", this);
		//popOver2.hide();//请求完成后隐藏popOver组件
		var param = initSearchParam(this);
		if(!param.year || !param.month) {
			alert('日期不能为空！');
			global.hidePopOver("popOver2", this);
			return;
		}
		
		refreshPageChart(param, this);
	};
	
	var refreshPageChart = function(param, ctx) {
		console.log(param);
		
		loadProjectBuy(param, ctx);
		loadCategoryBuy(param, ctx);
	};

	// 组装查询参数
	var initSearchParam = function(ctx) {
		var year = ctx.comp("yearSelect").val();
		var month = ctx.comp("monthSelect").val();

		var company = ctx.comp("companySelect").val();
		var project = ctx.comp("projectSelect").val();
		var date = year + global.DateUtil.prefixNumStr(month);
		
		return {
			year: year,
			month: month,
			gsdm: company,
			xmbdm: project,
			date: date
		};
	};

	return Model;
});