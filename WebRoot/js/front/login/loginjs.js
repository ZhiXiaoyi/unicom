function reset_txtAccount() {
    hideErrMsg();
    clearInterval(rdmPwdInterval);
    $("#txtAccount").removeClass("hasText").addClass("noText");
    var n = $("#hidUType").val();
    n == "204" ? ($("#txtAccount").val(txtAccount_Default_YWMob).attr("data-preval", ""),
            $("#txtShowPwd").val(txtShowPwd_Default_YWMob).attr("data-preval", txtShowPwd_Default_YWMob)) : ($("#hidUType").val(""),
            $("#txtAccount").val(txtAccount_Default).attr("data-preval", ""),
            $("#txtShowPwd").val(txtShowPwd_Default).attr("data-preval", txtShowPwd_Default));
    $("#txtAccount_icon").removeClass("icon_fork").addClass("icon_people");
    $("#divRandomPwd").hide();
    $("#liTelephone").hide();
    $("#txtCityNo").val(txtCityNo_Default).removeClass("hasText").addClass("noText");
    $("#hotCity").hide();
    $("#hidProvinceID").val("");
    $("#hidAreaCode").val("");
    $("#hidCityNo").val("");
    $("#hidRandomFlag").val("0");
    $("#txtPassword").val("").blur();
    $("#divForgetPwd").show();
    $("#divGetRandomPwd").hide();
    $("#divCxhq").hide();
    set_main_height()
}
function checkIsCellphone(n) {
    var t = !1;
    return /^1[34578]\d{9}$/.test(n) && (t = !0), t
}
function checkIsCellphoneForCT(n) {
    var t = !0;
    return /^(1[35]3|18[901]|177)\d{8}|1700\d{3}$/.test(n) && (t = !0), t
}
function checkIsTelephone(n) {
    var t = !1;
    return /(^\d{7,8}$)|(^0\d{10,12}$)/.test(n) && (t = !0), t
}
function checkIsMail(n) {
    var t = !1;
    return /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(n) && (t = !0), t
}
function showCaptcha() {
    var t = "100", i = "40";
    $("#imgCaptcha").attr({width: t, height: i}).show()
}
function showErrMsg(n) {
    n == undefined && (n = $("#loginForm").attr("data-errmsg"));
    $("#divErr").removeClass().addClass("loginErrorInfo").html(n).show();
    set_main_height()
}
function showErrMsgOK(n) {
    $("#divErr").removeClass().addClass("loginErrorInfoOK").html(n).show();
    set_main_height()
}
function hideErrMsg() {
    $("#divErr").hide();
    set_main_height()
}
function set_main_height() {
    var t = 0, n = 268;
    t = $("div.loginBoxMainContent").height() - 328;
    n = n + t;
    $("div.QRCodeBox").is(":visible") && (n = 267);
    $("#divWjmm").is(":visible") && (n = 248);
    $("a.signUpFree").css("top", n)
}
function reqInfo_Cookie_W() {
    var t = reqInfo_Cookie_Name, n = "";
    n = n + $("#txtAccount").val() + "$";
    n = n + $("#txtUType").val() + "$";
    n = n + $("#hidUType").val() + "$";
    n = n + $("#txtCityNo").val() + "$";
    n = n + $("#hidProvinceID").val() + "$";
    n = n + $("#hidAreaCode").val() + "$";
    n = n + $("#hidCityNo").val() + "$";
    n = n + $("#hidRandomFlag").val();
    n = CryptoJS.AES.encrypt(n, "login.189.cn");
    $.cookie(t, n, {expires: 30, path: "/"})
}
function reqInfo_Cookie_R() {
    var r = reqInfo_Cookie_Name, t = $.cookie(r), n, i;
    if (t == undefined) {
        $("#aCtOtherAccount").show();
        return
    }
    t = CryptoJS.AES.decrypt(t, "login.189.cn").toString(CryptoJS.enc.Utf8);
    n = t.split("$");
    $("#hidUType").val(n[2]);
    $("#txtAccount").val(n[0]).removeClass("noText").addClass("hasText").blur();
    $("#txtAccount_icon").removeClass("icon_people").addClass("icon_fork");
    $("#txtUType").val(n[1]);
    $("#hidUType").val(n[2]);
    $("#txtCityNo").val(n[3]).removeClass("noText").addClass("hasText");
    $("#hidProvinceID").val(n[4]);
    $("#hidAreaCode").val(n[5]);
    $("#hidCityNo").val(n[6]);
    $("#hidRandomFlag").val(n[7]);
    i = $("#hidUType").val();
    i == "204" ? ($("#aCtOtherAccount").hide(), $("#aReturnOthLogin").show(), $("#txtShowPwd").val(txtShowPwd_Default_YWMob).attr("data-preval", txtShowPwd_Default_YWMob)) : ($("#aCtOtherAccount").show(), $("#aReturnOthLogin").hide());
    set_main_height()
}
function wjmmShow() {
    $("#divMain").hide();
    $("#divWjmm").show();
    set_main_height()
}
function alipaylogin_open() {
    var n = $("#alipayloginbtn").attr("data-requri");
    alipayCookieValue = (new Date).getTime();
    $.cookie(alipayCookieName, alipayCookieValue, {path: "/"});
    alipayWin = window.open(n, "oauth_login_window", "width=605,height=525,toolbar=no,menubar=no,resizable=no,status=no,left=0,top=0");
    alipayWin && alipayWin.focus();
    return
}
function alipaylogin_result() {
    var i = $("#alipayloginbtn").attr("data-result"), t = $("#alipayloginbtn").attr("data-resuri"), n;
    if (i == 1) {
        window.clearInterval(alipayInterval);
        return
    }
    if (t != "") $.postJSON(webAppPath + "login/alipayloginresult", {m: "getloginresult"}, function (n) {
        if (n != null) {
            var i = n, r = i.ResultCode;
            if (r == "0") {
                window.clearInterval(alipayInterval);
                window.location.href = t;
                return
            }
        }
    }); else if (n = $.cookie(alipayCookieName), n != undefined && n != alipayCookieValue) {
        $.cookie(alipayCookieName, null, {path: "/"});
        window.clearInterval(alipayInterval);
        window.location.href = n;
        return
    }
    return
}
function weibologin_open() {
    var n = $("#weibologinbtn").attr("data-requri");
    weiboWin = window.open(n, "oauth_login_window", "width=600,height=455,toolbar=no,menubar=no,resizable=no,status=no,left=0,top=0");
    weiboWin && weiboWin.focus();
    return
}
function weibologin_result() {
    var t = $("#weibologinbtn").attr("data-result"), n = $("#weibologinbtn").attr("data-resuri");
    if (t == 1) {
        window.clearInterval(weiboInterval);
        return
    }
    n != "" && $.postJSON(webAppPath + "login/weibologinresult", {m: "getloginresult"}, function (t) {
        if (t != null) {
            var i = t, r = i.ResultCode;
            if (r == "0") {
                window.clearInterval(weiboInterval);
                window.location.href = n;
                return
            }
        }
    });
    return
}
function wylogin_open() {
    var n = $("#wyloginbtn").attr("data-redirecturi");
    n = encodeURIComponent(n);
    n = "http://reg.163.com/open/oauth2/authorize.do?client_id=3520795804&redirect_uri=" + n + "&response_type=code";
    wyWin = window.open(n, "oauth_login_window", "width=605,height=525,toolbar=no,menubar=no,resizable=no,status=no,left=0,top=0");
    wyWin && wyWin.focus();
    return
}
function wylogin_result() {
    var t = $("#wyloginbtn").attr("data-result"), n = $("#wyloginbtn").attr("data-resuri");
    if (t == 1) {
        window.clearInterval(wyInterval);
        return
    }
    n != "" && $.postJSON(webAppPath + "login/wyloginresult", {m: "getloginresult"}, function (t) {
        if (t != null) {
            var i = t, r = i.ResultCode;
            if (r == "0") {
                window.clearInterval(wyInterval);
                window.location.href = n;
                return
            }
        }
    });
    return
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
}, reqInfo_Cookie_Name, randomPwd_Cookie_Name, alipayWin, alipayInterval, alipayCookieName, alipayCookieValue, weiboWin, weiboInterval, wyWin, wyInterval;
$(function () {
    $(".longInputBg input").bind("blur", function () {
        var n = $(this).parent(".longInputBg");
        n.removeClass("longFixedBroadbandFocus").removeClass("longAddressFocus").removeClass("longInputBgFocus").removeClass("verificationCodeFocus")
    });
    $(".longInputBg input").bind("focus", function () {
        var n = $(this).parent(".longInputBg");
        n.hasClass("longFixedBroadband") ? n.addClass("longFixedBroadbandFocus") : n.hasClass("longAddress") ? n.addClass("longAddressFocus") : n.hasClass("verificationCode") ? n.addClass("verificationCodeFocus") : n.addClass("longInputBgFocus")
    })
});
var webAppPath = $("html").attr("data-apppath"),
    loginFormErr = $("#loginForm").attr("data-result") == "1",
    loginFailTimes = 0, loginLockTimes = 0,
    txtAccount_Default = "电信手机/固话/宽带/注册邮箱",
    txtAccount_Default_YWMob = "移动/联通手机号码",
    txtCityNo_Default = "地市（中文/拼音）",
    txtShowPwd_Default = "用户密码",
    txtShowPwd_Default_ = "用户密码",
    txtShowPwd_Default_Random = "随机密码",
    txtShowPwd_Default_YWMob = "网站密码",
    txtCaptcha_Default = "验证码",
    aRandomPwd_Default_ = "使用用户密码登录", rdmPwdInterval;
