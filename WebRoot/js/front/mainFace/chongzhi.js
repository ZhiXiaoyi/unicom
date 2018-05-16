// JavaScript Document
$(document).ready(function(){	
      $(document).bind("click", function (e) {  
            if($(e.target).closest("div").is("#myDiv *")||$(e.target).closest("div").is(".youhui_dh")){  
            }else{  
               $("#chongzhi_tab").show();
			   $(".tabcontent .chongzhi").hide();
            }
        }); 		
		//$(".tabcontent .chongzhi").hide();
		$("#chongzhi_tab a").hover(function(){
		    var data = $(this).attr("data-id");
			var shopId = getShopCar("SHOPID_COOKIEID");
			if(data != "broadband_c"){
				if(data == "fixedine_c" &&  shopId != '10005'){
					}else{
				$(".tabcontent #"+data).show().siblings().hide();
				if(data == "phone_c"){
					flushCodeRandom();
				}
				if(data == "flow_c"){
					flushCodeRandom2();
				}
				$("#chongzhi_tab").hide();
				}
				}
			$(".chongzhiT a").click();
		});
		$(".chongzhi_close").click(function(){
			$("#chongzhi_tab").show();
			$(".tabcontent .chongzhi").hide();
			$("#fixedine_price").hide();
		});
		$("#liuliang_titleqiehuan").click(function(){
			$(".tabcontent #flow_c").show().siblings().hide();
			$("#cardPassword").val("");
			$("#checkcode").val("");
			$("#successText").hide();
			flushCodeRandom2();
			getPassCode4();
		});
		$("#huafei_titleqiehuan").click(function(){
			$(".tabcontent #phone_c").show().siblings().hide();
			$("#liluliangPassword").val("");
			$("#checkcode2").val("");
			$("#successText2").hide();
			flushCodeRandom();
			getPassCode3();
		});
		//话费-充值卡卡密切换
		$(".chongzhiT a:first").addClass("teleon");
	    $(".textShow .textShowa:not(:first)").hide();
	    $(".chongzhiT a").hover(function(){
			$(this).addClass("teleon").siblings().removeClass("teleon");
		$(".textShow .textShowa").eq($(".chongzhiT a").index(this)).show().siblings().hide();
	    });
	    $(".chongzhiT a").click(function(){
			$(this).addClass("teleon").siblings().removeClass("teleon");
		$(".textShow .textShowa").eq($(".chongzhiT a").index(this)).show().siblings().hide();
	    });
	    //话费
        $(".pull").click(function(){
		if($(".pulldown").css("display") == "none"){
			$(".pulldown").show();
		}else{
			$(".pulldown").hide();
		}
	   });
	   $(".pulldown li").hover(function() {
	   		$(this).css('background-color', '#FFEFD6');
	  		}, function() {
	    	$(this).css('background-color', '');
	   });
	   //$(".jiner").val("10");
	   $(".pulldown li").click(function(){
	   		var price = $(this).attr("data-value");
				if(price == "其它金额"){
				$("#otherAmountID").show();
				$(".jiner").html("0.00");
				$(".pull").html(price);
			}else{
				$("#otherAmountID").hide();
				$(".jiner").html(price);
				$(".pull").html(price+"元");
				$("#successText5").hide();
				$(".jiner").html((price*currZhekou(price)).toFixed(2));
				$("#selectmoney4").text(price);
			}
		$(".pull").click();	
		});
	//固话
	$(".guhuapull").click(function(){
		if($(".guhuapulldown").css("display") == "none"){
			$(".guhuapulldown").show();
		}else{
			$(".guhuapulldown").hide();
		}
	});
	$(".guhuapulldown li").hover(function() {
	    $(this).css('background-color', '#FFEFD6');
	  }, function() {
	    $(this).css('background-color', '');
	  });
	$(".guhuapulldown li").click(function(){
		var price = $(this).attr("data-value");
		if(price == "其它金额"){
			$("#otherAmountID2").show();
			$(".guhuajiner").html("0.00");
			$(".guhuapull").html(price);
		}else{
			$("#otherAmountID2").hide();
			$(".guhuajiner").html(price);
			$(".guhuapull").html(price+"元");
			$("#successText4").hide();
		}
		$(".guhuapull").click();
	});
	//流量
	$(".pullLiuliang").click(function(){
		if($(".pulldownLiuliang").css("display") == "none"){
			$(".pulldownLiuliang").show();
		}else{
			$(".pulldownLiuliang").hide();
		}
	});
	$(".pulldownLiuliang li").hover(function() {
	    $(this).css('background-color', '#FFEFD6');
	  }, function() {
	    $(this).css('background-color', '');
	  });
	$(".pulldownLiuliang li").click(function(){
		var price = $(this).attr("value");
		var priceflow = $(this).attr("data-value");
		$(".liuliangjiner").html(priceflow);
		$(".pullLiuliang").html(price+"M");
		$(".pullLiuliang").click();
	});
	$("#areaCodeUl").hide();
	$("#fromcity").bind('input propertychange', function(){
		var areacodeto = ACODE.getAreaCodeLetter($("#fromcity").val());
		if(ACODE.isEmpty(areacodeto)){
			areacodeto = ACODE.getAreaCodeSpelling($("#fromcity").val());
			if(ACODE.isEmpty(areacodeto)){
				areacodeto = ACODE.getAreaCodeTheName($("#fromcity").val());
			}
		}
		var ahtml = "";
		var code = "";
		$('#areaCodeUl').empty();
		$("#areaCodeUl").hide();
		for(var i in areacodeto){
			$('#areaCodeUl').append("<li class='areacode_li' onclick=getareacode('" + areacodeto[i].areaCode + "','" + areacodeto[i].theName + "','" + areacodeto[i].code + "') onMousemove=javascript:this.style.background='#FFEFD6' onmouseout=javascript:this.style.background='#FFFFFF'>" + areacodeto[i].theName + "</li>");
			$("#areaCodeUl").show();
			$("#returnLandPhone").hide();
        }
		if(areacodeto.length <= 0 && $("#fromcity").val()!=""){
			$('#areaCodeUl').empty();
			$('#areaCodeUl').append("<li class='areacode_li'><font color='#ff6600'>对不起找不到该城市</font></li>");
			$("#areaCodeUl").show();
		}
	});
	
	$(".areacode_li").hover(function(){
		$(this).addClass("areacode_color");
	});
	
});
$(function(){
	 //到期隐藏98折图片
	if(!isPassStartTime_98()||isPassEndTime_98())	$(".passTimeHidden").hide();
    });
	
	function currZhekou(currVal){
		//if(currVal<50) return 1.00;
		if(isPassStartTime_98()&&!isPassEndTime_98()) return 0.98;
		else return 1.00;
	}
	function isPassStartTime_98(){
		var StartTime_98 = '2015/01/01 00:00:00';
		return isPassTime(StartTime_98);
	}	
	function isPassEndTime_98(){
		var EndTime_98 = '2015/06/30 23:59:59';
		return isPassTime(EndTime_98);
	}	
	function isPassTime(relativeTime){
		var endDate=new Date(relativeTime);  //必须转化为2008/04/02 10:08:44格式才能实例化Date对象
		//alert(endDate);
		var myDate = new Date();
		//alert(myDate);
		var isPassEndTime = myDate>endDate;
		//alert(isPassEndTime);
		return isPassEndTime;
	}

