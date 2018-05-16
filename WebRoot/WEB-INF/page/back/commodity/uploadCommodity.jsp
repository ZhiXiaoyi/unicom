<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

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
	
	<link rel="stylesheet" href="css/back/pintuer.css">
	<link rel="stylesheet" href="css/back/admin.css">
	<script src="js/jquery.js"></script>
	<script src="js/back/pintuer.js"></script>
	
	<script>
		$(function(){
			$('#backid').click(function() {
					window.location.href = "commodity/topage.action";
				});	
		});
	
	</script>

  </head>
  
  <body>
    <div class="panel admin-panel">
  <div class="panel-head" ><strong><span class="icon-pencil-square-o"></span>上传商品</strong></div>
  <div class="body-content">
    <form  class="form-x" action="commodity/uploadcommodity.action" method="post" enctype="multipart/form-data">  
      <div class="form-group">
        <div class="label">
          <label>商品名：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" value="" name="commodity.commodityName" data-validate="required:请输入商品名" />
          <div class="tips"></div>
        </div>
      </div>
      
      <div class="form-group">
        <div class="label">
          <label>图片：</label>
        </div>
        <div class="field">
          <input type="file" name="myFile" style="float:left;height:50px">
          <div class="tipss">图片尺寸：500*500</div>
        </div>
      </div>     
      
      <div class="form-group">
        <div class="label">
          <label>商品原价：</label>
        </div>
        <div class="field">
          <input type="text" class="input w50" value="" name="commodity.commodityPrice" data-validate="required:请输入原价" />
          <div class="tips"></div>
       </div>
       </div>
    
        <div class="form-group">
          <div class="label">
            <label>所需积分：</label>
          </div>
          <div class="field">
          <input type="text" class="input w50" value="" name="commodity.commodityIntegral" data-validate="required:请输入积分" />
          <div class="tips"></div>
       </div>
       </div>
       
        <div class="form-group">
          <div class="label">
            <label>库存：</label>
          </div>
          <div class="field">
          <input type="text" class="input w50" value="" name="commodity.commodityStock" data-validate="required:请输入库存" />
          <div class="tips"></div>
       </div>
       </div>
       
        <div class="form-group">
          <div class="label">
            <label>类型：</label>
          </div>
          <div class="field">
          <input type="text" class="input w50" value="" name="commodity.commodityType" placeholder="1-积分商品  或者   2-手机卡" data-validate="required:请输入类型" />
          <div class="tips"></div>
       </div>
       </div>
       
      <div class="form-group">
        <div class="label">
          <label>商品信息：</label>
        </div>
        <div class="field">
          <textarea name="commodity.commodityInfo" class="input" style="height:60px; border:1px solid #ddd;"></textarea>
          <div class="tips"></div>
        </div>
      </div>
     
      <div class="form-group">
        <div class="label">
          <label></label>
        </div>
        <div class="field">
          <button class="button bg-main icon-check-square-o" type="submit">提交</button>
          <button id ="backid" class="button bg-red icon-check-square-o" type="button"> 返回</button>
        </div>
      </div>
    </form>
  </div>
</div>
</body>
</html>