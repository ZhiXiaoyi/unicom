
// 全局变量用于记录用户上一次选中的充值方式
var beforem = 0;
/** ***************************** 公共部分 ********************************** */
// 充值首页类型地市号码获取焦点时文字加粗和输入框加红边框
function focusInput(type){	
	var labels=["type_label","city_label","phone_label"];
	var inputs=["type_input","phone_input"];
	jQuery(".phoneselectOption").css("display","none");	
	for(var i=0;i<labels.length;i++){
		if(labels[i].substring(0,labels[i].indexOf('_'))==type){
			jQuery("#"+labels[i]).css('font-weight','bold');
		}else{
			jQuery("#"+labels[i]).css('font-weight','normal');
		}
	}
	for(var j=0;j<inputs.length;j++){
		if(inputs[j].substring(0,inputs[j].indexOf('_'))==type){
			jQuery("#"+inputs[j]).css('border-bottom-color','#ff6507').css('border-left-color','#ff6507').css('border-right-color','#ff6507').css('border-top-color','#ff6507');
		}else{
			jQuery("#"+inputs[j]).css('border-bottom-color','#aaaaaa').css('border-left-color','#aaaaaa').css('border-right-color','#aaaaaa').css('border-top-color','#aaaaaa');
		}
	}
}

function checkEmpty(str){
	var str=jQuery("#"+str).val();
	 if(str!=null&&str!=""){
		 return true;
	 }else{
		 return false;
	 }
}
 function phoneNumFocus(that){
		if(that.value=="充值号码无需加区号"){
			  that.value="";
		}
		var ordertype = jQuery("#ORDERTYPE").val();
		var phonenum=that.value;
		if(ordertype=="50"&&phonenum.length==11){
			jQuery("#phonenumlast").val(phonenum);
		}
 }
 
 // 余额查询
 function getBalance(){ 
	 
 	if (!checkEmpty("ORDERTYPE")){
 		jQuery("#ORDERTYPE_PROMPT_W").css("display","inline-block");
		return false;
 	}
 	
 	var orderType = jQuery("#ORDERTYPE").val();
 	// 地市校验 1,为固定电话;11,为公话;2,为小灵通;-1,为预开通;3,为宽带ADSL;6为宽带LAN)
 	if(orderType == "1" || orderType == "11" || orderType == "2" || orderType == "-1" || orderType == "3" || orderType == "6"){
 		if (!checkEmpty("PAYCITYCODE")){
 			jQuery("#PAYCITYCODE_PROMPT_W").css("display","inline-block");
 			return false;
 	 	}
 	}
 	
 	var cityCode = jQuery("#PAYCITYCODE").val();
 	var phoneNum = jQuery("#PHONENUM").val(); 	
 	if(phoneNum == "" || phoneNum == null){
 		jQuery("#PHONENUM_PROMPT").html("请输入充值号码！");
 		// 充值号码错误信息样式展现
		PhonenumStyle(1);
		setFocus("PHONENUM");
		return false;
 	}
 	if(orderType!='50'){
 		var flag = productIfExit(cityCode,orderType,phoneNum);
 		if(flag != "1"){
 			changeButtonGray();
 			jQuery("#PHONENUM_PROMPT").html("对不起，您输入的号码有误！若您的号码尚未启用，请选择产品类型为[预开通]");
 			PhonenumStyle(1);
 			setFocus("PHONENUM");
 			return false;
 		} 	
 	} 	
 	if(cityCode == "0591" || cityCode == "0595"){
 		if(orderType == "1" || orderType == "2" || orderType == "11"){
 			if(phoneNum.length != 8){
 		 		jQuery("#PHONENUM_PROMPT").html("请输入8位充值号码！");
 		 		// 充值号码错误信息样式展现
				PhonenumStyle(1);
				setFocus("PHONENUM");
				return false;
 			}
 		}
 	}else{
 		if(orderType == "1" || orderType == "2" || orderType == "11"){
 			if(phoneNum.length != 7){
 		 		jQuery("#PHONENUM_PROMPT").html("请输入7位充值号码！");
 		 		// 充值号码错误信息样式展现
				PhonenumStyle(1);
				setFocus("PHONENUM");
				return false;
 			}
 		}
 	}
 	
 	if(orderType == "50" || orderType == "10"){
 		if(phoneNum.length != 11){
			jQuery("#PHONENUM_PROMPT").html("请输入11位充值号码！");
			// 充值号码错误信息样式展现
			PhonenumStyle(1);
			return false;
 		}
 		var cityc = findCity(phoneNum);
 		cityCode = cityc;
 		var flag = productIfExit(cityCode,orderType,phoneNum);
 		if(flag != "1"){
 			changeButtonGray();
 			jQuery("#PHONENUM_PROMPT").html("对不起，您输入的号码有误！若您的号码尚未启用，请选择产品类型为[预开通]");
 			PhonenumStyle(1);
 			setFocus("PHONENUM");
 			return false;
 		} 	
 	}
 	
// if((orderType=='3'||orderType=='6') && phoneNum.length==11 &&
// (phoneNum.substring(0,3)=="133"||phoneNum.substring(0,3)=="153"||phoneNum.substring(0,3)=="180"||phoneNum.substring(0,3)=="189"||phoneNum.substring(0,3)=="181")){
// phoneNum = phoneNum + "@fj";
// }
	var path = "/PayAjaxServlet.do";
 	if(orderType == "10"){// 翼支付账户查询余额
 		jQuery.ajax( {
	  		url : path,
	  		type : 'POST',
	  		dataType : 'json',
	  		cache : false,
	  		data : ( {
	  			method:'newAccountQuery',
	  			prodNum:phoneNum,
	  			prodId:orderType,
	  			cityCode:cityCode,
	  			isonline:'1'
	  		}),
	  		timeout : 30000,
	  		success : function(json) 
	  		{
	 			var result = json.msg;	
				if(result.indexOf("查不到信息或资源忙") != -1){
					jQuery("#yue").html("&nbsp;查不到信息或资源忙，请稍后充值!"); 
				}else if(result.indexOf("您输入的号码有误") != -1){
					jQuery("#yue").html("&nbsp;您输入的号码有误，请确认后充值!");
				}else if(result.indexOf("余额") != -1 && result.indexOf("元") != -1){
					jQuery("#yue").html("&nbsp;" + result);
				}else if(result.indexOf("余额") != -1){
					jQuery("#yue").html("&nbsp;" + result + "元");
				}else if(result.indexOf("应付金额") != -1){
					jQuery("#yue").html("&nbsp;" + result);
				}else if(result.indexOf("您所查询的号码不属于您的账户") != -1){
					jQuery("#yue").html("&nbsp;" + result);
				}else{
					jQuery("#yue").html("&nbsp;查不到信息或资源忙，请稍后充值!");
				}
	  		},
			error : function() 
			{
	  			jQuery("#yue").html('操作超时，请稍后再试！！');
			}
	  	});
 	}else{
 		jQuery.ajax( {
	  		url : path,
	  		type : 'POST',
	  		dataType : 'json',
	  		cache : false,
	  		data : ( {
	  			method:'getBalance',
	  			prodNum:phoneNum,
	  			prodId:orderType,
	  			cityCode:cityCode,
	  			isonline:'1'
	  		}),
	  		timeout : 30000,
	  		success : function(json) 
	  		{
	 			var result = json.msg;	
				if(result.indexOf("查不到信息或资源忙") != -1){
					jQuery("#yue").html("&nbsp;查不到信息或资源忙，请稍后充值!"); 
				}else if(result.indexOf("您输入的号码有误") != -1){
					jQuery("#yue").html("&nbsp;您输入的号码有误，请确认后充值!");
				}else if(result.indexOf("余额") != -1 && result.indexOf("元") != -1){
					jQuery("#yue").html("&nbsp;" + result);
				}else if(result.indexOf("余额") != -1){
					jQuery("#yue").html("&nbsp;" + result + "元");
				}else if(result.indexOf("应付金额") != -1){
					jQuery("#yue").html("&nbsp;" + result);
				}else if(result.indexOf("您所查询的号码不属于您的账户") != -1){
					jQuery("#yue").html("&nbsp;" + result);
				}else if(result.indexOf("每月1日-3日为账务处理期，暂不提供数据") != -1){
					jQuery("#yue").html("&nbsp;" + result);
				}else{
					jQuery("#yue").html("&nbsp;查不到信息或资源忙，请稍后充值!");
				}
				getErrorMsg();
	  		},
			error : function() 
			{
	  			jQuery("#yue").html('操作超时，请稍后再试！！');
			}
	  	});
 		
 		}
 }
 
// 余额查询,专门用于充值结果页面显示
 function getBalance1(){ 
	 
 	if (!checkEmpty("ORDERTYPE")){
		return false;
 	}
 	
 	var orderType =jQuery("#ORDERTYPE").val();
 	// 地市校验 1,为固定电话;11,为公话;2,为小灵通;-1,为预开通;3,为宽带ADSL;6为宽带LAN)
 	if(orderType == "1" || orderType == "11" || orderType == "2" || orderType == "-1" || orderType == "3" || orderType == "6"){
 		if (!checkEmpty("PAYCITYCODE")){
 			return false;
 	 	}
 	}
 		
 	var cityCode = jQuery("#PAYCITYCODE").val();
 	
 	var phoneNum = jQuery("#PHONENUM").val();
 	if(phoneNum == "" || phoneNum == null){
		return false;
 	}else if(phoneNum == "充值号码无需加区号"){
		return false;
 	}
 	if(cityCode == "0591" || cityCode == "0595"){
 		if(orderType == "1" || orderType == "2" || orderType == "11"){
 			if(phoneNum.length != 8){
				return false;
 			}
 		}
 	}else{
 		if(orderType == "1" || orderType == "2" || orderType == "11"){
 			if(phoneNum.length != 7){
				return false;
 			}
 		}
 	}
 	
 	if(orderType == "50" || orderType == "10"){
 		if(phoneNum.length != 11){
			return false;
 		}
 		var cityc = findCity(phoneNum);
 		cityCode = cityc;
 	}
 	
// if((orderType=='3'||orderType=='6') && phoneNum.length==11 &&
// (phoneNum.substring(0,3)=="133"||phoneNum.substring(0,3)=="153"||phoneNum.substring(0,3)=="180"||phoneNum.substring(0,3)=="189"||phoneNum.substring(0,3)=="181")){
// phoneNum = phoneNum + "@fj";
// }
	var path = "/PayAjaxServlet.do";
 	if(orderType == "10"){// 翼支付账户查询余额
 		jQuery.ajax( {
	  		url : path,
	  		type : 'POST',
	  		dataType : 'json',
	  		cache : false,
	  		data : ( {
	  			method:'newAccountQuery',
	  			prodNum:phoneNum,
	  			prodId:orderType,
	  			cityCode:cityCode,
	  			isonline:'1'
	  		}),
	  		timeout : 30000,
	  		success : function(json) 
	  		{
	 			var result = json.msg;	
	 			if(result.indexOf("查不到信息或资源忙") != -1){
	 				jQuery("#yue").html("&nbsp;查不到信息或资源忙，请稍后充值!");  
				}else if(result.indexOf("您输入的号码有误") != -1){
					jQuery("#yue").html("&nbsp;您输入的号码有误，请确认后充值!");    
				}else if(result.indexOf("余额") != -1 && result.indexOf("元") != -1){
					if(result.indexOf("您当前号码余额：")!= -1){
						result = result.replace("您当前号码余额：","");
					}
					jQuery("#yue").html( result);   
				}else if(result.indexOf("余额") != -1){
					if(result.indexOf("您当前号码余额：")!= -1){
						result = result.replace("您当前号码余额：","");
					}
					jQuery("#yue").html(result + "元");  
				}else if(result.indexOf("应付金额") != -1){
					// result = result.replace("应付金额：","");
					jQuery("#yue").html(result); 
				}else{
					jQuery("#yue").html("&nbsp;查不到信息或资源忙，请稍后充值!");  
				}
	  		},
			error : function() 
			{
	  			jQuery("#yue").html('操作超时，请稍后再试！！');
			}
	  	});
 	}else{
 		jQuery.ajax( {
	  		url : path,
	  		type : 'POST',
	  		dataType : 'json',
	  		cache : false,
	  		data : ( {
	  			method:'getBalance1',
	  			prodNum:phoneNum,
	  			prodId:orderType,
	  			cityCode:cityCode,
	  			isonline:'1'
	  		}),
	  		timeout : 30000,
	  		success : function(json) 
	  		{
	 			var result = json.msg;	
	 			if(result.indexOf("查不到信息或资源忙") != -1){
	 				jQuery("#yue").html("&nbsp;查不到信息或资源忙，请稍后充值!"); 
				}else if(result.indexOf("您输入的号码有误") != -1){
					jQuery("#yue").html("&nbsp;您输入的号码有误，请确认后充值!");   
				}else if(result.indexOf("余额") != -1 && result.indexOf("元") != -1){
					if(result.indexOf("您当前号码余额：")!= -1){
						result = result.replace("您当前号码余额：","");
					}
					jQuery("#yue").html( "&nbsp;" + result);  
				}else if(result.indexOf("余额") != -1){
					if(result.indexOf("您当前号码余额：")!= -1){
						result = result.replace("您当前号码余额：","");
					}
					jQuery("#yue").html(result + "元");
				}else if(result.indexOf("应付金额") != -1){
					// result = result.replace("应付金额：","");
					jQuery("#yue").html( result);
				}else{
					jQuery("#yue").html("&nbsp;查不到信息或资源忙，请稍后充值!");
				}
	  		},
			error : function() 
			{
	  			jQuery("#yue").html('操作超时，请稍后再试！！');
			}
	  	});
 		}
 }
 
    // 银联和号百充值自动调接口查询余额，判断该号码是否可以充值
	function getPaymentBalance(payType){
		var cityCode = jQuery("#PAYCITYCODE").val();
		var prodNum = jQuery("#PHONENUM").val();
		var prodId = jQuery("#ORDERTYPE").val();
		var data={ method:'getPaymentBalance',prodNum: prodNum, prodId: prodId , cityCode: cityCode, orderType: payType, isonline: "1"} ;
		if(payType == "1")jQuery("#bankPass").val("");  
		if(payType == "4")jQuery("#bestPass").val(""); 
		var path = "/PayAjaxServlet.do";
		var result = "";
		jQuery.ajax( {
	  		url : path,
	  		type : 'POST',
	  		dataType : 'json',
			async : false,
	  		data : data,
	  		timeout : 30000,
	  		success : function(json) 
	  		{
			 	var resultCode = json.RESULTCODE;
			  	var resultMsg = json.RESULTMSG;	
			  	if(payType == "1"){// 银联支付
			  		if(resultCode == "0"){
			  			jQuery("#bankPass").val("true");
			  		}		  	
			  		jQuery("#bankResultMsg").val(resultMsg);	
			  	}else if(payType == "4"){// 号百支付
			  		if(resultCode == "0"){
			  			jQuery("#bestPass").val("true");
			  		}
			  		jQuery("#bestResultMsg").val(resultMsg);		  		
			  	}  
	  		},
			error : function() 
			{
		   		alert('操作超时，请稍后再试！！');
			}
	  	});
	}
 
 // 验证验证码
 function checkYzm(yzm){
	 var path = "/PayAjaxServlet.do";
	 var flag = 1;
	 jQuery.ajax( {
	  		url : path,
	  		type : 'POST',
	  		dataType : 'json',
	  		async : false,
	  		data : ( {
	  			method:'checkRand',
	  			yzm:yzm 
	  		}),
	  		timeout : 30000,
	  		success : function(json) 
	  		{
				 if(json.result != undefined){
					   var obj_value =json.result ;
					   if(obj_value == ''){	
					      flag = 0;
					   }else if(obj_value == '3'){
					      alert("您输入的验证码不对，请重新输入！！！");
					   }else{
						  alert("验证码验证失败，请重试。如果还有问题请拨10000咨询，谢谢！");
					   }
				    }else{		  
			           alert("抱歉，验证码验证失败，请稍候再试！！！");
			        }
		 
	  		},
			error : function() 
			{
		   		alert('操作超时，请稍后再试！！');
			}
	  	});
	  return flag;
	}

 // 验证充值金额
	function numcheck(phoneNum){
		if (isNaN(phoneNum)){
			 // alert ("请输入正确的充值金额！！");
			 jQuery("#promptCash").css("display","none");
			 jQuery("#CASH_PROMPT_W").css("display","inline-block");
			 jQuery("#CASH_PROMPT").html("请输入正确的充值金额！！");
			 setFocus(this);
			 return false;
		}
		if (phoneNum==""){
			 // alert ("请输入正确的充值金额！！");
			 jQuery("#promptCash").css("display","none");
			 jQuery("#CASH_PROMPT_W").css("display","inline-block");
			 jQuery("#CASH_PROMPT").html("请输入正确的充值金额！！");
			 setFocus(this);
			 return false;
		}	
	}
	
	function SevNbrNew(type){
		changePayBank();
		if(type == "3" || type=="50"){
			jQuery("#wxzfid").show();
		}else{
			jQuery("#wxzfid").hide();
		}
		var cityCode = jQuery("#PAYCITYCODE").val();
		var authCityCode = jQuery("#authCityCode").val();// 登录用户所在地市
		SevNbrNew_YK(type);
		if(cityCode != authCityCode){
			 jQuery("#PAYNUM").empty();
		}else{
			if(type == "10"){// 翼支付账户展现手机号码
				type = "50";
			} 
			var path = "/PayAjaxServlet.do";
			jQuery.ajax( {
		  		url : path,
		  		type : 'POST',
		  		dataType : 'json',
		  		cache : false,
		  		data : ( {
		  			method:'SelectProductList',
		  			Servicetype:type 
		  		}),
		  		timeout : 30000,
		  		success : function(json) 
		  		{
					if(json.data!=undefined ){
						var returnHmtl = "";
						   returnHmtl += "<ul>";
						   for(var i = 0; i< json.data.length;i++){
							   var tempArray = json.data[i];
							   var temp0 = tempArray[0];
							   var temp1 = tempArray[1];
							   var tempLi = "<li id=\"option_"+tempArray[0]+"\" onclick=\"selectPhoneNum(\'"+tempArray[0]+"\')\" onmouseover=\"chageColorOn(\'"+tempArray[0]+"\')\" onmouseout=\"chageColorOut(\'"+tempArray[0]+"\')\">"+tempArray[1]+"</li>";
							   returnHmtl += tempLi;
						   }
						   returnHmtl += "</ul>";
						   jQuery(".phoneselectOption").html(returnHmtl);						
					}
		  		},
				error : function() 
				{
			   		alert('操作超时，请稍后再试！！');
				}
		  	});
		}
	}
	function SevNbrNew_YK(type){
		if(type == "1" || type == "2" || type == "11"){
			jQuery("#PHONENUM").attr("maxlength","8");  
        }else if(type == "50" || type == "10" || type == "-1"){
        	jQuery("#PHONENUM").attr("maxlength","11");
        }
        
        if(type == "3" || type == "6"){
        	jQuery("#isKuanDai").val("true");  
        	jQuery("#PHONENUM").attr("maxlength","25");
        }else{
        	jQuery("#isKuanDai").val("false"); 
        }   
	}
	
	 function checkNumStr(){
			var isKuandai = jQuery("#isKuanDai").val();			
			if(isKuandai == "true"){
				return true;
			}else{
				return false;
			}
		}

	// 重填
  	function fun_reset(){
  		PayForm.reset();
  	}		

