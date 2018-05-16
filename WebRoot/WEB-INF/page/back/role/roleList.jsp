<jsp:directive.page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"/>  
    <%@ taglib prefix="s" uri="/struts-tags"%> 
    <html>  
    <head>  
    <title></title>  
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    
 
    <script type="text/javascript" src="js/back/page.js"></script>       
    <script type="text/javascript" src="js/jquery.min.js" ></script>
    <script type="text/javascript" src="js/bootstrap.min.js" ></script>
    <script type="text/javascript" src="js/back/page.js"></script>  
    
   
           
    </head>  
    <body>  
        
        <div style="height: 400px;margin-top:20px">
		  			<table id="tableview" class="table table-striped" style="font-size:13px">
		  				<tr>
			  				<th>角色ID</th>
			  				<th>角色名称</th>
			  				<th>备注</th>
			  				<th style="width:140px">操作</th>	
		  				</tr>
		  				<s:iterator value="roleList" status="index">  
					        <tr>  
					            <td><s:property value="roleId"/></td>
					            <td><s:property value="roleName"/></td>  
					            <td><s:property value="beizhu"/></td>  
					            <td>
			  					<a href="role/toeditpage.action?roleId=<s:property value="roleId"/>">编辑</a>
			  				    </td>
					        </tr>  
				        </s:iterator>  
		  			</table>	
		  		</div>		
		        <div id="fenye" ><jsp:include page="../../../../page.jsp"></jsp:include></div>		  		
       	      <form action="role/topage.action" id="mainForm" method="post">  
                <input type="hidden" name="role.roleName" value="<s:property value="role.roleName"/>" />  
                <input type="hidden" name="pageSize"  value="<s:property value="page.pageSize"/>" />  
                <input type="hidden" name="pageIndex" value="<s:property value="page.pageIndex"/>" />  
             </form>  
    </body>  
    </html>  
