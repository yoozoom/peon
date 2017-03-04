<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  

  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:113px;left:279px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
  <!--  
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="topListData" idColumn="gsdm">
   <column name="sgl" type="Double" xid="xid1"></column>
   <column name="gsmc" type="String" xid="xid8"></column>
   <column name="gsdm" type="String" xid="xid9"></column></div> 
   -->
   </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1" wrap="false" swipe="false" slidable="false" onActiveChange="contents1ActiveChange">
   <div class="x-contents-content" xid="mainContent">
   <!--  -->
   <div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer1" src="$UI/peon/report/main.m.w" autoLoad="true"></div>
   
    <!--
   <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-content" xid="content2" style="margin:10px 10px 10px 10px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
     <div class="x-col" xid="col2">
      <img src="$UI/peon/img/logo.png" alt="" xid="image1" height="100%" style="width:100%;"></img></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="padding:5px 0px 0px 0px;margin:5px 0px 0px 0px;">
     <div class="x-col" xid="col4">
      <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="收购量" xid="button1" style="height:100%;width:100%;" onClick="button1Click">
       <i xid="i4"></i>
       <span xid="span4"></span></a> </div> 
     <div class="x-col" xid="col5">
      <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="销售" xid="button2" style="height:100%;width:100%;" onClick="button2Click">
       <i xid="i5"></i>
       <span xid="span5"></span></a> </div> 
     <div class="x-col" xid="col6">
      <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="财务" xid="button3" style="height:100%;width:100%;" onClick="button3Click">
       <i xid="i6"></i>
       <span xid="span6"></span></a> </div> 
     <div class="x-col" xid="col7">
      <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="破碎" xid="button4" style="height:100%;width:100%;" onClick="button4Click">
       <i xid="i7"></i>
       <span xid="span7"></span></a> </div> 
     <div class="x-col" xid="col8">
      <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="盘存" xid="button5" style="height:100%;width:100%;" onClick="button5Click">
       <i xid="i8"></i>
       <span xid="span8"></span></a> </div> </div> 
    <hr xid="hr1" style="padding:15px 0px 0px 0px;margin:15px 0px 0px 0px;"></hr>
    <h4 xid="h41">总汇信息</h4>
    <table class="table table-bordered table-hover table-striped" component="$UI/system/components/bootstrap/table/table" xid="table1">
     <tbody class="x-list-template" xid="listTemplate2">
      <tr xid="tr4">
       <td xid="td2">
        <span xid="span17">本月收购总量</span>
        <span xid="span41"></span></td> 
       <td xid="td3">
        <span xid="span20">本月销售总量</span>
        <span xid="span21"></span></td> </tr> 
      <tr xid="tr5">
       <td xid="td11">
        <span xid="span24">本月应收金额</span>
        <span xid="span25"></span></td> 
       <td xid="td12">
        <span xid="span26">本月应付金额</span>
        <span xid="span27"></span></td> </tr> 
      <tr xid="tr14">
       <td xid="td12" style="background-color:white;">
        <span xid="span107">本月已收总量</span>
        <span xid="span109"></span></td> 
       <td xid="td13">
        <span xid="span200">本月已付总量</span>
        <span xid="span210"></span></td> </tr> 
      <tr xid="tr1">
       <td xid="td4">
        <span xid="span14">本月破碎总量</span>
        <span xid="span18"></span></td> 
       <td xid="td1">
        <span xid="span23">本月盘存总量</span>
        <span xid="span22"></span></td> </tr> </tbody> </table> 
    <hr xid="hr2"></hr>
    <h4 xid="h42">本月收购排行榜TOP10</h4>
    <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="topListData">
     <ul class="x-list-template" xid="listTemplateUl1">
      <li xid="li1">
       <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
        <div class="x-col" xid="col10">
         <div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='ref("gsmc")'></div></div> 
        <div class="x-col" xid="col12">
         <div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" bind-ref='ref("sgl")'></div></div> </div> </li> </ul> </div> 
    <hr xid="hr3"></hr></div> </div>
    -->
    </div><div class="x-contents-content" xid="queryContent"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer2" src="$UI/peon/query/queryList.m.w" autoLoad="true"></div></div>
  <div class="x-contents-content" xid="pwdContent"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer3" src="$UI/peon/user/updatePwd.m.w" autoLoad="true"></div></div>
  </div>
  <input type="hidden" value="" xid="appMain"></input></div>
  <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-justified" tabbed="true" xid="buttonGroup1" style="height:100%;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="charBtn" label="统计图表" target="mainContent">
   <i xid="i1"></i>
   <span xid="span1">统计图表</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="报表查询" xid="queryBtn" target="queryContent">
   <i xid="i2"></i>
   <span xid="span2">报表查询</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="密码修改" xid="pwdBtn" target="pwdContent">
   <i xid="i3"></i>
   <span xid="span3">密码修改</span></a></div></div></div>
</div>