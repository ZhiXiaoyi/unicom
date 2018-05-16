<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>我的欢go</title>

	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="shortcut icon" type="image/x-icon"
		href="images/front/ico/logo.ico" media="screen">
	<link rel="stylesheet" href="css/front/mainFace/common_indexv2.css">
	<link href="css/front/login/login.css" rel="stylesheet">
	<script type="text/javascript" src="js/front/jquery.js"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	
</head>

<body>
	<!--header-->
	<div class="">
		<!--头部通栏-->
		<div class="w h30 bb1 bcfa lh30 z333">
			<div class="w1200 h ov m">
				<!--topleft-->
				<span class="w420 h30 fl ff_a"> <span class="fl w85 f12 h30">
						<div class="fl mt2 header_d1"></div> <a rel="nofollow" href="">收藏欢go网</a>
				</span> <iframe src="iframes/userLoginIframe" width="300" height="30"
						allowtransparency="true" frameborder="0" scrolling="no"
						style="margin-top:2px;">iframe</iframe>
				</span>
				<!--topright-->
				<span class="fr f12 login_ul ff_a">
					<ul>
						<li class="w90 h">
							<div>
								<div class="fl mt2 mr4 ml4 header_d2"></div>
								<div class="fr mt-2 mr10 header_d2_selll"></div>
								<a href="userLogin/isUserLogin" target="_top" rel="nofollow">我的欢go</a>
							</div>
							<ul class="mt-30 none bl1 br1 bb1 bcfff w90 h ov ff_a z333 btx0">
								<li class="w unl_a">
									<div class="fl mt2 mr4 ml4 header_d2"></div>
									<div class="fr mt-2 mr10 header_d2_selll_a"></div> <a href="userLogin/isUserLogin"
									target="_blank">我的欢go</a>
								</li>
								<li class="w unl_a"><a href="" class="ml18" target="_blank">我的订单</a>
									<a href="" class="ml18" target="_blank">宽带订单查询</a></li>
							</ul>
						</li>
						<li><span class="ccc">|</span></li>
						<li class="w90 h">
							<div>
								<div class="fl mt2 mr4 ml4 header_d3"></div>
								<a id="goclient" href="" rel="nofollow" target="_blank">欢go客户端</a>
							</div>
							<ul
								class="dpl_ul none bl1 br1 bb1 bcfff w209 h94 ov ff_a pb10 pl10 pr10 z333">
								<li class="w w209 h94 pt10"><img id="goclient_img"
									src="images/front/mainFace/app189.jpg"
									style="user-select: none;"></li>
							</ul>
						</li>
						<li><span class="ccc ml8 mr4">|</span></li>
						<li class="h">
							<div class="fl mt2 mr4 ml4 header_d4"></div> <a href=""
							target="_blank">189邮箱</a>
						</li>
						<li><span class="ccc ml8 mr4">|</span></li>
						<li class="h">
							<div class="fl mt2 mr4 ml4 header_d5"></div> <a href=""
							rel="nofollow" target="_blank">政企客户</a>
						</li>
						<li><span class="ccc mr4 ml8">|</span></li>
						<li class="h">
							<div>
								<div class="fl mt2 mr4 ml4 header_d6"></div>
								<a href="" rel="nofollow" target="_blank">消费者帮助中心</a>
							</div>
							<ul
								class="mt-30  none bl1 br1 bb1 bcfff w115 h ov ff_a z333 btx0">
								<li class="w unl_a">
									<div class="fl mt2 mr4 ml4 header_d6"></div> <a id="helpcenter"
									href="" target="_blank">消费者帮助中心</a>
								</li>
								<li class="w unl_a h98"><a href="" class="ml15"><img
										id="helpcenter_img" src="images/front/mainFace/zx.jpg"
										style="user-select: none;"></a></li>
							</ul>
						</li>
						<li class="h ml10 mt2-7 header_d7"><a href="" target="_blank"></a></li>
					</ul>
				</span>
			</div>
		</div>
		<!--logo通栏-->
		<div class="logo w1200  h120 m  z333"
			style="position:relative;z-index:332;">
			<!--logoleft-->
			<span class="fl mt20"> <!--logo-->
				<div class="fl logo_img">
					<a href="userLogin/toMainFace" target="_top"></a>
				</div>
				<div class="fl ml25">
					<!--city-->
					<div class="cityChoose w81 h ov mt15">
						<div class="topCity hode_show w81 h29">
							<div class="show bc_city w66 h29 pl15 lh29 f12 fl pa"
								style="z-index:334">
								<a href="javascript:void(0)" id="provice">福建</a>
							</div>
							<div
								class="indexCity f12 bd h ov mt28 pa pl15 pr20 pb10 none ff_a  z333 bcfff">
								<li class="mt10"><span class="ff8 fl">A-G</span> <span
									class="dpl"> <a href="javascript:void(0);" onclick="">北京</a>
										<a href="javascript:void(0);" onclick="">安徽</a> <a
										href="javascript:void(0);" onclick="">重庆</a> <a
										href="javascript:void(0);" onclick="">福建</a> <a
										href="javascript:void(0);" onclick="">广东</a> <a
										href="javascript:void(0);" onclick="">甘肃</a> <a
										href="javascript:void(0);" onclick="">广西</a> <a
										href="javascript:void(0);" onclick="">贵州</a>
								</span></li>
								<li class="mt10"><span class="ff8 fl">H-J</span> <span
									class="dpl"> <a href="javascript:void(0);" onclick="change">湖北</a>
										<a href="javascript:void(0);" onclick="">湖南</a> <a
										href="javascript:void(0);" onclick="">河北</a> <a
										href="javascript:void(0);" onclick="">河南</a> <a
										href="javascript:void(0);" onclick="">海南</a> <a
										href="javascript:void(0);" onclick="">黑龙江</a> <a
										href="javascript:void(0);" onclick="">江苏</a> <a
										href="javascript:void(0);" onclick="">吉林</a> <a
										href="javascript:void(0);" onclick="">江西</a>
								</span></li>
								<li class="mt10"><span class="ff8 fl">L-S</span> <span
									class="dpl"> <a href="javascript:void(0);" onclick="">辽宁</a>
										<a href="javascript:void(0);" onclick="">内蒙古</a> <a
										href="javascript:void(0);" onclick="">宁夏</a> <a
										href="javascript:void(0);" onclick="">青海</a> <a
										href="javascript:void(0);" onclick="">山东</a> <a
										href="javascript:void(0);" onclick="">上海</a> <a
										href="javascript:void(0);" onclick="">山西</a> <a
										href="javascript:void(0);" onclick="">陕西</a> <a
										href="javascript:void(0);" onclick="">四川</a>
								</span></li>
								<li class="mt10"><span class="ff8 fl">T-Z</span> <span
									class="dpl"> <a href="javascript:void(0);" onclick="">天津</a>
										<a href="javascript:void(0);" onclick="">新疆</a> <a
										href="javascript:void(0);" onclick="">西藏</a> <a
										href="javascript:void(0);" onclick="">云南</a> <a
										href="javascript:void(0);" onclick="">浙江</a>
								</span></li>
							</div>
						</div>
						<div class="dishi_new mt5 w81 h29 z1">
							<span id="dishi_new"
								class="show bc_city w66 h29 pl15 lh29 f12 fl pa"
								style="z-index:332"><a href="javascript:void(0)" id="city"> 福州
							</a></span>
							<div
								class="indexCitya f12 bd h ov mt28 pa pl15 pb10 none ff_a bcfff  z333"
								style="width:242px; padding-left:0px;padding-bottom:8px;*padding-left:0;*width:242px;">
								<li class="mt5"
									style="*width:230px;  margin-left:10px;*margin-left:-5px;"><a
									href="javascript:void(0);" onclick="change(this)"name="area" id="1">福州</a><a
									href="javascript:void(0);" onclick="change(this)"name="area"  id="2">厦门</a><a
									href="javascript:void(0);" onclick="change(this)"name="area" id="4">宁德</a><a
									href="javascript:void(0);" onclick="change(this)"name="area" id="9">莆田</a><a
									href="javascript:void(0);" onclick="change(this)"name="area"  id="3">泉州</a><a
									href="javascript:void(0);" onclick="change(this)"name="area" id="5">漳州</a><a
									href="javascript:void(0);" onclick="change(this)"name="area" id="8">龙岩</a><a
									href="javascript:void(0);" onclick="change(this)"name="area" id="6">三明</a><a
									href="javascript:void(0);" onclick="change(this)"name="area" id="7">南平</a></li>
							</div>
						</div>
					</div>
				</div>
			</span>
			<!--logoright-->
			<iframe id="iframesearchtext" src="iframes/toIndex2" name=""
				frameborder="0" scrolling="no" width="952" height="106"
				style="position: relative;z-index: 331;" allowtransparency="true"></iframe>
		</div>

		<!--menu-->
		<div class="menu z222">
			<div class="content z222">
				<div class="menu_01 z222">
					<a class="toptiocsa"></a>
				</div>
				<!--导航-->
				<style>
