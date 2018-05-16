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
    
    <title>我的订单</title>
    
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
    
  
    
    

  </head>
  
  <body>
  
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
    
  <div style="margin-top:80px">
	 
   </div>
         
	<div style="background-color:orange" class="center1200" >
    <h1>我的订单</h1>
    </div>
		
    <div class="center1200 " >
    	<table class="table table-striped" style="font-size:13px">
    		<tr>
			  	<th>订单编号</th>
			  	<th>商品名</th>
			  	<th>商品图片</th>
			  	<th>订单金额</th>
			  	<th>支付时间</th>
			    <th>订单状态</th>
		  	</tr>
		  	 <s:iterator value="orderList" status="index">  
		  	 <tr>			
					  <td><s:property value="orderId"/></td>
					  <td><s:property value="commodity.commodityName"/></td>  
					   <td><img src="commodity/tophoto.action?path=<s:property value="commodity.commodityImgPath"/>"   alt="" width="70" height="50" /></td>       
					   <td><s:property value="orderMoney"/></td>
					  <td><s:property value="paymentTime"/></td>  	
					  <s:if test="orderState=='待审核'">
					      <td style="color:blue"><s:property value="orderState"/></td>
		              </s:if>
			  		  <s:if test="orderState=='已通过'">
			  		 	 <td style="color:green"><s:property value="orderState"/></td>
			  		   </s:if>
			  			<s:if test="orderState=='未通过'">
			  		     <td style="color:red"><s:property value="orderState"/>(积分已经返还)</td>
			  	       </s:if>
			  		   <s:if test="orderState=='已发货'">
			  				 <td style="color:black"><s:property value="orderState"/></td>
			  			</s:if>	   
			  	</tr>   					   			   			      	            
			</s:iterator>
    		
    	
    	</table>  	     	
    </div>
    <div class="center1200 " >
    		<div  id="fenye"  style="margin-left:30%"><jsp:include page="../../../../page.jsp"></jsp:include></div>		  		
       	      <form action="store/myorder.action" id="mainForm" method="post">  
                <input type="hidden" name="order.userId" value="${user.userId}" /> 
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

	
	
  </body>
</html>

