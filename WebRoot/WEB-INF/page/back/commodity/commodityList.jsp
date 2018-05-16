    <jsp:directive.page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"/>  
    <%@ taglib prefix="s" uri="/struts-tags"%> 
    <html>  
    <head>  
    <title></title>  
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <script type="text/javascript" src="js/back/page.js"></script>       
    <script type="text/javascript" src="js/jquery.min.js" ></script>
    <script type="text/javascript" src="js/bootstrap.min.js" ></script>
    
    <link rel="stylesheet" href="css/back/pintuer.css">
	<link rel="stylesheet" href="css/back/admin.css">
	<script src="js/jquery.js"></script>
	<script src="js/back/pintuer.js"></script>
	         
    </head>  
    <body>  
        
        <div style="height: 450px">
    	<table id="tableview" class="table table-striped" style="font-size:13px">
		  				<tr>
					        <th>ID</th>
					        <th>商品名</th>
					        <th>图片</th>
					        <th>积分</th>				  
					        <th>商品信息</th>
					        <th>库存</th>
					        <th width="250">操作</th>
					     </tr>
					     <s:iterator value="commodityList" status="index">  			
					        <tr>  
					            <td><s:property value="commodityNumber"/></td>
					            <td><s:property value="commodityName"/></td> 
					            <td><img src="commodity/tophoto.action?path=<s:property value="commodityImgPath"/>"   alt="" width="70" height="50" /></td>         
					            <td><s:property value="commodityIntegral"/></td>  
					            <td><s:property value="commodityInfo"/></td>  
					            <td><s:property value="commodityStock"/></td>  
					            <td><div class="button-group">
						          <a class="button border-main" href="commodity/toeditpage.action?commodityNumber=<s:property value="commodityNumber"/>"><span class="icon-edit"></span> 修改</a> 
						          <a class="button border-red" href="commodity/delcommodity.action?commodityNumber=<s:property value="commodityNumber"/>"><span class="icon-trash-o"></span> 删除</a> 
						      </div></td>				
					        </tr>  
				        </s:iterator>  			     	
		 	</table>	
		 	</div>
		        <div id="fenye" ><jsp:include page="../../../../page.jsp"></jsp:include></div>		  		
       	      <form action="commodity/topage.action" id="mainForm" method="post">  
                <input type="hidden" name="commodity.commodityName" value="<s:property value="commodity.commodityName"/>" /> 
                <input type="hidden" name="commodity.commodityType" value="<s:property value="commodity.commodityType"/>" />   
                <input type="hidden" name="pageSize"  value="<s:property value="page.pageSize"/>" />  
                <input type="hidden" name="pageIndex" value="<s:property value="page.pageIndex"/>" />  
             </form>  
    </body>  
    </html>  