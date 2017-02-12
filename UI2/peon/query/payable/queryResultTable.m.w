<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:163px;left:140px;height:auto;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="rsData" idColumn="id" autoNew="true" onCustomRefresh="rsDataCustomRefresh"><column name="id" type="Long" xid="xid2"></column>
  <column name="gsmc" type="String" xid="xid1"></column>
  <column name="xmbmc" type="String" xid="xid3"></column>
  <column name="lcmc" type="String" xid="xid4"></column>
  <column name="jsmc" type="String" xid="xid5"></column>
  <column name="khxm" type="String" xid="xid6"></column>
  <column name="khbh" type="String" xid="xid7"></column>
  <column name="ys" type="Decimal" xid="xid8"></column>
  <column name="yis" type="Decimal" xid="xid9"></column>
  <column name="ws" type="Decimal" xid="xid10"></column>
  <column name="yf" type="Decimal" xid="xid11"></column>
  <column name="yif" type="Decimal" xid="xid12"></column>
  <column name="wf" type="Decimal" xid="xid13"></column>
  <column name="tzje" type="Decimal" xid="xid14"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="收付信息查询"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">收付信息查询</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C759D8609A1000011C45BEA0F2D01CF7" style="bottom: 0px;"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1" onPullUp="scrollView1PullUp" autoPullUp="false">
   <div class="x-content-center x-pull-down container" xid="div1">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"></i>
    <span class="x-pull-down-label" xid="span1">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div2"><div component="$UI/system/components/fragment/list/listTable" xid="listTable1">
   <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="rsData" limit="20">
    <table class="table table-bordered table-hover table-striped" component="$UI/system/components/bootstrap/table/table" xid="table1" style="width:1600px;">
     <thead xid="thead1">
      <tr class="danger" xid="tr1">
       <th xid="col1"><![CDATA[子公司]]></th> 
       <th xid="col15"><![CDATA[项目部]]></th><th xid="col2"><![CDATA[料场名称]]></th> 
  <th xid="col3"><![CDATA[结算类型]]></th>
  <th xid="col4"><![CDATA[客户名称]]></th>
  <th xid="col5"><![CDATA[客户编号]]></th>
  <th xid="col6"><![CDATA[应收(元)]]></th>
  <th xid="col7"><![CDATA[已收(元)]]></th>
  <th xid="col8"><![CDATA[未收(元)]]></th>
  <th xid="col9"><![CDATA[应付(元)]]></th>
  <th xid="col10"><![CDATA[已付(元)]]></th>
  <th xid="col11"><![CDATA[未付(元)]]></th>
  <th xid="col12"><![CDATA[调整金额(元)]]></th>
  </tr> </thead> 
     <tbody class="x-list-template" xid="listTemplate1">
      <tr class="info" xid="tr2">
       <td xid="td1">
        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("gsmc")'></div></td> 
       <td xid="td15">
       	<div component="$UI/system/components/justep/output/output" class="x-output" xid="output15" bind-ref='ref("xmbmc")'></div>
       </td><td xid="td2">
        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("lcmc")'></div></td> 
  <td xid="td3"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref='ref("jsmc")'></div></td>
  <td xid="td4"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='ref("khxm")'></div></td>
  <td xid="td5"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref='ref("khbh")'></div></td>
  <td xid="td6"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='ref("ys")'></div></td>
  <td xid="td7"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output7" bind-ref='ref("yis")'></div></td>
  <td xid="td8"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output8" bind-ref='ref("ws")'></div></td>
  <td xid="td9"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output9" bind-ref='ref("yf")'></div></td>
  <td xid="td10"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output10" bind-ref='ref("yif")'></div></td>
  <td xid="td11"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output11" bind-ref='ref("wf")'></div></td>
  <td xid="td12"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output12" bind-ref='ref("tzje")'></div></td>
  </tr> </tbody> </table> </div> </div></div>
   <div class="x-content-center x-pull-up" xid="div3">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div>
    <input type="hidden" value="payable" xid="compoHid"></input>
    </div>
  </div> 
    <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver"
    xid="popOver2" opacity="0.9" dismissible="false"> 
    <div class="x-popOver-overlay" xid="div11"/>  
    <div class="x-popOver-content text-center" xid="div12"> 
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon"
        label="button" xid="button2" icon="icon-loading-a"> 
        <i xid="i2" class="icon-loading-a" style="font-size:40px;"/>  
        <span xid="span12"/> 
      </a>  
      <div xid="div13" bind-text="&quot;正在加载中，请稍候...&quot;"/> 
    </div> 
  </div>
</div>