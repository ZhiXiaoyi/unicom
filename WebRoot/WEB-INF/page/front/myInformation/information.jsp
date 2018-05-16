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

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/front/myInformation/ajaxUtils.js"></script>
<script type="text/javascript" src="js/front/myInformation/validate.js"></script>
<script type="text/javascript" src="js/jquery.cookiescc.js"></script>
<link href="css/front/myInformation/common.css" rel="stylesheet"
	type="text/css">
<link href="css/front/myInformation/my189.css" rel="stylesheet"
	type="text/css">
<script type="text/javascript"
	src="js/front/myInformation/banner_right.js"></script>
<script type="text/javascript"
	src="js/front/myInformation/broad_common.js"></script>

<link rel="stylesheet" href="css/front/myInformation/style.css"
	type="text/css">
<link href="css/front/myInformation/common(1).css" rel="stylesheet"
	type="text/css">
<link href="css/front/myInformation/headtop(1).css" rel="stylesheet"
	type="text/css">
<link href="css/front/myInformation/footdown(1).css" rel="stylesheet"
	type="text/css">
<link rel="stylesheet" href="css/front/myInformation/common_topv21.css">
<script type="text/javascript"
	src="js/front/myInformation/redirectProvince.js"></script>
<link rel="stylesheet"
	href="css/front/myInformation/jquery-ui-1.8.23.custom.css"
	type="text/css">
<style>
.showLayer {
	display: none;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 999;
}

.warmInfoMsg {
	display: none;
	position: absolute;
	left: 50%;
	top: 50%;
	z-index: 1000;
}
</style>
</head>
<body>
	<div id="allShowLayer"
		style="margin: 0px; padding: 0px; border: medium none; background: none repeat scroll 0% 0% rgb(51, 51, 51); opacity: 0.6; z-index: 10001; position: fixed; top: 0px; left: 0px; display: none; width: 100%; height: 100%;"></div>
	<div id="showLayer" class="showLayer"></div>
	<div id="warmInfoMsg" class="warmInfoMsg">
		<img src="images\front\myInformation\pop-waiting-bg.gif">
	</div>
	<div id="indexoverlay"
		style="margin: 0px; padding: 0px; border: medium none; background: none 0% 0% repeat scroll rgb(51, 51, 51); opacity: 0.6; z-index: 10004; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; display: none;"></div>
	<div id="paramOverlay"
		style="margin: 0px; padding: 0px; border: medium none; background: none repeat scroll 0% 0% rgb(51, 51, 51); opacity: 0.6; z-index: 9999; position: fixed; top: 0px; left: 0px; display: none; width: 100%; height: 100%;"></div>
	<!--首部-->
	<style>
.close a {
	color: #333;
	text-decoration: none;
	font-size: 14px;
	font-weight: 700;
	width: 42px;
	height: 35px;
	background-image: url(images\front\myInformation/close.png);
}

