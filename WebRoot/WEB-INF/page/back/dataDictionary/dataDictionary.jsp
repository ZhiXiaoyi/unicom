<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="s" uri="/struts-tags" %>

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

    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <script type="text/javascript" src="js/jquery.min.js" ></script>
    <script type="text/javascript" src="js/bootstrap.min.js" ></script>
    <script type="text/javascript" src="js/back/page.js"></script>  

  <style type="text/css">
    	#top{margin:2px 0 0 30%;}
       #button{margin-left:60%;}
       #table-div{height:360px}
       table{font-size:12px;}
    </style>
    <script type="text/javascript">
    function deleteDictionary(dictionaryId){
    	if (confirm('确定要删除该字典值吗?')){ 	
    		 	 $.post("dictionaryjson/deleteDictionary.action",{dictionaryId:dictionaryId},function(){
    		 	     $("#"+dictionaryId).remove(); 	 		
    		 	 })
    		}
    }
   
    		
    function refreshTable(obj){
    				$("#tableview").empty();
		 			$("#tableview").append(
		 						"<tr>"+
		 						"<th>"+"序列"+"</th>"+
		 						"<th>"+"类别"+"</th>"+
		 						"<th>"+"名称/值"+"</th>"+
		 						"<th>"+"备注"+"</th>"+
		 						"<th style='width:140px'>操作<a data-toggle='modal' data-target='#addvalue'>(添加值)</a></th>"+
		 					    "</tr>"	
		 				);
						for (var i = 0; i < obj.length; i++) {
						var number = i+1;
						$("#tableview").append(	
							"<tr id="+obj[i].dictionaryId+">"+
								"<td>"+number+"</td>"+
								"<td>"+obj[i].dictionaryType.dictionaryTypeName +"</td>"+
								"<td>"+obj[i].dictionaryValue+"</td>"+
								"<td>"+obj[i].remarks+"</td>"+
								"<td><a id='delete' href='javascript:deleteDictionary("+obj[i].dictionaryId+");'>删除</a></td>"
		 					+"</tr>"
						);
					}
    }
    $(function(){
    	$("#search").click(function(){
		    	$.ajax({
					cache: true,
					type: "POST",
					url:"dictionaryjson/searchDictionary.action",
					data:$('#searchForm').serialize(),// 你的formid
					async: false,
					error: function(request) {
						alert("error");
					},
					success: function(data) {
						var info =data;
					    refreshTable(info.dictionaryList);
				}
    	}); 	  	
    });  
 });
    
    	
    	
    
    </script>
    
    
  </head> 
  <body>
  	<div class="panel panel-info">
  		<div class="panel-heading">数据字典</div>
  			<div class="panel-body">
		  		<div id="top"> 
		  			<form id="searchForm" action="dictionary/topage.action" method="post">
			  			<label>名称：</label>
			  			<input  type="text" name="dictionary.dictionaryValue">
			  			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			  			<label>所属类别：</label>
			  			<select name="dictionary.dictionaryTypeId" style="width:100px;height:28px">
			  				<option value="">--请选择--</option>
			  				<c:forEach items="${dictionaryTypeList}" var="type">
			  					<option value="${type.dictionaryTypeId}">${type.dictionaryTypeName}</option>
			  				</c:forEach>
			  			</select>
			  		</form>
			  			<div id="button">
			  			<button id="search" class="btn btn-primary">搜索</button>
			  			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			  			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			  			<button  class="btn btn-warning"  data-toggle="modal" data-target="#addtype">增加类别</button>	
			  			</div>	
		  		</div>
		  		<hr>
		  		<div id="table-div">
		  			<table id="tableview" class="table table-striped">
		  				<tr>
			  				<th>序号</th>
			  				<th>类别</th>
			  				<th>名称/值</th>
			  				<th>备注</th>
			  				<th style="width:140px">操作<a data-toggle="modal" data-target="#addvalue">(添加值)</a></th>	
		  				</tr>
		  				<c:forEach items="${dictionaryList}" var="value" varStatus="status">
		  					<tr id="${value.dictionaryId}">
			  				<td>${status.index+1}</td>
			  				<td>${value.dictionaryType.dictionaryTypeName}</td>
			  				<td>${value.dictionaryValue}</td>
			  				<td>${value.remarks}</td>
			  				<td>
			  					<a id="delete" href="javascript:deleteDictionary(${value.dictionaryId});">删除</a> 
			  				</td>
		  				</tr>
		  				</c:forEach>
		  			</table>	
		  		</div>		
		  	</div>
  	</div>
  	
  	
  	
  	<!-- TypeModal -->
	<div class="modal fade" id="addtype" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
	        <h4 class="modal-title" id="myModalLabel">添加新的字典类别</h4>
	      </div>
	      <form role="form" class="form-horizontal" action="dictionary/addtype.action" method="post">
	      <div  class="modal-body">
	        <div  class="form-group">
   				 	<label  class="col-sm-3 control-label">字典类别名：</label>
    				<div class="col-sm-5">
    				  <input type="text" class="form-control" name="dictionaryType.dictionaryTypeName" placeholder="请输入新的类别名">
    				</div>
  			</div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
	        <button type="submit" class="btn btn-primary">确定</button>
	      </div>
	      </form>
	    </div>
	  </div>
	</div>
	
	<!-- ValueModal -->
	<div class="modal fade" id="addvalue" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
	        <h4 class="modal-title" id="myModalLabel">添加新的字典值</h4>
	      </div>
	      <form role="form" class="form-horizontal" action="dictionary/addvalue.action" method="post">
	      <div  class="modal-body">
	     	 <div  class="form-group">
	     		 <label class="col-sm-3 control-label">所属类别：</label>
	     		 <div class="col-sm-5">
			  		 <select name="dictionary.dictionaryTypeId" style="width:100px;height:28px">
			  			<c:forEach items="${dictionaryTypeList}" var="type">
			  				<option value="${type.dictionaryTypeId}">${type.dictionaryTypeName}</option>
			  			</c:forEach>
			  		 </select>
		  		 </div>
		  	</div>
	        <div  class="form-group">
   				 <label  class="col-sm-3 control-label">字典值：</label>
    			 <div class="col-sm-5">
    				  <input type="text" class="form-control" name="dictionary.dictionaryValue" placeholder="请输入字典值">
    			 </div>
  			</div>
  			<div  class="form-group">
   				 <label  class="col-sm-3 control-label">备注：</label>
    			 <div class="col-sm-5">
    				  <input type="text" class="form-control" name="dictionary.remarks" placeholder="备注">
    			 </div>
  			</div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
	        <button type="submit" class="btn btn-primary">确定</button>
	      </div>
	      </form>
	    </div>
	  </div>
	</div>
  </body>
</html>


