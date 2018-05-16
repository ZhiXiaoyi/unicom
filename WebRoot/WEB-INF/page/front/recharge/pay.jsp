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

<title>付款界面</title>

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
		<h2 align="center">
			<strong>尊敬的客户，请确认您的充值信息</strong>
		</h2>

		<span class="span">姓名：${realName}</span><br /> <span class="span">充值号码：${phoneNumber}
		</span><br /> <span class="span">充值金额：${charge}</span><br /> <span
			class="span">充值后余额：${costBalance}</span><br />
		<br /> <span class="span"><input id="Button1" type="button"
			value="确定充值" onclick="ShowDiv('MyDiv','fade')" /></span><br />
		<br /> <span class="span"><a
			href="recharge/returnOnlineRecharge" target="right">返回充值界面</a></span>
		<div id="fade" class="black_overlay"></div>
		<div id="MyDiv" class="white_content">

			<span class="span2" onclick="CloseDiv('MyDiv','fade')"><font
				color="orange"><strong>充值成功</strong></strong></font></span>
		</div>
</body>
<script type="text/javascript">
	//弹出隐藏层
	function ShowDiv(show_div, bg_div) {
		document.getElementById(show_div).style.display = 'block';
		document.getElementById(bg_div).style.display = 'block';
		var bgdiv = document.getElementById(bg_div);
		bgdiv.style.width = document.body.scrollWidth;
		// bgdiv.style.height = $(document).height();
		$("#" + bg_div).height($(document).height());
	};
	//关闭弹出层
	function CloseDiv(show_div, bg_div) {
		document.getElementById(show_div).style.display = 'none';
		document.getElementById(bg_div).style.display = 'none';
	};
</script>
</html>
