    <jsp:directive.page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"/>  
    
    <%@ taglib prefix="s" uri="/struts-tags"%> 
    <html>  
    <head>  
    <title></title>  
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <script type="text/javascript" src="js/back/page.js"></script>       
    <script type="text/javascript" src="js/jquery.min.js" ></script>
    <script type="text/javascript" src="js/bootstrap.min.js" ></script>
	
           
    </head>  
    <script type="text/javascript">

    	function toEditor(){
    	
    	}
    	
    </script>
    <body>  
        
        <div style="height: 400px;margin-top:20px">
		  			<table id="tableview" class="table table-striped" style="font-size:13px">
		  				<tr>
			  				<th>区域ID</th>
			  				<th>区域名称</th>
			  				<th style="width:140px">操作</th>	
		  				</tr>
		  				<s:iterator value="areaList" status="index">  
					        <tr>  
					            <td><s:property value="areaid"/></td>
					            <td><s:property value="areaname"/></td>  

					            <td>
			  					<a href="area/toAreaEditor?areaid=<s:property value="areaid"/>&type=0">编辑</a>
			  				    </td>
					        </tr>  
				        </s:iterator>  
		  			</table>	
		  		</div>		
		          		
       	      <form action="admin/topage.action" id="mainForm" method="post">  
                <input type="hidden" name="admin.adminName" value="<s:property value="admin.adminName"/>" />  
                <input type="hidden" name="pageSize"  value="<s:property value="page.pageSize"/>" />  
                <input type="hidden" name="pageIndex" value="<s:property value="page.pageIndex"/>" />  
             </form>  
    </body>  
    </html>  