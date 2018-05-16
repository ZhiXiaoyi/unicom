//支付界面
function checkPhone() {
	var phone = document.getElementById("online_recharge_phone");// 获得手机号码
	var ret = /^[1-9]{1}[0-9]{10}$/;// 11位数字第一位不为0
	if (ret.exec(phone.value) == null) {
		phone.setCustomValidity("手机号码不合法！！！");
	} else {
		phone.setCustomValidity('');
	}
}

function checkOther() {
	var other = document.getElementById("other");// 获得充值的其他金额
	var ret = /^\d{0,3}$/;
	if (ret.exec(other.value)) {
		other.setCustomValidity('');
	} else {
		other.setCustomValidity("输入的金额有误！！！");	
	}
}


/* 验证手机号码 */
function checkPhoneNumber() {
	var phonenumber = document.getElementById("phone");// 获得手机号码
	var ret = /^[1-9]{1}[0-9]{10}$/;// 11位数字第一位不为0
	if (ret.exec(phonenumber.value) == null) {
		phonenumber.setCustomValidity("手机号码不合法！！！");
	} else {
		phonenumber.setCustomValidity('');
	}
}


/* 验证邮箱 */
function checkmail() {
	var mail = document.getElementById("mail");// 购卡邮箱
	var ret = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if (ret.exec(mail.value) == null) {
		mail.setCustomValidity("邮箱格式有误！！！");
	} else {
		mail.setCustomValidity('');
	}
}
/* 验证购卡数量 */
function checknumber() {
	var number = document.getElementById("cardNumber");// 购卡数量
	var ret = /^[1-9]{0,1}[0-9]{1,2}$/;// 最多为999张
	if (ret.exec(number.value) == null) {
		number.setCustomValidity("购买的张数有误");
	} else {
		number.setCustomValidity('');
	}
}

