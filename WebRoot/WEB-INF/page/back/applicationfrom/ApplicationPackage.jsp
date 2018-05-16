<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>更改手机套餐</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
		<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css"/>
		<link rel="stylesheet" href="css/jquery-ui.min.css" />
		<link rel="stylesheet" href="css/jquery-ui.structure.min.css" />
		<link rel="stylesheet" href="css/jquery-ui.theme.min.css" />
		<script src="js/jquery.js"></script>
		<script src="js/jquery-ui.min.js"></script>
	<script src="js/bootstrap.min.js" type="text/javascript"></script>
  </head>
  	<script type="text/javascript">
		$(function(){
			var state=1;
			var mobileCardId="${mobilecard.mobileCardId }";
			var packageId;
			function Close(){
				var isqued=$("a[name='toqued']");
				for(var i=0;i<isqued.size();i++){				
					if(isqued[i].innerText=='确定'){
						var queid=isqued[i].id;
						var id=queid.charAt(queid.length - 1);
						toQux(id);
					}
					
				}
				
			}
			function toQux(id){   //取消
						$("#"+id).text("申请");
						var hintid="hint"+id;
						var hint=$("#"+hintid);				
						hint.text("");
						var quxid="qux"+id;
						var qux=$("#"+quxid);
						qux.text("");
						state=1;
			}
			function toQued(id){  //点击申请
					$("#"+id).text("确定");
					var hintid="hint"+id;
					var hint=$("#"+hintid);
					var hintext="您好!请再次确认要申请变更的套餐!"					
					hint.text(""+hintext);
					var quxid="qux"+id;
					var qux=$("#"+quxid);
					qux.text("取消");
					state=0;
			}
			$("a[name='toqued']").click(function(){
				if(state==1 && this.innerText=='申请'){
					var id=this.id;
					toQued(id)
				}else if(this.innerText=='确定'){
				    var packageId=this.id;
					location="applicationfrom/uploadapplication?"+"mobileCardId="+mobileCardId+"&packageId="+packageId;
				}else{	
					Close();				
					var id=this.id;									
					toQued(id);				
				}				
			});
			$("a[name='qux']").click(function(){
				var id=this.id.charAt(this.id.length - 1);
				toQux(id);
			});
		});
  	</script>
  <body>
  		<div style="display:none">
  			<span>mobileCardId</span><p>${mobilecard.mobileCardId }</p>
  			<span>userId</span></span><p></p>
  			<span>packageId</span><p>3</p>
  			<span>phoneNumber</span><p>4</p>

  		</div>
  		
  		
	    <div class="text-center">
	    		<div class="row-fluid" >				
				<div>
					<h1>请选择要变更的套餐申请</h1>
				</div>		
					<c:forEach items="${packageList }" var="tpackage">
						<c:choose>
							<c:when test="${tpackage.getPackageid()!=mobilecard.packageId}">
									<div style="float:left;width:400px">
									<div class="thumbnail">
										<img alt="300x200"  id="" src="img/package/${tpackage.getPackageid() }.jpg" />
										<div class="caption">
											<h3>
												${tpackage.getPackageinfo() }
											</h3>
											<p id="hint${tpackage.getPackageid() }">
											</p>
											<p>
												<a  id="${tpackage.getPackageid() }" name="toqued" class="btn btn-primary">申请</a> <a name="qux" id="qux${tpackage.getPackageid() }" class="btn" ></a>
											</p>
										</div>
									</div>
									</div>
							</c:when>
						</c:choose>


					</c:forEach>	
				
				</div>									
	</div>
  </body>
</html>
