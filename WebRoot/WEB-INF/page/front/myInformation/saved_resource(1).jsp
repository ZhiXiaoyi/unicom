<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>手机话费充值</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
 
  	<link href="css/front/myInformation/common(2).css" rel="stylesheet" type="text/css">
    <link href="css/front/myInformation/my189(1).css" rel="stylesheet" type="text/css">
  </head>
  
<body>
<div class="usr_left">
    <div class="greent_txt">
        <h3>绿色通道</h3>
    </div>
    <div class="greent_cont">
        <ul>
            <li class="x_color_1">
                <a href="http://www.189.cn/4g?intid=jt-wdhg-lstd-01-4gfw" target="_blank">
                    <h3>4G服务</h3>
                    <p>点击进入快捷通道</p>
                </a>
            </li>
            <li class="x_color_2">
                <a href="http://www.189.cn/private?intid=jt-wdhg-lstd-02-grdzfw" target="_blank">
                    <h3>个人定制服务</h3>
                    <p>点击进入快捷通道</p>
                </a>
            </li>
            <li class="x_color_3">
                <a href="http://www.189.cn/kaika/?intid=jt-wdhg-lstd-03-smkkfw" target="_blank">
                    <h3>实名开卡服务</h3>
                    <p>点击进入快捷通道</p>
                </a>
            </li>
        </ul>
    </div>
    <ul class="l_img" style="margin-top: 10px;">
    </ul>
</div>
</body>
</html>