/*menu*/
.toptiocs .mainlevel {
	position: relative;
}

.toptiocs .mainlevel ul {
	position: absolute;
	display: none;
	width: 242px;
	top: 45px;
	*top: 45px;
	*left: 0px;
}

.toptiocs .mainlevel li {
	float: left;
	background: #fafafa;
	width: 220px;
	min-height: 50px;
	font-size: 14px;
	line-height: 24px;
	padding: 10px;
	text-align: left;
	border-radius: 4px;
	overflow: hidden;
	color: #777777;
	border: 1px solid #e8e8e8;
}

.toptiocs .Triangle_con {
	height: 9px;
	background: url(images/front/mainFace/bird.png) 50px 0 no-repeat;
	display: block;
	_margin-bottom: -6px; /*IE6 only*/
}
</style>
				<ul class="toptiocs">

					<li><a href="userLogin/toMainFace" class="headmain_bg"  target="_top">首页</a></li>
					<li class="mainlevel"><a href="store/topage.action" target="_blank">商城</a>
						<ul class="sub_nav_01">
						</ul></li>
					<li class="mainlevel"><a href="" target="_blank">流量</a>
						<ul class="sub_nav_01">

						</ul></li>
					<li class="mainlevel"><a href="" target="_blank">宽带光纤</a>
						<ul class="sub_nav_01">
						</ul></li>
					<li class="mainlevel"><a href="" target="_blank">老用户</a>
						<ul class="sub_nav_01" style="display: none;">
						</ul></li>
					<li class="mainlevel"><a href="" target="_blank">省钱</a>
						<ul class="sub_nav_01" style="display: none;">
						</ul></li>
					<li class="mainlevel"><a href="" target="_blank">自助服务</a>
						<ul class="sub_nav_01">
						</ul></li>

				</ul>
			
