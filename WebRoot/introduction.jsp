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

<title>手机查看</title>

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

<script type="text/javascript" src="js/jquery.min.js"></script>


<link href="AmazeUI-2.4.2/assets/css/amazeui.css" rel="stylesheet"
	type="text/css" />
<link href="AmazeUI-2.4.2/assets/css/admin.css" rel="stylesheet"
	type="text/css" />

<link href="css/demo.css" rel="stylesheet" type="text/css" />

<link type="text/css" href="css/optstyle.css" rel="stylesheet" />
<link type="text/css" href="css/style.css" rel="stylesheet" />
<script type="text/javascript" src="js/jquery-1.7.min.js"></script>
<script type="text/javascript" src="js/script.js"></script>
<script type="text/javascript" src="basic/js/quick_links.js"></script>
<script type="text/javascript"
	src="AmazeUI-2.4.2/assets/js/amazeui.js"></script>
<script type="text/javascript" src="js/jquery.imagezoom.min.js"></script>
<script type="text/javascript" src="js/jquery.flexslider.js"></script>
<script type="text/javascript" src="js/list.js"></script>
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
		<div class="listMain">

			<!--分类-->
			<div class="nav-table">
				<div class="long-title">
					<span class="all-goods">全部分类</span>
				</div>
				<div class="nav-cont">
					<ul>
						<li class="index"><a href="#">首页</a></li>
						<li class="qc"><a href="#">闪购</a></li>
						<li class="qc"><a href="#">限时抢</a></li>
						<li class="qc"><a href="#">团购</a></li>
						<li class="qc last"><a href="#">大包装</a></li>
					</ul>
					<div class="nav-extra">
						<i class="am-icon-user-secret am-icon-md nav-user"></i><b></b>我的福利
						<i class="am-icon-angle-right" style="padding-left: 10px;"></i>
					</div>
				</div>
			</div>
			<ol class="am-breadcrumb am-breadcrumb-slash">
				<li><a href="#">首页</a></li>
				<li><a href="#">分类</a></li>
				<li class="am-active">内容</li>
			</ol>
			<script type="text/javascript">
				$(function() {
				});
				$(window).load(function() {
					$('.flexslider').flexslider({
						animation : "slide",
						start : function(slider) {
							$('body').removeClass('loading');
						}
					});
				});
			</script>
			<div class="scoll">
				<section class="slider">
				<div class="flexslider">
					<ul class="slides">
						<li><img src="../images/01.jpg" title="pic" /></li>
						<li><img src="../images/02.jpg" /></li>
						<li><img src="../images/03.jpg" /></li>
					</ul>
				</div>
				</section>
			</div>

			<!--放大镜-->

			<div class="item-inform">
				<div class="clearfixLeft" id="clearcontent">

					<div class="box">
						<script type="text/javascript">
							$(document)
									.ready(
											function() {
												$(".jqzoom").imagezoom();
												$("#thumblist li a")
														.click(
																function() {
																	$(this)
																			.parents(
																					"li")
																			.addClass(
																					"tb-selected")
																			.siblings()
																			.removeClass(
																					"tb-selected");
																	$(".jqzoom")
																			.attr(
																					'src',
																					$(
																							this)
																							.find(
																									"img")
																							.attr(
																									"mid"));
																	$(".jqzoom")
																			.attr(
																					'rel',
																					$(
																							this)
																							.find(
																									"img")
																							.attr(
																									"big"));
																});
											});
						</script>

						<div class="tb-booth tb-pic tb-s310">
							<a href="../images/99.jpg"><img
								src="images/front/introduction/99_mid.jpg" alt="细节展示放大镜特效"
								rel="../images/99.jpg" class="jqzoom" /></a>
						</div>
						<ul class="tb-thumb" id="thumblist">
							<li class="tb-selected">
								<div class="tb-pic tb-s40">
									<a href="#"><img src="../images/99_small.jpg"
										mid="../images/99_mid.jpg" big="../images/99.jpg"></a>
								</div>
							</li>
							<li>
								<div class="tb-pic tb-s40">
									<a href="#"><img src="../images/100_small.jpg"
										mid="../images/100_mid.jpg" big="../images/100.jpg"></a>
								</div>
							</li>
							<li>
								<div class="tb-pic tb-s40">
									<a href="#"><img src="../images/101_small.jpg"
										mid="../images/101_mid.jpg" big="../images/101.jpg"></a>
								</div>
							</li>
						</ul>
					</div>

					<div class="clear"></div>
				</div>

				<div class="clearfixRight">

					<!--规格属性-->
					<!--名称-->
					<div class="tb-detail-hd">
						<h1>华为 G9 青春版 全网通 3GB+16GB 白色八核双卡双待智能手机</h1>
						<p>送钢化膜、硅胶套，数量有限，送完即止！</p>

					</div>
					<div class="tb-detail-list">
						<!--价格-->
						<div class="tb-detail-price">
							<li class="price iteminfo_price">
								<dt>促销价 ：</dt>
								<dd>
									<em>¥</em><b class="sys_item_price">988.00</b>
								</dd>
							</li>
							<li class="price iteminfo_mktprice">
								<dt>原价 ：</dt>
								<dd>
									<em>¥</em><b class="sys_item_mktprice">1288.00</b>
								</dd>
							</li>
							<li class="tb-metatit">
								<dt>配送 ：</dt>
								<dd>
									<b class="sys_item_price">由网盈科技服务有限公司负责免费配送，并提供售后服务。</b>
								</dd>
							</li>
							<div class="clear"></div>
						</div>

						<!--地址-->
						<dl class="iteminfo_parameter freight">
							<dt>配送至</dt>
							<div class="iteminfo_freprice">
								<div class="am-form-content address">
									<select data-am-selected>
										<option value="a">浙江省</option>
										<option value="b">湖北省</option>
									</select> <select data-am-selected>
										<option value="a">温州市</option>
										<option value="b">武汉市</option>
									</select> <select data-am-selected>
										<option value="a">瑞安区</option>
										<option value="b">洪山区</option>
									</select>
								</div>
								<div class="pay-logis">
									快递<b class="sys_item_freprice">10</b>元
								</div>
							</div>
						</dl>
						<div class="clear"></div>

						<!--销量-->
						<ul class="tm-ind-panel">
							<li class="tm-ind-item tm-ind-sellCount canClick">
								<div class="tm-indcon">
									<span class="tm-label">月销量</span><span class="tm-count">1015</span>
								</div>
							</li>
							<li class="tm-ind-item tm-ind-sumCount canClick">
								<div class="tm-indcon">
									<span class="tm-label">累计销量</span><span class="tm-count">6015</span>
								</div>
							</li>
							<li class="tm-ind-item tm-ind-reviewCount canClick tm-line3">
								<div class="tm-indcon">
									<span class="tm-label">累计评价</span><span class="tm-count">640</span>
								</div>
							</li>
						</ul>
						<div class="clear"></div>

						<!--各种规格-->
						<dl class="iteminfo_parameter sys_item_specpara">
							<dt class="theme-login">
								<div class="cart-title">
									可选规格<span class="am-icon-angle-right"></span>
								</div>
							</dt>
							<dd>
								<!--操作页面-->

								<div class="theme-popover-mask"></div>

								<div class="theme-popover">
									<div class="theme-span"></div>
									<div class="theme-poptit">
										<a href="javascript:;" title="关闭" class="close">×</a>
									</div>
									<div class="theme-popbod dform">
										<form class="theme-signin" name="loginform" action=""
											method="post">

											<div class="theme-signin-left">

												<div class="theme-options">
													<div class="cart-title">颜色</div>
													<ul>
														<li class="sku-line selected">白色<i></i></li>
														<li class="sku-line">金色<i></i></li>
														<li class="sku-line">黑色<i></i></li>

													</ul>
												</div>
												<div class="theme-options">
													<div class="cart-title number">数量</div>
													<dd>
														<input id="min" class="am-btn am-btn-default" name=""
															type="button" value="-" /> <input id="text_box" name=""
															type="text" value="1" style="width:30px;" /> <input
															id="add" class="am-btn am-btn-default" name=""
															type="button" value="+" /> <span id="Stock"
															class="tb-hidden">库存<span class="stock">1000</span>件
														</span>
													</dd>

												</div>
												<div class="clear"></div>

												<div class="btn-op">
													<div class="btn am-btn am-btn-warning">确认</div>
													<div class="btn close am-btn am-btn-warning">取消</div>
												</div>
											</div>
											<div class="theme-signin-right">
												<div class="img-info">
													<img src="../images/songzi.jpg" />
												</div>
												<div class="text-info">
													<span class="J_Price price-now">¥39.00</span> <span
														id="Stock" class="tb-hidden">库存<span class="stock">1000</span>件
													</span>
												</div>
											</div>

										</form>
									</div>
								</div>

							</dd>
						</dl>
						<div class="clear"></div>
						<!--活动	-->
					</div>

					<div class="pay">
						<div class="pay-opt">
							<a href="home.html"><span class="am-icon-home am-icon-fw">首页</span></a>
							<a><span class="am-icon-heart am-icon-fw">收藏</span></a>

						</div>
						<li>
							<div class="clearfix tb-btn tb-btn-buy theme-login">
								<a id="LikBuy" title="点此按钮到下一步确认购买信息" href="#">立即购买</a>
							</div>
						</li>
						<li>
							<div class="clearfix tb-btn tb-btn-basket theme-login">
								<a id="LikBasket" title="加入购物车" href="#"><i></i>加入购物车</a>
							</div>
						</li>
					</div>

				</div>

				<div class="clear"></div>

			</div>


			<!-- introduce-->

			<div class="introduce">
				<div class="browse">
					<div class="mc">
						<ul>
							<div class="mt">
								<h2>看了又看</h2>
							</div>

							<li class="first">
								<div class="p-img">
									<a href="#"> <img class="" src="../images/browse1.jpg">
									</a>
								</div>
								<div class="p-name">
									<a href="#"> 【三只松鼠_开口松子】零食坚果特产炒货东北红松子原味 </a>
								</div>
								<div class="p-price">
									<strong>￥35.90</strong>
								</div>
							</li>
							<li>
								<div class="p-img">
									<a href="#"> <img class="" src="../images/browse1.jpg">
									</a>
								</div>
								<div class="p-name">
									<a href="#"> 【三只松鼠_开口松子】零食坚果特产炒货东北红松子原味 </a>
								</div>
								<div class="p-price">
									<strong>￥35.90</strong>
								</div>
							</li>
							<li>
								<div class="p-img">
									<a href="#"> <img class="" src="../images/browse1.jpg">
									</a>
								</div>
								<div class="p-name">
									<a href="#"> 【三只松鼠_开口松子】零食坚果特产炒货东北红松子原味 </a>
								</div>
								<div class="p-price">
									<strong>￥35.90</strong>
								</div>
							</li>
							<li>
								<div class="p-img">
									<a href="#"> <img class="" src="../images/browse1.jpg">
									</a>
								</div>
								<div class="p-name">
									<a href="#"> 【三只松鼠_开口松子】零食坚果特产炒货东北红松子原味 </a>
								</div>
								<div class="p-price">
									<strong>￥35.90</strong>
								</div>
							</li>
							<li>
								<div class="p-img">
									<a href="#"> <img class="" src="../images/browse1.jpg">
									</a>
								</div>
								<div class="p-name">
									<a href="#"> 【三只松鼠_开口松子218g】零食坚果特产炒货东北红松子原味 </a>
								</div>
								<div class="p-price">
									<strong>￥35.90</strong>
								</div>
							</li>

						</ul>
					</div>
				</div>
				<div class="introduceMain">
					<div class="am-tabs" data-am-tabs>
						<ul class="am-avg-sm-3 am-tabs-nav am-nav am-nav-tabs">
							<li class="am-active"><a href="#"> <span
									class="index-needs-dt-txt">宝贝详情</span></a></li>

						</ul>

						<div class="am-tabs-bd">

							<div class="am-tab-panel am-fade am-in am-active">
								<div class="J_Brand">

									<div class="attr-list-hd tm-clear">
										<h4>产品参数：</h4>
									</div>
									<div class="clear"></div>
									<ul id="J_AttrUL">
										<li title="">手机类型:&nbsp;智能手机，八核手机，4G手机</li>
										<li title="">CPU型号:&nbsp;骁龙617(msm8952)</li>
										<li title="">操作系统:&nbsp;Android</li>
										<li title="">运行内存:&nbsp;3GB</li>
										<li title="">存储容量:&nbsp;16GB</li>
										<li title="">网络类型:&nbsp;全网通</li>
										<li title="">屏幕尺寸:&nbsp;5.2英寸</li>
										<li title="">屏幕分辨率：&nbsp;1920*1080</li>
										<li title="">前置摄像头：&nbsp;800万像素</li>
										<li title="">后置摄像头：&nbsp;1300万像素</li>
										<li title="">电池容量：&nbsp;3000mAh</li>

									</ul>
									<div class="clear"></div>
								</div>

								<div class="details">
									<div class="attr-list-hd after-market-hd">
										<h4>商品细节</h4>
									</div>
									<div class="twlistNews">
										<img src="../images/102.jpg" /> <img src="../images/103.jpg" />
										<img src="../images/104.jpg" />
									</div>
								</div>
								<div class="clear"></div>

							</div>



						</div>

					</div>


					<div class="footer">
						<div class="footer-hd">
							<p>
								<a href="#">恒望科技</a> <b>|</b> <a href="#">商城首页</a> <b>|</b> <a
									href="#">支付宝</a> <b>|</b> <a href="#">物流</a>
							</p>
						</div>
						<div class="footer-bd">
							<p>
								<a href="#">关于恒望</a> <a href="#">合作伙伴</a> <a href="#">联系我们</a> <a
									href="#">网站地图</a> <em>© 2015-2025 Hengwang.com 版权所有. 更多模板
									<a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a>
									- Collect from <a href="http://www.cssmoban.com/" title="网页模板"
									target="_blank">网页模板</a>
								</em>
							</p>
						</div>
					</div>
				</div>

			</div>
		</div>
		<!--菜单 -->
		<div class=tip>
			<div id="sidebar">
				<div id="wrap">
					<div id="prof" class="item">
						<a href="#"> <span class="setting"></span>
						</a>
						<div class="ibar_login_box status_login">
							<div class="avatar_box">
								<p class="avatar_imgbox">
									<img src="../images/no-img_mid_.jpg" />
								</p>
								<ul class="user_info">
									<li>用户名：sl1903</li>
									<li>级&nbsp;别：普通会员</li>
								</ul>
							</div>
							<div class="login_btnbox">
								<a href="#" class="login_order">我的订单</a> <a href="#"
									class="login_favorite">我的收藏</a>
							</div>
							<i class="icon_arrow_white"></i>
						</div>

					</div>
					<div id="shopCart" class="item">
						<a href="#"> <span class="message"></span>
						</a>
						<p>购物车</p>
						<p class="cart_num">0</p>
					</div>
					<div id="asset" class="item">
						<a href="#"> <span class="view"></span>
						</a>
						<div class="mp_tooltip">
							我的资产 <i class="icon_arrow_right_black"></i>
						</div>
					</div>

					<div id="foot" class="item">
						<a href="#"> <span class="zuji"></span>
						</a>
						<div class="mp_tooltip">
							我的足迹 <i class="icon_arrow_right_black"></i>
						</div>
					</div>

					<div id="brand" class="item">
						<a href="#"> <span class="wdsc"><img
								src="../images/wdsc.png" /></span>
						</a>
						<div class="mp_tooltip">
							我的收藏 <i class="icon_arrow_right_black"></i>
						</div>
					</div>

					<div id="broadcast" class="item">
						<a href="#"> <span class="chongzhi"><img
								src="../images/chongzhi.png" /></span>
						</a>
						<div class="mp_tooltip">
							我要充值 <i class="icon_arrow_right_black"></i>
						</div>
					</div>

					<div class="quick_toggle">
						<li class="qtitem"><a href="#"><span class="kfzx"></span></a>
							<div class="mp_tooltip">
								客服中心<i class="icon_arrow_right_black"></i>
							</div></li>
						<!--二维码 -->
						<li class="qtitem"><a href="#none"><span
								class="mpbtn_qrcode"></span></a>
							<div class="mp_qrcode" style="display:none;">
								<img src="../images/weixin_code_145.png" /><i
									class="icon_arrow_white"></i>
							</div></li>
						<li class="qtitem"><a href="#top" class="return_top"><span
								class="top"></span></a></li>
					</div>

					<!--回到顶部 -->
					<div id="quick_links_pop" class="quick_links_pop hide"></div>

				</div>

			</div>
			<div id="prof-content" class="nav-content">
				<div class="nav-con-close">
					<i class="am-icon-angle-right am-icon-fw"></i>
				</div>
				<div>我</div>
			</div>
			<div id="shopCart-content" class="nav-content">
				<div class="nav-con-close">
					<i class="am-icon-angle-right am-icon-fw"></i>
				</div>
				<div>购物车</div>
			</div>
			<div id="asset-content" class="nav-content">
				<div class="nav-con-close">
					<i class="am-icon-angle-right am-icon-fw"></i>
				</div>
				<div>资产</div>

				<div class="ia-head-list">
					<a href="#" target="_blank" class="pl">
						<div class="num">0</div>
						<div class="text">优惠券</div>
					</a> <a href="#" target="_blank" class="pl">
						<div class="num">0</div>
						<div class="text">红包</div>
					</a> <a href="#" target="_blank" class="pl money">
						<div class="num">￥0</div>
						<div class="text">余额</div>
					</a>
				</div>

			</div>
			<div id="foot-content" class="nav-content">
				<div class="nav-con-close">
					<i class="am-icon-angle-right am-icon-fw"></i>
				</div>
				<div>足迹</div>
			</div>
			<div id="brand-content" class="nav-content">
				<div class="nav-con-close">
					<i class="am-icon-angle-right am-icon-fw"></i>
				</div>
				<div>收藏</div>
			</div>
			<div id="broadcast-content" class="nav-content">
				<div class="nav-con-close">
					<i class="am-icon-angle-right am-icon-fw"></i>
				</div>
				<div>充值</div>
			</div>
		</div>
	</div>
</body>
</html>
