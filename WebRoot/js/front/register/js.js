!function (n, t) {
    "use strict";
    var i, u, o = "", f = {
        getPath: function () {
            var n = document.scripts, t = n[n.length - 1].src;
            return o ? o : t.substring(0, t.lastIndexOf("/") + 1)
        }, type: ["dialog", "page", "iframe", "loading", "tips"]
    }, r, e;
    n.layer = {
        v: "1.8.5",
        ie6: !!n.ActiveXObject && !n.XMLHttpRequest,
        index: 0,
        path: f.getPath(),
        use: function (n, t) {
            var e = i("head")[0], n = n.replace(/\s/g, ""), u = /\.css$/.test(n), r = document.createElement(u ? "link" : "script"), f = n.replace(/\.|\//g, "");
            u && (r.type = "text/css", r.rel = "stylesheet");
            r[u ? "href" : "src"] = /^http:\/\//.test(n) ? n : layer.path + n;
            r.id = f;
            i("#" + f)[0] || e.appendChild(r);
            t && (document.all ? i(r).ready(t) : i(r).load(t))
        },
        alert: function (n, t, r, u) {
            var f = "function" == typeof r, e = {dialog: {msg: n, type: t, yes: f ? r : u}, area: ["auto", "auto"]};
            return f || (e.title = r), i.layer(e)
        },
        confirm: function (n, t, r, u) {
            var f = "function" == typeof r, e = {dialog: {msg: n, type: 4, btns: 2, yes: t, no: f ? r : u}};
            return f || (e.title = r), i.layer(e)
        },
        msg: function (n, r, u, f) {
            var e = {
                title: !1,
                closeBtn: !1,
                time: r === t ? 2 : r,
                dialog: {msg: "" === n || n === t ? "&nbsp;" : n},
                end: f
            };
            return "object" == typeof u ? (e.dialog.type = u.type, e.shade = u.shade, e.shift = u.rate) : "function" == typeof u ? e.end = u : e.dialog.type = u, i.layer(e)
        },
        load: function (n, t) {
            return "string" == typeof n ? layer.msg(n, t || 0, 16) : i.layer({
                    time: n,
                    loading: {type: t},
                    bgcolor: t ? "#fff" : "",
                    shade: t ? [.1, "#000"] : [0],
                    border: 3 !== t && t ? [6, .3, "#000"] : [0],
                    type: 3,
                    title: ["", !1],
                    closeBtn: [0, !1]
                })
        },
        tips: function (n, t, r, u, f, e) {
            var o = {
                type: 4, shade: !1, success: function (n) {
                    this.closeBtn || n.find(".xubox_tips").css({"padding-right": 10})
                }, bgcolor: "", tips: {msg: n, follow: t}
            };
            return o.time = "object" == typeof r ? r.time : 0 | r, r = r || {}, o.closeBtn = r.closeBtn || !1, o.maxWidth = r.maxWidth || u, o.tips.guide = r.guide || f, o.tips.style = r.style || e, o.tips.more = r.more, i.layer(o)
        }
    };
    r = ["xubox_layer", "xubox_iframe", ".xubox_title", ".xubox_text", ".xubox_page", ".xubox_main"];
    e = function (n) {
        var t = this, r = t.config;
        layer.index++;
        t.index = layer.index;
        t.config = i.extend({}, r, n);
        t.config.dialog = i.extend({}, r.dialog, n.dialog);
        t.config.page = i.extend({}, r.page, n.page);
        t.config.iframe = i.extend({}, r.iframe, n.iframe);
        t.config.loading = i.extend({}, r.loading, n.loading);
        t.config.tips = i.extend({}, r.tips, n.tips);
        t.creat()
    };
    e.pt = e.prototype;
    e.pt.config = {
        type: 0,
        shade: [.3, "#000"],
        fix: !0,
        move: ".xubox_title",
        title: "&#x4FE1;&#x606F;",
        offset: ["", "50%"],
        area: ["310px", "auto"],
        closeBtn: [0, !0],
        time: 0,
        bgcolor: "#fff",
        border: [6, .3, "#000"],
        zIndex: 19891014,
        maxWidth: 400,
        dialog: {
            btns: 1, btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"], type: 8, msg: "", yes: function (n) {
                layer.close(n)
            }, no: function (n) {
                layer.close(n)
            }
        },
        page: {dom: "#xulayer", html: "", url: ""},
        iframe: {src: "http://sentsin.com", scrolling: "auto"},
        loading: {type: 0},
        tips: {msg: "", follow: "", guide: 0, isGuide: !0, style: ["background-color:#FF9900; color:#fff;", "#FF9900"]},
        success: function () {
        },
        close: function (n) {
            layer.close(n)
        },
        end: function () {
        }
    };
    e.pt.space = function (n) {
        var s = this, n = n || "", i = s.index, t = s.config, f = t.dialog, h = -1 === f.type ? "" : '<span class="xubox_msg xulayer_png32 xubox_msgico xubox_msgtype' + f.type + '"><\/span>', v = ['<div class="xubox_dialog">' + h + '<span class="xubox_msg xubox_text" style="' + (h ? "" : "padding-left:20px") + '">' + f.msg + "<\/span><\/div>", '<div class="xubox_page">' + n + "<\/div>", '<iframe scrolling="' + t.iframe.scrolling + '" allowtransparency="true" id="' + r[1] + i + '" name="' + r[1] + i + '" onload="this.className=\'' + r[1] + '\'" class="' + r[1] + '" frameborder="0" src="' + t.iframe.src + '"><\/iframe>', '<span class="xubox_loading xubox_loading_' + t.loading.type + '"><\/span>', '<div class="xubox_tips" style="' + t.tips.style[0] + '"><div class="xubox_tipsMsg">' + t.tips.msg + '<\/div><i class="layerTipsG"><\/i><\/div>'], c = "", l = "", u = t.zIndex + i, y = "z-index:" + u + "; background-color:" + t.shade[1] + "; opacity:" + t.shade[0] + "; filter:alpha(opacity=" + 100 * t.shade[0] + ");", o;
        t.shade[0] && (c = '<div times="' + i + '" id="xubox_shade' + i + '" class="xubox_shade" style="' + y + '"><\/div>');
        t.zIndex = u;
        var a = "", e = "", p = "z-index:" + (u - 1) + ";  background-color: " + t.border[2] + "; opacity:" + t.border[1] + "; filter:alpha(opacity=" + 100 * t.border[1] + "); top:-" + t.border[0] + "px; left:-" + t.border[0] + "px;";
        return t.border[0] && (l = '<div id="xubox_border' + i + '" class="xubox_border" style="' + p + '"><\/div>'), !t.maxmin || 1 !== t.type && 2 !== t.type || /^\d+%$/.test(t.area[0]) && /^\d+%$/.test(t.area[1]) || (e = '<a class="xubox_min" href="javascript:;"><cite><\/cite><\/a><a class="xubox_max xulayer_png32" href="javascript:;"><\/a>'), t.closeBtn[1] && (e += '<a class="xubox_close xulayer_png32 xubox_close' + t.closeBtn[0] + '" href="javascript:;" style="' + (4 === t.type ? "position:absolute; right:-3px; _right:7px; top:-4px;" : "") + '"><\/a>'), o = "object" == typeof t.title, t.title && (a = '<div class="xubox_title" style="' + (o ? t.title[1] : "") + '"><em>' + (o ? t.title[0] : t.title) + "<\/em><\/div>"), [c, '<div times="' + i + '" showtime="' + t.time + '" style="z-index:' + u + '" id="' + r[0] + i + '" class="' + r[0] + '"><div style="background-color:' + t.bgcolor + "; z-index:" + u + '" class="xubox_main">' + v[t.type] + a + '<span class="xubox_setwin">' + e + '<\/span><span class="xubox_botton"><\/span><\/div>' + l + "<\/div>"]
    };
    e.pt.creat = function () {
        var u = this, e = "", n = u.config, a = n.dialog, s = u.index, t = n.page, h = i("body"), c = function (n) {
            var n = n || "";
            e = u.space(n);
            h.append(i(e[0]))
        }, f, o, l;
        switch (n.type) {
            case 0:
                n.title || (n.area = ["auto", "auto"]);
                i(".xubox_dialog")[0] && layer.close(i(".xubox_dialog").parents("." + r[0]).attr("times"));
                break;
            case 1:
                if ("" !== t.html) c('<div class="xuboxPageHtml">' + t.html + "<\/div>"), h.append(i(e[1])); else if ("" !== t.url) c('<div class="xuboxPageHtml" id="xuboxPageHtml' + s + '">' + t.html + "<\/div>"), h.append(i(e[1])), i.get(t.url, function (n) {
                    i("#xuboxPageHtml" + s).html(n.toString());
                    t.ok && t.ok(n)
                }); else {
                    if (0 != i(t.dom).parents(r[4]).length)return;
                    c();
                    i(t.dom).show().wrap(i(e[1]))
                }
                break;
            case 3:
                n.title = !1;
                n.area = ["auto", "auto"];
                n.closeBtn = ["", !1];
                i(".xubox_loading")[0] && layer.closeLoad();
                break;
            case 4:
                n.title = !1;
                n.area = ["auto", "auto"];
                n.fix = !1;
                n.border = [0];
                n.tips.more || layer.closeTips()
        }
        if (1 !== n.type && (c(), h.append(i(e[1]))), f = u.layerE = i("#" + r[0] + s), f.css({
                width: n.area[0],
                height: n.area[1]
            }), n.fix || f.css({position: "absolute"}), n.title && (3 !== n.type || 4 !== n.type)) {
            o = 0 === n.type ? a : n;
            l = f.find(".xubox_botton");
            switch (o.btn = n.btn || a.btn, o.btns) {
                case 0:
                    l.html("").hide();
                    break;
                case 1:
                    l.html('<a href="javascript:;" class="xubox_yes xubox_botton1">' + o.btn[0] + "<\/a>");
                    break;
                case 2:
                    l.html('<a href="javascript:;" class="xubox_yes xubox_botton2">' + o.btn[0] + '<\/a><a href="javascript:;" class="xubox_no xubox_botton3">' + o.btn[1] + "<\/a>")
            }
        }
        "auto" === f.css("left") ? (f.hide(), setTimeout(function () {
                f.show();
                u.set(s)
            }, 500)) : u.set(s);
        n.time <= 0 || u.autoclose();
        u.callback()
    };
    f.fade = function (n, t, i) {
        n.css({opacity: 0}).animate({opacity: i}, t)
    };
    e.pt.offset = function () {
        var t = this, n = t.config, r = t.layerE, i = r.outerHeight();
        t.offsetTop = "" === n.offset[0] && i < u.height() ? (u.height() - i - 2 * n.border[0]) / 2 : -1 != n.offset[0].indexOf("px") ? parseFloat(n.offset[0]) : parseFloat(n.offset[0] || 0) / 100 * u.height();
        t.offsetTop = t.offsetTop + n.border[0] + (n.fix ? 0 : u.scrollTop());
        -1 != n.offset[1].indexOf("px") ? t.offsetLeft = parseFloat(n.offset[1]) + n.border[0] : (n.offset[1] = "" === n.offset[1] ? "50%" : n.offset[1], t.offsetLeft = "50%" === n.offset[1] ? n.offset[1] : parseFloat(n.offset[1]) / 100 * u.width() + n.border[0])
    };
    e.pt.set = function (n) {
        var s = this, e = s.config, p = (e.dialog, e.page), o = (e.loading, s.layerE), l = o.find(r[2]), a, y;
        switch (s.autoArea(n), e.title ? 0 === e.type && layer.ie6 && l.css({width: o.outerWidth()}) : 4 !== e.type && o.find(".xubox_close").addClass("xubox_close1"), o.attr({type: f.type[e.type]}), s.offset(), 4 !== e.type && (e.shift && !layer.ie6 ? "object" == typeof e.shift ? s.shift(e.shift[0], e.shift[1] || 500, e.shift[2]) : s.shift(e.shift, 500) : o.css({
                top: s.offsetTop,
                left: s.offsetLeft
            })), e.type) {
            case 0:
                o.find(r[5]).css({"background-color": "#fff"});
                e.title ? o.find(r[3]).css({paddingTop: 18 + l.outerHeight()}) : (o.find(".xubox_msgico").css({top: 8}), o.find(r[3]).css({marginTop: 11}));
                break;
            case 1:
                o.find(p.dom).addClass("layer_pageContent");
                e.shade[0] && o.css({zIndex: e.zIndex + 1});
                e.title && o.find(r[4]).css({top: l.outerHeight()});
                break;
            case 2:
                a = o.find("." + r[1]);
                y = o.height();
                a.addClass("xubox_load").css({width: o.width()});
                a.css(e.title ? {top: l.height(), height: y - l.height()} : {top: 0, height: y});
                layer.ie6 && a.attr("src", e.iframe.src);
                break;
            case 4:
                var h = [0, o.outerHeight()], v = i(e.tips.follow), t = {
                    width: v.outerWidth(),
                    height: v.outerHeight(),
                    top: v.offset().top,
                    left: v.offset().left
                }, c = o.find(".layerTipsG");
                e.tips.isGuide || c.remove();
                o.outerWidth() > e.maxWidth && o.width(e.maxWidth);
                t.tipColor = e.tips.style[1];
                h[0] = o.outerWidth();
                t.autoLeft = function () {
                    t.left + h[0] - u.width() > 0 ? (t.tipLeft = t.left + t.width - h[0], c.css({
                            right: 12,
                            left: "auto"
                        })) : t.tipLeft = t.left
                };
                t.where = [function () {
                    t.autoLeft();
                    t.tipTop = t.top - h[1] - 10;
                    c.removeClass("layerTipsB").addClass("layerTipsT").css({"border-right-color": t.tipColor})
                }, function () {
                    t.tipLeft = t.left + t.width + 10;
                    t.tipTop = t.top;
                    c.removeClass("layerTipsL").addClass("layerTipsR").css({"border-bottom-color": t.tipColor})
                }, function () {
                    t.autoLeft();
                    t.tipTop = t.top + t.height + 10;
                    c.removeClass("layerTipsT").addClass("layerTipsB").css({"border-right-color": t.tipColor})
                }, function () {
                    t.tipLeft = t.left - h[0] + 10;
                    t.tipTop = t.top;
                    c.removeClass("layerTipsR").addClass("layerTipsL").css({"border-bottom-color": t.tipColor})
                }];
                t.where[e.tips.guide]();
                0 === e.tips.guide ? t.top - (u.scrollTop() + h[1] + 16) < 0 && t.where[2]() : 1 === e.tips.guide ? u.width() - (t.left + t.width + h[0] + 16) > 0 || t.where[3]() : 2 === e.tips.guide ? t.top - u.scrollTop() + t.height + h[1] + 16 - u.height() > 0 && t.where[0]() : 3 === e.tips.guide ? h[0] + 16 - t.left > 0 && t.where[1]() : 4 === e.tips.guide;
                o.css({left: t.tipLeft, top: t.tipTop})
        }
        e.fadeIn && (f.fade(o, e.fadeIn, 1), f.fade(i("#xubox_shade" + n), e.fadeIn, e.shade[0]));
        e.fix && "" === e.offset[0] && !e.shift && u.on("resize", function () {
            o.css({top: (u.height() - o.outerHeight()) / 2})
        });
        s.move()
    };
    e.pt.shift = function (n, t, i) {
        var o = this, e = o.config, f = o.layerE, h = 0, c = u.width(), s = u.height() + (e.fix ? 0 : u.scrollTop()), r;
        h = "50%" == e.offset[1] || "" == e.offset[1] ? f.outerWidth() / 2 : f.outerWidth();
        r = {
            t: {top: o.offsetTop},
            b: {top: s - f.outerHeight() - e.border[0]},
            cl: h + e.border[0],
            ct: -f.outerHeight(),
            cr: c - h - e.border[0]
        };
        switch (n) {
            case"left-top":
                f.css({left: r.cl, top: r.ct}).animate(r.t, t);
                break;
            case"top":
                f.css({top: r.ct}).animate(r.t, t);
                break;
            case"right-top":
                f.css({left: r.cr, top: r.ct}).animate(r.t, t);
                break;
            case"right-bottom":
                f.css({left: r.cr, top: s}).animate(i ? r.t : r.b, t);
                break;
            case"bottom":
                f.css({top: s}).animate(i ? r.t : r.b, t);
                break;
            case"left-bottom":
                f.css({left: r.cl, top: s}).animate(i ? r.t : r.b, t);
                break;
            case"left":
                f.css({left: -f.outerWidth()}).animate({left: o.offsetLeft}, t)
        }
    };
    e.pt.autoArea = function (n) {
        var f, l = this, n = n || l.index, u = l.config, o = u.page, t = i("#" + r[0] + n), a = t.find(r[2]), e = t.find(r[5]), y = u.title ? a.innerHeight() : 0, v = 0, s, h, c;
        switch ("auto" === u.area[0] && e.outerWidth() >= u.maxWidth && t.css({width: u.maxWidth}), u.type) {
            case 0:
                s = t.find(".xubox_botton>a");
                f = t.find(r[3]).outerHeight() + 20;
                s.length > 0 && (v = s.outerHeight() + 20);
                break;
            case 1:
                h = t.find(r[4]);
                f = i(o.dom).outerHeight();
                "auto" === u.area[0] && t.css({width: h.outerWidth()});
                ("" !== o.html || "" !== o.url) && (f = h.outerHeight());
                break;
            case 2:
                t.find("iframe").css({
                    width: t.outerWidth(),
                    height: t.outerHeight() - (u.title ? a.innerHeight() : 0)
                });
                break;
            case 3:
                c = t.find(".xubox_loading");
                f = c.outerHeight();
                e.css({width: c.width()})
        }
        "auto" === u.area[1] && e.css({height: y + f + v});
        i("#xubox_border" + n).css({
            width: t.outerWidth() + 2 * u.border[0],
            height: t.outerHeight() + 2 * u.border[0]
        });
        layer.ie6 && "auto" !== u.area[0] && e.css({width: t.outerWidth()});
        t.css("50%" !== u.offset[1] && "" != u.offset[1] || 4 === u.type ? {marginLeft: 0} : {marginLeft: -t.outerWidth() / 2})
    };
    e.pt.move = function () {
        var f = this, t = f.config, n = {
            setY: 0, moveLayer: function () {
                var t;
                t = 0 == parseInt(n.layerE.css("margin-left")) ? parseInt(n.move.css("left")) : parseInt(n.move.css("left")) + -parseInt(n.layerE.css("margin-left"));
                "fixed" !== n.layerE.css("position") && (t -= n.layerE.parent().offset().left, n.setY = 0);
                n.layerE.css({left: t, top: parseInt(n.move.css("top")) - n.setY})
            }
        }, e = f.layerE.find(t.move);
        t.move && e.attr("move", "ok");
        e.css(t.move ? {cursor: "move"} : {cursor: "auto"});
        i(t.move).on("mousedown", function (f) {
            if (f.preventDefault(), "ok" === i(this).attr("move")) {
                n.ismove = !0;
                n.layerE = i(this).parents("." + r[0]);
                var e = n.layerE.offset().left, o = n.layerE.offset().top, s = n.layerE.width() - 6, h = n.layerE.height() - 6;
                i("#xubox_moves")[0] || i("body").append('<div id="xubox_moves" class="xubox_moves" style="left:' + e + "px; top:" + o + "px; width:" + s + "px; height:" + h + 'px; z-index:2147483584"><\/div>');
                n.move = i("#xubox_moves");
                t.moveType && n.move.css({opacity: 0});
                n.moveX = f.pageX - n.move.position().left;
                n.moveY = f.pageY - n.move.position().top;
                "fixed" !== n.layerE.css("position") || (n.setY = u.scrollTop())
            }
        });
        i(document).mousemove(function (i) {
            var r, f, e, o;
            n.ismove && (r = i.pageX - n.moveX, f = i.pageY - n.moveY, (i.preventDefault(), t.moveOut) || (n.setY = u.scrollTop(), e = u.width() - n.move.outerWidth() - t.border[0], o = t.border[0] + n.setY, r < t.border[0] && (r = t.border[0]), r > e && (r = e), o > f && (f = o), f > u.height() - n.move.outerHeight() - t.border[0] + n.setY && (f = u.height() - n.move.outerHeight() - t.border[0] + n.setY)), n.move.css({
                left: r,
                top: f
            }), t.moveType && n.moveLayer(), r = null, f = null, e = null, o = null)
        }).mouseup(function () {
            try {
                n.ismove && (n.moveLayer(), n.move.remove());
                n.ismove = !1
            } catch (i) {
                n.ismove = !1
            }
            t.moveEnd && t.moveEnd()
        })
    };
    e.pt.autoclose = function () {
        var n = this, t = n.config.time, i = function () {
            t--;
            0 === t && (layer.close(n.index), clearInterval(n.autotime))
        };
        n.autotime = setInterval(i, 1e3)
    };
    f.config = {end: {}};
    e.pt.callback = function () {
        var n = this, r = n.layerE, t = n.config, u = t.dialog;
        n.openLayer();
        n.config.success(r);
        layer.ie6 && n.IE6(r);
        r.find(".xubox_close").on("click", function () {
            t.close(n.index);
            layer.close(n.index)
        });
        r.find(".xubox_yes").on("click", function () {
            t.yes ? t.yes(n.index) : u.yes(n.index)
        });
        r.find(".xubox_no").on("click", function () {
            t.no ? t.no(n.index) : u.no(n.index);
            layer.close(n.index)
        });
        n.config.shadeClose && i("#xubox_shade" + n.index).on("click", function () {
            layer.close(n.index)
        });
        r.find(".xubox_min").on("click", function () {
            layer.min(n.index, t);
            t.min && t.min(r)
        });
        r.find(".xubox_max").on("click", function () {
            i(this).hasClass("xubox_maxmin") ? (layer.restore(n.index), t.restore && t.restore(r)) : (layer.full(n.index, t), t.full && t.full(r))
        });
        f.config.end[n.index] = t.end
    };
    f.reselect = function () {
        i.each(i("select"), function () {
            var n = i(this);
            n.parents("." + r[0])[0] || 1 == n.attr("layer") && i("." + r[0]).length < 1 && n.removeAttr("layer").show();
            n = null
        })
    };
    e.pt.IE6 = function (n) {
        var e = this, f = n.offset().top, t;
        t = e.config.fix ? function () {
                n.css({top: u.scrollTop() + f})
            } : function () {
                n.css({top: f})
            };
        t();
        u.scroll(t);
        i.each(i("select"), function () {
            var n = i(this);
            n.parents("." + r[0])[0] || "none" == n.css("display") || n.attr({layer: "1"}).hide();
            n = null
        })
    };
    e.pt.openLayer = function () {
        var n = this;
        n.layerE;
        layer.autoArea = function (t) {
            return n.autoArea(t)
        };
        layer.shift = function (t, i, r) {
            n.shift(t, i, r)
        };
        layer.setMove = function () {
            return n.move()
        };
        layer.zIndex = n.config.zIndex;
        layer.setTop = function (n) {
            var t = function () {
                layer.zIndex++;
                n.css("z-index", layer.zIndex + 1)
            };
            return layer.zIndex = parseInt(n[0].style.zIndex), n.on("mousedown", t), layer.zIndex
        }
    };
    f.isauto = function (n, t, i) {
        "auto" === t.area[0] && (t.area[0] = n.outerWidth());
        "auto" === t.area[1] && (t.area[1] = n.outerHeight());
        n.attr({area: t.area + "," + i});
        n.find(".xubox_max").addClass("xubox_maxmin")
    };
    f.rescollbar = function (n) {
        r.html.attr("layer-full") == n && (r.html[0].style.removeProperty ? r.html[0].style.removeProperty("overflow") : r.html[0].style.removeAttribute("overflow"), r.html.removeAttr("layer-full"))
    };
    layer.getIndex = function (n) {
        return i(n).parents("." + r[0]).attr("times")
    };
    layer.getChildFrame = function (n, t) {
        return t = t || i("." + r[1]).parents("." + r[0]).attr("times"), i("#" + r[0] + t).find("." + r[1]).contents().find(n)
    };
    layer.getFrameIndex = function (n) {
        return i(n ? "#" + n : "." + r[1]).parents("." + r[0]).attr("times")
    };
    layer.iframeAuto = function (n) {
        var o;
        n = n || i("." + r[1]).parents("." + r[0]).attr("times");
        var t = layer.getChildFrame("body", n).outerHeight(), f = i("#" + r[0] + n), e = f.find(r[2]), u = 0;
        e && (u = e.height());
        f.css({height: t + u});
        o = -parseInt(i("#xubox_border" + n).css("top"));
        i("#xubox_border" + n).css({height: t + 2 * o + u});
        i("#" + r[1] + n).css({height: t})
    };
    layer.iframeSrc = function (n, t) {
        i("#" + r[0] + n).find("iframe").attr("src", t)
    };
    layer.area = function (n, t) {
        var u = [i("#" + r[0] + n), i("#xubox_border" + n)], e = u[0].attr("type"), h = u[0].find(r[5]), o = u[0].find(r[2]), s;
        (e === f.type[1] || e === f.type[2]) && ((u[0].css(t), h.css({
            width: t.width,
            height: t.height
        }), e === f.type[2]) && (s = u[0].find("iframe"), s.css({
            width: t.width,
            height: o ? t.height - o.innerHeight() : t.height
        })), "0px" !== u[0].css("margin-left") && (t.hasOwnProperty("top") && u[0].css({top: t.top - (u[1][0] ? parseFloat(u[1].css("top")) : 0)}), t.hasOwnProperty("left") && u[0].css({left: t.left + u[0].outerWidth() / 2 - (u[1][0] ? parseFloat(u[1].css("left")) : 0)}), u[0].css({marginLeft: -u[0].outerWidth() / 2})), u[1][0] && u[1].css({
            width: parseFloat(t.width) - 2 * parseFloat(u[1].css("left")),
            height: parseFloat(t.height) - 2 * parseFloat(u[1].css("top"))
        }))
    };
    layer.min = function (n, t) {
        var u = i("#" + r[0] + n), e = [u.position().top, u.position().left + parseFloat(u.css("margin-left"))];
        f.isauto(u, t, e);
        layer.area(n, {width: 180, height: 35});
        u.find(".xubox_min").hide();
        "page" === u.attr("type") && u.find(r[4]).hide();
        f.rescollbar(n)
    };
    layer.restore = function (n) {
        var t = i("#" + r[0] + n), u = t.attr("area").split(",");
        t.attr("type");
        layer.area(n, {
            width: parseFloat(u[0]),
            height: parseFloat(u[1]),
            top: parseFloat(u[2]),
            left: parseFloat(u[3])
        });
        t.find(".xubox_max").removeClass("xubox_maxmin");
        t.find(".xubox_min").show();
        "page" === t.attr("type") && t.find(r[4]).show();
        f.rescollbar(n)
    };
    layer.full = function (n, t) {
        var o, e = i("#" + r[0] + n), s = 2 * t.border[0] || 6, h = [e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
        f.isauto(e, t, h);
        r.html.attr("layer-full") || r.html.css("overflow", "hidden").attr("layer-full", n);
        clearTimeout(o);
        o = setTimeout(function () {
            layer.area(n, {
                top: "fixed" === e.css("position") ? 0 : u.scrollTop(),
                left: "fixed" === e.css("position") ? 0 : u.scrollLeft(),
                width: u.width() - s,
                height: u.height() - s
            })
        }, 100)
    };
    layer.title = function (n, t) {
        var u = i("#" + r[0] + (t || layer.index)).find(".xubox_title>em");
        u.html(n)
    };
    layer.close = function (n) {
        var t = i("#" + r[0] + n), e = t.attr("type"), o = i("#xubox_moves, #xubox_shade" + n), u;
        if (t[0]) {
            if (e == f.type[1])if (t.find(".xuboxPageHtml")[0]) t[0].innerHTML = "", t.remove(); else for (t.find(".xubox_setwin,.xubox_close,.xubox_botton,.xubox_title,.xubox_border").remove(), u = 0; 3 > u; u++)t.find(".layer_pageContent").unwrap().hide(); else t[0].innerHTML = "", t.remove();
            o.remove();
            layer.ie6 && f.reselect();
            f.rescollbar(n);
            "function" == typeof f.config.end[n] && f.config.end[n]();
            delete f.config.end[n]
        }
    };
    layer.closeLoad = function () {
        layer.close(i(".xubox_loading").parents("." + r[0]).attr("times"))
    };
    layer.closeTips = function () {
        layer.closeAll("tips")
    };
    layer.closeAll = function (n) {
        i.each(i("." + r[0]), function () {
            var t = i(this), r = n ? t.attr("type") === n : 1;
            r && layer.close(t.attr("times"));
            r = null
        })
    };
    f.run = function () {
        i = jQuery;
        u = i(n);
        r.html = i("html");
        layer.use("../../../css/front/register/layer.css");
        i.layer = function (n) {
            var t = new e(n);
            return t.index
        };
        (new Image).src = layer.path + "../../../images/front/default/xubox_ico0.png"
    };
    "function" == typeof define ? define(function () {
            return f.run(), layer
        }) : f.run()
}(window)