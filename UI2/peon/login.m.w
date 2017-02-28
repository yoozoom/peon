<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:258px;top:435px;" onLoad="modelLoad" onModelConstruct="modelModelConstruct"/> 

  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1"><span xid="span1" style="font-weight:normal;"><![CDATA[登录]]></span></div>
   <div class="x-titlebar-right reverse" xid="right1"></div>
  </div></div>
   <div class="x-panel-content" xid="content1"><div class="list-group" xid="listGroup2">
   <div xid="div1" class="list-group-item">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="height:10%;">
   <div class="x-col" xid="col4"></div></div><img src="$UI/peon/img/logo.png" alt="" xid="image1" height="100%" style="width:100%;"></img>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="height:10%;">
   <div class="x-col" xid="col2"></div>
   </div>
  </div><div xid="div2" class="list-group-item"><div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup1">
   <span class="input-group-addon" xid="span3"><![CDATA[账号]]></span><input type="text" class="form-control" component="$UI/system/components/justep/input/input" xid="nameInput" placeHolder="请输入账号"></input></div>
  </div>
  <div xid="div3" class="list-group-item"><div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup2">
   <span class="input-group-addon" xid="span4"><![CDATA[密码]]></span>
  <input component="$UI/system/components/justep/input/password" class="form-control" xid="passwordInput" placeHolder="请输入密码"></input></div></div><div xid="div6" class="list-group-item" align="center">
  	<span component="$UI/system/components/justep/button/checkbox" class="x-checkbox" xid="checkbox1" label="记住账户" checkedValue="1" value="1"></span>
  <i xid="i3"></i>
  </div><div xid="div5" class="list-group-item"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="登录" xid="loginBtn" onClick="loginBtnClick">
   <i xid="i1"></i>
   <span xid="span6">登录</span></a>
  </div>
  	
  </div>
  
  </div>
  </div>
 <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" xid="popOver2" opacity="0.9" dismissible="false">
   <div class="x-popOver-overlay" xid="div11"></div>
   <div class="x-popOver-content text-center" xid="div12">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button2" icon="icon-loading-a">
     <i xid="i2" class="icon-loading-a" style="font-size:40px;"></i>
     <span xid="span2"></span></a> 
    <div xid="div4" bind-text='"正在加载中，请稍候..."'></div></div> </div></div>