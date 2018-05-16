function reset_txtAccount() {
    hideErrMsg();
    $("#txtAccount").parent().removeClass().addClass("input_1").css("border", "1px solid #cccccc");
    $("#txtAccount").css({color: "#cccccc", "font-weight": ""});
    var n = $("#hidUType").val();
    n == "1" ? $("#txtAccount").val(txtAccount_Default).attr("data-preval", "") : n == "204" ? $("#txtAccount").val(txtAccount_Default_YWMob).attr("data-preval", "") : ($("#txtAccount").val(txtAccount_Default).attr("data-preval", ""), $("#hidUType").val("1"));
    $("#imgAccountDel").hide();
    set_main_height()
}
function checkIsCellphone(n) {
    var t = !1;
    return /^1[34578]\d{9}$/.test(n) && (t = !0), t || showErrMsg("请输入正确的手机号码"), t
}
function checkIsCellphoneForYW(n) {
    var t = !1;
    return $.postJSON(webAppPath + "ajax", {m: "checkIsCellphoneForYW", account: n}, function (n) {
        if (n != null)if (n.Result == "0") t = !0; else if ($(""), $("#regForm").attr({
                "data-result": n.Result,
                "data-errmsg": n.ErrMsg
            }), n.Result == 101) {
           
            showErrMsg("电信用户无须注册，可直接<a href='" + i + "'>登录<\/a>")
        } else showErrMsg("系统繁忙，稍后重试")
    }, !1), t
}
function checkIsMail(n) {
    var t = !1;
    return /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(n) && (t = !0), t || showErrMsg("邮箱格式不正确"), t
}
function checkInputPwd() {
    var r = $("#hidUType").val(), u = $("#txtAccount").val(), n = $("#txtPassword").val(), t = $("#txtPasswordCfm").val(), i;
    return n != "" && t != "" && n != t ? (showErrMsg("两次输入的密码不一致"), !1) : n != "" && (i = ValidatePwd(r, u, n), i.Code != "0") ? (showErrMsg("密码过于简单"), !1) : !0
}
function showCaptcha() {
    var t = "100", i = "40";
    $("#imgCaptcha").attr({width: t, height: i}).show()
}
function showErrMsg(n) {
    n == undefined && (n = $("#regForm").attr("data-errmsg"));
    $("#pError").removeClass().addClass("usenameError").html(n).show();
    set_main_height()
}
function hideErrMsg() {
    $("#pError").hide().html("");
    set_main_height()
}
function set_main_height() {
    var n = 410, t = 0;
    $("#pError").length > 0 && $("#pError").is(":visible") && (t = t + $("#pError").height());
    n = n + t;
    $("div .no2").css("height", n)
}
function reqInfo_Cookie_W() {
    var t = reqInfo_Cookie_Name, n = "";
    n = n + $("#txtAccount").val() + "$";
    n = CryptoJS.AES.encrypt(n, "login.189.cn");
    $.cookie(t, n, {path: "/"})
}
function reqInfo_Cookie_R() {
    var i = reqInfo_Cookie_Name, n = $.cookie(i), t;
    n != undefined && (n = CryptoJS.AES.decrypt(n, "login.189.cn").toString(CryptoJS.enc.Utf8), t = n.split("$"), $("#txtAccount").val(t[0]).css({
        color: "#000000",
        "font-weight": "bold"
    }).blur().parent(".input_1").removeClass().addClass("input_phone"), $("#imgAccountDel").show(), set_main_height())
}
function showFormErr() {
    var n = $("#regForm").attr("data-resultcode");
    n == "9100" && $("#txtAccount").focusEnd();
    showErrMsg()
}
var CheckResult = function () {
    this.Code = "9999";
    this.Desc = "未知"
}, DefaultWeakPwds = ["888999", "111666", "aaabbb", "aaaccc"], IncledeWeakPwds = ["123456"], ValidatePwd = function (n, t, i, r) {
    r == undefined && (r = "");
    var u = new CheckResult;
    return r == "1" ? (u.Code = "0", u.Desc = "密码符合规则", u) : (u = ValidatePwdLength(i), u.Code != "0") ? u : (u = ValidatePwdIsIncreasing(i), u.Code != "0") ? u : (u = ValidatePwdIsDecreasing(i), u.Code != "0") ? u : (u = ValidatePwdIsAllCharsEquals(i), u.Code != "0") ? u : (n == "201" || n == "204") && (u = ValidatePwdIsIncluded(t, i, 6), u.Code != "0") ? u : (u = ValidatePwdIsBESame(i, 6), u.Code != "0") ? u : (u = ValidatePwd_Case_07(i, 6), u.Code != "0") ? u : (u = ValidatePwdIsDefaultWeakPwd(i), u.Code != "0") ? u : (u = ValidatePwdIsIncledeWeakPwd(i), u.Code != "0") ? u : (u.Code = "0", u.Desc = "密码符合规则", u)
}, ValidatePwdLength = function (n) {
    var t = new CheckResult;
    return t.Code = "9999", t.Desc = "未知", n == null || n == undefined || n.toString().length < 6 ? (t.Code = "1", t.Desc = "密码长度小于6位") : (t.Code = "0", t.Desc = "密码长度大约或等于6位"), t
}, ValidatePwdIsIncreasing = function (n) {
    var t = new CheckResult, r, i;
    for (t.Code = "2", t.Desc = "密码字符为连续递增", r = n.charCodeAt(0), i = 0; i < n.length; i++)if (i > 0 && (r++, n.charCodeAt(i) != r))return t.Code = "0", t.Desc = "密码符合规则", t;
    return t
}, ValidatePwdIsDecreasing = function (n) {
    var t = new CheckResult, r, i;
    for (t.Code = "3", t.Desc = "密码字符为连续递减", r = n.charCodeAt(0), i = 0; i < n.length; i++)if (i > 0 && (r--, n.charCodeAt(i) != r))return t.Code = "0", t.Desc = "密码符合规则", t;
    return t
}, ValidatePwdIsAllCharsEquals = function (n) {
    var t = new CheckResult, r, i, u;
    for (t.Code = "4", t.Desc = "密码字符为同一字符", r = n.charCodeAt(0), i = 0; i < n.length; i++)if (i > 0 && (u = n.charCodeAt(i), r != u))return t.Code = "0", t.Desc = "密码符合规则", t;
    return t
}, ValidatePwdIsIncluded = function (n, t, i) {
    var r = new CheckResult;
    return (r.Code = "5", r.Desc = "密码为手机号的后" + i + "位", t.length != i || n.length <= i) ? (r.Code = "0", r.Desc = "密码符合规则", r) : t != n.substr(n.length - i, i) ? (r.Code = "0", r.Desc = "密码符合规则", r) : r
}, ValidatePwdIsBESame = function (n, t) {
    var i = new CheckResult, r;
    return (i.Code = "6", i.Desc = "密码前三位后三位相同", n.length != t || t % 2 != 0) ? (i.Code = "0", i.Desc = "密码符合规则", i) : (r = n.substr(0, t / 2), r = r + r, n != r) ? (i.Code = "0", i.Desc = "密码符合规则", i) : i
}, ValidatePwd_Case_07 = function (n, t) {
    var i = new CheckResult, u, r;
    if (i.Code = "7", i.Desc = "密码是弱密码#7", n.length != t || t % 2 != 0)return i.Code = "0", i.Desc = "密码符合规则", i;
    for (u = n.charCodeAt(0), r = 0; r < n.length / 2; r++)if (r > 0 && (u++, n.charCodeAt(r) != u) || n.charCodeAt(r) != n.charCodeAt(n.length - 1 - r))return i.Code = "0", i.Desc = "密码符合规则", i;
    return i
}, ValidatePwdIsDefaultWeakPwd = function (n) {
    var t = new CheckResult, i;
    for (t.Code = "0", t.Desc = "密码符合规则", i = 0; i < DefaultWeakPwds.length; i++)if (DefaultWeakPwds[i] == n) {
        t.Code = "9001";
        t.Desc = "密码为指定弱密码#9001";
        break
    }
    return t
}, ValidatePwdIsIncledeWeakPwd = function (n) {
    var t = new CheckResult, i;
    for (t.Code = "0", t.Desc = "密码符合规则", i = 0; i < IncledeWeakPwds.length; i++)if (n.indexOf(IncledeWeakPwds[i]) >= 0) {
        t.Code = "9002";
        t.Desc = "密码为包含弱密码#9002";
        break
    }
    return t
}, webAppPath = $("html").attr("data-apppath"), regFormErr = $("#regForm").attr("data-result") == "1", txtAccount_Default = "请输入邮箱", txtAccount_Default_YWMob = "请输入手机号码", txtShowPwd_Default = "请输入设置密码", txtShowPwdCfm_Default = "请输入确认密码", txtCaptcha_Default = "验证码", txtCaptcha_Default_YWMob = "验证码", vCodeInterval, layerHtml, layerPage, reqInfo_Cookie_Name;
$(function () {
    $("#txtAccount").val(txtAccount_Default);
    $("#txtShowPwd").val(txtShowPwd_Default);
    $("#txtShowPwdCfm").val(txtShowPwdCfm_Default);
    $("#txtPassword").hide();
    $("#txtPasswordCfm").hide();
    $("#txtCaptcha").val(txtCaptcha_Default);
    $("#emailregbtn").click(function () {
        $(this).css({"font-size": "16px", color: "#5e5e5e"});
        $("#ywmobregbtn").css({"font-size": "14px", color: "#cccccc"});
        $("#txtAccount").val(txtAccount_Default);
        $("#hidUType").val("1");
        $("#imgCaptcha").show();
        $("#aGetVCode1").parent().hide()
    });
    $("#tologin").click(function () {
        window.location.href = "userLogin/toLogin";
    });
    $("#txtAccount").focus(function () {
        var n = $(this).val(), t = $("#hidUType").val();
        t == "1" ? n == txtAccount_Default && $(this).val("") : t == "204" ? n == txtAccount_Default_YWMob && $(this).val("") : $(this).val("");
        $(this).attr("autocomplete", "off").css({color: "#000000", "font-weight": "bold"});
        $(this).parent().removeClass().addClass("input_phone").css("border", "1px solid #ff8200");
        $("#imgAccountDel").show().click(function () {
            reset_txtAccount()
        });
        set_main_height()
    }).blur(function () {
        var n, i, t;
        if (hideErrMsg(), n = $(this).val(), n = $.trim(n), $(this).val(n), i = $(this).attr("data-preval"), t = $("#hidUType").val(), n == "")return reset_txtAccount(), !1;
        if (n == i && t.length > 0)return !1;
        if (t == "1") {
            if (!checkIsMail(n))return !1
        } else if (t == "204" && (!checkIsCellphone(n) || !checkIsCellphoneForYW(n)))return !1;
        $(this).attr("data-preval", n);
        $(this).parent().css("border", "1px solid #cccccc");
        set_main_height()
    }).keydown(function (n) {
        switch (n.keyCode) {
            case 32:
                return !1
        }
    });
    $("#txtShowPwd").focus(function () {
        $(this).val("");
        $("#txtShowPwd").hide();
        $("#txtPassword").show().focus()
    });
    $("#txtPassword").focus(function () {
    	$(this).val("");
        $(this).css({color: "#000000", "font-weight": "bold"});
        $(this).parent().css("border", "1px solid #ff8200")
    }).blur(function () {
        hideErrMsg();
        var n = $(this).val();
        if (n == "") $("#txtShowPwd").show().val(txtShowPwd_Default), $("#txtPassword").hide(); else if (!checkInputPwd())return !1;
        $(this).parent().css("border", "1px solid #cccccc")
    });
    $("#txtShowPwdCfm").focus(function () {
        $(this).val("");
        $("#txtShowPwdCfm").hide();
        $("#txtPasswordCfm").show().focus()
    });
    $("#txtPasswordCfm").focus(function () {
        $(this).css({color: "#000000", "font-weight": "bold"});
        $(this).parent().css("border", "1px solid #ff8200")
    }).blur(function () {
        hideErrMsg();
        var n = $(this).val();
        if (n == "") $("#txtShowPwdCfm").show().val(txtShowPwdCfm_Default), $("#txtPasswordCfm").hide(); else if (!checkInputPwd())return !1;
        $(this).parent().css("border", "1px solid #cccccc")
    });
    $("#txtCaptcha").focus(function () {
        var n = $(this).val(), t = $("#hidUType").val();
        n == txtCaptcha_Default && $(this).val("");
        $(this).attr("autocomplete", "off").css({
            "text-transform": "uppercase",
            color: "#000000",
            "font-weight": "bold"
        });
        $(this).parent().css("border", "1px solid #ff8200");
        t == "1" && $("#imgCaptcha").attr("src") == "#" && showCaptcha()
    }).blur(function () {
        var n = $(this).val();
        n == "" && $(this).val(txtCaptcha_Default).css({color: "#cccccc", "font-weight": ""});
        $(this).parent().css("border", "1px solid #cccccc")
    }).keypress(function (n) {
        n.keyCode == 13 && $("#regbtn").click()
    });
    $("#imgCaptcha").click(function () {
        // 改变img的src即可，由于该URL并没有变化，因此追加动态参数伪装成变化的URL。
        this.src = "login/createImage?date=" + new Date().getTime();
        // 显示验证码
        showCaptcha();
        showCaptcha()
    });
    $("#agreement").click(function () {
        return $.layer({
            type: 2,
            title: !1,
            closeBtn: [0, !1],
            offset: ["145px", ""],
            area: ["582px", "360px"],
            border: [0],
            shade: [1],
            iframe: {src: "userRegister/agreement"}
        }), !1
    });
    $("#regbtn").click(function () {
        var n = $("#txtAccount").val(), t = $("#hidUType").val(), i = $("#txtPassword").val(), u = $("#txtPasswordCfm").val(), r = $("#txtCaptcha").val(), f, e;
        if (n == "" || n == txtAccount_Default && t != "204" || n == txtAccount_Default_YWMob && t == "204")return t == "204" ? showErrMsg(txtAccount_Default_YWMob) : showErrMsg(txtAccount_Default), $("#txtAccount").focus(), !1;
        if (t == "1") {
            if (!checkIsMail(n))return !1
        } else return showErrMsg("不支持用户类型"), !1;
        if (i == "")return showErrMsg(txtShowPwd_Default), $("#txtShowPwd").focus(), !1;
        if (u == "")return showErrMsg(txtShowPwdCfm_Default), $("#txtShowPwdCfm").focus(), !1;
       if (i != u)return showErrMsg("两次输入的密码不一致"), !1;
        if (f = ValidatePwd(t, n, i), f.Code != "0")return showErrMsg("密码过于简单"), $("#txtPassword").focus(), !1;
        if (r == "" || r == txtCaptcha_Default)return showErrMsg("请输入" + txtCaptcha_Default), $("#txtCaptcha").focus(), !1;
        // reqInfo_Cookie_W();
        // 密码加密
        // $("#txtPassword").valAesEncryptSet();
        // $("#txtPasswordCfm").valAesEncryptSet();
        $("#regForm").submit();
    });
    regFormErr && (reqInfo_Cookie_R(), showFormErr());
    showCaptcha();
    set_main_height()
});
reqInfo_Cookie_Name = "ECS_ReqInfo_reg"
$(function () {
    var n=$("#errorMsgInput").val();
    if(n==100){
        return showErrMsg("验证码输入错误");
    }else if(n==101){
        return showErrMsg("邮箱用户已存在 ");
    }else if(n==102){
        return showErrMsg("两次密码不一致");
    }else if(n==103){
        return showErrMsg("请重新输入注册信息");
    }

})