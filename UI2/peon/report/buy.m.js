define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var echarts = require("$UI/peon/echarts/dist/echarts.min");

	serverUrl = 'http://localhost:8090';
	
	var json = {
	    	year:function() {
	    		var date = new Date();
	    		var year = date.getFullYear();
	    		var years = [];
	    		for (var i = 0; i < 5; i++) {
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
	    return json[type];
	}

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
		var y = this.comp("companySelect").val();
		if (y) {
			$.ajax({
				url:serverUrl + '/project/queryProject?gsdm=' + y,
				type:'get',
				dataType:'jsonp',
				success:function(data) {
					$.each(data, function(i, c) {
						projects.push({'fValue':c.xmbdm, 'fName':c.xmbmc});
					})
					datadm.loadData(projects);
				}
			})
		}else {
			datadm.loadData(projects);
		}
	}
	
	Model.prototype.companyDataCustomRefresh = function(event){
		$.ajax({
			url:serverUrl + '/company/queryCompany',
			type:'get',
			dataType:'jsonp',
			success:function(data) {
				var companys = []; 
				$.each(data, function(i, c) {
					companys.push({'fValue':c.gsdm, 'fName':c.gsmc});
				})
				var data = event.source;
				data.loadData(companys);
			}
		})
	};
	
	var initProjectDetail = function(jqe) {
		var totalDiv = jqe.getElementByXid('div2');
		var parentDiv = jqe.getElementByXid('div1');
	
		//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
		var resizeContainer = function () {
		    totalDiv.style.width = parentDiv.clientWidth+'px';
		    totalDiv.style.height = parentDiv.clientHeight+'px';
		};
		
		//设置容器高宽
		resizeContainer();
	
		var colors = ['#5793f3', '#d14a61', '#675bba'];
		
		var option = {
		    color: colors,
		    title: {
		    	text:'各年度燃料收购量质价',
		    	subtext: '量质价',
		    	x:'center'
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid: {
		        right: '20%'
		    },
		    toolbox: {
		        feature: {
		            dataView: {show: true, readOnly: false},
		            restore: {show: true},
		            saveAsImage: {show: true}
		        }
		    },
		    legend: {
		    	left:'left',
		        data:['收购量','加权水分', '热值单价']
		    },
		    xAxis: [
		        {
		            type: 'category',
		            axisTick: {
		                alignWithLabel: true
		            },
		            data: ['2014年','2015年','2016年']
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
		            name: '收购量',
		            min: 0,
		            max: 1500,
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
		            max: 0.15,
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
		            max: 60,
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
		            name:'收购量',
		            type:'bar',
		            data:[763.3, 595.6, 773.54]
		        },
		        {
		            name:'加权水分',
		            type:'bar',
		            yAxisIndex: 2,
		            data:[36.66, 33.95, 35.63]
		        },
		        {
		            name:'热值单价',
		            type:'bar',
		            yAxisIndex: 1,
		            data:[0.131, 0.122, 0.141]
		        }
		    ]
		};
	    var myChart = echarts.init(totalDiv);
	    myChart.setOption(option);
	    
	    //用于使chart自适应高度和宽度
		window.onresize = function() {
		    //重置容器高宽
		    resizeContainer();
		    myChart.resize();
		};
	}
	
	Model.prototype.modelLoad = function(event){
		
		this.comp('companyData').refreshData();
		initProjectDetail(this);
		
	};

	return Model;
});