// 检验号码是否存在
	function productIfExit(citycode,prodId,prodNum){	
			var result;
			if(prodId == "10")prodId = "50";// 翼支付账户
			var path = "/PayAjaxServlet.do";
			jQuery.ajax( {
		  		url : path,
		  		type : 'POST',
		  		dataType : 'json',
		  		async : false,
		  		data : ( {
		  			method:'productIfExit',
		  			queryNo:prodNum,
		  			productId:prodId,
		  			cityCode:citycode
		  		}),
		  		timeout : 30000,
		  		success : function(json) 
		  		{
					result = json.msg;	
					getErrorMsg();
		  		},
				error : function() 
				{
		  			result ='操作超时，请稍后再试！！';	
				}
		  	});
			return result;	
			
	}
	
	// 是否是一卡双号的虚号码
	 function isVirtualNum(phoneNum,cityCode,type){
			var path = "/PayAjaxServlet.do";
			var result = "";
			jQuery.ajax( {
		  		url : path,
		  		type : 'POST',
		  		dataType : 'json',
		  		async : false,
		  		data : ( {
		  			method:'isVirtualNum',
		  			phoneNum:phoneNum,
		  			cityCode:cityCode,
		  			type:type
		  		}),
		  		timeout : 30000,
		  		success : function(json) 
		  		{
					result = json.msg;
		  		},
				error : function() 
				{
		  			result ='操作超时，请稍后再试！！';
				}
		  	});
 		 return result;
	 }
	 
	// 取手机归属地
	 function findCity(phoneNum){
		 var path = "/PayAjaxServlet.do";
			var result = "";
			jQuery.ajax( {
		  		url : path,
		  		type : 'POST',
		  		dataType : 'json',
		  		async : false,
		  		data : ( {
		  			method:'findCity',
		  			phoneNum:phoneNum
		  		}),
		  		timeout : 30000,
		  		success : function(json) 
		  		{
				 	result = json.msg;
					getErrorMsg();
		  		},
				error : function() 
				{
			   		alert('操作超时，请稍后再试！！');
				}
		  	});
  		 return result;
	 }
	
	// 登录
		function showLogin(event) 
		{
			window.location.href="http://www.189.cn/dqmh/ssoLink.do?method=linkTo&platNo=10014&toStUrl=http://fj.189.cn/service/account/";return;
			var loginform = jQuery('#loginFrame').html();		
			jQuery('#loginFrame').data("html",loginform);		
			jQuery('#loginFrame').html("");		
			jQuery.layerSetup({ 
							 id:"loginDiv",
							 width:371, 
							 height:283,
							 content:'<iframe src="/login/common/v2011/loginTwo.jsp" allowtransparency="true" id="" scrolling="no" frameborder="0" width="100%" height="243px">', 
							 isbg:true,
							 opacity:0.1,
							 templete:'<div style="width:379px;*width:379px; height:356px;background:url(/images/v2011/common/login_bg.jpg)  no-repeat;"><div align="right" style="padding-top:5px;padding-right:10px;"><a href="#" class="layerclose"><img src="/images/v2011/common/close_ico.jpg" border="0"/></a></div><div style="color:#FF0000;margin-top:30px;margin-left:135px;margin-right:25px;font-size:12px;">尊敬的客户，您好，<br>您所使用的功能需要登录后才能使用!</div><div class="showwint_mini_content" style="margin-top:35px;"><div class="showwint_mini_content_content" id="@contentid@"></div></div></div>'
							}); 
			jQuery.layershow(); 
			jQuery.layerclose=layerClose;
			jQuery(window).scrollTop(0);
			jQuery(document.body).get(0).scroll="yes";
		 }
		 
		 // 关闭层
		function layerClose(__id){
			jQuery("#"+__id+"_background").remove(); 
			jQuery("#"+__id).remove();
			jQuery('#loginFrame').html(jQuery('#loginFrame').data("html"));
			jQuery(window).scrollTop=function(){return true;}
			jQuery(document.body).get(0).scroll="yes";
			jQuery('#diagram').click();
//			var diagram=document.getElementById('diagram');
//			if(diagram!=null&&diagram!=undefined) diagram.onclick();
		}
		

		// 翼支付网上银行确认页
		function showYizhifuConfirm(event) 
		{
//			alert("showYizhifuConfirm");
			// 从子框架中获取元素值
			var prarams = "type=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#type").val(); 
			prarams += "&connectType="; 
			prarams += jQuery(window.frames["chargeIframe"].document).find("#connectType").val(); 
			prarams += "&ORDERTYPE=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#ORDERTYPE").val(); 
			prarams += "&CITYCODE=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#PAYCITYCODE").val();
			prarams += "&PHONENUM=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#PHONENUM").val();
			prarams += "&bestCash=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#bestCash").val();
			prarams += "&kd_type=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#kd_type").val();
			prarams += "&bankid=";
			prarams += jQuery(window.frames["chargeIframe"].document).find('input[name="bankid"]:checked').val();
			prarams +="&changePayBank=";
			prarams +=jQuery(window.frames["chargeIframe"].document).find('input[name="changePayBank"]:checked').val();
			prarams += "&random=";
			prarams += Math.random();
			
			var srcUrl = "<iframe src=\"/service/pay/bestpay/showSelectInfoNew.jsp?"+prarams+"\" allowtransparency=\"true\" id=\"yiDiv\" scrolling=\"no\" frameborder=\"0\" width=\"100%\" height=\"420px\">";
			var yizhifuform = jQuery('#yizhifuFrame').html();		
			jQuery('#yizhifuFrame').data("html",yizhifuform);		
			jQuery('#yizhifuFrame').html("");		
			jQuery.layerSetup({ 
				 id:"yizhifuDiv",
				 width:630, 
				 height:500,
				 content:srcUrl, 
				 isbg:true,
				 opacity:0.1,
				 templete:'<div style="width: 630px;*width:630px; height:500px;" id="@contentid@"></div>'
				}); 
			jQuery.layershow(); 
			jQuery.layerclose=layerCloseYizhifu;
			jQuery(window).scrollTop(0);
			jQuery(document.body).get(0).scroll="yes";
		 }
		 
		 // 关闭层
		function layerCloseYizhifu(__id){
			// ie6,360,ie8等关闭弹出框后,无法聚焦,定位到第一个文本框
			jQuery(window.top.frames["chargeIframe"].document).find("#PHONENUM")[0].focus();
			jQuery("#"+__id+"_background").remove(); 
			jQuery("#"+__id).remove();
			jQuery('#yizhifuFrame').html(jQuery('#yizhifuFrame').data("html"));
			jQuery(window).scrollTop=function(){return true;};
			jQuery(document.body).get(0).scroll="yes";
		}
		
		// 代理商充值确认页
		function showDailishangConfirm(event) 
		{
			// 从子框架中获取元素值
			var prarams = "type=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#type").val(); 
			prarams += "&connectType="; 
			prarams += jQuery(window.frames["chargeIframe"].document).find("#connectType").val(); 
			prarams += "&ORDERTYPE=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#ORDERTYPE").val(); 
			prarams += "&CITYCODE=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#PAYCITYCODE").val();
			prarams += "&PHONENUM=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#PHONENUM").val();
			prarams += "&bestCash=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#bestCash").val();
			prarams += "&bankid=";
			prarams += jQuery(window.frames["chargeIframe"].document).find('input[name="bankid"]:checked').val();
			prarams += "&PRODUCTID=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#PRODUCTID").val();
			prarams += "&agentpaytype=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#agentpaytype").val();
			prarams += "&random=";
			prarams += Math.random();
			var srcUrl = "<iframe id=\"agentdiv\" src=\"/service/pay/bestpay/agentshowSelectInfoNew.jsp?"+prarams+"\" allowtransparency=\"true\" id=\"\" scrolling=\"no\" frameborder=\"0\" width=\"100%\" height=\"243px\">";
			var dailishangform = jQuery('#dailishangFrame').html();		
			jQuery('#dailishangFrame').data("html",dailishangform);		
			jQuery('#dailishangFrame').html("");		
			jQuery.layerSetup({ 
							 id:"dailishangDiv",
							 width:480, 
							 height:328,
							 content:srcUrl, 
							 isbg:true,
							 opacity:0.1,
							 templete:'<div style="width: 480px;*width:480px; height:328px;*height:333px;" id="@contentid@"></div>'
							}); 
			jQuery.layershow(); 
			jQuery.layerclose=layerCloseDailishang;
			jQuery(window).scrollTop(0);
			jQuery(document.body).get(0).scroll="yes";
		 }
		 
		 // 关闭层
		function layerCloseDailishang(__id){
			// ie6,360,ie8等关闭弹出框后,无法聚焦,定位到第一个文本框
			jQuery(window.top.frames["chargeIframe"].document).find("#PHONENUM")[0].focus();
			jQuery("#"+__id+"_background").remove(); 
			jQuery("#"+__id).remove();
			jQuery('#dailishangFrame').html(jQuery('#dailishangFrame').data("html"));
			jQuery(window).scrollTop=function(){return true;};
			jQuery(document.body).get(0).scroll="yes";
		}
	 
		// 11888批量充值确认页面
		function show11888PayPLConfirm(event) 
		{
			// 从子框架中获取元素值
			var prarams = "type=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#type").val(); 
			prarams += "&connectType="; 
			prarams += jQuery(window.frames["chargeIframe"].document).find("#connectType").val(); 
			prarams += "&ORDERTYPE=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#ORDERTYPE").val(); 
			prarams += "&CITYCODE=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#PAYCITYCODE").val();
			prarams += "&PHONENUM=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#PHONENUM").val();
			
			var mimas = jQuery(window.frames["chargeIframe"].document).find("input[name='MIMA_PL']");
	        for(var i=0;i<mimas.length;i++){
	        	if(mimas[i].value!=''){
	        		prarams += "&MIMA_PL="+encodeURI(encodeURIComponent(mimas[i].value));
	        	}
	        }
	        var mimas2 = jQuery(window.frames["chargeIframe"].document).find("input[name='MIMA']");
	        for(var i=0;i<mimas2.length;i++){
	        	if(mimas2[i].value!='' && mimas2[i].value!='请输入18位卡密码'){
	        		prarams += "&MIMA="+encodeURI(encodeURIComponent(mimas2[i].value));
	        	}
	        }			
			prarams += "&INVALIDATE_T_PL=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#INVALIDATE_T_PL").val();
			// alert(prarams);
			prarams += "&random=";
			prarams += Math.random();
			prarams += "&keynum=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#phoners").val();
			var srcUrl = "<iframe src=\"/service/pay/11888pay/pay_11888_pl_qr.jsp?"+prarams+"\" allowtransparency=\"true\" id=\"118_id\" scrolling=\"no\" frameborder=\"0\" width=\"100%\" height=\"364px\">";
			var pay11888plform = jQuery('#pay11888plFrame').html();		
			jQuery('#pay11888plFrame').data("html",pay11888plform);		
			jQuery('#pay11888plFrame').html("");		
			jQuery.layerSetup({ 
							 id:"pay11888PLDiv",
							 width:555, 
							 height:355,
							 content:srcUrl, 
							 isbg:true,
							 opacity:0.1,
							 templete:'<div style="width: 550px;*width:555px; height:355px;" id="@contentid@"></div>'
							}); 
			jQuery.layershow(); 
			jQuery.layerclose=layerClose11888PayPL;
			jQuery(window).scrollTop(0);
			jQuery(document.body).get(0).scroll="yes";
		 }
		 
		 // 关闭层
		function layerClose11888PayPL(__id){
			jQuery(window.top.frames["chargeIframe"].document).find("#PHONENUM")[0].focus();
			jQuery("#"+__id+"_background").remove(); 
			jQuery("#"+__id).remove();
			jQuery('#pay11888plFrame').html(jQuery('#pay11888plFrame').data("html"));
			jQuery(window).scrollTop=function(){return true;};
			jQuery(document.body).get(0).scroll="yes";
		}
		
		// 11888分拆充值确认页面
		function show11888PayFCConfirm(event) 
		{
			// 从子框架中获取元素值
			var prarams = "MIMA2=";
			prarams += encodeURI(encodeURIComponent(jQuery(window.frames["chargeIframe"].document).find("#MIMA2").val())); 
			prarams += "&MIMA_FC="; 
			prarams += encodeURI(encodeURIComponent(jQuery(window.frames["chargeIframe"].document).find("#MIMA_FC").val())); 
			var rowNum=jQuery(window.frames["chargeIframe"].document).find("#fc_table").find("tr").length;
	        for(var i=0;i<rowNum-1;i++){
	        	var orderType = jQuery(window.frames["chargeIframe"].document).find("#ORDERTYPE_FC_"+(i+1)).val();
	        	if(orderType!=''){
	        		prarams += "&DTYPE="+orderType;
	        	}
	        	var cityCode = jQuery(window.frames["chargeIframe"].document).find("#CITYCODE_FC_"+(i+1)).val();
	        	if(cityCode!=''){
	        		prarams += "&DCITYCODE="+cityCode;
	        	}
	        	var number = jQuery(window.frames["chargeIframe"].document).find("#PRODUCTNUMBER_FC_"+(i+1)).val();
	        	if(number!=''){
	        		prarams += "&PHONE="+number;
	        	}
	        	var payAmout = jQuery(window.frames["chargeIframe"].document).find("#CASH_FC_"+(i+1)).val();
	        	if(payAmout!=''){
	        		prarams += "&PAYAMOUNT="+payAmout;
	        	}
	        }
			prarams += "&INVALIDATE_T_FC=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#INVALIDATE_T_FC").val();
			prarams += "&random=";
			prarams += Math.random();
			prarams += "&keynum=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#phoners").val();
			var srcUrl = "<iframe src=\"/service/pay/11888pay/pay_11888_fc_qr.jsp?"+prarams+"\" allowtransparency=\"true\" id=\"\" scrolling=\"no\" frameborder=\"0\" width=\"100%\" height=\"340px\">";
			var pay11888fcform = jQuery('#pay11888fcFrame').html();		
			jQuery('#pay11888fcFrame').data("html",pay11888fcform);		
			jQuery('#pay11888fcFrame').html("");		
			jQuery.layerSetup({ 
							 id:"pay11888FCDiv",
							 width:600, 
							 height:355,
							 content:srcUrl, 
							 isbg:true,
							 opacity:0.1,
							 templete:'<div style="width: 600px;*width:600px; height:355px;" id="@contentid@"></div>'
							}); 
			jQuery.layershow(); 
			jQuery.layerclose=layerClose11888PayFC;
			jQuery(window).scrollTop(0);
			jQuery(document.body).get(0).scroll="yes";
		 }
		 
		 // 关闭层
		function layerClose11888PayFC(__id){
			jQuery(window.top.frames["chargeIframe"].document).find("#PHONENUM")[0].focus();
			jQuery("#"+__id+"_background").remove(); 
			jQuery("#"+__id).remove();
			jQuery('#pay11888fcFrame').html(jQuery('#pay11888fcFrame').data("html"));
			jQuery(window).scrollTop=function(){return true;};
			jQuery(document.body).get(0).scroll="yes";
		}
	
		// 11888分拆充值确认页面
		function show20198PayConfirm(event) 
		{
			// 从子框架中获取元素值
			var prarams = "type=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#type").val(); 
			prarams += "&connectType="; 
			prarams += jQuery(window.frames["chargeIframe"].document).find("#connectType").val(); 
			prarams += "&ORDERTYPE=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#ORDERTYPE").val(); 
			prarams += "&CITYCODE=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#PAYCITYCODE").val();
			prarams += "&PHONENUM=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#PHONENUM").val();
			
			prarams += "&kahao_20198=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#kahao_20198").val(); 
			prarams += "&kahao_20198_en=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#kahao_20198_en").val(); 
			prarams += "&mima_20198="; 
			prarams += jQuery(window.frames["chargeIframe"].document).find("#mima_20198").val();
			prarams += "&mima_20198_en="; 
			prarams += jQuery(window.frames["chargeIframe"].document).find("#mima_20198_en").val();	
			prarams += "&cash_20198="; 
			prarams += jQuery(window.frames["chargeIframe"].document).find("#cash_20198").val();	
			
			prarams += "&INVALIDATE_T_20198=";
			prarams += jQuery(window.frames["chargeIframe"].document).find("#INVALIDATE_T_20198").val();
			
			prarams += "&random=";
			prarams += Math.random();
			var srcUrl = "<iframe src=\"/service/pay/20198pay/pay_20198_qr.jsp?"+prarams+"\" allowtransparency=\"true\" id=\"\" scrolling=\"no\" frameborder=\"0\" width=\"100%\" height=\"243px\">";
			var pay20198form = jQuery('#pay20198Frame').html();		
			jQuery('#pay20198Frame').data("html",pay20198form);		
			jQuery('#pay20198Frame').html("");		
			jQuery.layerSetup({ 
							 id:"pay20198Div",
							 width:600, 
							 height:355,
							 content:srcUrl, 
							 isbg:true,
							 opacity:0.1,
							 templete:'<div style="width: 600px;*width:600px; height:355px;" id="@contentid@"></div>'
							}); 
			jQuery.layershow(); 
			jQuery.layerclose=layerClose20198Pay;
			jQuery(window).scrollTop(0);
			jQuery(document.body).get(0).scroll="yes";
		 }
		 
		 // 关闭层
		function layerClose20198Pay(__id){
			jQuery(window.top.frames["chargeIframe"].document).find("#PHONENUM")[0].focus();
			jQuery("#"+__id+"_background").remove(); 
			jQuery("#"+__id).remove();
			jQuery('#pay20198Frame').html(jQuery('#pay20198Frame').data("html"));
			jQuery(window).scrollTop=function(){return true;};
			jQuery(document.body).get(0).scroll="yes";
		}
		
	    // 展现支付流程
		function showChargeProcedure(){
			 jQuery("#showChargeProcedureDiv",parent.document).html("<iframe name=\"chargeProcedureIframe\" id=\"chargeProcedureIframe\" src=\"/service/pay/flash/chargeProcedurePage.html\" frameBorder=0 scrolling=\"no\" onload=\"Javascript:SetWinHeight(this)\" height=\"1000px\" width=\"100%\"></iframe>");
			 var height = jQuery(parent.document).height();
			 jQuery("#showChargeProcedureDiv_W",parent.document).css("height",height);
			 jQuery("#showChargeProcedureDiv_W",parent.document).css("display","block");
		}
	 
		

	/** ******************************************************************************** */
		// 选项卡切换
		 function changeUrl(url){
			 jQuery("#RECEIVEDIV").css("display","none");
			 	var pageLocate = jQuery("#includePage");
			 	pageLocate.css("display","");
			 	jQuery("#NNN").css("display","");
			 	jQuery("#ONE").css("display","");
			  	 	var paycardtype = jQuery("#paycardtype").val();
					setSessionParam(url);
			  	 	if(url == "1"){
			  	 		pageLocate.html('<iframe name="chargeIframe" id="chargeIframe" src="/service/pay/newPay.jsp?paycardtype='+paycardtype+'" frameBorder=0 scrolling="no" onload="Javascript:SetWinHeight(this)"  height="800px" width="1200px"></iframe>');
			  	 	}else if(url == "2"){
			  	 		jQuery("#NNN").addClass("service_box");
			  	 		pageLocate.html('<iframe name="chargeIframe" id="chargeIframe" src="/service/pay/query/payAllQuery.jsp?" frameBorder=0 scrolling="no" onload="Javascript:SetWinHeight(this)" height="300px" width="996px"></iframe>');
			  	 	}else if(url == "3"){
			  	 		jQuery("#NNN").addClass("service_box");
			  	 		pageLocate.html('<iframe name="chargeIframe" id="chargeIframe"  src="/service/pay/query/card_history_query_index.jsp" frameBorder=0 scrolling="no" onload="Javascript:SetWinHeight(this)" height="550px" width="996px"></iframe>');
			  	 	}else if(url == "4"){
			  	 		jQuery("#NNN").addClass("service_box");
			  	 		pageLocate.html('<iframe name="chargeIframe" id="chargeIframe" src="/service/pay/sellcalorie/sell_calorie_query.jsp" frameBorder=0 scrolling="no" onload="Javascript:SetWinHeight(this)" height="300px" width="996px"></iframe>');
			  	 	}else if(url == "5"){
			  	 		jQuery("#NNN").addClass("service_box");
			  	 		pageLocate.html('<iframe name="chargeIframe" id="chargeIframe" src="/service/pay/sellcalorie/sell_calorie_subscribe.jsp" frameBorder=0 scrolling="no" onload="Javascript:SetWinHeight(this)" height="300px" width="996px"></iframe>');
			  	 	}else if(url == "6"){
			  	 		jQuery("#NNN").addClass("service_box");
			  	 		pageLocate.html('<iframe name="chargeIframe" id="chargeIframe" src="/service/pay/sellcalorie/sell_calorie_accountbalance.jsp" frameBorder=0 scrolling="no" onload="Javascript:SetWinHeight(this)" height="300px" width="996px"></iframe>');
			  	 	}else if(url == "7"){
			  	 		pageLocate.html('<iframe name="chargeIframe" id="chargeIframe" src="/service/pay/agent_bestpayNew.jsp"  frameBorder=0 scrolling="no" onload="Javascript:SetWinHeight(this)" height="1030px" width="1200px"></iframe>');
			  	 	}else if(url == "8"){
			  	 		jQuery("#NNN").addClass("service_box");
			  	 		top.location = '/service/transaction/phone/year.jsp';
			  	 	}
			  	 	jQuery("#ONE").css("display","none");
		  }
		  
		  // 高度自适应
		  function SetWinHeight(obj){
			  var win = obj;
			  var browserName=navigator.userAgent.toLowerCase();
			  var browserVer=(browserName.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1];
			  var mainheight = win.height;
			  //alert(browserName);
			  //alert(browserVer);
			  if(/firefox/i.test(browserName)){   //Firefox  
				  //火狐什么都不做
			  }else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {  //Chrome
				  //alert('Chrome');
				  if(win.contentWindow.document.documentElement && win.contentWindow.document.documentElement.scrollHeight){ 
						mainheight = win.contentWindow.document.documentElement.scrollHeight+30;
				  }
				  jQuery(obj).height(mainheight);
			  }else if( browserVer == 11){
				  //alert(2);
				  if (win.contentDocument && win.contentDocument.body && win.contentDocument.body.offsetHeight){ 
						mainheight = win.contentDocument.body.offsetHeight;
				  }else if(win.Document && win.Document.body && win.Document.body.scrollHeight){ 
						mainheight = win.Document.body.scrollHeight;
				  }else if(win.contentWindow.document.documentElement && win.contentWindow.document.documentElement.scrollHeight){ 
						mainheight = win.contentWindow.document.documentElement.scrollHeight;
				  }
				  jQuery(obj).height(mainheight);
			  }else{
				  //alert(3);
				  if (win.contentDocument && win.contentDocument.body && win.contentDocument.body.offsetHeight){ 
						mainheight = win.contentDocument.body.offsetHeight+30 ;
						//alert("1: "+mainheight);
				  }else if(win.Document && win.Document.body && win.Document.body.scrollHeight){ 
						mainheight = win.Document.body.scrollHeight+30 ;
						//alert("2: "+mainheight);
				  }else if(win.contentWindow.document.documentElement && win.contentWindow.document.documentElement.scrollHeight){ 
						mainheight = win.contentWindow.document.documentElement.scrollHeight+30;
						//alert("3: "+mainheight);
				  }
				  jQuery(obj).height(mainheight);
			  }
              
			}  
		  
		   // 将页面参数设置在session中
		 function setSessionParam(url){
			  if(url!=''){
				var uu=url;
				if(url.indexOf(".")!=-1){
					uu=url.substring(0,url.lastIndexOf("."));
				}
				var path = "/PayAjaxServlet.do";
				jQuery.ajax( {
			  		url : path,
			  		type : 'POST',
			  		dataType : 'json',
			  		cache : false,
			  		async : true,
			  		data : ( {
			  			method:'setUrlParamSession',
			  			URLPARAM:uu
			  		}),
			  		timeout : 30000 
			  	});
				 
			  }
		 }	
		
	 // 银行图片BORDER颜色切换
	 function changeImgBorderColorOn(bankcode){
		 jQuery("#bandPic_"+bankcode).css("border-color","#ff8200");
	 } 
	 
	 function changeImgBorderColorOut(){
		 changeImgColor();
	 } 
	 
	 function changeImgColor(){
		 var bankCode =  jQuery("input[name=bankid]:checked").val();
		 // 无鼠标效果的BORDER
		 jQuery(".bankPicSpan img").css("border-color","#cacaca");
		 // 选中的银行BORDER
		 jQuery("#bandPic_"+bankCode).css("border-color","#ff8200");
	 }
	 
	 // 点出银行图片，关联选中对应图片的单选框
	 function selectOnBandId(bankcode){
		 jQuery("input[name=bankid]").each(function(){
			 jQuery(this).removeAttr("checked");
			 var bandidValue = jQuery(this).val();
			 if(bandidValue == bankcode){
				 jQuery(this).attr("checked","checked");
			 }
		 });
		 changeImgColor();
		 checkFormEmpty();
		 
	 }
	
	/** ********************************************新增JS************************************* */
	/**
	 * 金额校验
	 * 
	 * @param amount
	 *            充值金额
	 * @param mincash
	 *            允许最小充值金额
	 * @param maxcash
	 *            允许最大充值金额
	 * @returnParame 0,填的充值金额不对;1,不能大于最大值;2,不能小于最小值;3,金额校验通过
	 */
	function commonValidateMoney(amount,mincash,maxcash){
		if(amount.indexOf(".") != -1){
			if (amount.replace(/\d+\.\d+/g,'')!=""){
				// alert("您填的充值金额格式不对！！！");
				return "0";
			}			
			var str = amount.split(".");			
			// 判断小数点后面的长度
			if(str[1].length > 2){
				// alert("您填的充值金额格式不对！！！");
				return "0";
			}
		}
		else{
			if (amount.replace(/\d+/g,'')!=""){
				// alert("您填的充值金额格式不对！！！");
				return "0";
			}			
		}
		if(amount*100 >maxcash*100){
				// alert("您填的充值金额不能大于"+maxcash+"元！！！");
				return "1";
		}
		if(amount*100 <mincash*100){
			// alert("您填的充值金额不能小于"+mincash+"元！！！");
			return "2";
		}
		return "3";
	}	
	

	// 充值缴费页面初始化
	function  initNewpage(){
		
			// 充值号码错误信息样式展现
			PhonenumStyle(0);
			
			// 号码回填
			var phonenum = jQuery("#PHONENUM").val();
			var paynum = jQuery("#PAYNUM").val();
			var ordertype = jQuery("#ORDERTYPE").val();
			var cityCode =  jQuery("#PAYCITYCODE").val();
			
			if(ordertype == "3" || ordertype == "6"){
				jQuery("#isKuanDai").val("true");
				// 显示广告语
				jQuery("#ORDERTYPE_LI").removeClass("li");
				jQuery("#ORDERTYPE_LI").removeClass("li1");
				jQuery("#ORDERTYPE_LI").addClass("li1");
				jQuery("#kuandaiBanner").css("display","inline-block");
			}else{
				jQuery("#isKuanDai").val("false");
				// 隐藏广告语
				jQuery("#ORDERTYPE_LI").removeClass("li");
				jQuery("#ORDERTYPE_LI").removeClass("li1");
				jQuery("#ORDERTYPE_LI").addClass("li");
				jQuery("#kuandaiBanner").css("display","none");
			}
			
			// 初始化号码长度
			SevNbrNew_YK(ordertype);
			if((phonenum != null && phonenum != "" ) || (paynum != null && paynum != "") ){
				if(phonenum != null || phonenum != ""){
					comfirmPhonenum(phonenum,ordertype,cityCode);
				}else if(paynum != null && paynum != ""){
					comfirmPhonenum(paynum,ordertype,cityCode);
				}
			}
			jQuery("#PHONENUM").unbind("keyup");
			jQuery("#PHONENUM").bind("keyup",function(event){
				var phonenum = jQuery("#PHONENUM").val();
				var ordertype = jQuery("#ORDERTYPE").val();
				var cityCode1 = jQuery("#PAYCITYCODE").val();
				comfirmPhonenum(phonenum,ordertype,cityCode1);
				
				// 号码空错误信息提示
				if(phonenum == null || phonenum == ""){
					jQuery("#PHONENUM_PROMPT_W").css("display","block");
					jQuery("#PHONENUM_PROMPT").html("请输入充值号码");
					// 充值号码错误信息样式展现
					PhonenumStyle(1);
				}else{
					jQuery("#PHONENUM_PROMPT_W").css("display","none");
					// 充值号码错误信息样式展现
					PhonenumStyle(0);
				}
				// 输入号码时余额结果不展现
				jQuery("#yue").html("");
				
				// 校验表单是不空,点亮[确认无误,下一步]
				checkFormEmpty();
			});
	}
	
	// 确认号码显示
	function comfirmPhonenum(phonenum,ordertype,cityCode){
		if(phonenum != null && phonenum != ""){
			jQuery("#numberConfirmation").html("");
			var cityName = " ("+getCityNameByCitycode(cityCode)+") ";
			var tempStr ="";
			if(ordertype == "50"  || ordertype == "10"){ // 50为手机、10为翼支付账户
				// 按3位+空格+每4位间一空格
				tempStr += phonenum.replace(/\s/g,'').replace(/(\w{3})(?=\w)/,"$1 ").replace(/(\w{4})(?=\w)/g,"$1 ");
				jQuery("#numberConfirmation").html(tempStr);
			}else if(ordertype == "1" || ordertype == "11" || ordertype == "2" || ordertype == "-1"){ // 1为固话、11为公话、2为小灵通、-1为预开通、
				// 按每4位间一空格
				tempStr += phonenum.replace(/\s/g,'').replace(/(\w{4})(?=\d)/,"$1 ").replace(/(\w{4})(?=\w)/g,"$1 ");
				tempStr += cityName;
				jQuery("#numberConfirmation").html(tempStr);
			}else if(ordertype == "3" || ordertype == "6"){ // 3为天翼宽带ADSL、6为天翼宽带LAN
				// 每3位一空格，@后不分割
				var atIndex = phonenum.indexOf("@");
				if(atIndex != -1){
					var atBefore = phonenum.substring(0,atIndex);
					var atAfter =  phonenum.substring(atIndex,phonenum.length);
					tempStr += atBefore.replace(/\s/g,'').replace(/(\w{3})(?=\w)/,"$1 ").replace(/(\w{3})(?=\w)/g,"$1 ");
					tempStr += atAfter;
					tempStr += cityName;
					jQuery("#numberConfirmation").html(tempStr);
				}else{
					tempStr += phonenum.replace(/\s/g,'').replace(/(\w{3})(?=\w)/,"$1 ").replace(/(\w{3})(?=\w)/g,"$1 ");
					tempStr += cityName;
					jQuery("#numberConfirmation").html(tempStr);
				}
			}
		}else{
			jQuery("#numberConfirmation").html("");
		}
	}
	
	// 根据cityCode获取cityName
	function getCityNameByCitycode(citycode){
		var curCityName = "";
		if(citycode=="0590") curCityName="福建";
		else if(citycode=="0591") curCityName="福州";
		else if(citycode=="0592") curCityName="厦门";
		else if(citycode=="0593") curCityName="宁德";
		else if(citycode=="0594") curCityName="莆田";
		else if(citycode=="0595") curCityName="泉州";
		else if(citycode=="0596") curCityName="漳州";
		else if(citycode=="0597") curCityName="龙岩";
		else if(citycode=="0598") curCityName="三明";
		else if(citycode=="0599") curCityName="南平";
		else curCityName="福建";
		return curCityName;
	}
	
	
	// 显示根据IP获取宽带账号层
	function showGetLanAndAdsl(){
		var ordertype = jQuery("#ORDERTYPE").val();
		if(ordertype == "3" || ordertype == "6"){
			var IpAddress = jQuery("#IPADDRESS").val();
	 		jQuery('#newDivLanADSL').html("<img src='/images/icon/sj_1.gif' width='4' height='7' hspace='4' border='0'/><a id=\"getLanAndAdslA\" href=\"javascript:void(0);\" onclick=\"getLanAndAdsl('"+IpAddress+"')\" style=\"font-style: normal;color:#2782D5;text-decoration: none;font-size:12px;line-height:16px;\" title=\"点击获取当前线路的账号\">&nbsp;点击获取当前线路的账号</a>");
	 		jQuery('#newDivLanADSL').css("display","block"); 
		}
			
	}
	var delay='0';  //控制是否显示 newDivLanADSL
	// 获取宽带 账号
	function getLanAndAdsl(ip){
		 delay='0';
		// 充值号码错误信息样式展现
		PhonenumStyle(0);
		jQuery.ajax({
			url: "http://110.90.113.8:8010/netlogin/netServlet.do?returnUrl=query",
			type : "get", 
			cache: false,
			async:false,  
			dataType : "jsonp",  
			jsonp: "callbackparam",//服务端用于接收callback调用的function名的参数  
			jsonpCallback:"success_jsonpCallback",//callback的function名称  
			error: function(){
				alert("获取宽带账号失败，请重新尝试！");
			},
			success : function(json){  
				jQuery('#newDivLanADSL').html("<div style=\"float:left;\"><img src='/images/icon/sj_1.gif' width='4' height='7' hspace='4' border='0'/></div><div style=\"float:left;width:95px;font-style: normal;color:#2782D5;text-decoration: none;font-size:12px;line-height:16px;\">正在获取...</div>");
				jQuery.ajax( {
			  		url : "/PayAjaxServlet.do",
			  		type : 'POST',
			  		dataType : 'json',
			  		async:false,  
			  		data : ( {
			  			method:'getLanAndAdslByIp',
			  			key:json[0].key 
			  		}),
			  		timeout : 30000,
			  		success : function(data) 
			  		{
					 if(data.result=='' || data.result==null){
				  			alert("获取宽带账号失败，请重新尝试");
				  			return;
				  		}
						// 宽带账号填入框中
			    		jQuery("#PHONENUM").val(data.result);
			    		var ordertype = jQuery("#ORDERTYPE").val();
			    		var cityCode = jQuery("#PAYCITYCODE").val();
			    		comfirmPhonenum(data.result,ordertype,cityCode);
			  		},
					error : function() 
					{
				   		alert('操作超时，请稍后再试！！');
					}
			  	});	
		 
			}
		});
		jQuery('#newDivLanADSL').css('display', 'none');
	}

	function hideGetWay(event){
		 delay='1';
		    setTimeout(function() {
				if(delay=='1'){
					jQuery("#newDivLanADSL").hide();
					delay='0';
				}
		    }, 200);
		// 事件判断
//		var target;
//		var activeid;
//		var sid;
//		var isie = (navigator.appName =="Microsoft Internet Explorer");
//	    var isFirefox =(navigator.appName=="Netscape");
//	    if (isie)
//	    {
//	     	target=document.activeElement;
//	     	sid='getLanAndAdslA';	
//	     	activeid=target.id;
//			if(activeid!=null&&activeid!=sid){
//				var newDiv = jQuery("#newDivLanADSL");
//				if(newDiv){ 
//					jQuery("#newDivLanADSL").hide();
//				}
//			}
//	    }
//	    else if(isFirefox)
//	    { 
//	    	target = event.explicitOriginalTarget;
//	     	sid='getLanAndAdslA';
//	     	activeid=target.id;
//			if(activeid!=null&&activeid!=sid){
//				var newDiv = jQuery("#newDivLanADSL");
//				if(newDiv){ 
//					jQuery("#newDivLanADSL").hide();
//				}
//			}
//			var tex = target.textContent;
//			if(tex==undefined ||tex!="点击获取当前宽带帐号"){
//				var newDiv = jQuery("#newDivLanADSL");
//				if(newDiv){ 
//					jQuery("#newDivLanADSL").hide();
//				}
//			}
//	    }		
	}
	
	
	function toNext(event){
		if(event.keyCode == 13){
			event.keyCode = 9;
			return true;
		}
	}
	
	/**
	 * 切换显示缴费方式
	 * 
	 * @param id具体的层
	 * @param mid1需显示的层
	 * @param mid2需隐藏的层
	 */ 
	function changeRechargeMethod(id,mid1,mid2){
		jQuery("#"+id).find("#rechargeMethod"+mid1).show();
		jQuery("#"+id).find("#rechargeMethod"+mid2).hide();
	}
	
	// 确认无误,下一步按钮变灰且不可用
	function changeButtonGray(){
		var tempStr ="";
		// 按钮是否存在
		if(jQuery("#button1").length == 0){
			tempStr = "<input name=\"button1\" type=\"button\" class=\"button1\" id=\"button1\" disabled=\"disabled\"/>";
			jQuery("#main_bot1_bot_w").html(tempStr);
		}else{
			/* 支付按钮还原成灰 */
			var conButton=jQuery("#button1"); 
			if(conButton.attr("disabled")==false){ 
				// 设置按钮为disabled
				conButton.attr("disabled","disabled"); 
			}
			jQuery("#button1").removeClass("button1"); 
			jQuery("#button1").removeClass("button3"); 
			jQuery("#button1").addClass("button1");
		}
	}
	
	// 确认无误,下一步按钮变亮且可用
	function changeButtonGreen(){
		var tempStr ="";
		// 按钮是否存在
		if(jQuery("#button1").length == 0){
			tempStr = "<input name=\"button1\" type=\"button\" class=\"button3\" id=\"button1\" />";
			jQuery("#main_bot1_bot").html(tempStr);
		}else{
			var conButton=jQuery("#button1"); 
			if(conButton.attr("disabled")==true || conButton.attr("disabled")=="disabled"){ 
				// 通过移除的方式将disable属性删除
				conButton.removeAttr("disabled"); 
			}
			jQuery("#button1").removeClass("button1");
			jQuery("#button1").removeClass("button3"); 
			jQuery("#button1").addClass("button3");
		}
		
	}
	
	/**
	 * 选中缴费方式改变样式
	 * 
	 * @param fid嵌套在父节点具体ID
	 * @param m当前选中的对象
	 */
	function changeRechargeSpan(fid,m){
			
		var tempStr ="";
		var j = 4; // 目前为4种支付方式:1,翼支付/网上银行;2,11888充值卡;3,20198充值卡;4,电子钱包;
		// 0表示未选中
		if(m == 0){
			// 选项卡不选中
			for(var i=1;i<=4;i++){
				jQuery("#"+fid).find("#rechargeSpan"+i).removeClass("main_bot1_b_a");
			}
			// 支付方式不展示
			for(var i=1;i<=4;i++){
				jQuery("#woaicss_con"+i).css("display","none");
			}
			
			// 按钮变灰
			changeButtonGray();
			
		}else{
			for(var i=1;i<=4;i++){
				jQuery("#"+fid).find("#rechargeSpan"+i).removeClass("main_bot1_b_a");
			}
			
			// 如果需要展现伸开的模式
			if(m >= 3){
				changeRechargeMethod(fid,2,1);
			}
			
			var objectid = jQuery("#"+fid).find("#rechargeSpan"+m).attr("id");
			
			
			if(objectid != "" && typeof(objectid) != "undefined"){
				jQuery("#"+fid).find("#rechargeSpan"+m).addClass("main_bot1_b_a");
				
				// 展现支付方式
				for(var i=1;i<=4;i++){
					jQuery("#woaicss_con"+i).css("display","none");
				}
				jQuery("#woaicss_con"+m).css("display","block");
				
				/*
				 * 修改按钮 var conButton=jQuery("#button1");
				 * if(conButton.attr("disabled")==true){ //通过移除的方式将disable属性删除
				 * conButton.removeAttr("disabled"); }
				 * jQuery("#button1").removeClass("button1");
				 * jQuery("#button1").removeClass("button3");
				 * jQuery("#button1").addClass("button3");
				 */
				// changeButtonGreen();
				
				//充值类型切换
				var ordertype=jQuery("#ORDERTYPE").val();
				if(ordertype=="50" || ordertype=="3"){
					jQuery("#wxzfid").show();
				}else{
					jQuery("#wxzfid").hide();
				}
				if(ordertype!="50"){
					jQuery("#isyzfdj").val("");
				}else{
					if(jQuery("#isyzfdj").val()==""){
						//initbankview();
					}
				}
				// 网上银行
				if(m == 1){
					tempStr = "<input name=\"button1\" type=\"button\" class=\"button1\" id=\"button1\" disabled=\"disabled\" onclick=\"bestFormSubmitNew();\"/>";
					jQuery("#main_bot1_bot_w").html(tempStr);
					// 支付流程按钮显示
					jQuery("#ChargeProcedureSpan").css("display","inline-block");
					//翼支付代缴新增20150209
					if(ordertype=="1"||ordertype=="3"||ordertype=="50"){
						showoldview(); //充值到话费
					}

				// 电子钱包
				}else if(m == 4){
			  	 	jQuery("#NNN4").css("display","block");
			  	 	jQuery("#ONE4").css("display","block");
			  	 	jQuery("#eMoneyPackage").html("<iframe name=\"eMoneyPackageIframe\" id=\"eMoneyPackageIframe\" src=\"wishpay/wishPay.jsp\" frameBorder=0 scrolling=\"no\" height=\"800px\" width=\"650px\"/></iframe>");
			  	 	// ie6下的BUG
					if(jQuery.browser.msie) {
						if(jQuery.browser.version == "6.0"){
							// 在ie6下IFRAME标签src会失效
							jQuery("#eMoneyPackageIframe").attr("src","wishpay/wishPay.jsp");
						}
					}
					jQuery("#main_bot1_bot_w").html("");
					jQuery("#ONE4").css("display","none");
					// 支付流程按钮隐藏
					jQuery("#ChargeProcedureSpan").css("display","none");
				}else if(m == 2){
					tempStr = "<input name=\"button1\" type=\"button\" class=\"button1\" id=\"button1\" disabled=\"disabled\" onclick=\"fun_submit_pl();\"/>";
					jQuery("#main_bot1_bot_w").html(tempStr);
					// 支付流程按钮显示
					jQuery("#ChargeProcedureSpan").css("display","inline-block");
				}else if(m == 3){
					tempStr = "<input name=\"button1\" type=\"button\" class=\"button1\" id=\"button1\" disabled=\"disabled\" onclick=\"fun_submit_20198();\"/>";
					jQuery("#main_bot1_bot_w").html(tempStr);
					// 支付流程按钮显示
					jQuery("#ChargeProcedureSpan").css("display","inline-block");
				}
				
				// 给全局变量赋值
				beforem = m;
				
			}else{
				
				// 支付方式不展示
				for(var i=1;i<=4;i++){
					jQuery("#woaicss_con"+i).css("display","none");
				}
				
				/* 支付按钮还原成灰 */
				changeButtonGreen();
				
				// 给全局变量赋值
				beforem = 0;
			}
			
		}
		
	}

	/**
	 * 地市切换
	 */
	function changeCity(cityCode){
		// 切换地市隐藏地市信息错误
		jQuery("#PAYCITYCODE_PROMPT_W").css("display","none");
		// 切换地市隐藏号码信息错误
		jQuery("#PHONENUM_PROMPT_W").css("display","none");
		// 切换地市隐藏余额查询
		jQuery("#yue").html("");

		// 充值号码错误信息样式展现
		PhonenumStyle(0);
		
		var cityCodeId = "#A_" + cityCode;
		jQuery("#showCity").find("a").removeClass("dq_1");
		jQuery("#showCity").find("a").addClass("dq_2");
		jQuery(cityCodeId).removeClass("dq_2");
		jQuery(cityCodeId).addClass("dq_1");		
		jQuery("#PAYCITYCODE").val(cityCode);
		// 确认号码地市修改
		var phonenum = jQuery("#PHONENUM").val();
		var ordertype = jQuery("#ORDERTYPE").val();
		var cityCode = jQuery("#PAYCITYCODE").val();
		if(phonenum != ""){
			comfirmPhonenum(phonenum,ordertype,cityCode);
		}
		// 地市变化,充值方式变化
		modifyType(cityCode,"citycode");
		
	}
	
	/*
	 * 展现产品类型下拉层
	 */
	function showHiddenOrdertypeDiv(){
		var flag = jQuery("#ordertypeOption").css("display");
		if(flag == "block"){
			jQuery("#ordertypeOption").css("display","none");
			jQuery(".selectbox").css("border","1px solid #FF6507");
		}else{
			jQuery("#ordertypeOption").css("display","block");
			jQuery(".selectbox").css("border-bottom","none");
			changeSelected();
		}
		
	}
	
	/**
	 * 展现产品类型下拉层
	 * 
	 * @param 1,显示;0,不显示
	 */
	function showOrdertypeDiv(t){
		if(t == "1"){
			jQuery("#ordertypeOption").css("display","block");
			jQuery(".selectbox").css("border-bottom","none");
		}else{
			jQuery("#ordertypeOption").css("display","none");
			jQuery(".selectbox").css("border","1px solid #FF6507");
			
		}
		// 解决ie6 下 层被selected遮盖
		if(jQuery.browser.msie) {
			if(jQuery.browser.version == "6.0"){
			// (原理，建立一个同高同宽的 iframe 标签插入到 div 中去)
			jQuery("#ordertypeOption").bgiframe();
			}
		} 
	}
	
	
	/**
	 * 公共方法产品类型样式切换
	 */
	function changeSelected(){
		jQuery(".div1").find("a").removeClass("spdq_a");
		jQuery(".div2").find("a").removeClass("spdq_a");
		jQuery(".div3").find("a").removeClass("spdq_a");
		jQuery(".div4").find("a").removeClass("spdq_a");
		
		jQuery(".div1").find("div").css("color","#000000");
		jQuery(".div2").find("div").css("color","#000000");
		jQuery(".div3").find("div").css("color","#000000");
		jQuery(".div4").find("div").css("color","#000000");
		var ordertype = jQuery("#ORDERTYPE").val();
		
		jQuery("#option_"+ordertype).find("a").addClass("spdq_a");
		
		jQuery("#option_"+ordertype).css("color","#ffffff");
		// 类型回填
		var tempOrderType = "";
		if(ordertype == "1"){
			tempOrderType = "固话";
		}else if(ordertype == "2"){
			tempOrderType = "小灵通";
		}else if(ordertype == "3"){
			tempOrderType = "宽带";
		}else if(ordertype == "6"){
			tempOrderType = "宽带";
		}else if(ordertype == "10"){
			tempOrderType = "翼支付账户";
		}else if(ordertype == "11"){
			tempOrderType = "公话";
		}else if(ordertype == "50"){
			tempOrderType = "手机";
		}else if(ordertype == "-1"){
			tempOrderType = "预开通";
		}
		jQuery("#ordertypeInput").html(tempOrderType);
	}
	
	/** 展现号码下拉层* */
	function showHiddenPhoneDiv(){
		var flag = jQuery(".phoneselectOption").css("display");
		if(flag == "block"){
			jQuery(".phoneselectOption").css("display","none");
			jQuery(".phoneselectOption").css('border-bottom-color','#aaaaaa').css('border-left-color','#aaaaaa').css('border-right-color','#aaaaaa').css('border-top-color','#aaaaaa');
		}else{
			jQuery(".phoneselectOption").css("display","block");
			jQuery(".phoneselectOption").css('border-bottom-color','#ff6507').css('border-left-color','#ff6507').css('border-right-color','#ff6507').css('border-top-color','#ff6507');
			var paynum = jQuery("#PAYNUM").val();
			if(paynum != ""){
				jQuery("li#option_"+paynum).css("background-color","#e8edf0");
			}
		}
	}
	
	/** 展现号码下拉层* */
	function showPhoneDiv(t){
		if(t == "1"){
			jQuery(".phoneselectOption").css("display","block");
		}else{
			jQuery(".phoneselectOption").css("display","none");
			jQuery(".agentselectbox").css("border","#ff6507 1px solid");
		}
	}
	
	/**
	 * 选择号码
	 */
	function selectPhoneNum(p){
		jQuery("#PAYNUM").val(p);
		if(p != ""){
			jQuery(".phoneselectOption ul li#option_"+p).css("background-color","#e8edf0");
			jQuery("#PHONENUM").val(p);
		}else{
			jQuery("#PHONENUM").val("");
		}
		// 选中号码后回填确认号码
		var phonenum = jQuery("#PHONENUM").val();
		var ordertype = jQuery("#ORDERTYPE").val();
		var cityCode1 = jQuery("#PAYCITYCODE").val();
		comfirmPhonenum(phonenum,ordertype,cityCode1);
		// 选中后关闭层
		jQuery(".phoneselectOption").css("display","none");
	}
	
	
	/**
	 * 号码选中样式
	 */
	function chageColorOn(p){
		jQuery(".phoneselectOption ul li").each(function(){
			jQuery(this).css("background-color","#ffffff");
		});
		jQuery(".phoneselectOption ul li#option_"+p).css("background-color","#e8edf0");
	}

	/**
	 * 号码未被选中样式
	 */
	function chageColorOut(p){
		jQuery(".phoneselectOption ul li#option_"+p).css("background-color","#ffffff");
	}
	
	/**
	 * 代理商号码类型选中样式
	 */
	function changeAgentColorOn(p){
		jQuery(".agentselectoption ul li").each(function(){
			jQuery(this).css("background-color","#ffffff");
		});
		jQuery(".agentselectoption ul li#option_"+p).css("background-color","#e8edf0");
	}

	/**
	 * 代理号码类型未被选中样式
	 */
	function changeAgentOut(p){
		jQuery(".agentselectoption ul li#option_"+p).css("background-color","#ffffff");
	}
	
	/**
	 * 代理商号码类型切换
	 */
	function changeAgentProdType(prodid){
		jQuery("#PRODUCTID").val(prodid);
		if(prodid == "50"){
			jQuery("#agentordertypeInput").html("手机");
			agentPhoneNumLength(50);
		}else if(prodid == "1"){
			jQuery("#agentordertypeInput").html("固话");
			agentPhoneNumLength(1);
		}else if(prodid == "20"){
			jQuery("#agentordertypeInput").html("D卡");
			agentPhoneNumLength(20);
		}else if(prodid == "30"){
			jQuery("#agentordertypeInput").html("204账号");
			agentPhoneNumLength(30);
		}else if(prodid == "99"){
			jQuery("#agentordertypeInput").html("其他类型");
			agentPhoneNumLength(99);
		}
		jQuery("#agentordertypeOption").css("display","none");
		jQuery(".agentselectbox").css("border","#ff6507 1px solid");
		
		// 充值号码和确认号码清空
		jQuery("#PHONENUM").val("");
		jQuery("#numberConfirmation").html("");
		
		// 显示较低高样式
		jQuery("#PHONENUM_DIV").removeClass("ptodiv");
		jQuery("#PHONENUM_DIV").removeClass("ptodiv2");
		jQuery("#PHONENUM_DIV").addClass("ptodiv");
		
		// 号码错误信息隐藏
		jQuery("#PHONENUM_PROMPT_W").css("display","none");
		// 产品类型错误信息隐藏
		jQuery("#PRODUCTID_PROMPT_W").css("display","none");
	}
	
	/**
	 * 代理商产品类型显示隐藏
	 */
	function showHiddenagentOrdertypeDiv(){
		var flag = jQuery("#agentordertypeOption").css("display");
		if(flag == "block"){
			jQuery("#agentordertypeOption").css("display","none");
			jQuery(".agentselectbox").css("border","#ff6507 1px solid");
		}else{
			jQuery("#agentordertypeOption").css("display","block");
			jQuery(".agentselectbox").css("border-bottom","none");
			var productid = jQuery("#PRODUCTID").val();
			if(productid != ""){
				jQuery("li#option_"+productid).css("background-color","#e8edf0");
			}
		}
	}
	
	/** 展现代理商产品类型下拉层* */
	function showAgentProdTypeDiv(t){
		if(t == "1"){
			jQuery("#agentordertypeOption").css("display","block");
		}else{
			jQuery("#agentordertypeOption").css("display","none");
			jQuery(".agentselectbox").css("border","#ff6507 1px solid");
		}
	}
	
	/**
	 * 类型切换
	 */
	function changeType(type){
		
		// 切换产品类型隐藏获取宽带账号层
		jQuery("#newDivLanADSL").css("display","none");
		// 切换产品类型隐藏地市信息错误
		jQuery("#PAYCITYCODE_PROMPT_W").css("display","none");
		// 切换产品类型隐藏号码信息错误
		jQuery("#PHONENUM_PROMPT_W").css("display","none");
		// 切换产品类型隐藏余额查询
		jQuery("#yue").html("");

		// 充值号码错误信息样式展现
		PhonenumStyle(0);
		
		jQuery("#ORDERTYPE").val(type);
		if(type == "3" || type == "6"){
			jQuery("#isKuanDai").val("true");
			// 显示广告语
			jQuery("#ORDERTYPE_LI").removeClass("li");
			jQuery("#ORDERTYPE_LI").removeClass("li1");
			jQuery("#ORDERTYPE_LI").addClass("li1");
			jQuery("#kuandaiBanner").css("display","inline-block");
			jQuery("#phone_label").html("宽带账号：");
		}else{
			jQuery("#isKuanDai").val("false");
			// 隐藏广告语
			jQuery("#ORDERTYPE_LI").removeClass("li");
			jQuery("#ORDERTYPE_LI").removeClass("li1");
			jQuery("#ORDERTYPE_LI").addClass("li");
			jQuery("#kuandaiBanner").css("display","none");
			jQuery("#phone_label").html("充值号码：");
		}
		
		// 产品类型样式切换
		changeSelected();
		
		// 选中产品后关闭层
		jQuery(".selectoption").css("display","none");
		jQuery(".selectbox").css("border","1px solid #FF6507");
		
		// 地市显示隐藏(1,为固定电话;11,为公话;2,为小灵通;-1,为预开通;3,为宽带ADSL;6为宽带LAN)
		if(type == "1" || type == "11" || type == "2" || type == "-1" || type == "3" || type == "6"){
			jQuery("#showCity").css("display","block");
			
			jQuery("#guanggao").css("margin-left","510px");
		}else{
			jQuery("#showCity").css("display","none");
			jQuery("#guanggao").css("margin-left","0px");
		}
		jQuery("#PHONENUM").val("");// 修改产品类型时号码置空
		jQuery("#yue").html("");// 修改产品类型类型时清空余额
		// 修改产品类型类型时清空确认号码
		jQuery("#numberConfirmation").html("");
		// 切换充值类型
		showPayType(type);
		
		// 未选中提示[一般情况下不出现此种情况]
		if(jQuery("#ORDERTYPE").val(type) == "" || jQuery("#ORDERTYPE").val(type) == ""){
			jQuery("#ORDERTYPE_PROMPT_W").css("display","inline-block");
		}else{
			jQuery("#ORDERTYPE_PROMPT_W").css("display","none");
		}
	}
	
		
	/* 根据地市展现充值类型 */
	function  modifyType(value,changeType){
    	  
    	if(changeType == "citycode"){// 修改所在地市
    		
    		for(var j=1;j<=6;j++){
    			jQuery("#showType"+j).css("display","none");
    		}
    		
    		if(value == "0591"){
    			jQuery("#showType1").css("display","block");
    			changeRechargeSpan("showType1",beforem);
    		}else if(value == "0592"){    			
    			jQuery("#showType5").css("display","block");	
    			changeRechargeSpan("showType5",beforem);
				
    		}
    		else{    		
    			// 改版后showType4与showType1充值类型是一样的,故显示showType1
    			// jQuery("#showType4").css("display","block");
    			jQuery("#showType1").css("display","block");
    			changeRechargeSpan("showType1",beforem);
    		}    		
    	}
    }
	
	/* 根据产品类型展现充值类型 */
	function showPayType(type){
		var cityCode = jQuery("#PAYCITYCODE").val();			
		for(var i=1;i<=6;i++){
			jQuery("#showType"+i).css("display","none");
		}
		var paycardtype = jQuery("#paycardtype").val();
		if(paycardtype==2 || paycardtype==1 ){
			beforem=paycardtype;
		}else if(paycardtype==''){
			beforem=1;
		}
		if(type == "50"  || type == "10"){// 手机
			if(cityCode == "0592"){
				jQuery("#rechargeDiv6").show();
				if(type == "10")
				{
					jQuery("#rechargeDiv6").hide();
					
				}
				jQuery("#showType6").css("display","block");
				changeRechargeSpan("showType6",beforem);
			}else{		
				jQuery("#rechargeDiv").show();
				if(type == "10")
				{
					jQuery("#rechargeDiv").hide();
				}
				jQuery("#showType2").css("display","block");	
				changeRechargeSpan("showType2",beforem);
			}
			jQuery("#rechargeSpan1").find("a").click();
		}else if(type == "-1" || type == "11"){			
			jQuery("#showType3").css("display","block");
			changeRechargeSpan("showType3",beforem);
			
		}else{
			if(cityCode == "0591"){
				jQuery("#showType1").css("display","block");
				changeRechargeSpan("showType1",beforem);
			}else if(cityCode == "0592"){
				jQuery("#showType5").css("display","block");
				changeRechargeSpan("showType5",beforem);
			}
			else{
			// 改版后showType4与showType1充值类型是一样的,故显示showType1
    			// jQuery("#showType4").css("display","block");
    			jQuery("#showType1").css("display","block");
    			changeRechargeSpan("showType1",beforem);
			}				
		}
		
	}
	
	/** ******************************支付页面开始************************************* */
	/**
	 * 翼支付页面其它银行显示隐藏
	 */
	function showOtherBankFlag(){
		var flag = jQuery("#otherBank").css("display");
		if(flag == "block"){
			jQuery("#otherBank").css("display","none");
			// 选择其它图片切换
			jQuery(".xzqt").css("background-image","url(images/newImages/ico5.gif)"); 
		}else{
			jQuery("#otherBank").css("display","block");
			// 选择其它图片切换
			jQuery(".xzqt").css("background-image","url(images/newImages/icoup5.gif)");
		}
		var main = jQuery(window.parent.document).find("#chargeIframe");
		var thisheight = jQuery(document).height()+30;
		main.height(thisheight);
	}
	
	/**
	 * 充值金额切换
	 * 
	 * @param t,为充值类型;
	 * @param i,为索引
	 */
	
