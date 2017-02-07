define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var echarts = require("$UI/peon/plugin/echarts/dist/echarts.min");
	var global = require("$UI/peon/js/global");
	
	var sjlItemData = ['销售量','加权水分', '热值单价'];
	var completeCount = 0;
	var chartCount = 1;
	
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
		var param = {};
		var url = global.serverDomain + 'sjl/eachYear';
		var funCtx = {
			needCut: true
		};
		loadAjaxData(url, param, ctx, buildYearBuyEcharts, funCtx);
	};
	
	var buildYearBuyEcharts = function(data, ctx) {
		// 构建数据
		var years = [];
		var sjl = []; var maxsjl = null;
		var sjsf = []; var maxsjsf = null;
		var sjrz = []; var maxsjrz = null;
		$.each(data, function(i, c) {
			years.push(c.nf);
			sjl.push(c.sjl);
			sjsf.push(c.sjsf);
			sjrz.push(c.sjrz);
			
			maxsjl = global.NumUtil.getMax(c.sjl, maxsjl);
			maxsjsf = global.NumUtil.getMax(c.sjsf, maxsjsf);
			maxsjrz = global.NumUtil.getMax(c.sjrz, maxsjrz);
		});
		
		var ysjl = (maxsjl * 1.3);
		var ysjsf = (maxsjsf * 1.3);
		var ysjrz = (maxsjrz * 1.3);
		var option = getYearBuyOption(years, sjl, sjsf, sjrz, ysjl, ysjsf, ysjrz);

		buildBaseEcharts("div5", "div6", ctx, option);
	};
	
	var getYearBuyOption = function(years, sjl, sjsf, sjrz, ysjl, ysjsf, ysjrz) {
		var colors = ['#5793f3', '#d14a61', '#675bba'];
		var option = {
		    title: {
		    	text:'各年度燃料销售量质价',
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid: {
		    	top: "20%",
		        right: '26%',
		        bottom: '10%'
		    },
		    legend: {
		    	top: '6%',
		        data:sjlItemData
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
		    yAxis: [
		        {
		            type: 'value',
		            name: sjlItemData[0],
		            min: 0,
		            max: ysjl,
		            position: 'left',
		            //nameLocation: 'middle',
		            axisLine: {
		                lineStyle: {
		                    color: colors[0]
		                }
		            },
		            axisLabel: {
		                formatter: function (value, index) {
						    return value + "\n 万元";
						}
		            }
		        },
		        {
		            type: 'value',
		            name: sjlItemData[2],
		            min: 0,
		            max: ysjrz,
		            position: 'right',
		            //nameLocation: 'middle',
		            offset: 50,
		            axisLine: {
		                lineStyle: {
		                    color: colors[1]
		                }
		            },
		            axisLabel: {
		                formatter: function (value, index) {
						    return value + "\n 元/kCal";
						}
		            }
		        },
		        {
		            type: 'value',
		            name: sjlItemData[1],
		            min: 0,
		            max: ysjsf,
		            position: 'right',
		            //nameLocation: 'middle',
		            axisLine: {
		                lineStyle: {
		                    color: colors[2]
		                }
		            },
		            axisLabel: {
		                formatter: '{value} %'
		            }
		        }
		    ],
		    series: [
		        {
		            name:sjlItemData[0],
		            type:'bar',
		            data: sjl
		        },
		        {
		            name:sjlItemData[1],
		            type:'bar',
		            yAxisIndex: 2,
		            data:sjsf
		        },
		        {
		            name:sjlItemData[2],
		            type:'bar',
		            yAxisIndex: 1,
		            data:sjrz
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
		var url = global.serverDomain + 'sjl/eachProject';
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
		var sjl = [];
		var sjsf = []; 
		var sjrz = []; 
		$.each(data, function(i, c) {
			projects.push(c.xmbmc);
			sjl.push(c.sjl);
			sjsf.push(c.sjsf);
			sjrz.push(c.sjrz);
		});
		var option = getProjectBuyOption(projects, sjl, sjsf, sjrz);
		
		var totalDiv = ctx.getElementByXid('div2');
		totalDiv.style.height = chartsHeight + "px";	// 动态设置div高度
		buildBaseEcharts("div2", "div1", ctx, option);
	};
	
	//
	var getProjectBuyOption = function(projects, sjl, sjsf, sjrz) {
		var option = {
		    title: {
		        text: '各项目销售量',
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		    	top: '4%',
		        data: sjlItemData
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
		            name: sjlItemData[0],
		            type: 'bar',
		            data: sjl
		        },
		        {
		            name: sjlItemData[1],
		            type: 'bar',
		            data: sjsf
		        },
		        {
		            name: sjlItemData[2],
		            type: 'bar',
		            data: sjrz
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
		var url = global.serverDomain + 'sjl/eachCategory';
		var funCtx = {
			needCut: true
		};
		loadAjaxData(url, param, ctx, buildCategoryBuyEcharts, funCtx);
	};
	
	var buildCategoryBuyEcharts = function(data, ctx) {
		var chartCtx = {
			title: "燃料品种销售量"
		};
		buildPieEcharts(data, ctx, "div4", "div3", chartCtx);	
	};
	
	// 第3个图结束------------------------------------
	
	// 第2个饼图
	// 第4个图开始------------------------------------
	var loadNameBuy = function(param, ctx) {
		var date = global.DateUtil.getNowYearMonth();
		date = "201609";
		if (!param.date) {
			param.date = date;
		}
		var url = global.serverDomain + 'sjl/eachName';
		var funCtx = {
			needCut: true
		};
		loadAjaxData(url, param, ctx, buildNameBuyEcharts, funCtx);
	};
	
	var buildNameBuyEcharts = function(data, ctx) {
		var chartCtx = {
			title: "燃料类别销售量"
		};
		buildPieEcharts(data, ctx, "div7", "div3", chartCtx);
	};
	// 第4个图结束------------------------------------
	
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
					if (global.checkCurrentPage(ctx, "sale", "compoHid")) {
						successCallBack(data.data, ctx, funCtx);
					}
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
	
	var buildPieEcharts = function(data, ctx, pieDivId, parentDivId, chartCtx) {
		// 基础数据准备		
		var itemNames = [];
		var items = [];
		$.each(data, function(i, c) {
			itemNames.push(c.sjmc);
			var item = {};
			item.name = c.sjmc;
			item.value = c.sjl;
			items.push(item);
		});
		
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
	
	// page load
	Model.prototype.modelLoad = function(event){
		global.showPopOver("popOver2", this);
		loadYearBuy(this);
		var param = {};	//选择获取
		loadProjectBuy(param, this);
		loadCategoryBuy(param, this);
		loadNameBuy(param, this);
		
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
		chartCount = 3;
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
		loadCategoryBuy(param, ctx);
		loadNameBuy(param, ctx);
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