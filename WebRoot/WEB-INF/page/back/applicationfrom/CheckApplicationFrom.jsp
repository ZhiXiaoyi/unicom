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
    
    <title>My JSP 'CheckApplicationFrom.jsp' starting page</title>
    
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
  		var number=0;
  		var arr=new Array();
  		var cards=new Array();
	  	function chooseCheckbox(checkbox){
	  		if(checkbox.checked){
	  			checkbox.parentNode.parentNode.style.backgroundColor="red";
	  			number+=1;
	  			isChange();	  			
	  		}else{
	  			number-=1
	  			checkbox.parentNode.parentNode.style.backgroundColor="white";
	  			isChange();
	  		}
	  	}
	  	function isChange(){
	  		if(number==0){
	  			$("#p")[0].innerText="请选择要通过的业务申请";
	  			
	  		}else{
	  			$("#p")[0].innerText="你已选中"+number+"个业务申请!"+"请再次确认是否通过申请？";
	  			$("#p").dialog("close");
	  		}
	  	}
	  	function dialogDiv(){$("#dialogDiv").dialog();}
	  	$(function(){
	  		$("#checkbutton").click(function(){
	  			var checks=$("input[type='checkbox']:checked");
	  			$("#dialogDiv").dialog("close");
	  			if(checks.size()>0){
		  			for(var i=0;i<checks.size();i++){
		  				arr[i]=checks[i].name;
		  				cards[i]=getDate(checks[i].parentNode.previousSibling.previousSibling.innerText,
		  				checks[i].previousSibling.name);
		  			}
		  			var cardjson=JSON.stringify(cards)
		  			var json=JSON.stringify(arr);
		  			$.ajax({
		  				type:"post",
		  				url:"applicationfrom/toPass",
	       				data: {json:json,cards:cardjson},
	        			dataType: "json",
	        			error: function(request) {
	        				
						   location="applicationfrom/toCheck";
					    },
	        			success: function (message) {		                  
	       			 	}
	       			 
	       		 			
	  				});
	  				
	 
	  			 }	
	  		});
	  		function getDate(cardid,packageid){
	  			var date={
	  				"phonenumber":cardid,
	  				"packageid":packageid
	  			};
	  			return date;
	  		}
	  		
	  	})
  </script>
<body>
	 <form class="form-inline" action="applicationfrom/toSelect" method="post">
		  <div class="form-group">
		    <label for="exampleInputName2">Model</label>
		    <input type="text" class="form-control" id="exampleInputName2" name="phoneNumber" placeholder="请输入要查询的电话号码">
		  </div>
		  <select class="form-control" name="State"><option>全部</option><option>已审核</option><option>待审核</option></select>
		  <button type="submit" class="btn btn-default">搜索</button>
	 </form>
	 <div>
			<jsp:include page="ApplicationFromList.jsp"></jsp:include>
	 </div>
	
	<div style="display:none" id="dialogDiv">
		<table class="table">
	  		<tr align="center"><td><p id="p">请选择要通过的业务申请</p><br/></td></tr>
	  		<tr align="center"><td><button type="button" class="btn btn-danger" id="checkbutton">确定</button></td></tr>
	  	</table>
	</div>
  </body>
</html>
