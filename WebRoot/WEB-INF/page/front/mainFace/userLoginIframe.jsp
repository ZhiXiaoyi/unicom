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
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">

<style type="text/css">
* {
	margin: 0;
	padding: 0;
}

.login {
	width: 500px;
	font-size: 12px;
	vertical-align: middle;
	background-color: transparent;
	line-height: 28px;
	color: #7d8b8c;
	font-family: \5FAE\8F6F\96C5\9ED1, verdana, serif;
}

.login span {
	margin-left: 20px;
}

.login a {
	text-decoration: none;
	color: #7d8b8c;
}

#unLoginShow {
	display: none;
}

#loginShow {
	display: none;
}
</style>
<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="js/jquery.cookie.js"></script>
<script type="text/javascript">
	function logout() {
		//TODO 退出
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
<body style="background-color:transparent;">
	<s:if test="#session.user!=null">
		<s:if test="#session.user.userNickname!=null">
			<div class="login" id="loginShow" style="display: block;">
				<input type="hidden" id="userType" value=""> <span
					id="nickName"><s:property value="#session.user.userNickname" /></span>
				<span><a href="javascript:void(0);" onclick="logout()">退出</a>
					<a id="zjUserCenter" href="javascript:void(0)"
					style="display: none;" target="_top">|&nbsp;用户中心</a></span>
			</div>
		</s:if>
		<s:else>
			<s:if test="#session.mobileCard!=null">
				<div class="login" id="loginShow" style="display: block;">
					<input type="hidden" id="userType" value=""> <span
						id="nickName"><s:property
							value="#session.mobileCard.phoneNumber" /></span> <span><a
						href="javascript:void(0);" onclick="logout()">退出</a> <a
						id="zjUserCenter" href="javascript:void(0)" style="display: none;"
						target="_top">|&nbsp;用户中心</a></span>
				</div>
			</s:if>
			<s:else>
				<div class="login" id="loginShow" style="display: block;">
					<input type="hidden" id="userType" value=""> <span
						id="nickName"><s:property value="#session.user.userEmail" /></span>
					<span><a href="javascript:void(0);" onclick="logout()">退出</a>
						<a id="zjUserCenter" href="javascript:void(0)"
						style="display: none;" target="_top">|&nbsp;用户中心</a></span>
				</div>
			</s:else>
		</s:else>
		<div class="login" id="loginShow" style="display: block;">
			<input type="hidden" id="userType" value=""> <span
				id="nickName"><s:property value="#session.user.userNickname" /></span>
			<span><a href="javascript:void(0);" onclick="logout()">退出</a>
				<a id="zjUserCenter" href="javascript:void(0)"
				style="display: none;" target="_top">|&nbsp;用户中心</a></span>
		</div>
	</s:if>
	<s:else>
		<div class="login" id="unLoginShow" style="display: block;">
			<span>欢迎来到欢go网站</span> <span><a target="_top" id="loginJT"
				href="userLogin/toLogin">登录</a>&nbsp;|&nbsp; <a id="userreg_link"
				href="userRegister/toRegister" target="_top">免费注册</a></span>
		</div>
	</s:else>
	<script type="text/javascript">
		/**
		$(function() {
			try {
			alert(0);		
				//var nickName=${session.user.userNickname};
				alert(1);
				if( nickName == null){
					try {
					//nickName=${session.mobileCard.phoneNumber};
					alert(2);
						} catch (err) {
						alert(4)
					}
				}
				alert(nickName);
				$("#nickName").text("您好，" + nickName);
				$("#unLoginShow").hide();
				$("#loginShow").show();
			} catch (err) {
			alert(3);
				$("#unLoginShow").show();
			}
		});

		
		$(function() {
			$.ajax({
					type : "POST",
					url : "userLogin/isUserLogin",
					//dataType: "json",
					timeout : 1000,
					success : function(data) {
						alert(1);
						if (data.code == 0
							&& data.dataObject.nickName != ''
							&& data.dataObject.nickName != undefined) {
								$("#userType").val(data.dataObject.userType);
								$("#nickName").text(
										"您好，" + data.dataObject.nickName);
								$("#loginShow").show();
								if (cityCode == 'zj') {
									$("#zjUserCenter")
											.attr('href',
													'/login/sso/ecs.do?platNo=10012&toStUrl=http://zj.189.cn/service/');
									$("#zjUserCenter").show();
								}
							} else {
								$("#loginJT").attr("href",
										data.dataObject.loginUrl);
								$("#userreg_link").attr("href",
										data.dataObject.regUrl);
								$("#unLoginShow").show();
							}
						},
						error : function() {
							alert(2);
						}
					});
		});
		 */
	</script>
</body>
</html>
