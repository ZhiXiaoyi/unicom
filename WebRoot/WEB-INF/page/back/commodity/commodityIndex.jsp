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
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	

	<link rel="stylesheet" href="css/back/pintuer.css">
	<link rel="stylesheet" href="css/back/admin.css">
	<script src="js/jquery.js"></script>
	<script src="js/back/pintuer.js"></script>
	  
	
	<style type="text/css">
        td{ 
         text-align: center;
         }
    </style>
    <script type="text/javascript">  
        $(function() {  
            $("#searchButton").click(function(){  
                var myForm = document.getElementById("mainForm");  
                if (myForm["pageIndex"])  
                    myForm["pageIndex"].value = 1;  
                if (myForm["commodity.commodityName"])  
                    myForm["commodity.commodityName"].value = $("#commodityName").val();  
                if (myForm["commodity.commodityType"])  
                    myForm["commodity.commodityType"].value = $("#commodityType").val();  
                $("#mainForm").submit();  
             })  
             
        });  
    </script>  
    
</head>
  
 <body>
  <div class="panel admin-panel">
    <div class="panel-head"><strong class="icon-reorder"> 商品管理</strong></div>
    <div class="padding border-bottom">
      <ul class="search" style="padding-left:10px;">
        <li> <a class="button border-main icon-plus-square-o" href="commodity/touploadpage.action"> 上传商品</a> </li>
        <li>
          <input id="commodityName" type="text" placeholder="请输入搜索关键字" name="keywords" class="input" style="width:250px; line-height:17px;display:inline-block" />
          <select style="height:40px"  id="commodityType">
          	<option value="0">全部</option>
          	<option value="1">积分商品</option>
          	<option value="2">手机卡</option>
          	</select>
          
          <a type="button"  class="button border-main icon-search" id="searchButton" >搜索</a></li>
      </ul>
    </div>
    <div>
				<jsp:include page="commodityList.jsp"></jsp:include>
			</div>
		
   </body>
</html>