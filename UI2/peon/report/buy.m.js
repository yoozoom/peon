define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var echarts = require("$UI/peon/echarts/dist/echarts.min");

	var json = {
	    	year:[
		        {"fValue":"2016","fName":"2016"},
		        {"fValue":"2015","fName":"2015"},
		        {"fValue":"2014","fName":"2014"},
		        {"fValue":"2013","fName":"2013"},
		        {"fValue":"2012","fName":"2012"}
	        ],
	        month:[
	            {"fValue":"1","fName":"1"},
	            {"fValue":"2","fName":"2"},
	            {"fValue":"3","fName":"3"},
	            {"fValue":"4","fName":"4"},
	            {"fValue":"5","fName":"5"},
	            {"fValue":"6","fName":"6"},
	            {"fValue":"7","fName":"7"},
	            {"fValue":"8","fName":"8"},
	            {"fValue":"9","fName":"9"},
	            {"fValue":"10","fName":"10"},
	            {"fValue":"11","fName":"11"},
	            {"fValue":"12","fName":"12"}
	        ],
	        company:[
                {"fValue":"0001","fName":"公司1"},
                {"fValue":"0002","fName":"公司2"},
                {"fValue":"0003","fName":"公司3"}
	        ],
	        project:[
	            {"fValue":"1001","fName":"1-项目1", fCompany:'0001'},
	            {"fValue":"1002","fName":"1-项目2", fCompany:'0001'},
	            {"fValue":"2001","fName":"2-项目1", fCompany:'0002'},
	            {"fValue":"2002","fName":"2-项目2", fCompany:'0002'},
	            {"fValue":"3001","fName":"3-项目1", fCompany:'0003'},
	            {"fValue":"3002","fName":"3-项目2", fCompany:'0003'}
	        ]
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
		this.comp('projectData').refreshData();
		this.comp('projectSelect').val('');
	};

	Model.prototype.projectDataCustomRefresh = function(event){
		var m = [];
		var y = this.comp("companySelect").val();
		if (y) {
			$.each(json.project, function(i, e) {
				if (y == e.fCompany) {
					m.push(e);
				}
			})
		}
		var data = event.source;
		data.loadData(m);
	}

	Model.prototype.modelLoad = function(event){
		var totalDiv = this.getElementByXid('div2');
		var parentDiv = this.getElementByXid('div1');
	
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
	};

	return Model;
});