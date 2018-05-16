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

<title></title>
<meta charset="UTF-8">

<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
<link rel="stylesheet" type="text/css"
	href="css/bootstrap-responsive.css" />
<link rel="stylesheet" type="text/css" href="css/style.css" />
    <script type="text/javascript" src="js/back/page.js"></script>   
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
<script type="text/javascript" src="js/back/ckform.js"></script>
<script type="text/javascript" src="js/back/common.js"></script>

<style type="text/css">
body {
	padding-bottom: 40px;
}
</style>

</head>
<body>
	<div class="panel panel-info">
		<div class="panel-heading">查看操作业务</div>
		<div>

			<div style="height: 400px;margin-top:20px">
				<table id="tableview" class="table table-striped"
					style="font-size:13px">
					<tr>
						<th>日志Id</th>
						<th>用户Id</th>
						<th>用户操作</th>
						<th>操作时间</th>
					</tr>
					<s:iterator value="logList" status="index">
						<tr>
							<td><s:property value="communicationRecordId" /></td>
							<td><s:property value="userId" /></td>
							<td><s:property value="logOperation" /></td>
							<td><s:property value="logOperationTime" /></td> 
						</tr>
					</s:iterator>
				</table>
			</div>
			<div id="fenye"><jsp:include page="../../../../page.jsp"></jsp:include></div>
			<form action="log/topage" id="mainForm" method="post">
			<input type="hidden" name="pageSize"  value="<s:property value="page.pageSize"/>" /> 
			<input type="hidden" name="pageIndex" value="<s:property value="page.pageIndex"/>" />
			</form>
		</div>
	</div>
</body>
</html>
