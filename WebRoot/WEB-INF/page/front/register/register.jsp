<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>欢迎注册</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="欢迎注册">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="render" content="webkit">
    <meta name="viewport" content="width=device-width">
    <link href="css/front/register/register.css" rel="stylesheet">
    <link href="css/front/register/layer.css" rel="stylesheet">
    <link rel="shortcut icon" type="image/x-icon" href="images/front/ico/logo.ico" media="screen">

</head>
<body>
<div class="container">
    <div class="logo">
        <img alt="" src="images/front/logoNew.png" height="50"
             style="cursor: pointer; margin-bottom: -57px; *margin-top: 27px;">
    </div>
    <div class="register">
        <div class="no1">
            <div class="fl">1.填写注册信息</div>
            <div class="fr">2.注册成功</div>
        </div>
        <div class="no2" style="height: 410px;">
            <form id="regForm" method="post" action="userRegister/starRegister">
              <input value="${errorMsg}" id="errorMsgInput" type="hidden">
                <div class="cont">
                    <div class="right1">
                        <span class="sty2" style="width:auto;">
                            <a id="emailregbtn" style="color:#5e5e5e;">邮箱注册</a>
                        </span>
                        <a href="javascript:;" id="tologin"
                           data-url="http://www.189.cn/dqmh/UamTO.do?method=loginJXUamGet" style="width: auto;">立即登录</a>
                    </div>
                    <p class="usenameError" id="pError" style="display:none;"></p>
                    <input type="hidden">
                    <div class="input_1">
                        <input type="text" style="margin-left: 15px; border: 0; margin-top: 5px; width: 240px;
                            height: 30px; outline: none; color: #cccccc; line-height: 30px;"
                               value="" id="txtAccount" name="inputUserEmail">
                        <img alt="" src="images/front/register/img_c.png"
                             style="float:right; margin-top:13px; display:none;"
                             id="imgAccountDel">
                        <input type="hidden" id="hidUType" name="UType" value="1">
                    </div>
                    <div class="right2">
                        <p>用于登录及找回密码使用</p>
                    </div>
                    <div class="input_2">
                        <input type="text" style="margin-left: 15px; margin-top: 5px; border: 0; width: 240px;
                            height: 30px; outline: none; color: #cccccc; line-height: 30px;" value="" id="txtShowPwd">
                        <input type="password" style="margin-left: 15px; margin-top: 5px; border: 0; width: 240px;
                            height: 30px; outline: none; color: #cccccc; line-height: 30px; display: none;" value=""
                               id="txtPassword" name="inputUserPwd" maxlength="16">
                    </div>
                    <div class="right2">
                        <p>6-16位数字或字母，区分大小写</p>
                    </div>
                    <div class="input_2">
                        <input type="text" style="margin-left: 15px; margin-top: 5px; border: 0; width: 240px;
                            height: 30px; outline: none; color: #cccccc; line-height: 30px;" value=""
                               id="txtShowPwdCfm">
                        <input type="password" style="margin-left: 15px; margin-top: 5px; border: 0; width: 240px;
                            height: 30px; outline: none; color: #cccccc; line-height: 30px; display: none;" value=""
                               id="txtPasswordCfm" name="inputUserPwdCfm" maxlength="16">
                    </div>
                    <div style="width:300px; height:40px; margin-top:20px;" id="divCaptcha">
                        <div class="input_3">
                            <input type="text" style="margin-left: 15px; margin-top: 5px; border: 0; width: 150px;
                            height: 30px; outline: none; color: #cccccc; line-height: 30px;" value="" id="txtCaptcha"
                                   name="inputverifyCode" maxlength="8">
                        </div>
                        <div style="float:right; width:100px; height:40px;">
                            <img alt="验证码图片" src="login/createImage" id="imgCaptcha" 
                                 style="width: 100px; height: 40px;">
                        </div>
                    </div>
                    <div class="clear">
                    </div>
                    <div class="ydxy_txt">
                        <a href="javacript:;" id="agreement" >阅读《中国电信用户使用协议》</a>
                    </div>
                    <a class="btn btn-success" href="javascript:;" id="regbtn">同意协议并注册</a>
                </div>
            </form>
        </div>
        <input type="hidden" style="display:none" id="hidCaptcha_YWMob">
    </div>
    <div class="then">
        <p><a href="">体验反馈</a></p>
    </div>
    <div class="foot">
        <p>
            版权所有 ©2012 中国电信集团公司 [ 增值电信业务经营许可证 A2.B1.B2-20090001 ] ICP 证号:京 ICP 备 09031924号
        </p>
    </div>
</div>
<script src="js/front/jquery.js"></script>

<script src="js/front/register/js.js"></script>
<!--
<script language="JavaScript" type="text/javascript" src="../../../js/front/s_code.js"></script>
-->
<script src="js/front/register/register.js"></script>
</body>
</html>
