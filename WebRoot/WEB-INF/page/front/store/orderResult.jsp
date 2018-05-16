<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>订单结果</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">


<link rel="stylesheet" href="css/bootstrap.min.css" />
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>

<style type="text/css">
th {
	text-align: center;
}
td{
	text-align:center;	
}
</style>


</head>
<div style="background-color:orange;height:35px" >
	<p style="font-size:25px;float:left">订单结果</p>
	<a href="store/topage"  style="float:right" class="btn btn-danger">返回</a>
</div>

<div style="margin-top:50px;margin-left: 540px">
	<strong style="color:red">您的订单已经成功提交，正在尽快审核发货。。。</strong>
</div>

<div style="margin-top:50px">
	<h2 style="text-align:center">订单列表</h2>
	<div>
		<table class="table table-striped">
			<tr>
				<th>订单编号</th>
				<th>商品名</th>
				<th style="width:70px">商品图片</th>
				<th>所需积分</th>
				<th>所需金额</th>
				<th>订单状态</th>
			</tr>
			<tr>
				<td>${order.orderId}</td>
				<td>${order.commodity.commodityName}</td>
				<td><img src="commodity/tophoto.action?path=<s:property value="order.commodity.commodityImgPath"/>" alt=""  width="70px" height="50px"/></td>
				<td>${order.commodity.commodityIntegral}</td>
				<td>${order.orderMoney}</td>
				<td>${order.orderState}</td>
			</tr>
		</table>
	</div>

</div>
<body>

</body>
</html>