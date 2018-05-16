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

<style>
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
	blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn,
	em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup,
	tt, var, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table,
	caption, tbody, tfoot, thead, tr, th, td {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-weight: inherit;
	font-style: inherit;
	font-family: "Microsoft YaHei", "宋体", Arial, Helvetica, sans-serif;
	vertical-align: baseline;
}

li {
	list-style-type: none
}

a {
	color: #6a6868;
	text-decoration: none;
}
</style>
<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
<link href="css/front/myInformation/phone-foot.css" rel="stylesheet" type="text/css">
<script src="js/front/myInformation/jquery.rotate.min.360.js"></script>
</head>
</head>
<body>
<!--15第二版页尾-->
<div class="footer w1200 h ov m">
	<!--售后-->
	<div class="w h ov pt30 pb30">
		<!--logo-->
    	<span class="fl "><a rel="nofollow"><img src="images/front/myInformation/foot_down_12.png"></a></span>
		<!--售后窗口-->
        <span class="fl aftermarket ff_a">
        	<ul>
            	<li class="ml70">
                	<p class="fb600 f14_a"><a href="http://www.189.cn/fj/iframe/foot/index.html#" rel="nofollow">购物指南</a></p>
                    	       <p><a href="http://fj.189.cn/cms/up4/0591/help/1131500.php" target="_blank" rel="nofollow">交易条款</a></p>
	       <p><a href="http://fj.189.cn/cms/up4/0591/help/1094963.php" target="_blank" rel="nofollow">购买流程</a></p>
	       <p><a href="http://fj.189.cn/cms/up4/0591/help/1131486.php" target="_blank" rel="nofollow">网络制式</a></p>
	       <p><a href="http://fj.189.cn/cms/up4/0591/help/1094964.php" target="_blank" rel="nofollow">订单查询</a></p>
	       <p><a href="http://fj.189.cn/cms/up4/0591/help/1094965.php" target="_blank" rel="nofollow">关于发票</a></p>
                </li>
                <li>
                	<p class="fb600 f14_a"><a href="http://www.189.cn/fj/iframe/foot/index.html#" rel="nofollow">物流配送</a></p>
	       <p><a href="http://fj.189.cn/cms/up4/0591/help/1094966.php" target="_blank" rel="nofollow">配送说明</a></p>
	       <p><a href="http://fj.189.cn/cms/up4/0591/help/1094967.php" target="_blank" rel="nofollow">运单查询</a></p>
	       <p><a href="http://fj.189.cn/cms/up4/0591/help/1094968.php" target="_blank" rel="nofollow">收货须知</a></p>
                </li>
                <li>
                	<p class="fb600 f14_a"><a href="http://www.189.cn/fj/iframe/foot/index.html#" rel="nofollow">支付方式</a></p>
	       <p><a href="http://fj.189.cn/cms/up4/0591/help/1094969.php" target="_blank" rel="nofollow">在线支付</a></p>
	       <p><a href="http://fj.189.cn/cms/up4/0591/help/1094970.php" target="_blank" rel="nofollow">退款周期</a></p>
                </li>
                <li>
                	<p class="fb600 f14_a"><a href="http://www.189.cn/fj/iframe/foot/index.html#" rel="nofollow">售后服务</a></p>
	       <p><a href="http://fj.189.cn/cms/up4/0591/help/1132571.php" target="_blank" rel="nofollow">售后政策</a></p>
	       <p><a href="http://fj.189.cn/cms/up4/0591/help/1094971.php" target="_blank" rel="nofollow">退换货政策</a></p>
	       <p><a href="http://fj.189.cn/cms/up4/0591/help/1094972.php" target="_blank" rel="nofollow">退换货流程</a></p>
	       <p><a href="http://fj.189.cn/cms/up4/0591/help/1094973.php" target="_blank" rel="nofollow">退款说明</a></p>
                </li>
                <li>
                	<p class="fb600 f14_a"><a href="http://www.189.cn/fj/iframe/foot/index.html#" rel="nofollow">便民服务</a></p>
	       <p><a href="http://fj.189.cn/service/transaction/fjservice/hall/OperationHallAll.jsp" target="_blank" rel="nofollow">营业厅查询</a></p>
	       <p><a href="http://fj.189.cn/service/transaction/fjservice/cshow_query.jsp" target="_blank" rel="nofollow">号码归属地查询</a></p>
	       <p><a href="http://wlan.vnet.cn/" target="_blank" rel="nofollow">WiFi热点查询</a></p>
	       <p><a href="http://fj.189.cn/cms/up3/0591/help/1121701.php" target="_blank" rel="nofollow">终端维修网点</a></p>
                </li>
            </ul>
        </span>
		<!--客服-->
        <span class="fr">
        	<span class="fl mr50"><img src="images/front/myInformation/foot_down_11.jpg"></span>
            <span class="fl advisory w140">
            	<ul>
                	<li>
                      <a href="http://im.189.cn/webclient/index?cityId=3500" target="_blank" rel="nofollow">
                      <p><img src="images/front/myInformation/c86b605f-bf83-4763-af31-9cfa9496f6d0.png" id="img13" style="transform: rotate(0deg); transform-origin: 50% 50% 0px;"></p>
                      <p>在线客服</p>                    
                      </a>
                    </li>
                	<li>
                      <a href="http://crm2.qq.com/page/portalpage/wpa.php?uin=800010000&amp;f=1&amp;ty=1&amp;ap=000010|1000|||RM" target="_blank" rel="nofollow">
                      <p><img src="images/front/myInformation/e8f3a747-7632-4619-b667-79cda9cb17e5.png" id="img14" style="transform: rotate(0deg); transform-origin: 50% 50% 0px;"></p>
                      <p>QQ客服</p>                    
                      </a>
                    </li>
                	<li class="mt9" rel="nofollow">
                      <a href="http://zhidao.189.cn/index.jsp?CHNN=7" target="_blank" rel="nofollow">
                      <p><img src="images/front/myInformation/456beb48-3d8f-46bb-91f0-3f159b8e4d4a.png" id="img15" style="transform: rotate(0deg); transform-origin: 50% 50% 0px;"></p>
                      <p>10000知道</p>                    
                      </a>
                    </li>
                	<li class="mt9" rel="nofollow">
                      <a href="" target="_blank" rel="nofollow">
                      <p><img src="images/front/myInformation/74c56326-fa38-4b0e-b091-7336a8cc5684.png" id="img16" style="transform: rotate(0deg); transform-origin: 50% 50% 0px;"></p>
                      <p>欢go微博</p>                    
                      </a>
                    </li>
                 </ul>
              </span>
         </span>
     </div>
	<!--版权-->
	<div class="footTwo pt30 w1200 m bcfoot">
		<div class="clearfix cl_style tc w1200 f12">
		<a href="http://www.189.cn/fj/notice_list/" target="_blank">网站公告</a>
		<span class="f12 999">|</span><a href="http://fj.189.cn/help/" target="_blank">网站使用帮助</a>
		<span class="f12 999">|</span><a href="http://fj.189.cn/support/navigation/" target="_blank">友情链接</a>
        </div>
		<div class="clearfix">
			<p class="foot_style f12 tc mt10" style="color:#777777">版权所有©2012 中国电信集团公司 [ 增值电信业务经营许可证 A2.B1.B2-20090001 ] ICP 证号:京 ICP 备 09031924号</p>
		</div>
		<div class="foot_img" style="margin-left:314px;"><img src="images/front/myInformation/footerPic72.jpg"> </div>
	</div>
</div>
</body>

</html>
