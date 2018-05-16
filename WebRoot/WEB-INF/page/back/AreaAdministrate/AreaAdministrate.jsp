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
                if (myForm["admin.adminName"])  
                    myForm["admin.adminName"].value = $("#adminName").val();  
                $("#mainForm").submit();  
             })  
             
             
             $("#addnew").click(function(){
						window.location.href="area/toAreaEditor.action?type=1";
			});
        });  
    </script>  
</head>
<body>
	<div class="panel panel-info">
  		<div class="panel-heading">区域管理</div>
  			<div class="panel-body"> 	
			    
			    <form action="area/toAreaAdministrate" method="post">
				    <label>区域名称：</label><input type="text" name="areaname"  class="input-default" >
				    &nbsp;&nbsp;  
				    <input id="searchButton" class="btn btn-primary" type="submit" value="查询"></button>
				    &nbsp;&nbsp; 
				    <button type="button" class="btn btn-success" id="addnew">新增区域</button>
			    </form>
			<div>
				<jsp:include page="AreaList.jsp"></jsp:include>
			</div>
		</div>
	</div>
</body>
</html>
