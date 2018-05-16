<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>注册成功</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">

<link href="css/front/register/regSuc.css" rel="stylesheet">
<link rel="shortcut icon" type="image/x-icon" href="images/front/ico/logo.ico" media="screen">
</head>
<body>
<div class="container">
        <div class="logo">
    <img alt="" src="images/front/logoNew.png" onclick="" style="cursor: pointer; margin-bottom: -57px; *margin-top: 27px;" height="50">
</div>
        <div class="infobox">
            <div class="no1">
                <img alt="" src="images/front/register/img_02.png">恭喜您，注册已成功！
            </div>
            <div class="no2">
                您的登录账户名为：<span>${inputUserEmail}</span>
            </div>
            <div class="no3">
                <a style="width: 120px; height: 35px; display: none;" class="btn btn-success" href="javascript:;" id="verifyEmail">立即验证邮箱</a>
                <a style="width: 120px; height: 35px;" class="btn btn-success" href="userLogin/toMainFace" id="goNetHall">去欢go逛逛</a>
                <a style="width:120px; height:35px;" class="btn btn-success" href="userLogin/toLogin" id="goToLogin" >马上登录</a>
            </div>
                <div class="no4">
                    温馨提示：完成邮箱验证，可帮助您快速找回密码，并可及时获取订单处理、退款等信息。
                </div>
        </div>
        <div class="clear">
        </div>
        <div class="ad">
            <a href="#">
                <img alt="" src="images/front/register/test_ad.jpg" width="980" height="100"></a>
        </div>
        <div class="foot" style="margin-top: 10px;">
            <p>
                版权所有 ©2012 中国电信集团公司 [ 增值电信业务经营许可证 A2.B1.B2-20090001 ] ICP 证号:京 ICP 备 09031924号
            </p>
        </div>
    </div>
   <!--  
    <script src="regSuccess_files/jquery"></script>

    <script src="regSuccess_files/success"></script>

    <script language="JavaScript" type="text/javascript" src="regSuccess_files/s_code.js"></script>
    -->


</body>
</html>