</body>

<script type="text/javascript">
	
	
		function change(){
		$("#1").click(function(){
			$("#city").text("福州");
			self.parent.frames["right"].areaId = 1;
		});
		$("#2").click(function(){
			$("#city").text("厦门");
			self.parent.frames["right"].areaId = 2;
		});
		$("#3").click(function(){
			$("#city").text("泉州");
			self.parent.frames["right"].areaId = 3;
		});
		$("#4").click(function(){
			$("#city").text("宁德");
			self.parent.frames["right"].areaId = 4;
		});
		$("#5").click(function(){
			$("#city").text("漳州");
			self.parent.frames["right"].areaId = 5;
		});
		$("#6").click(function(){
			$("#city").text("三明");
			self.parent.frames["right"].areaId = 6;
		});
		$("#7").click(function(){
			$("#city").text("南平");
			self.parent.frames["right"].areaId = 7;
		});
		$("#8").click(function(){
			$("#city").text("龙岩");
			self.parent.frames["right"].areaId = 8;
		});
		$("#9").click(function(){
			$("#city").text("莆田");
			self.parent.frames["right"].areaId = 9;
		});
	}
		/* alert(list.attr("id"));
		var city = document.getElementById("city");
		for(i=0;i<list.size();i++){
			if(list.get[i].equals="福州"){
			
			city.value="福州";
			self.parent.frameset("right").area = city;
			}else if(list.get[i].equals="厦门"){
			city.value="厦门";
			self.parent.frameset("right").area = city;
			}else{
			city.value="泉州";
			self.parent.frameset("right").area = city;
			}
		} */
	
	</script>
</html>