.ok_close a {
	color: #666;
	text-decoration: none;
	margin: 0 3px;
	float: left;
	line-height: 26px;
	width: 73px;
	background: url(images\front\myInformation/next.jpg) no-repeat;
	height: 26px;
	text-align: center;
	line-height: 26px;
	margin-bottom: 15px
}
</style>
	<!--bramb-->
	<div class="my189content" style="position:relative;z-index:10001;">
		<h1 class="my_h">
			<a href=""><span style="font-size:21px; font-weight:bold;">我的欢go</span>
			</a>
		</h1>
		<div class="my_set">
			<div class="mys_tit">设置</div>
			<ul class="mys_list">
				<li><a href="iframes/toUserInfo" target="showInfo">个人信息</a></li>
			</ul>
		</div>
	</div>
	<!--end bramb-->
	<div class="my189content clearfix">
		<div class="usr_left">
			<div class="greent_nav">
				<div class="subNavBox">
					<div class="subNav" id="0009" tree_id="0009" style="display: block">交易管理</div>
					<ul class="navContent">
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0009" tree_id="2041"
							href="http://www.189.cn/dqmh/userCenter/myOrderInfoList.do?method=listMyOrderInfo_new&amp;isVs=no"
							id="10000238" target="_blank">我的订单</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0009" tree_id="2042"
							href="javascript:gotoIfremBody(&#39;/dqmh/tradingCenter/myBrowse.do?method=toMyBrowsePage&#39;,&#39;10000239&#39;)"
							id="10000239">我的浏览</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0009" tree_id="2043"
							href="javascript:gotoIfremBody(&#39;/dqmh/tradingCenter/myCollection.do?method=toMyCollectionPage&#39;,&#39;10000240&#39;)"
							id="10000240">我的收藏</a></li>
					</ul>
					<div class="subNav" id="0010" tree_id="0010" style="display: block">费用查询</div>
					<ul class="navContent">
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0010" tree_id="2044"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=linkTo&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/bill/realtime.jsp&#39;,&#39;01420648&#39;)"
							id="01420648">我的话费</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0010" tree_id="2045"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=linkTo&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/bill/formula.jsp&#39;,&#39;01420649&#39;)"
							id="01420649">套餐使用情况查询</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0010"
							tree_id="557f9ff0e1d111e50be0fced6d63f2ea"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=linkTo&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/service/transaction_new/flows/flowlist.jsp&#39;,&#39;20000383&#39;)"
							id="20000383">流量池查询</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0010" tree_id="2046"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=linkTo&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/bill/bill.jsp&#39;,&#39;01420650&#39;)"
							id="01420650">账单查询</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0010"
							tree_id="1e77ffd02d1611e6532c39d42fa4f510"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=linkTo&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/service/bill/invoice/invoice.jsp&#39;,&#39;20000548&#39;)"
							id="20000548">电子发票</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0010" tree_id="2047"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=linkTo&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/bill/index.jsp?TYPE=detail&#39;,&#39;01420651&#39;)"
							id="01420651">我的详单</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0010" tree_id="2048"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=linkTo&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/bill/flowInfo.jsp&#39;,&#39;01420652&#39;)"
							id="01420652">流量卡账户查询</a></li>
					</ul>
					<div class="subNav" id="0011" tree_id="0011" style="display: block">业务办理</div>
					<ul class="navContent">
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0011" tree_id="2049"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=skip&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/transaction/index3.jsp&#39;,&#39;01430653&#39;)"
							id="01430653">业务办理首页</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0011" tree_id="2050"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=linkTo&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/transaction_new/tianyiself/prodrevision/zyyw.jsp&#39;,&#39;01430654&#39;)"
							id="01430654">在用业务</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0011" tree_id="2051"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=skip&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/transaction_new/phone/telephone_add.jsp&#39;,&#39;10000253&#39;)"
							id="10000253">固定电话新装</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0011" tree_id="2052"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=skip&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/transaction_new/itv/iptvRegister.jsp&#39;,&#39;10000254&#39;)"
							id="10000254">ITV新装预登记</a></li>
					</ul>
					<div class="subNav" id="0012" tree_id="0012" style="display: block">充值缴费</div>
					<ul class="navContent">
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0012" tree_id="2053"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=linkTo&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/pay/indexpay.jsp?TYPE=2&#39;,&#39;01440655&#39;)"
							id="01440655">充值卡历史查询</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0012" tree_id="2054"
							href="recharge/maintorecharge"
							id="10000241" target="_blank">充值交费</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0012" tree_id="2055"
							href="http://www.189.cn/dqmh/ssoLink.do?method=skip&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/service/pay/indexpay.jsp?TYPE=7"
							id="10000242" target="_blank">代理商缴费</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0012" tree_id="2056"
							href="http://www.189.cn/dqmh/ssoLink.do?method=skip&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/service/pay/indexpay.jsp?TYPE=10"
							id="10000243" target="_blank">宽带包年续费</a></li>
					</ul>
					<div class="subNav" id="0013" tree_id="0013" style="display: block">积分服务</div>
					<ul class="navContent">
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0013" tree_id="2057"
							href="search/tosearch?phoneNumber=${mobileCard.phoneNumber}" id="01450656">积分查询</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0013" tree_id="2058"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=linkTo&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/club/jfjs.jsp&#39;,&#39;01450657&#39;)"
							id="01450657">星级服务</a></li>
					</ul>
					<div class="subNav" id="0014" tree_id="0014" style="display: block">我的服务</div>
					<ul class="navContent">
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0014" tree_id="2059"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=linkTo&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/manage/onlineset.jsp&#39;,&#39;01460658&#39;)"
							id="01460658">上网时长设置</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0014" tree_id="2060"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=skip&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/bill/xftx.jsp&#39;,&#39;01460659&#39;)"
							id="01460659">服务定制</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0014" tree_id="2061"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=skip&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/order/schedule.jsp&#39;,&#39;01460660&#39;)"
							id="01460660">装移修进度查询</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0014" tree_id="2062"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=skip&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/order/fail.jsp?ORDERTYPE=1&#39;,&#39;01460661&#39;)"
							id="01460661">故障单查询</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0014" tree_id="2063"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=skip&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/order/index.jsp&#39;,&#39;01460662&#39;)"
							id="01460662">投诉单查询</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0014" tree_id="2064"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=skip&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/transaction_new/lan/queryResources.jsp&#39;,&#39;10000252&#39;)"
							id="10000252">宽带资源查询</a></li>
						<li style="display: none"><a
							trkbtn="trkBtnCount_fj_my189_0014"
							tree_id="93048f30810411e5ae213efd574bc02e"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=linkTo&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/service/transaction_new/smdj/smdj_add2.jsp&#39;,&#39;20000193&#39;)"
							id="20000193">实名登记</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0014"
							tree_id="2df0d040086311e65bee3687de9ce52a"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=linkTo&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/service2/transaction_new/starservice/starserviceindex.jsp&#39;,&#39;20000512&#39;)"
							id="20000512">宽带紧急复机</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0014"
							tree_id="4cdf83c0086311e65bee3687de9ce52a"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=linkTo&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/service2/transaction_new/starservice/moveserviceindex.jsp&#39;,&#39;20000513&#39;)"
							id="20000513"> 宽带上门服务</a></li>
					</ul>
					<div class="subNav" id="0015" tree_id="0015" style="display: block">用户中心</div>
					<ul class="navContent">
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0015" tree_id="2065"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=linkTo&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/manage/index.jsp&#39;,&#39;01470663&#39;)"
							id="01470663">我的资料</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_0015" tree_id="2066"
							href="javascript:gotoIfremBody(&#39;/dqmh/ssoLink.do?method=skip&amp;platNo=10014&amp;toStUrl=http://fj.189.cn/newcmsweb/commonIframe.jsp?URLPATH=/service/manage/ChangePwd.jsp&#39;,&#39;01470664&#39;)"
							id="01470664">密码管理</a></li>
					</ul>
					<div class="subNav" id="4731e420f64011e57b5450c7da31f26e"
						tree_id="4731e420f64011e57b5450c7da31f26e" style="display: block">4G业务办理
					</div>
					<ul class="navContent">
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_4731e420f64011e57b5450c7da31f26e"
							tree_id="54921db0f64011e57b5450c7da31f26e"
							href="javascript:gotoIfremBody(&#39;/service/my189/bssMgmt/intlRoal.html&#39;,&#39;20000432&#39;)"
							id="20000432">国漫/长权</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_4731e420f64011e57b5450c7da31f26e"
							tree_id="5f2cf5b0f64011e57b5450c7da31f26e"
							href="javascript:gotoIfremBody(&#39;/service/my189/bssMgmt/callerIdDisplay.html&#39;,&#39;20000433&#39;)"
							id="20000433">来电显示</a></li>
						<li style="display: block"><a
							trkbtn="trkBtnCount_fj_my189_4731e420f64011e57b5450c7da31f26e"
							tree_id="691d35d0f64011e57b5450c7da31f26e"
							href="javascript:gotoIfremBody(&#39;/service/my189/bssMgmt/conductRecord.html&#39;,&#39;20000434&#39;)"
							id="20000434">办理记录</a></li>
					</ul>

				</div>
			</div>
			<div class="green_tunnel">
				<iframe id="green_tunnel" src="iframes/toSaved_resource(1)"
					height="548px" scrolling="no" frameborder="0"
					allowtransparency="true"></iframe>
			</div>
		</div>
		<!--右侧-->
		<div class="usr_right right">
			<!-- 板块1 -->
			<div class="usrr_mb">
				<div class="usrr_info left">
					<div class="usrri_pic left">
						<a href=""> 
							<s:if test="#session.user.userPhotoPath!=null">
								<img id="headpicture"
									src="commodity/tophoto.action?path=${user.userPhotoPath }">
							</s:if>
							<s:else>
								<img id="headpicture"
									src="images/front/myInformation/13042132Q-6.jpg">
							</s:else>
					</div>
					<ul class="usrri_news right">
						<li style="position: relative;">
							<p class="usrrin_name" id="xiugai">
								<a href="iframes/toUserInfo" target="showInfo"> <span
									style=""> ${mobileCard.phoneNumber} ${user.userEmail } </span>
								</a>
							</p>
							<p class="c999">
								<iframe id="c999" src="iframes/toSaved_resource(2)"
									height="20px" scrolling="no" frameborder="0"
									allowtransparency="true"></iframe>
							</p>
						</li>

					</ul>
				</div>
				<div class="usrr_site left">
					<table class="usrr_wallet left">
						<tbody>
							<tr>
								<th>欢&nbsp;&nbsp;&nbsp;豆：<span>20</span></th>
								<td><a href="http://www.189.cn/vip/" target="_blank"
									trkbtn="trkBtnCount_jt_189home_wallet_huanDou_duiHuan">兑换</a></td>
							</tr>
							<tr>
								<th>积&nbsp;&nbsp;&nbsp;分：<span>815</span></th>
								<td><a href="http://jf.189.cn/" target="_blank"
									trkbtn="trkBtnCount_jt_189home_wallet_jiFen_duiHuan">兑换</a></td>
							</tr>
							<tr>
								<th>我的收货地址</th>
								<td><a href=""
									trkbtn="trkBtnCount_jt_189home_wallet_shouHuoDiZhi_guanLi ">管理</a>
								</td>
							</tr>
							<tr>
								<th>我的靓号专区</th>
								<td><a href="http://www.189.cn/haoma/" target="_blank"
									trkbtn="trkBtnCount_jt_189home_wallet_liangHaoZhuanQu_guanLi">管理</a></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="usrr_sign left">
					<iframe id="usrr_sign" style="width: 367px; height: 177px;"
						src="iframes/toSaved_resource(3)" scrolling="no" frameborder="0"
						allowtransparency="true" trkiframe="true"></iframe>
				</div>
			</div>
			<div id="bodyDiv" style="z-index: 10000; position: relative;">
				<iframe id="bodyIframe" align="top" src="iframes/toUserInfo"
					name="showInfo" style="border: 0px; width: 1000px; height: 812px;"
					scrolling="no" frameborder="0" allowtransparency="true" onload=""></iframe>
			</div>
		</div>
	</div>
	<!--footer-->
	<div class="foot_down">
		<iframe id="iframesearchtext" src="iframes/toSaved_resource(4)"
			name="txtBox" frameborder="0" scrolling="no" width="100%"
			height="359"></iframe>
	</div>
	<img class="mini" src="images/front/myInformation/btn_left_img.png"
		width="59" height="150" style="display: none;">
	<div class="load_img" id="load_img" style="display: none;">
		<img src="images/front/myInformation/loading_1.gif" alt="">
		<p>页面正在努力加载中,请耐心等待!</p>
	</div>
	</div>
	<script type="text/javascript">
    $(function () {
        $(".subNav").click(function () {
            $(this).toggleClass("currentDd").siblings(".subNav").removeClass("currentDd");
            $(this).toggleClass("currentDt").siblings(".subNav").removeClass("currentDt");
            // 修改数字控制速度， slideUp(500)控制卷起速度
            $(this).next(".navContent").slideToggle(500).siblings(".navContent").slideUp(500);
        });

        $(".navContent a").click(function () {
            $(".navContent a").removeClass("select");
            $(this).addClass("select");
        });
    });
</script>


</body>
</html>
