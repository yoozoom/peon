define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("$UI/system/lib/cordova/cordova");
	require("cordova!cordova-plugin-screen-orientation");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	var echarts = require("$UI/peon/echarts/dist/echarts.min");
	
	var Model = function(){
		this.callParent();
	};
	
	//alert(1);
	// 强制横屏幕
	//cordova.plugins.screenorientation.setOrientation('landscape');
	//alert(2);
	
	Model.prototype.modelLoad = function(event) {
	
		//cordova.plugins.screenorientation.setOrientation('landscape');
	
		var eConsole = function(param) {
			//justep.Shell.showPage("yearDetail");
			cordova.plugins.screenorientation.setOrientation('landscape');
		}
		
		var colors = ['#5793f3', '#d14a61', '#675bba'];
		
		option = {
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
		
	    var myChart = echarts.init(this.getElementByXid('total'));
	    myChart.setOption(option);
	    myChart.on("click", eConsole);
	};
	
	return Model;
});