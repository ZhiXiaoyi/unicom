/**
 *  首页手机话费充值(bank、card)、手机流量充值(flowBank、flowCard)、固话充值(fixedBank)
 */

/**
 *  首页手机话费银行卡充值(bank)
 */
function goToBankPay(){
	var amountVal = $("#selectmoney").text();//获取下拉框金额
	
	//第一步：判断手机号是否为空
	if(!checkPhoneIsNotNull()){
		return  ;
	}
	//第二步：判断手机号是否正确
	if(!checkIsPhone()){
		return  ;
	}
	
	//第三步:判断下拉框所选金额
	if(amountVal == "0"){
		var isAmount = setOtherAmount();
		if(!isAmount){
			return  ;
		}
	}
	
	if(amountVal == "0"){
		if(checkPhoneIsNotNull()&&checkIsPhone()&&isAmount){
			validatorPhoneNumberBank();
		}
	}
	//第四步:提交并生成手机话费银行卡充值订单
	if(checkPhoneIsNotNull()&&checkIsPhone()){
		createBankOrder();
	}
}
	/**
	 *  首页手机话费卡密充值(card)
	 */
	function goToCardPay(){
		//第一步：判断手机号是否为空
		if(!checkPhoneIsNotNull1()){
			return  ;
		}
		//第二步：判断手机号是否正确
		if(!checkIsPhone1()){
			return  ;
		}
		//第三步：判断充值卡卡密
		if(!validatorCardPassword("cardPassword")){
			return  ;
		}
		//第四步：判断验证码是否正确
		if(!checkCodeIsNotNull("checkcode")){
			return  ;
		}
		//第五步：提交并生成手机话费卡密充值订单
		if(checkPhoneIsNotNull1()&&
		   checkIsPhone1()&&
		   validatorCardPassword("cardPassword")&&
		   checkCodeIsNotNull("checkcode")){
		   createCardOrder();
		}
	}
	
	/**
	 *  首页手机流量银行卡充值(flowBank)
	 */
	function goToFlowBankPay(){
		
		//第一步：判断手机号是否为空
		if(!checkPhoneIsNotNull2()){
			return  ;
		}
		//第二步：判断手机号是否正确
		if(!checkIsPhone2()){
			return  ;
		}
		//第三步：提交并生成手机流量银行卡充值订单
		if(checkPhoneIsNotNull2()&&checkIsPhone2()){
			createFlowBankOrder();
		}
	}
	
	/**
	 *  首页手机流量卡密充值(flowCard)
	 */
	function goToFlowCardPay(){
		//第一步：判断手机号是否为空
		if(!checkPhoneIsNotNull3()){
			return  ;
		}
		//第二步：判断手机号是否正确
		if(!checkIsPhone3()){
			return  ;
		}
		//第三步：判断充值卡卡密
		if(!validatorCardPassword("liluliangPassword")){
			return  ;
		}
		//第四步：判断验证码是否正确
		if(!checkCodeIsNotNull("checkcode2")){
			return  ;
		}
		//第五步：提交并生成手机流量卡密充值订单
		if(checkPhoneIsNotNull3()&&checkIsPhone3()&&
		   validatorCardPassword("liluliangPassword")&&
		   checkCodeIsNotNull("checkcode2")){
		   createFlowCardOrder();
		}
	}
	
	
	/**
	 *  首页固话充值(fixedBank)
	 */
	function goToFixedBankPay(){
		
		//第一步：检查城市输入是否为空
		if(!checkIsCityNotNull()){
			return  ;
		}
		
		//第二步：判断固话号码是否为空
		if(!checkPhoneIsNotNull4){
			return  ;
		}
		//第三步：判断固话号码是否正确
		if(!checkIsTelNum()){
			return  ;
		}
		//第四步：检查所选金额
		var amountVal = $("#selectmoney3").text();
		if(amountVal == "0"){
			if(!setOtherAmount2()){
				return  ;
			}
		}
		
		if(amountVal == "0"){
			if(checkIsCityNotNull()&&checkPhoneIsNotNull4()&&setOtherAmount2()&&checkIsTelNum()){
				createFixedBankOrder();
			}
		}
		
		//第五步：提交并生成固话充值订单
		if(checkIsCityNotNull()&&checkPhoneIsNotNull4()&&checkIsTelNum()){
			createFixedBankOrder();
		}
	}
	
	
	
	
	/**
	 * 提交并生成手机话费银行卡充值订单
	 */
	function createBankOrder(){
		var url = "/trade/recharge/bank.do";
		var accountNumber = $("#phoneNumber").val();
		var payAmount = $("#selectmoney4").text();
		var params = {
			accountNumber : accountNumber,
			payAmount : payAmount
		};
		$.post(url, params, function(data) {
			if(data.code=="0"){
				var orderId = data.dataObject.orderId;
				window.location.href = "/trade/pay/init.do?orderId="+orderId;
//				$("#submitRecharge").unbind('click').click(function(){ goToBankPay();});
				$("#submitRecharge").attr("onclick", "");// 防止重复提交。
			}else{
				$("#successText5").show();
				$("#successText5").html("手机话费银行卡异常");
				usererror();
			}
			
		});
	}
	
	/**
	 * 提交并生成手机话费卡密充值订单
	 */
	function createCardOrder(){
		var url = "/trade/recharge/card.do";
		var accountNumber = $("#accountNumber").val();//手机号
		var cardPwd = $("#cardPassword").val();       //卡密
		var checkPassCode = $("#checkcode").val();    //验证码
		var params = {
			accountNumber : accountNumber,
			cardPwd : cardPwd,
			checkPassCode : checkPassCode
		};
		$.post(url, params, function(data) {
			if(data.code=="0"){
//				var msg = data.dataObject.msg;
				$("#successText").show();
				$("#successText").html("卡密充值成功");
				usererror();
				$("#checkcode").val("");
//				$("#submitRechargeId").unbind('click').click(function(){ goToCardPay();});
				$("#submitRechargeId").attr("onclick", "");// 防止重复提交。
//			}
//			else if(data.code=="123"){
//				$("#successText").show();
//				$("#successText").html("卡已经被使用");
//				usererror();
//				$("#checkcode").val("");
			}else if(data.errorDescription=="验证码输入有误"){
				$("#successText").show();
				$("#successText").html("验证码输入有误");
				usererror();
				$("#checkcode").val("");
			}else{
				$("#successText").show();
				$("#successText").html("卡密充值异常");
				usererror();
				$("#checkcode").val("");
			}
			flushCodeRandom();

		});
	}
	
	/**
	 * 提交并生成手机流量银行卡充值订单
	 */
	function createFlowBankOrder(){
		var url = "/trade/recharge/bank/flow.do";
		var accountNumber = $("#liuliangPhone").val();
		var payAmount = $("#selectmoney2").text();// 售价
		var params = {
			accountNumber : accountNumber,
			payAmount : payAmount
		};
		$.post(url, params, function(data) {
			if(data.code=="0"){
				var orderId = data.dataObject.orderId;
				window.location.href = "/trade/pay/init.do?orderId="+orderId;
//				$("#submitRecharge3").unbind('click').click(function(){ goToFlowBankPay();});
				$("#submitRecharge3").attr("onclick", "");// 防止重复提交。
			}else{
				$("#successText3").show();
				$("#successText3").html("手机流量银行卡充值异常");
				usererror();
			}
			
		});
	}
	
	
	/**
	 * 提交并生成手机流量卡密充值订单
	 */
	function createFlowCardOrder(){
		var url = "/trade/recharge/card/flow.do";
		var accountNumber = $("#liluliangNumber").val();
		var cardPwd       = $("#liluliangPassword").val();
		var checkPassCode = $("#checkcode2").val();
		var params = {
			accountNumber : accountNumber,
			cardPwd : cardPwd,
			checkPassCode : checkPassCode
		};
		$.post(url, params, function(data) {
			if(data.code=="0"){
//				var msg = data.dataObject.msg;
				$("#successText2").show();
				$("#successText2").html("卡密充值成功");
				usererror();
				$("#checkcode2").val("");
				$("#submitLiuliang").attr("onclick", "");// 防止重复提交
//			}else if(data.code=="123"){
//				$("#successText2").show();
//				$("#successText2").html("卡已经被使用");
//				usererror();
//				$("#checkcode2").val("");
			}else if(data.errorDescription=="验证码输入有误"){
				$("#successText2").show();
				$("#successText2").html("验证码输入有误");
				usererror();
				$("#checkcode").val("");
			}else{
				$("#successText2").show();
				$("#successText2").html("卡密充值异常");
				usererror();
				$("#checkcode2").val("");
			}
			flushCodeRandom2();

		});
	}
	
	/**
	 * 提交并生成固话充值订单
	 */
	function createFixedBankOrder(){
		var account = $("#inputgetstate").val()+$("#landlinePhoneNumber").val();
		var payAmount = $("#selectmoney3").text();
		var provinceCode = $("#proviceCode").val();
		var areaCode = $("#inputgetstate").val();
		 	var url = "/trade/recharge/bank/fixed.do";
		    var params = {
		    	account:account,
		    	payAmount:payAmount,
		    	provinceCode:provinceCode,
		    	areaCode:areaCode
		    };
		    $.post(url,params,function(data){
		    	if(data.code=="0"){
		    		var orderId = data.dataObject.orderId;
					window.location.href ="/trade/pay/init.do?orderId="+orderId; 
					$("#landLineId").attr("onclick", "");// 防止重复提交。
		    	}else{
		    		 $("#successText4").show();
			   	 	 $("#successText4").html("固话充值异常");
			   	 	 usererror();
		    	}
		      	 
		    });
	}
	
	
	
	
	/**
	 * 检查手机号是否为空
	 */
	function checkPhoneIsNotNull(){
		var phoneNumber = document.getElementById("phoneNumber").value;
		if(phoneNumber == null || phoneNumber == "") {
			$("#returnPhoneNumber").show();
			$("#returnPhoneNumber").text("请输入手机号！");
			$("#successText5").hide();
			return false;
		}else{
			$("#returnPhoneNumber").hide();
		}
		return true ;
	}
	function checkPhoneIsNotNull1(){
		var accountNumber = document.getElementById('accountNumber').value;
		if(accountNumber == null || accountNumber == "") {
			$("#returnAccountNumber").show();
			$("#returnAccountNumber").text("请输入手机号！");
			$("#successText").hide();
			return false;
		}else{
			$("#returnAccountNumber").hide();
		}
		return true ;
	}
	
	
	function checkPhoneIsNotNull2(){
		var accountNumber = document.getElementById('liuliangPhone').value;
		if(accountNumber == null || accountNumber == "") {
			$("#returnliluliangPhone").show();
			$("#returnliluliangPhone").text("请输入手机号！");
			$("#successText3").hide();
			return false;
		}else{
			$("#returnliluliangPhone").hide();
		}
		return true ;
	}
	function checkPhoneIsNotNull3(){
		var accountNumber = document.getElementById('liluliangNumber').value;
		if(accountNumber == null || accountNumber == "") {
			$("#returnliluliangAccountNumber").show();
			$("#returnliluliangAccountNumber").text("请输入手机号！");
			$("#successText2").hide();
			return false;
		}else{
			$("#returnliluliangAccountNumber").hide();
		}
		return true ;
	}
	function checkPhoneIsNotNull4(){
		var accountNumber = document.getElementById('landlinePhoneNumber').value;
		if(accountNumber == null || accountNumber == "") {
			$("#returnLandlinePhoneNumber").show();
			$("#returnLandlinePhoneNumber").text("请输入固话号码！");
			$("#successText4").hide();
			return false;
		}else{
			$("#returnLandlinePhoneNumber").hide();
		}
		return true ;
	}
	/**
	 *验证方法
	 */
	var Validator = {
			//电话号
			isTelNum:function(s){
				return this.test(s,"\\d{7,8}");
			},
			//手机号码验证
			isPhone : function (s) {
				return this.test(s,"^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\\d{8}$");
			},
			test : function(s, p) {
				s = s.nodeType == 1 ? s.value : s;

				return s == '' || new RegExp(p).test(s);
			}
		}
	
	/**
	 * 检查手机号是否正确(bank)
	 */
	function checkIsPhone(){
		if(!Validator.isPhone($("#phoneNumber").val())){
			$("#returnPhoneNumber").show();
			$("#returnPhoneNumber").text("请填写正确的手机号！");
			$("#successText5").hide();
			return false;
		}else{
			$("#returnPhoneNumber").hide();
		}
		return true;
	}
	/**
	 * 检查手机号是否正确(bankCard)
	 */
	function checkIsPhone1(){
		if(!Validator.isPhone($("#accountNumber").val())){
			$("#returnAccountNumber").show();
			//$("#accountNumber").val("");
			$("#returnAccountNumber").text("请填写正确的手机号！");
			$("#successText").hide();
			return false;
		}else{
			$("#returnAccountNumber").hide();
		}
		return true;
	}
	
	
	function checkIsPhone2(){
		if(!Validator.isPhone($("#liuliangPhone").val())){
			$("#returnliluliangPhone").show();
			//$("#liuliangPhone").val("");
			$("#returnliluliangPhone").text("请填写正确的手机号！");
			$("#successText3").hide();
			return false;
		}else{
			$("#returnliluliangPhone").hide();
		}
		return true;
	}
	function checkIsPhone3(){
		if(!Validator.isPhone($("#liluliangNumber").val())){
			$("#returnliluliangAccountNumber").show();
			$("#returnliluliangAccountNumber").text("请填写正确的手机号！");
			$("#successText2").hide();
			return false;
		}else{
			$("#returnliluliangAccountNumber").hide();
		}
		return true;
	}
	function checkIsTelNum(){
		if(!Validator.isTelNum($("#landlinePhoneNumber").val())){
			$("#returnLandlinePhoneNumber").show();
			$("#returnLandlinePhoneNumber").text("请填写正确的固话号码！");
			$("#successText4").hide();
			return false;
		}else{
			$("#returnLandlinePhoneNumber").hide();
		}
		return true;
	}
	//验证失去焦点事件(bank)
	function checkPhoneNumber(){
		checkPhoneIsNotNull("phoneNumber");
	}
	//验证失去焦点事件(card)
	function checkAccountNumber(){
		checkPhoneIsNotNull1();
		queryPhoneNumberAccount("accountNumber");
	}
	
	//验证失去焦点事件(flowBank)
	function check2(){
		checkPhoneIsNotNull2();
	}
	//验证失去焦点事件(flowCard)
	function check(){
		checkPhoneIsNotNull3();
		queryPhoneNumberAccount("liluliangNumber");
	}
	
	//验证失去焦点事件(fixed)
	function checkIsNotNull5(){
		checkPhoneIsNotNull4();
	}
	//验证归属地获取相应的验证码（广东是中文其他是英文）
	function queryPhoneNumberAccount(id) {//accountNumber liluliangNumber
		var phoneNumber = $("#"+id).val();
		var url = "/trade/recharge/captcha/type.do";
		if(phoneNumber!=""){
			$.post(url, {
				phone : phoneNumber
			}, function(data) {
				/**
				if(id=="accountNumber"){
					if(data.code!='0'){
						document.getElementById('code_img').src = '' ;
						document.getElementById('code_img').src = '/portal/captcha/chinese.do?date='+new Date().getTime();
						$("#provinceCode").val("600101");
					}else{
						document.getElementById('code_img').src = '' ;
						document.getElementById('code_img').src = '/portal/captcha/simple.do?date='+new Date().getTime();
						$("#provinceCode").val("");
					}
				}else{
					if(data.code!='0'){
						document.getElementById('code_img2').src = '' ;
						document.getElementById('code_img2').src = '/portal/captcha/chinese.do?date='+new Date().getTime();
						$("#provinceCodeTwo").val("600101");
					}else{
						document.getElementById('code_img2').src = '' ;
						document.getElementById('code_img2').src = '/portal/captcha/simple.do?date='+new Date().getTime();
						$("#provinceCodeTwo").val("");
					}
				}
				*/
				
				
		});
		}
		
	}
	/**
	 * 充值卡卡密校验
	 */
	function validatorCardPassword(id) {//cardPassword  liluliangPassword
		var regpassWord = /^\d{18}$/;
		if (!regpassWord.test($("#"+id).val())) {
			if(id=="cardPassword"){
				$("#returnCardPWD").show();
				$("#returnCardPWD").text("请填写18位充值卡密码！");
				$("#successText").hide();
			}else if(id=="liluliangPassword"){
				$("#returnCardPassword").show();
				$("#returnCardPassword").text("请填写18位充值卡密码！");
				$("#successText2").hide();
			}
			return false;
		}else{
			if(id=="cardPassword"){
				$("#returnCardPWD").hide();
			}else if(id=="liluliangPassword"){
				$("#returnCardPassword").hide();
			}
			return true ;
		}
	}
	/**
	 * 检查验证码是否为空
	 */
	function checkCodeIsNotNull(id){//checkcode  checkcode2
		var isNN = true ;
		var checkcode = document.getElementById(id).value;
		if(checkcode == null || checkcode == "") {
			if(id=="checkcode"){
				$("#successText").show();
				$("#successText").text("请输入验证码！");
			}else if(id=="checkcode2"){
				$("#successText2").show();
				$("#successText2").text("请输入验证码！");
			}
			usererror();
			isNN = false;
		}
		return isNN ;
	}
	
	/**
	 * 检查城市输入是否为空
	 */
	function checkIsCityNotNull(){
		var fromcity = document.getElementById('fromcity').value;
		if(fromcity == null || fromcity == "") {
			$("#returnLandPhone").show();
			$("#returnLandPhone").html("请输入城市！");
			$("#successText4").hide();
			return false;
		}else{
			$("#returnLandPhone").hide();
		}
		return true ;
	}
	
	/**
	 * 判断下拉框所选金额 
	 */
	function setOtherAmount() {
		var amount = $.trim($("#otherAmount").val());
		if (amount == '') {
			$("#selectmoney").text('0');
			$("#selectmoney4").text('0');
			$("#successText5").show();
			$("#successText5").text('请输入充值金额！');
			usererror();
			return false;
		}
		if (!/^[+|-]?\d+\.?\d*$/.test(amount) && amount != '') {
			$("#selectmoney").text('0');
			$("#selectmoney4").text('0');
			$("#successText5").show();
			$("#successText5").text('请输入数字！');
			usererror();
			return false;
		}
		if (amount != '' && amount < 5) {
			$("#selectmoney").text('0');
			$("#selectmoney4").text('0');
			$("#successText5").show();
			$("#successText5").text('充值金额不能低于5元！');
			usererror();
			return false;
		}
		if (amount != '' && amount > 500) {
			$("#selectmoney").text('0');
			$("#selectmoney4").text('0');
			$("#successText5").show();
			$("#successText5").text('充值金额不能高于500元！');
			usererror();
			return false;
		}
		if (!IsInteger(amount)) {
			$("#selectmoney").text('0');
			$("#selectmoney4").text('0');
			$("#successText5").show();
			$("#successText5").text('充值金额必须为整数！');
			usererror();
			return false;
		}
		$("#successText5").hide();
		$("#successText5").text('');
		$("#landAmountPhone").val($("#otherAmount").val());
		$("#selectmoney4").text(amount); 
		$("#selectmoney").text((amount*(currZhekou(amount))).toFixed(2)); 
		return true;
	}
	
	function setOtherAmount2() {
		var amount = $.trim($("#otherAmount2").val());
		if (amount == '') {
			$("#selectmoney3").text('0');
			$("#successText4").show();
			$("#successText4").text('请输入充值金额！');
			usererror();
			return false;
		}
		if (!/^[+|-]?\d+\.?\d*$/.test(amount) && amount != '') {
			$("#selectmoney3").text('0');
			$("#successText4").show();
			$("#successText4").text('请输入数字！');
			usererror();
			return false;
		}
		if (amount != '' && amount < 5) {
			$("#selectmoney3").text('0');
			$("#successText4").show();
			$("#successText4").text('充值金额不能低于5元！');
			usererror();
			return false;
		}
		if (amount != '' && amount > 500) {
			$("#selectmoney3").text('0');
			$("#successText4").show();
			$("#successText4").text('充值金额不能高于500元！');
			usererror();
			return false;
		}
		if (!IsInteger(amount)) {
			$("#selectmoney3").text('0');
			$("#successText4").show();
			$("#successText4").text('充值金额必须为整数！');
			usererror();
			return false;
		}
		$("#successText4").hide();
		$("#successText4").text('');
		$("#selectmoney3").text(amount); 
		return true;
	}
	function onKeyUp(str){
		$("#"+str).keyup(function() {
			$("#"+str).val($("#"+str).val().replace(/[ ]/g,""));
		});
	}
	
	
	
	
