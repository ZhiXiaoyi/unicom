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
    $(function () {  
    
     	    $("#newArea").click(function(){
     	    	var areaname=$("#areaname").val();
 //    	    	alert(areaname);
 //    	    	$.post("area/toPassInsert",{areaname:areaname},function(json){
 //    	    		alert(json);
 //    	    	});
     	    	$.ajax({
		  				type:"post",
		  				url:"area/toPassInsert",
	       				data: {areaname:areaname},
	        			dataType: "json",
	        			error: function(json) {
	        
						   alert("区域名重复");
					    },
	        			success: function (json) {	
	        				if(json=='s'){
	        					location="area/toAreaAdministrate.action";
	        				}else{
	        					alert("区域名重复");
	        				}                  
	       			 	}       		 			
	  				});
     	    });
			
			$("#editorArea").click(function(){	
									
					var areaid=$("#areaid").val();
					var areaname=$("#areaname").val();
					$.ajax({
		  				type:"post",
		  				url:"area/passEditor",
	       				data: {areaid:areaid,areaname:areaname},
	        			dataType: "json",
	        			success: function (json) {	
	        				if(json=='s'){
	        					location="area/toAreaAdministrate.action";
	        				}else if(json=='e'){
	        					alert("区域名重复");
	        				}else if(json=='f'){
	        					
	        					alert("请输入新的区名");
	        				}                 
	       			 	}       		 			
	  				});
					
			});
			$("#backid").click(function(){
			
					location="area/toAreaAdministrate.action";
			});
			



    });
</script>
</head>
<body>
	<div class="panel panel-info">
		<c:choose>
			<c:when test="${type==1 }">
				<div class="panel-heading">新增区域</div>
				  	<div class="panel-body"> 				
					<form action="area/toPassInsert" method="post" class="definewidth m20" >
					<input id="adminId" type="hidden" name="admin.adminId" value="${area.areaid}">
					<table class="table table-bordered table-hover definewidth m10">
				    <tr>
				        <td class="tableleft">区域名称</td>
				        <td><input id="areaname" type="text" name="areaname" value=""/></td>
				    </tr>				    
				    <tr>
				        <td class="tableleft"></td>
				        <td>
				            <button id="newArea" type="button" class="btn btn-primary" >保存</button> &nbsp;&nbsp;
				            <button type="button" class="btn btn-success" id="backid">返回列表</button>				            
				        </td>
				    </tr>
					</table>
					</form>			
			</div>
			</c:when>
			<c:when test="${type==0 }">
			<div class="panel-heading">区域编辑</div>
				<div class="panel-body"> 	
				
					<form action="area/passEditor" method="post" class="definewidth m20" >
					<input id="adminId" type="hidden" name="admin.adminId" value="${area.areaid}">
					<table class="table table-bordered table-hover definewidth m10">
					    <tr>
					        <td width="10%" class="tableleft">区域ID</td>
					        <td><input type="text" id="areaid" value="${area.areaid}"  readonly="true"/></td>
					    </tr>
					    <tr>
					        <td class="tableleft">区域名称</td>
					        <td><input type="text" id="areaname" value="${area.areaname}"/></td>
					    </tr>				    
					    <tr>
					        <td class="tableleft"></td>
					        <td>
					            <button id="editorArea" type="button" class="btn btn-primary" type="button">保存</button> &nbsp;&nbsp;
					            <button type="button" class="btn btn-success" id="backid">返回列表</button>				            
					        </td>
					    </tr>
					</table>
				    </form>
				
				</div>
			</c:when>
		</c:choose>


	</div>
</body>
</html>
