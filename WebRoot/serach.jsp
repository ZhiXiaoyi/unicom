<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
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

<title>My JSP 'serach.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<script type="text/javascript" src="js/front/ct189.js"></script>
<link rel="shortcut icon" type="image/x-icon"
	href="images/front/ico/logo.ico" media="screen">
<link rel="stylesheet" href="css/front/mainFace/common_indexv2.css">
<link href="css/front/login/login.css" rel="stylesheet">

<link href="css/assets/amazeui.css" rel="stylesheet"
	type="text/css" />
<link href="css/assets/admin.css" rel="stylesheet"
	type="text/css" />

<!-- <link href="css/assets/demo.css" rel="stylesheet" type="text/css" /> -->

<link href="css/assets/seastyle.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/script.js"></script>
<script>
	function phonePackAge() {
		var userId = $("#isLogin").val();
		if (userId != "") {
			$.ajax({
				cache : true,
				type : "POST",
				url : "storejson/selectjifen.action",
				data : $('#searchForm').serialize(),// 你的formid
				async : false,
				error : function(request) {
				},
				success : function(data) {
					var info = data;
					if (info.mobileCard == null) {
						alert("请先绑定下您的手机号码");
					} else {
						location = "applicationfrom/toPackages";
					}
				}
			});
		} else {
			alert("请先登录");
		}

	}
</script>