function changeMoney(t,i){
		// 充值金额切换，充值金额错误信息隐藏
		jQuery("#promptCash").css("display","none");
		jQuery("#CASH_PROMPT_W").css("display","none");
		
		// cashType:3,200元;2,100元;1,50元;0,其它
		jQuery("#cashMoney").find("a").each(function(){
			jQuery(this).removeClass("a2");
			jQuery(this).removeClass("a1");
			jQuery(this).addClass("a1");
		});
		jQuery("#cashMoney").find("a").eq(i).removeClass("a1");
		jQuery("#cashMoney").find("a").eq(i).addClass("a2");
		if(t == "3"){
			jQuery("#cashType").val(t);
			jQuery("#otherCash").css("border-color","#BEBEBE");
			// 文本去除加粗
			jQuery("#otherCash").removeClass("wenben1");
			jQuery("#otherCash").removeClass("wenben1_");
			jQuery("#otherCash").addClass("wenben1");
			jQuery("#bestCash").val("200");
		}else if(t == "2"){
			jQuery("#cashType").val(t);
			jQuery("#otherCash").css("border-color","#BEBEBE");
			// 文本去除加粗
			jQuery("#otherCash").removeClass("wenben1");
			jQuery("#otherCash").removeClass("wenben1_");
			jQuery("#otherCash").addClass("wenben1");
			jQuery("#bestCash").val("100");
		}else if(t == "1"){
			jQuery("#cashType").val(t);
			jQuery("#otherCash").css("border-color","#BEBEBE");
			// 文本去除加粗
			jQuery("#otherCash").removeClass("wenben1");
			jQuery("#otherCash").removeClass("wenben1_");
			jQuery("#otherCash").addClass("wenben1");
			jQuery("#bestCash").val("50");
		}else if(t == "0"){
			// 其它类型取文本框的值
			var otherCash = jQuery("#otherCash").val();
			jQuery("#otherCash").css("border-color","#FF6507");
			// 文本加粗
			jQuery("#otherCash").removeClass("wenben1");
			jQuery("#otherCash").removeClass("wenben1_");
			jQuery("#otherCash").addClass("wenben1_");
			jQuery("#cashType").val(t);
			// 将逗号去掉
			jQuery("#bestCash").val(otherCash.replace(/,/g,''));
		}else if(t == "7"){
			// 其它类型取文本框的值
			var otherCash = jQuery("#otherCash_new").val();
			jQuery("#otherCash_new").css("border-color","#0000");//FF6507
			// 文本加粗
			jQuery("#otherCash_new").removeClass("wenben0");
			jQuery("#otherCash_new").removeClass("wenben0_");
			jQuery("#otherCash_new").addClass("wenben0_");
			jQuery("#cashType").val(t);
			// 将逗号去掉
			jQuery("#bestCash").val(otherCash.replace(/,/g,''));
		}
	}
	
	/**
	 * 代理商充值金额切换
	 * 
	 * @param t,为充值类型;
	 * @param i,为索引
	 */
	
	function changeAgentMoney(t,i){
		
		// 充值金额切换，充值金额错误信息隐藏
		jQuery("#promptCash").css("display","none");
		jQuery("#CASH_PROMPT_W").css("display","none");
		
		// cashType:3,5000元;2,3000元;1,1000元;0,其它
		jQuery("#cashMoney").find("a").each(function(){
			jQuery(this).removeClass("a2");
			jQuery(this).removeClass("a1");
			jQuery(this).addClass("a1");
		});
		jQuery("#cashMoney").find("a").eq(i).removeClass("a1");
		jQuery("#cashMoney").find("a").eq(i).addClass("a2");
		if(t == "3"){
			jQuery("#cashType").val(t);
			jQuery("#otherCash").css("border-color","#BEBEBE");
			// 文本去除加粗
			jQuery("#otherCash").removeClass("wenben1");
			jQuery("#otherCash").removeClass("wenben1_");
			jQuery("#otherCash").addClass("wenben1");
			jQuery("#bestCash").val("5000");
		}else if(t == "2"){
			jQuery("#cashType").val(t);
			jQuery("#otherCash").css("border-color","#BEBEBE");
			// 文本去除加粗
			jQuery("#otherCash").removeClass("wenben1");
			jQuery("#otherCash").removeClass("wenben1_");
			jQuery("#otherCash").addClass("wenben1");
			jQuery("#bestCash").val("3000");
		}else if(t == "1"){
			jQuery("#cashType").val(t);
			jQuery("#otherCash").css("border-color","#BEBEBE");
			// 文本去除加粗
			jQuery("#otherCash").removeClass("wenben1");
			jQuery("#otherCash").removeClass("wenben1_");
			jQuery("#otherCash").addClass("wenben1");
			jQuery("#bestCash").val("1000");
		}else if(t == "0"){
			// 其它类型取文本框的值
			var otherCash = jQuery("#otherCash").val();
			jQuery("#otherCash").css("border-color","#FF6507");
			// 文本加粗
			jQuery("#otherCash").removeClass("wenben1");
			jQuery("#otherCash").removeClass("wenben1_");
			jQuery("#otherCash").addClass("wenben1_");
			jQuery("#cashType").val(t);
			// 将逗号去掉
			jQuery("#bestCash").val(otherCash.replace(/,/g,''));
		}
	}

	/**
	 * 文本框键盘弹起
	 */
	function doForMoney_kd(){
		changeMoney('7','3');
		var money = jQuery("#otherCash").val();
		// 将逗号去掉,再进行数字校验
		numcheck(money.replace(/,/g,''));
		// 清除文本框中默认的金额
		// clearDefaultMoney();
		// 将输入的金额展现在文本框
		showMoney();
	}
	
	/**
	 * 文本框键盘弹起
	 */
	function doForMoney(){
		changeMoney('0','3');
		var money = jQuery("#otherCash").val();
		// 将逗号去掉,再进行数字校验
		numcheck(money.replace(/,/g,''));
		// 清除文本框中默认的金额
		// clearDefaultMoney();
		// 将输入的金额展现在文本框
		showMoney();
	}
	
	/**
	 * 文本框键盘弹起(代理商)
	 */
	function doForAgentMoney(){
		changeMoney('0','3');
		var money = jQuery("#otherCash").val();
		// 将逗号去掉,再进行数字校验
		numcheck(money.replace(/,/g,''));
		// 清除文本框中默认的金额
		// clearDefaultMoney();
		// 将输入的金额展现在文本框
		showAgentMoney();
	}
	
	/**
	 * 开始输入数字时清除文本框中默认的金额
	 */
	function clearDefaultMoney(){
		var inputOnceFlag = jQuery("#InputOnce").val();
		if(inputOnceFlag == "true"){
			jQuery("#otherCash").val("");
			jQuery("#bestCash").val("");
			jQuery("#InputOnce").val("false");
			jQuery("#otherCash").removeClass("wenben1");
			jQuery("#otherCash").addClass("wenben1_");
		}
	}
	
	/**
	 * 将输入的金额数字，每3位增加一个逗号分隔
	 */
	function showMoney(){
		var otherCash = jQuery("#otherCash").val();
		var cashType =  jQuery("#cashType").val();
		// 替换逗号
		otherCash = otherCash.replace(/,/g,'');
		jQuery("#bestCash").val(otherCash);
		// 大于 1000元时提示信息
		if(otherCash*100 > 1000*100){
			jQuery("#promptCash").css("display","block");
		}else{
			jQuery("#promptCash").css("display","none");
		}
		// 用逗号分隔
		var tempCash = otherCash.replace(/(?=(?:\d{3})+(?!\d))/g,','); // 此正则有一个BUG,如果倍数为3倍数,分隔后最前面有一个逗号
		if(otherCash.length%3 == 0){
			if(tempCash.indexOf(",") == 0){
				tempCash = tempCash.substring(1,tempCash.length);
			}
		}
		jQuery("#otherCash").val(tempCash);
		
		
		// 隐藏错误提示
		jQuery("#CASH_PROMPT_W").css("display","none");
	}
	
	/**
	 * 将输入的金额数字，每3位增加一个逗号分隔(代理商)
	 */
	function showAgentMoney(){
		var otherCash = jQuery("#otherCash").val();
		var cashType =  jQuery("#cashType").val();
		// 替换逗号
		otherCash = otherCash.replace(/,/g,'');
		jQuery("#bestCash").val(otherCash);
		// 用逗号分隔
		var tempCash = otherCash.replace(/(?=(?:\d{3})+(?!\d))/g,','); // 此正则有一个BUG,如果倍数为3倍数,分隔后最前面有一个逗号
		if(otherCash.length%3 == 0){
			if(tempCash.indexOf(",") == 0){
				tempCash = tempCash.substring(1,tempCash.length);
			}
		}
		jQuery("#otherCash").val(tempCash);
	}
	
	/**
	 * 过滤特殊字符等
	 * 
	 * @param evnt
	 * @return
	 */
	function filerValidPerfect(evnt){
		var event = event || window.event;
		var keyCode=window.event?evnt.keyCode:evnt.which;
	 	if(keyCode<8||(keyCode>8&&keyCode<48)||(keyCode>57&&keyCode<96)||keyCode>105){
	 		return false;
		}
	 	return true;
	}

	/** **************************************充值表单校验开始*********************************** */
	
	/**
	 * 充值号码错误信息提示样式
	 * 
	 * @param 1，展现；0，不展现
	 */
	function PhonenumStyle(type){
		if(type == "1"){
			// [显示效果切换，显示成高度高的LI]
		 	jQuery("#PHONENUM_LI").removeClass("li");
			jQuery("#PHONENUM_LI").removeClass("li1");
			jQuery("#PHONENUM_LI").addClass("li1");
			jQuery("#PHONENUM_PROMPT_W").css("display","block");
		}else{
			jQuery("#PHONENUM_PROMPT_W").css("display","none");
			// [显示效果切换，显示成高度低的LI]
		 	jQuery("#PHONENUM_LI").removeClass("li");
			jQuery("#PHONENUM_LI").removeClass("li1");
			jQuery("#PHONENUM_LI").addClass("li");
		}
		
	}
	
	/***************************************************************************
	 * **********************局部检验开始[主要是输入框的onblur事件]************************
	 **************************************************************************/
	 function checkBestFormPart(type){
		 var orderType = jQuery("#ORDERTYPE").val();
		 var phonenum = jQuery("#PHONENUM").val();
		 var cityCode = jQuery("#PAYCITYCODE").val();
		 
		 // 手机号码
		 if(type == "PHONENUM"){
			 	if (!checkEmpty("PHONENUM")){
					// 按钮变灰
					changeButtonGray();
					jQuery("#PHONENUM_PROMPT").html("请输入充值号码");
					// 充值号码错误信息样式展现
					PhonenumStyle(1);
					return false;
			 	}else{	
			 			
						if(orderType == "1" || orderType == "2" || orderType == "11"){
							if(cityCode == "0591" || cityCode == "0595"){
						 			if(phonenum.length != 8){
						 				// 按钮变灰
						    			changeButtonGray();
						 		 		jQuery("#PHONENUM_PROMPT").html("请输入8位充值号码！");
						 		 		// 充值号码错误信息样式展现
										PhonenumStyle(1);
										return false;
						 			}
						 	}else{
						 			if(phonenum.length != 7){
						 				// 按钮变灰
						    			changeButtonGray();
						 		 		jQuery("#PHONENUM_PROMPT").html("请输入7位充值号码！");
						 		 	// 充值号码错误信息样式展现
										PhonenumStyle(1);
										return false;
						 			}
						 	}
				        }else if(orderType == "50" || orderType == "10" || orderType == "-1"){
				        	if(phonenum.length < 11){
				        		// 按钮变灰
				    			changeButtonGray();
								jQuery("#PHONENUM_PROMPT").html("请输入11位充值号码！");
								// 充值号码错误信息样式展现
								PhonenumStyle(1);
								if(orderType=="50"){
									jQuery("#isyzfdj").val("");
								}
								return false;
							}
				        		
				        }else if(orderType == "3" || orderType == "6"){
				        	if(phonenum.length < 6){
				        		// 按钮变灰
				    			changeButtonGray();
								jQuery("#PHONENUM_PROMPT").html("抱歉，系统支持的最小帐号字符长度为6位，请调整您的天翼宽带帐号位数，谢谢！！！");
								// 充值号码错误信息样式展现
								PhonenumStyle(1);
								return false;
							}
				        }  
			 	}
			 	// 充值号码错误信息样式展现
				PhonenumStyle(0);
			 	jQuery("#phone_label").css('font-weight','normal');
			 	jQuery("#phone_input").css('border-bottom-color','#aaaaaa').css('border-left-color','#aaaaaa').css('border-right-color','#aaaaaa').css('border-top-color','#aaaaaa');
		 }
		 
		 // 充值金额
		 if(type == "bestCash"){
			 	var bestCash = jQuery("#bestCash").val();
				// 验证金额
				if (!checkEmpty("bestCash")){
					// 按钮变灰
					changeButtonGray();
					jQuery("#promptCash").css("display","none");
			 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
			 		jQuery("#CASH_PROMPT").html("请输入充值金额");
					return false;
			 	}
				
				if (isNaN(bestCash)){
					// 按钮变灰
					changeButtonGray();
					jQuery("#promptCash").css("display","none");
			 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
			 		jQuery("#CASH_PROMPT").html("充值金额必须为数字！！！");
					return false;
				} 
			 	
			 	// 充值金额[1~3500]
			 	if(commonValidateMoney(bestCash,'1','3500') == "0"){
			 		// 按钮变灰
					changeButtonGray();
			 		jQuery("#promptCash").css("display","none");
			 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
			 		jQuery("#CASH_PROMPT").html("您填的充值金额格式不对！！！");
			 		return false;
			 	}else if(commonValidateMoney(bestCash,'1','3500') == "1"){
			 		// 按钮变灰
					changeButtonGray();
			 		jQuery("#promptCash").css("display","none");
			 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
			 		jQuery("#CASH_PROMPT").html("充值金额最高为3500元");
			 		return false;
			 	}else if(commonValidateMoney(bestCash,'1','3500') == "2"){
			 		// 按钮变灰
					changeButtonGray();
			 		jQuery("#promptCash").css("display","none");
			 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
			 		jQuery("#CASH_PROMPT").html("充值金额最低为1元");
			 		return false;
			 	}
			 	jQuery("#CASH_PROMPT_W").css("display","none");
			 	
		 }
		 
		 // 验证码
		 if(type == "INVALIDATE_T"){
			 	var yzm = jQuery("#INVALIDATE_T_H").val();
				if(yzm == "0"){
					// 按钮变灰
					changeButtonGray();
					jQuery("#INVALIDATE_T_IMAGE").html("<img src=\"/service/pay/images/newImages/errorTishi.gif\">");
					jQuery("#INVALIDATE_T_PROMPT").html("验证码错误");
					jQuery("#INVALIDATE_T_PROMPT_W").css("display","inline-block");
					return false;
				}
		 }
		 
		 // 再调全局校验
		 checkFormEmpty();
		 
	 }
	
	/***************************************************************************
	 * **********************局部检验结束[主要是输入框的onblur事件]************************
	 **************************************************************************/
	
	/***************************************************************************
	 * **********************全局检验开始[主要是输入框的onkeyup事件***********************
	 **************************************************************************/
	
	/**
	 * 充值缴费表单上半部分公共部分空判断(用于onkeyup事件)
	 */
	function checkBestFormAboveEmpty(){
		var orderType = jQuery("#ORDERTYPE").val();
		var phonenum =  jQuery("#PHONENUM").val();
		var cityCode = jQuery("#PAYCITYCODE").val();
		
		// 验证产品类型
		if (!checkEmpty("ORDERTYPE")){
			// 按钮变灰
			changeButtonGray();
			return false;
	 	}
		
		// 验证地市PAYCITYCODE 1,为固定电话;11,为公话;2,为小灵通;-1,为预开通;3,为宽带ADSL;6为宽带LAN)
		if(orderType == "1" || orderType == "11" || orderType == "2" || orderType == "-1" || orderType == "3" || orderType == "6"){
			if (!checkEmpty("PAYCITYCODE")){
				// 按钮变灰
				changeButtonGray();
				return false;
		 	}
		}
		
		// 验证充值号码
		if (!checkEmpty("PHONENUM")){
			// 按钮变灰
			changeButtonGray();
			return false;
	 	}else{	
	 			
	 			if(orderType == "1" || orderType == "2" || orderType == "11"){
					if(cityCode == "0591" || cityCode == "0595"){
				 			if(phonenum.length != 8){
				 				// 按钮变灰
				    			changeButtonGray();
								return false;
				 			}
				 	}else{
				 			if(phonenum.length != 7){
				 				// 按钮变灰
				    			changeButtonGray();
								return false;
				 			}
				 	}
		        }else if(orderType == "50" || orderType == "10" || orderType == "-1"){
		        	if(phonenum.length < 11){
		        		// 按钮变灰
		    			changeButtonGray();
						return false;
					}
		        }else if(orderType == "3" || orderType == "6"){
		        	if(phonenum.length < 6){
		        		// 按钮变灰
		    			changeButtonGray();
						return false;
					}
		        }   
	 	}
		return true;
		
	}
	
	/**
	 * 翼支付/银行列表表单下半部分空判断(用于onkeyup事件)
	 */
	function checkBestFormBelowEmpty(){
		
		var bestCash = jQuery("#bestCash").val();
		// 验证金额
		if (!checkEmpty("bestCash")){
			// 按钮变灰
			changeButtonGray();
			setFocus("otherCash");
			return false;
	 	}else{
	 		// 充值金额[1~3500]
		 	if(commonValidateMoney(bestCash,'1','3500') == "0"){
		 		// 按钮变灰
				changeButtonGray();
		 		return false;
		 	}else if(commonValidateMoney(bestCash,'1','3500') == "1"){
		 		// 按钮变灰
				changeButtonGray();
		 		return false;
		 	}else if(commonValidateMoney(bestCash,'1','3500') == "2"){
		 		// 按钮变灰
				changeButtonGray();
		 		return false;
		 	}
	 	}
		
		// 验证验证码
		var yzm = jQuery("#INVALIDATE_T_H").val();
		if(yzm == "0"){
			changeButtonGray();
			return false;
		}
		
		// 验证银行
		var bankCode = jQuery("input[name=bankid]:checked").val();
		if(bankCode == ""||bankCode==undefined){
			// 按钮变灰
			changeButtonGray();
			return false;
		}
		
		return true;
	}
	
	
	/**
	 * 空验证所有表单验证方法(用于onkeyup事件)
	 */ 
	
	function checkFormEmpty(){
        
		if(checkBestFormAboveEmpty()){
			// 0未选中
			if(beforem == 0){
				return false;
			// 网上银行/翼支付
			}else if(beforem == 1){
				if(checkBestFormBelowEmpty()){
					// [确认无误下一步按钮点亮]
					changeButtonGreen();
				}
			// 11188卡充值
			}else if(beforem == 2){
				if(check11888PLMimaIsEmpty()){// 判断密码区域是否为空
					close11888PayConfirmButton('pl');
					return false;
				}else if(!checkAll11888MinaIsRight()){// 密码区域不为空则判断密码是否全部正确
					close11888PayConfirmButton('pl');
					return false;
				}				
				var v=jQuery("#INVALIDATE_T_PL").val();
				if(check11888PLYZMIsEmpty()){// 判断验证码是否为空
					close11888PayConfirmButton('pl');	
					return false;
				}else if(v.length>0 && v.length<5){	// 验证码不为空，判断密码是否填全
					close11888PayConfirmButton('pl');
					return false;
				}else{// 验证码不为空且已经填写完整，判断是否正确
					if(!check11888PLYZMIsRight()){
						close11888PayConfirmButton('pl');
						return false;
					}				
				}
				open11888PayConfirmButton('pl');
				return true;
			// 20198卡充值
			}else if(beforem == 3){
				return false;
			}
		}
		
	}
	/***************************************************************************
	 * **********************全局检验结束[主要是输入框的onkeyup事件***********************
	 **************************************************************************/
	
	function bestFormSubmitNew(){
		if (!checkEmpty("ORDERTYPE")){
			// 按钮变灰
			changeButtonGray();
			jQuery("#ORDERTYPE_PROMPT_W").css("display","inline-block");
			return false;
	 	}
		
		var orderType = jQuery("#ORDERTYPE").val(); 	
		

		//判断不允许为小灵通充值
		if("2" == orderType){
			return false;
		}
		
		// 地市校验 1,为固定电话;11,为公话;2,为小灵通;-1,为预开通;3,为宽带ADSL;6为宽带LAN)
		if(orderType == "1" || orderType == "11" || orderType == "2" || orderType == "-1" || orderType == "3" || orderType == "6"){
			if (!checkEmpty("PAYCITYCODE")){
				// 按钮变灰
				changeButtonGray();
				jQuery("#PAYCITYCODE_PROMPT_W").css("display","inline-block");
				return false;
		 	}
		}
		
		var cityCode = jQuery("#PAYCITYCODE").val();
		
	 	var phoneNum = jQuery("#PHONENUM").val();
	 	if(phoneNum == "" || phoneNum == null){
	 		// 按钮变灰
			changeButtonGray();
			jQuery("#PHONENUM_PROMPT").html("请输入充值号码");
			// 充值号码错误信息样式展现
			PhonenumStyle(1);
			setFocus("PHONENUM");
			return false;
	 	}
	 	if((orderType == "1" || orderType == "2" || orderType == "50" || orderType == "11") && phoneNum.substring(0,3) == "059"){
			// 按钮变灰
			changeButtonGray();
	 		jQuery("#PHONENUM_PROMPT").html("充值号码无需加区号！");
	 		// 充值号码错误信息样式展现
			PhonenumStyle(1);
			setFocus("PHONENUM");
			return false;
		}
	 	// 手机和翼支付类型,地市由号码归属地查询
		if(orderType == "50" || orderType == "10"){
	 		if(phoneNum.length != 11){
	 			// 按钮变灰
				changeButtonGray();
		 		jQuery("#PHONENUM_PROMPT").html("请输入11位充值号码！");
		 		// 充值号码错误信息样式展现
				PhonenumStyle(1);
				setFocus("PHONENUM");
				return false;
	 		}
			var cityc = findCity(phoneNum);
			if(cityc!=""){
				cityCode = cityc;
				jQuery("#PAYCITYCODE").val(cityc);
			}
	 	}
		
	    var citystate=jQuery("#citystate").val();
	    if(citystate.search(cityCode)!=-1){
	    	// 按钮变灰
			changeButtonGray();
	 		jQuery("#PHONENUM_PROMPT").html("很抱歉，您要充值的号码所在地市因系统升级改造暂时无法提供服务，给您带来不便，请你谅解！");
	 		// 充值号码错误信息样式展现
	 		PhonenumStyle(1);
			setFocus("PHONENUM");
			return false;
	    }
	   
	 	var flag = "";
		if(orderType == "-1"){
			flag = "1";
		}else{
			flag = productIfExit(cityCode,orderType,phoneNum);
		}
		if(flag != "1"){
			// alert("对不起，"+flag+"!");
			// 修改提示语
			// alert("对不起，您输入的号码有误！若您的号码尚未启用，请选择产品类型为[预开通]");
			// 按钮变灰
			changeButtonGray();
	 		jQuery("#PHONENUM_PROMPT").html("对不起，您输入的号码有误！若您的号码尚未启用，请选择产品类型为[预开通]");
	 		// 充值号码错误信息样式展现
			PhonenumStyle(1);
			setFocus("PHONENUM");
			return false;
		}
		if(cityCode == "0591" || cityCode == "0595"){
	 		if(orderType == "1" || orderType == "2" || orderType == "11"){
	 			if(phoneNum.length != 8){
	 				// 按钮变灰
	 				changeButtonGray();
	 		 		jQuery("#PHONENUM_PROMPT").html("请输入8位充值号码！");
	 		 		// 充值号码错误信息样式展现
					PhonenumStyle(1);
	 				setFocus("PHONENUM");
					return false;
	 			}
	 		}
	 	}else{
	 		if(orderType == "1" || orderType == "2" || orderType == "11"){
	 			if(phoneNum.length != 7){
	 				// 按钮变灰
	 				changeButtonGray();
	 		 		jQuery("#PHONENUM_PROMPT").html("请输入7位充值号码！");
	 		 		// 充值号码错误信息样式展现
					PhonenumStyle(1);
	 				setFocus("PHONENUM");
					return false;
	 			}
	 		}
	 	}
	 	if(orderType == "50" || orderType == "10"){
	 		if(phoneNum.length != 11){
	 			// 按钮变灰
 				changeButtonGray();
 		 		jQuery("#PHONENUM_PROMPT").html("请输入11位充值号码！");
 		 		// 充值号码错误信息样式展现
				PhonenumStyle(1);
 				setFocus("PHONENUM");
				return false;
	 		}
	 	}
		
		// 判断是否是一卡双号虚号码；
		if(orderType == "50"){
			var isVir = isVirtualNum(phoneNum,cityCode,orderType);
			if(isVir!="" && isVir=="1"){
				// 按钮变灰
 				changeButtonGray();
 				// [显示效果切换，显示成高度高的LI]
 		 		jQuery("#PHONENUM_PROMPT").html("对不起，该号码是一卡双号虚号码，虚号码暂不允许在网厅进行自助操作！");
 		 		// 充值号码错误信息样式展现
				PhonenumStyle(1);
 				setFocus("PHONENUM");
				return false;
			}
		}
		if(orderType == "1" || orderType == "2"){
			if(cityCode == "0591" || cityCode == "0595"){
				if(phoneNum.length < 8){
					// 按钮变灰
	 				changeButtonGray();
	 		 		jQuery("#PHONENUM_PROMPT").html("您填写的固定电话或小灵通号码不应小于8位！！！");
	 		 		// 充值号码错误信息样式展现
					PhonenumStyle(1);
	 				setFocus("PHONENUM");
					return false;
				}
			}else{
				if(phoneNum.length < 7){
					// 按钮变灰
	 				changeButtonGray();
	 		 		jQuery("#PHONENUM_PROMPT").html("您填写的固定电话或小灵通号码不应小于7位！！！");
	 		 		// 充值号码错误信息样式展现
					PhonenumStyle(1);
	 				setFocus("PHONENUM");
					return false;
				}
			}	
			
			if(phoneNum.replace(/[\d|X|PHS]/g,'')!=""){
				// 按钮变灰
 				changeButtonGray();
 		 		jQuery("#PHONENUM_PROMPT").html("您填写的固定电话或小灵通号码格式不对！");
 		 		// 充值号码错误信息样式展现
				PhonenumStyle(1);
 				setFocus("PHONENUM");
				return false;
			}
		}
		if(orderType == "3" ||orderType == "6"){
			 if(phoneNum.length < 6 ) {         
				// 按钮变灰
 				changeButtonGray();
 		 		jQuery("#PHONENUM_PROMPT").html("抱歉，系统支持的最小帐号字符长度为6位，请调整您的天翼宽带帐号位数，谢谢！！！");
 		 		// 充值号码错误信息样式展现
				PhonenumStyle(1);
 				setFocus("PHONENUM");
				return false;
			 }else if(phoneNum.replace(/[\w@\.]/g,'')!=""){ 
				// 按钮变灰
 				changeButtonGray();
 		 		jQuery("#PHONENUM_PROMPT").html("抱歉，你输入的天翼宽带帐号格式不对，只能输入@、数字与字母 ！！！");
 		 		// 充值号码错误信息样式展现
				PhonenumStyle(1);
 				setFocus("PHONENUM");
				return false;
			}
		}	
		var flag = false;
		jQuery("input[name=bankid]:checked").each(function(){
		  	flag = true;
		});
	 
	 	if(!flag){
		 	// 按钮变灰
			changeButtonGray();
	 		jQuery("#BANKID_PROMPT_W").css("display","inline-block");
			return false;
	 	}	
		
		var bestCash = jQuery("#bestCash").val();
	 	if(bestCash == "" || bestCash == null || bestCash.length<=0){
	 		jQuery("#promptCash").css("display","none");
	 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
	 		jQuery("#CASH_PROMPT").html("请输入正确的充值金额！！");
			setFocus("bestCash");
			return false;
	 	}
	 	if (isNaN(bestCash)){
			jQuery("#promptCash").css("display","none");
	 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
	 		jQuery("#CASH_PROMPT").html("充值金额必须为数字！！！");
			setFocus("bestCash");
			return false;
		} 
	 	// 充值金额[1~3500]
	 	if(commonValidateMoney(bestCash,'1','3500') == "0"){
	 		// 按钮变灰
			changeButtonGray();
	 		jQuery("#promptCash").css("display","none");
	 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
	 		jQuery("#CASH_PROMPT").html("您填的充值金额格式不对！！！");
	 		return false;
	 	}else if(commonValidateMoney(bestCash,'1','3500') == "1"){
	 		// 按钮变灰
			changeButtonGray();
	 		jQuery("#promptCash").css("display","none");
	 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
	 		jQuery("#CASH_PROMPT").html("充值金额最高为3500元");
	 		return false;
	 	}else if(commonValidateMoney(bestCash,'1','3500') == "2"){
	 		// 按钮变灰
			changeButtonGray();
	 		jQuery("#promptCash").css("display","none");
	 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
	 		jQuery("#CASH_PROMPT").html("充值金额最低为1元");
	 		return false;
	 	}
		var varProductId = "";
		jQuery("[name='INVALIDATE_T']").each(function(){
		  	if(jQuery(this).val().length>0){
		  		varProductId = jQuery(this).val();
		  	}
		})
	 	
		if(varProductId == ""){
	      	 // 按钮变灰
			 changeButtonGray();
	 		 jQuery("#INVALIDATE_T_PROMPT_W").css("display","inline-block");
	 		 jQuery("#INVALIDATE_T_IMAGE").html("<img  src=\"/service/pay/images/newImages/errorTishi.gif\">");
	 		 jQuery("#INVALIDATE_T_PROMPT").html("请输入验证码！！！");
	      	 setFocus("INVALIDATE_T");
	      	 return false;
	    }
	    
	    if(checkYzm(varProductId) == 1){
	    	  // 重新拉取验证码
	    	  proof_diagram('diagram','');
	          return false;
	    }
	    
	    getPaymentBalance('4');
	    var bestPass = jQuery("#bestPass").val();
	    if(bestPass != "true"){
	    	// 按钮变灰
			changeButtonGray();
			var resultMsg = jQuery("#bestResultMsg").val();
			alert(resultMsg);
			return false;
	    }
	    if(orderType =="3" || orderType =="6"){
	        isMsgAdsl(path,orderType,phoneNum,cityCode);
	    }else{
	    	////1话费账户——————2翼支付账户
	    	var changePayBank =jQuery("input[name='changePayBank']:checked").val();
	    	var bankid=jQuery("input[name=bankid]:checked").val();
	    	if(orderType=="10"){
	    		//翼支付账户预存接口验证
	    		//alert("cashToEpayGudge:第一层");
	    		cashToEpayGudge("50",phoneNum,cityCode,bestCash);
	    		
	    	}else{
		    	var div = jQuery("#ONEP", parent.document);//window.top.document.getElementById('ONEP');
				div.css("display","none");
				var page =jQuery("#NNNP", parent.document);// window.top.document.getElementById("NNNP");
				div.css("display","none");
				var pageW = jQuery("#SHOWPP", parent.document);// window.top.document.getElementById("SHOWPP");
				pageW.click();	
	    	}

	    }
		
		// 表单提交到确认页后验证码清空且重新拉取验证码
		jQuery("#INVALIDATE_T").val("");
		proof_diagram('diagram','');
		jQuery("#INVALIDATE_T_PROMPT_W").css("display","none");
		// 验证码隐藏域设置成0
		jQuery("#INVALIDATE_T_H").val("0");
		
		// 按钮变灰
		changeButtonGray();
	}
	
	//是否办理了信息公寓宽带套餐。被限制登录的四种档次16元、18元、20元、25元
	function isMsgAdsl(path,orderType,phoneNum,cityCode){
			var path = path+"/AjaxServlet.do?orderType="+orderType+"&phoneNum="+phoneNum+"&cityCode="+cityCode;
			var result = "";
			jQuery.ajax( {
		  		url : path,
		  		type : 'POST',
		  		dataType : 'json',
		  		cache : false,
		  		async : false,
		  		data : ( {
		  			method:'isMsgAdsl'
		  		}),
		  		timeout : 30000,
		  		success : function(json) 
		  		{
					result = json.CODE;
					if(result=="0"){
						openlayer(440,140);
					}else{
						var div = jQuery("#ONEP", window.top.document);//window.top.document.getElementById('ONEP');
						div.css("display","none");
						var page =jQuery("#NNNP", window.top.document);// window.top.document.getElementById("NNNP");
						div.css("display","none");
						var pageW = jQuery("#SHOWPP", window.top.document);// window.top.document.getElementById("SHOWPP");
						pageW.click();
					}
		  		},
				error : function() 
				{
			   		alert('操作超时，请稍后再试！！');
				}
		  	});
			
	}
	function cashToEpayGudge(orderType,phoneNum,cityCode,bestCash){
		var path ="/PayAjaxServlet.do";
		var result = "";
		jQuery.ajax( {
	  		url : path,
	  		type : 'POST',
	  		dataType : 'json',
	  		cache : false,
	  		async : false,
	  		data : ( {
	  			method:"cashToEpayGudge",
	  			ORDERTYPE:orderType,
	  			PHONENUM:phoneNum,
	  			CITYCODE:cityCode,
	  			BESTCASH:bestCash
	  		}),
	  		timeout : 30000,
	  		success : function(json) 
	  		{
				result = json.CODE;
				//result="0";//测试
				if(result=="0"){
					var div = jQuery("#ONEP", parent.document);//window.top.document.getElementById('ONEP');
					div.css("display","none");
					var page =jQuery("#NNNP", parent.document);// window.top.document.getElementById("NNNP");
					div.css("display","none");
					var pageW = jQuery("#SHOWPP", parent.document);// window.top.document.getElementById("SHOWPP");
					pageW.click();
				}else if(result=="1") {
					alert("无法充值到您的翼支付账户,请选择其它充值账户");
				}else{
					alert("现无法充值翼支付账户");
				}
	  		},
			error : function() 
			{
		   		alert('操作超时，请稍后再试！！');
			}
	  	});
	}
	function openlayer(width,height){
        var left=(jQuery(window).width()-width)/2;
        var top=(jQuery(window).height()-height)/2;
		 var srcUrl = '<iframe src='+path+'"/service/pay/bestpay/showMsgADSLInfo.jsp?type=1" allowtransparency="true" id="" scrolling="no" frameborder="0" width="'+width+'" height="'+height+'">';
		 jQuery.layerSetup({ 
				id:"opDiv",
				width:width, 
				height:height,
				content:srcUrl, 
				isbg:true,
				left:left,
				top:top,
			    opacity:0,
				templete:'<div style="width:'+width+';*width:'+width+';height:'+height+';" id="@contentid@"></div>'
			}); 
		 jQuery.layershow(); 
		 jQuery.layerclose=layerClose1;
		 jQuery(window).scrollTop(0);
	     //jQuery(document.body).get(0).scroll="yes";
		 
        }
	 
	 // 关闭层
		function layerClose1(__id){
			jQuery("#"+__id+"_background").remove(); 
			jQuery("#"+__id).remove();
			//jQuery('#msgADSLId').html(jQuery('#msgADSLId').data("msgADSLId"));
			jQuery(window).scrollTop=function(){return true;};
			//jQuery(document.body).get(0).scroll="yes";
		}
	/** **************************************充值表单校验结束*********************************** */
	
	/** **************************************代理商充值开始**************************************** */
	/***************************************************************************
	 * 代理商充值页面号码长度
	 */
	function agentPhoneNumLength(type){
		if(type == "1" || type == "2" || type == "11"){
			jQuery("#PHONENUM").attr("maxlength","8");  
        }else if(type == "50" || type == "10" || type == "-1"){
        	jQuery("#PHONENUM").attr("maxlength","11");
        }else if(type == "20"){
        	jQuery("#PHONENUM").attr("maxlength","13");
        }else if(type == "30"){
        	jQuery("#PHONENUM").attr("maxlength","7");
        }else if(type == "99"){
        	jQuery("#PHONENUM").attr("maxlength","30");
        }else{
        	jQuery("#PHONENUM").attr("maxlength","20");
        }
	}
        
        
	
	
	
	/*
	 * 初始化加载页面
	 */
	function initAgentBestpayPage(){
		var orderType = jQuery("#ORDERTYPE").val();
		if(orderType == "110"){
			commonChangetype(1);
			// 初始化号码长度(默认给20长度)
			agentPhoneNumLength('');
		}else if(orderType == "112"){
			commonChangetype(3);
			var productid = jQuery("#PRODUCTID").val(); 
			// 初始化号码长度
			agentPhoneNumLength(productid);
		}else{
			commonChangetype(1);
			// 初始化号码长度(默认给25长度)
			agentPhoneNumLength('');
		}
		// 确认号码
		agentComfirmPhonenum();
	}
	
	/**
	 * 代理商地市切换
	 */
	function changeAgentCity(cityCode){
		// 显示较低高样式
		jQuery("#PHONENUM_DIV").removeClass("ptodiv");
		jQuery("#PHONENUM_DIV").removeClass("ptodiv2");
		jQuery("#PHONENUM_DIV").addClass("ptodiv");
		
		// 号码错误信息隐藏
		jQuery("#PHONENUM_PROMPT_W").css("display","none");
		
		var cityCodeId = "#A_" + cityCode;
		jQuery("#showCity").find("a").removeClass("dq_1");
		jQuery("#showCity").find("a").addClass("dq_2");
		jQuery(cityCodeId).removeClass("dq_2");
		jQuery(cityCodeId).addClass("dq_1");
		jQuery("#PAYCITYCODE").val(cityCode);
		// 地市错误信息提示
		if(!checkEmpty("PAYCITYCODE")){
			jQuery("#PAYCITYCODE_PROMPT_W").css("display","inline-block");
	 	}else{
	 		jQuery("#PAYCITYCODE_PROMPT_W").css("display","none");
	 	}
		// 确认号码地市修改
		agentComfirmPhonenum();
		jQuery(".main_bot1_a li div.div_k_t").css("width","370px");
		jQuery("#agent_A_1").click();
	}
	
	/**
	 * 充值号码错误信息提示展现样式
	 */
	function agentTypePhonenumStyle(type){
		if(type == "110" || type == "111"){
			jQuery("#PHONENUM_DIV").removeClass("ptodiv");
			jQuery("#PHONENUM_DIV").removeClass("ptodiv2");
			jQuery("#PHONENUM_DIV").addClass("ptodiv2");
			jQuery("#PHONENUM_PROMPT_W").removeClass("tishiwai");
			jQuery("#PHONENUM_PROMPT_W").removeClass("tishiwai2");
			jQuery("#PHONENUM_PROMPT_W").addClass("tishiwai");
		}else if(type == "112"){
			jQuery("#PHONENUM_DIV").removeClass("ptodiv");
			jQuery("#PHONENUM_DIV").removeClass("ptodiv2");
			jQuery("#PHONENUM_DIV").addClass("ptodiv2");
			jQuery("#PHONENUM_PROMPT_W").removeClass("tishiwai");
			jQuery("#PHONENUM_PROMPT_W").removeClass("tishiwai2");
			jQuery("#PHONENUM_PROMPT_W").addClass("tishiwai2");
		}
		
	}
	
	
	/**
	 * 代理商类型切换公共代码
	 * 
	 */
	function commonChangetype(type){
		// 值110,为空中充值账户充值;111,为电子售卡账户充值;112,为代理商网点充值
	    jQuery("#agenttype").val(type);
	    jQuery("#agent_div").find("a").removeClass("div_k_t_a");
	    jQuery("#agent_Type3").css("display","none");
	    jQuery("#confirmNum").removeClass("cz_span");
	    jQuery("#agent_spanType").removeClass("cz_span");
		var str1 = '空中充值代理商编号：';
		var str2 = "&nbsp;*&nbsp; (非绑定业务号码)";
		if(type=='1')
		{
			jQuery("#ORDERTYPE").val("110");
			str1 = '空中充值代理商编号：';
			str2 = '&nbsp;*&nbsp; 非绑定业务号码';
			jQuery("#agent_A_1").addClass("div_k_t_a");
			jQuery("span#agent_spanType").html(str1);
			jQuery("span#agent_spanType_tishi").html(str2);
			jQuery("#promptCash").css("display","none");
			jQuery("#confirmNum").addClass("cz_span");
			jQuery("#agent_spanType").addClass("cz_span");
			// 初始化号码长度(默认给20长度)
			agentPhoneNumLength('');
		}
		else if(type == '3'){
			jQuery("#ORDERTYPE").val("112");
			str1 = '绑定号码：';
			str2 =  '&nbsp;*&nbsp;指代理商网点绑定号码';
			jQuery("#agent_A_3").addClass("div_k_t_a");
			jQuery("#agent_Type3").css("display","block");
			jQuery("span#agent_spanType").html(str1);
			jQuery("span#agent_spanType_tishi").html(str2);
			jQuery("#promptCash").css("display","block");
			var productid = jQuery("#PRODUCTID").val(); 
			// 初始化号码长度
			agentPhoneNumLength(productid);
		}
		// 显示较低高样式
		jQuery("#PHONENUM_DIV").removeClass("ptodiv");
		jQuery("#PHONENUM_DIV").removeClass("ptodiv2");
		jQuery("#PHONENUM_DIV").addClass("ptodiv");
		// 号码错误信息隐藏
		jQuery("#PHONENUM_PROMPT_W").css("display","none");
		// 产品类型错误信息隐藏
		jQuery("#PRODUCTID_PROMPT_W").css("display","none");
		// 金额隐藏
		jQuery("#CASH_PROMPT_W").css("display","none");
		
	}
	
	/**
	 * 代理商类型切换
	 */
	function changetype(type)
	{  
		commonChangetype(type);
		// 类型切换,号码和确认号码清空
		jQuery("#PHONENUM").val("");
		jQuery("#numberConfirmation").html("");
	}
	
	/**
	 * 代理商网点充值产品类型切换
	 */
	function agentChangeProdId(){
		var productId = jQuery("#PRODUCTID").val();
		// 类型切换,号码和确认号码清空
		jQuery("#PHONENUM").val("");
		jQuery("#numberConfirmation").html("");
		
	}
	
	/**
	 * 代理商号码确认
	 */
	function agentComfirmPhonenum(){
		var ordertype = jQuery("#ORDERTYPE").val();
		var phonenum  = jQuery("#PHONENUM").val();
		var cityCode = jQuery("#PAYCITYCODE").val();
		if(phonenum != null && phonenum != ""){
			jQuery("span#numberConfirmation").html("");
			var tempStr ="";
			// 110,为空中充值账户充值; 111,为电子售卡账户充值
			if(ordertype == "110" || ordertype == "111"){
				// 按每4位间一空格
				tempStr += phonenum.replace(/\s/g,'').replace(/(\w{4})(?=\d)/,"$1 ").replace(/(\w{4})(?=\w)/g,"$1 ");
				jQuery("span#numberConfirmation").html(tempStr);
			// 112,为代理商网点充值
			}else if(ordertype == "112" || ordertype == "113" || ordertype == "114" || ordertype == "115"){
				// 固话,按每4位间一空格;手机,按3位+空格+每4位间一空格
				var productId = jQuery("#PRODUCTID").val();
				if(productId =="1"){
					var cityName = " ("+getCityNameByCitycode(cityCode)+") ";
					tempStr += phonenum.replace(/\s/g,'').replace(/(\w{4})(?=\d)/,"$1 ").replace(/(\w{4})(?=\w)/g,"$1 ");
					tempStr += cityName;
				}else if(productId == "50" || productId == "20" || productId == "30" || productId == "99"){
					tempStr += phonenum.replace(/\s/g,'').replace(/(\w{3})(?=\w)/,"$1 ").replace(/(\w{4})(?=\w)/g,"$1 ");
				}
				jQuery("span#numberConfirmation").html(tempStr);
			}
		}
		
	}
	
	/**
	 * ******************************************* 代理商预存[start]
	 * ***********************************************
	 */
	
	/***************************************************************************
	 * **********************代理商局部检验开始[主要是输入框的onblur事件]******************
	 **************************************************************************/
	 function checkAgentBestFormPart(type){
		 
		 var orderType = jQuery("#ORDERTYPE").val();
		 var cityCode = jQuery("#PAYCITYCODE").val();
		 
		 // 手机号码
		 if(type == "PHONENUM"){
			 	if (!checkEmpty("PHONENUM")){
					// 按钮变灰
					changeButtonGray();
					// 110,为空中充值账户充值; 111,为电子售卡账户充值;112,为代理商网点充值
					// [显示样式切换]
					agentTypePhonenumStyle(orderType);
					jQuery("#PHONENUM_PROMPT_W").css("display","block");
					jQuery("#PHONENUM_PROMPT").html("请输入充值号码");
					return false;
			 	}else{	
			 		
			 			var phonenum = jQuery("#PHONENUM").val();
			 			// 110,为空中充值账户充值; 111,为电子售卡账户充值;112,为代理商网点充值
						if(orderType == "112"){
							var productid = jQuery("#PRODUCTID").val();
							if(productid == null && productid == ""){
								// 按钮变灰
								changeButtonGray();
								jQuery("#PRODUCTID_PROMPT_W").css("display","inline-block");
								return false;
							}else{
								 if(productid == "1"){
									 if(phonenum.length < 8){
											 if(cityCode == "0591" || cityCode == "0595"){
										 			if(phonenum.length != 8){
										 				// 按钮变灰
										    			changeButtonGray();
										 		 		// [显示样式切换]
														agentTypePhonenumStyle(orderType);
														jQuery("#PHONENUM_PROMPT").html("请输入8位充值号码！");
														jQuery("#PHONENUM_PROMPT_W").css("display","block");
														return false;
										 			}
										 	}else{
										 			if(phonenum.length != 7){
										 				// 按钮变灰
										    			changeButtonGray();
										 		 		// [显示样式切换]
														agentTypePhonenumStyle(orderType);
														jQuery("#PHONENUM_PROMPT").html("请输入7位充值号码！");
														jQuery("#PHONENUM_PROMPT_W").css("display","block");
														return false;
										 			}
										 	}
									 }
								 }else if(productid == "50"){
									 if(phonenum.length < 11){
							        		// 按钮变灰
							    			changeButtonGray();
							    			// [显示样式切换]
											agentTypePhonenumStyle(orderType);
											jQuery("#PHONENUM_PROMPT_W").css("display","block");
											jQuery("#PHONENUM_PROMPT").html("请输入11位充值号码");
											return false;
									  }
								 }
							}
							
				        }
			 	}
			 	
			 	// 显示较低高样式
				jQuery("#PHONENUM_DIV").removeClass("ptodiv");
				jQuery("#PHONENUM_DIV").removeClass("ptodiv2");
				jQuery("#PHONENUM_DIV").addClass("ptodiv");
				
				// 号码错误信息隐藏
				jQuery("#PHONENUM_PROMPT_W").css("display","none");
		 }
		 
		 // 充值金额
		 if(type == "bestCash"){
			 	var bestCash = jQuery("#bestCash").val();
				// 验证金额
				if (!checkEmpty("bestCash")){
					// 按钮变灰
					changeButtonGray();
					jQuery("#promptCash").css("display","none");
			 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
			 		jQuery("#CASH_PROMPT").html("请输入充值金额");
					return false;
			 	}
				
				if (isNaN(bestCash)){
					// 按钮变灰
					changeButtonGray();
					jQuery("#promptCash").css("display","none");
			 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
			 		jQuery("#CASH_PROMPT").html("充值金额必须为数字！！！");
					return false;
				} 
				// 代理商网点充值， 金额[1000~20000]
//			 	if(orderType == "110" || orderType == "111" || orderType == "112" ||orderType == "113" || orderType == "114" || orderType == "115"){
				var lowerBalance="1000";
		 		if(orderType == "112" ||orderType == "113" || orderType == "114"){
			 		var productId = jQuery("#PRODUCTID").val();
			 		var phonenum  = jQuery("#PHONENUM").val();
					var cityCode = jQuery("#PAYCITYCODE").val();
					if(phonenum != "" || phonenum != "undefined"){
						getAgentLower(phonenum,cityCode,productId,function(rs){
							if(rs.agentLowercode=="0"){
								lowerBalance = rs.agentlowerBalance;
							}
						});
					}
			 	}
		 		if(commonValidateMoney(bestCash,lowerBalance,'20000') == "0"){
			 		// 按钮变灰
					changeButtonGray();
			 		jQuery("#promptCash").css("display","none");
			 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
			 		jQuery("#CASH_PROMPT").html("您填的充值金额格式不对！！！");
			 		return false;
			 	}else if(commonValidateMoney(bestCash,lowerBalance,'20000') == "1"){
			 		// 按钮变灰
					changeButtonGray();
			 		jQuery("#promptCash").css("display","none");
			 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
			 		jQuery("#CASH_PROMPT").html("充值金额最高为20000元");
			 		return false;
			 	}else if(commonValidateMoney(bestCash,lowerBalance,'20000') == "2"){
			 		// 按钮变灰
					changeButtonGray();
			 		jQuery("#promptCash").css("display","none");
			 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
			 		if(orderType == "112"|| orderType == "113" || orderType == "114"){
			 			alert("很抱歉，充值金额应大于"+lowerBalance+"元（您的门限值），请修改充值金额");
			 			jQuery("#CASH_PROMPT").html("充值金额必须大于您的门限值");
			 		}else{
			 			jQuery("#CASH_PROMPT").html("充值金额最低为1000元");
			 		}
			 		return false;
			 	}
//			 	}
			 	// 为空中充值账户充值|为电子售卡账户充值,金额[1~20000]
//			 	}else{
//			 		if(commonValidateMoney(bestCash,'1','20000') == "0"){
//				 		// 按钮变灰
//						changeButtonGray();
//				 		jQuery("#promptCash").css("display","none");
//				 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
//				 		jQuery("#CASH_PROMPT").html("您填的充值金额格式不对！！！");
//				 		return false;
//				 	}else if(commonValidateMoney(bestCash,'1','20000') == "1"){
//				 		// 按钮变灰
//						changeButtonGray();
//				 		jQuery("#promptCash").css("display","none");
//				 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
//				 		jQuery("#CASH_PROMPT").html("充值金额最高为20000元");
//				 		return false;
//				 	}else if(commonValidateMoney(bestCash,'1','20000') == "2"){
//				 		// 按钮变灰
//						changeButtonGray();
//				 		jQuery("#promptCash").css("display","none");
//				 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
//				 		jQuery("#CASH_PROMPT").html("充值金额最低为1元");
//				 		return false;
//				 	}
//			 	}
			 	jQuery("#CASH_PROMPT_W").css("display","none");
		 }
		 
		 // 验证码
		 if(type == "INVALIDATE_T"){
			 	var yzm = jQuery("#INVALIDATE_T_H").val();
				if(yzm == "0"){
					// 按钮变灰
					changeButtonGray();
					jQuery("#INVALIDATE_T_IMAGE").html("<img src=\"/service/pay/images/newImages/errorTishi.gif\">");
					jQuery("#INVALIDATE_T_PROMPT").html("验证码错误");
					jQuery("#INVALIDATE_T_PROMPT_W").css("display","inline-block");
					return false;
				}
		 }
		 
		 // 再调全局校验
		 checkAgentBestFormEmpty();
		 
	 }
	
	/***************************************************************************
	 * **********************代理商局部检验结束[主要是输入框的onblur事件]*****************
	 **************************************************************************/
	
	/***************************************************************************
	 * **********************代理商全局检验开始[主要是输入框的onkeyup事件***********************
	 **************************************************************************/
	
	/**
	 * 充值缴费表单上半部分公共部分空判断(用于onkeyup事件)
	 */
	function checkAgentBestFormEmpty(){
		
		var cityCode = jQuery("#PAYCITYCODE").val();
		
		if (!checkEmpty("PAYCITYCODE")){
			// 按钮变灰
			changeButtonGray();
			return false;
	 	}
		
		var orderType = jQuery("#ORDERTYPE").val();
		
		// 手机号码
	 	if (!checkEmpty("PHONENUM")){
			// 按钮变灰
			changeButtonGray();
			return false;
	 	}else{	
	 		
	 			var phonenum = jQuery("#PHONENUM").val();
	 			// 110,为空中充值账户充值; 111,为电子售卡账户充值;112,为代理商网点充值
				if(orderType == "112"){
					var productid = jQuery("#PRODUCTID").val();
					if(productid == null && productid == ""){
						// 按钮变灰
						changeButtonGray();
						return false;
					}else{
						 if(productid == "1"){
							 if(phonenum.length < 8){
									 if(cityCode == "0591" || cityCode == "0595"){
								 			if(phonenum.length != 8){
								 				// 按钮变灰
								    			changeButtonGray();
												return false;
								 			}
								 	}else{
								 			if(phonenum.length != 7){
								 				// 按钮变灰
								    			changeButtonGray();
												return false;
								 			}
								 	}
							 }
						 }else if(productid == "50"){
							 if(phonenum.length < 11){
					        		// 按钮变灰
					    			changeButtonGray();
									return false;
							  }
						 }
					}
					
		        }
	 	}
		 
		// 充值金额
	 	var bestCash = jQuery("#bestCash").val();
		// 验证金额
		if (!checkEmpty("bestCash")){
			// 按钮变灰
			changeButtonGray();
			return false;
	 	}
		
		if (isNaN(bestCash)){
			// 按钮变灰
			changeButtonGray();
			return false;
		} 
	 	
		// 代理商网点充值， 金额[1000~20000]
//	 	if(orderType == "110" || orderType == "111" || orderType == "112"  || orderType == "113" || orderType == "114" || orderType == "115"){
		var lowerBalance="1000";
 		if(orderType == "112"|| orderType == "113" || orderType == "114" ){
	 		var productId = jQuery("#PRODUCTID").val();
	 		var phonenum  = jQuery("#PHONENUM").val();
			var cityCode = jQuery("#PAYCITYCODE").val();
			if(phonenum != "" || phonenum != "undefined"){
				getAgentLower(phonenum,cityCode,productId,function(rs){
					if(rs.agentLowercode=="0"){
						lowerBalance = rs.agentlowerBalance;
					}
				});
			}
	 	}
 		if(commonValidateMoney(bestCash,lowerBalance,'20000') == "0"){
	 		// 按钮变灰
			changeButtonGray();
	 		return false;
	 	}else if(commonValidateMoney(bestCash,lowerBalance,'20000') == "1"){
	 		// 按钮变灰
			changeButtonGray();
	 		return false;
	 	}else if(commonValidateMoney(bestCash,lowerBalance,'20000') == "2"){
	 		// 按钮变灰
			changeButtonGray();
	 		return false;
	 	}
//	 	// 为空中充值账户充值|为电子售卡账户充值,金额[1~20000]
//	 	}else{
//	 		if(commonValidateMoney(bestCash,'1','20000') == "0"){
//		 		// 按钮变灰
//				changeButtonGray();
//		 		return false;
//		 	}else if(commonValidateMoney(bestCash,'1','20000') == "1"){
//		 		// 按钮变灰
//				changeButtonGray();
//		 		return false;
//		 	}else if(commonValidateMoney(bestCash,'1','20000') == "2"){
//		 		// 按钮变灰
//				changeButtonGray();
//		 		return false;
//		 	} 
//	 	}
				
		 
		 // 验证码
	 	var yzm = jQuery("#INVALIDATE_T_H").val();
		if(yzm == "0"){
			// 按钮变灰
			changeButtonGray();
			return false;
		}
		
		// 验证银行
		var bankCode = jQuery("input[name=bankid]:checked").val();

		if(bankCode == ""){
			// 按钮变灰
			changeButtonGray();
			return false;
		}
		
		// [确认无误下一步按钮点亮]
		changeButtonGreen();
		
	}
	
	/***************************************************************************
	 * **********************代理商全局检验结束[主要是输入框的onkeyup事件***********************
	 **************************************************************************/
	
	
	function changeOrderType(orderType){
		jQuery("#ORDERTYPE").val(orderType);
	}
	
	function agentbestFormSubmitNew(){
		if (!checkEmpty("PAYCITYCODE")){
			// 按钮变灰
			changeButtonGray();
			jQuery("#PAYCITYCODE_PROMPT_W").css("display","inline-block");
			jQuery("#PAYCITYCODE_PROMPT").html("请选择地市");
			return false;
	 	}
	 	var cityCode = jQuery("#PAYCITYCODE").val();
	    var citystate=jQuery("#citystate").val();
	    if(citystate.search(cityCode)!=-1){
	    	// 按钮变灰
			changeButtonGray();
	 		alert("很抱歉，您要充值的号码所在地市因系统升级改造暂时无法提供服务，给您带来不便，请你谅解！");
			return false;
	    }
	 	if (!checkEmpty("ORDERTYPE")){
	 		// 按钮变灰
			changeButtonGray();
			jQuery("#ORDERTYPE_PROMPT_W").css("display","inline-block");
			return false;
	 	}
	 	var orderType = jQuery("#ORDERTYPE").val();
	 	
		// 添加代理商网点充值，判断号码类型
		if(orderType == "112"){
			var productid = jQuery("#PRODUCTID").val();
			if(productid == null || productid == ""){
				// 按钮变灰
				changeButtonGray();
				jQuery("#PRODUCTID_PROMPT_W").css("display","inline-block");
				return false;
			}
		}
		
		// 代理商网点充值，取对应的产品类型
    	var selectType = "";
    	if(orderType == "112"){
    		selectType = jQuery("#PRODUCTID").val();
    	}
    	
	 	var agenttype = jQuery("#agenttype").val();
	 	var phoneNum = jQuery("#PHONENUM").val();
		if(phoneNum == "" || phoneNum == null){
			// 按钮变灰
			changeButtonGray();
			jQuery("#PHONENUM_PROMPT_W").css("display","block");
			jQuery("#PHONENUM_PROMPT").html("请输入充值号码");
			// 110,为空中充值账户充值; 111,为电子售卡账户充值;112,为代理商网点充值
			// [显示样式切换]
			agentTypePhonenumStyle(orderType);
			setFocus("PHONENUM");
			return false;
	 	}
		
		var flag = "";
		if((orderType == "3" || orderType == "6") && (phoneNum.indexOf("@") == -1)){
			flag = "1";
		}else if(orderType == "-1"){
			flag = "1";
		}else if(orderType == "110"){
			flag = "1";
		}else if(orderType == "111" || orderType == "113" || orderType == "114"){
			flag = "1";
		}else if(orderType == "112"){
			flag = productIfExit(cityCode,selectType,phoneNum);
		}else{
			flag = productIfExit(cityCode,orderType,phoneNum);
		}
	 
	 	 	
	 	if((orderType == "1" || orderType == "2" || orderType == "50"||orderType == "111" || orderType == "112") && phoneNum.substring(0,3) == "059"){
			// 按钮变灰
			changeButtonGray();
			jQuery("#PHONENUM_PROMPT_W").css("display","block");
			jQuery("#PHONENUM_PROMPT").html("充值号码无需加区号！");
			// [显示样式切换]
			agentTypePhonenumStyle(orderType);
			setFocus("PHONENUM");		
			return false;
		}
		
	 	
		
		if(flag != "1"){
			// alert("对不起，"+flag+"!");
			changeButtonGray();
	 		jQuery("#PHONENUM_PROMPT_W").css("display","block");
	 		jQuery("#PHONENUM_PROMPT").html("对不起，您输入的号码有误！若您的号码尚未启用，请选择产品类型为[预开通]");
	 		// [显示样式切换]
			agentTypePhonenumStyle(orderType);
			setFocus("PHONENUM");
			return false;
		}
	 	
    	
		if(cityCode == "0591" || cityCode == "0595"){
	 		if(orderType == "1" || orderType == "2" || orderType == "11" || (orderType == "112" && selectType == "1")){
	 			if(phoneNum.length != 8){
	 				// 按钮变灰
	 				changeButtonGray();
	 				jQuery("#PHONENUM_PROMPT_W").css("display","block");
	 				jQuery("#PHONENUM_PROMPT").html("请输入8位充值号码！");
	 				// [显示样式切换]
	 				agentTypePhonenumStyle(orderType);
	 				setFocus("PHONENUM");	
					return false;
	 			}
	 		}
	 	}else{
	 		if(orderType == "1" || orderType == "2" || orderType == "11" || (orderType == "112" && selectType == "1")){
	 			if(phoneNum.length != 7){
	 				// 按钮变灰
	 				changeButtonGray();
	 				jQuery("#PHONENUM_PROMPT_W").css("display","block");
	 				jQuery("#PHONENUM_PROMPT").html("请输入7位充值号码！");
	 				// [显示样式切换]
	 				agentTypePhonenumStyle(orderType);
	 				setFocus("PHONENUM");	
					return false;
	 			}
	 		}
	 	}
		
	 	if(orderType == "50" || orderType == "10" || (orderType == "112" && selectType == "50")){
	 		if(phoneNum.length != 11){
	 			// 按钮变灰
 				changeButtonGray();
 				jQuery("#PHONENUM_PROMPT_W").css("display","block");
 				jQuery("#PHONENUM_PROMPT").html("请输入11位充值号码！");
 				// [显示样式切换]
 				agentTypePhonenumStyle(orderType);
 				setFocus("PHONENUM");	
				return false;
	 		}
	 	}
		
		var reg = new RegExp(/^\d{11}$/);
		if(orderType == 50 || (orderType == "112" && selectType == "50")){
			  if(!reg.test(phoneNum)){
			   	    // 按钮变灰
	 				changeButtonGray();
	 				jQuery("#PHONENUM_PROMPT_W").css("display","block");
	 				jQuery("#PHONENUM_PROMPT").html("手机号码有误，请重新输入!!!");
	 				// [显示样式切换]
	 				agentTypePhonenumStyle(orderType);
	 				setFocus("PHONENUM");	
			   	    return false;
			  }
			  var cityc = findCity(phoneNum);
			  if(cityc!=""){
				  if(cityCode!=cityc){
						// 按钮变灰
						changeButtonGray();
						jQuery("#PAYCITYCODE_PROMPT_W").css("display","inline-block");
						jQuery("#PAYCITYCODE_PROMPT").html("您输入的手机号码地市有误，请重新输入!");
					   	setFocus("PHONENUM");
					   	return false;
				  }
			  }
		}   	 
		
		// 判断是否是一卡双号虚号码；
		if(orderType == "50" || (orderType == "112" && selectType == "50")){
			var isVir = isVirtualNum(phoneNum,cityCode,orderType);
			if(isVir!="" && isVir=="1"){
				// 按钮变灰
 				changeButtonGray();
 				jQuery("#PHONENUM_PROMPT_W").css("display","block");
 				jQuery("#PHONENUM_PROMPT").html("对不起，该号码是一卡双号虚号码，虚号码暂不允许在网厅进行自助操作！");
 				// [显示样式切换]
 				agentTypePhonenumStyle(orderType);
 				setFocus("PHONENUM");	
				return false;
			}
		}
		
		if(orderType == "1" || orderType == "2" || (orderType == "112" && selectType == "1")){
			if(cityCode == "0591" || cityCode == "0595"){
				if(phoneNum.length < 8){
					// 按钮变灰
	 				changeButtonGray();
	 				jQuery("#PHONENUM_PROMPT_W").css("display","block");
	 				jQuery("#PHONENUM_PROMPT").html("您填写的固定电话或小灵通号码不应小于8位！！！");
	 				// [显示样式切换]
	 				agentTypePhonenumStyle(orderType);
	 				setFocus("PHONENUM");	
					return false;
				}
			}else{
				if(phoneNum.length < 7){
					// 按钮变灰
	 				changeButtonGray();
	 				jQuery("#PHONENUM_PROMPT_W").css("display","block");
	 				jQuery("#PHONENUM_PROMPT").html("您填写的固定电话或小灵通号码不应小于7位！！！");
	 				// [显示样式切换]
	 				agentTypePhonenumStyle(orderType);
	 				setFocus("PHONENUM");	
					return false;
				}
			}	
			
			if(phoneNum.replace(/[\d|X|PHS]/g,'')!=""){
				// 按钮变灰
 				changeButtonGray();
 				jQuery("#PHONENUM_PROMPT_W").css("display","block");
 				jQuery("#PHONENUM_PROMPT").html("您填写的固定电话或小灵通号码格式不对！");
 				// [显示样式切换]
 				agentTypePhonenumStyle(orderType);
				setFocus("PHONENUM");
				return false;
			}
		}
		if(orderType == "3" ||orderType == "6"){
			 if(phoneNum.length < 6 ) {         
				// 按钮变灰
 				changeButtonGray();
 				jQuery("#PHONENUM_PROMPT_W").css("display","block");
 				jQuery("#PHONENUM_PROMPT").html("抱歉，系统支持的最小帐号字符长度为6位，请调整您的天翼宽带帐号位数，谢谢！！！");
 				// [显示样式切换]
 				agentTypePhonenumStyle(orderType);
				setFocus("PHONENUM");
				return false;
			 }else if(phoneNum.replace(/[\w@\.]/g,'')!=""){  
			 	// 按钮变灰
 				changeButtonGray();
 				jQuery("#PHONENUM_PROMPT_W").css("display","block");
 				jQuery("#PHONENUM_PROMPT").html("抱歉，你输入的天翼宽带帐号格式不对，只能输入@、数字与字母 ！！！");
 				// [显示样式切换]
 				agentTypePhonenumStyle(orderType);
				setFocus("PHONENUM");
				return false;
			}
		}	
		//切换广东翼支付屏蔽银行选择20140707
//		var flag = false;
//		jQuery("input[name=bankid]:checked").each(function(){
//		  	flag = true;
//		})
//	 	if(!flag){
//	 		// 按钮变灰
//			changeButtonGray();
//	 		jQuery("#BANKID_PROMPT_W").css("display","inline-block");
//			return false;
//	 	}	
//		
		var bestCash = jQuery("#bestCash").val();
	 	if(bestCash == "" || bestCash == null || bestCash.length<=0){
	 		jQuery("#promptCash").css("display","none");
	 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
	 		jQuery("#CASH_PROMPT").html("请输入正确的充值金额！！");
			setFocus("bestCash");
			return false;
	 	}
	 	if (isNaN(bestCash)){
	 		jQuery("#promptCash").css("display","none");
	 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
	 		jQuery("#CASH_PROMPT").html("充值金额必须为数字！！！");
			setFocus("bestCash");
			return false;
		} 
	 	
	 	// 代理商网点充值， 金额[1000~20000]
//	 	if(orderType == "110" || orderType == "111" || orderType == "112"  || orderType == "113" || orderType == "114" || orderType == "115"){
	 	var lowerBalance="1000";
 		if(orderType == "112" || orderType == "113" || orderType == "114" ){
	 		var productId = jQuery("#PRODUCTID").val();
	 		var phonenum  = jQuery("#PHONENUM").val();
			var cityCode = jQuery("#PAYCITYCODE").val();
			if(phonenum != "" || phonenum != "undefined"){
				getAgentLower(phonenum,cityCode,productId,function(rs){
					if(rs.agentLowercode=="0"){
						lowerBalance = rs.agentlowerBalance;
					}
				});
			}
	 	}
 		if(commonValidateMoney(bestCash,lowerBalance,'20000') == "0"){
	 		// 按钮变灰
			changeButtonGray();
	 		jQuery("#promptCash").css("display","none");
	 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
	 		jQuery("#CASH_PROMPT").html("您填的充值金额格式不对！！！");
	 		return false;
	 	}else if(commonValidateMoney(bestCash,lowerBalance,'20000') == "1"){
	 		// 按钮变灰
			changeButtonGray();
	 		jQuery("#promptCash").css("display","none");
	 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
	 		jQuery("#CASH_PROMPT").html("充值金额最高为20000元");
	 		return false;
	 	}else if(commonValidateMoney(bestCash,lowerBalance,'20000') == "2"){
	 		// 按钮变灰
			changeButtonGray();
	 		jQuery("#promptCash").css("display","none");
	 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
	 		if(orderType == "112"|| orderType == "113" || orderType == "114"){
	 			alert("很抱歉，充值金额应大于"+lowerBalance+"元（您的门限值），请修改充值金额");
	 			jQuery("#CASH_PROMPT").html("充值金额必须大于您的门限值");
	 		}else{
	 			jQuery("#CASH_PROMPT").html("充值金额最低为1000元");
	 		}
	 		return false;
	 	}
	 	// 为空中充值账户充值|为电子售卡账户充值,金额[1~20000]
//	 	}else{
//	 		if(commonValidateMoney(bestCash,'1','20000') == "0"){
//		 		// 按钮变灰
//				changeButtonGray();
//		 		jQuery("#promptCash").css("display","none");
//		 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
//		 		jQuery("#CASH_PROMPT").html("您填的充值金额格式不对！！！");
//		 		return false;
//		 	}else if(commonValidateMoney(bestCash,'1','20000') == "1"){
//		 		// 按钮变灰
//				changeButtonGray();
//		 		jQuery("#promptCash").css("display","none");
//		 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
//		 		jQuery("#CASH_PROMPT").html("充值金额最高为20000元");
//		 		return false;
//		 	}else if(commonValidateMoney(bestCash,'1','20000') == "2"){
//		 		// 按钮变灰
//				changeButtonGray();
//		 		jQuery("#promptCash").css("display","none");
//		 		jQuery("#CASH_PROMPT_W").css("display","inline-block");
//		 		jQuery("#CASH_PROMPT").html("充值金额最低为1元");
//		 		return false;
//		 	}
//	 	}
		
	    
	    var varProductId = "";
		jQuery("[name='INVALIDATE_T']").each(function(){
		  	if(jQuery(this).val().length>0){
		  		varProductId = jQuery(this).val();
		  	}
		})
	 	
		if(varProductId == ""){
	      	 // 按钮变灰
			 changeButtonGray();
	 		 jQuery("#INVALIDATE_T_PROMPT_W").css("display","inline-block");
	 		 jQuery("#INVALIDATE_T_IMAGE").html("<img  src=\"/service/pay/images/newImages/errorTishi.gif\">");
	 		 jQuery("#INVALIDATE_T_PROMPT").html("请输入验证码！！！");
	      	 setFocus("INVALIDATE_T");
	      	 return false;
	    }
	    
	    if(checkYzm(varProductId) == 1){
	    	  proof_diagram('diagram','');
	          return false;
	    }
	    // 代理商网点调用原查询余额接口(新增的代理商网点充值走余额查询接口)
	    if(orderType == "110" || orderType == "112" || orderType == "113" || orderType == "114")
	    {
	    	getPaymentBalanceForAgent('4');
		}
	    // 电子售卡调用IFI_UserMsgInfo接口
	    else if(orderType == "111")
	    {
	    	getPaymentBalanceForAgentDZK('4');
		}
	    
	    var bestPass = jQuery("#bestPass").val();
	    
	 	if(bestPass != "true"){
 			var resultMsg = jQuery("#bestResultMsg").val();
 			alert(resultMsg);
 			return false;
 		}
	 	
		var div = jQuery("#ONEP", window.top.document);//window.top.document.getElementById('ONEP');
		div.css("display","none");
		var page =jQuery("#NNNP", window.top.document);// window.top.document.getElementById("NNNP");
		div.css("display","none");
		var pageW = jQuery("#SHOWPPD", window.top.document);// window.top.document.getElementById("SHOWPPD");
		pageW.click();
	    	
        // 表单提交到确认页后验证码清空且重新拉取验证码
		jQuery("#INVALIDATE_T").val("");
		proof_diagram('diagram','');
		jQuery("#INVALIDATE_T_PROMPT_W").css("display","none");
		// 验证码隐藏域设置成0
		jQuery("#INVALIDATE_T_H").val("0");
		
		// 按钮变灰
		changeButtonGray();	
	    
	    
	}
	
	// 银联和号百充值自动调接口查询余额，判断该号码是否可以充值
	function getPaymentBalanceForAgent(payType){
		var cityCode = jQuery("#PAYCITYCODE").val();
		var prodNum = jQuery("#PHONENUM").val();
		var prodId = jQuery("#ORDERTYPE").val();
	 // (专门用于)代理商网点充值
	 	var selectType = jQuery("#ORDERTYPE").val();
		var data={ method:'getPaymentBalance',prodNum: prodNum, prodId: prodId , cityCode: cityCode, orderType: payType, isonline: "1"} ;
		if(payType == "1")jQuery("#bankPass").val("");  
		if(payType == "4")jQuery("#bestPass").val(""); 
		var path = "/PayAjaxServlet.do";
		 var result = "";
		 jQuery.ajax( {
	  		url : path,
	  		type : 'POST',
	  		dataType : 'json',
			async : false,
	  		data : data,
	  		timeout : 30000,
	  		success : function(json) 
	  		{
			  	var resultCode = json.RESULTCODE;
			  	var resultMsg = json.RESULTMSG;		  		
			  	if(payType == "1"){// 银联支付
			  		if(resultCode == "0"){
			  			jQuery("#bankPass").val("true");
			  		}	
					jQuery("#bankResultMsg").val(resultMsg);
			  	}else if(payType == "4"){// 号百支付
			  		if(resultCode == "0"){
			  		 	jQuery("#bestPass").val("true");
			  		}
					jQuery("#bestResultMsg").val(resultMsg);
			  	}
			  	getErrorMsg();
	  		},
			error : function() 
			{
		   		alert('操作超时，请稍后再试！！');
			}
	  	});
		return "";	
	}
	
	// 判断电子售卡是否可以充值
	function getPaymentBalanceForAgentDZK(payType){
		var cityCode = jQuery("#PAYCITYCODE").val();
		var prodNum = jQuery("#PHONENUM").val();
		var prodId = jQuery("#ORDERTYPE").val();
		var data={ method:'getMdsespecid',objectNum: prodNum, objectType: prodId , cityCode: cityCode} ;
		if(payType == "1")jQuery("#bankPass").val("");  
		if(payType == "4")jQuery("#bestPass").val(""); 
		var path = "/PayAjaxServlet.do";
		var result = "";
		jQuery.ajax( {
	  		url : path,
	  		type : 'POST',
	  		dataType : 'json',
			async : false,
	  		data : data,
	  		timeout : 30000,
	  		success : function(json) 
	  		{
		  	var resultCode = json.RESULTCODE;
		  	var resultMsg = json.RESULTMSG;		  		
		  	
		  	if(payType == "1"){// 银联支付
		  		if(resultCode == "0"){
		  			jQuery("#bankPass").val("true");
		  		}		  	
		  		jQuery("#bankResultMsg").val(resultMsg);
		  	}else if(payType == "4"){// 号百支付
		  		if(resultCode == "0"){
					jQuery("#bestPass").val("true");
		  		}
		  		jQuery("#bestResultMsg").val(resultMsg);	  		
		  	} 
		  	getErrorMsg();
	  		},
			error : function() 
			{
		   		alert('操作超时，请稍后再试！！');
			}
	  	});
		return "";
	}
	/**
	 * ******************************************* 代理商预存[end]
	 * ***********************************************
	 */
	/** **************************************代理商充值结束**************************************** */
	
	/**
	 * 评价系统
	 */
	function votePage(ip,url,type){
		var data={ method:'votePage',ip: ip, url: url, type: type} ;
		var path = "/PayAjaxServlet.do";
		var result = "";
		jQuery.ajax( {
	  		url : path,
	  		type : 'POST',
	  		dataType : 'json',
			async : false,
	  		data : data,
	  		timeout : 30000,
	  		success : function(json) 
	  		{
			  	if(json==null){
		  		alert("投票系统异常，请稍后再试!");	  	
		  	}else{
		  		var resultCode=	json.resultCode;
		  		if(resultCode=='-1'){
		  			alert("投票系统异常，请稍后再试!");	  
		  		}else if(resultCode=='0'){
		  			alert("您今天已投票,感谢参与!");	  
		  		}else{
		  			var sumCount=json.sumCount;
		  			alert("感谢您的参与!");	
		  			if(type==1){
		  				jQuery("#PAY_PJ_G").html(sumCount);
		  			}else if(type==0){
		  				jQuery("#PAY_PJ_N").html(sumCount);
		  			}
		  		}
		  	}  
	  		},
			error : function() 
			{
		   		alert('操作超时，请稍后再试！！');
			}
	  	});
		return "";
	}
	
	/**
	 * 推荐人登记
	 * 
	 * @return
	 */
	function referrerRigist(orderNo,city, citycode, payDate, payType, phoneAuthorName, objectNum, amount, connectType ){
		var arr = [];
		arr.push("orderNo=");
		arr.push(orderNo);
		arr.push("&citycode=");
		arr.push(citycode);
		arr.push("&payDate=");
		arr.push(encodeURI(encodeURI(payDate)));
		arr.push("&payType=");
		arr.push(payType);
		arr.push("&amount=");
		arr.push(amount);
		arr.push("&objectNum=");
		arr.push(objectNum);
		arr.push("&connectType=");
		arr.push(connectType);
		arr.push("&city=");
		arr.push(encodeURI(encodeURI(city)));
		arr.push("&phoneAuthorName=");
		arr.push(encodeURI(encodeURI(phoneAuthorName)));
		
		var prarams = arr.join("");
		var srcUrl = "<iframe src=\"/service/pay/bestpay/fr_index.jsp?"+prarams+"\" allowtransparency=\"true\" id=\"\" scrolling=\"no\" frameborder=\"0\" width=\"100%\" height=\"351px\">";
		var referrerRigistFrame = jQuery('#referrerRigistFrame').html();		
		jQuery('#referrerRigistFrame').data("html",referrerRigistFrame);		
		jQuery('#referrerRigistFrame').html("");		
		jQuery.layerSetup({ 
						 id:"referrerRigistDiv",
						 width:451, 
						 height:351,
						 content:srcUrl, 
						 isbg:true,
						 opacity:0.1,
						 templete:'<div style="width: 600px;*width:600px; height:355px;" id="@contentid@"></div>'
						}); 
		jQuery.layershow(); 
		jQuery.layerclose=layerClose20198Pay;
		jQuery(window).scrollTop(0);
		jQuery(document.body).get(0).scroll="yes";
	}
	
	function getErrorMsg(){
		jQuery.ajax( {
				url : '/ajaxServlet/getErrMsg',
				type : 'POST',
				dataType : 'json',
				cache : false,
				async : true,
				data : ( {
					method:'getErrMsg'
				}),
				timeout : 30000,
				success : function(json) 
				{
					if(json.errCode){
						alert("抱歉，系统忙，请稍后再试（"+json.errCode+"）");
					}
					
				},
			error : function() 
			{
			}
			});	 
		
	}
	
	function getAgentLower(phoneNum,cityCode,productid,callBack){
		var path = "/PayAjaxServlet.do";
		var result = "";
		var random = Math.random();
		jQuery.ajax( {
	  		url : path,
	  		type : 'POST',
	  		dataType : 'json',
	  		cache : false,
	  		async : false,
	  		data : ( {
	  			method:'getAgentLower',
	  			OBJECTNUM:phoneNum,
	  			CITYCODE:cityCode,
	  			OBJECTTYPE:productid
	  		}),
	  		timeout : 30000,
	  		success : function(json) 
	  		{
				callBack(json);
	  		},
			error : function() 
			{
		   		alert('操作超时，请稍后再试！！');
			}
	  	});
	}
	
	function changePayBank(){
		jQuery("#bankdj").hide();
		jQuery("#bankhf").hide();
		jQuery("#lastbankhf").hide();
		jQuery("#lastbankdj").hide();
		//清除选中银行
		jQuery("input[name='bankid']").removeAttr("checked"); 
		var type=jQuery("#ORDERTYPE").val();
		if(type=="10"){
			jQuery("#bankdj").show();
			jQuery("#lastbankdj").show();
		}else{		
			jQuery("#bankhf").show();
			jQuery("#lastbankhf").show();
	    }
	    checkFormEmpty();
			
	}
	function bankinit(){
		jQuery(document).find('input[name="changePayBank"]').click(function(){
			changePayBank();
		 });
	}

	
	/**
	 * 查询号码支持冲值类型
	 * @return
	 */
	function querypaytype(){
	    jQuery("#yzfview").hide();
		jQuery('input[name="changePayBank"][value=1]').attr("checked","checked");
		showhfview();
	}
	function querypaytypeold(){
		var path = "/PayAjaxServlet.do";
	 	var orderType = jQuery("#ORDERTYPE").val();
	 	var cityCode = jQuery("#PAYCITYCODE").val();
	 	var phoneNum = jQuery("#PHONENUM").val(); 	
	 	if(orderType == "50"){// 翼支付账户查询余额
	 		jQuery.ajax( {
		  		url : path,
		  		type : 'POST',
		  		dataType : 'json',
		  		cache : false,
		  		data : ( {
		  			method:'isopenyzfdj',
		  			PHONENUM:phoneNum,
		  			ORDERTYPE:orderType,
		  			CITYCODE:cityCode
		  		}),
		  		timeout : 30000,
		  		success : function(json) 
		  		{
		 			var result = json.CODE;	
		 			/*
		 			*/
		 			//result="1";
		 			jQuery("#isyzfdj").val(result);
		 			if(result=="1"){
		 				jQuery("#yzfview").hide();
		 				jQuery('input[name="changePayBank"][value=2]').attr("checked","checked");
		 				showdjview();
		 				
		 				
		 			}else if(result=="0"){
		 				jQuery("#yzfview").hide();
		 				jQuery('input[name="changePayBank"][value=1]').attr("checked","checked");
		 				showhfview();
		 			}else{
		 				jQuery('input[name="changePayBank"][value=1]').attr("checked","checked");
		 				showoldview();
		 			}

		  		},
				error : function() 
				{
		  			alert('操作超时，请稍后再试！！');
				}
		  	});
	 	}
	}
	
	function payfh(){
		jQuery('input[name="changePayBank"][value=1]').attr("checked","checked");
		changePayBank();
	}
	function paydj(){
		jQuery('input[name="changePayBank"][value=2]').attr("checked","checked");
		changePayBank();
	}
	/**
	 * 冲值到翼支付账户
	 * @return
	 */
	function showdjview(){
		
		jQuery("#bankdj").show();
		jQuery("#lastbankdj").show();
		jQuery("#bankmsg").show();

		jQuery("#otherBank").hide();
		jQuery("#bankhf").hide();
		jQuery("#lastbankhf").hide();

		jQuery("#yzfhfspan").removeClass().addClass("yzfdj-default");
		jQuery("#yzfdjspan").removeClass().addClass("yzfdj-btn-click");
		jQuery("#rechargeDiv").hide();
		jQuery("#rechargeMethod1").hide();
		if(jQuery("#woaicss_con2").css("display")!="none"){
			jQuery("#woaicss_con2").hide();
		}
		if(jQuery("#woaicss_con4").css("display")!="none"){
			jQuery("#woaicss_con4").hide();
		}
	}
	/**
	 * 冲值到话费
	 * @return
	 */
	function showhfview(){

		jQuery("#yzfdjspan").removeClass().addClass("yzfdj-default");
		jQuery("#yzfhfspan").removeClass().addClass("yzfdj-btn-click");
		jQuery("#bankdj").hide();
		jQuery("#lastbankdj").hide();
		jQuery("#otherBank").hide();
		
	
		jQuery("#bankhf").show();
		jQuery("#lastbankhf").show();
		jQuery("#bankmsg").show();
		if(jQuery("#rechargeDiv").css("display")=="none"){
			jQuery("#rechargeDiv").show();
		}
		if(jQuery("#rechargeMethod1").css("display")=="none"){
			jQuery("#rechargeMethod1").show();
		}
	}
	/**
	 * 冲值到话费(固话、宽带)
	 * @return
	 */
	function showoldview(){

		jQuery("#bankdj").hide();
		jQuery("#lastbankdj").hide();
		jQuery("#bankmsg").hide();
		jQuery("#yzfview").hide();
		
		jQuery("#otherBank").hide();
		jQuery("#bankhf").show();
		jQuery("#lastbankhf").show();
		jQuery("#bankmsg").show();
	}
	
	/**
	 * 初始化
	 * @return
	 */
	function initbankview(){
		//jQuery("#bankhf").hide();
		jQuery("#lastbankdj").hide();
		jQuery("#bankmsg").hide();

		jQuery("#otherBank").hide();
		//jQuery("#bankdj").hide();
		jQuery("#lastbankhf").hide();
		jQuery("#bankmsg").hide();
 
		jQuery("#li3m2").hide();
		
		//jQuery("#yzfview").hide();
		bankinit();
		//清除选中银行
		jQuery("input[name='bankid']").removeAttr("checked"); 
		//是否手机，，是否开通开通代缴
		var type=jQuery("#ORDERTYPE").val();
		if(type=="50"){
			var phonenum=jQuery("#PHONENUM").val();
			if(phonenum.length==11){
				//查询是否开通已支付代缴
				if(jQuery("#phonenumlast").val()!=phonenum){
					querypaytype();
				}
			}else{
				jQuery("#yzfview").hide();
			}
		}else{
			//jQuery("#yzfview").hide();
		}
	}
	
	
