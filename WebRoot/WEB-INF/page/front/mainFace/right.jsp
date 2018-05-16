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

<title>欢go官方网站</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<link rel="stylesheet" type="text/css"
	href="css/front/mainFace/indexright.css">
<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
<script type="text/javascript">
	function logout() {
		window.top.location.href = "userLogin/userLogout";
	}
	function getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
		var r = window.location.search.substr(1).match(reg); //匹配目标参数
		if (r != null)
			return unescape(r[2]);
		return null; //返回参数值
	}
	function setCookie(name, value) {
		var Days = 30;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires="
				+ exp.toGMTString() + ";path=/;domain=.189.cn";
	}
</script>
</head>

<body style="width: 120px;margin: 0;padding: 0;background: #ff8200;">
	<s:if test="#session.user!=null">
		<div id="loginShow" style="">
			<ul class="fr f14 cf_a pt15">
				<li class="fl ml8 unl_a"><a href="javascript:void(0)"
					style="text-decoration: none;">已登录 &nbsp;</a></li>
				<li class="fl unl_a"><a href="javascript:void(0);"
					onclick="logout()" id="userreg_link"> [退出]</a></li>
			</ul>
		</div>
	</s:if>
	<s:else>
		<s:if test="#session.mobileCard!=null">
			<div id="loginShow" style="">
				<ul class="fr f14 cf_a pt15">
					<li class="fl ml8 unl_a"><a href="javascript:void(0)"
						style="text-decoration: none;">已登录 &nbsp;</a></li>
					<li class="fl unl_a"><a href="javascript:void(0);"
						onclick="logout()" id="userreg_link"> [退出]</a></li>
				</ul>
			</div>
		</s:if>
		<s:else>
			<div id="unLoginShow" style="">
				<ul class="fr f14 cf_a pt15">
					<li class="fl pt1 header_d2_bt_logo"></li>
					<li class="fl ml8 unl_a"><a href="userLogin/toLogin"
						target="_top" id="loginJT">登录</a></li>
					<li class="fl cf ml4 mr4 f14 pt2-7">|</li>
					<li class="fl unl_a"><a href="userRegister/toRegister"
						target="_top" id="userreg_link">注册</a></li>
				</ul>
			</div>
		</s:else>
	</s:else>




	<script type="text/javascript">
		/**
			$(function() {
				try {
					try {
						var nickName = ${session.user.userNickname};
					} catch (err) {
						nickName=${session.mobileCard.phoneNumber};
					}
					$("#unLoginShow").hide();
					$("#loginShow").show();
				} catch (err) {
					$("#unLoginShow").show();
				}
			});


		$(function () {
		    var cd_val = getUrlParam("cd");
		    if (cd_val != null) {
		        //$.cookie('cityCode', cd_val,{ expires: 30,path: '/' ,domain:'.189.cn'});
		        setCookie("cityCode", cd_val);
		    }
		    $.ajax({
		        type: "GET",
		        url: "/login/index.do",
		        dataType: "json",
		        timeout: 1000,
		        success: function (data) {
		            if (data.code == 0 && data.dataObject.nickName != '' && data.dataObject.nickName != undefined) {
		                $("#loginShow").show();
		            } else {
		                $("#loginJT").attr("href", data.dataObject.loginUrl);
		                $("#userreg_link").attr("href", data.dataObject.regUrl);
		                $("#unLoginShow").show();
		            }
		        },
		        error: function () {
		            $("#unLoginShow").show();
		        }
		    });
		});
		 */
	</script>
</body>
</html>
