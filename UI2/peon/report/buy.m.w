<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  


<!--需要赋值的组件mainData -->
<div component="$UI/system/components/justep/data/data"
    xid="projectData"
    idColumn="fID" autoLoad="true" onCustomRefresh="projectDataCustomRefresh">
    <column label="ID" name="fID" type="String" xid="default4"/>
    <column label="项目ID" name="fValue" type="String" xid="default5"/>
    <column label="项目显示" name="fName" type="String" xid="default6"/>
    <data xid="default12">
        []
    </data>
</div>
  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad"> 
  </div>  

  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="收购量图表"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">收购量图表</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
	<div class="x-col" xid="col2">
		<select component="$UI/system/components/justep/select/select"
		    class="form-control"  optionsAutoLoad="true"  bind-optionsCaption="年度"
		    xid="yearSelect"
		    bind-optionsValue="fValue"
		    bind-optionsLabel="fName"
		    bind-options="$model.getItems('year')" onChange="yearSelectChange">
		</select>
	</div>
	
   <div class="x-col" xid="col2">
	   	<select component="$UI/system/components/justep/select/select" bind-optionsCaption="月份" 
	   		class="form-control"  xid="monthSelect"  optionsAutoLoad="true"
	   		bind-optionsValue="fValue"
		    bind-optionsLabel="fName"
		    bind-options="$model.getItems('month')"
	   		>
	   	</select>
   	</div>
   	
   <!-- 子公司下拉框 -->
   <div class="x-col" xid="col3">
   		<select component="$UI/system/components/justep/select/select" bind-optionsCaption="子公司" 
   		class="form-control" xid="companySelect" optionsAutoLoad="false" onChange="companySelectChange"
   			bind-optionsValue="fValue"
		    bind-optionsLabel="fName"
		    bind-options="$model.getItems('company')"
		>
   		</select>
   </div>
   <!-- 项目下拉框 -->
  <div class="x-col" xid="col4">
	  <select component="$UI/system/components/justep/select/select" bind-optionsCaption="项目" 
	  class="form-control" xid="projectSelect" optionsAutoLoad="false"
	  bind-optionsValue="fValue"
    	bind-optionsLabel="fName"
    	bind-options="projectData"
	  >
	  </select>
	</div>
</div>
  <div component="$UI/system/components/bootstrap/accordion/accordion" class="panel-group" xid="accordion1">
   <div class="panel panel-default" component="$UI/system/components/bootstrap/panel/panel" xid="panel2">
    <div class="panel-heading" xid="heading1">
     <h4 class="panel-title" xid="h41"><![CDATA[项目详情]]></h4> </div> 
    <div class="panel-collapse collapse in" xid="div1">
     <div class="panel-body" xid="div2" style="height:400px;"></div></div> </div> 
  </div>
  <div component="$UI/system/components/bootstrap/accordion/accordion" class="panel-group" xid="accordion2">
   <div class="panel panel-default" component="$UI/system/components/bootstrap/panel/panel" xid="panel3">
   <div class="panel-heading" xid="heading2">
    <h4 class="panel-title" xid="h42"><![CDATA[选定统计时间排行]]></h4> </div> 
   <div class="panel-collapse collapse" xid="div3">
    <div class="panel-body" xid="div4"><h4 xid="h44"><![CDATA[xxxx图-以后用图表替换掉]]></h4></div></div> </div></div></div>
  </div> 
</div>