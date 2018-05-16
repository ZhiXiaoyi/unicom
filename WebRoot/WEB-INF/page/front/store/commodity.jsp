<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>商品详细信息页</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	
	<link href="css/front/store/bottom.css" rel="stylesheet" type="text/css" />
	<link href="css/front/store/top-2.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="css/jquery-ui.css"/>
	<script type="text/javascript" src="js/jquery.min.js" ></script>
	<script src="js/jquery-1.9.1.js"></script>
	<script src="js/jquery-ui.js"></script>
	<link rel="stylesheet" href="css/style.css"/>
	<link rel="stylesheet" href="css/bootstrap.min.css" />
    <script type="text/javascript" src="js/bootstrap.min.js" ></script>
	
	 <script type="text/javascript">  
	 
	 function checkForm(){
        		if($("#harvestName").val()==""){
        			alert("收货人名字不能为空！")
        			return false;
        		}
        		var phone = $("#harvestPhoneNumber").val();
        		 if(!(/^1[34578]\d{9}$/.test(phone))){ 
				        alert("手机号码有误，请重填");  
				        return false; 
				    } 
        		if($("#harvestAddress").val()==""){
        			alert("收货地址不能为空");
        			return false;
        		}
        		var str = $("#postCode").val().trim();      
  				reg=/^\d{6}$/;      
                if(!reg.test(str)){      
                    alert("请输入6位的邮政编码");
                    return false;   
                 }  
                var myForm = document.getElementById("Info");  
                myForm.submit();  
        	}
        $(function() {  
        	
        	$("#dialog_order").dialog({
				autoOpen:false,
				width : 500,
				
				title : '收货信息填写',
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
			
			
            $("#searchButton").click(function(){  
                var myForm = document.getElementById("mainForm");  
                if (myForm["commodity.commodityName"])  
                    myForm["commodity.commodityName"].value = $("#commodityName").val();  
                $("#mainForm").submit();  
             })  
             
             
             
             $("#sureChange").click(function(){
             	var userId = $("#isLogin").val();
             	if(userId==""){
             		alert("请先登录");
             		window.location.href="userLogin/userLogout"; 	
             	}else{
             		$.ajax({
						cache: true,
						type: "POST",
						url:"storejson/selectjifen.action",
						data:$('#searchForm').serialize(),// 你的formid
						async: false,
						error: function(request) {
						},
						success: function(data) {
							var info =data;
							if(info.mobileCard != null){
								var commodityJiFen = $("#commmodityJiFen").text();
								if(info.mobileCard.remainingScore<commodityJiFen){
									alert("您的积分不足")
								}else{
									$("#dialog_order").dialog("open"); 	
								
								}	 	
							  }	else{
							  	alert("请先修改个人信息，绑定手机卡");
							  }				 		
							}
	    				}); 		 
	             	}       
             })
             
        });  
    </script>  

  </head>
  
  <body>
  
  
 	 <div id="dialog_order" class="table-responsive">
 	 	<form id="Info" action="store/order.action"  method="post">
 	 		<input type="hidden" name="order.commodityNumber" value="${commodity.commodityNumber}">
 	 		<input type="hidden" name="order.userId" value="${user.userId}">
 	 		<input type="hidden" name="order.orderState" value="待审核">
 	 		<input type="hidden" name="order.orderMoney" value="0">
 	 		<input type="hidden" name="commodity.commodityIntegral" value="${commodity.commodityIntegral}">
			<table  class="table table-striped">
				<tr>
					<th style="width:80px">收货人姓名：</th>
				<td><input id="harvestName" type="text" name="harvestAddressInfo.harvestName" placeholder="不能为空"></td>
				</tr>
				<tr>
					<th style="width:80px">收货人手机号：</th>
					<td><input id="harvestPhoneNumber" type="text" name="harvestAddressInfo.harvestPhoneNumber" placeholder="不能为空"></td>
				</tr>
				<tr>
					<th style="width:80px">收货地址：</th>
					<td><input id="harvestAddress" type="text" name="harvestAddressInfo.harvestAddress" placeholder="不能为空"></td>
				</tr>
				<tr>
					<th style="width:80px">邮政编码：</th>
					<td><input id="postCode" type="text" name="harvestAddressInfo.postCode" placeholder="不能为空"></td>
				</tr>
				<tr>	
					<td><div style="margin-left:100px"><button type="button" class="btn btn-primary" onclick="checkForm()">提交</button></div></td>
					<td><div><button type="reset" class="btn btn-warning">重置</button></div></td>
				</tr>
			</table>	
		</form>
	</div> 
	
	
    <div id="shortcut">
    <div class="center1200">
        <div class="login">
          		  您好，欢迎来到中国联通积分商城!      
        </div>
    </div>
</div>
	<div id="header" class="center1200">
	    <div class="logo">
	        <a class="logoImg" >
	            <img src="images/front/store/shop5.png" alt=""/>
	        </a>
	    </div>
	
	    <div class="searchForm">
	        <ul class="mallSearch">
	            <li class="searchL">
	                <img src="images/front/store/shop6.png" alt=""/>
	                <input style="height:30px" id="commodityName" type="text" value="" class="searchBox placeholder" maxlength="20" >
	            </li>
	            <li class="searchR" id="searchButton"><span>搜&nbsp;索</span></li>
	        </ul>
	        <div class="hotSearch">
	            <span class="hot">热门搜索：</span>
	            <span id="hotSearchBox">
	                <a class="school-item " >充值卡</a>
	                <a class="school-item " >话费</a>
	                <a class="school-item " >家居用品</a>
	                <a class="school-item " >手机配件</a>
	            </span>
	        </div>     
	    </div>
	    
	    <div >
	        <img style="height:100px;width:250px;margin-left:100px" src="images/front/store/shop7.jpg" alt=""/> 
	    </div>
	</div>
	
	
<div id="content" class="center1200" style="height:550px">
    <div class="contentTile">
        <div>商品信息</div>
    </div>
   	<div style="float:left;width:500px;height:500px">
   	<img width="500" height="500" src="commodity/tophoto.action?path=<s:property value="commodity.commodityImgPath"/>"/>
   	</div>
   	<div style="float:left;width:100px;height:500px">
   	</div>
   	<div style="float:left;width:600px;height:500px">
   		<div >
        	<div >
           		<h3><s:property value="commodity.commodityName"/></h3>
        	</div>
       		 <hr>
      		 <div >
           		 <dl>
               		 <dt >所&nbsp;&nbsp;需&nbsp;&nbsp;积&nbsp;&nbsp;分：</dt>
               		 <dd style="font-size:25px;color:red;margin-left: 60px"><span id="commmodityJiFen" style="font-size:40px;color:red"><s:property value="commodity.commodityIntegral"/></span>积分 </dd>
                     <div>
                        	<img src="images/front/store/store2.png" alt=""/>收藏商品
                    </div>
           		 </dl>
            	<dl>
                <dt>评&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：</dt>
               	 <dd class="star" style="margin-left: 60px">
                    <img src="images/front/store/store1.png" alt=""/>
                    <img src="images/front/store/store1.png" alt=""/>
                    <img src="images/front/store/store1.png" alt=""/>
                    <img src="images/front/store/store1.png" alt=""/>
                    <img src="images/front/store/store1.png" alt=""/>
               	 </dd>
           		 </dl>      
           		 <dl>
            	    <dt>服&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务：</dt>
              		  <dd style="margin-left: 60px">由京东提供发货及售后服务，服务热线：4006221086</dd>
           		 </dl>
           		 
           		 
           		 
            	<dl class="dlBottom">
                <dt>当&nbsp;&nbsp;&nbsp;前&nbsp;&nbsp;&nbsp;库&nbsp;&nbsp;&nbsp;存：</dt>
                <dd  style="font-size:25px;margin-left: 60px"><s:property value="commodity.commodityStock"/></dd>
            	</dl>
       		 </div>
        		<div class="m-bottom">
           			 <div >
            		    <button  id="sureChange"  class="btn btn-warning btn-lg">立即兑换</button>         			    
           			 </div>
        		</div>
   			</div>
   		</div>  	
</div>

	         
   <div id="bottom">

    <div class="helpLoad">
        <div class="serviceH">
            <div class="serviceTit"></div>
            <div class="serviceDetarl">
                <dl>
                    <dt class="howTo">
                    <h2>新手必读</h2></dt>
                    <dd><a>关于商城</a></dd>
                    <dd><a>服务密码</a></dd>
                    <dd><a>积分查询</a></dd>
                    <dd><a>兑换流程</a></dd>
                </dl>
                <dl>
                    <dt class="howPay">
                    <h2>配送服务</h2></dt>
                    <dd><a>订单查询</a></dd>
                    <dd><a>配送范围及时限</a></dd>
                    <dd><a>礼品验货与签收</a></dd>
                </dl>
                <dl>
                    <dt class="howSend">
                    <h2>售后服务</h2></dt>
                    <dd><a>退换货规定</a></dd>
                    <dd><a>礼品三包</a></dd>
                </dl>
                <dl>
                    <dt class="afterSales">
                    <h2>积分计划</h2></dt>
                    <dd><a>积分规划</a></dd>
                    <dd><a>积分的有效期</a></dd>
                    <dd><a>常见问题</a></dd>
                </dl>
                <dl>
                    <dt class="serPhone">
                    <h2>客服电话</h2></dt>
                    <dd><img src="images/front/store/shop4.png" alt=""/></dd>
                </dl>
            </div>
            <div class="serviceTit"></div>
        </div>

    </div>
    <div class="foodLoad"><!--footer-->
        <div class="footerLine"></div>
        <div id="footer" class="center980">
            <div class="flinks"><a  >企业法人营业执照 </a>|<a
                    >基础电信业务经营许可证 </a>|<a
                  >增值电信业务经营许可证 </a>|<a
                   >网络文化经营许可证 </a></div>
            <div class="copyright">Copyright©
                1999-2016 &nbsp;
                &nbsp;
                中国联通 &nbsp;
                版权所有<br>中华人民共和国增值电信业务经营许可证 经营许可证编号：A2.B1.B2-20090003
                <br><br>
                <img src="images/front/store/shop3.png">
            
                <img src="images/front/store/shop2.png">
                
                <img src="images/front/store/shop1.png" alt="可信网站">
               
            </div>
        </div>
        <!--footer end-->
    </div>

</div>

<form action="store/topage.action" id="mainForm" method="post">  
          <input type="hidden" name="commodity.commodityName" value="<s:property value="commodity.commodityName"/>" />
</form>  

<form id="searchForm">
		<input name="userId" type="hidden" id="isLogin" value="${user.userId}">
	</form>
  </body>
</html>