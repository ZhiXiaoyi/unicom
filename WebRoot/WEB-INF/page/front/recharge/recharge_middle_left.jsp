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

<title>充值中部-左部</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link rel="stylesheet" type="text/css"
	href="css/front/recharge/recharge.css">
<style>
#recharge_middle_left ul {
	list-style-image: url(<%=basePath%>/images/front/recharge/login01.png);
}
</style>

</head>

<body>
	<div id="recharge_middle_left_container">
		<div id="recharge_middle_left">
			<ul class="ul">
				<li ><a href="recharge/tosearchCostbalance" target="right" ><strong>话费查询</strong></a></li>
				<li ><strong>交话费</strong></li>
				<li ><a href="recharge/toonlineRecharge" target="right">在线缴费</a></li>
				<li ><a href="recharge/toPrepaidCardRecharge" target="right">充值卡缴费</a></li>
				<li ><a href="recharge/toBuyPrepaidCard" target="right"> 购买充值卡</a></li>
				<li ><a href="recharge/toRechargeRecord" target="right">缴费/购卡记录查询</a></li>
				<li ><a href="index.jsp" target="window"><strong>业务办理</strong></a></li>
				<li ><a href="index.jsp" target="window"><strong>便民服务</strong></a></li>
				 <img src="<%=basePath%>/images/front/recharge/logo.jpg"> 
			</ul>

		</div>

	</div>
</body>
</html>
