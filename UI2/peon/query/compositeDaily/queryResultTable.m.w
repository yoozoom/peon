<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:163px;left:140px;height:auto;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="rsData" idColumn="id" autoNew="true" onCustomRefresh="rsDataCustomRefresh"><column name="id" type="Long" xid="xid2"></column>
  <column name="xmbmc" type="String" xid="xid3"></column>
  <column name="zrpsl" type="Decimal" xid="xid4"></column>
  <column name="bypsl" type="Decimal" xid="xid5"></column>
  <column name="bnpsl" type="Decimal" xid="xid6"></column>
  <column name="zrpszyl" type="Decimal" xid="xid7"></column>
  <column name="bypszyl" type="Decimal" xid="xid8"></column>
  <column name="bnpszyl" type="Decimal" xid="xid9"></column>
  <column name="qrzlkc" type="Decimal" xid="xid10"></column>
  <column name="zrzlkc" type="Decimal" xid="xid11"></column>
  <column name="qrslkc" type="Decimal" xid="xid12"></column>
  <column name="zrslkc" type="Decimal" xid="xid13"></column>
  <column name="qrkczl" type="Decimal" xid="xid14"></column>
  <column name="zrkczl" type="Decimal" xid="xid15"></column>
  <column name="wjjsl" type="Decimal" xid="xid16"></column>
  <column name="zrtqqk" type="String" xid="xid17"></column>
  <column name="tqqk" type="String" xid="xid18"></column>
  <column name="zryxmc" type="String" xid="xid19"></column>
  <column name="yxmc" type="String" xid="xid20"></column>
  <column name="sbyx" type="String" xid="xid21"></column>
  <column name="dlrz" type="Decimal" xid="xid22"></column>
  <column name="pssm" type="String" xid="xid23"></column>
  <column name="rzsm" type="String" xid="xid24"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="料场综合日报"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">料场综合日报</div>  
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
    <table class="table table-bordered table-hover table-striped" component="$UI/system/components/bootstrap/table/table" xid="table1">
     <thead xid="thead1">
      <tr class="danger" xid="tr1">
       <th xid="col1"><![CDATA[项目]]></th> 
       <th xid="col15"><![CDATA[昨日实际破碎量（吨）]]></th><th xid="col2"><![CDATA[本月累积破碎量（吨）]]></th> 
  <th xid="col3"><![CDATA[本年累积破碎量（吨）]]></th>
  <th xid="col4"><![CDATA[昨日破碎料转运量（吨）]]></th>
  <th xid="col5"><![CDATA[本月累计破碎料转运量（吨）]]></th>
  <th xid="col6"><![CDATA[本年累计破碎料转运量（吨）]]></th>
  <th xid="col7"><![CDATA[前日整料库存（吨）]]></th>
  <th xid="col8"><![CDATA[昨日整料库存（吨）]]></th>
  <th xid="col9"><![CDATA[前日碎料库存（吨）（生产+格薪源）]]></th>
  <th xid="col10"><![CDATA[昨日碎料库存（吨）（生产+格薪源）]]></th>
  <th xid="col11"><![CDATA[前日库存总量（吨）（生产+格薪源）]]></th>
  <th xid="col12"><![CDATA[昨日库存总量（吨）（生产+格薪源）]]></th>
  <th xid="col13"><![CDATA[截至昨日格薪源未交接碎料量（含破碎料）（吨）]]></th>
  <th xid="col14"><![CDATA[昨日天气情况]]></th>
  <th xid="col16"><![CDATA[今日天气情况]]></th>
  <th xid="col17"><![CDATA[昨日机组运行状态]]></th>
  <th xid="col18"><![CDATA[今日机组运行状态]]></th>
  <th xid="col19"><![CDATA[昨日机器设备运行情况]]></th>
  <th xid="col20"><![CDATA[倒推第4日销售加权平均热值]]></th>
  <th xid="col21"><![CDATA[昨日破碎量低于200吨原因说明]]></th>
  <th xid="col22"><![CDATA[交接热值低于2000大卡的原因]]></th></tr> </thead> 
     <tbody class="x-list-template" xid="listTemplate1">
      <tr class="info" xid="tr2">
       <td xid="td1">
        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("xmbmc")'></div></td> 
       <td xid="td15">
       	<div component="$UI/system/components/justep/output/output" class="x-output" xid="output15" bind-ref='ref("zrpsl")'></div>
       </td><td xid="td2">
        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("bypsl")'></div></td> 
  <td xid="td3"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref='ref("bnpsl")'></div></td>
  <td xid="td4"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='ref("zrpszyl")'></div></td>
  <td xid="td5"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref='ref("bypszyl")'></div></td>
  <td xid="td6"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='ref("bnpszyl")'></div></td>
  <td xid="td7"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output7" bind-ref='ref("qrzlkc")'></div></td>
  <td xid="td8"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output8" bind-ref='ref("zrzlkc")'></div></td>
  <td xid="td9"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output9" bind-ref='ref("qrslkc")'></div></td>
  <td xid="td10"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output10" bind-ref='ref("zrslkc")'></div></td>
  <td xid="td11"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output11" bind-ref='ref("qrkczl")'></div></td>
  <td xid="td12"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output12" bind-ref='ref("zrkczl")'></div></td>
  <td xid="td13"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output13" bind-ref='ref("wjjsl")'></div></td>
  <td xid="td14"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output14" bind-ref='ref("zrtqqk")'></div></td>
  <td xid="td16"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output16" bind-ref='ref("tqqk")'></div></td>
  <td xid="td17"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output17" bind-ref='ref("zryxmc")'></div></td>
  <td xid="td18"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output18" bind-ref='ref("yxmc")'></div></td>
  <td xid="td19"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output19" bind-ref='ref("sbyx")'></div></td>
  <td xid="td20"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output20" bind-ref='ref("dlrz")'></div></td>
  <td xid="td21"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output21" bind-ref='ref("pssm")'></div></td>
  <td xid="td22"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output22" bind-ref='ref("rzsm")'></div></td></tr> </tbody> </table> </div> </div></div>
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