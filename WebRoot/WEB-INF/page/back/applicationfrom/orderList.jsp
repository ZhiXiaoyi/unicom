	<jsp:directive.page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"/>  
    <%@ taglib prefix="s" uri="/struts-tags"%> 
    <html>  
    <head>  
    <title></title>  
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <script type="text/javascript" src="js/back/page.js"></script>       
    <script type="text/javascript" src="js/bootstrap.min.js" ></script>

	<link rel="stylesheet" href="css/jquery-ui.css"/>
	<script type="text/javascript" src="js/jquery.min.js" ></script>
	<script src="js/jquery-1.9.1.js"></script>
	<script src="js/jquery-ui.js"></script>
	<link rel="stylesheet" href="css/style.css"/>


	<script type="text/javascript">
	
	function detailInfo(id){
		 $.post("dictionaryjson/info.action",{harvestAddressInfoId:id},function(data){		 	  
    		 	     var obj = data.harvestAddressInfo;
    		 	     $("#1").empty();
		 			 $("#1").append("<input type='text' value='"+obj.harvestName+"'>");
		 			 $("#2").empty();
		 			 $("#2").append("<input type='text' value='"+obj.harvestPhoneNumber+"'>");
		 			 $("#3").empty();
		 			 $("#3").append("<input type='text' value='"+obj.harvestAddress+"'>"); 
		 			 $("#4").empty();
		 			 $("#4").append("<input type='text' value='"+obj.postCode+"'>");
    		 	     $("#dialog_msg").dialog("open");	  	
    		 	     		
    		 	 })
	
	
	}
	
	$(function(){
        	$("#dialog_msg").dialog({
				autoOpen:false,
				width : 600,		
				title : '收货信息',
				modal : true,
				show: {
			        effect: "blind",
			        duration: 1000
			      },
			   hide: {
			        effect: "explode",
			        duration: 1000
			     }		
			});
	
	
	});
	
	
	
	
	
	 
	
	</script>

           
    </head>  
    <body>  
    
    <div id="dialog_msg" class="table-responsive">
			<table  class="table table-striped">
				<tr>
					<th>收货人姓名：</th>
					<td id="1"><input type="text" ></td>
				</tr>
				<tr>
					<th>收货人手机号：</th>
					<td id="2"><input type="text"></td>
				</tr>
				<tr>
					<th>收货地址：</th>
					<td id="3"><input type="text"></td>
				</tr>
				<tr>
					<th>邮政编码：</th>
					<td id="4"><input type="text"></td>
				</tr>
			</table>	
	</div> 
        
        <div style="height: 400px;margin-top:20px">
		  			<table id="tableview" class="table table-striped" style="font-size:13px">
		  				<tr>
			  				<th>订单编号</th>
			  				<th>申请人邮箱</th>
			  				<th>商品名</th>
			  				<th>支付时间</th>
			  				<th>订单状态</th>
			  				<th>收货信息</th>
			  				<th style="width:140px">审核操作</th>	
		  				</tr>
		  				<s:iterator value="orderList" status="index">  
					        <tr>  
					            <td><s:property value="orderId"/></td>
					            <td><s:property value="user.userEmail"/></td>  
					            <td><s:property value="commodity.commodityName"/></td>  
					            <td><s:property value="paymentTime"/></td>  				       				  
					            <s:if test="orderState=='待审核'">
					            <td style="color:blue"><s:property value="orderState"/></td>
					            <td><a type="button" onclick="detailInfo(<s:property value="harvestAddressInfoId"/>)">查看</a></td>	         
					            <td>
					                <a href="order/editorder.action?type=1&orderId=<s:property value="orderId"/>&commodityNumber=<s:property value="commodityNumber"/>">通过</a>||
					           		<a href="order/editorder.action?type=2&orderId=<s:property value="orderId"/>&userId=<s:property value="userId"/>&commodityNumber=<s:property value="commodityNumber"/>">拒绝</a>	
					           	</td>			       		      	    	      	
			  				    </s:if>
			  				    	
			  				    <s:if test="orderState=='已通过'">
			  				    <td style="color:green"><s:property value="orderState"/></td>
			  				    <td><a type="button" onclick="detailInfo(<s:property value="harvestAddressInfoId"/>)">查看</a></td>	         
			  				    <td>
			  				   		 <a href="order/editorder.action?type=3&orderId=<s:property value="orderId"/>">确定发货</a> 
			  				    </td>
			  				    </s:if>
			  				    
			  				    <s:if test="orderState=='未通过'">
			  				    <td style="color:red"><s:property value="orderState"/></td>
			  				    <td><a type="button" onclick="detailInfo(<s:property value="harvestAddressInfoId"/>)">查看</a></td>	         
			  				    <td></td>
			  				    </s:if>
			  				    
			  				    <s:if test="orderState=='已发货'">
			  				    <td style="color:black"><s:property value="orderState"/></td>
			  				    <td><a type="button" onclick="detailInfo(<s:property value="harvestAddressInfoId"/>)">查看</a></td>	         
			  				    <td></td>
			  				    </s:if>
			  				    
					        </tr>  
				        </s:iterator>  
		  			</table>	
		  		</div>		
		        <div id="fenye" ><jsp:include page="../../../../page.jsp"></jsp:include></div>		  		
       	      <form action="order/topage.action" id="mainForm" method="post">  
                <input type="hidden" name="order.orderState" value="<s:property value="order.orderState"/>" />  
                <input type="hidden" name="order.commodity.commodityType" value="<s:property value="order.commodity.commodityType"/>" />  
                <input type="hidden" name="pageSize"  value="<s:property value="page.pageSize"/>" />  
                <input type="hidden" name="pageIndex" value="<s:property value="page.pageIndex"/>" />  
             </form>  
    </body>  
    </html>  