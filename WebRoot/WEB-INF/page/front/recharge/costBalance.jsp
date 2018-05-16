<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>余额查询结果界面</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
		<link rel="stylesheet" type="text/css"
	href="css/front/recharge/recharge.css">
<script src="js/jquery.js" type="text/javascript"></script>



  </head>
  
  <body>
  <input type="hidden" id="areaId" name="areaId" value="1">
  <div id="pay_div">
  <h2 align="center"><strong>余额信息</strong></h2>
   
    <span class="span">用户名：${mobileCard.realName} </span><br/><br/>
    <span class="span">查询号码：${mobileCard.phoneNumber}</span><br/><br/>
    <span class="span">手机余额：${mobileCard.costBalance} </span><br/><br/>
    <span class="span">手机状态：${mobileState}</span><br/><br/>  
    <span class="span"><a href="searchCostbalance/returnSearchCostbalance" target="right">返回查询界面</a></span>
  
  </body>
  <script type="text/javascript">
//弹出隐藏层
function ShowDiv(show_div,bg_div){
document.getElementById(show_div).style.display='block';
document.getElementById(bg_div).style.display='block' ;
var bgdiv = document.getElementById(bg_div);
bgdiv.style.width = document.body.scrollWidth;
// bgdiv.style.height = $(document).height();
$("#"+bg_div).height($(document).height());
};
//关闭弹出层
function CloseDiv(show_div,bg_div)
{
document.getElementById(show_div).style.display='none';
document.getElementById(bg_div).style.display='none';
};
</script>
</html>