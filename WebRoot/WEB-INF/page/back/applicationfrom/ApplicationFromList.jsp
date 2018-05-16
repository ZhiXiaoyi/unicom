<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'ApplicationFromList.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css"/>
		<link rel="stylesheet" href="css/jquery-ui.min.css" />
		<link rel="stylesheet" href="css/jquery-ui.structure.min.css" />
		<link rel="stylesheet" href="css/jquery-ui.theme.min.css" />
		<script src="js/jquery.js"></script>
		<script src="js/jquery-ui.min.js"></script>
	<script src="js/bootstrap.min.js" type="text/javascript"></script>
	
  </head>
  <script type="text/javascript">  
        $(function() {  
        
        });  
   </script>
  <body>
  	<div>
      <table class="table">
    	<tr style="font-weight:bold;">
    		<td>申请业务编号</td><td>申请变更套餐</td><td>旧套餐</td><td>电话号码</td><td></td>
    	</tr>
		<c:forEach items="${changepackage }" var="ic">
			<tr>
				<td>${ic.applicationid }</td><td>${ic.newpackageInfo }</td><td>${ic.oldpackageInfo }</td><td name="${ic.mobilecardid }">${ic.mobilecardid }</td>
				<c:choose>
					<c:when test="${ic.getState()==0 }"><td><input type="hidden" name="${ic.getNewpackageNum()}"/><input name="${ic.applicationid }" type="checkbox" onclick="chooseCheckbox(this)"/></td></c:when>
					<c:when test="${ic.getState()==1 }"><td>已审核通过</td></c:when>
				</c:choose>				
			</tr>
		</c:forEach>
		<tr><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-danger" onclick="dialogDiv()">通过</button></td><td></td></tr>
	 </table>
	 </div>
	 
  </body>
</html>
