<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:163px;left:140px;height:auto;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="rsData" idColumn="id" autoNew="true" onCustomRefresh="rsDataCustomRefresh"><column name="id" type="Long" xid="xid2"></column>
  <column name="xmbmc" type="String" xid="xid3"></column>
  <column name="tqqk" type="String" xid="xid4"></column>
  <column name="psl" type="Decimal" xid="xid5"></column>
  <column name="zlkc" type="Decimal" xid="xid6"></column>
  <column name="slkc" type="Decimal" xid="xid7"></column>
  <column name="kczl" type="Decimal" xid="xid8"></column>
  <column name="wjjsl" type="Decimal" xid="xid9"></column>
  <column name="yxmc" type="String" xid="xid10"></column>
  <column name="pssm" type="String" xid="xid11"></column>
  <column name="dlrz" type="Decimal" xid="xid12"></column>
  <column name="rzsm" type="String" xid="xid13"></column>
  <column name="sbyx" type="String" xid="xid14"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="料场每日综合简报"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="gotoBack" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">料场每日综合简报</div>  
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
    <table class="table table-bordered table-hover table-striped" component="$UI/system/components/bootstrap/table/table" xid="table1" style="width:2000px">
     <thead xid="thead1">
      <tr class="danger" xid="tr1">
       <th xid="col1" style="width:80px"><![CDATA[项目]]></th> 
       <th xid="col15" style="width:80px"><![CDATA[天气情况]]></th><th xid="col2"><![CDATA[破碎量(吨）]]></th> 
  <th xid="col3"><![CDATA[整料库存（吨）]]></th>
  <th xid="col4"><![CDATA[碎料库存（吨）]]></th>
  <th xid="col5"><![CDATA[库存总量（吨）]]></th>
  <th xid="col6"><![CDATA[未交接碎料（吨）]]></th>
  <th xid="col7" style="width:120px"><![CDATA[机组状态]]></th>
  <th xid="col8"><![CDATA[破碎量低于200吨说明]]></th>
  <th xid="col9"><![CDATA[加权平均热值结算金额（元）]]></th>
  <th xid="col10"><![CDATA[热值低于2000大卡说明]]></th>
  <th xid="col11" style="width:120px"><![CDATA[设备运行情况]]></th></tr> </thead> 
     <tbody class="x-list-template" xid="listTemplate1">
      <tr class="info" xid="tr2">
       <td xid="td1">
        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("xmbmc")'></div></td> 
       <td xid="td15">
       	<div component="$UI/system/components/justep/output/output" class="x-output" xid="output15" bind-ref='ref("tqqk")'></div>
       </td><td xid="td2">
        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("psl")'></div></td> 
  <td xid="td3"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref='ref("zlkc")'></div></td>
  <td xid="td4"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='ref("slkc")'></div></td>
  <td xid="td5"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref='ref("kczl")'></div></td>
  <td xid="td6"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='ref("wjjsl")'></div></td>
  <td xid="td7"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output7" bind-ref='ref("yxmc")'></div></td>
  <td xid="td8"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output8" bind-ref='ref("pssm")'></div></td>
  <td xid="td9"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output9" bind-ref='ref("dlrz")'></div></td>
  <td xid="td10"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output10" bind-ref='ref("rzsm")'></div></td>
  <td xid="td11"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output11" bind-ref='ref("sbyx")'></div></td></tr> </tbody> </table> </div> </div></div>
   <div class="x-content-center x-pull-up" xid="div3">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div></div>
  </div> 
    <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver"
    xid="popOver2" opacity="0.9" dismissible="true"> 
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