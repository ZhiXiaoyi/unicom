<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>充值中部-右侧</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link rel="stylesheet" type="text/css"
	href="css/front/recharge/recharge.css">

</head>

<body>

	<div id="recharge_middle_right_1">
	<input type="hidden" id="areaId" name="areaId" value="1">
		<span><h2>
				<a href="recharge/toOnline" target="right">在线支付</a>
			</h2></span>
		<p>
			用户可以点击<a href="recharge/toOnline" target="right"><strong>在线支付</strong></a>进行充值业务，通过支付宝，网银，微信等多种在线支付方式实现电话费用的充值。
		</p>
	</div>

	<div id="recharge_middle_right_2">
		<span align="center"><h2>
				<a href="recharge/toBuyPrepaid" target="right">购买充值卡支付</a>
			</h2></span>
		<p>用户可以通过点击<a href="recharge/toBuyPrepaid" target="right"><strong>购买充值卡支付</strong></a>购买多种面额的充值卡进行在线充值，在购买成功后可以实时获得一张充值卡的id与密码，购买成功后可进行充值业务。</p>
	</div>
	
</body>
</html>
