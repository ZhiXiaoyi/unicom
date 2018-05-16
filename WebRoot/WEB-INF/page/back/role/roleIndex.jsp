<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
      <title></title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="css/bootstrap-responsive.css" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/back/ckform.js"></script>
    <script type="text/javascript" src="js/back/common.js"></script>

      <style type="text/css">
        body {
            padding-bottom: 40px;
        }
        .sidebar-nav {
            padding: 9px 0;    
        @media (max-width: 980px) {
            /* Enable use of floated navbar text */
            .navbar-text.pull-right {
                float: none;
                padding-left: 5px;
                padding-right: 5px;
            }
        }
    </style>
    
     <script type="text/javascript">  
        $(function() {  
            $("#searchButton").click(function(){  
                var myForm = document.getElementById("mainForm");  
                if (myForm["pageIndex"])  
                    myForm["pageIndex"].value = 1;  
                if (myForm["role.roleName"])  
                    myForm["role.roleName"].value = $("#roleName").val();  
                $("#mainForm").submit();  
             })  
             
             
             $("#addnew").click(function(){
						window.location.href="role/toaddpage.action";
			});
        });  
    </script>  
</head>
<body>
	<div class="panel panel-info">
  		<div class="panel-heading">角色管理</div>
  			<div class="panel-body"> 	
			    <label>角色名称：</label>
			    <input type="text" id="roleName"  class="input-default" >
			    &nbsp;&nbsp;  
			    <button id="searchButton" class="btn btn-primary">查询</button>
			    &nbsp;&nbsp; 
			    <button type="button" class="btn btn-success" id="addnew">新增角色</button>
			<div>
				<jsp:include page="roleList.jsp"></jsp:include>
			</div>
		</div>
	</div>
</body>
</html>