function getareacode(org,org2,org3){
	$("#fromcity").val(org2);
	$("#inputgetstate").val(org);
	$("#proviceCode").val(org3);
	$("#areaCodeUl").hide();
}

function getPassCode(isFlag){
	document.getElementById('code_img').src = '' ;
	document.getElementById('code_img').src = '/dqmh/createCheckCode.do?method=checkcode4&date='+new Date().getTime()+'&isFlag='+isFlag ;
}
//trade项目重构需要的验证码
function getNewPassCode(isFlag){
	if(isFlag=="0"){
		document.getElementById('code_img').src = '' ;
		document.getElementById('code_img').src = '/portal/captcha/chinese.do?date='+new Date().getTime();
	}else{
		document.getElementById('code_img').src = '' ;
		document.getElementById('code_img').src = '/portal/captcha/simple.do?date='+new Date().getTime();
	}
	
}
function getPassCode2(isFlag){
	document.getElementById('code_img2').src = '' ;
	document.getElementById('code_img2').src = '/dqmh/createCheckCode.do?method=checkcode4&date='+new Date().getTime()+'&isFlag='+isFlag ;
}
//trade项目重构需要的验证码
function getNewPassCode2(isFlag){
	if(isFlag=="0"){
		document.getElementById('code_img2').src = '' ;
		document.getElementById('code_img2').src = '/portal/captcha/chinese.do?date='+new Date().getTime();
	}else{
		document.getElementById('code_img2').src = '' ;
		document.getElementById('code_img2').src = '/portal/captcha/simple.do?date='+new Date().getTime();
	}
}
function getPassCode3(){
	if(document.getElementById('code_img3')) {
		document.getElementById('code_img3').src = '' ;
		document.getElementById('code_img3').src = '/dqmh/createCheckCode.do?method=checkcode5&date='+new Date().getTime() ;
	}
}
function getPassCode4(){
	document.getElementById('code_img4').src = '' ;
	document.getElementById('code_img4').src = '/dqmh/createCheckCode.do?method=checkcode5&date='+new Date().getTime() ;
}
function getShopCar(name) {
	var cookieString = document.cookie;
	if (cookieString == "") {
		return false;
	} else {
		var firstChar, lastChar;
		firstChar = cookieString.indexOf(name);
		if (firstChar != -1) {
			firstChar += name.length + 1;
			lastChar = cookieString.indexOf(";", firstChar);
			if (lastChar == -1) {
				lastChar = cookieString.length;
			}
			return cookieString.substring(firstChar, lastChar);
		} else {
			return false;
		}
	}
}
function flushCodeRandom() {
		var isFlag = "";
		var provinceCodeVal = $("#provinceCode").val();
		if(provinceCodeVal!=null && provinceCodeVal=="600101"){
			//0代表归属地为广东省的手机号码
			isFlag = "0";
		}else{
			isFlag = "1";
		}
		getNewPassCode(isFlag);
}
function flushCodeRandom2() {
		var isFlag = "";
		var provinceCodeVal = $("#provinceCodeTwo").val();
		if(provinceCodeVal!=null && provinceCodeVal=="600101"){
			//0代表归属地为广东省的手机号码
			isFlag = "0";
		}else{
			isFlag = "1";
		}
		getNewPassCode2(isFlag);
}