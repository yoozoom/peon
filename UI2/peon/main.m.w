<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  

  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:113px;left:279px;" onActive="modelActive" onLoad="modelLoad"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents1">
   <div class="x-contents-content" xid="mainContent"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer3" src="$UI/peon/report/main.m.w"></div></div><div class="x-contents-content" xid="queryContent"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer1" src="$UI/peon/query/queryList.m.w"></div></div>
  <div class="x-contents-content" xid="pwdContent"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer2" src="$UI/peon/user/updatePwd.m.w"></div></div>
  </div></div>
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