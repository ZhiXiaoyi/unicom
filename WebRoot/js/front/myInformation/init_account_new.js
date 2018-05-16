function updateInfo(type, flag) {
	if ('${user.userId}' == '' || '${user.userId}' == undefined) {
		alert("您尚未登录，请先登录");
		window.location.href = "userLogin/toLogin";
		return false;
	}
	if (type == 1) {

		$("#upTip1_2").hide();
		$("#upTip_error1_2").hide();
		if ($("#phoneNumber").val() == "请填写手机信息")
			$("#phoneNumber").val("");
		if (checkInfo(1)) {
			$.ajax({
				cache : true,
				type : "POST",
				url : "starUpdateUser/updateUser",
				data : $("#personalInfo").serialize(),// 你的formid
				async : false,
				error : function(request) {
					$("#upTip_error1_2").text("保存失败,邮箱或手机号或身份信息有误重复").show();
				},
				success : function(data) {
					var msg = data;
					if (msg.message == '0') {
						window.parent.parent.open("iframes/toNewMyInformation", '_self');
						// window.location.reload();
						$("#upTip1_2").text("提交成功").show();

					} else {
						$("#upTip_error1_2").text("保存失败,邮箱已存在").show();
					}
				}
			});

			// AjaxUtils.sendAjaxJson("userRegister/updateUser",$("#personalInfo").serialize(),
			// function(msg){
			// alert(1);
			// alert(msg);
			// if(msg.message == '0'){
			// $("#upTip1_2").text("提交成功").show();
			// //更新头像位置的昵称
			// var nick_name = $.trim($("input[name='nickName']").val());
			// var parent_nname = $.trim($("#xiugai
			// input[type='text']",window.parent.document).val());
			// }else{
			// $("#upTip_error1_2").text("保存失败").show();
			// }
			// },
			// function(){
			// alert("error");
			// }
			// );
		}
	}
}

function callback(date) {
	if (date.code == 0) {
		alert("保存成功");
		document.location.reload();
	} else if (date.code == 1) {
		alert("保存失败");
	} else {
		alert(date.errorMsg);
	}
}
function checkInfo(type) {
	if (type == 1) {
		var nick_name_v = $.trim($("input[name='nickName']").val());
		var nick_nm_flag = checkNickName(nick_name_v);
		if (!nick_nm_flag) {
			return false;
		}
		if ($.trim($("input[name='realName']").val()) != ""
				&& $.trim($("input[name='realName']").val()) != "请填写真实姓名") {
			if (Validator.isNumber($.trim($("input[name='realName']").val()))
					|| Validator.isByte($.trim($("input[name='realName']")
							.val()))
					|| $("input[name='realName']").val().length < 2
					|| $("input[name='realName']").val().length > 20) {
				$("#upTip_error1_2").text("请填写正确的真实姓名！").show();
				return false;
			}
		} else {
			$("#upTip_error1_2").text("请填写真实姓名！").show();
			return false;
		}
		if ($.trim($("#phoneNumber").val()) != "") {
			if (!Validator.isPhone($.trim($("#phoneNumber").val()))) {
				$("#upTip_error1_2").text("请填写正确的手机号码！").show();
				return false;
			}
		} else {
			$("#upTip_error1_2").text("请填写手机号码！").show();
			return false;
		}
		if ($.trim($("input[name='certificateNumber']").val()) != "") {
			if (!Validator.isIdCard($.trim($("input[name='certificateNumber']")
					.val()))) {
				$("#upTip_error1_2").text("请填写正确的身份证号码！").show();
				return false;
			}
		} else {
			$("#upTip_error1_2").text("请填写身份证号码！").show();
			return false;
		}
		var nowUserEmail = $.trim($("input[name='userEmail']").val());

		if (nowUserEmail != "") {
			// $.ajax({
			// cache : true,
			// type : "POST",
			// url :
			// "starUpdateUser/isUserExisted?nowUserEmail="+nowUserEmail+"",
			// // data : nowUserEmail,// 邮箱
			// async : false,
			// error : function(data) {
			// alert(data.isUserExisted);
			// $("#upTip_error1_2").text("请填写邮箱！").show();
			// return false;
			// },
			// success : function(data) {
			// alert(2);
			// if(data.isUserExisted=="0"){
			// $("#upTip_error1_2").text("该邮箱已经存在！").show();
			// return false;
			// }
			// }
			// });
			//			

		} else {

			$("#upTip_error1_2").text("请填写邮箱！").show();
			return false;
		}

		if ($.trim($("#address").val()) != "") {
			if ($("#address").val().length < 4
					|| $("#address").val().length > 60) {
				$("#upTip_error1_2").text("请将详细地址控制在4-60个字符之间").show();
				return false;
			}
		} else {
			$("#upTip_error1_2").text("请填写详细地址！").show();
			return false;
		}

	}
	return true;
}
// //获取光标清楚所有验证
// function removalPrompt(inputId){
// if(inputId =='linePhoneNumberTd'){
// $("#" + inputId +" .info").text("格式：XXX-XXXXXXX或XXX-XXXXXXXX");
// }else{
// $("#" + inputId +" .info").text("");
// }
// }

function checkNickName(nick_name_v) {
	var checkteshu = "[`~!@#$^&*()=|{}':;',\\[\\].+<>/?%~！@#￥……&*（）|{}【】‘；：”“\"'。，、？＂，．^\\s*]";
	if (nick_name_v != "") {
		if (Validator.isNumber(nick_name_v)) {
			$("#upTip_error1_2").text("昵称不能使用纯数字，请检查后重新设置！").show();
			return false;
		} else if (!RegExp(checkteshu).test(nick_name_v)
				&& (nick_name_v.length < 4 || nick_name_v.length > 20)) {
			$("#upTip_error1_2").text("请设置长度在4-20个字符之间的昵称！").show();
			return false;
		}
	} else {
		$("#upTip_error1_2").text("请设置您的昵称！").show();
		return false;
	}
	return true;
}