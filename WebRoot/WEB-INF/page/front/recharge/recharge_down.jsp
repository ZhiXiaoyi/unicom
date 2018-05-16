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

<title>充值底部</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css"
	href="css/front/recharge/recharge.css">


</head>

<body>
	<HR style="FILTER: alpha(opacity=100,finishopacity=0,style=3)"
		width="80%" color=#987cb9 SIZE=3>
	<div id="recharge_down_1">
		<p>
			1、由于每月月底和月初两天为系统出账时间，有可能影响您交费到账，建议您尽量选择其他时段进行交费。 <br>如遇问题，请您咨询客服热线10010。<br>
			2、请您在确认支付时关闭浏览器弹出窗口拦截功能，中国联通门户网站将会跳转到相应银行或支付公司的网站， <br>中国联通门户网站没有设置要求客户输入银行卡号及密码，不会保留您的银行卡号和密码。请您在交费前确认您
			<br>使用的银行卡是否开通了网上银行并具备网上支付功能。
			<br>3、网上营业厅交费充值功能适用于中国联通手机、无线上网卡、固定电话、宽带捆绑的电话、小（大）灵通。 <br>详情请咨询客服热线10010。
			<br>4、为了便于您查询交费充值订单，建议您登录后进行交费充值操作。<br> 5、使用4G号码登录给本机进行非固定面值交费，可享积分抵扣。<br>
		</p>
	</div>

	<div id="recharge_down_2">

		<div id="recharge_down_buy">

			<ul>
				<li><strong>购物指南</strong></li>
				<li><a href="index.jsp" target="window">购物流程</a></li>
				<li><a href="index.jsp" target="window">发票说明</a></li>
				<li><a href="index.jsp" target="window">联系客服</a></li>
				<li><a href="index.jsp" target="window">注册协议</a></li>
			</ul>
		</div>
		<div id="recharge_down_pay">
			<ul>
				<li><strong>支付方式</strong></li>
				<li><a href="index.jsp" target="window">在线支付</a></li>
				<li><a href="index.jsp" target="window">快捷支付</a></li>
				<li><a href="index.jsp" target="window">货到付款</a></li>
			</ul>
		</div>
		<div id="recharge_down_send">
			<ul>
				<li><strong>配送方式</strong></li>
				<li><a href="index.jsp" target="window">快递配送</a></li>
				<li><a href="index.jsp" target="window">上门自提</a></li>

			</ul>
		</div>
		<div id="recharge_down_after">
			<ul>
				<li><strong>售后服务</strong></li>
				<li><a href="index.jsp" target="window">退换货政策</a></li>
				<li><a href="index.jsp" target="window">退换货流程</a></li>
				<li><a href="index.jsp" target="window">手机维修</a></li>
				<li><a href="index.jsp" target="window">退款说明</a></li>
			</ul>
		</div>

		<div id="recharge_down_feature">
			<ul>
				<li><strong>特色服务</strong></li>
				<li><a href="index.jsp" target="window">营业厅查询</a></li>
				<li><a href="index.jsp" target="window">归属地查询</a></li>
				<li><a href="index.jsp" target="window">缴费充值</a></li>
				<li><a href="index.jsp" target="window">常见问题</a></li>
			</ul>
		</div>
		<div id="recharge_down_papers">
			<a href="">企业法人营业执照</a>|<a href="">基础电信业务经营许可证</a>|<a href="">增值电信业务经营许可证</a>|<a
				href="">网络文化经营许可证</a>
		</div>
	</div>
	<div id="recharge_down_3"></div>
</body>
</html>