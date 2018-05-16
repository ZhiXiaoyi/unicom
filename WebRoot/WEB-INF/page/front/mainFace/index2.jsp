<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>189首页</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<style>
body, ul, ol, li, h1, pre, code, form, fieldset, legend, input, textarea,
	p, blockquote, th, td {
	padding: 0;
	margin: 0 auto;
	font-size: 100%;
	font: normal normal normal;
	font-family: \5FAE\8F6F\96C5\9ED1, verdana;
	color: #777777;
}

ul, ol, li {
	list-style: none;
}

img {
	border: 0px;
}

/*Link*/
a {
	color: #777777
}

a:link {
	color: #777777;
	text-decoration: none;
}

/*未访问的链接 */
a:visited {
	text-decoration: none;
}

/*已访问的链接*/
a:hover { /*color:#FF6300;*/
	
}

/*鼠标移动到链接上*/
a:active {
	text-decoration: none;
	color: #F00;
}

/*选定的链接*/
a:focus {
	outline: none;
	-moz-outline: none;
}

/*链接虚线*/
.fr {
	display: inline;
	float: right;
}

.mt15 {
	margin-top: 15px;
}

.w550 {
	width: 550px;
}

.fl {
	display: inline;
	float: left;
}

.middle .crk {
	width: 450px;
	height: 32px;
	position: relative;
}

.middle .crk a {
	cursor: pointer;
	float: left;
	display: block;
	font-family: "宋体";
	font-size: 12px;
	line-height: 32px;
	text-align: center;
	color: #777777;
	width: 80px;
	height: 32px;
	background: #ffffff;
}

.middle .crk_yes {
	background: #ff8201 !important;
	color: #ffffff !important;
}

.head_recommend {
	display: block;
	float: left;
	margin-left: 35px;
}

#lx_nav li {
	font-family: "微软雅黑";
	float: left;
	width: 80px;
	height: 32px;
	line-height: 32px;
	font-size: 12px;
	color: #fff;
	cursor: pointer;
	text-align: center
}

#lx_nav .li01 {
	background-color: #ff8201;
}

#lx_nav .li02 {
	background-color: none;
	color: #777777
}

.mb5 {
	margin-bottom: 5px;
}

.mt0 {
	margin-top: 0px;
}

.h32 {
	height: 32px;
}

.w545 {
	width: 545px;
}

.bd2 {
	border: 2px solid #ff8200;
}

.input_boxs img {
	float: left;
	height: 32px;
	width: 32px;
}

.input_boxs a {
	background-color: #ff8200;
	color: White;
	display: block;
	float: right;
	font-size: 16px;
	height: 32px;
	line-height: 32px;
	text-align: center;
	width: 90px;
}

.lx-con li {
	margin-top: 5px;
}

.input_boxs input {
	border: 0 none !important;
	color: #000000;
	float: left;
	font-size: 12px;
	height: 25px;
	line-height: 25px;
	outline: 0 none;
	width: 420px;
}

.pt2 {
	padding-top: 2px
}

.a_link a {
	padding: 0 8px;
	color: #9b9b9b;
	text-decoration: none;
}

.vt img {
	vertical-align: text-top
}

.f12 {
	font-size: 0.75em;
}

.xl {
	position: absolute;
	top: 82px;
	width: 456px;
	border: 1px solid #FF8201;
	display: none;
	z-index: 333;
	background: #ffffff;
	left: 114px;
}

.xl li {
	line-height: 30px;
	cursor: pointer;
	color: #000;
	font-size: 12px;
	text-indent: 3em
}

.xl li:hover {
	background: #F8F8F8;
}

/*右侧轮播*/
#box_lanrenzhijia .list {
	position: relative;
	width: 235px;
	height: 76px;
	overflow: hidden;
}

#box_lanrenzhijia .list {
	position: relative;
	width: 253px;
	height: 76px;
	overflow: hidden;
}

#box_lanrenzhijia .list ul {
	position: absolute;
	top: 0;
	left: 0;
}

#box_lanrenzhijia .list li {
	overflow: hidden;
}

#box_lanrenzhijia .count {
	position: absolute;
	right: 0;
	bottom: 5px;
	display: none;
}
</style>
</head>

