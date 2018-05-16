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
 	 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="renderer" content="webkit">
    <title>联通后台登录</title>  
 	
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <script type="text/javascript" src="js/jquery.min.js" ></script>
    <script type="text/javascript" src="js/bootstrap.min.js" ></script>
    
    
    <style type="text/css">
     .l_top{width:100%;height:30px;background-color:#d58512;padding-left:200px;padding-top:5px}
    .l_left{width:60%;height:370px;margin-top:40px;float:left}
    .l_right{width:30%;height:280px;margin-top:80px;margin-left:5%;float:left;background-image:url('images/back/login.jpg')}
    .l_bottom{margin-top:50px}
    #l_photo{width:100%;height:370px}
    #banquan{text-align:center}
    #button{margin-left:100px}
    </style>
    
    <script type="text/javascript">
     $(function(){
     	function initUserArea(){
		    var welcomeStr = new String();
		    var hour = (new Date()).getHours();
		    if(hour>=5&&hour<10){
		        welcomeStr = "早上好,";
		    }
		    else if(hour>=10&&hour<12){
		        welcomeStr = "上午好,";
		    }
		    else if(hour>=12&&hour<19){
		        welcomeStr = "下午好,";
		    }
		    else{
		        welcomeStr = "晚上好,";
		    }
			$("#welcome").html(welcomeStr);
   		 }
    	initUserArea();
     });
     //刷新验证码图片
		function change(image) {
			//改变img的src即可，由于该URL并没有变化，因此追加动态参数伪装成变化的URL。
			image.src = "login/createImage?date=" + new Date().getTime();
		}
    	  
    </script>
    
</head>
<body>
<s:debug></s:debug>
	<div class="bg"></div>
	<div class="l_top"><span id="welcome">上午好,</span>欢迎您登录联通后台系统！</div>
	<div class="container">
		<div><image src="images/back/logo.gif"></image></div>
  		<div class="l_left">
  			<image id="l_photo" src="images/back/bg.jpg"></image>
  		</div>
  		<div class="l_right">
  			 <form role="form" class="form-horizontal" action="login/tologin.action" method="post">
  			 	<h3 style="text-align:center">管理员登录</h3>
            	<div style="margin-top:20px" class="form-group">
   				 	<label for="inputEmail3" class="col-sm-4 control-label">姓名：</label>
    				<div class="col-sm-7">
    				  <input type="text" class="form-control" name="admin.adminName" placeholder="请输入姓名">
    				</div>
  				</div>
  				<div class="form-group">
   				 	<label for="inputPassword3" class="col-sm-4 control-label">密码：</label>
    				<div class="col-sm-7">
    				  <input type="password" class="form-control" name="admin.adminPassword" placeholder="请输入密码">
    				</div>
  				</div>   	
  				<div class="form-group">
   				 	<label for="inputEmail3" class="col-sm-4 control-label">验证码：</label>
    				<div class="col-sm-4">
    				  <input type="text" class="form-control" name="verifyCode">
    				</div>
    				<div class="col-sm-3">
    				  <img style="height:33px" src="login/createImage.action" alt="验证码" title="点击更换" onclick="change(this);"/>
    				</div>
  				</div>
  				<div><h5 style="margin-left:50px;color:red">提示：${tips}</h5>
  				</div>   
  				 <div id="button">		 
                   <button type="submit" class="btn btn-success ">登 陆</button>
                   &nbsp; &nbsp; &nbsp; &nbsp;
                   <button type="reset" class="btn btn-warning ">重置</button>         
               </div>             
			</form> 
  		</div>
	</div>
	<div class="l_bottom">
		<h6 id="banquan">Copyright©2016-2014 中国联通 版权所有</h6>
	</div>
</body>
</html>