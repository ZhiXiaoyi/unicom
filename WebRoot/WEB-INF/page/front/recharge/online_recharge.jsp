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

<title>在线支付界面</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link rel="stylesheet" type="text/css"
	href="css/front/recharge/recharge.css">
<script type="text/javascript" src="js/front/recharge/recharge.js"></script>
<script type="text/javascript" src="js/front/jquery.js"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>


</head>

<body>

	<div id="online_recharge">
		<h2>
			<strong>手机缴费</strong>
		</h2>
		<form id="onlineForm" method="post" action="recharge/torecharge">
		<input type="hidden" id="areaId" name="areaId" value="1">
			<div id="online_recharge_up">
				<span id="phone" style="margin-left:20%;margin-top:5%">手机号：</span>
				<span id="inputPhone" style="margin-left:2%">
				<input type=" text" name="phoneNumber" id="online_recharge_phone"
					required="required" onchange="checkPhone(this)" placeholder="11位数字，首位不为0"></span> <br/><br/>
				<span id="payWay" style="margin-left:20%;">支付方式：</span>
				<span id="onlinePay"><input type="radio" name="pay" value="1" checked="true">在线支付
				<input type="radio" name="pay" value="2">充值卡支付</span> 
			</div >
			<span id="id1" style="display: inline;">
			<div id="online_recharge_online">
			<br/>
				<span id="payMoney" style="margin-left:20%;">缴费金额：</span>
				<span id="20"><input type="radio" name="charge" value="20">20元</span> 
				<span id="30"><input type="radio" name="charge" value="30">30元</span> 
				<span id="50"><input type="radio" name="charge" value="50">50元</span>
				<span id="100"><input type="radio" name="charge" value="100">100元</span><br/><br/>
				<span id="otherMoney" style="margin-left:20%;"><label>其他金额：</label> 
				<input type="radio" name="charge" value="0">
				<input type="text" name="otherCharge" id="other" onchange="checkOther(this)"
					placeholder="整数，不超过1000">元</span><br/><br/>
					<span style="color:red;margin-left:20%" name="tip">提示：${tip }</span><br/><br/>
					
					<span align="center" id="sure" style="margin-left:40%"><input type="submit" value="下一步" id="submit">
			</span>
			</div>
			</span> 
			<span id="id2" style="display: none;"><div id="online_recharge_prepaidCard">
			<br/>
			<span style="margin-left:20%">充值卡账号：<input type="text" name="prepaidCardId" value="0"></span><br/><br/>
			<span style="margin-left:20%">充值卡密码：<input type="password" name="prepaidCardPassword" value="0"></span><br/><br/>
			<span style="color:red;margin-left:20%" name="tip">提示：${tip }</span><br/><br/>
			<span align="center" id="sure" style="margin-left:40%">
			<input type="submit" value="下一步" id="submit">
			</span>
			</div></span>
			
			<div id="online_recharge_down">
			
			</div>
		</form>
	</div>
</body>
<script type="text/javascript">
	window.onload = function() {
		var radios = document.getElementsByName("pay");
		for (var i = 0; i < radios.length; i++) {
			radios[i].indexs = i + 1;
			radios[i].onchange = function() {
				if (this.checked) {
					document.getElementById("id1").style.display = "none";
					document.getElementById("id2").style.display = "none";
					document.getElementById("id" + this.indexs).style.display = "block";
				}
			}
		}
	}
</script>

</html>
