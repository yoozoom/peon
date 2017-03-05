<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:258px;top:435px;" onLoad="modelLoad" onModelConstruct="modelModelConstruct"/> 

  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-content" xid="content1"><div class="list-group" xid="listGroup2">
   <div xid="div1" class="list-group-item">
   <img src="$UI/peon/img/logo.png" alt="" xid="image1" height="100%" style="width:100%;padding-right:0px;padding-left:0px;padding-top:20px;"></img>
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
 </div>