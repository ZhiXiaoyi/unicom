<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title></title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
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
        }

        @media (max-width: 980px) {
            /* Enable use of floated navbar text */
            .navbar-text.pull-right {
                float: none;
                padding-left: 5px;
                padding-right: 5px;
            }
        }


    </style>
    <script>
    function checkForm(){
        var adminPassword = $("#adminPassword").val();
        	if(adminPassword==""){
        		alert("密码不能为空！");  		
        		return false;
        	}else{
        		var ret = eval("/[a-zA-Z0-9]{"+adminPassword.length+"}/");  /*匹配每个字符，只能是数字或字母，不包括下划线的正则表达式*/
				if (!ret.test(adminPassword)) {
					alert("密码只能含有数字和字母");
					return false;
        	      }else{   	 	
    		 	    var myForm = document.getElementById("Info");  
               	    myForm.submit();  
        	      }
        	}	       
       }
        	
    
    
    $(function () {  
    	
         
		$('#backid').click(function(){
				window.location.href="admin/topage.action";
		 });
	    $('#del').click(function(){
	     if(confirm("确定删除该管理用户吗？")){
	          var adminId =  $('#adminId').val();
			   window.location.href="admin/deladmin.action?adminId="+adminId+"";
			   }
		 });

    });
</script>
</head>
<body>
	<div class="panel panel-info">
  		<div class="panel-heading">编辑用户</div>
  			<div class="panel-body"> 	
		
			<form  id="Info" action="admin/editadmin.action" method="post" class="definewidth m20" >
				<input id="adminId" type="hidden" name="admin.adminId" value="${admin.adminId}">
				<table class="table table-bordered table-hover definewidth m10">
				    <tr>
				        <td width="10%" class="tableleft">姓名</td>
				        <td><input id="adminName" type="text" name="admin.adminName" value="${admin.adminName}"  readonly="true"/></td>				    
				    </tr>
				    <tr>
				        <td class="tableleft">密码</td>
				        <td><input id="adminPassword" type="text" name="admin.adminPassword" value="${admin.adminPassword}"/></td>
				    </tr>
				    <tr>
				        <td class="tableleft">角色</td>
				        <td><select id="roleName" name="admin.roleId" >
				       		 <option value="${admin.role.roleId}">${admin.role.roleName}</option>
				        	 <c:forEach  items="${roleList}" var="role">				  		        	
				        	  <option value="${role.roleId}">${role.roleName} </option>
				        	</c:forEach>
				        	</select>
				        </td>
				    </tr>
				    <tr>
				        <td class="tableleft"></td>
				        <td>
				            <button type="button" class="btn btn-primary" onclick="checkForm()">保存</button> &nbsp;&nbsp;
				            <button type="button" class="btn btn-danger" id="del">删除</button> &nbsp;&nbsp;
				            <button type="button" class="btn btn-success" id="backid">返回列表</button>
				            
				        </td>
				    </tr>
				</table>
			</form>
		</div>
	</div>
</body>
</html>
