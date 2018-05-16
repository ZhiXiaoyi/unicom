<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix ="s" uri="/struts-tags"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>购卡确认界面</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css"
	href="css/front/recharge/recharge.css">
	<script src="js/jquery.js" type="text/javascript"></script>




</head>

<body>
<input type="hidden" id="areaId" name="areaId" value="1">
	<div id="pay_div">
  <h2 align="center"><strong>尊敬的客户，请确认您的购买信息</strong></h2>
   <c:forEach items="${list}" var="item">
    <span class="span">充值卡号：${item.prepaidCardId}</span><br/>
     </c:forEach>
    <span class="span">接收的邮箱：${mail}</span><br/>
    <span class="span">接收的电话：${phone}</span><br/><br/>
   
    <span class="span"><input id="Button1" type="button" value="确定购买" onclick="ShowDiv('MyDiv','fade')" /></span><br/><br/>
    <span class="span"><a href="buyPrepadiCard/toReturnBuyCard" target="right">返回购卡界面</a></span>
    <div id="fade" class="black_overlay"></div>
	<div id="MyDiv" class="white_content">
	
	<span class="span2" onclick="CloseDiv('MyDiv','fade')" ><font color="orange"><strong>购卡成功</strong></strong></font></span>
	</div>
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
