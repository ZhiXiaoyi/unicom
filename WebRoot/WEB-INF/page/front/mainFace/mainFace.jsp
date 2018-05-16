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


<title>中国电信网上营业厅</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta content="" name="description">
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
<meta name="renderer" content="webkit">
<meta name="baidu-site-verification" content="Eo9fkplOJv">
<script type="text/javascript" src="js/front/ct189.js"></script>
<link rel="shortcut icon" type="image/x-icon"
	href="images/front/ico/logo.ico" media="screen">
<link rel="stylesheet" href="css/front/mainFace/common_indexv2.css">
<link href="css/front/login/login.css" rel="stylesheet">

<script type="text/javascript" src="js/jquery.min.js"></script>

<script>
	
	function phonePackAge(){
		 var userId = $("#isLogin").val();
				if(userId !=""){
					$.ajax({
						cache: true,
						type: "POST",
						url:"storejson/selectjifen.action",
						data:$('#searchForm').serialize(),// 你的formid
						async: false,
						error: function(request) {
						},
						success: function(data) {
							var info =data;
							if(info.mobileCard == null){
								alert("请先绑定下您的手机号码");	 	
							  }else{
							  	location="applicationfrom/toPackages";
							  }					 		
							}
	    				}); 
				}else{
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

		<!--menu-->
		<div class="menu z222">
			<div class="content z222">
				<div class="menu_01 z222">
					<a class="toptiocsa"></a>
					<!--下拉分类导航-->
					<div class="meun_down z222">
						<ul>
							<!--<S>-->
							<li class="down_00"><a href="" target="_blank">手机</a>
								<div class="down_00_ul">
									<div class="down_ul_a f12 bb1_a pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">品牌</span> <span
											class="span_font_a"> <a href="" target="_blank">iPhone
												<span class="span_s">|</span>
										</a> <a href="" target="_blank">三星<span class="span_s">|</span></a>
											<a href="" target="_blank">小米<span class="span_s">|</span></a>
											<a href="" target="_blank">华为<span class="span_s">|</span></a>
											<a href="" target="_blank">中兴<span class="span_s">|</span></a>
											<span class="fr w43"><a href="">更多&gt;&gt;</a></span> <!--<span class="fr w43"><a href="#">更多>></a></span>-->
										</span>
									</div>
									<div class="down_ul_a f12 bb1_a pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">价格</span> <span
											class="span_font_a"> <a href="" target="_blank">0-499元<span
												class="span_s">|</span></a> <a href="" target="_blank">500-999元<span
												class="span_s">|</span></a> <a href="" target="_blank">1000-1999元<span
												class="span_s">|</span></a> <a href="" target="_blank">2000-2999元<span
												class="span_s">|</span></a> <a href="" target="_blank">3000-3999元<span
												class="span_s">|</span></a> <a href="" target="_blank">4000-4999元<span
												class="span_s">|</span></a> <a href="" target="_blank">5000元以上<span
												class="span_s">|</span></a> <span class="fr w43"><a
												href="">更多&gt;&gt;</a></span> <!--<span class="fr w43"><a href="#">更多>></a></span>-->
										</span>
									</div>
									<div class="down_ul_a f12 bb1_a pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">系统</span> <span
											class="span_font_a"> <a href="" target="_blank">苹果（IOS）<span
												class="span_s">|</span></a> <a href="" target="_blank">安卓（Android）<span
												class="span_s">|</span></a>
										</span>
									</div>
									<div class="down_ul_a f12 bb1_a pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">屏幕尺寸</span> <span
											class="span_font_a"> <a href="" target="_blank">3.0英寸及以下<span
												class="span_s">|</span></a> <a href="" target="_blank">3.1-4.5英寸<span
												class="span_s">|</span></a> <a href="" target="_blank">5.1-5.5英寸<span
												class="span_s">|</span></a> <span class="fr w43"><a
												href="">更多&gt;&gt;</a></span>
										</span>
									</div>
									<div class="down_ul_a f12 bb0 pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">类型</span> <span
											class="span_font_a"> <a href="" target="_blank">合约机<span
												class="span_s">|</span></a> <a href="" target="_blank">单机购买<span
												class="span_s">|</span></a> <span class="fr w43"><a
												href="">更多&gt;&gt;</a></span>
										</span>
									</div>
									<div class="w h ov ml20 mr20 pt10">
										<span class="fl w270 h181"> <a href="" target="_blank">
												<img src="images/front/mainFace/grey.gif" data-original=""
												style="user-select: none;">
										</a></span> <span class="fl w270 h181 ml10"><a href=""
											target="_blank"> <img
												src="images/front/mainFace/grey.gif" data-original=""
												style="user-select: none;"></a></span>
									</div>
								</div></li>
							<li class="down_01"><a href="" target="_blank">套餐</a><a>/</a><a
								href="" target="_blank">靓号</a>
								<div class="down_01_ul">
									<div class="down_ul_a f12 bb0 pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">号码</span> n <span
											class="span_font_a"> <a href="" target="_blank">133<span
												class="span_s">|</span></a> <a href="" target="_blank">153<span
												class="span_s">|</span></a> <a href="" target="_blank">177<span
												class="span_s">|</span></a> <a href="" target="_blank">180<span
												class="span_s">|</span></a> <a href="" target="_blank">181<span
												class="span_s">|</span></a> <a href="" target="_blank">189<span
												class="span_s">|</span></a> <a href="" target="_blank">精选号码<span
												class="span_s">|</span></a> <span class="fr w43"><a
												href="">更多&gt;&gt;</a></span>
										</span>
									</div>
									<div class="down_ul_a f12 bb1_a pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">套餐</span> <span
											class="span_font_a"> <a type="button"
											onclick="phonePackAge()">更换手机套餐<span</a>
										</span>
									</div>
									<div class="down_ul_a f12 bb0 pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">号码类型</span> <span
											class="span_font_a"> <a href="" target="_blank">生日号<span
												class="span_s">|</span></a> <a href="" target="_blank">情侣号<span
												class="span_s">|</span></a> <a href="" target="_blank">亲情号<span
												class="span_s">|</span></a> <span class="fr w43"><a
												href="">更多&gt;&gt;</a></span>
										</span>
									</div>
									<div class="w h ov ml20 mr20 pt10">
										<span class="fl w270 h181"> <a href="" target="_blank">
												<img src="images/front/mainFace/grey.gif" data-original=""
												style="user-select: none;">
										</a></span> <span class="fl w270 h181 ml10"> <a href=""
											target="_blank"> <img
												src="images/front/mainFace/grey.gif" data-original=""
												style="user-select: none;"></a></span>
									</div>
								</div></li>
							<li class="down_02"><a href="" target="_blank">宽带</a>
								<div class="down_02_ul">
									<div class="down_ul_a f12 bb1_a pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">宽带</span> <span
											class="span_font_a"> <a href="" target="_blank">装移修进度查询<span
												class="span_s">|</span></a> <a href="" target="_blank">宽带新装预登记<span
												class="span_s">|</span></a> <a href="" target="_blank">宽带测速<span
												class="span_s">|</span></a> <a href="" target="_blank">智能提速<span
												class="span_s">|</span></a> <a href="" target="_blank">宽带提速包<span
												class="span_s">|</span></a> <a href="" target="_blank">ITV新装预登记<span
												class="span_s">|</span></a> <a href="" target="_blank">宽带上网助手<span
												class="span_s">|</span></a> <a href="" target="_blank">宽带充值<span
												class="span_s">|</span></a>
										</span>
									</div>

									<div class="down_ul_a f12 bb0 pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">宽带提速</span> <span
											class="span_font_a"> <a href="" target="_blank">翼网打尽<span
												class="span_s">|</span></a>
										</span>
									</div>
									<div class="w h ov ml20 mr20 pt10">
										<span class="fl w270 h181"><a href="" target="_blank"><img
												src="images/front/mainFace/grey.gif" data-original=""
												style="user-select: none;"></a></span> <span
											class="fl w270 h181 ml10"><a href="" target="_blank"><img
												src="images/front/mainFace/grey.gif" data-original=""
												style="user-select: none;"></a></span>
									</div>
								</div></li>
							<li class="down_03"><a href="" target="_blank">智能</a>
								<div class="down_03_ul">
									<div class="down_ul_a f12 bb1_a pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">手机配件</span> <span
											class="span_font_a"> <a href="" target="_blank">移动电源<span
												class="span_s">|</span></a> <a href="" target="_blank">耳机<span
												class="span_s">|</span></a> <a href="" target="_blank">手机存储卡<span
												class="span_s">|</span></a> <a href="" target="_blank">车载配件<span
												class="span_s">|</span></a> <a href="" target="_blank">更多配件<span
												class="span_s">|</span></a>
										</span>
									</div>
									<div class="down_ul_a f12 bb0 pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">智能设备</span> <span
											class="span_font_a"> <a href="" target="_blank">路由<span
												class="span_s">|</span></a> <a href="" target="_blank">其它<span
												class="span_s">|</span></a>
										</span>
									</div>
									<div class="w h ov ml20 mr20 pt10">
										<span class="fl w270 h181"><a href="" target="_blank"><img
												src="images/front/mainFace/grey.gif" data-original=""
												style="user-select: none;"></a></span> <span
											class="fl w270 h181 ml10"><a href="" target="_blank"><img
												src="images/front/mainFace/grey.gif" data-original=""
												style="user-select: none;"></a></span>
									</div>
								</div></li>
							<li class="down_04"><a href="">话费</a>
								<div class="down_04_ul">
									<div class="down_ul_a f12 bb0 pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">购买充值卡</span> <span
											class="span_font_a"> <a href="" target="_blank">20元充值卡<span
												class="span_s">|</span></a> <a href="" target="_blank">30元充值卡<span
												class="span_s">|</span></a> <a href="" target="_blank">50元充值卡<span
												class="span_s">|</span></a> <a href="" target="_blank">100元充值卡<span
												class="span_s">|</span></a> <span class="fr w43"><a
												href="">更多&gt;&gt;</a></span>
										</span>
									</div>
									<div class="down_ul_a f12 bb1_a pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">充值卡充值</span> <span
											class="span_font_a"> <a href="" target="_blank">11888充值卡<span
												class="span_s">|</span></a> <a href="" target="_blank">充值卡历史查询<span
												class="span_s">|</span></a> <span class="fr w43"><a
												href="">更多&gt;&gt;</a></span>
										</span>
									</div>

									<div class="down_ul_a f12 bb0 pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">银行卡充值</span> <span
											class="span_font_a"> <a href="" target="_blank">宽带年缴续费<span
												class="span_s">|</span></a> <a href="" target="_blank">代理商预存<span
												class="span_s">|</span></a> <a href="recharge/maintorecharge"
											target="_blank">手机缴费<span class="span_s">|</span></a> <a
											href="" target="_blank">翼支付<span class="span_s">|</span></a>
											<span class="fr w43"><a href="">更多&gt;&gt;</a></span>
										</span>
									</div>
									<div class="w h ov ml20 mr20 pt10">
										<span class="fl w270 h181"><a href="" target="_blank"><img
												src="images/front/mainFace/grey.gif" data-original=""
												style="user-select: none;"></a></span> <span
											class="fl w270 h181 ml10"><a href="" target="_blank"><img
												src="images/front/mainFace/grey.gif" data-original=""
												style="user-select: none;"></a></span>
									</div>
								</div></li>
							<li class="down_05"><a href="">费用/营业厅</a>
								<div class="down_05_ul">
									<div class="down_ul_a f12 bb1_a pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">我的话费</span> <span
											class="span_font_a"> <a href="" target="_blank">余额查询<span
												class="span_s">|</span></a> <a href="" target="_blank">欠费查询<span
												class="span_s">|</span></a> <a href="" target="_blank">实时话费查询<span
												class="span_s">|</span></a>
										</span>
									</div>
									<div class="down_ul_a f12 bb1_a pt10 h ov">
										<span class="fl fb600 w80 f_lh_a">我的业务</span> <span
											class="span_font_a"> <a href="" target="_blank">套餐使用情况<span
												class="span_s">|</span></a> <a href="" target="_blank">服务定制<span
												class="span_s">|</span></a>
										</span>
									</div>
									<div class="down_ul_a f12 bb1_a pt10 h ov">
										<span class="fl fb600 w80 f_lh_a">账单查询</span> <span
											class="span_font_a"> <a href="" target="_blank">历史账单查询<span
												class="span_s">|</span></a> <a href="" target="_blank">交费助手查询<span
												class="span_s">|</span></a> <a href="" target="_blank">电子发票<span
												class="span_s">|</span></a>
										</span>
									</div>

									<div class="down_ul_a f12 bb0 pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">详细查询</span> <span
											class="span_font_a"> <a href="" target="_blank">语音详单<span
												class="span_s">|</span></a> <a href="" target="_blank">上网清单<span
												class="span_s">|</span></a> <a href="" target="_blank">短信清单<span
												class="span_s">|</span></a> <a href="" target="_blank">其它<span
												class="span_s">|</span></a>
										</span>
									</div>


									<div class="down_ul_a f12 bb0 pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">营业厅查询</span> <span
											class="span_font_a"> <a href="map/tomap"
											target="_blank">附近营业厅<span</span>
									</div>

									<div class="w h ov ml20 mr20 pt10">
										<span class="fl w270 h181"><a href="" target="_blank"><img
												src="images/front/mainFace/grey.gif" data-original=""
												style="user-select: none;"></a></span> <span
											class="fl w270 h181 ml10"><a href="" target="_blank"><img
												src="images/front/mainFace/grey.gif" data-original=""
												style="user-select: none;"></a></span>
									</div>
								</div></li>
							<li class="down_06"><a href="">业务</a>
								<div class="down_06_ul">
									<div class="down_ul_a f12 bb1_a pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">手机用户</span> <span
											class="span_font_a"> <a href="" target="_blank">业务办理<span
												class="span_s">|</span></a> <a href="" target="_blank">在用业务查询<span
												class="span_s">|</span></a> <a href="" target="_blank">流量超市<span
												class="span_s">|</span></a> <a href="" target="_blank">订购短信包<span
												class="span_s">|</span></a>
										</span>
									</div>
									<div class="down_ul_a f12 bb1_a pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">固话用户</span> <span
											class="span_font_a"> <a href="" target="_blank">固定电话新装<span
												class="span_s">|</span></a> <a href="" target="_blank">呼叫等待<span
												class="span_s">|</span></a> <a href="" target="_blank">来电显示<span
												class="span_s">|</span></a>
										</span>
									</div>
									<div class="down_ul_a f12 bb1_a pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">宽带用户</span> <span
											class="span_font_a"> <a href="" target="_blank">融合套餐<span
												class="span_s">|</span></a> <a href="" target="_blank">单宽带新装<span
												class="span_s">|</span></a> <a href="" target="_blank">宽带包年续费<span
												class="span_s">|</span></a> <a href="" target="_blank">wifi流量卡<span
												class="span_s">|</span></a> <span class="fr w43"><a
												href="">更多&gt;&gt;</a></span>
										</span>
									</div>

									<div class="down_ul_a f12 bb1_a pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">增值业务</span> <span
											class="span_font_a"> <a href="" target="_blank">天翼阅读<span
												class="span_s">|</span></a> <a href="" target="_blank">爱游戏<span
												class="span_s">|</span></a> <a href="" target="_blank">爱动漫<span
												class="span_s">|</span></a> <a href="" target="_blank">天翼空间<span
												class="span_s">|</span></a> <a href="" target="_blank">天翼云<span
												class="span_s">|</span></a> <a href="" target="_blank">翼支付<span
												class="span_s">|</span></a> <a href="" target="_blank">天翼视讯<span
												class="span_s">|</span></a>
										</span>
									</div>
									<div class="down_ul_a f12 bb0 pt10 h ov">
										<span class="fl fb600 w80 f_lh_a ">行业应用</span> <span
											class="span_font_a"> <a href="" target="_blank">翼支付<span
												class="span_s">|</span></a> <a href="" target="_blank">交费助手<span
												class="span_s">|</span></a>
										</span>
									</div>
									<div class="w h ov ml20 mr20 pt10">
										<span class="fl w270 h181"><a href="" target="_blank"><img
												src="images/front/mainFace/grey.gif" data-original=""
												style="user-select: none;"></a></span> <span
											class="fl w270 h181 ml10"><a href="" target="_blank"><img
												src="images/front/mainFace/grey.gif" data-original=""
												style="user-select: none;"></a></span>
									</div>
								</div></li>
						</ul>
					</div>
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

					<li><a href="userLogin/toMainFace" class="headmain_bg">首页</a></li>
					<li class="mainlevel"><a href="store/topage.action"
						target="_blank">商城</a>
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
				<!--登陆-->
				<div style="float:right;">
					<iframe src="iframes/toRight" width="130" height="40"
						allowtransparency="true" frameborder="0" scrolling="no">iframe
					</iframe>
				</div>
			</div>
		</div>
	</div>
	<!--banner-->
	<div class="banner">
		<!--banner_right-->
		<div class="w1200 h421 m z222">
			<div class="w224 h409 bd fr z222 pr mt5 bcfff">
				<!--专区/公告-->
				<div class="pt_main w224 h195">
					<div class="mod mod_jjfa tab01">
						<ul class="tab_menu bcpf">
							<li class="cur w113"><a class="tabmenu02 fl"><span>欢享服务</span></a><span
								class="fr ccc li_mt2">|</span></li>
							<li class=" w97"><a class="tabmenu01"><span
									style="padding:0;width:100px">超值购</span></a></li>
						</ul>
						<!--专区-->
						<div class="tab_cont">
							<div class="cont cur">
								<div id="pic_list_1" class="scroll_horizontal_a">
									<a class="next"></a><a class="prev"></a>
									<div class="box">
										<ul class="list list_img">

											<li>
												<div class="mt10 ml13 ">
													<span class="fl tc lh26 w67"> <a class="a_img"
														href="" target="_blank"> <img
															src="images/front/mainFace/c9cd0cd7-a4fd-495b-8a81-897b60fcfdca.png"
															style="user-select: none;">
															<p class="hxfw-czg">星级服务</p></a></span> <span class="fl tc lh26 w67">
														<a class="a_img" href="" target="_blank"> <img
															src="images/front/mainFace/cc20dd8e-8f8b-44e6-9e55-3c593c7e6a63.png"
															style="user-select: none;">
															<p class="hxfw-czg">客服中心</p></a>
													</span> <span class="fl tc lh26 w67"><a class="a_img"
														href="" target="_blank"><img
															src="images/front/mainFace/6f3c92cd-7a18-46c0-9847-ebb759c7d406.png"
															style="user-select: none;">
															<p class="hxfw-czg">积分商城</p></a></span> <span class="fl tc lh26 w67"><a
														class="a_img" href="" target="_blank"><img
															src="images/front/mainFace/5fd3ea0c-f320-4555-b8e5-372117665db6.png"
															style="user-select: none;">
															<p class="hxfw-czg">资费专区</p></a></span> <span class="fl tc lh26 w67"><a
														class="a_img" href="" target="_blank"><img
															src="images/front/mainFace/032b3260-1c22-41ab-b098-59ac51f49b78.jpg"
															style="user-select: none;">
															<p class="hxfw-czg">费用查询</p></a></span> <span class="fl tc lh26 w67"><a
														class="a_img" href="" target="_blank"><img
															src="images/front/mainFace/c4c02330-f082-408f-b251-3e2906a590cb.jpg"
															style="user-select: none;">
															<p class="hxfw-czg">业务办理</p></a></span>
												</div>
											</li>
											<li>
												<div class="mt10  ml13">
													<span class="fl tc lh26 w67"><a class="a_img"
														href="" target="_blank"><img
															src="images/front/mainFace/82cd5a8d-8871-49e8-a78b-7f7b92b616ea.png"
															style="user-select: none;">
															<p class="hxfw-czg">业务查询</p></a></span> <span class="fl tc lh26 w67"><a
														class="a_img" href="" target="_blank"><img
															src="images/front/mainFace/3968b904-d7fd-4221-8d89-48064f8ec8ec.jpg"
															style="user-select: none;">
															<p class="hxfw-czg">流量专区</p></a></span>
												</div>
											</li>


											<li>
												<div class="mt10 ml13 ">
													<span class="fl tc lh26 w67"><a class="a_img"
														href="" target="_blank"><img
															src="images/front/mainFace/c9cd0cd7-a4fd-495b-8a81-897b60fcfdca.png"
															style="user-select: none;">
															<p class="hxfw-czg">星级服务</p></a></span> <span class="fl tc lh26 w67"><a
														class="a_img" href="" target="_blank"><img
															src="images/front/mainFace/cc20dd8e-8f8b-44e6-9e55-3c593c7e6a63.png"
															style="user-select: none;">
															<p class="hxfw-czg">客服中心</p></a></span> <span class="fl tc lh26 w67"><a
														class="a_img" href="" target="_blank"><img
															src="images/front/mainFace/6f3c92cd-7a18-46c0-9847-ebb759c7d406.png"
															style="user-select: none;">
															<p class="hxfw-czg">积分商城</p></a></span> <span class="fl tc lh26 w67"><a
														class="a_img" href="" target="_blank"><img
															src="images/front/mainFace/5fd3ea0c-f320-4555-b8e5-372117665db6.png"
															style="user-select: none;">
															<p class="hxfw-czg">资费专区</p></a></span> <span class="fl tc lh26 w67"><a
														class="a_img" href="" target="_blank"><img
															src="images/front/mainFace/032b3260-1c22-41ab-b098-59ac51f49b78.jpg"
															style="user-select: none;">
															<p class="hxfw-czg">费用查询</p></a></span> <span class="fl tc lh26 w67"><a
														class="a_img" href="" target="_blank"><img
															src="images/front/mainFace/c4c02330-f082-408f-b251-3e2906a590cb.jpg"
															style="user-select: none;">
															<p class="hxfw-czg">业务办理</p></a></span>
												</div>
											</li>
											<li>
												<div class="mt10  ml13">
													<span class="fl tc lh26 w67"><a class="a_img"
														href="" target="_blank"><img
															src="images/front/mainFace/82cd5a8d-8871-49e8-a78b-7f7b92b616ea.png"
															style="user-select: none;">
															<p class="hxfw-czg">业务查询</p></a></span> <span class="fl tc lh26 w67"><a
														class="a_img" href="" target="_blank"><img
															src="images/front/mainFace/3968b904-d7fd-4221-8d89-48064f8ec8ec.jpg"
															style="user-select: none;">
															<p class="hxfw-czg">流量专区</p></a></span>
												</div>
											</li>
										</ul>

									</div>
								</div>
							</div>
							<!--公告-->
							<div class="cont">
								<div id="pic_list_0" class="scroll_horizontal_a">
									<a class="next"></a><a class="prev"></a>
									<div class="box">
										<ul class="list list_img">

											<li>
												<div class="mt10 ml13 ">
													<span class="fl tc lh26 w67"><a href=""
														target="_blank"><img
															src="images/front/mainFace/682852ed-811d-4314-9fb0-6ec9888612d4.png"
															style="user-select: none;">
															<p class="hxfw-czg">流量超市</p></a></span> <span class="fl tc lh26 w67"><a
														href="" target="_blank"><img
															src="images/front/mainFace/79232a95-af72-4e63-a818-563b66b7e33e.png"
															style="user-select: none;">
															<p class="hxfw-czg">靓号专区</p></a></span> <span class="fl tc lh26 w67"><a
														href="" target="_blank"><img
															src="images/front/mainFace/56fedf28-7fd9-4ddf-9e3f-3d2483471cf0.png"
															style="user-select: none;">
															<p class="hxfw-czg">智能专区</p></a></span> <span class="fl tc lh26 w67"><a
														href="" target="_blank"><img
															src="images/front/mainFace/472ebf73-9ec6-48a6-a998-7a773de4bc0b.png"
															style="user-select: none;">
															<p class="hxfw-czg">4G专区</p></a></span> <span class="fl tc lh26 w67"><a
														href="" target="_blank"><img
															src="images/front/mainFace/6c2ebefc-a4c3-4118-9808-d817689829e1.png"
															style="user-select: none;">
															<p class="hxfw-czg">资费专区</p></a></span> <span class="fl tc lh26 w67"><a
														href="" target="_blank"><img
															src="images/front/mainFace/60a08354-f50c-4cc4-a6f0-ae83bbbb9e19.png"
															style="user-select: none;">
															<p class="hxfw-czg">以旧换新</p></a></span>
												</div>
											</li>
											<li>
												<div class="mt10  ml13">
													<span class="fl tc lh26 w67"><a href=""
														target="_blank"><img
															src="images/front/mainFace/05b2f2db-b29e-4cd7-8b9c-b501b2a7bf58.png"
															style="user-select: none;">
															<p class="hxfw-czg">个人定制</p></a></span>
												</div>
											</li>


											<li>
												<div class="mt10 ml13 ">
													<span class="fl tc lh26 w67"><a href=""
														target="_blank"><img
															src="images/front/mainFace/682852ed-811d-4314-9fb0-6ec9888612d4.png"
															style="user-select: none;">
															<p class="hxfw-czg">流量超市</p></a></span> <span class="fl tc lh26 w67"><a
														href="" target="_blank"><img
															src="images/front/mainFace/79232a95-af72-4e63-a818-563b66b7e33e.png"
															style="user-select: none;">
															<p class="hxfw-czg">靓号专区</p></a></span> <span class="fl tc lh26 w67"><a
														href="" target="_blank"><img
															src="images/front/mainFace/56fedf28-7fd9-4ddf-9e3f-3d2483471cf0.png"
															style="user-select: none;">
															<p class="hxfw-czg">智能专区</p></a></span> <span class="fl tc lh26 w67"><a
														href="" target="_blank"><img
															src="images/front/mainFace/472ebf73-9ec6-48a6-a998-7a773de4bc0b.png"
															style="user-select: none;">
															<p class="hxfw-czg">4G专区</p></a></span> <span class="fl tc lh26 w67"><a
														href="" target="_blank"><img
															src="images/front/mainFace/6c2ebefc-a4c3-4118-9808-d817689829e1.png"
															style="user-select: none;">
															<p class="hxfw-czg">资费专区</p></a></span> <span class="fl tc lh26 w67"><a
														href="" target="_blank"><img
															src="images/front/mainFace/60a08354-f50c-4cc4-a6f0-ae83bbbb9e19.png"
															style="user-select: none;">
															<p class="hxfw-czg">以旧换新</p></a></span>
												</div>
											</li>
											<li>
												<div class="mt10  ml13">
													<span class="fl tc lh26 w67"><a href=""
														target="_blank"><img
															src="images/front/mainFace/05b2f2db-b29e-4cd7-8b9c-b501b2a7bf58.png"
															style="user-select: none;">
															<p class="hxfw-czg">个人定制</p></a></span>
												</div>
											</li>
										</ul>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="l_bjc w224 h2 ov"></div>
				<!--手机、流量、宽带、固话-->

				<style>
* {
	margin: 0;
	padding: 0;
}

.js-max-input {
	position: relative;
	z-index: 266;
	width: 115px;
	margin-left: 54px;
	*margin-left: 55px;
	border: solid 1px #DBDBDB;
	background: #fff;
	font-size: 14px;
	color: #FF8100;
	font-weight: bold;
	padding-left: 10px;
	line-height: 26px;
	height: 26px;
}

.son_ul {
	padding-bottom: 5px;
}

.son_ul li {
	padding-left: 0 !important;
	margin-left: 5px !important;
	width: 45px !important;
	float: left;
	text-align: center;
}
</style>
				<input type="text" style="display: none" id="proviceCode" value="">
				<input type="text" style="display: none" id="provinceCode" value="">
				<input type="text" style="display: none" id="provinceCodeTwo"
					value="">
				<div class="jiner" style="display: none;" id="selectmoney4">10</div>
				<div class="mt10" id="closemt">
					<ul id="lx_nav1" class="h ov">
						<li class="li01" id="huafei_titleqiehuan" onclick="">手机</li>
						<li class="li02" id="liuliang_titleqiehuan" onclick="">流量</li>
						<li class="li02" onclick="">宽带</li>
						<li class="li02 bnone" onclick="">固话</li>
					</ul>
					<div class="lx-con" id="voucha_1" style="display: block;">
						<ul id="lx_nav3" class="f12 w h ov ml18">
							<li class="li01" onclick=""><label class="lh30 h30 cp"><input
									onmouseover="getPassCode3()" name="1" type="radio" value=""
									checked="checked" class="ml5 vam h25 ff8 input_mt-2">
									银行卡充值</label></li>
							<li class="li02" onclick="s"><label class="lh30 h30 cp"><input
									onmouseover="flushCodeRandom()" name="1" type="radio" value=""
									class="ml5 vam h25 ff8 input_mt-2 ml10"> 卡密充值 </label></li>
						</ul>
						<!--话费充值卡充值-->
						<form action="" method="post" id="formID2">
							<div class="lx-con" id="vouchc_1" style="display: block;">
								<div class="recharge"
									style="min-height:74px;height:74px;padding-top:12px;">
									<p class="parentCls" style="z-index:266;">
										<span class="w46 h20 dpl lh20 tr mr4 f12">号码</span> <span
											class=""><input type="text" name="phoneNumber"
											onblur="checkPhoneNumber()" autocomplete="off"
											id="phoneNumber" maxlength="11"
											class="dropd_a f12 pl10 bd w115 h21 lh21"></span>
									</p>
									<p class="p_bt f12 tc ff8 bd z333" id="returnPhoneNumber"
										style="display: none;"></p>
									<div class="mt7 z222" style="padding-top:5px;">
										<span class="w46 h20 dpl lh20 tr mr4 f12">金额</span>
										<ul id="main_box" class="dpl f12 w64 pa h21 lh21 bd z222">
											<li class="select_box z222"><span
												class="pl10 w54 h21 lh21 z222 pull" id="huafei">10元</span>
												<ul class="son_ul z222 pulldown"
													style="display:none;width:105px;" id="setLandMoney">
													<li data-value="100">100元</li>
													<li data-value="10">10元</li>
													<li data-value="200">200元</li>
													<li data-value="20">20元</li>
													<li data-value="300">300元</li>
													<li data-value="30">30元</li>
													<li data-value="500">500元</li>
													<li data-value="50">50元</li>
												</ul></li>
										</ul>
										<div class="dpl f12 ff8 mb-3 ov ml73"
											style="color: rgb(228, 252, 30);" id="con98">9.85折</div>
										<div class="dpl f12 ff8 mb-3 ov ml73 jiner"
											style="display:none;*position:absolute;*margin-top:3px;"
											id="selectmoney">9.80</div>
										<span class="ff8 f12"
											style="display:none;*position:absolute;margin-top:3px;*margin-left: 110px;">元</span>

									</div>

									<p class="ff8 li_mt2 f12 user_error" id="successText5"></p>
									<input type="hidden" id="landAmountPhone"
										name="landAmountPhone" value="">
									<p class="f12 ff8 li_mt2 tc"></p>
								</div>
								<p class="mt5" id="rechargCheckCode3">
									<span class=" ml25"> <a id="submitRecharge"
										onclick="goToBankPay()"
										class="f12 cf bcff8201 br w100 h25 bd0 cp"
										style="padding:5px 26px;text-align: center;line-height: 25px; cursor:pointer ;">立即充值</a></span>
									<span class="ff_a f12 ml18 ccc_a"><a href=""
										target="_blank" rel="nofollow">充值专区</a></span>
								</p>
							</div>
						</form>
						<!--话费卡密充值-->
						<div class="lx-con" id="vouchc_2" style="display: none;">
							<div class="recharge">
								<p class="parentCls" style="z-index:266;">
									<span class="w46 h20 dpl lh20 tr mr4 f12">号码</span> <span
										class=""> <input id="accountNumber" autocomplete="off"
										name="accountNumber" value="" maxlength="11"
										onblur="checkAccountNumber()" type="text"
										class="dropd_a f12 pl10 bd w115 h21 lh21"></span>
								</p>
								<p id="returnAccountNumber" class="p_bt f12 tc ff8 bd z333"
									style="display: none;">请输入正确的电信号码</p>
								<div class="mt7">
									<span class="w46 h20 dpl lh20 tr mr4 f12">卡密</span> <span
										class=""> <input id="cardPassword" name="cardPwd"
										maxlength="18" type="text"
										class="dropd_a f12 pl10 bd w115 h21 lh21" value=""></span>
								</div>
								<p id="returnCardPWD" class="p_bt f12 tc ff8 bd z333"
									style="display: none;">请填写18位充值卡密码</p>
								<p class="aa mt5">
									<span class="w46 h20 dpl lh20 tr mr4 f12">验证码</span> <span
										class=""> <input id="checkcode" type="text"
										name="verificationCode"
										class="dropd_a f12 pl10 bd w54  h21 lh21" value=""></span> <span
										class="dpl vm"><img src="" name="checkCodeImg"
										id="code_img" onclick="flushCodeRandom()"
										style="border: 1px solid rgb(228, 228, 228); cursor: pointer; height: 21px; width: 76px; user-select: none;"></span>
								</p>
								<p class="ff8 li_mt2 f12 user_error" id="successText"></p>
							</div>
							<p class="mt5">
								<span class=" ml25"><a id="submitRechargeId"
									onclick="goToCardPay()"
									class="f12 cf bcff8201 br w100 h25 bd0 cp"
									style="padding:5px 26px;text-align: center;line-height: 25px; cursor:pointer ;">立即充值</a></span>
								<span class="ff_a f12 ml18 ccc_a"><a href=""
									rel="nofollow">充值专区</a></span>
							</p>
						</div>
					</div>
					<!--话费结束-->
					<!--流量开始-->
					<div class="lx-con" id="voucha_2" style="display: none;">
						<ul id="lx_nav4" class="f12 w h ov ml18">
							<li class="li01" onclick=""><label class="lh30 h30 cp"><input
									onmouseover="getPassCode4()" name="2" type="radio" value=""
									checked="checked" class="ml5 vam h25 ff8 input_mt-2">
									银行卡充值</label></li>
							<li class="li02" onclick=""><label class="lh30 h30 cp"><input
									onmouseover="flushCodeRandom2()" name="2" type="radio" value=""
									class="ml5 vam h25 ff8 input_mt-2 ml10"> 卡密充值 </label></li>
						</ul>
						<form action="" method="post" id="formID2">
							<div class="lx-con" id="vouchd_1" style="display: block;">
								<div class="recharge"
									style="min-height:74px;height:74px;padding-top:12px;">
									<p class="parentCls" style="z-index:266;">
										<span class="w46 h20 dpl lh20 tr mr4 f12">号码</span> <span
											class=""> <input id="liuliangPhone" autocomplete="off"
											maxlength="11" onblur="check2()" type="text"
											class="dropd_a f12 pl10 bd w115 h21 lh21" value=""></span>
									</p>
									<p class="p_bt f12 tc ff8 bd z333" id="returnliluliangPhone"
										style="display: none;"></p>
									<div class="mt7" style="padding-top:5px;">
										<span class="w46 h20 dpl lh20 tr mr4 f12">金额</span>
										<ul id="main_box" class="dpl f12 w64 pa h21 lh21 bd z222">
											<li class="select_box"><span
												class="pl10 w54 h21 lh21 pullLiuliang" id="liuLiang">60M</span>
												<ul class="son_ul pulldownLiuliang" style="display:none;"
													id="setLandMoney2" onchange="setLandMoney2()">
													<li value="60" data-value="10">60M</li>
													<li value="150" data-value="20">150M</li>
													<li value="300" data-value="30">300M</li>
												</ul></li>
										</ul>
										<div class="dpl f12 ff8 mb-3 ov ml73 liuliangjiner"
											style="*position:absolute;*margin-top:3px;" id="selectmoney2">10
										</div>
										<span class="ff8 f12"
											style="*position:absolute;margin-top:3px;*margin-left: 90px;">元</span>
									</div>
									<p class="aa mt5" style="display:none">
										<span class="w46 h20 dpl lh20 tr mr4 f12">验证码</span> <span
											class=""> <input id="checkcode4" type="text"
											name="verificationCode"
											class="dropd_a f12 pl10 bd w54  h21 lh21" value=""></span> <span
											class="dpl vm"><img src="" name="checkCodeImg"
											id="code_img4" onclick="getPassCode4()"
											style="border: 1px solid rgb(228, 228, 228); cursor: pointer; height: 21px; width: 76px; user-select: none;"></span>
									</p>
									<p class="ff8 li_mt2 f12 user_error" id="successText3"></p>
									<p class="f12 ff8 li_mt2 tc"></p>
								</div>
								<p class="mt5">
									<span class=" ml25"><a id="submitRecharge3"
										onclick="goToFlowBankPay()"
										class="f12 cf bcff8201 br w100 h25 bd0 cp"
										style="padding:5px 26px;text-align: center;line-height: 25px; cursor:pointer ;">立即充值</a></span>
									<span class="ff_a f12 ml18 ccc_a"><a href=""
										rel="nofollow">充值专区</a></span>
								</p>
							</div>
						</form>
						<!--流量卡密充值-->
						<div class="lx-con" id="vouchd_2" style="display: none;">
							<div class="recharge">
								<p class="parentCls" style="z-index:266;">
									<span class="w46 h20 dpl lh20 tr mr4 f12">号码</span> <span
										class=""> <input id="liluliangNumber"
										autocomplete="off" name="accountNumber" value=""
										maxlength="11" onblur="check()"
										class="dropd_a f12 pl10 bd w115 h21 lh21"></span>
								</p>
								<p id="returnliluliangAccountNumber"
									class="p_bt f12 tc ff8 bd z333" style="display: none;">
									请输入正确的电信号码</p>
								<div class="mt7">
									<span class="w46 h20 dpl lh20 tr mr4 f12">卡密</span> <span
										class=""> <input id="liluliangPassword" name="cardPwd"
										maxlength="18" class="dropd_a f12 pl10 bd w115 h21 lh21"
										value=""></span>
								</div>
								<p id="returnCardPassword" class="p_bt f12 tc ff8 bd z333"
									style="display: none;">请填写18位充值卡密码</p>
								<p class="aa mt5">
									<span class="w46 h20 dpl lh20 tr mr4 f12">验证码</span> <span
										class=""> <input id="checkcode2" type="text"
										name="verificationCode"
										class="dropd_a f12 pl10 bd w54  h21 lh21" value=""></span> <span
										class="dpl vm"><img src="" name="checkCodeImg"
										id="code_img2" onclick="flushCodeRandom2()"
										style="border: 1px solid rgb(228, 228, 228); cursor: pointer; height: 21px; width: 76px; user-select: none;"></span>
								</p>
								<p class="ff8 li_mt2 f12 user_error" id="successText2"></p>
							</div>
							<p class="mt5">
								<span class=" ml25"><a id="submitLiuliang"
									onclick="goToFlowCardPay()"
									class="f12 cf bcff8201 br w100 h25 bd0 cp"
									style="padding:5px 26px;text-align: center;line-height: 25px; cursor:pointer ;">立即充值</a></span>
								<span class="ff_a f12 ml18 ccc_a"><a href=""
									rel="nofollow">充值专区</a></span>
							</p>
						</div>
					</div>
					<div class="lx-con" id="voucha_3" style="display: none;">
						<form action="" method="post" id="form_kd">
							<ul id="lx_nav5" class="f12 w h ov ml18 subbtn">
								<li class="li01" onclick=""><label class="lh30 h30 cp"><input
										name="3" type="radio" value="1" checked="checked"
										class="ml5 vam h25 ff8 input_mt-2"> 银行卡充值</label></li>
								<li class="li02" onclick=""><label class="lh30 h30 cp"><input
										name="3" type="radio" value="2"
										class="ml5 vam h25 ff8 input_mt-2 ml10"> 卡密充值 </label></li>
							</ul>
							<div class="lx-con" id="vouche_1">
								<div class="recharge">
									<p class="pt10 pb15">
										<span class="w46 h20 dpl lh20 tr mr4 f12">号码</span> <span
											class=""> <input id="accountNumberKD" name=""
											type="text" class="dropd_a f12 pl10 bd w115 h21 lh21"
											value=""></span>
									</p>
									<div class="mt7 z222">
										<span class="w46 h20 dpl lh20 tr mr4 f12">金额</span>
										<ul id="main_box" class="dpl f12 w64 pa h21 lh21 z222">
											<li class="select_box z222"><input
												class="pl10 h21 lh21 z222 bd" value="10" id="languageKD"
												style="width:66px;cursor: pointer;background:url(images/front/mainFace/sl.jpg) no-repeat right;">
												<ul class="son_ul z222"
													style="display:none;  left: 0px;top: 20px;">
													<li data-value="10">10元</li>
													<li data-value="20">20元</li>
													<li data-value="30">30元</li>
													<li data-value="50">50元</li>
													<li data-value="100">100元</li>
													<li data-value="200">200元</li>
												</ul></li>
										</ul>
										<div class="dpl f12 mb-3 ov"
											style="margin-left: 34px;*position:absolute;*margin-top:4px;">元
										</div>
										<p class="f12 ff8 li_mt2 tc"></p>
									</div>
								</div>
								<p class="mt5">
									<span class=" ml25"> <input style="display: ;"
										type="submit" name="Submit"
										class="f12 cf bcff8201 br w100 h25 bd0 cp subbtn_1"
										value="立即充值" onclick="" rel="nofollow"> <!--银行卡充值--> <input
										style="display: none;" type="submit" name="Submit"
										class="f12 cf bcff8201 br w100 h25 bd0 cp subbtn_2"
										value="立即充值" onclick="" rel="nofollow"> <!--银行卡充值-->
									</span> <span class="ff_a f12 ml18 ccc_a"><a href=""
										rel="nofollow">充值专区</a></span>
								</p>
							</div>
						</form>
					</div>
					<!--
                    作者：494177552@qq.com
                    时间：2015-07-13
                    描述：宽带充值end
                -->
					<div class="lx-con" id="voucha_4" style="display: none;">
						<form action="" method="post" id="form_gh">
							<ul id="lx_nav6" class="f12 w h ov ml18 subbtn">
								<li class="li01" onclick=""><label class="lh30 h30 cp"><input
										name="4" type="radio" value="1" checked="checked"
										class="ml5 vam h25 ff8 input_mt-2"> 银行卡充值</label></li>
								<li class="li02" onclick=""><label class="lh30 h30 cp"><input
										name="4" type="radio" value="2"
										class="ml5 vam h25 ff8 input_mt-2 ml10"> 卡密充值 </label></li>
							</ul>
							<div class="lx-con" id="vouchf_1">
								<div class="recharge">
									<p class="pt10 pb15">
										<span class="w46 h20 dpl lh20 tr mr4 f12">号码</span> <span
											class=""><input style="width: 45px;" id="areaCodeGH"
											name="" type="text"
											class="dropd_a f12 pl10 bd w20 h21 lh21 pr10" value="">
											-</span> <span class=""> <input id="accountNumberGH" name=""
											type="text" class="dropd_a f12 pl10 bd w75 h21 lh21" value=""></span>
									</p>
									<div class="mt7 z222">
										<span class="w46 h20 dpl lh20 tr mr4 f12">金额</span>
										<ul id="main_box" class="dpl f12 w64 pa h21 lh21 z222">
											<li class="select_box z222"><input
												class="pl10 w54 h21 lh21 z222 bd" value="10" id="languageGH"
												style="width:66px;cursor: pointer;background:url(images/front/mainFace/sl.jpg) no-repeat right;">
												<ul class="son_ul z222"
													style="display:none;  left: 0px;top: 20px;">
													<li data-value="10">10元</li>
													<li data-value="20">20元</li>
													<li data-value="30">30元</li>
													<li data-value="50">50元</li>
													<li data-value="100">100元</li>
													<li data-value="200">200元</li>
												</ul></li>
										</ul>
										<div class="dpl f12 mb-3 ov"
											style="margin-left: 34px;*position:absolute;*margin-top:4px;">元
										</div>
										<p class="f12 ff8 li_mt2 tc"></p>
									</div>
								</div>
								<p class="mt5">
									<span class=" ml25"> <input style="display: ;"
										type="submit" name="Submit"
										class="f12 cf bcff8201 br w100 h25 bd0 cp subbtn_1"
										value="立即充值" onclick="" rel="nofollow"> <!--银行卡充值--> <input
										style="display: none;" type="submit" name="Submit"
										class="f12 cf bcff8201 br w100 h25 bd0 cp subbtn_2"
										value="立即充值" onclick="" rel="nofollow"> <!--银行卡充值-->
									</span> <span class="ff_a f12 ml18 ccc_a"><a href=""
										rel="nofollow">充值专区</a></span>
								</p>
							</div>
						</form>
					</div>
				</div>
				<div class="l_bjc w224 h2 ov mt7"></div>
				<p class="lh26">
					<span class="fl gg f12"><a href="">公告</a> :</span> <span
						class="ml10 w147 ov fl gg_a"> <marquee direction="left"
							onmouseover="this.stop();" onmouseout="this.start();"
							scrollamount="3" border="0">
							<a href="" target="_blank">关于企业邮箱免费用户升级及退网的公告</a> <a href=""
								target="_blank">关于Winmail邮箱用户退网的公告</a> <a href=""
								target="_blank">欢go网站春节期间物流放假通知</a> <a href="" target="_blank">中国电信福建分公司集团一卡两号业务退市公告</a>
							<a href="" target="_blank">关于2017年福建欢go网春节发货时间公告</a> <a href=""
								target="_blank">中国电信股份有限公司平潭分公司移动通信网第一批工程备案公示</a> <a href=""
								target="_blank">关于爱看4G、爱听4G和爱玩4G流量包停止赠送的公告</a> <a href=""
								target="_blank">中国电信福建公司网络升级公告</a> <a href="" target="_blank">中国电信福建公司校园一卡双号业务退市的公告</a>
							<a href="" target="_blank">中国电信福建公司副号业务退市公告</a> <a href=""
								target="_blank">11888卡服务升级</a> <a href="" target="_blank">关于翼支付网关升级公告</a>
							<a href="" target="_blank">谨防通讯信息诈骗提醒公告</a> <a href=""
								target="_blank">2017年中国电信福建公司校园招聘公告</a> <a href=""
								target="_blank">关于移动号卡销售启用新流程的公告</a> <a href="" target="_blank">关于推行增值税电子普通发票的业务公告</a>
							<a href="" target="_blank">关于进一步落实电话用户真实身份信息登记规定的通告</a> <a
								href="" target="_blank">关于在全省推行ChinaNet WiFi短信动态密码功能的通告</a> <a
								href="" target="_blank">中国电信福建公司关于推进增值税电子普通发票的通告</a> <a href=""
								target="_blank">中国电信福建公司星级服务说明</a> <a href="" target="_blank">关于中国电信推出“星级服务”的公告</a>
							<a href="" target="_blank">提速降费，信息惠民</a> <a href=""
								target="_blank">中国电信宣布下调国际漫游费相关公告</a> <a href="" target="_blank">网络安全宣传视频</a>
						</marquee>
					</span>
				</p>
			</div>
		</div>
		<!--banner-->
		<div class="banner_show" id="banner_show z1">
			<a href="" target="_blank" class="bannger_inbox"
				style="margin-left: -960px; z-index: 7; display: none;"><img
				src="images/front/mainFace/97c3616b-55e9-42f8-8d34-5aecc891f566.jpg"
				width="1920" height="421" style="user-select: none;"></a> <a
				href="" target="_blank" class="bannger_inbox"
				style="margin-left: -960px; z-index: 6; display: none;"> <img
				width="1920" height="421"
				src="images/front/mainFace/1d82ed37-baae-4a27-809c-861b7d802ba5.png"
				style="user-select: none;"></a> <a href="" target="_blank"
				class="bannger_inbox"
				style="margin-left: -960px; z-index: 5; display: none;"><img
				src="images/front/mainFace/11e4a593-daee-4120-b651-5406f36a3e21.jpg"
				width="1920" height="421" style="user-select: none;"></a> <a
				href="http://189.cn/fj/1212/pc/ty/?p=A.FJ.SYJDT&amp;intaid=fj-sy-jdt-04-"
				target="_blank" class="bannger_inbox"
				style="margin-left: -960px; z-index: 4; display: none;"> <img
				width="1920" height="421"
				src="images/front/mainFace/203127ca-fd99-4efc-85fb-a094d6bdf79d.jpg"
				style="user-select: none;"></a> <a href="" target="_blank"
				class="bannger_inbox"
				style="margin-left: -960px; z-index: 3; display: block;"> <img
				width="1920" height="421"
				src="images/front/mainFace/a7cce52d-2f27-4ee4-a5be-0f6a09be7985.jpg"
				style="user-select: none;"></a> <a href="" target="_blank"
				class="bannger_inbox"
				style="margin-left: -960px; z-index: 2; display: none;"> <img
				width="1920" height="421"
				src="images/front/mainFace/ca0f2009-5cab-4ee2-8631-b114706538ad.jpg"
				style="user-select: none;"></a> <a href="" target="_blank"
				class="bannger_inbox"
				style="margin-left: -960px; z-index: 1; display: none;"><img
				src="images/front/mainFace/f594ac42-0b09-477a-b2c0-5153b8807da1.jpg"
				width="1920" height="421" style="user-select: none;"></a>
			<div class="banner_mag tc">
				<div class="yq_banner_list bce5 " id="yq_banner_list">
					<a href="javascript:;" rel="0" class=""> </a> <a
						href="javascript:;" rel="1" class=""> </a> <a href="javascript:;"
						rel="2" class=""> </a> <a href="javascript:;" rel="3" class="">
					</a> <a href="javascript:;" rel="4" class="hover"> </a> <a
						href="javascript:;" rel="5" class=""> </a> <a href="javascript:;"
						rel="6" class=""> </a>
				</div>
			</div>
		</div>
	</div>
	<!--腰带-->
	<!--
	作者：494177552@qq.com
	时间：2016-06-28
-->
	<!--main-->
	<div class="main w1200 m h ov">
		<!--极客炫耀-->
		<div class="sports_geeks ov mt30">
			<div class="sports_geeks_title w1200 h50 ov">
				<span class="fl"><div class="fl">
						<img src="images/front/mainFace/title_01.png"
							style="user-select: none;">
					</div>
					<div class="ml20 f14 fl mt23">好宝贝，够任性，就是要炫耀！</div></span> <span
					class="more fr f12 mt23"><a href="" target="_blank">更多&gt;&gt;</a></span>
			</div>
			<div class="sports_geeks_news w h ov">
				<span class="sps_gk_n_left fl w190 h420 cfe">
					<div class="w h100 bcff ">
						<span class="w97 h80 f12 br_img fl tc pt20 af fs"><a
							href="" target="_blank"><p>
									<img
										src="images/front/mainFace/561a124a-df98-420d-ae57-8d5128e76578.png"
										id="img1"
										style="user-select: none; display: inline; transform: rotate(0deg); transform-origin: 50% 50% 0px;">
								</p>
								<p class="mt4">4G专区</p></a></span> <span
							class="w90 h80 f12 fr tc pt20 af fs"><a href=""
							target="_blank"><p>
									<img
										src="images/front/mainFace/74dc7794-22c4-48e3-8e94-2aba398ffe38.png"
										id="img2"
										style="user-select: none; display: inline; transform: rotate(0deg); transform-origin: 50% 50% 0px;">
								</p>
								<p class="mt4">超级靓号</p></a></span>
					</div>
					<p class="go_img mt30 tc">
						<a href="" target="_blank"><img
							src="images/front/mainFace/0a4d11f3-81b5-4cad-8e0b-7297fd4e7c1c.png"
							style="user-select: none; display: inline;"></a>
					</p>

					<ul class="l_bj h ov mt20 sps_gk_ul pt10 pl20">
						<li><a href="" target="_blank">手机专区</a></li>
						<li><a href="" target="_blank">4G靓号</a></li>
						<li><a href="" target="_blank">3G升4G</a></li>
						<li><a href="" target="_blank">华为nova</a></li>
					</ul>
				</span> <span class="fr w606 h418 bt1 sps_gk_n_right go_img">
					<ul class="sps_gk_n_right_a">
						<li>
							<p class="c4b f14 mt30 fb600">
								<a href="" target="_blank">iPhone 7</a>
							</p>
							<p class="f12">
								<a href="" target="_blank"></a>
							</p>
							<p class="f14 jkxy1">5388元起</p>
							<p class="mt10">
								<a href="" target="_blank"><img
									src="images/front/mainFace/c2f78246-c9d9-4f29-867f-d6fbe296d621.jpg"
									data-original="" style="user-select: none; display: inline;"></a>
							</p>

						</li>
						<li>
							<p class="c4b f14 mt30 fb600">
								<a href="" target="_blank">华为nova </a>
							</p>
							<p class="f12">
								<a href="" target="_blank">美颜自拍 DTS音效 视频美颜</a>
							</p>
							<p class="f14 jkxy2">2088元</p>
							<p class="mt10">
								<a href="" target="_blank"><img
									src="images/front/mainFace/e1ec5050-1dbd-4fa8-8894-bb513e014b01.jpg"
									data-original="" style="user-select: none; display: inline;"></a>
							</p>

						</li>
						<li>
							<p class="c4b f14 mt30 fb600">
								<a href="" target="_blank">个人定制</a>
							</p>
							<p class="f12">
								<a href="" target="_blank">【分享日】</a>
							</p>
							<p class="f14  jkxy3"></p>
							<p class="mt10">
								<a href="" target="_blank"><img
									src="images/front/mainFace/f18aa5d9-af4f-4fea-9ae6-22ee3275b976.jpg"
									data-original="" style="user-select: none; display: inline;"></a>
							</p>

						</li>
					</ul>
					<ul class="sps_gk_n_right_b">
						<li>
							<p class="c4b f14 mt15 fb600">
								<a href="" target="_blank">华为畅享6</a>
							</p>
							<p class="f14 jkxy4">1099元</p>
							<p class="mt4">
								<a href="" target="_blank"><img
									src="images/front/mainFace/a404ca63-84b5-4ceb-8709-276504751604.jpg"
									data-original="" style="user-select: none; display: inline;"></a>
							</p>

						</li>
						<li>
							<p class="c4b f14 mt15 fb600">
								<a href="" target="_blank">荣耀 7i </a>
							</p>
							<p class="f14 jkxy5">788元</p>
							<p class="mt4">
								<a href="" target="_blank"><img
									src="images/front/mainFace/a9cdc935-2f42-42e9-bb66-b8ae28cc3227.jpg"
									data-original="" style="user-select: none; display: inline;"></a>
							</p>

						</li>
						<li>
							<p class="c4b f14 mt15 fb600">
								<a href="" target="_blank">魅蓝5</a>
							</p>
							<p class="f14 jkxy6">739元</p>
							<p class="mt4">
								<a href="" target="_blank"><img
									src="images/front/mainFace/6d765d54-38d6-4e7a-ba27-a76dfa10e38f.jpg"
									data-original="" style="user-select: none; display: inline;"></a>
							</p>

						</li>
					</ul>
				</span> <span class="w403 h418 bt1 br1 bb1 dpl play bd_combox">
					<div id="pic_list_2" class="scroll_horizontal">
						<div class="box">
							<ul class="list">
								<li><a href="" target="_blank"><img
										src="images/front/mainFace/46962b1f-b915-485d-9366-9d9d15aee29e.jpg"
										data-original="" style="user-select: none; display: inline;"></a></li>

								<li><a href="" target="_blank"><img
										src="images/front/mainFace/grey.gif" data-original=""
										style="user-select: none;"></a></li>
							</ul>
						</div>
					</div>
				</span>
			</div>
		</div>
		<!--快乐e家-->
		<div class="sports_geeks ov mt30">
			<div class="sports_geeks_title w1200 h50 ov">
				<span class="fl"><div class="fl">
						<img src="images/front/mainFace/title_02.png" data-original=""
							style="user-select: none; display: inline;">
					</div>
					<div class="ml20 f14 fl mt23">爱自己，爱家庭，爱生活！</div> </span> <span
					class="more fr f12 mt23"><a href="" target="_blank">更多&gt;&gt;</a></span>
			</div>
			<div class="sports_geeks_news w h ov">
				<span class="sps_gk_n_left fl w190 h420 cff9">
					<div class="w h100 bcff5 ">
						<span class="w97 h80 f12 br_img fl tc pt20 af fs"><a
							href="" target="_blank"><p>
									<img
										src="images/front/mainFace/d8645092-5573-4ce5-8280-e8177e391c50.png"
										data-original="" id="img3"
										style="user-select: none; display: inline; transform: rotate(0deg); transform-origin: 50% 50% 0px;">
								</p>
								<p class="mt4">ITV</p></a></span> <span
							class="w90 h80 f12 fr tc pt20 af fs"><a href=""
							target="_blank"><p>
									<img
										src="images/front/mainFace/fbbc343c-81c1-439a-8df4-4b6f01343625.png"
										data-original="" id="img4"
										style="user-select: none; display: inline; transform: rotate(0deg); transform-origin: 50% 50% 0px;">
								</p>
								<p class="mt4">宽带</p></a></span>
					</div>
					<p class="go_img mt30 tc">
						<a href="" target="_blank"><img
							src="images/front/mainFace/bb07289f-f069-410b-9eb3-3b327faa72f3.png"
							data-original="" style="user-select: none; display: inline;"></a>
					</p>
					<ul class="l_bj h ov mt20 sps_gk_ul pt10 pl20">
						<li><a href="" target="_blank">融合套餐</a></li>
						<li><a href="" target="_blank">宽带业务</a></li>
						<li><a href="" target="_blank">宽带资源查询</a></li>
						<li><a href="" target="_blank">宽带测速</a></li>
						<li><a href="" target="_blank">悦ME</a></li>
						<li><a href="" target="_blank">流量专区</a></li>
					</ul>
				</span> <span class="fr w606 h418 bt1 go_img">
					<ul class="fl ml-17">
						<li class="w201 h253 br1 bb1 ov tc m0">
							<p class="c4b f14 mt30 fb600">
								<a href="" target="_blank">宽带续费</a>
							</p>
							<p class="f12">
								<a href="" target="_blank">足不出户轻松搞定</a>
							</p>
							<p class="f14 klej1">不排队，不跑腿</p>
							<p class="mt10">
								<a href="" target="_blank"><img
									src="images/front/mainFace/4cfdf436-1512-40c5-933f-a8bba253c972.jpg"
									data-original="" style="user-select: none; display: inline;"></a>
							</p>
						</li>
						<li class="w201 h164 br1 bb1 ov tc m0 mt4-7">
							<p class="c4b f14 mt15 fb600">
								<a href="" target="_blank">宽带+iTV</a>
							</p>
							<p class="f14 klej4"></p>
							<p class="mt4">
								<a href="" target="_blank"><img
									src="images/front/mainFace/9c9e9f77-c4c3-4949-b287-ba6d2f8776ea.jpg"
									data-original="" style="user-select: none; display: inline;"></a>
							</p>
						</li>
					</ul>
					<ul class="fr ml-17">
						<li class="w201 h253 br1 bb1 ov tc m0">
							<p class="c4b f14 mt30 fb600">
								<a href="" target="_blank">足不出户，一键搞定</a>
							</p>
							<p class="f12">
								<a href="" target="_blank"></a>
							</p>
							<p class="f14 klej3"></p>
							<p class="mt10">
								<a href="" target="_blank"><img
									src="images/front/mainFace/e747df0d-54bf-4d89-82bc-6c4e175b4a48.png"
									data-original="" style="user-select: none; display: inline;"></a>
							</p>
						</li>
						<li class="w201 h164 br1 bb1 ov tc m0 mt4-7">
							<p class="c4b f14 mt15 fb600">
								<a href="" target="_blank">宽带提速包</a>
							</p>
							<p class="f14 klej5"></p>
							<p class="mt4">
								<a href="" target="_blank"><img
									src="images/front/mainFace/7dcfbbab-b4ae-4cc3-9b9a-35c38e60f4c5.jpg"
									data-original="" style="user-select: none; display: inline;"></a>
							</p>
						</li>
					</ul>
					<div class="w201 h418 br1 bb1 ml202 ov tc bcf5 fl">
						<p class="c4b f14 mt70 fb600">
							<a href="" target="_blank">提速降费</a>
						</p>
						<p class="f12">
							<a href="" target="_blank"></a>
						</p>
						<p class="f14 klej2"></p>
						<p class="mt30">
							<a href="" target="_blank"><img
								src="images/front/mainFace/e15754ee-9861-44a3-ac1b-e49d3f9aa67e.png"
								data-original="" style="user-select: none; display: inline;"></a>
						</p>
					</div>

				</span> <span class="w403 h418 bt1 br1 bb1 dpl play" id="playBox">
					<div id="pic_list_3" class="scroll_horizontal">
						<div class="box">
							<ul class="list">
								<li><a href="" target="_blank"><img
										src="images/front/mainFace/6476b94f-ddf9-4315-9cbe-c5912f08fac9.png"
										data-original="" style="user-select: none; display: inline;"></a></li>

								<li><a href="" target="_blank"><img
										src="images/front/mainFace/grey.gif" data-original=""
										style="user-select: none;"></a></li>
							</ul>
						</div>
					</div>
				</span>
			</div>
		</div>
	</div>
	<!--footer-->
	<div class="footer w1200 h ov m pt40">
		<!--资格-->
		<div class="guarantee h ov pl100">
			<ul>
				<li><span class="fl dpl"><a rel="nofollow"><img
							src="images/front/mainFace/grey.gif" data-original=""
							style="user-select: none;"></a></span> <span class="dpl ml15 mt4">
						<p class=" f20 ">
							<a rel="nofollow">中国电信</a>
						</p>
						<p class="f16">
							<a rel="nofollow">官方认证渠道</a>
						</p>
				</span></li>
				<li><span class="fl dpl"><a rel="nofollow"><img
							src="images/front/mainFace/grey.gif" data-original=""
							style="user-select: none;"></a></span> <span class="dpl ml15 mt4">
						<p class=" f20 ">
							<a rel="nofollow">正品保障</a>
						</p>
						<p class="f16">
							<a rel="nofollow">正规发票</a>
						</p>
				</span></li>
				<li><span class="fl dpl"><a rel="nofollow"><img
							src="images/front/mainFace/grey.gif" data-original=""
							style="user-select: none;"></a></span> <span class="dpl ml15 mt4">
						<p class=" f20 ">
							<a rel="nofollow">品牌厂家</a>
						</p>
						<p class="f16">
							<a rel="nofollow">优势品牌</a>
						</p>
				</span></li>
				<li><span class="fl dpl"><a rel="nofollow"><img
							src="images/front/mainFace/grey.gif" data-original=""
							style="user-select: none;"></a></span> <span class="dpl ml15 mt4">
						<p class=" f20 ">
							<a rel="nofollow">新品上市</a>
						</p>
						<p class="f16">
							<a rel="nofollow">同步上市</a>
						</p>
				</span></li>
				<li><span class="fl dpl"><a rel="nofollow"><img
							src="images/front/mainFace/grey.gif" data-original=""
							style="user-select: none;"></a></span> <span class="dpl ml15 mt4">
						<p class=" f20 ">
							<a rel="nofollow">全场商品</a>
						</p>
						<p class="f16">
							<a rel="nofollow">无忧退换货</a>
						</p>
				</span></li>
			</ul>
		</div>
		<!--售后-->
		<div class="w h ov mt30 bcfoot pt30 pb30">
			<!--logo-->
			<span class="fl "><a rel="nofollow"><img
					src="images/front/mainFace/grey.gif" style="user-select: none;"></a></span>
			<!--售后窗口-->
			<span class="fl aftermarket ff_a">
				<ul>
					<li class="ml70">
						<p class="fb600 f14_a">
							<a href="" rel="nofollow">购物指南</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">交易条款</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">购买流程</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">网络制式</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">订单查询</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">关于发票</a>
						</p>
					</li>
					<li>
						<p class="fb600 f14_a">
							<a href="" rel="nofollow">物流配送</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">配送说明</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">运单查询</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">收货须知</a>
						</p>
					</li>
					<li>
						<p class="fb600 f14_a">
							<a href="" rel="nofollow">支付方式</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">在线支付</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">退款周期</a>
						</p>
					</li>
					<li>
						<p class="fb600 f14_a">
							<a href="" rel="nofollow">售后服务</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">售后政策</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">退换货政策</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">退换货流程</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">退款说明</a>
						</p>
					</li>
					<li>
						<p class="fb600 f14_a">
							<a href="" rel="nofollow">便民服务</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">客户服务指南</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">营业厅查询</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">号码归属地查询</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">WiFi热点查询</a>
						</p>
						<p>
							<a href="" target="_blank" rel="nofollow">终端维修网点</a>
						</p>
					</li>
				</ul>
			</span>
			<!--客服-->
			<span class="fr"> <span class="fl mr50"><img
					src="images/front/mainFace/grey.gif" style="user-select: none;"></span>
				<span class="fl advisory w140">
					<ul>
						<li><a href="" target="_blank" rel="nofollow">
								<p>
									<img src="images/front/mainFace/grey.gif" id="img13"
										style="user-select: none;">
								</p>
								<p>在线客服</p>
						</a></li>
						<li><a href="" target="_blank" rel="nofollow">
								<p>
									<img src="images/front/mainFace/grey.gif" id="img14"
										style="user-select: none;">
								</p>
								<p>QQ客服</p>
						</a></li>
						<li class="mt9" rel="nofollow"><a href="" target="_blank"
							rel="nofollow">
								<p>
									<img src="images/front/mainFace/grey.gif" id="img15"
										style="user-select: none;">
								</p>
								<p>10000知道</p>
						</a></li>
						<li class="mt9" rel="nofollow"><a href="" target="_blank"
							rel="nofollow">
								<p>
									<img src="images/front/mainFace/grey.gif" id="img16"
										style="user-select: none;">
								</p>
								<p>欢go微博</p>
						</a></li>
					</ul>
			</span>
			</span>
		</div>
		<!--链接-->
		<div class="bellows single w1200 h ov bcfoot pt10">
			<div class="bellows__header">
				<ul id="lx_nav2">
					<li class="li01" onclick="">电信欢go网<span
						class=" ml20 ccc f12 fb0">|</span></li>
					<li class="li02" onclick="">合作伙伴</li>
				</ul>
			</div>
			<div class="lx-con w h ov" id="vouchb_1" style="display: block;">
				<div class="w h ov">
					<div id="aio" class="bellows__contenta fl"
						style=" overflow:hidden; height:70px; width:1180px;">
						<ul>
							<li><a href="">北京欢go网</a><span>|</span></li>
							<li><a href="">安徽欢go网</a><span>|</span></li>
							<li><a href="">重庆欢go网</a><span>|</span></li>
							<li><a href="">福建欢go网</a><span>|</span></li>
							<li><a href="">广东欢go网</a><span>|</span></li>
							<li><a href="">甘肃欢go网</a><span>|</span></li>
							<li><a href="">广西欢go网</a><span>|</span></li>
							<li><a href="">贵州欢go网</a><span>|</span></li>
							<li><a href="">湖北欢go网</a><span>|</span></li>
							<li><a href="">湖南欢go网</a><span>|</span></li>
							<li><a href="">河北欢go网</a><span>|</span></li>
							<li><a href="">河南欢go网</a><span>|</span></li>
							<li><a href="">海南欢go网</a><span>|</span></li>
							<li><a href="">黑龙江欢go网</a><span>|</span></li>
							<li><a href="">江苏欢go网</a><span>|</span></li>
							<li><a href="">吉林欢go网</a><span>|</span></li>
							<li><a href="">江西欢go网</a><span>|</span></li>
							<li><a href="">辽宁欢go网</a><span>|</span></li>
							<li><a href="">内蒙古欢go网</a><span>|</span></li>
							<li><a href="">宁夏欢go网</a><span>|</span></li>
							<li><a href="">青海欢go网</a><span>|</span></li>
							<li><a href="">山东欢go网</a><span>|</span></li>
							<li><a href="">上海欢go网</a><span>|</span></li>
							<li><a href="">山西欢go网</a><span>|</span></li>
							<li><a href="">陕西欢go网</a><span>|</span></li>
							<li><a href="">四川欢go网</a><span>|</span></li>
							<li><a href="">天津欢go网</a><span>|</span></li>
							<li><a href="">新疆欢go网</a><span>|</span></li>
							<li><a href="">西藏欢go网</a><span>|</span></li>
							<li><a href="">云南欢go网</a><span>|</span></li>
							<li><a href="">浙江欢go网</a><span>|</span></li>
						</ul>
					</div>
					<div class="fl p0 mt47 ov">
						<a class="footall_a" href="javascript:void(0)" id="show"
							onclick=""><img src="images/front/mainFace/grey.gif"
							style="user-select: none;"></a> <a class="footall_a"
							href="javascript:void(0)" id="hidden" style="display:none;"
							onclick=""><img src="images/front/mainFace/grey.gif"
							style="user-select: none;"></a>
					</div>
				</div>
			</div>
			<div class="lx-con w h ov" id="vouchb_2" style="display: none;">
				<div class="w h ov">
					<div id="aia" class="bellows__content fl"
						style=" overflow:hidden; height:70px; width:1180px;">
						<ul>
							<li><a href="" target="_blank">电信4G专区</a><span>|</span></li>
							<li><a href="" target="_blank">电信IFree专区</a><span>|</span></li>
							<li><a href="" target="_blank">电信个人定制</a><span>|</span></li>
							<li><a href="" target="_blank">电信宽带专区</a><span>|</span></li>
						</ul>
					</div>
					<div class="fl p0 mt47 ov">


						<a class="footall_a" href="javascript:void(0)" id="hiddena"
							style="display:none;" onclick=""><img
							src="images/front/mainFace/grey.gif" style="user-select: none;"></a>

					</div>
				</div>
			</div>

		</div>
		<!--版权-->
		<div class="footTwo pt30 w1200 m">
			<div class="clearfix cl_style tc w1200 f12"></div>
			<div class="clearfix">
				<p class="foot_style f12 tc mt10">版权所有©2012 中国电信集团公司 [
					增值电信业务经营许可证 A2.B1.B2-20090001 ] ICP 证号:京 ICP 备 09031924号</p>
			</div>
			<div class="foot_img">
				<img src="images/front/mainFace/grey.gif" style="user-select: none;">
			</div>
		</div>
	</div>
	<!--<E>-->
	<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
	<style>
.pb15 {
	padding-bottom: 5px;
}

.recharge input, .recharge select {
	font-family: "微软雅黑";
	color: #777;
	font-size: 12px;
}

.recharge select {
	padding-left: 6px;
}

.user_error {
	display: none;
	width: 160px;
	display: none;
	background: #f4f4f4;
	line-height: 21px;
	position: absolute;
	z-index: 333;
	left: 55px;
	margin-top: 1px;
	*margin-top: 0px;
	padding: 0 5px;
}

.user_error span {
	font-size:;
	float: left;
	display: inline;
}

.user_error a {
	float: right;
	display: inline;
	cursor: pointer;
}
</style>

	<script>
    function usererror() {
        $(".user_error").append("<span></span>");
        $(".user_error").append("<a>[关闭]</a>");
        userclose();
        closeal();
    }
    var cc = 6;
    istop = 0;
    function userclose() {
        if (istop == 1) {
            istop = 0;
            cc = 6;
            return;
        }
        if (cc == 0) {
            cc = 6;
            $(".user_error").hide();
            return;
        }
        cc--;
        $(".user_error").show().find("span").html(cc + "s后提示自动关闭");
        clearstime = setTimeout(function () {
            userclose();
        }, 1000)
        smallclose();
    }
    function smallclose() {
        $(".user_error a").click(function () {
            $(".user_error").hide();
            istop = 1;
        })
    }
    function closeall() {
        $(".user_error").hide();
        clearTimeout(clearstime);
        istop = 0;
        cc = 6;
        return;
    }
    function closeal() {
        $('#closemt input[type="radio"]').click(function () {
            closeall();
        });
        $("#lx_nav1 li").click(function () {
            closeall();
        })
    }
    function submitSjCz(payType, formid, ip) {
        //手机号码
        var accountNumber = document.getElementById('accountNumberSJ').value;
        if (checkAccountNumber(accountNumber)) {
            //金额
            var payAmount = document.getElementById('languageSJ').value;
            if (!isRightAmount(payAmount)) {
                return
            }


            var headURL = ip;
            var requestURL = headURL + 'accountNumber=' + accountNumber + '&payAmount=' + payAmount + '&accountType=1&payType=' + payType;
            document.getElementById(formid).action = requestURL;
            document.getElementById(formid).submit();
        }
    }
    function submitGhCz(payType, formid, ip) {
        //区号
        var areaCode = document.getElementById('areaCodeGH').value;
        if (!isNumNull(areaCode, '请填写区号!')) {
            return
        }
        //固话号码
        var accountNumber = document.getElementById('accountNumberGH').value;
        if (!isNumNull(accountNumber, '请填写固话号码!')) {
            return
        }
        ;
        //金额
        var payAmount = document.getElementById('languageGH').value;
        if (!isRightAmount(payAmount)) {
            return
        }
        ;

        var headURL = ip;
        var requestURL = headURL + 'accountNumber=' + accountNumber + '&payAmount=' + payAmount + '&accountType=2&payType=' + payType + '&areaCode=' + areaCode;
        document.getElementById(formid).action = requestURL;
        document.getElementById(formid).submit();

    }
    function submitKdCz(payType, formid, ip) {
        //固话号码
        var accountNumber = document.getElementById('accountNumberKD').value;
        if (!isNumNull(accountNumber, '请填写固话号码!')) return;
        //金额
        var payAmount = document.getElementById('languageKD').value;
        if (!isRightAmount(payAmount)) return;
        var headURL = ip;
        var requestURL = headURL + 'accountNumber=' + accountNumber + '&payAmount=' + payAmount + '&accountType=3&payType=' + payType;
        document.getElementById(formid).action = requestURL;
        document.getElementById(formid).submit();
    }
    function submitllCz(payType, formid, ip) {
        //手机号码
        var accountNumber = document.getElementById('accountNumberll').value;
        if (checkAccountNumber(accountNumber)) {
            var headURL = ip;
            var requestURL = headURL + 'accountNumber=' + accountNumber + '&chargeType=2&payType=' + payType;
            document.getElementById(formid).action = requestURL;
        }
    }
    function isRightAmount(payAmount) {
        if (payAmount == '0') {
            alert('请选择金额!');
            return false;
        }
        return true;
    }
    function isNumNull(num, mess) {
        if (num == '' || num.length == 0) {
            alert(mess);
            return false;
        }
        return true;
    }

    function checkAccountNumber(accountNumber) {
        var regtele = /^\d{11}$/;
        var threeNum = accountNumber.substring(0, 2);
        if (accountNumber == "") {
            alert("请填写手机号码!");
            return false;
        } else if (accountNumber.length != 11) {
            alert("请输入正确的手机号码");
            return false;
        } else if (!regtele.test(accountNumber)) {
            alert("请输入正确的手机号码");
            return false;
        } else {
            if (threeNum == '13' || threeNum == '18' || threeNum == '15' || threeNum == '17') {

            } else {
                alert("请输入正确的电信手机号码");
                return false;
            }
        }
        return true;
    }

</script>

	<script type="text/javascript">

    //98折闪动satrt
    function showit() {
        self.setInterval("changeit()", 100);
    }
    function changeit() {
        var bg = '#';
        var color = new Array("A", "B", "C", "D", "E", "F");
        var node = document.getElementById("con98"); //#33FF33
        for (var j = 1; j < 7; j++) {
            var i = Math.round(Math.random() * 10);
            if (i >= 5) {
                bg = bg + color[i - 5];
            }
            else {
                bg = bg + i;
            }
        }
        node.style.color = bg;
    }

    //98折闪动end

</script>
	<script type="text/javascript" src="js/slides.min.jquery.js"></script>
	<script type="text/javascript">
    //edit by 494177552@qq.com for 2016.08.03
    $(function () {
        $('#slides').slides({
            effect: 'slide',
            play: '8000',
            pause: 'true',
            animationComplete: function (a) {
                var m = a - 1;
                $('#slides ul li').eq(m).find('img').each(function (key, value) {
                    var srcstr = $(value).attr('data-original');
                    if (srcstr) {
                        $(value).attr('src', srcstr);
                        $(value).removeAttr("data-original");
                    }
                });
            }
        });
    })
</script>
	<script type="text/javascript" src="js/loadScript_1.1.js"></script>
	<script type="text/javascript">
    function chongzhiGl(elementID, elementname, n) {//2016-01-06充值切换高亮
        var elem = document.getElementById(elementID);
        var elemlist = elem.getElementsByTagName(elementname);
        if (n > 1) {
            if (document.getElementById("con98")) {
                document.getElementById("con98").style.display = "none";
            }
        } else {
            if (document.getElementById("con98")) {
                document.getElementById("con98").style.display = "";
            }
        }

        for (var i = 0; i < elemlist.length; i++) {
            elemlist[i].className = "li02";

        }
        elemlist[n - 1].className = "li01";
    }
</script>
	<script type="text/javascript">
    $('li.mainlevel').mousemove(function () {
        $(this).find('ul').slideDown("1000");//you can give it a speed
    });
    $('li.mainlevel').mouseleave(function () {
        $(this).find('ul').slideUp("fast");
    });
    function lazy() {
        //此方法中的代码内容，需要粘贴具体页面中的内容(function定义不能往里面粘贴)

        $.cookie("cityCode", "fj_fz", {path: "/", domain: ".189.cn", expires: 30 * 24});
        $.cookie("SHOPID_COOKIEID", "10014", {path: "/", domain: ".189.cn", expires: 30 * 24});

        $('.son_ul').hide(); //初始ul隐藏
        $('.select_box input').hover(function () { //鼠标移动函数
                $(this).parent().find('ul.son_ul').slideDown();  //找到ul.son_ul显示
                $(this).parent().find('li').hover(function () {
                    $(this).addClass('hover')
                }, function () {
                    $(this).removeClass('hover')
                }); //li的hover效果
                $(this).parent().hover(function () {
                    },
                    function () {
                        $(this).parent().find("ul.son_ul").slideUp();
                    }
                );
            }, function () {
            }
        );
        $('ul.son_ul li').click(function () {
            $(this).parents('li').find('input').val(($(this).attr("data-value")));
            $(this).parents('li').find('ul').slideUp();
        });

        $("#pic_list_0").cxScroll();
        $("#pic_list_1").cxScroll();
        $('#pic_list_2').cxScroll();
        $("#pic_list_3").cxScroll();
        $('#pic_list_4').cxScroll();
        $("#pic_list_5").cxScroll();
        $('#pic_list_6').cxScroll();
        $("#pic_list_7").cxScroll();

        $('.subbtn input[type="radio"]').click(function () {
            $(".haoma").val("");
            //$(".haoma").attr("value",'请输入手机号码');
            $(".jiner").val("");
            if (this.value == 2) {
                $(".subbtn_2").show();
                $(".subbtn_1").hide();
            } else {
                $(".subbtn_1").show();
                $(".subbtn_2").hide();
            }
        });
        $("#lx_nav1 li").click(function () {
            $(".subbtn_1").show();
            $(".subbtn_2").hide();
            $('.subbtn input[type="radio"]').removeAttr('checked');
            $('.subbtn li:first-child input[type="radio"]').attr("checked", 'checked');
            $(".subbtn li:nth-child(1)").removeClass("li02").addClass("li01");
            $(".subbtn li:nth-child(2)").removeClass("li01").addClass("li02");
            if (document.getElementById("con98")) {
                document.getElementById("con98").style.display = "";
            }
        });

        getPassCode3();
        flushCodeRandom();
        showit();


        $.ajax({
            url: '/fj/iframe/prices/',
            type: "GET",
            dataType: 'json',
            timeout: 5000,
            success: function (json) {
                if (json.code != '0') {
                    //alert(json.errorDescription);
                    return;
                }
                $.each(json.dataObject, function (i, n) {
                    if (n.className) {
                        $("." + n.className).text(n.price);
                    }
                });
            },
            error: function (xhr) {
                //alert("请求出错(请检查相关度网络状况.)");
            }
        });

        new TextMagnifier({
            inputElem: '#phoneNumber',
            align: 'bottom'
        });
        new TextMagnifier({
            inputElem: '#accountNumber',
            align: 'bottom'
        });
        new TextMagnifier({
            inputElem: '#liuliangPhone',
            align: 'bottom'
        });
        new TextMagnifier({
            inputElem: '#liluliangNumber',
            align: 'bottom'
        });

    }
    Async.Script.loadScripts(["http://image2.chinatelecom-ec.com/dqmh/static/js/redirectProvince.js"
        , "http://image1.chinatelecom-ec.com/image/189new/css/chongzhi/2016/chongzhi.js"
        , "http://image1.chinatelecom-ec.com/image/189new/css/chongzhi/citylist.js"
        , "http://image1.chinatelecom-ec.com/image/189new/css/chongzhi/2016/homeRecharge.js", "http://image1.chinatelecom-ec.com/image/189new/js/fangda.js", "http://image1.chinatelecom-ec.com/image/189cnv2/js/js_common_indexv2.js"], lazy);
</script>
	<script src="js/front/mainFace/chongzhi.js" type="text/javascript"></script>
	<script src="js/front/mainFace/citylist.js" type="text/javascript"></script>
	<script src="js/front/mainFace/homeRecharge.js" type="text/javascript"></script>
	<script src="js/front/mainFace/fangda.js" type="text/javascript"></script>
	<script src="js/front/mainFace/js_common_indexv2.js"
		type="text/javascript"></script>
</body>
</html>