</head>
<body>

	<form id="searchForm">
		<input name="userId" type="hidden" id="isLogin" value="${user.userId}">
	</form>
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
						style="margin-top:2px;"></iframe>
				</span>
				<!--topright-->
				<span class="fr f12 login_ul ff_a">
					<ul>
						<li class="w90 h">
							<div>
								<div class="fl mt2 mr4 ml4 header_d2"></div>
								<div class="fr mt-2 mr10 header_d2_selll"></div>
								<a href="userLogin/isUserLogin" target="_blank" rel="nofollow">我的欢go</a>
							</div>
							<ul class="mt-30 none bl1 br1 bb1 bcfff w90 h ov ff_a z333 btx0">
								<li class="w unl_a">
									<div class="fl mt2 mr4 ml4 header_d2"></div>
									<div class="fr mt-2 mr10 header_d2_selll_a"></div> <a
									href="userLogin/isUserLogin" target="_blank">我的欢go</a>
								</li>
								<li class="w unl_a"><a href="" class="ml18" target="_blank">我的订单</a>
									<a href="" class="ml18" target="_blank"></a></li>
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
					<a href="userLogin/toMainFace"></a>
				</div>
				<div class="fl ml25">
					<!--city-->
					<div class="cityChoose w81 h ov mt15">
						<div class="topCity hode_show w81 h29">
							<div class="show bc_city w66 h29 pl15 lh29 f12 fl pa"
								style="z-index:334">
								<a href="javascript:void(0)">福建</a>
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
									class="dpl"> <a href="javascript:void(0);" onclick="">湖北</a>
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
								style="z-index:332"><a href="javascript:void(0)"> 福州
							</a></span>
							<div
								class="indexCitya f12 bd h ov mt28 pa pl15 pb10 none ff_a bcfff  z333"
								style="width:242px; padding-left:0px;padding-bottom:8px;*padding-left:0;*width:242px;">
								<li class="mt5"
									style="*width:230px;  margin-left:10px;*margin-left:-5px;"><a
									href="javascript:void(0);" onclick="">福州</a><a
									href="javascript:void(0);" onclick="">厦门</a><a
									href="javascript:void(0);" onclick="">宁德</a><a
									href="javascript:void(0);" onclick="">莆田</a><a
									href="javascript:void(0);" onclick="">泉州</a><a
									href="javascript:void(0);" onclick="">漳州</a><a
									href="javascript:void(0);" onclick="">龙岩</a><a
									href="javascript:void(0);" onclick="">三明</a><a
									href="javascript:void(0);" onclick="">南平</a></li>
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
		<div class="am-g am-g-fixed">
			<div class="am-u-sm-12 am-u-md-12">
				<div class="theme-popover">
					<div class="searchAbout">
						<span class="font-pale">相关搜索：</span>iPhone 小米 三星
					</div>
					<ul class="select">
						<p class="title font-normal">
							<span class="total fl">手机搜索到<strong class="num">997</strong>件相关商品
							</span>
						</p>
						<div class="clear"></div>
						<li class="select-result">
							<dl>
								<dt>已选</dt>
								<dd class="select-no"></dd>
								<p class="eliminateCriteria">清除</p>
							</dl>
						</li>
						<div class="clear"></div>
						<li class="select-list">
							<dl id="select1">
								<dt class="am-badge am-round">品牌</dt>

								<div class="dd-conent">
									<dd class="select-all selected">
										<a href="#">全部</a>
									</dd>
									<dd>
										<a href="#">iphone</a>
									</dd>
									<dd>
										<a href="#">三星</a>
									</dd>
									<dd>
										<a href="#">小米</a>
									</dd>
									<dd>
										<a href="#">华为</a>
									</dd>
								</div>

							</dl>
						</li>
						<li class="select-list">
							<dl id="select2">
								<dt class="am-badge am-round">价格</dt>
								<div class="dd-conent">
									<dd class="select-all selected">
										<a href="#">全部</a>
									</dd>
									<dd>
										<a href="#">0-999元</a>
									</dd>
									<dd>
										<a href="#">1000-1999元</a>
									</dd>
									<dd>
										<a href="#">2000-3999元</a>
									</dd>
									<dd>
										<a href="#">4000以上</a>
									</dd>
								</div>
							</dl>
						</li>
						<li class="select-list">
							<dl id="select3">
								<dt class="am-badge am-round">屏幕大小</dt>
								<div class="dd-conent">
									<dd class="select-all selected">
										<a href="#">全部</a>
									</dd>
									<dd>
										<a href="#">3.0英寸及以下</a>
									</dd>
									<dd>
										<a href="#">3.1-4.1英寸</a>
									</dd>
									<dd>
										<a href="#">5.1-5.5英寸</a>
									</dd>
								</div>
							</dl>
						</li>

					</ul>
					<div class="clear"></div>
				</div>
				<div class="search-content">
					<div class="sort">
						<li class="first"><a title="综合">综合排序</a></li>
						<li><a title="销量">销量排序</a></li>
						<li><a title="价格">价格优先</a></li>
						<li class="big"><a title="评价" href="#">评价为主</a></li>
					</div>
					<div class="clear"></div>

					<ul class="am-avg-sm-2 am-avg-md-3 am-avg-lg-4 boxes">
						<li>
							<div class="i-pic limit">
								<img src="images/front/search/99.jpg" />
								<p class="title fl">华为 G9 青春版 全网通 3GB+16GB 白色八核双卡双待</p>
								<p class="price fl">
									<b>¥</b> <strong>988</strong>
								</p>
								<p class="number fl">
									销量<span>1110</span>
								</p>
							</div>
						</li>
						<li>
							<div class="i-pic limit">

								<img src="images/front/search/100.jpg" />
								<p class="title fl">荣耀5X（全网通）银一键解锁，金属机身</p>
								<p class="price fl">
									<b>¥</b> <strong>1399</strong>
								</p>
								<p class="number fl">
									销量<span>1110</span>
								</p>
							</div>
						</li>
						<li>
							<div class="i-pic limit">

								<img src="images/front/search/111.jpg" />
								<p class="title fl">华为荣耀V8 32G全网通 铂光金4G双卡 5.7英寸2K屏
									双1200万像素平行镜头 麒麟9西松子包邮</p>
								<p class="price fl">
									<b>¥</b> <strong>2599</strong>
								</p>
								<p class="number fl">
									销量<span>1110</span>
								</p>
							</div>
						</li>
						<li>
							<div class="i-pic limit">

								<img src="images/front/search/112.jpg" />
								<p class="title fl">iPhone 7 128G 红色现以红色呈现</p>
								<p class="price fl">
									<b>¥</b> <strong>5858</strong>
								</p>
								<p class="number fl">
									销量<span>1110</span>
								</p>
							</div>
						</li>
						<li>
							<div class="i-pic limit">

								<img src="images/front/search/113.jpg" />
								<p class="title fl">iPhone 7Plus 256G 红色</p>
								<p class="price fl">
									<b>¥</b> <strong>7988</strong>
								</p>
								<p class="number fl">
									销量<span>1110</span>
								</p>
							</div>
						</li>
						<li>
							<div class="i-pic limit">

								<img src="images/front/search/114.jpg" />
								<p class="title fl">中兴（ZTE） V16 电信2G 老人手机 白色电信老人手机 大按键 大音量</p>
								<p class="price fl">
									<b>¥</b> <strong>168</strong>
								</p>
								<p class="number fl">
									销量<span>1110</span>
								</p>
							</div>
						</li>
						<li>
							<div class="i-pic limit">

								<img src="images/front/search/115.jpg" />
								<p class="title fl">魅族 魅蓝E (A680Q) 32GB 全网通公开版 双卡双待 香槟金心之所向
									色之所往</p>
								<p class="price fl">
									<b>¥</b> <strong>1059</strong>
								</p>
								<p class="number fl">
									销量<span>1110</span>
								</p>
							</div>
						</li>
						<li>
							<div class="i-pic limit">

								<img src="images/front/search/116.jpg" />
								<p class="title fl">华为麦芒5（4+64G）香槟金年轻不畏什么</p>
								<p class="price fl">
									<b>¥</b> <strong>1888</strong>
								</p>
								<p class="number fl">
									销量<span>1110</span>
								</p>
							</div>
						</li>


					</ul>
				</div>
				<div class="search-side">

					<div class="side-title">爆款推荐</div>

					<li>
						<div class="i-pic check">
							<img src="images/front/search/999.jpg" />
							<p class="check-title">魅蓝5S</p>
							<p class="price fl">
								<b>¥</b> <strong>939</strong>
							</p>
							<p class="number fl">
								销量<span>2222</span>
							</p>
						</div>
					</li>
					<li>
						<div class="i-pic check">
							<img src="images/front/search/998.jpg" />
							<p class="check-title">魅族 MX6</p>
							<p class="price fl">
								<b>¥</b> <strong>1329</strong>
							</p>
							<p class="number fl">
								销量<span>2222</span>
							</p>
						</div>
					</li>


				</div>
				<div class="clear"></div>
				<!--分页 -->
				<ul class="am-pagination am-pagination-right">
					<li class="am-disabled"><a href="#">&laquo;</a></li>
					<li class="am-active"><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">&raquo;</a></li>
				</ul>

			</div>
		</div>
	</div>
</body>
</html>
