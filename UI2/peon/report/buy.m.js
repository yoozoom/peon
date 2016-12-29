define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

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
	};

	return Model;
});