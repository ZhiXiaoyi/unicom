<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'checkOrder.jsp' starting page</title>
    
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
        th{ 
         text-align: center;
         }
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
                if (myForm["order.orderState"])  
                    myForm["order.orderState"].value = $("#orderState").val();  
                if (myForm["order.commodity.commodityType"])  
                    myForm["order.commodity.commodityType"].value = $("#commodityType").val();  
                $("#mainForm").submit();  
             })  
             
           
        });  
    </script>  
</head>
<body>
	<div class="panel panel-info">
  		<div class="panel-heading">商品审核</div>
  			<div class="panel-body"> 	  
			    <label>商品类型：</label>
			    <select id="commodityType">
			    	<option value="0">全部</option>	
			    	<option value="1">积分商品</option>	
			    	<option value="2">手机卡</option>	
			    </select>	    
			    <label>审核状态：</label>
			    <select id="orderState">
			    	<option value="">全部</option>	
			    	<option value="待审核">待审核</option>	
			    	<option value="已通过">已通过</option>	
			    	<option value="已发货">已发货</option>	
			    	<option value="未通过">未通过</option>	
			    </select>
			    &nbsp;&nbsp;  
			    <button id="searchButton" class="btn btn-primary">查询</button>
				<div>
					<jsp:include page="orderList.jsp"></jsp:include>
				</div>
		</div>
	</div>
</body>
</html>
	