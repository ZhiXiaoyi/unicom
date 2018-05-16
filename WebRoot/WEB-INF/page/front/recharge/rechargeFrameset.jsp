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

<title>充值界面</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<meta name="viewport" content="width=device-width, initial-scale=1.0">


</head>

<frameset rows="20%,35%,45%" framespacing=0 border=0 style="overflow-y:scroll">
	<frame noresize="noresize" scrolling="no" src="recharge/toup">
	<frameset cols="30%,70%">
  <frame noresize="noresize" scrolling="no" src="recharge/toleft">
  <frame noresize="noresize" scrolling="no" src="recharge/toright" name="right">
  </frameset>
	<frame noresize="noresize" scrolling="no"src="recharge/todown">
	</frameset>
</html>