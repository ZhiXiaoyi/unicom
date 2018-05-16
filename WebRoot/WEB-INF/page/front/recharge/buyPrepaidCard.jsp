<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>购买充值卡</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link rel="stylesheet" type="text/css"
	href="css/front/recharge/recharge.css">
<script type="text/javascript" src="js/front/recharge/recharge.js"></script>
<script type="text/javascript" src="js/front/jquery.js"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>


</head>

<body>
<input type="hidden" id="areaId" name="areaId" value="1">
	<div id="buyPrepaidCard">
		<form id="buyPrepaidCardForm" action="buyPrepadiCard/tobuyPrepadiCard" method="post">
			<h2><strong>购买充值卡</strong></h2>
			<table id="buyPrepaidCard_table">
				<tr>
					<td>购卡面额：</td>
					<td><input type="radio"  name="facevalue" value="20" checked="true" >20元<input type="radio" name="facevalue" value="30" >30元<input type="radio" name="facevalue" value="50" >50元<input type="radio" name="facevalue" value="100" >100元</td>
					<td><span id="denomination_tip" name=" denomination_tip" style="display:none"></span></td>
				</tr>
				<tr>
					<td>购卡数量：</td>
					<td><input type="text" name="cardNumber" id="cardNumber" required="required" placeholder="购卡数量为整数" onchange="checknumber(this)" onblur="count(this)"></td>
					<td><span id="number_tip" name="number_tip" style="display:none"></span></td>
				</tr>
				<tr>
					<td>购卡邮箱：</td>
					<td><input type="text" name="mail" id="mail" placeholder="邮箱,手机必须填写一个" onchange="checkmail(this)"></td>
					<td><span id="mail_tip" name="mail_tip" style="display:none"></span></td>
				</tr>
				<tr>
					<td>购卡手机：</td>
					<td><input type="text" name="phone" id="phone"  placeholder="邮箱,手机必须填写一个" onchange="checkPhoneNumber(this)" ></td>
					<td><span id="phone_tip" name="phone_tip" style="display:none"></span></td>
				</tr>
				<tr>
					<td>支付金额：</td>
					<td colspan="2"><input type="text" name="money" id="money" style="display:none"></td>
				</tr>
				<tr>
					<td style="color:red">提示：</td>
					<td colspan="2" style="color:red">${tip}</td>
				</tr>
				<tr>
					<td colspan="3" align="center"><input type="submit"
						id="submit" name="sure" value="下一步" onmouseover="choseReceive(this)"></td>
				</tr>
			</table>
			</form>
	</div>
</body>
<script type="text/javascript">

/* 失去焦点自动统计购卡的金额 */
function count(){
	var number = document.getElementById("cardNumber").value;// 购卡数量
	/* alert(number);  */
	var facevalue=$("input[name='facevalue']:checked").val();
/* alert(facevalue);  */
	if(number!=0 && facevalue!=0){
		var money = document.getElementById("money");//消费金额
		money.value = number * facevalue;
		money.style.display="block";
	}
}

function choseReceive(){
	var mail = document.getElementById("mail").value;
	var phone = document.getElementById("phone").value;
		if(mail!=0 ||phone!=0){
			
		}else{
			alert("请选择手机和邮箱中的一个接收充值卡账号密码！！！");
		}
	}
	

</script>
</html>
