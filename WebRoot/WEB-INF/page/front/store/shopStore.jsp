<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
 <%@ taglib prefix="s" uri="/struts-tags"%> 

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>积分商城</title>
    
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
	<script type="text/javascript" src="js/back/page.js"></script>    
    <script type="text/javascript" src="js/bootstrap.min.js" ></script>
    
    
     <script type="text/javascript"> 
     
     
     	function myOrder(){
     		var userId = $("#isLogin").val();
     		if(userId !=""){
     			window.location.href="store/myorder.action?order.userId="+userId+""; 	
     		
     		}else{
     			alert("请先登录");
     		}	
    	} 
       
        $(function() {  
        
        	
        	$("#dialog_jifen").dialog({
				autoOpen:false,
				width : 300,
				
				title : '积分查询',
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
			
			
			function findJiFen(){
				var userId = $("#isLogin").val();
				if(userId !=""){
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
								$("#phoneNumber").empty();
			 					$("#phoneNumber").append(info.mobileCard.phoneNumber)
			 					$("#jifen1").empty();
			 					$("#jifen1").append("<p style='color:red'>"+info.mobileCard.remainingScore+"分</p>")			 	
							  }					 		
							}
	    				}); 
				}
			}
			//查询用户积分
			findJiFen();
			
			
            $("#searchButton").click(function(){  
                var myForm = document.getElementById("mainForm");  
                if (myForm["pageIndex"])  
                    myForm["pageIndex"].value = 1;  
                if (myForm["commodity.commodityName"])  
                    myForm["commodity.commodityName"].value = $("#commodityName").val();  
                $("#mainForm").submit();  
             })  
             
             
             
             $("#jifen").click(function(){
             	var userId = $("#isLogin").val();
             	var phoneNumber = $("#phoneNumber").text();
             	if(userId==""){
             		alert("请先登录");
             		window.location.href="userLogin/userLogout"; 	
             	}else if(phoneNumber !=""){
             		$("#dialog_jifen").dialog("open");	  	
	             }else{
	             	alert("请先修改个人信息，绑定手机号码")
	             }      
	              
             })
             
        });  
    </script>  
    

  </head>
  
  <body>
  
  <div id="dialog_jifen" class="table-responsive">
			<table id="jf_table"  class="table table-striped">
				<tr>
					<th>绑定手机号：</th>
					<td id="phoneNumber"></td>
				</tr>
				<tr>
					<th>当前积分：</th>
					<td id="jifen1"></td>
				</tr>
			</table>	
	</div> 
	
  <div id="shortcut">
    <div class="center1200">
        <div class="login">
          		  您好，欢迎来到中国联通积分商城!      
        </div>
        <ul class="rightNav">
        	  <li class="share"><dl><dt><a type="button" id="jifen">我的积分</a> </dt></dl> </li>
              <li class="share"><dl><dt><a type="button" onclick="myOrder()">我的订单</a> </dt></dl></li>
              <li class="share"><dl><dt><a >帮助中心</a> </dt></dl></li>
              <li class="share"><dl><dt><a >客户端下载 </a> </dt></dl></li> 
        </ul>
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
    
  <div style="margin-top:80px">
	  <table style="width:80%;margin-left:10%" class="table table-striped" >
	  	<tr>
	  		<th><img src="images/front/store/shop8.png" alt=""><span>按分值浏览</span></th>
	  		<th><a  href="store/topage.action">全部分值</a></th>
	  		<th><a  href="store/topage.action?commodity.searchCondition.from=0&commodity.searchCondition.to=1000">0-1000分</a></th>
	  		<th><a  href="store/topage.action?commodity.searchCondition.from=1000&commodity.searchCondition.to=2000" >1000-2000分</a></th>
	  		<th><a  href="store/topage.action?commodity.searchCondition.from=2000&commodity.searchCondition.to=3000" >2000-3000分</a></th>
	  		<th><a  href="store/topage.action?commodity.searchCondition.from=3000&commodity.searchCondition.to=5000" >3000-5000分</a></th>
	  		<th><a  href="store/topage.action?commodity.searchCondition.from=5000&commodity.searchCondition.to=10000" >5000-10000分</a></th>
	  		<th><a  href="store/topage.action?commodity.searchCondition.from=10000" >10000分以上</a></th>		
	  	</tr>
	  </table>
   </div>
         
	<div style="background-color:red" class="center1200" >
    <h1>商品大集</h1>
    </div>
		
    <div class="center1200 " style="height:900px" >
  		 <s:iterator value="commodityList" status="index">  			
					      <div style="width:240px;height:300px;float:left">
					      	 <a href="store/commoditymsg.action?commodityNumber=<s:property value="commodityNumber"/>" target="_blank">
            			    <img src="commodity/tophoto.action?path=<s:property value="commodityImgPath"/>" alt=""  width="240px" height="240px"/></a>
               				 <div><a href="store/commoditymsg.action?commodityNumber=<s:property value="commodityNumber"/>" target="_blank" class="goodsName"><s:property value="commodityName"/></a></div>
               				<span> 积分：<i style="font-size:25px;color:red"><s:property value="commodityIntegral"/></i></span>			      
					      </div>					     					   			   			      	            
		</s:iterator>  	     	
    </div>
    <div class="center1200 " >
    		<div  id="fenye"  style="margin-left:30%"><jsp:include page="../../../../page.jsp"></jsp:include></div>		  		
       	      <form action="store/topage.action" id="mainForm" method="post">  
                <input type="hidden" name="commodity.commodityName" value="<s:property value="commodity.commodityName"/>" /> 
                <input type="hidden" name="commodity.searchCondition.from" value="<s:property value="commodity.searchCondition.from"/>" /> 
                <input type="hidden" name="commodity.searchCondition.to" value="<s:property value="commodity.searchCondition.to"/>" /> 
                <input type="hidden" name="pageSize"  value="<s:property value="page.pageSize"/>" />  
                <input type="hidden" name="pageIndex" value="<s:property value="page.pageIndex"/>" />  
             </form>  
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
            <div class="flinks"><a>企业法人营业执照 </a>|<a
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
    </div>
</div>

	<form id="searchForm">
		<input name="userId" type="hidden" id="isLogin" value="${user.userId}">
	</form>
	
  </body>
</html>




