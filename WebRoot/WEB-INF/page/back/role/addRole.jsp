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
<script type="text/javascript" src="js/back/checkbox.js"></script>


<style type="text/css">
body {
	padding-bottom: 40px;
}

.sidebar-nav {
	padding: 9px 0;
}

@media ( max-width : 980px) {Enable use of floated navbar text */
	.navbar-text.pull-right {
		float: none;
		padding-left: 5px;
		padding-right: 5px;
	}
}
</style>

<script>
    
     function checkForm(){
     	var roleName = $("#roleName").val();	
	     	if(roleName==""){
	     		alert("角色名不能为空！");
	     	}else{
	     		$.post("dictionaryjson/isrole.action",{roleName:roleName},function(data){
    		 	     if(data.isRole==false){
    		 	     	alert("角色名已经存在");
    		 	     }else{
    		 	     	var myForm = document.getElementById("Info");  
               			myForm.submit();  
    		 	     }		     
    		 	 })	
	     	}         
       }       	     
</script>


</head>
<body>
	<div class="panel panel-info">
		<div class="panel-heading">添加角色</div>
		<div class="panel-body">
			<form id="Info" action="role/addrole" method="post" class="definewidth m20">
				<table class="table table-bordered table-hover definewidth m10">
					<tr>
						<td width="10%" class="tableleft">角色名称</td>
						<td><input id="roleName"  type="text" name="role.roleName" /></td>
					</tr>
					<tr>
						<td class="tableleft">权限</td>
						<td>
							<ul>
								<li>
									<input  type='checkbox' name='node' value='1' />基础数据管理
									<ul>
										<li>
										<input  type='checkbox' name='node' value='2' />数据字典
										<li>
										<input  type='checkbox' name='node' value='3' />区域管理
										<li>
										<input  type='checkbox' name='node' value='4' />组织机构管理
										<li>
										<input type='checkbox' name='node' value='5' />积分商品上传
									</ul>
								</li>
								
								<li>
								    <input  type='checkbox' name='node' value='6' />数据查询统计
								    <ul>
										<li>
										<input type='checkbox' name='node' value='7' />营业统计
										<li>
										<input  type='checkbox' name='node' value='8' />区域营业统计
										<li>
										<input  type='checkbox' name='node' value='9' />营业厅管理
									</ul>
								</li>
								
								<li>
									<input  type='checkbox' name='node' value='10' />业务审核管理
									<ul>
										<li>
										<input  type='checkbox' name='node' value='11' />手机套餐审核
										<li>
										<input  type='checkbox' name='node' value='12' />商品购买审核
										<li>
										<input  type='checkbox' name='node' value='13' />查看业务操作
									</ul>
								</li>
								
								<li>
									<input class="group[]" type='checkbox' name='node' value='14' />系统管理
									<ul>
										<li>
										<input class="group" type='checkbox' name='node' value='15' />用户管理(包括用户的添加、删除、修改)
										<li>
										<input class="group" type='checkbox' name='node' value='16' />角色管理(包括角色的添加、删除、修改)
									</ul>
								</li>
						</ul> 
	            </td>
	        </tr>
	        <tr>
	            <td class="tableleft"></td>
	            <td>
	                <button type="button" class="btn btn-primary" onclick="checkForm()">保存</button> &nbsp;&nbsp;
	                <button type="button" class="btn btn-success" name="backid" id="backid">返回列表</button>
	            </td>
	        </tr>
	    </table>
	    </form>
	</div>
	</div>
</body>
</html>
		
