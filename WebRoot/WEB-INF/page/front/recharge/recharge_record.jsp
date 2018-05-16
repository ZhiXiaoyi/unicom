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

<title>缴费购卡记录界面</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css"
	href="css/front/recharge/recharge.css">
<style>
*{margin:0;padding:0;}
body{font-size:14px;font-family:"Microsoft YaHei";}
ul,li{list-style:none;}

</style>
</head>
<body>
<input type="hidden" id="areaId" name="areaId" value="1">
<!-- 代码 begin -->
<div id="tab" style="margin-left:5%">
  <div class="tabList">
	<ul>
		<li class="cur">缴费记录</li>
		<li>购卡记录</li>
	</ul>
  </div>
  <div class="tabCon">
	<div class="cur">
	<p>您可以查询近6个月在网上营业厅www.10010.com及手机营业厅（官方版）的记录：</p>
	<table><tr><td></td></tr></table></div>
	<div><table></table></div>
  </div>
</div>

<script>
window.onload = function() {
    var oDiv = document.getElementById("tab");
    var oLi = oDiv.getElementsByTagName("div")[0].getElementsByTagName("li");
    var aCon = oDiv.getElementsByTagName("div")[1].getElementsByTagName("div");
    var timer = null;
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].index = i;
        oLi[i].onmouseover = function() {
            show(this.index);
        }
    }
    function show(a) {
        index = a;
        var alpha = 0;
        for (var j = 0; j < oLi.length; j++) {
            oLi[j].className = "";
            aCon[j].className = "";
            aCon[j].style.opacity = 0;
            aCon[j].style.filter = "alpha(opacity=0)";
        }
        oLi[index].className = "cur";
        clearInterval(timer);
        timer = setInterval(function() {
            alpha += 2;
            alpha > 100 && (alpha = 100);
            aCon[index].style.opacity = alpha / 100;
            aCon[index].style.filter = "alpha(opacity=" + alpha + ")";
            alpha == 100 && clearInterval(timer);
        },
        5)
    }
}
</script>
</body>
</html>
