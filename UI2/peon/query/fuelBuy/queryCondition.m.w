<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
  </div>  
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
    <div class="x-panel-content" xid="content1"><div class="list-group" xid="listGroup2">
   <div xid="div1" class="list-group-item">
   <div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup2">
    <span class="input-group-addon" xid="span1"><![CDATA[客户名称]]></span>
    <input type="text" class="form-control" component="$UI/system/components/justep/input/input" xid="input2" placeHolder="请输入账号"></input></div> </div><div xid="div2" class="list-group-item">
    <div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup1">
     <span class="input-group-addon" xid="span3"><![CDATA[燃料名称]]></span>
     <input type="text" class="form-control" component="$UI/system/components/justep/input/input" xid="nameInput" placeHolder="请输入账号"></input></div> </div> 
   
    
   <div xid="div3" class="list-group-item">
   <div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup3">
    <span class="input-group-addon" xid="span2"><![CDATA[燃料类别]]></span>
    <input type="text" class="form-control" component="$UI/system/components/justep/input/input" xid="input1" placeHolder="请输入账号"></input></div> </div>
  <div xid="div4" class="list-group-item">
   <div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup4">
    <span class="input-group-addon" xid="span4"><![CDATA[过磅类型]]></span>
    <input type="text" class="form-control" component="$UI/system/components/justep/input/input" xid="input3" placeHolder="请输入账号"></input></div> </div><div xid="div5" class="list-group-item">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="查询" xid="queryBtn" onClick="queryBtnClick">
     <i xid="i1"></i>
     <span xid="span6">查询</span></a> </div></div></div>
  </div> 
</div>