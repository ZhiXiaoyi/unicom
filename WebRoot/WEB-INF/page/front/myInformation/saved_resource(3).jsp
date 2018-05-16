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

<title>顶部切换</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link href="css/front/myInformation/my189(3).css" rel="stylesheet"
	type="text/css">

<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
<script type="text/javascript" src="js/slider.js"></script>
</head>
<body>
	<div class="usrr_sign left" id="term">
		<a class="term-pre abtn aleft agrayleft"
			href="http://www.189.cn/jt/my189/dbqh/#left"></a>
		<div class="usrr_signimg">
			<ul class="term" style="left: 0px;">
				<li>
					<div class="term-con">
						<a href="http://www.189.cn/chongzhi/" target="_blank"><img
							src="images/front/myInformation/1e82319f-9c77-455b-994d-6cd98515ecaf.png">
							<p>充值缴费</p></a> <a href="http://www.189.cn/hd/fahongbao/"
							target="_blank"><img
							src="images/front/myInformation/d339ed5a-e88d-4f7f-9565-d97b7d680c20.png">
							<p>流量惠购</p></a>
					</div>
				</li>
				<li>
					<div class="term-con">
						<a href="http://www.189.cn/3" target="_blank"><img
							src="images/front/myInformation/fc249b54-d102-45ab-8290-535927757cae.png">
							<p>大三元</p></a> <a href="http://www.189.cn/4g" target="_blank"><img
							src="images/front/myInformation/3a5dd384-e784-4a6b-b760-0b53ecfe3ba2.png">
							<p>4G专区</p></a>
					</div>
				</li>
				<li>
					<div class="term-con">
						<a href="http://www.189.cn/private" target="_blank"><img
							src="images/front/myInformation/4389e769-354d-4b9e-b5e9-10c6af95d37d.png">
							<p>个人定制</p></a> <a href="http://www.189.cn/up4g/" target="_blank"><img
							src="images/front/myInformation/bddce3b1-fc47-42a9-be50-45f3b1483286.png">
							<p>3G升4G</p></a>
					</div>
				</li>
				<li>
					<div class="term-con">
						<a href="http://www.189.cn/zhigo/" target="_blank"><img
							src="images/front/myInformation/b4ed54e3-ca88-4432-a66f-e67a38326ecc.png">
							<p>智能专区</p></a> <a href="http://www.189.cn/tradein" target="_blank"><img
							src="images/front/myInformation/8b05c38a-c62d-490f-865f-c645e675f297.png">
							<p>以旧换新</p></a>
					</div>
				</li>
				<li>
					<div class="term-con"></div>
				</li>
				<li>
					<div class="term-con"></div>
				</li>

				<div style=" clear:both;"></div>
			</ul>
		</div>
		<a class="term-next abtn aright"
			href="http://www.189.cn/jt/my189/dbqh/#right"></a>
		<div style=" clear:both;"></div>
	</div>


</body>

</html>
