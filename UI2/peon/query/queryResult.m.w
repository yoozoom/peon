<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="rsData" idColumn="id" onCustomRefresh="rsDataCustomRefresh"><column label="序号" name="index" type="Integer" xid="xid1"></column>
  <column label="id" name="id" type="Integer" xid="xid2"></column>
  <column label="项目" name="name" type="String" xid="xid3"></column>
  <column label="日期" name="itemDate" type="Date" xid="xid4"></column>
  <column label="重量" name="count" type="String" xid="xid5"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="查询结果"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">查询结果</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C759CBEF16E00001D0FEB67064A015E6" style="bottom: 0px;"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1" onPullUp="scrollView1PullUp">
   <div class="x-content-center x-pull-down container" xid="div1">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"></i>
    <span class="x-pull-down-label" xid="span1">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div2"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="rsData" limit="20">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("id")'></div></div>
   <div class="x-col" xid="col2"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("name")'></div></div>
   <div class="x-col" xid="col3"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref='ref("itemDate")'></div></div>
  <div class="x-col" xid="col4"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='ref("count")'></div></div></div></li></ul> </div></div>
   <div class="x-content-center x-pull-up" xid="div3">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div></div>
  </div> 
</div>