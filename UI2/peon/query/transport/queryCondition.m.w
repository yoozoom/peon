<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:17px;left:60px;height:auto;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="rlTypeData" idColumn="name"><column label="" name="name" type="String" xid="xid1"></column>
  <column name="value" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;name&quot;:&quot;整料&quot;,&quot;value&quot;:&quot;1&quot;},{&quot;name&quot;:&quot;碎料&quot;,&quot;value&quot;:&quot;2&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="gbTypeData" idColumn="value"><column name="name" type="String" xid="xid3"></column>
  <column name="value" type="Integer" xid="xid4"></column>
  <data xid="default2">[{&quot;name&quot;:&quot;收购&quot;,&quot;value&quot;:1},{&quot;name&quot;:&quot;直接销售&quot;,&quot;value&quot;:2}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="paramData" idColumn="id"><column name="id" type="String" xid="xid5"></column>
  <column name="startDate" type="Date" xid="xid6"></column>
  <column name="endDate" type="Date" xid="xid7"></column></div>
  <div component="$UI/system/components/justep/data/data" xid="companyData" idColumn="fID" autoLoad="true" onCustomRefresh="companyDataCustomRefresh">
   <column label="ID" name="fID" type="String" xid="default7"></column>
   <column label="公司ID" name="fValue" type="String" xid="default8"></column>
   <column label="公司显示" name="fName" type="String" xid="default9"></column>
   <data xid="default11">[]</data></div>
  <div component="$UI/system/components/justep/data/data" xid="projectData" idColumn="fID" autoLoad="true" onCustomRefresh="projectDataCustomRefresh">
   <column label="ID" name="fID" type="String" xid="default4"></column>
   <column label="项目ID" name="fValue" type="String" xid="default5"></column>
   <column label="项目显示" name="fName" type="String" xid="default6"></column>
   <data xid="default12">[]</data></div>
  <div component="$UI/system/components/justep/data/data" xid="stockgroundData" idColumn="fID" autoLoad="true" onCustomRefresh="stockgroundDataCustomRefresh">
   <column label="ID" name="fID" type="String" xid="column3"></column>
   <column label="项目ID" name="fValue" type="String" xid="column1"></column>
   <column label="项目显示" name="fName" type="String" xid="column2"></column>
   <data xid="default3">[]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="查询条件"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">查询条件</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1">
  <div class="list-group" xid="listGroup2">
    
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6">
   <label class="x-label" xid="label3"><![CDATA[子公司]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="companySelect" bind-options="companyData" bind-optionsValue="fValue" bind-optionsLabel="fName" bind-optionsCaption="子公司" optionsAutoLoad="false" onChange="companySelectChange"></select></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit7">
   <label class="x-label" xid="label11"><![CDATA[项目部]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="projectSelect" bind-options="projectData" bind-optionsValue="fValue" bind-optionsLabel="fName" bind-optionsCaption="项目部" optionsAutoLoad="false" onChange="projectSelectChange"></select></div>
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
   <label class="x-label" xid="label8"><![CDATA[料场名称]]></label>
	<select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="stockgroundSelect" bind-options="stockgroundData" bind-optionsValue="fValue" bind-optionsLabel="fName" bind-optionsCaption="料场名称" optionsAutoLoad="false"></select></div>
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelInput1">
   <label class="x-label" xid="label1"><![CDATA[时间]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input1" bind-ref='$model.paramData.ref("startDate")'></input></div><div xid="div5">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="查询" xid="queryBtn" onClick="queryBtnClick">
     <i xid="i1"></i>
     <span xid="span6">查询</span></a> </div>
  
  
  
  
  </div></div>
  </div> 
</div>