$(function () {
    var r, n, u, t, i;
    $("#txtAccount").val(txtAccount_Default).attr("data-preval", "");
    $("#txtCityNo").val(txtCityNo_Default);
    $("#txtShowPwd").val(txtShowPwd_Default).attr("data-preval", txtShowPwd_Default);
    $("#txtPassword").hide();
    $("#txtCaptcha").val(txtCaptcha_Default);
    $("#txtAccount").focus(function () {
        $("#divAccount_focus").show();
        var n = $(this).val(), t = $("#hidUType").val();
        t == "204" ? n == txtAccount_Default_YWMob && $(this).val("") : n == txtAccount_Default && $(this).val("");
        $(this).attr("autocomplete", "off").removeClass("noText").addClass("hasText");
        $("#txtAccount_icon").removeClass("icon_people").addClass("icon_fork");
        set_main_height()
    }).blur(function () {
        var n, i, t;
        if (hideErrMsg(), $("#divAccount_focus").hide(),
                n = $(this).val(), n = $.trim(n), $(this).val(n),
                i = $(this).attr("data-preval"), t = $("#hidUType").val(),
            n == "")return reset_txtAccount(), !1;

        if ($("#hidRandomFlag").val("0") || t == "204") {
            if (checkIsCellphone(n) || checkIsMail(n)) {
            } else {
                return showErrMsg("请输入正确的手机号码或邮箱"), !1
            }
        } else {
            $("#txtShowPwd").val(txtShowPwd_Default).attr("data-preval", txtShowPwd_Default),
                $(this).attr("data-preval", n);
        }
        set_main_height();
    }).keydown(function (n) {
        switch (n.keyCode) {
            case 32:
                return !1
        }
    });
    $("#txtAccount_icon").click(function () {
        $(this).hasClass("icon_fork") && reset_txtAccount()
    });
    $("#txtUType").removeClass("noText").addClass("hasText");
    $("#txtUType,#txtUType_icon").click(function () {
        $("#selectType").is(":visible") ? $("#selectType").hide() : ($("#selectType ul li").click(function () {
                var n = $(this).children("a").text(), t = $(this).val();
                $("#txtUType").val(n);
                $("#hidUType").val(t);
                $("#selectType").hide();
            }).hover(function () {
                $(this).addClass("hover").siblings().removeClass("hover")
            }, function () {
                $(this).removeClass("hover")
            }), $("#selectType").show());
        $("#hotCity").is(":visible") && $("#hotCity").hide()
    });
    $("div.UsefulAddList a").click(function () {
        var n = $(this), t = n.attr("data-cityname"), i = n.attr("data-pid"), r = n.attr("data-areacode"), u = n.attr("data-cityno");
        $("#hidProvinceID").val(i);
        $("#hidAreaCode").val(r);
        $("#hidCityNo").val(u);
        $("#hotCity").hide();
        $("#txtCityNo").val(t);
        $("#txtShowPwd").focus()
    });
    $("#txtShowPwd").focus(function () {
        $(this).val("").unbind("blur");
        $("#txtShowPwd").hide();
        $("#txtPassword").show().focus();
        $("#selectType").hide();
        $("#suggestCity").hide()
    });
    $("#txtPassword").focus(function () {
        $(this).removeClass("noText").addClass("hasText")
    }).blur(function () {
        var n = $(this).val(), t = $("#txtShowPwd").attr("data-preval");
        if (n == "") $("#txtShowPwd").show().val(t == "" ? txtShowPwd_Default : t), $("#txtPassword").hide(); else {
            var i = $("#hidUType").val(), r = $("#txtAccount").val(), u = $("#hidRandomFlag").val(), f = ValidatePwd(i, r, n, u);
            if (f.Code != "0")return showErrMsg('密码过于简单，请通过“<a style="color: #ff8200" onclick="wjmmShow();">忘记密码<\/a>”进行重置。'), !1
        }
    }).keypress(function (n) {
        n.keyCode == 13 && $("#loginbtn").click()
    });
    $("#divForgetPwd a.greenA").click(function () {
        wjmmShow()
    });
    $("#txtCaptcha").focus(function () {
        var n = $(this).val();
        n == txtCaptcha_Default && $(this).val("");
        $(this).attr("autocomplete", "off").removeClass("noText").addClass("hasText").css({"text-transform": "uppercase"});

    }).blur(function () {
        var n = $(this).val();
        n == "" && $(this).val(txtCaptcha_Default).removeClass("hasText").addClass("noText")
    }).keypress(function (n) {
        n.keyCode == 13 && $("#loginbtn").click()
    });
    $("#imgCaptcha").click(function () {
        // 改变img的src即可，由于该URL并没有变化，因此追加动态参数伪装成变化的URL。
        this.src = "login/createImage?date=" + new Date().getTime();
        // 显示验证码
        showCaptcha();
    });
    $("#loginbtn").click(function () {
        var t = $("#txtAccount").val(), n = $("#hidUType").val(),
             o = $("#txtShowPwd").attr("data-preval"),
            u = $("#txtPassword").val(), r = $("#txtCaptcha").val(), f, e;
        if (t == "" || t == txtAccount_Default && n != "204" ||
            t == txtAccount_Default_YWMob && n == "204")
            return $("#txtAccount").focus(), showErrMsg("请输入用户名"), !1;
        if (checkIsCellphone(t)||checkIsMail(t)){
        }else{
            return showErrMsg("请输入正确的手机号码或邮箱"), !1
        }
        if (u == "")return $("#txtShowPwd").focus(), showErrMsg("请输入" + o), !1;
        if (f = $("#hidRandomFlag").val(), e = ValidatePwd(n, t, u, f), e.Code != "0")return $("#txtShowPwd").focus(), showErrMsg('密码过于简单，请通过“<a style="color: #ff8200" onclick="wjmmShow();">忘记密码<\/a>”进行重置。'), !1;
        if (r == txtCaptcha_Default && (r = "", $("#txtCaptcha").val(r)), $("#liCaptcha").is(":visible") && r == "")return $("#txtCaptcha").focus(), showErrMsg("请输入" + txtCaptcha_Default), !1;
        // 密码加密的方法
        // $("#txtPassword").valAesEncryptSet();
        $("#loginForm").submit();
    });

    $("#regbtn").click(function () {
        var n = $(this).attr("data-url");
        trkOrderForm("registion");
        window.location.href = n
    });
    reqInfo_Cookie_R();


    $("#liCaptcha").is(":visible") && ($("#txtPassword").unbind("keypress"), showCaptcha());
    $(".middle .zj .dj li").each(function () {
        $(this).click(function () {
            $(this).parent().find("li").removeClass("curr");
            $(this).addClass("curr")
        })
    });
    $(".middle .xyb").click(function () {
        var n = $(".middle .zj .dj li.curr").attr("data-url");
        window.open(n)
    });
    set_main_height()
});
reqInfo_Cookie_Name = "ECS_ReqInfo_login1";
randomPwd_Cookie_Name = "ECS_RandomPwd_rec";
!function () {
    "use strict";
    function e(n, t, i, r) {
        function s(n, t) {
            return n -= r, t -= r, 0 > n || n >= e || 0 > t || t >= e ? !1 : u.isDark(n, t)
        }

        var u = f(i, t);
        u.addData(n);
        u.make();
        r = r || 0;
        var e = u.getModuleCount(), o = u.getModuleCount() + 2 * r, h = function (n, t, i, r) {
            var f = this.isDark, u = 1 / o;
            this.isDark = function (e, o) {
                var s = o * u, h = e * u, c = s + u, l = h + u;
                return f(e, o) && (n > c || s > i || t > l || h > r)
            }
        };
        this.text = n;
        this.level = t;
        this.version = i;
        this.moduleCount = o;
        this.isDark = s;
        this.addBlank = h
    }

    function t(n, t, i, r, u) {
        i = Math.max(1, i || 1);
        r = Math.min(40, r || 40);
        for (var f = i; r >= f; f += 1)try {
            return new e(n, t, f, u)
        } catch (o) {
        }
    }

    function o(t, i, r) {
        var u = r.size, s = "bold " + r.mSize * u + "px " + r.fontname, h = n("<canvas/>")[0].getContext("2d");
        h.font = s;
        var v = h.measureText(r.label).width, c = r.mSize, l = v / u, o = (1 - l) * r.mPosX, e = (1 - c) * r.mPosY, y = o + l, a = e + c, f = .01;
        1 === r.mode ? t.addBlank(0, e - f, u, a + f) : t.addBlank(o - f, e - f, y + f, a + f);
        i.fillStyle = r.fontcolor;
        i.font = s;
        i.fillText(r.label, o * u, e * u + .75 * r.mSize * u)
    }

    function s(n, t, i) {
        var u = i.size, c = i.image.naturalWidth || 1, l = i.image.naturalHeight || 1, f = i.mSize, o = f * c / l, s = (1 - o) * i.mPosX, e = (1 - f) * i.mPosY, a = s + o, h = e + f, r = .01;
        3 === i.mode ? n.addBlank(0, e - r, u, h + r) : n.addBlank(s - r, e - r, a + r, h + r);
        t.drawImage(i.image, s * u, e * u, o * u, f * u)
    }

    function h(t, i, r) {
        n(r.background).is("images") ? i.drawImage(r.background, 0, 0, r.size, r.size) : r.background && (i.fillStyle = r.background, i.fillRect(r.left, r.top, r.size, r.size));
        var u = r.mode;
        1 === u || 2 === u ? o(t, i, r) : (3 === u || 4 === u) && s(t, i, r)
    }

    function c(n, t, i, r, u, f, e, o) {
        n.isDark(e, o) && t.rect(r, u, f, f)
    }

    function l(n, t, i, r, u, f, e, o, s, h) {
        e ? n.moveTo(t + f, i) : n.moveTo(t, i);
        o ? (n.lineTo(r - f, i), n.arcTo(r, i, r, u, f)) : n.lineTo(r, i);
        s ? (n.lineTo(r, u - f), n.arcTo(r, u, t, u, f)) : n.lineTo(r, u);
        h ? (n.lineTo(t + f, u), n.arcTo(t, u, t, i, f)) : n.lineTo(t, u);
        e ? (n.lineTo(t, i + f), n.arcTo(t, i, r, i, f)) : n.lineTo(t, i)
    }

    function a(n, t, i, r, u, f, e, o, s, h) {
        e && (n.moveTo(t + f, i), n.lineTo(t, i), n.lineTo(t, i + f), n.arcTo(t, i, t + f, i, f));
        o && (n.moveTo(r - f, i), n.lineTo(r, i), n.lineTo(r, i + f), n.arcTo(r, i, r - f, i, f));
        s && (n.moveTo(r - f, u), n.lineTo(r, u), n.lineTo(r, u - f), n.arcTo(r, u, r - f, u, f));
        h && (n.moveTo(t + f, u), n.lineTo(t, u), n.lineTo(t, u - f), n.arcTo(t, u, t + f, u, f))
    }

    function v(n, t, i, r, u, f, e, o) {
        var s = n.isDark, d = r + f, g = u + f, nt = i.radius * f, p = e - 1, w = e + 1, b = o - 1, k = o + 1, tt = s(e, o), it = s(p, b), h = s(p, o), rt = s(p, k), c = s(e, k), ut = s(w, k), v = s(w, o), ft = s(w, b), y = s(e, b);
        tt ? l(t, r, u, d, g, nt, !h && !y, !h && !c, !v && !c, !v && !y) : a(t, r, u, d, g, nt, h && y && it, h && c && rt, v && c && ut, v && y && ft)
    }

    function y(t, i, r) {
        var u, f, e = t.moduleCount, o = r.size / e, s = c, h;
        for (k && r.radius > 0 && r.radius <= .5 && (s = v), i.beginPath(), u = 0; e > u; u += 1)for (f = 0; e > f; f += 1) {
            var l = r.left + f * o, a = r.top + u * o, y = o;
            s(t, i, r, l, a, y, u, f)
        }
        n(r.fill).is("images") ? (i.strokeStyle = "rgba(0,0,0,0.5)", i.lineWidth = 2, i.stroke(), h = i.globalCompositeOperation, i.globalCompositeOperation = "destination-out", i.fill(), i.globalCompositeOperation = h, i.clip(), i.drawImage(r.fill, 0, 0, r.size, r.size), i.restore()) : (i.fillStyle = r.fill, i.fill())
    }

    function i(i, r) {
        var u = t(r.text, r.ecLevel, r.minVersion, r.maxVersion, r.quiet), f, e;
        return u ? (f = n(i).data("qrcode", u), e = f[0].getContext("2d"), h(u, e, r), y(u, e, r), f) : null
    }

    function r(t) {
        var r = n("<canvas/>").attr("width", t.size).attr("height", t.size);
        return i(r, t)
    }

    function p(t) {
        return n("<images/>").attr("src", r(t)[0].toDataURL("image/png"))
    }

    function w(i) {
        var e = t(i.text, i.ecLevel, i.minVersion, i.maxVersion, i.quiet);
        if (!e)return null;
        var r, u, o = i.size, c = i.background, l = Math.floor, s = e.moduleCount, f = l(o / s), a = l(.5 * (o - f * s)), v = {
            position: "relative",
            left: 0,
            top: 0,
            padding: 0,
            margin: 0,
            width: o,
            height: o
        }, y = {
            position: "absolute",
            padding: 0,
            margin: 0,
            width: f,
            height: f,
            "background-color": i.fill
        }, h = n("<div/>").data("qrcode", e).css(v);
        for (c && h.css("background-color", c), r = 0; s > r; r += 1)for (u = 0; s > u; u += 1)e.isDark(r, u) && n("<div/>").css(y).css({
            left: a + u * f,
            top: a + r * f
        }).appendTo(h);
        return h
    }

    function b(n) {
        return u && "canvas" === n.render ? r(n) : u && "image" === n.render ? p(n) : w(n)
    }

    var n = jQuery, u = function () {
        var n = document.createElement("canvas");
        return !(!n.getContext || !n.getContext("2d"))
    }(), k = "[object Opera]" !== Object.prototype.toString.call(window.opera), d = {
        render: "canvas",
        minVersion: 1,
        maxVersion: 40,
        ecLevel: "L",
        left: 0,
        top: 0,
        size: 200,
        fill: "#000",
        background: null,
        text: "no text",
        radius: 0,
        quiet: 0,
        mode: 0,
        mSize: .1,
        mPosX: .5,
        mPosY: .5,
        label: "no label",
        fontname: "sans",
        fontcolor: "#000",
        image: null
    }, f;
    n.fn.qrcode = function (t) {
        var r = n.extend({}, d, t);
        return this.each(function () {
            "canvas" === this.nodeName.toLowerCase() ? i(this, r) : n(this).append(b(r))
        })
    };
    f = function () {
        function u(n, t) {
            if ("undefined" == typeof n.length)throw new Error(n.length + "/" + t);
            var f = function () {
                for (var u, r, i = 0; i < n.length && 0 == n[i];)i += 1;
                for (u = new Array(n.length - i + t), r = 0; r < n.length - i; r += 1)u[r] = n[r + i];
                return u
            }(), r = {};
            return r.get = function (n) {
                return f[n]
            }, r.getLength = function () {
                return f.length
            }, r.multiply = function (n) {
                for (var f, e = new Array(r.getLength() + n.getLength() - 1), t = 0; t < r.getLength(); t += 1)for (f = 0; f < n.getLength(); f += 1)e[t + f] ^= i.gexp(i.glog(r.get(t)) + i.glog(n.get(f)));
                return u(e, 0)
            }, r.mod = function (n) {
                var t;
                if (r.getLength() - n.getLength() < 0)return r;
                for (var e = i.glog(r.get(0)) - i.glog(n.get(0)), f = new Array(r.getLength()), t = 0; t < r.getLength(); t += 1)f[t] = r.get(t);
                for (t = 0; t < n.getLength(); t += 1)f[t] ^= i.gexp(i.glog(n.get(t)) + e);
                return u(f, 0).mod(n)
            }, r
        }

        var e = function (n, t) {
            var k = 236, d = 17, l = n, p = f[t], i = null, e = 0, a = null, w = [], o = {}, b = function (n, t) {
                e = 4 * l + 17;
                i = function (n) {
                    for (var r, i = new Array(n), t = 0; n > t; t += 1)for (i[t] = new Array(n), r = 0; n > r; r += 1)i[t][r] = null;
                    return i
                }(e);
                v(0, 0);
                v(e - 7, 0);
                v(0, e - 7);
                tt();
                nt();
                rt(n, t);
                l >= 7 && it(n);
                null == a && (a = et(l, p, w));
                ut(a, t)
            }, v = function (n, t) {
                for (var u, r = -1; 7 >= r; r += 1)if (!(-1 >= n + r || n + r >= e))for (u = -1; 7 >= u; u += 1)-1 >= t + u || t + u >= e || (i[n + r][t + u] = r >= 0 && 6 >= r && (0 == u || 6 == u) || u >= 0 && 6 >= u && (0 == r || 6 == r) || r >= 2 && 4 >= r && u >= 2 && 4 >= u ? !0 : !1)
            }, g = function () {
                for (var t, i = 0, u = 0, n = 0; 8 > n; n += 1)b(!0, n), t = r.getLostPoint(o), (0 == n || i > t) && (i = t, u = n);
                return u
            }, nt = function () {
                for (var t, n = 8; e - 8 > n; n += 1)null == i[n][6] && (i[n][6] = n % 2 == 0);
                for (t = 8; e - 8 > t; t += 1)null == i[6][t] && (i[6][t] = t % 2 == 0)
            }, tt = function () {
                for (var e, o, s, n, t, u = r.getPatternPosition(l), f = 0; f < u.length; f += 1)for (e = 0; e < u.length; e += 1)if (o = u[f], s = u[e], null == i[o][s])for (n = -2; 2 >= n; n += 1)for (t = -2; 2 >= t; t += 1)i[o + n][s + t] = -2 == n || 2 == n || -2 == t || 2 == t || 0 == n && 0 == t ? !0 : !1
            }, it = function (n) {
                for (var u, f = r.getBCHTypeNumber(l), t = 0; 18 > t; t += 1)u = !n && 1 == (f >> t & 1), i[Math.floor(t / 3)][t % 3 + e - 11] = u;
                for (t = 0; 18 > t; t += 1)u = !n && 1 == (f >> t & 1), i[t % 3 + e - 11][Math.floor(t / 3)] = u
            }, rt = function (n, t) {
                for (var f, s = p << 3 | t, o = r.getBCHTypeInfo(s), u = 0; 15 > u; u += 1)f = !n && 1 == (o >> u & 1), 6 > u ? i[u][8] = f : 8 > u ? i[u + 1][8] = f : i[e - 15 + u][8] = f;
                for (u = 0; 15 > u; u += 1)f = !n && 1 == (o >> u & 1), 8 > u ? i[8][e - u - 1] = f : 9 > u ? i[8][15 - u] = f : i[8][14 - u] = f;
                i[e - 8][8] = !n
            }, ut = function (n, t) {
                for (var o, s, a, h = -1, u = e - 1, c = 7, l = 0, v = r.getMaskFunction(t), f = e - 1; f > 0; f -= 2)for (6 == f && (f -= 1); ;) {
                    for (o = 0; 2 > o; o += 1)null == i[u][f - o] && (s = !1, l < n.length && (s = 1 == (n[l] >>> c & 1)), a = v(u, f - o), a && (s = !s), i[u][f - o] = s, c -= 1, -1 == c && (l += 1, c = 7));
                    if (u += h, 0 > u || u >= e) {
                        u -= h;
                        h = -h;
                        break
                    }
                }
            }, ft = function (n, t) {
                for (var s, a, y, p, i, b = 0, c = 0, l = 0, e = new Array(t.length), o = new Array(t.length), f = 0; f < t.length; f += 1) {
                    for (s = t[f].dataCount, a = t[f].totalCount - s, c = Math.max(c, s), l = Math.max(l, a), e[f] = new Array(s), i = 0; i < e[f].length; i += 1)e[f][i] = 255 & n.getBuffer()[i + b];
                    b += s;
                    var v = r.getErrorCorrectPolynomial(a), d = u(e[f], v.getLength() - 1), k = d.mod(v);
                    for (o[f] = new Array(v.getLength() - 1), i = 0; i < o[f].length; i += 1)y = i + k.getLength() - o[f].length, o[f][i] = y >= 0 ? k.get(y) : 0
                }
                for (p = 0, i = 0; i < t.length; i += 1)p += t[i].totalCount;
                for (var w = new Array(p), h = 0, i = 0; c > i; i += 1)for (f = 0; f < t.length; f += 1)i < e[f].length && (w[h] = e[f][i], h += 1);
                for (i = 0; l > i; i += 1)for (f = 0; f < t.length; f += 1)i < o[f].length && (w[h] = o[f][i], h += 1);
                return w
            }, et = function (n, t, i) {
                for (var o, e, c = s.getRSBlocks(n, t), u = h(), f = 0; f < i.length; f += 1)o = i[f], u.put(o.getMode(), 4), u.put(o.getLength(), r.getLengthInBits(o.getMode(), n)), o.write(u);
                for (e = 0, f = 0; f < c.length; f += 1)e += c[f].dataCount;
                if (u.getLengthInBits() > 8 * e)throw new Error("code length overflow. (" + u.getLengthInBits() + ">" + 8 * e + ")");
                for (u.getLengthInBits() + 4 <= 8 * e && u.put(0, 4); u.getLengthInBits() % 8 != 0;)u.putBit(!1);
                for (; ;) {
                    if (u.getLengthInBits() >= 8 * e)break;
                    if (u.put(k, 8), u.getLengthInBits() >= 8 * e)break;
                    u.put(d, 8)
                }
                return ft(u, c)
            };
            return o.addData = function (n) {
                var t = c(n);
                w.push(t);
                a = null
            }, o.isDark = function (n, t) {
                if (0 > n || n >= e || 0 > t || t >= e)throw new Error(n + "," + t);
                return i[n][t]
            }, o.getModuleCount = function () {
                return e
            }, o.make = function () {
                b(!1, g())
            }, o.createTableTag = function (n, t) {
                var i, r, u;
                for (n = n || 2, t = "undefined" == typeof t ? 4 * n : t, i = "", i += '<table style="', i += " border-width: 0px; border-style: none;", i += " border-collapse: collapse;", i += " padding: 0px; margin: " + t + "px;", i += '">', i += "<tbody>", r = 0; r < o.getModuleCount(); r += 1) {
                    for (i += "<tr>", u = 0; u < o.getModuleCount(); u += 1)i += '<td style="', i += " border-width: 0px; border-style: none;", i += " border-collapse: collapse;", i += " padding: 0px; margin: 0px;", i += " width: " + n + "px;", i += " height: " + n + "px;", i += " background-color: ", i += o.isDark(r, u) ? "#000000" : "#ffffff", i += ";", i += '"/>';
                    i += "<\/tr>"
                }
                return i += "<\/tbody>", i + "<\/table>"
            }, o.createImgTag = function (n, t) {
                n = n || 2;
                t = "undefined" == typeof t ? 4 * n : t;
                var r = o.getModuleCount() * n + 2 * t, i = t, u = r - t;
                return y(r, r, function (t, r) {
                    if (t >= i && u > t && r >= i && u > r) {
                        var f = Math.floor((t - i) / n), e = Math.floor((r - i) / n);
                        return o.isDark(e, f) ? 0 : 1
                    }
                    return 1
                })
            }, o
        };
        e.stringToBytes = function (n) {
            for (var r, i = [], t = 0; t < n.length; t += 1)r = n.charCodeAt(t), i.push(255 & r);
            return i
        };
        e.createStringToBytes = function (n, t) {
            var i = function () {
                for (var u, f = a(n), i = function () {
                    var n = f.read();
                    if (-1 == n)throw new Error;
                    return n
                }, r = 0, e = {}; ;) {
                    if (u = f.read(), -1 == u)break;
                    var o = i(), s = i(), h = i(), c = String.fromCharCode(u << 8 | o), l = s << 8 | h;
                    e[c] = l;
                    r += 1
                }
                if (r != t)throw new Error(r + " != " + t);
                return e
            }(), r = "?".charCodeAt(0);
            return function (n) {
                for (var e, u, t = [], f = 0; f < n.length; f += 1)e = n.charCodeAt(f), 128 > e ? t.push(e) : (u = i[n.charAt(f)], "number" == typeof u ? (255 & u) == u ? t.push(u) : (t.push(u >>> 8), t.push(255 & u)) : t.push(r));
                return t
            }
        };
        var n = {MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8}, f = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, t = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        }, r = function () {
            var s = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], e = 1335, o = 7973, h = 21522, r = {}, f = function (n) {
                for (var t = 0; 0 != n;)t += 1, n >>>= 1;
                return t
            };
            return r.getBCHTypeInfo = function (n) {
                for (var t = n << 10; f(t) - f(e) >= 0;)t ^= e << f(t) - f(e);
                return (n << 10 | t) ^ h
            }, r.getBCHTypeNumber = function (n) {
                for (var t = n << 12; f(t) - f(o) >= 0;)t ^= o << f(t) - f(o);
                return n << 12 | t
            }, r.getPatternPosition = function (n) {
                return s[n - 1]
            }, r.getMaskFunction = function (n) {
                switch (n) {
                    case t.PATTERN000:
                        return function (n, t) {
                            return (n + t) % 2 == 0
                        };
                    case t.PATTERN001:
                        return function (n) {
                            return n % 2 == 0
                        };
                    case t.PATTERN010:
                        return function (n, t) {
                            return t % 3 == 0
                        };
                    case t.PATTERN011:
                        return function (n, t) {
                            return (n + t) % 3 == 0
                        };
                    case t.PATTERN100:
                        return function (n, t) {
                            return (Math.floor(n / 2) + Math.floor(t / 3)) % 2 == 0
                        };
                    case t.PATTERN101:
                        return function (n, t) {
                            return n * t % 2 + n * t % 3 == 0
                        };
                    case t.PATTERN110:
                        return function (n, t) {
                            return (n * t % 2 + n * t % 3) % 2 == 0
                        };
                    case t.PATTERN111:
                        return function (n, t) {
                            return (n * t % 3 + (n + t) % 2) % 2 == 0
                        };
                    default:
                        throw new Error("bad maskPattern:" + n);
                }
            }, r.getErrorCorrectPolynomial = function (n) {
                for (var t = u([1], 0), r = 0; n > r; r += 1)t = t.multiply(u([1, i.gexp(r)], 0));
                return t
            }, r.getLengthInBits = function (t, i) {
                if (i >= 1 && 10 > i)switch (t) {
                    case n.MODE_NUMBER:
                        return 10;
                    case n.MODE_ALPHA_NUM:
                        return 9;
                    case n.MODE_8BIT_BYTE:
                        return 8;
                    case n.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + t);
                } else if (27 > i)switch (t) {
                    case n.MODE_NUMBER:
                        return 12;
                    case n.MODE_ALPHA_NUM:
                        return 11;
                    case n.MODE_8BIT_BYTE:
                        return 16;
                    case n.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + t);
                } else {
                    if (!(41 > i))throw new Error("type:" + i);
                    switch (t) {
                        case n.MODE_NUMBER:
                            return 14;
                        case n.MODE_ALPHA_NUM:
                            return 13;
                        case n.MODE_8BIT_BYTE:
                            return 16;
                        case n.MODE_KANJI:
                            return 12;
                        default:
                            throw new Error("mode:" + t);
                    }
                }
            }, r.getLostPoint = function (n) {
                for (var u, f, h, t, c, r = n.getModuleCount(), o = 0, i = 0; r > i; i += 1)for (t = 0; r > t; t += 1) {
                    for (var s = 0, l = n.isDark(i, t), e = -1; 1 >= e; e += 1)if (!(0 > i + e || i + e >= r))for (u = -1; 1 >= u; u += 1)0 > t + u || t + u >= r || (0 != e || 0 != u) && l == n.isDark(i + e, t + u) && (s += 1);
                    s > 5 && (o += 3 + s - 5)
                }
                for (i = 0; r - 1 > i; i += 1)for (t = 0; r - 1 > t; t += 1)f = 0, n.isDark(i, t) && (f += 1), n.isDark(i + 1, t) && (f += 1), n.isDark(i, t + 1) && (f += 1), n.isDark(i + 1, t + 1) && (f += 1), (0 == f || 4 == f) && (o += 3);
                for (i = 0; r > i; i += 1)for (t = 0; r - 6 > t; t += 1)n.isDark(i, t) && !n.isDark(i, t + 1) && n.isDark(i, t + 2) && n.isDark(i, t + 3) && n.isDark(i, t + 4) && !n.isDark(i, t + 5) && n.isDark(i, t + 6) && (o += 40);
                for (t = 0; r > t; t += 1)for (i = 0; r - 6 > i; i += 1)n.isDark(i, t) && !n.isDark(i + 1, t) && n.isDark(i + 2, t) && n.isDark(i + 3, t) && n.isDark(i + 4, t) && !n.isDark(i + 5, t) && n.isDark(i + 6, t) && (o += 40);
                for (h = 0, t = 0; r > t; t += 1)for (i = 0; r > i; i += 1)n.isDark(i, t) && (h += 1);
                return c = Math.abs(100 * h / r / r - 50) / 5, o + 10 * c
            }, r
        }(), i = function () {
            for (var i, t = new Array(256), r = new Array(256), n = 0; 8 > n; n += 1)t[n] = 1 << n;
            for (n = 8; 256 > n; n += 1)t[n] = t[n - 4] ^ t[n - 5] ^ t[n - 6] ^ t[n - 8];
            for (n = 0; 255 > n; n += 1)r[t[n]] = n;
            return i = {}, i.glog = function (n) {
                if (1 > n)throw new Error("glog(" + n + ")");
                return r[n]
            }, i.gexp = function (n) {
                for (; 0 > n;)n += 255;
                for (; n >= 256;)n -= 255;
                return t[n]
            }, i
        }(), s = function () {
            var n = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], i = function (n, t) {
                var i = {};
                return i.totalCount = n, i.dataCount = t, i
            }, t = {}, r = function (t, i) {
                switch (i) {
                    case f.L:
                        return n[4 * (t - 1) + 0];
                    case f.M:
                        return n[4 * (t - 1) + 1];
                    case f.Q:
                        return n[4 * (t - 1) + 2];
                    case f.H:
                        return n[4 * (t - 1) + 3];
                    default:
                        return void 0
                }
            };
            return t.getRSBlocks = function (n, t) {
                var u = r(n, t);
                if ("undefined" == typeof u)throw new Error("bad rs block @ typeNumber:" + n + "/errorCorrectLevel:" + t);
                for (var s = u.length / 3, e = [], f = 0; s > f; f += 1)for (var h = u[3 * f + 0], c = u[3 * f + 1], l = u[3 * f + 2], o = 0; h > o; o += 1)e.push(i(c, l));
                return e
            }, t
        }(), h = function () {
            var t = [], i = 0, n = {};
            return n.getBuffer = function () {
                return t
            }, n.get = function (n) {
                var i = Math.floor(n / 8);
                return 1 == (t[i] >>> 7 - n % 8 & 1)
            }, n.put = function (t, i) {
                for (var r = 0; i > r; r += 1)n.putBit(1 == (t >>> i - r - 1 & 1))
            }, n.getLengthInBits = function () {
                return i
            }, n.putBit = function (n) {
                var r = Math.floor(i / 8);
                t.length <= r && t.push(0);
                n && (t[r] |= 128 >>> i % 8);
                i += 1
            }, n
        }, c = function (t) {
            var u = n.MODE_8BIT_BYTE, r = e.stringToBytes(t), i = {};
            return i.getMode = function () {
                return u
            }, i.getLength = function () {
                return r.length
            }, i.write = function (n) {
                for (var t = 0; t < r.length; t += 1)n.put(r[t], 8)
            }, i
        }, o = function () {
            var t = [], n = {};
            return n.writeByte = function (n) {
                t.push(255 & n)
            }, n.writeShort = function (t) {
                n.writeByte(t);
                n.writeByte(t >>> 8)
            }, n.writeBytes = function (t, i, r) {
                i = i || 0;
                r = r || t.length;
                for (var u = 0; r > u; u += 1)n.writeByte(t[u + i])
            }, n.writeString = function (t) {
                for (var i = 0; i < t.length; i += 1)n.writeByte(t.charCodeAt(i))
            }, n.toByteArray = function () {
                return t
            }, n.toString = function () {
                var i = "", n;
                for (i += "[", n = 0; n < t.length; n += 1)n > 0 && (i += ","), i += t[n];
                return i + "]"
            }, n
        }, l = function () {
            var t = 0, n = 0, r = 0, u = "", i = {}, f = function (n) {
                u += String.fromCharCode(e(63 & n))
            }, e = function (n) {
                if (!(0 > n)) {
                    if (26 > n)return 65 + n;
                    if (52 > n)return n - -71;
                    if (62 > n)return n - 4;
                    if (62 == n)return 43;
                    if (63 == n)return 47
                }
                throw new Error("n:" + n);
            };
            return i.writeByte = function (i) {
                for (t = t << 8 | 255 & i, n += 8, r += 1; n >= 6;)f(t >>> n - 6), n -= 6
            }, i.flush = function () {
                if (n > 0 && (f(t << 6 - n), t = 0, n = 0), r % 3 != 0)for (var e = 3 - r % 3, i = 0; e > i; i += 1)u += "="
            }, i.toString = function () {
                return u
            }, i
        }, a = function (n) {
            var u = n, i = 0, r = 0, t = 0, f = {}, e;
            return f.read = function () {
                for (var n, f; 8 > t;) {
                    if (i >= u.length) {
                        if (0 == t)return -1;
                        throw new Error("unexpected end of file./" + t);
                    }
                    if (n = u.charAt(i), i += 1, "=" == n)return t = 0, -1;
                    n.match(/^\s$/) || (r = r << 6 | e(n.charCodeAt(0)), t += 6)
                }
                return f = r >>> t - 8 & 255, t -= 8, f
            }, e = function (n) {
                if (n >= 65 && 90 >= n)return n - 65;
                if (n >= 97 && 122 >= n)return n - 71;
                if (n >= 48 && 57 >= n)return n - -4;
                if (43 == n)return 62;
                if (47 == n)return 63;
                throw new Error("c:" + n);
            }, f
        }, v = function (n, t) {
            var r = n, f = t, i = new Array(n * t), u = {};
            u.setPixel = function (n, t, u) {
                i[t * r + n] = u
            };
            u.write = function (n) {
                var u, i, t;
                for (n.writeString("GIF87a"), n.writeShort(r), n.writeShort(f), n.writeByte(128), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(0), n.writeByte(255), n.writeByte(255), n.writeByte(255), n.writeString(","), n.writeShort(0), n.writeShort(0), n.writeShort(r), n.writeShort(f), n.writeByte(0), u = 2, i = s(u), n.writeByte(u), t = 0; i.length - t > 255;)n.writeByte(255), n.writeBytes(i, t, 255), t += 255;
                n.writeByte(i.length - t);
                n.writeBytes(i, t, i.length - t);
                n.writeByte(0);
                n.writeString(";")
            };
            var e = function (n) {
                var u = n, t = 0, i = 0, r = {};
                return r.write = function (n, r) {
                    if (n >>> r != 0)throw new Error("length over");
                    for (; t + r >= 8;)u.writeByte(255 & (n << t | i)), r -= 8 - t, n >>>= 8 - t, i = 0, t = 0;
                    i = n << t | i;
                    t += r
                }, r.flush = function () {
                    t > 0 && u.writeByte(i)
                }, r
            }, s = function (n) {
                for (var v, f, s, r, c, l = 1 << n, y = (1 << n) + 1, u = n + 1, t = h(), a = 0; l > a; a += 1)t.add(String.fromCharCode(a));
                for (t.add(String.fromCharCode(l)), t.add(String.fromCharCode(y)), v = o(), f = e(v), f.write(l, u), s = 0, r = String.fromCharCode(i[s]), s += 1; s < i.length;)c = String.fromCharCode(i[s]), s += 1, t.contains(r + c) ? r += c : (f.write(t.indexOf(r), u), t.size() < 4095 && (t.size() == 1 << u && (u += 1), t.add(r + c)), r = c);
                return f.write(t.indexOf(r), u), f.write(y, u), f.flush(), v.toByteArray()
            }, h = function () {
                var t = {}, i = 0, n = {};
                return n.add = function (r) {
                    if (n.contains(r))throw new Error("dup key:" + r);
                    t[r] = i;
                    i += 1
                }, n.size = function () {
                    return i
                }, n.indexOf = function (n) {
                    return t[n]
                }, n.contains = function (n) {
                    return "undefined" != typeof t[n]
                }, n
            };
            return u
        }, y = function (n, t, i, r) {
            for (var e, h, u, s = v(n, t), f = 0; t > f; f += 1)for (e = 0; n > e; e += 1)s.setPixel(e, f, i(e, f));
            h = o();
            s.write(h);
            for (var c = l(), y = h.toByteArray(), a = 0; a < y.length; a += 1)c.writeByte(y[a]);
            return c.flush(), u = "", u += "<images", u += ' src="', u += "data:image/gif;base64,", u += c, u += '"', u += ' width="', u += n, u += '"', u += ' height="', u += t, u += '"', r && (u += ' alt="', u += r, u += '"'), u + "/>"
        };
        return e
    }()
}(), function () {
    "use strict";
    var n = jQuery, t, i, u = function () {
        var n = document.createElement("canvas");
        return !!(n.getContext && n.getContext("2d"))
    }(), a = Object.prototype.toString.call(window.opera) === "[object Opera]", f = function () {
        n("#hidQRCodeWay").val("");
        var i = "", t = "";
        return n.postJSON(webAppPath + "qrcode/ajax", {m: "create"}, function (n) {
            var r = n;
            if (r != null && r.Result == "0") i = r.Guid, t = r.Text; else return ""
        }, !1), n("#hidQRCodeWay").val("00"), n("#hidQRCodeGuid").val(i), n("#hidQRCodeText").val(t), t
    }, e = function (n) {
        var i, r, u, t;
        for (i = "", u = n.length, r = 0; r < u; r++)t = n.charCodeAt(r), t >= 1 && t <= 127 ? i += n.charAt(r) : t > 2047 ? (i += String.fromCharCode(224 | t >> 12 & 15), i += String.fromCharCode(128 | t >> 6 & 63), i += String.fromCharCode(128 | t >> 0 & 63)) : (i += String.fromCharCode(192 | t >> 6 & 31), i += String.fromCharCode(128 | t >> 0 & 63));
        return i
    }, o = function () {
        var t = f(), i;
        t = e(t);
        i = {
            render: "image",
            ecLevel: "M",
            minVersion: 6,
            fill: "#000000",
            background: "#ffffff",
            text: t,
            size: 300,
            radius: 0 * .01,
            quiet: 1,
            mode: 4,
            mSize: 20 * .01,
            mPosX: 50 * .01,
            mPosY: 50 * .01,
            label: "",
            fontname: "",
            fontcolor: "",
            image: n("#idQRCodeLogo")[0]
        };
        n("div.QRCodeContent").empty().qrcode(i).find("images").addClass("QRCodeImg")
    }, r = function () {
        var t = n("#divQRCodeLogin").attr("data-status");
        t == "" && (u ? o() : s(), n("#divQRCodeLogin").attr("data-status", "00"));
        h()
    }, s = function () {
        n("#hidQRCodeWay").val("");
        var t = webAppPath + "qrcode";
        t = t + "?width=300&height=300&" + Math.random();
        n("div.QRCodeContent images").attr({src: t});
        n("#hidQRCodeGuid").val("");
        n("#hidQRCodeText").val("");
        n("#hidQRCodeWay").val("01")
    }, h = function () {
        window.clearInterval(i);
        window.clearInterval(t);
        t = window.setInterval(function () {
            var r = n("#divQRCodeLogin").attr("data-status");
            r == "00" ? c() : r == "01" ? l() : (window.clearInterval(i), window.clearInterval(t))
        }, 2e3);
        i = window.setTimeout(function () {
            window.clearInterval(t);
            n("#divQRCodeLogin").is(":visible") ? n("div.logonFailBox").show() : n("#divQRCodeLoginLS").is(":visible") && (n("#divlogonFailBox").show(), n("#divQRCodeLogin").show(), n("#divQRCodeLoginLS").hide())
        }, 61999)
    }, c = function () {
        var r = webAppPath + "qrcode/ajax", u = n("#hidQRCodePT").val(), f = n("#hidQRCodeWay").val(), e = n("#hidQRCodeGuid").val();
        n.postJSON(r, {m: "querystatus", pageType: u, way: f, guid: e, status: "01"}, function (r) {
            var u = r;
            u != null && (u.Result == "0" ? (n("#divQRCodeLogin").attr("data-status", "01").hide(), n("#divQRCodeLoginLS").show()) : u.Result == "102" && (window.clearInterval(i), window.clearInterval(t), n("#divQRCodeLogin").attr("data-status", ""), n("#divlogonFailBox").show()))
        }, !1)
    }, l = function () {
        var r = webAppPath + "qrcode/ajax", u = n("#hidQRCodePT").val(), f = n("#hidQRCodeWay").val(), e = n("#hidQRCodeGuid").val();
        n.postJSON(r, {m: "querystatus", pageType: u, way: f, guid: e, status: "02"}, function (r) {
            var u = r;
            u != null && u.Result == "0" && (window.clearInterval(i), window.clearInterval(t), n("#divQRCodeLogin").attr("data-status", ""), window.location.href = u.ResUrl)
        }, !1)
    }, v = function () {
    };
    n(function () {
        n("#divQRCodeLogin").attr("data-status", "");
        n("a.QRCodeloginSuperscrip").click(function () {
            var t, i;
            n("#divMain").show();
            n("#divWjmm").hide();
            n(this).hide();
            n("a.QRCodeBoxSuperscrip").show();
            n("#divNormalLogin").hide();
            t = n("#divNormalLogin").attr("data-path");
            t == "login" && n("div.loginMainContent").addClass("fixedHeight");
            i = n("#divQRCodeLogin").attr("data-status");
            i == "01" ? (n("#divlogonFailBox").hide(), n("#divQRCodeLogin").hide(), n("#divQRCodeLoginLS").show()) : (n("#divlogonFailBox").hide(), n("#divQRCodeLogin").show(), n("#divQRCodeLoginLS").hide());
            set_main_height();
            r()
        });
        n("a.QRCodeBoxSuperscrip").click(function () {
            n(this).hide();
            n("a.QRCodeloginSuperscrip").show();
            n("#divNormalLogin").show();
            var t = n("#divNormalLogin").attr("data-path");
            t == "login" && n("div.loginMainContent").removeClass("fixedHeight");
            n("#divlogonFailBox").hide();
            n("#divQRCodeLogin").hide();
            n("#divQRCodeLoginLS").hide();
            set_main_height()
        });
        n("#aRefreshQRCode").click(function () {
            window.clearInterval(t);
            n("#divQRCodeLogin").attr("data-status", "");
            n("#divlogonFailBox").hide();
            r()
        });
        n("#aQRCodeHelp").click(function () {
            window.open(n(this).attr("data-url"))
        })
    })
}();
alipayCookieName = "ECSLogin_Alipay";
alipayCookieValue = "";
$(function () {
    $("#alipayloginbtn").length > 0 && $("#alipayloginbtn").click(function () {
        return $(this).attr({
            "data-result": "",
            "data-resuri": ""
        }), alipaylogin_open(), alipayInterval = window.setInterval(alipaylogin_result, 1e3), !1
    })
});
$(function () {
    $("#weibologinbtn").length > 0 && $("#weibologinbtn").click(function () {
        return $(this).attr({
            "data-result": "",
            "data-resuri": ""
        }), weibologin_open(), weiboInterval = window.setInterval(weibologin_result, 1e3), !1
    })
});
$(function () {
    $("#wyloginbtn").length > 0 && $("#wyloginbtn").click(function () {
        return $(this).attr({
            "data-result": "",
            "data-resuri": ""
        }), wylogin_open(), wyInterval = window.setInterval(wylogin_result, 1e3), !1
    })
})
$(function () {
    var n=$("#errorMsgInput").val();
    if(n==100){
        return showErrMsg("验证码输入错误");
    }else if(n==101){
        return showErrMsg("邮箱不存在 ");
    }else if(n==102){
        return showErrMsg("邮箱密码输入有误");
    }else if(n==103){
        return showErrMsg("手机号不存在");
    }else if(n==104){
        return showErrMsg("请重新登录");
    }else if(n==105){
        return showErrMsg("手机号密码输入有误");
    }

})