<body>
	<span class="fr mt15" style="width:838px; height:104px;"> <!--搜索-->
		<div class="middle fl w550">
			<form id="searchForm" target="_parent" name="selfWebSerForm"
				action="" method="post">
				<div class="crk">
					<ul id="lx_nav">
						<li class="li01" onclick="">搜产品</li>
						<li class="li02" onclick="">搜帮助</li>
					</ul>
				</div>
				<div class="input_boxs bd2 h32 w545 mb5 mt0">
					<img src="images/front/mainFace/ioc_01.gif"> <a
						style="float:left;background:none;height:25px!important;line-height:25px!important;">
						<div class="lx-con" id="vouch_1" style="display: block;">
							<ul>
								<li><input id="searchtext" name="searchtext" type="text"
									value="请输入关键字查询"
									onfocus="if(this.value==&#39;请输入关键字查询&#39;)value=&#39;&#39;;"
									onkeydown="if (event.keyCode==13) {}"
									onblur="if(this.value==&#39;&#39;)value=&#39;请输入关键字查询&#39;;"
									maxlength="30" autocomplete="off" allowtransparency="true">
								</li>
							</ul>
						</div>
						<div class="lx-con" id="vouch_2" style="display: none;">
							<ul>
								<li><input id="wd" name="wd" type="text" value="请输入关键字查询"
									onfocus="if(this.value==&#39;请输入关键字查询&#39;)value=&#39;&#39;;"
									onkeydown="if (event.keyCode==13) {}"
									onblur="if(this.value==&#39;&#39;)value=&#39;请输入关键字查询&#39;;"
									maxlength="30"></li>
							</ul>
						</div>
					</a> <a onclick="submitsearch();" href="javascript:;">搜索</a>
					<ul id="serch_dialog" class="xl"></ul>
				</div>
			</form>
			<div class="a_link f12 vt pt2" id="search-rmss">
				<div id="marqueeBox" style="overflow:hidden;height:16px"
					onmouseover=""
					onmouseout="">
					<div>
						<div style="overflow: hidden;height: 16px;">
							<a
								href="http://www.189.cn/products/90336176367.html?intaid=jt-sy-search-01-dasanyuan"
								target="_blank">大三元</a><a
								href="http://www.189.cn/products/9136132884.html?intaid=jt-sy-search-02-gerendingzhi"
								target="_blank">个人定制</a><a
								href="http://www.189.cn/products/1036132863.html?intaid=jt-sy-search-03-liuliangka"
								target="_blank">飞young纯流量卡</a><a
								href="http://www.189.cn/products/19736177219.html?intaid=jt-sy-search-04-jiacanbao"
								target="_blank">流量加餐包</a><a
								href="http://www.189.cn/haoma?intaid=jt-sy-search-05-lianghao"
								target="_blank">靓号</a><a
								href="http://www.189.cn/zhigo?intaid=jt-sy-search-06-zhineng"
								target="_blank">智能</a>
						</div>
					</div>
					<div>
						<div style="overflow: hidden;height: 16px;">
							<a href=""target="_blank"><font color="red">1天1元1G再送30</font>
							<img width="18" height="10" src="images/front/mainFace/CU.png"></a>
							<a href=""target="_blank"><font color="red">189流量无限用</font>
							<img width="18" height="10" src="images/front/mainFace/XIN.png"></a>
							<a href=""target="_blank">大三元
							<img width="18" height="10"src="images/front/mainFace/RE.png"></a>
							<a href=""target="_blank"><font color="blue">点亮千兆光小区</font>
							<img width="18" height="10" src="images/front/mainFace/RE(1).png"></a>
							<a href=""target="_blank">充值交费</a>
							<a href=""target="_blank"><font color="red">宽带续费</font></a>
						</div>
					</div>
				</div>
			</div>

		</div> <!--2015 右侧轮播--> <span class="head_recommend" id="box_lanrenzhijia">
			<div class="list">
				<ul style="top: 0px;">
					<li><a href=""target="_blank">
					<img src="images/front/mainFace/da2e62ff-2eb6-45e5-b18f-aefa82a068a4.png" width="253"height="76"></a></li>
					<li><a href=""target="_blank">
					<img src="images/front/mainFace/8b695f78-11c8-404c-b3dd-ff414750ba44.jpg" width="253"height="76"></a></li>
				</ul>
			</div>
			<ul class="count">
				<li class="current">1</li>
				<li class="">2</li>
			</ul>
	</span>
	</span>
</body>
</html>
