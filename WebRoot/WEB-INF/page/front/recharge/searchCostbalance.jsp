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

<title>查询手机余额</title>

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
<input type="hidden" id="areaId" name="areaId" value="1">
	<div id="searchCostbalance">
		<form id="searchCostbalanceForm" action="searchCostbalance/tosearchCostbalance"
			method="post">
			<h2 style="margin-left:20%">
				<strong>查询余额</strong>
			</h2>
			<table id="buyPrepaidCard_table">
				<tr>
					<td align="right">手机号码：</td>
					<td><input type="text" id="phoneNumber" name="phoneNumber" required="required" placeholder="11位数字，首位不为0" onchange="checkSearchPhoneNumber(this)"></td>
					
				<tr>
					<td align="right">服务密码：</td>
					<td><input type="password" name="servicePwd"></td>
				</tr>
				<tr>
					<td align="right" style="color:red">提示：</td>
					<td style="color:red" name="tip">${tip }</td>
				</tr>
				<tr>
					<td align="center" colspan=2><input type="submit"
						id="submit" name="sure" value="查询余额" style="width:30%"></td>
				</tr>
			</table>
		</form>
</body>
<script type="text/javascript">

/* 验证手机号码 */
function checkSearchPhoneNumber() {
	var phonenumber = document.getElementById("phoneNumber");// 获得手机号码
	var ret = /^[1-9]{1}[0-9]{10}$/;// 11位数字第一位不为0
	if (ret.exec(phonenumber.value) == null) {
		phonenumber.setCustomValidity("手机号码不合法！！！");
	} else {
		phonenumber.setCustomValidity('');
	}
}
</script>
</html>