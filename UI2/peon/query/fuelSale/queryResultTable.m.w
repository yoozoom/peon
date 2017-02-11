<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:163px;left:140px;height:auto;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="rsData" idColumn="id" autoNew="true" onCustomRefresh="rsDataCustomRefresh"><column name="id" type="Long" xid="xid2"></column>
  <column name="gbsj" type="String" xid="xid1"></column>
  <column name="khxm" type="String" xid="xid3"></column>
  <column name="gblx" type="String" xid="xid19"></column>
  <column name="hyd" type="String" xid="xid5"></column>
  <column name="rlmc" type="String" xid="xid6"></column>
  <column name="rllb" type="String" xid="xid7"></column>
  <column name="jz" type="Double" xid="xid8"></column>
  <column name="kz" type="String" xid="xid9"></column>
  <column name="schf" type="String" xid="xid10"></column>
  <column name="scsf" type="String" xid="xid11"></column>
  <column name="dlrz" type="String" xid="xid12"></column>
  <column name="jszl" type="String" xid="xid13"></column>
  <column name="sjdj" type="String" xid="xid14"></column>
  <column name="jsje" type="String" xid="xid15"></column>
  <column name="gsmc" type="String" xid="xid16"></column>
  <column name="xmbmc" type="String" xid="xid17"></column>
  <column name="lcmc" type="String" xid="xid18"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="燃料销售台账查询"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">燃料销售台账查询</div>  
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
       <th xid="col1"><![CDATA[过磅时间]]></th> 
       <th xid="col2"><![CDATA[客户名称]]></th> 
  <th xid="col3"><![CDATA[过磅类型]]></th>
  <th xid="col5"><![CDATA[燃料名称]]></th>
  <th xid="col6"><![CDATA[燃料类型]]></th>
  <th xid="col7"><![CDATA[过磅重量]]></th>
  <th xid="col8"><![CDATA[扣杂]]></th>
  <th xid="col9"><![CDATA[实测灰分]]></th>
  <th xid="col10"><![CDATA[实测水分]]></th>
  <th xid="col11"><![CDATA[单位热值]]></th>
  <th xid="col12"><![CDATA[结算重量]]></th>
  <th xid="col13"><![CDATA[结算单价]]></th>
  <th xid="col14"><![CDATA[结算金额]]></th></tr> </thead> 
     <tbody class="x-list-template" xid="listTemplate1">
      <tr class="info" xid="tr2">
       <td xid="td1">
        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("gbsj")'></div></td> 
       <td xid="td2">
        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("khxm")'></div></td> 
  <td xid="td3"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref='ref("gblx")'></div></td>
  <td xid="td5"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output5" bind-ref='ref("rlmc")'></div></td>
  <td xid="td6"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='ref("rllb")'></div></td>
  <td xid="td7"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output7" bind-ref='ref("jz")'></div></td>
  <td xid="td8"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output8" bind-ref='ref("kz")'></div></td>
  <td xid="td9"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output9" bind-ref='ref("schf")'></div></td>
  <td xid="td10"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output10" bind-ref='ref("scsf")'></div></td>
  <td xid="td11"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output11" bind-ref='ref("dlrz")'></div></td>
  <td xid="td12"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output12" bind-ref='ref("jszl")'></div></td>
  <td xid="td13"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output13" bind-ref='ref("sjdj")'></div></td>
  <td xid="td14"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output14" bind-ref='ref("jsje")'></div></td></tr> </tbody> </table> </div> </div></div>
   <div class="x-content-center x-pull-up" xid="div3">
    <span class="x-pull-up-label" xid="span2">加载更多...</span></div> </div>
    <input type="hidden" value="fuelBuy" xid="compoHid"></input>
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