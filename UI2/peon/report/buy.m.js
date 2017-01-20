define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var echarts = require("$UI/peon/plugin/echarts/dist/echarts.min");
	var global = require("$UI/peon/js/global");
	
	var sglItemData = ['收购量','加权水分', '热值单价'];
	
	var json = {
	    	year:function() {
	    		var date = new Date();
	    		var year = date.getFullYear();
	    		var years = [];
	    		for (var i = 0; i < 8; i++) {
	    			years.push({'fValue':year - i, 'fName':year - i});
	    		}
	    		return years;
	    	}(),
	        month:function() {
	        	var months = [];
	        	for (var i = 1; i <= 12; i++) {
	        		months.push({'fValue':i, 'fName':i});
	    		}
	        	return months;
	        }()
	    };

	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.getItems = function(type){
		if ("year" == type) {
			global.DateUtil.getSelectCompYearData();
		} else if ("month" == type) {
			global.DateUtil.getSelectCompMonthData();
		}
		return json[type];
	};

	Model.prototype.yearSelectChange = function(event){
		this.comp('monthSelect').val('');
	};
	
	Model.prototype.companySelectChange = function(event){
		this.comp('projectSelect').val('');
		this.comp('projectData').refreshData();
	};

	Model.prototype.projectDataCustomRefresh = function(event){
		var datadm = event.source;
		var projects = [];
		var company = this.comp("companySelect").val();
		var param = {
			gsdm: company
		};
		if (company) {
			$.ajax({
				url: global.serverDomain + 'project/queryProject',
				type: 'get',
				data: param,
				dataType: 'jsonp',
				success: function(data) {
					$.each(data, function(i, c) {
						projects.push({'fValue':c.xmbdm, 'fName':c.xmbmc});
					});
					datadm.loadData(projects);
				}
			});
		} else {
			datadm.loadData(projects);
		}
	};
	
	Model.prototype.companyDataCustomRefresh = function(event){
		$.ajax({
			url: global.serverDomain + '/company/queryCompany',
			type: 'get',
			dataType:'jsonp',
			success: function(data) {
				var companys = []; 
				$.each(data, function(i, c) {
					companys.push({'fValue':c.gsdm, 'fName':c.gsmc});
				});
				var source = event.source;
				source.loadData(companys);
			}
		});
	};

	
	// 第1个图开始------------------------------------
	// 各年度线图
	var loadYearBuy = function(ctx) {
		var param = {};
		var url = global.serverDomain + 'sgl/eachYear';
		loadAjaxData(url, param, ctx, buildYearBuyEcharts);
	};
	
	var buildYearBuyEcharts = function(data, ctx) {
		// 构建数据
		var years = [];
		var sjl = []; var maxsjl = null;
		var sjsf = []; var maxsjsf = null;
		var sjrz = []; var maxsjrz = null;
		$.each(data, function(i, c) {
			years.push(c.sjmc);
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
		    	text:'各年度燃料收购量质价',
		    	x:'center'
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid: {
		        right: '20%'
		    },
		    legend: {
		    	left:'left',
		        data:sglItemData
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
		            name: '收购量',
		            min: 0,
		            max: ysjl,
		            position: 'left',
		            nameLocation: 'middle',
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
		            name: '热值单价',
		            min: 0,
		            max: ysjrz,
		            position: 'right',
		            nameLocation: 'middle',
		            offset: 30,
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
		            name: '加权水分',
		            min: 0,
		            max: ysjsf,
		            position: 'right',
		            nameLocation: 'middle',
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
		            name:sglItemData[0],
		            type:'bar',
		            data: sjl
		        },
		        {
		            name:sglItemData[1],
		            type:'bar',
		            yAxisIndex: 2,
		            data:sjsf
		        },
		        {
		            name:sglItemData[2],
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

		var url = global.serverDomain + 'sgl/eachProject?date=' + date;
		loadAjaxData(url, param, ctx, buildProjectBuyEcharts);
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
		        text: '各项目收购量',
		    },
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		        data: sglItemData
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
		            name: sglItemData[0],
		            type: 'bar',
		            data: sjl
		        },
		        {
		            name: sglItemData[1],
		            type: 'bar',
		            data: sjsf
		        },
		        {
		            name: sglItemData[2],
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

		var url = global.serverDomain + 'sgl/eachCategory?date=' + date;
		loadAjaxData(url, param, ctx, buildCategoryBuyEcharts);
	};
	
	var buildCategoryBuyEcharts = function(data, ctx) {
		buildPieEcharts(data, ctx, "div4", "div3");	
	};
	
	// 第3个图结束------------------------------------
	
	// 第2个饼图
	// 第4个图开始------------------------------------
	var loadNameBuy = function(param, ctx) {
		var date = global.DateUtil.getNowYearMonth();
		date = "201609";

		var url = global.serverDomain + 'sgl/eachName?date=' + date;
		loadAjaxData(url, param, ctx, buildNameBuyEcharts);
	};
	
	var buildNameBuyEcharts = function(data, ctx) {
		buildPieEcharts(data, ctx, "div7", "div3");
	};
	// 第4个图结束------------------------------------
	
	// ------------- common method ------------------
	// 获取比较大值
	var getMax = function(item, max) {
		if (!max) {
			max = item;
		} 
		if (max < item) {
			max = item;
		}
		return max;
	};
	
	// 功能ajax请求
	var loadAjaxData = function(url, param, ctx, successCallBack) {
		$.ajax({
			url : url,
			type : 'get',
			data : param,
			dataType : 'jsonp',
			success : function(data) {
				setAndCheckComplete(ctx);
				if (data.success) {
					successCallBack(data.data, ctx);
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
	
	var buildPieEcharts = function(data, ctx, pieDivId, parentDivId) {
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
		
		var option = getPieBuyOption(itemNames, items);

		buildBaseEcharts(pieDivId, parentDivId, ctx, option);
	};
	
	var getPieBuyOption = function(itemNames, items) {
		var option = {
		    title : {
		        text: '饼图1',
		        x:'left'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        //orient: 'vertical',
		        left: 'center',
		        data: itemNames
		    },
		    series : [
		        {
		            name: '访问来源',
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
	
	var completeCount = 0;
	var chartCount = 1;
	
	var setAndCheckComplete = function(ctx) {
		completeCount++;
		//console.log(completeCount);
		if (completeCount >= chartCount) {
			global.hidePopOver("popOver2", ctx);
		}
	};
	
	// page load
	Model.prototype.modelLoad = function(event){
		global.showPopOver("popOver2", this);
		loadYearBuy(this);
		var param = {};	//选择获取
		//loadProjectBuy(param, this);
		//loadCategoryBuy(param, this);
		//loadNameBuy(param, this);
		
		
//		this.comp('companyData').refreshData();

//		$.ajax({
//			url:serverUrl + '/report/sglCharts',
//			type:'get',
//			dataType:'jsonp',
//			success:function(data) {
//				var sjmc = [], sjl = [], sjsf = [], sjrz = [];
//				$.each(data, function(i, c) {
//					sjmc.push(c.sjmc);
//					sjl.push(c.sjl);
//					sjsf.push(c.sjsf);
//					sjrz.push(c.sjrz);
//				})
//				
//				var totalDiv = this.getElementByXid('div2');
//				var parentDiv = this.getElementByXid('div1');
//			
//				//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
//				var resizeContainer = function () {
//				    totalDiv.style.width = parentDiv.clientWidth+'px';
//				    totalDiv.style.height = parentDiv.clientHeight+'px';
//				};
//				
//				//设置容器高宽
//				resizeContainer();
//			
//				var colors = ['#5793f3', '#d14a61', '#675bba'];
//				
//				var option = {
//				    color: colors,
//				    title: {
//				    	text:'各年度燃料收购量质价',
//				    	subtext: '量质价',
//				    	x:'center'
//				    },
//				    tooltip: {
//				        trigger: 'axis'
//				    },
//				    grid: {
//				        right: '20%'
//				    },
//				    toolbox: {
//				        feature: {
//				            dataView: {show: true, readOnly: false},
//				            restore: {show: true},
//				            saveAsImage: {show: true}
//				        }
//				    },
//				    legend: {
//				    	left:'left',
//				        data:['收购量','加权水分', '热值单价']
//				    },
//				    xAxis: [
//				        {
//				            type: 'category',
//				            axisTick: {
//				                alignWithLabel: true
//				            },
//				            data: sjmc
//				        }
//				    ],
//				    yAxis: [
//				        {
//				            type: 'value',
//				            name: '收购量',
//				            min: 0,
//				            max: 1500,
//				            position: 'left',
//				            nameLocation: 'middle',
//				            axisLine: {
//				                lineStyle: {
//				                    color: colors[0]
//				                }
//				            },
//				            axisLabel: {
//				                formatter: function (value, index) {
//								    return value + "\n 万元";
//								}
//				            }
//				        },
//				        {
//				            type: 'value',
//				            name: '热值单价',
//				            min: 0,
//				            max: 0.15,
//				            position: 'right',
//				            nameLocation: 'middle',
//				            offset: 30,
//				            axisLine: {
//				                lineStyle: {
//				                    color: colors[1]
//				                }
//				            },
//				            axisLabel: {
//				                formatter: function (value, index) {
//								    return value + "\n 元/kCal";
//								}
//				            }
//				        },
//				        {
//				            type: 'value',
//				            name: '加权水分',
//				            min: 0,
//				            max: 60,
//				            position: 'right',
//				            nameLocation: 'middle',
//				            axisLine: {
//				                lineStyle: {
//				                    color: colors[2]
//				                }
//				            },
//				            axisLabel: {
//				                formatter: '{value} %'
//				            }
//				        }
//				    ],
//				    series: [
//				        {
//				            name:'收购量',
//				            type:'bar',
//				            data: sjl
//				        },
//				        {
//				            name:'加权水分',
//				            type:'bar',
//				            yAxisIndex: 2,
//				            data:sjsf
//				        },
//				        {
//				            name:'热值单价',
//				            type:'bar',
//				            yAxisIndex: 1,
//				            data:sjrz
//				        }
//				    ]
//				};
//			    var myChart = echarts.init(totalDiv);
//			    myChart.setOption(option);
//			    
//			    //用于使chart自适应高度和宽度
//				window.onresize = function() {
//				    //重置容器高宽
//				    resizeContainer();
//				    myChart.resize();
//				};
//				
//			}
//		})
		
	};

	Model.prototype.monthSelectChange = function(event){
		var year = this.comp('yearSelect').val();
		var month = this.comp('monthSelect').val();
		//console.log("year " + year + " month " + month);
		if (!year || !month) {
			return;
		}
		var ym = year + "" + month;
		var days = global.DateUtil.getDaysByYearAndMonth(year, month-1);
		//console.log(days);
		this.comp('daysData').refreshData();
	};

	Model.prototype.searchBtnClick = function(event){
		//请求数据并显示popOver组件
		global.showPopOver("popOver2", this);
		//popOver2.hide();//请求完成后隐藏popOver组件
		var param = initSearchParam(this);
	};

	// 组装查询参数
	var initSearchParam = function(ctx) {
		var year = ctx.comp("yearSelect").val();
		var month = ctx.comp("monthSelect").val();
		var day = ctx.comp("").val();
		var company = ctx.comp("companySelect").val();
		var project = ctx.comp("projectSelect").val();
		
		return {
			year: year,
			month: month,
			day: day,
			company: company,
			project: project
		};
	};

	Model.prototype.daysDataCustomRefresh = function(event){
		var data = event.source;
		var year = this.comp('yearSelect').val();
		var month = this.comp('monthSelect').val();
		console.log("year " + year + " month " + month);
		if (!year || !month) {
			return;
		}
		var ym = year + "" + month;
		var days = global.DateUtil.getDaysByYearAndMonth(year, month-1);
		console.log(days);
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