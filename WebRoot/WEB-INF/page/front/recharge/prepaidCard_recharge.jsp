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

<title>充值卡充值界面</title>

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
<input type="hidden" id="areaId" name="areaId" value="1">
	<div id="prepaidCard">
		<form id="prepaidCardForm" method="post"
			action="recharge/torechargeByCard">
			<h2>充值卡充值</h2>
			<table id="prepaidCard_table">
				<input type="hidden" name="pay" value="2">
				<tr>
					<td align="right">电话号码：</td>
					<td><input type="text" name="phoneNumber" required="required"
						id="prepaid_recharge_phone" onchange="checkPhone(this)"></td>
				</tr>
				<tr>
					<td align="right">充值卡号：</td>
					<td><input type="text" name="prepaidCardId"></td>
				</tr>
				<tr>
					<td align="right">充值卡密：</td>
					<td><input type="password" name="prepaidCardPassword"></td>
				</tr>
				<tr>
					<td align="right" style="color:red">提示：</td>
					<td style="color:red" name="tip">${tip }</td>
				</tr>
				<tr>
					<td colspan="3" align="center"><input type="submit"
						id="submit" name="sure" value="下一步"></td>
				</tr>
			</table>


		</form>
	</div>
</body>
<script type="text/javascript">
	function checkPhone() {
		var phone = document.getElementById("prepaid_recharge_phone");// 获得手机号码
		var ret = /^[1-9]{1}[0-9]{10}$/;// 11位数字第一位不为0
		if (ret.exec(phone.value) == null) {
			phone.setCustomValidity("手机号码不合法！！！");
		} else {
			phone.setCustomValidity('');
		}
	}
</script>
</html>

