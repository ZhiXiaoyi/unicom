<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
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

<title>联通登录</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="电信账号登录">
<meta name="viewport" content="width=device-width">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="render" content="webkit">

<link href="css/front/login/login.css" rel="stylesheet">
<link rel="shortcut icon" type="image/x-icon" href="images/front/ico/logo.ico" media="screen">


</head>
<body>
<div class="header">
    <div class="logo">
        <a href="userLogin/toMainFace"><img alt="" src="images/front/mainFace/logo10.jpg" height="70"></a>
    </div>
</div>
<div class="contentMain">
    <!--内容 -->
    <div class="loginBox">
        <div class="loginBoxTop"></div>
        <div class="loginMainContent" id="divMain" style="">
            <div class="imgBox">
                <iframe src="userLogin/loginIframe"
                        scrolling="no" height="330" frameborder="0" width="400"></iframe>
            </div>
            <div class="loginBoxMain" id="divNormalLogin">
                <a class="QRCodeloginSuperscrip"></a>
                <div class="loginHeader" id="divLoginHeader">
                    <div class="loginHeaderTitle">欢迎登录</div>
                    <a class="loginHeaderOtherLo" id="aCtOtherAccount" style="" href="">电信其他账号登录</a>
                    <a class="loginHeaderOtherLo" id="aMoreLoginStyle" style="display:none;">更多登录方式</a>
                    <a class="loginHeaderOtherLo" id="aReturnOthLogin" style="display:none;">&lt;&lt;返回其他帐号登录</a>
                </div>
                <div class="loginHeader" style="display:none;" id="divLoginHeaderMore">
                    <div class="loginHeaderTitle">更多登录方式</div>
                    <a class="loginHeaderOtherLo" id="aCtAccountLogin">电信账号登录</a>
                </div>
                <div class="loginBoxMainContent" id="divLoginBox">
                    <form id="loginForm" method="post"  action="userLogin/starlogin">
                     <input value="${errorMsg}" id="errorMsgInput" type="hidden">
                        <div id="divErr" style="display:none;"></div>
                        <input value="" type="hidden">
                        <ul>
                            <li>
                                <div class="longInputBg">
                                    <input class="noText" value="电信手机/固话/宽带/注册邮箱" id="txtAccount" name="userLoginAccount"
                                            type="text">
                                    <span class="loginIcon icon_people" id="txtAccount_icon"></span>
                                </div>
                                <div class="loginLiInfo" id="divAccount_focus"
                                     style="display:none;width:auto;float:left;text-indent:0px;cursor:none">
                                    <span style="color:#ff0000;">查询、办理业务，请用相应业务号码登录</span></div>
                                <div class="loginLiInfo" id="divRandomPwd"
                                     style="width: auto; float: right; display: none;"><a class="greenA"
                                                                                          id="aRandomPwd">使用随机密码登录</a>
                                </div>
                            </li>
                            <li style="display:none;" id="liTelephone">
                                <div class="longInputBg longFixedBroadband">
                                    <input class="hasText" id="txtUType" readonly="readonly" style="cursor:pointer;"
                                           type="text">
                                    <span class="loginIcon icon_arrow" id="txtUType_icon"
                                          style="cursor:pointer;"></span>
                                    <div class="fixedBroadbandSelect" id="selectType">
                                        <ul>
                                            <!--<li><a>固话</a></li>
                                            <li><a>宽带</a></li>-->
                                        </ul>
                                        <input id="hidUType" name="UType" value="" type="hidden">
                                    </div>
                                </div>
                                <div class="longInputBg longAddress">
                                    <input class="noText" value="地市（中文/拼音）" id="txtCityNo" type="text">
                            </li>
                            <li>
                                <div class="longInputBg">
                                    <input id="hidRandomFlag" name="RandomFlag" value="0" type="hidden">
                                    <input class="noText" value="用户密码" id="txtShowPwd" data-preval="用户密码" type="text">
                                    <input class="noText" value="" style="display:none;" id="txtPassword"
                                           name="userLoginPwd" type="password">
                                    <span class="loginIcon icon_lock"></span>
                                </div>
                                <div class="loginLiInfo" id="divForgetPwd"><a class="greenA">忘记密码</a>
                                    <div class="forgetPasswordBox" style="display:none;">
                                        <div class="forgetPasswordDiv">
                                            <a href="http://login.189.cn/get" target="_blank">注册用户（邮箱）找回密码</a>
                                            <a href="http://www.189.cn/dqmh/userCenter/optPwd/phoneOrTelResetPwd.jsp"
                                               target="_blank">手机、固话、宽带等用户找回密码</a>
                                            <a href="http://login.189.cn/get/yw" target="_blank">移动、联通手机用户找回密码</a>
                                        </div>
                                    </div>
                                </div>

                                <!--<div class="loginLiInfo"><a class="greenA">重新获取</a></div>-->
                                <!--<div class="loginLiInfo"><span class="txtright">60秒后可重新获取</span></div>-->
                            </li>
                            <li id="liCaptcha" style="display:block;">
                                <input type="hidden">
                                <div class="longInputBg verificationCode">
                                    <input class="noText" value="验证码" id="txtCaptcha" name=verifyCode maxlength="4"
                                           type="text">
                                </div>
                                <span class="verificationCode">
                <img alt="验证码" src="login/createImage" title="点击更换" id="imgCaptcha" name="verifyCode" >
              </span>
                            </li>
                        </ul>
                    </form>
                    <div class="loginBtnBox">
                        <a class="loginBtnConfirm" id="loginbtn"></a>
                    </div>
                    <div class="loginConsentAgreement">使用第三方账号/移动、联通手机号登录</div>
                    <div class="loginShareBox">
                        <a class="loginshare iconshare1" href="javascript:;" target="_blank" id="qqloginbtn"
                           data-resuri="http://login.189.cn/login/qqloginresult"></a>
                        <a class="loginshare iconshare2" href="javascript:;" target="_blank" id="alipayloginbtn"
                           data-requri="http://login.189.cn/login/alipaylogin"></a>
                        <a class="loginshare iconshare3" href="javascript:;" target="_blank" id="weibologinbtn"
                           data-requri="http://login.189.cn/login/weibologin"></a>
                        <a class="loginshare iconshare4" style="display:none;"></a>
                        <a class="loginshare iconshare5" href="javascript:;" target="_blank" id="wyloginbtn"
                           data-redirecturi="http://login.189.cn/login/wyloginresult"></a>
                        <a class="loginshare" style="width:1px;"><img src="images/front/login/shuxian.png" alt=""></a>
                        <a class="loginshare" ><img alt="" src="images/front/login/ChinaMobile.png"></a>
                        <a class="loginshare" ><img alt="" src="images/front/login/ChinaUnicom.png"></a>
                    </div>
                </div>
                <div class="loginBoxMainContent"
                     style="display:none; margin-top:50px; margin-bottom:103px; height:174px;" id="divLoginBoxMore">
                    <div class="loginBtnBox" style="padding:10px 0;">
                        <a class="loginBtnOrange" href="http://login.189.cn/login/other?type=dxqt">电信其他账号登录</a>
                    </div>
                    <div class="loginBtnBox" style="padding:10px 0;">
                        <a class="loginBtnOrange" href="http://login.189.cn/login/other?type=wzzc">网站注册账号登录</a>
                    </div>
                    <div class="loginBtnBox" style="padding:10px 0;">
                        <a class="loginBtnOrange" id="aYWMobLogin">移动/联通手机号码登录</a>
                    </div>
                </div>
            </div>
            <div class="QRCodeBox" style="display:none;" id="divQRCodeLogin" data-status="">
                <a class="QRCodeBoxSuperscrip"></a>
                <div class="QRCodeTitle">
                    手机扫码&nbsp;安全登录
                </div>
                <div class="logonFailBox" style="display:none;" id="divlogonFailBox">
                    <div class="iconFail"></div>
                    <div class="logonFailWord">
                        <span class="fontSize14">登录失败</span>
                        <span class="fontSize12">请刷新二维码后重新扫描</span>
                    </div>
                </div>
                <div class="QRCodeContent">
                    <img src="" class="QRCodeImg"
                         alt="">
                </div>
                <div>
                    <img alt="" src=""
                         id="idQRCodeLogo" style="display: none;">
                    <input id="hidQRCodePT" value="" type="hidden">
                    <input id="hidQRCodeWay" type="hidden">
                    <input id="hidQRCodeGuid" type="hidden">
                    <input id="hidQRCodeText" type="hidden">
                </div>
                <div class="AppDownload">
                    <a href="http://www.189.cn/client/" target="_blank">
                        <img alt="" src=""></a>
                </div>
                <div class="linkBox">
                    <a href="javascript:;" id="aRefreshQRCode">刷新二维码</a>&nbsp;|&nbsp;<a href="http://www.189.cn/help/"
                                                                                        target="_blank">使用帮助</a>
                </div>
                <div class="linkBox" style="margin-top: 30px;">
                    <img alt="" src=""
                         style="vertical-align: bottom">
                    <span style="color: #6d6d6d; vertical-align: bottom">仅支持5.0.1及以上版本的欢go（电信营业厅）客户端使用</span>
                </div>
            </div>
            <div class="QRCodeBox" style="display:none;" id="divQRCodeLoginLS">
                <a class="QRCodeBoxSuperscrip"></a>
                <div class="logonSuccessBox">
                    <div class="iconSuccess"></div>
                    <div class="logonSuccessWord">
                        <span class="fontSize14">扫描成功</span>
                        <span class="fontSize12">请按手机的提示操作，请勿刷新页面</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="loginMainContent middle" id="divWjmm" style="display:none;">
            <a class="QRCodeloginSuperscrip"></a>
            <div class="zj">
                <ul class="dj clearfix">
                    <li style="margin-left:40px;" data-url="/get">
                        <p>注册用户（邮箱）</p>
                        <p>找回密码</p>
                    </li>
                    <li class="curr"
                        data-url="http://www.189.cn/dqmh/userCenter/pwdManage.do?method=restPwd&amp;utype=uam">
                        <p>手机、固话、宽带等用户</p>
                        <p>找回密码</p>
                    </li>
                    <li style="margin-right: 0px;" data-url="/get/yw">
                        <p>移动、联通手机用户</p>
                        <p>找回密码</p>
                    </li>
                </ul>
                <a class="xyb" style="margin-left:310px;">下一步</a>
            </div>
        </div>
        <div class="loginBoxBottom"></div>
    </div>
    <!-- 内容：结束 -->
    <div class="experienceFeedback" style="width:100px;">
        <a href="http://login.189.cn/login/feedback" class="experienceFeedbackA">体验反馈</a>
    </div>
    <a class="signUpFree" href="userRegister/toRegister" style="top: 268px;"></a>
</div>
<div class="footer">
    <p>版权所有 ©2012 中国电信集团公司 [ 增值电信业务经营许可证 A2.B1.B2-20090001 ] ICP 证号:京 ICP 备 09031924号</p>
</div>

<script src="js/jquery-1.8.3.js"></script>
<script src="js/front/login/loginjs.js"></script>
</body>
</html>
