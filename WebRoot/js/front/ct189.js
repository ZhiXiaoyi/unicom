/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

 AppMeasurement for JavaScript version: 1.5.1
 Copyright 1996-2015 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
 */
function AppMeasurement() {
    var a = this;
    a.version = "1.5.1";
    var k = window;
    k.s_c_in || (k.s_c_il = [], k.s_c_in = 0);
    a._il = k.s_c_il;
    a._in = k.s_c_in;
    a._il[a._in] = a;
    k.s_c_in++;
    a._c = "s_c";
    var q = k.AppMeasurement.zb;
    q || (q = null);
    var r = k, n, t;
    try {
        for (n = r.parent, t = r.location; n && n.location && t && "" + n.location != "" + t && r.location && "" + n.location != "" + r.location && n.location.host == t.host;)r = n, n = r.parent
    } catch (u) {
    }
    a.ob = function (a) {
        try {
            console.log(a)
        } catch (b) {
        }
    };
    a.za = function (a) {
        return "" + parseInt(a) == "" + a
    };
    a.replace = function (a, b, d) {
        return !a ||
        0 > a.indexOf(b) ? a : a.split(b).join(d)
    };
    a.escape = function (c) {
        var b, d;
        if (!c)return c;
        c = encodeURIComponent(c);
        for (b = 0; 7 > b; b++)d = "+~!*()'".substring(b, b + 1), 0 <= c.indexOf(d) && (c = a.replace(c, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
        return c
    };
    a.unescape = function (c) {
        if (!c)return c;
        c = 0 <= c.indexOf("+") ? a.replace(c, "+", " ") : c;
        try {
            return decodeURIComponent(c)
        } catch (b) {
        }
        return unescape(c)
    };
    a.fb = function () {
        var c = k.location.hostname, b = a.fpCookieDomainPeriods, d;
        b || (b = a.cookieDomainPeriods);
        if (c && !a.cookieDomain &&
            !/^[0-9.]+$/.test(c) && (b = b ? parseInt(b) : 2, b = 2 < b ? b : 2, d = c.lastIndexOf("."), 0 <= d)) {
            for (; 0 <= d && 1 < b;)d = c.lastIndexOf(".", d - 1), b--;
            a.cookieDomain = 0 < d ? c.substring(d) : c
        }
        return a.cookieDomain
    };
    a.c_r = a.cookieRead = function (c) {
        c = a.escape(c);
        var b = " " + a.d.cookie, d = b.indexOf(" " + c + "="), f = 0 > d ? d : b.indexOf(";", d);
        c = 0 > d ? "" : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
        return "[[B]]" != c ? c : ""
    };
    a.c_w = a.cookieWrite = function (c, b, d) {
        var f = a.fb(), e = a.cookieLifetime, g;
        b = "" + b;
        e = e ? ("" + e).toUpperCase() : "";
        d && "SESSION" !=
        e && "NONE" != e && ((g = "" != b ? parseInt(e ? e : 0) : -60) ? (d = new Date, d.setTime(d.getTime() + 1E3 * g)) : 1 == d && (d = new Date, g = d.getYear(), d.setYear(g + 5 + (1900 > g ? 1900 : 0))));
        return c && "NONE" != e ? (a.d.cookie = c + "=" + a.escape("" != b ? b : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toGMTString() + ";" : "") + (f ? " domain=" + f + ";" : ""), a.cookieRead(c) == b) : 0
    };
    a.G = [];
    a.ba = function (c, b, d) {
        if (a.ta)return 0;
        a.maxDelay || (a.maxDelay = 250);
        var f = 0, e = (new Date).getTime() + a.maxDelay, g = a.d.visibilityState, m = ["webkitvisibilitychange", "visibilitychange"];
        g || (g = a.d.webkitVisibilityState);
        if (g && "prerender" == g) {
            if (!a.ca)for (a.ca = 1, d = 0; d < m.length; d++)a.d.addEventListener(m[d], function () {
                var c = a.d.visibilityState;
                c || (c = a.d.webkitVisibilityState);
                "visible" == c && (a.ca = 0, a.delayReady())
            });
            f = 1;
            e = 0
        } else d || a.l("_d") && (f = 1);
        f && (a.G.push({m: c, a: b, t: e}), a.ca || setTimeout(a.delayReady, a.maxDelay));
        return f
    };
    a.delayReady = function () {
        var c = (new Date).getTime(), b = 0, d;
        for (a.l("_d") ? b = 1 : a.na(); 0 < a.G.length;) {
            d = a.G.shift();
            if (b && !d.t && d.t > c) {
                a.G.unshift(d);
                setTimeout(a.delayReady,
                    parseInt(a.maxDelay / 2));
                break
            }
            a.ta = 1;
            a[d.m].apply(a, d.a);
            a.ta = 0
        }
    };
    a.setAccount = a.sa = function (c) {
        var b, d;
        if (!a.ba("setAccount", arguments))if (a.account = c, a.allAccounts)for (b = a.allAccounts.concat(c.split(",")), a.allAccounts = [], b.sort(), d = 0; d < b.length; d++)0 != d && b[d - 1] == b[d] || a.allAccounts.push(b[d]); else a.allAccounts = c.split(",")
    };
    a.foreachVar = function (c, b) {
        var d, f, e, g, m = "";
        e = f = "";
        if (a.lightProfileID) d = a.K, (m = a.lightTrackVars) && (m = "," + m + "," + a.ga.join(",") + ","); else {
            d = a.c;
            if (a.pe || a.linkType) m = a.linkTrackVars,
                f = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (m = a[e].yb, f = a[e].xb));
            m && (m = "," + m + "," + a.A.join(",") + ",");
            f && m && (m += ",events,")
        }
        b && (b = "," + b + ",");
        for (f = 0; f < d.length; f++)e = d[f], (g = a[e]) && (!m || 0 <= m.indexOf("," + e + ",")) && (!b || 0 <= b.indexOf("," + e + ",")) && c(e, g)
    };
    a.B = function (c, b, d, f, e) {
        var g = "", m, p, k, w, n = 0;
        "contextData" == c && (c = "c");
        if (b) {
            for (m in b)if (!(Object.prototype[m] || e && m.substring(0, e.length) != e) && b[m] && (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + m + ","))) {
                k = !1;
                if (n)for (p =
                               0; p < n.length; p++)m.substring(0, n[p].length) == n[p] && (k = !0);
                if (!k && ("" == g && (g += "&" + c + "."), p = b[m], e && (m = m.substring(e.length)), 0 < m.length))if (k = m.indexOf("."), 0 < k) p = m.substring(0, k), k = (e ? e : "") + p + ".", n || (n = []), n.push(k), g += a.B(p, b, d, f, k); else if ("boolean" == typeof p && (p = p ? "true" : "false"), p) {
                    if ("retrieveLightData" == f && 0 > e.indexOf(".contextData."))switch (k = m.substring(0, 4), w = m.substring(4), m) {
                        case "transactionID":
                            m = "xact";
                            break;
                        case "channel":
                            m = "ch";
                            break;
                        case "campaign":
                            m = "v0";
                            break;
                        default:
                            a.za(w) && ("prop" ==
                            k ? m = "c" + w : "eVar" == k ? m = "v" + w : "list" == k ? m = "l" + w : "hier" == k && (m = "h" + w, p = p.substring(0, 255)))
                    }
                    g += "&" + a.escape(m) + "=" + a.escape(p)
                }
            }
            "" != g && (g += "&." + c)
        }
        return g
    };
    a.hb = function () {
        var c = "", b, d, f, e, g, m, p, k, n = "", r = "", s = e = "";
        if (a.lightProfileID) b = a.K, (n = a.lightTrackVars) && (n = "," + n + "," + a.ga.join(",") + ","); else {
            b = a.c;
            if (a.pe || a.linkType) n = a.linkTrackVars, r = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (n = a[e].yb, r = a[e].xb));
            n && (n = "," + n + "," + a.A.join(",") + ",");
            r && (r = "," + r + ",",
            n && (n += ",events,"));
            a.events2 && (s += ("" != s ? "," : "") + a.events2)
        }
        if (a.visitor && 1.5 <= parseFloat(a.visitor.version) && a.visitor.getCustomerIDs) {
            e = q;
            if (g = a.visitor.getCustomerIDs())for (d in g)Object.prototype[d] || (f = g[d], e || (e = {}), f.id && (e[d + ".id"] = f.id), f.authState && (e[d + ".as"] = f.authState));
            e && (c += a.B("cid", e))
        }
        a.AudienceManagement && a.AudienceManagement.isReady() && (c += a.B("d", a.AudienceManagement.getEventCallConfigParams()));
        for (d = 0; d < b.length; d++) {
            e = b[d];
            g = a[e];
            f = e.substring(0, 4);
            m = e.substring(4);
            !g &&
            "events" == e && s && (g = s, s = "");
            if (g && (!n || 0 <= n.indexOf("," + e + ","))) {
                switch (e) {
                    case "supplementalDataID":
                        e = "sdid";
                        break;
                    case "timestamp":
                        e = "ts";
                        break;
                    case "dynamicVariablePrefix":
                        e = "D";
                        break;
                    case "visitorID":
                        e = "vid";
                        break;
                    case "marketingCloudVisitorID":
                        e = "mid";
                        break;
                    case "analyticsVisitorID":
                        e = "aid";
                        break;
                    case "audienceManagerLocationHint":
                        e = "aamlh";
                        break;
                    case "audienceManagerBlob":
                        e = "aamb";
                        break;
                    case "authState":
                        e = "as";
                        break;
                    case "pageURL":
                        e = "g";
                        255 < g.length && (a.pageURLRest = g.substring(255), g = g.substring(0,
                            255));
                        break;
                    case "pageURLRest":
                        e = "-g";
                        break;
                    case "referrer":
                        e = "r";
                        break;
                    case "vmk":
                    case "visitorMigrationKey":
                        e = "vmt";
                        break;
                    case "visitorMigrationServer":
                        e = "vmf";
                        a.ssl && a.visitorMigrationServerSecure && (g = "");
                        break;
                    case "visitorMigrationServerSecure":
                        e = "vmf";
                        !a.ssl && a.visitorMigrationServer && (g = "");
                        break;
                    case "charSet":
                        e = "ce";
                        break;
                    case "visitorNamespace":
                        e = "ns";
                        break;
                    case "cookieDomainPeriods":
                        e = "cdp";
                        break;
                    case "cookieLifetime":
                        e = "cl";
                        break;
                    case "variableProvider":
                        e = "vvp";
                        break;
                    case "currencyCode":
                        e =
                            "cc";
                        break;
                    case "channel":
                        e = "ch";
                        break;
                    case "transactionID":
                        e = "xact";
                        break;
                    case "campaign":
                        e = "v0";
                        break;
                    case "latitude":
                        e = "lat";
                        break;
                    case "longitude":
                        e = "lon";
                        break;
                    case "resolution":
                        e = "s";
                        break;
                    case "colorDepth":
                        e = "c";
                        break;
                    case "javascriptVersion":
                        e = "j";
                        break;
                    case "javaEnabled":
                        e = "v";
                        break;
                    case "cookiesEnabled":
                        e = "k";
                        break;
                    case "browserWidth":
                        e = "bw";
                        break;
                    case "browserHeight":
                        e = "bh";
                        break;
                    case "connectionType":
                        e = "ct";
                        break;
                    case "homepage":
                        e = "hp";
                        break;
                    case "events":
                        s && (g += ("" != g ? "," : "") + s);
                        if (r)for (m =
                                       g.split(","), g = "", f = 0; f < m.length; f++)p = m[f], k = p.indexOf("="), 0 <= k && (p = p.substring(0, k)), k = p.indexOf(":"), 0 <= k && (p = p.substring(0, k)), 0 <= r.indexOf("," + p + ",") && (g += (g ? "," : "") + m[f]);
                        break;
                    case "events2":
                        g = "";
                        break;
                    case "contextData":
                        c += a.B("c", a[e], n, e);
                        g = "";
                        break;
                    case "lightProfileID":
                        e = "mtp";
                        break;
                    case "lightStoreForSeconds":
                        e = "mtss";
                        a.lightProfileID || (g = "");
                        break;
                    case "lightIncrementBy":
                        e = "mti";
                        a.lightProfileID || (g = "");
                        break;
                    case "retrieveLightProfiles":
                        e = "mtsr";
                        break;
                    case "deleteLightProfiles":
                        e =
                            "mtsd";
                        break;
                    case "retrieveLightData":
                        a.retrieveLightProfiles && (c += a.B("mts", a[e], n, e));
                        g = "";
                        break;
                    default:
                        a.za(m) && ("prop" == f ? e = "c" + m : "eVar" == f ? e = "v" + m : "list" == f ? e = "l" + m : "hier" == f && (e = "h" + m, g = g.substring(0, 255)))
                }
                g && (c += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g))
            }
            "pev3" == e && a.e && (c += a.e)
        }
        return c
    };
    a.u = function (a) {
        var b = a.tagName;
        if ("undefined" != "" + a.Cb || "undefined" != "" + a.sb && "HTML" != ("" + a.sb).toUpperCase())return "";
        b = b && b.toUpperCase ? b.toUpperCase() : "";
        "SHAPE" == b && (b = "");
        b && (("INPUT" == b ||
        "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A"));
        return b
    };
    a.va = function (a) {
        var b = a.href ? a.href : "", d, f, e;
        d = b.indexOf(":");
        f = b.indexOf("?");
        e = b.indexOf("/");
        b && (0 > d || 0 <= f && d > f || 0 <= e && d > e) && (f = a.protocol && 1 < a.protocol.length ? a.protocol : l.protocol ? l.protocol : "", d = l.pathname.lastIndexOf("/"), b = (f ? f + "//" : "") + (a.host ? a.host : l.host ? l.host : "") + ("/" != h.substring(0, 1) ? l.pathname.substring(0, 0 > d ? 0 : d) + "/" : "") + b);
        return b
    };
    a.H = function (c) {
        var b = a.u(c), d, f, e = "", g = 0;
        return b &&
        (d = c.protocol, f = c.onclick, !c.href || "A" != b && "AREA" != b || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = a.replace(a.replace(a.replace(a.replace("" + f, "\r", ""), "\n", ""), "\t", ""), " ", ""), g = 2) : "INPUT" == b || "SUBMIT" == b ? (c.value ? e = c.value : c.innerText ? e = c.innerText : c.textContent && (e = c.textContent), g = 3) : c.src && "IMAGE" == b && (e = c.src) : e = a.va(c), e) ? {
                id: e.substring(0, 100),
                type: g
            } : 0
    };
    a.Ab = function (c) {
        for (var b = a.u(c), d = a.H(c); c && !d && "BODY" != b;)if (c = c.parentElement ? c.parentElement : c.parentNode) b = a.u(c), d = a.H(c);
        d && "BODY" != b || (c = 0);
        c && (b = c.onclick ? "" + c.onclick : "", 0 <= b.indexOf(".tl(") || 0 <= b.indexOf(".trackLink(")) && (c = 0);
        return c
    };
    a.rb = function () {
        var c, b, d = a.linkObject, f = a.linkType, e = a.linkURL, g, m;
        a.ha = 1;
        d || (a.ha = 0, d = a.clickObject);
        if (d) {
            c = a.u(d);
            for (b = a.H(d); d && !b && "BODY" != c;)if (d = d.parentElement ? d.parentElement : d.parentNode) c = a.u(d), b = a.H(d);
            b && "BODY" != c || (d = 0);
            if (d) {
                var p = d.onclick ? "" + d.onclick : "";
                if (0 <= p.indexOf(".tl(") || 0 <= p.indexOf(".trackLink(")) d = 0
            }
        } else a.ha = 1;
        !e && d && (e = a.va(d));
        e && !a.linkLeaveQueryString &&
        (g = e.indexOf("?"), 0 <= g && (e = e.substring(0, g)));
        if (!f && e) {
            var n = 0, r = 0, q;
            if (a.trackDownloadLinks && a.linkDownloadFileTypes)for (p = e.toLowerCase(), g = p.indexOf("?"), m = p.indexOf("#"), 0 <= g ? 0 <= m && m < g && (g = m) : g = m, 0 <= g && (p = p.substring(0, g)), g = a.linkDownloadFileTypes.toLowerCase().split(","), m = 0; m < g.length; m++)(q = g[m]) && p.substring(p.length - (q.length + 1)) == "." + q && (f = "d");
            if (a.trackExternalLinks && !f && (p = e.toLowerCase(), a.ya(p) && (a.linkInternalFilters || (a.linkInternalFilters = k.location.hostname), g = 0, a.linkExternalFilters ?
                    (g = a.linkExternalFilters.toLowerCase().split(","), n = 1) : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(",")), g))) {
                for (m = 0; m < g.length; m++)q = g[m], 0 <= p.indexOf(q) && (r = 1);
                r ? n && (f = "e") : n || (f = "e")
            }
        }
        a.linkObject = d;
        a.linkURL = e;
        a.linkType = f;
        if (a.trackClickMap || a.trackInlineStats) a.e = "", d && (f = a.pageName, e = 1, d = d.sourceIndex, f || (f = a.pageURL, e = 0), k.s_objectID && (b.id = k.s_objectID, d = b.type = 1), f && b && b.id && c && (a.e = "&pid=" + a.escape(f.substring(0, 255)) + (e ? "&pidt=" + e : "") + "&oid=" + a.escape(b.id.substring(0,
                100)) + (b.type ? "&oidt=" + b.type : "") + "&ot=" + c + (d ? "&oi=" + d : "")))
    };
    a.ib = function () {
        var c = a.ha, b = a.linkType, d = a.linkURL, f = a.linkName;
        b && (d || f) && (b = b.toLowerCase(), "d" != b && "e" != b && (b = "o"), a.pe = "lnk_" + b, a.pev1 = d ? a.escape(d) : "", a.pev2 = f ? a.escape(f) : "", c = 1);
        a.abort && (c = 0);
        if (a.trackClickMap || a.trackInlineStats) {
            var b = {}, d = 0, e = a.cookieRead("s_sq"), g = e ? e.split("&") : 0, m, p, k, e = 0;
            if (g)for (m = 0; m < g.length; m++)p = g[m].split("="), f = a.unescape(p[0]).split(","), p = a.unescape(p[1]), b[p] = f;
            f = a.account.split(",");
            if (c || a.e) {
                c &&
                !a.e && (e = 1);
                for (p in b)if (!Object.prototype[p])for (m = 0; m < f.length; m++)for (e && (k = b[p].join(","), k == a.account && (a.e += ("&" != p.charAt(0) ? "&" : "") + p, b[p] = [], d = 1)), g = 0; g < b[p].length; g++)k = b[p][g], k == f[m] && (e && (a.e += "&u=" + a.escape(k) + ("&" != p.charAt(0) ? "&" : "") + p + "&u=0"), b[p].splice(g, 1), d = 1);
                c || (d = 1);
                if (d) {
                    e = "";
                    m = 2;
                    !c && a.e && (e = a.escape(f.join(",")) + "=" + a.escape(a.e), m = 1);
                    for (p in b)!Object.prototype[p] && 0 < m && 0 < b[p].length && (e += (e ? "&" : "") + a.escape(b[p].join(",")) + "=" + a.escape(p), m--);
                    a.cookieWrite("s_sq", e)
                }
            }
        }
        return c
    };
    a.jb = function () {
        if (!a.wb) {
            var c = new Date, b = r.location, d, f, e = f = d = "", g = "", m = "", k = "1.2", n = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N", q = "", s = "";
            if (c.setUTCDate && (k = "1.3", (0).toPrecision && (k = "1.5", c = [], c.forEach))) {
                k = "1.6";
                f = 0;
                d = {};
                try {
                    f = new Iterator(d), f.next && (k = "1.7", c.reduce && (k = "1.8", k.trim && (k = "1.8.1", Date.parse && (k = "1.8.2", Object.create && (k = "1.8.5")))))
                } catch (t) {
                }
            }
            d = screen.width + "x" + screen.height;
            e = navigator.javaEnabled() ? "Y" : "N";
            f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
            g = a.w.innerWidth ?
                a.w.innerWidth : a.d.documentElement.offsetWidth;
            m = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
            try {
                a.b.addBehavior("#default#homePage"), q = a.b.Bb(b) ? "Y" : "N"
            } catch (u) {
            }
            try {
                a.b.addBehavior("#default#clientCaps"), s = a.b.connectionType
            } catch (x) {
            }
            a.resolution = d;
            a.colorDepth = f;
            a.javascriptVersion = k;
            a.javaEnabled = e;
            a.cookiesEnabled = n;
            a.browserWidth = g;
            a.browserHeight = m;
            a.connectionType = s;
            a.homepage = q;
            a.wb = 1
        }
    };
    a.L = {};
    a.loadModule = function (c, b) {
        var d = a.L[c];
        if (!d) {
            d = k["AppMeasurement_Module_" +
            c] ? new k["AppMeasurement_Module_" + c](a) : {};
            a.L[c] = a[c] = d;
            d.Na = function () {
                return d.Ra
            };
            d.Sa = function (b) {
                if (d.Ra = b) a[c + "_onLoad"] = b, a.ba(c + "_onLoad", [a, d], 1) || b(a, d)
            };
            try {
                Object.defineProperty ? Object.defineProperty(d, "onLoad", {get: d.Na, set: d.Sa}) : d._olc = 1
            } catch (f) {
                d._olc = 1
            }
        }
        b && (a[c + "_onLoad"] = b, a.ba(c + "_onLoad", [a, d], 1) || b(a, d))
    };
    a.l = function (c) {
        var b, d;
        for (b in a.L)if (!Object.prototype[b] && (d = a.L[b]) && (d._olc && d.onLoad && (d._olc = 0, d.onLoad(a, d)), d[c] && d[c]()))return 1;
        return 0
    };
    a.mb = function () {
        var c =
            Math.floor(1E13 * Math.random()), b = a.visitorSampling, d = a.visitorSamplingGroup, d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : ""), f = a.cookieRead(d);
        if (b) {
            f && (f = parseInt(f));
            if (!f) {
                if (!a.cookieWrite(d, c))return 0;
                f = c
            }
            if (f % 1E4 > v)return 0
        }
        return 1
    };
    a.M = function (c, b) {
        var d, f, e, g, m, k;
        for (d = 0; 2 > d; d++)for (f = 0 < d ? a.oa : a.c, e = 0; e < f.length; e++)if (g = f[e], (m = c[g]) || c["!" + g]) {
            if (!b && ("contextData" == g || "retrieveLightData" == g) && a[g])for (k in a[g])m[k] || (m[k] = a[g][k]);
            a[g] = m
        }
    };
    a.Ga = function (c, b) {
        var d,
            f, e, g;
        for (d = 0; 2 > d; d++)for (f = 0 < d ? a.oa : a.c, e = 0; e < f.length; e++)g = f[e], c[g] = a[g], b || c[g] || (c["!" + g] = 1)
    };
    a.cb = function (a) {
        var b, d, f, e, g, m = 0, k, n = "", q = "";
        if (a && 255 < a.length && (b = "" + a, d = b.indexOf("?"), 0 < d && (k = b.substring(d + 1), b = b.substring(0, d), e = b.toLowerCase(), f = 0, "http://" == e.substring(0, 7) ? f += 7 : "https://" == e.substring(0, 8) && (f += 8), d = e.indexOf("/", f), 0 < d && (e = e.substring(f, d), g = b.substring(d), b = b.substring(0, d), 0 <= e.indexOf("google") ? m = ",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") && (m = ",p,ei,"),
            m && k)))) {
            if ((a = k.split("&")) && 1 < a.length) {
                for (f = 0; f < a.length; f++)e = a[f], d = e.indexOf("="), 0 < d && 0 <= m.indexOf("," + e.substring(0, d) + ",") ? n += (n ? "&" : "") + e : q += (q ? "&" : "") + e;
                n && q ? k = n + "&" + q : q = ""
            }
            d = 253 - (k.length - q.length) - b.length;
            a = b + (0 < d ? g.substring(0, d) : "") + "?" + k
        }
        return a
    };
    a.Ma = function (c) {
        var b = a.d.visibilityState, d = ["webkitvisibilitychange", "visibilitychange"];
        b || (b = a.d.webkitVisibilityState);
        if (b && "prerender" == b) {
            if (c)for (b = 0; b < d.length; b++)a.d.addEventListener(d[b], function () {
                var b = a.d.visibilityState;
                b || (b = a.d.webkitVisibilityState);
                "visible" == b && c()
            });
            return !1
        }
        return !0
    };
    a.Y = !1;
    a.D = !1;
    a.Ta = function () {
        a.D = !0;
        a.i()
    };
    a.W = !1;
    a.Q = !1;
    a.Qa = function (c) {
        a.marketingCloudVisitorID = c;
        a.Q = !0;
        a.i()
    };
    a.T = !1;
    a.N = !1;
    a.Ia = function (c) {
        a.analyticsVisitorID = c;
        a.N = !0;
        a.i()
    };
    a.V = !1;
    a.P = !1;
    a.Ka = function (c) {
        a.audienceManagerLocationHint = c;
        a.P = !0;
        a.i()
    };
    a.U = !1;
    a.O = !1;
    a.Ja = function (c) {
        a.audienceManagerBlob = c;
        a.O = !0;
        a.i()
    };
    a.La = function (c) {
        a.maxDelay || (a.maxDelay = 250);
        return a.l("_d") ? (c && setTimeout(function () {
                c()
            }, a.maxDelay),
                !1) : !0
    };
    a.X = !1;
    a.C = !1;
    a.na = function () {
        a.C = !0;
        a.i()
    };
    a.isReadyToTrack = function () {
        var c = !0, b = a.visitor;
        a.Y || a.D || (a.Ma(a.Ta) ? a.D = !0 : a.Y = !0);
        if (a.Y && !a.D)return !1;
        b && b.isAllowed() && (a.W || a.marketingCloudVisitorID || !b.getMarketingCloudVisitorID || (a.W = !0, a.marketingCloudVisitorID = b.getMarketingCloudVisitorID([a, a.Qa]), a.marketingCloudVisitorID && (a.Q = !0)), a.T || a.analyticsVisitorID || !b.getAnalyticsVisitorID || (a.T = !0, a.analyticsVisitorID = b.getAnalyticsVisitorID([a, a.Ia]), a.analyticsVisitorID && (a.N = !0)), a.V ||
        a.audienceManagerLocationHint || !b.getAudienceManagerLocationHint || (a.V = !0, a.audienceManagerLocationHint = b.getAudienceManagerLocationHint([a, a.Ka]), a.audienceManagerLocationHint && (a.P = !0)), a.U || a.audienceManagerBlob || !b.getAudienceManagerBlob || (a.U = !0, a.audienceManagerBlob = b.getAudienceManagerBlob([a, a.Ja]), a.audienceManagerBlob && (a.O = !0)), a.W && !a.Q && !a.marketingCloudVisitorID || a.T && !a.N && !a.analyticsVisitorID || a.V && !a.P && !a.audienceManagerLocationHint || a.U && !a.O && !a.audienceManagerBlob) && (c = !1);
        a.X ||
        a.C || (a.La(a.na) ? a.C = !0 : a.X = !0);
        a.X && !a.C && (c = !1);
        return c
    };
    a.k = q;
    a.o = 0;
    a.callbackWhenReadyToTrack = function (c, b, d) {
        var f;
        f = {};
        f.Xa = c;
        f.Wa = b;
        f.Ua = d;
        a.k == q && (a.k = []);
        a.k.push(f);
        0 == a.o && (a.o = setInterval(a.i, 100))
    };
    a.i = function () {
        var c;
        if (a.isReadyToTrack() && (a.o && (clearInterval(a.o), a.o = 0), a.k != q))for (; 0 < a.k.length;)c = a.k.shift(), c.Wa.apply(c.Xa, c.Ua)
    };
    a.Oa = function (c) {
        var b, d, f = q, e = q;
        if (!a.isReadyToTrack()) {
            b = [];
            if (c != q)for (d in f = {}, c)f[d] = c[d];
            e = {};
            a.Ga(e, !0);
            b.push(f);
            b.push(e);
            a.callbackWhenReadyToTrack(a,
                a.track, b);
            return !0
        }
        return !1
    };
    a.gb = function () {
        var c = a.cookieRead("s_fid"), b = "", d = "", f;
        f = 8;
        var e = 4;
        if (!c || 0 > c.indexOf("-")) {
            for (c = 0; 16 > c; c++)f = Math.floor(Math.random() * f), b += "0123456789ABCDEF".substring(f, f + 1), f = Math.floor(Math.random() * e), d += "0123456789ABCDEF".substring(f, f + 1), f = e = 16;
            c = b + "-" + d
        }
        a.cookieWrite("s_fid", c, 1) || (c = 0);
        return c
    };
    a.t = a.track = function (c, b) {
        var d, f = new Date, e = "s" + Math.floor(f.getTime() / 108E5) % 10 + Math.floor(1E13 * Math.random()), g = f.getYear(), g = "t=" + a.escape(f.getDate() + "/" + f.getMonth() +
                "/" + (1900 > g ? g + 1900 : g) + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + " " + f.getDay() + " " + f.getTimezoneOffset());
        a.visitor && (a.visitor.eb && (a.authState = a.visitor.eb()), !a.supplementalDataID && a.visitor.getSupplementalDataID && (a.supplementalDataID = a.visitor.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ? !1 : !0)));
        a.l("_s");
        a.Oa(c) || (b && a.M(b), c && (d = {}, a.Ga(d, 0), a.M(c)), a.mb() && (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.gb()), a.rb(), a.usePlugins && a.doPlugins &&
        a.doPlugins(a), a.account && (a.abort || (a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(f.getTime() / 1E3)), f = k.location, a.pageURL || (a.pageURL = f.href ? f.href : f), a.referrer || a.Ha || (a.referrer = r.document.referrer), a.Ha = 1, a.referrer = a.cb(a.referrer), a.l("_g")), a.ib() && !a.abort && (a.jb(), g += a.hb(), a.qb(e, g), a.l("_t"), a.referrer = ""))), c && a.M(d, 1));
        a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e =
            a.lightProfileID = 0
    };
    a.tl = a.trackLink = function (c, b, d, f, e) {
        a.linkObject = c;
        a.linkType = b;
        a.linkName = d;
        e && (a.j = c, a.q = e);
        return a.track(f)
    };
    a.trackLight = function (c, b, d, f) {
        a.lightProfileID = c;
        a.lightStoreForSeconds = b;
        a.lightIncrementBy = d;
        return a.track(f)
    };
    a.clearVars = function () {
        var c, b;
        for (c = 0; c < a.c.length; c++)if (b = a.c[c], "prop" == b.substring(0, 4) || "eVar" == b.substring(0, 4) || "hier" == b.substring(0, 4) || "list" == b.substring(0, 4) || "channel" == b || "events" == b || "eventList" == b || "products" == b || "productList" == b || "purchaseID" ==
            b || "transactionID" == b || "state" == b || "zip" == b || "campaign" == b) a[b] = void 0
    };
    a.tagContainerMarker = "";
    a.qb = function (c, b) {
        var d, f = a.trackingServer;
        d = "";
        var e = a.dc, g = "sc.", k = a.visitorNamespace;
        f ? a.trackingServerSecure && a.ssl && (f = a.trackingServerSecure) : (k || (k = a.account, f = k.indexOf(","), 0 <= f && (k = k.substring(0, f)), k = k.replace(/[^A-Za-z0-9]/g, "")), d || (d = "2o7.net"), e = e ? ("" + e).toLowerCase() : "d1", "2o7.net" == d && ("d1" == e ? e = "112" : "d2" == e && (e = "122"), g = ""), f = k + "." + e + "." + g + d);
        d = a.ssl ? "https://" : "http://";
        e = a.AudienceManagement &&
            a.AudienceManagement.isReady();
        d += f + "/b/ss/" + (a.mobile ? "5." : "") + (e ? "10" : "1") + "/JS-" + a.version + (a.vb ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "") + "/" + c + "?AQB=1&rsid=" + a.account + "&ndh=1&pf=1&" + (e ? "callback=s_c_il[" + a._in + "].AudienceManagement.passData&" : "") + b + "&AQE=1";
        a.ab(d);
        a.da()
    };
    a.ab = function (c) {
        a.g || a.kb();
        a.g.push(c);
        a.fa = a.r();
        a.Fa()
    };
    a.kb = function () {
        a.g = a.nb();
        a.g || (a.g = [])
    };
    a.nb = function () {
        var c, b;
        if (a.ka()) {
            try {
                (b = k.localStorage.getItem(a.ia())) && (c = k.JSON.parse(b))
            } catch (d) {
            }
            return c
        }
    };
    a.ka = function () {
        var c = !0;
        a.trackOffline && a.offlineFilename && k.localStorage && k.JSON || (c = !1);
        return c
    };
    a.wa = function () {
        var c = 0;
        a.g && (c = a.g.length);
        a.v && c++;
        return c
    };
    a.da = function () {
        if (!a.v)if (a.xa = q, a.ja) a.fa > a.J && a.Da(a.g), a.ma(500); else {
            var c = a.Va();
            if (0 < c) a.ma(c); else if (c = a.ua()) a.v = 1, a.pb(c), a.tb(c)
        }
    };
    a.ma = function (c) {
        a.xa || (c || (c = 0), a.xa = setTimeout(a.da, c))
    };
    a.Va = function () {
        var c;
        if (!a.trackOffline || 0 >= a.offlineThrottleDelay)return 0;
        c = a.r() - a.Ca;
        return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay -
            c
    };
    a.ua = function () {
        if (0 < a.g.length)return a.g.shift()
    };
    a.pb = function (c) {
        if (a.debugTracking) {
            var b = "AppMeasurement Debug: " + c;
            c = c.split("&");
            var d;
            for (d = 0; d < c.length; d++)b += "\n\t" + a.unescape(c[d]);
            a.ob(b)
        }
    };
    a.Pa = function () {
        return a.marketingCloudVisitorID || a.analyticsVisitorID
    };
    a.S = !1;
    var s;
    try {
        s = JSON.parse('{"x":"y"}')
    } catch (x) {
        s = null
    }
    s && "y" == s.x ? (a.S = !0, a.R = function (a) {
            return JSON.parse(a)
        }) : k.$ && k.$.parseJSON ? (a.R = function (a) {
                return k.$.parseJSON(a)
            }, a.S = !0) : a.R = function () {
                return null
            };
    a.tb = function (c) {
        var b,
            d, f;
        a.Pa() && 2047 < c.length && ("undefined" != typeof XMLHttpRequest && (b = new XMLHttpRequest, "withCredentials" in b ? d = 1 : b = 0), b || "undefined" == typeof XDomainRequest || (b = new XDomainRequest, d = 2), b && a.AudienceManagement && a.AudienceManagement.isReady() && (a.S ? b.pa = !0 : b = 0));
        !b && a.lb && (c = c.substring(0, 2047));
        !b && a.d.createElement && a.AudienceManagement && a.AudienceManagement.isReady() && (b = a.d.createElement("SCRIPT")) && "async" in b && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body) ? (b.type = "text/javascript",
                b.setAttribute("async", "async"), d = 3) : b = 0);
        b || (b = new Image, b.alt = "");
        b.ra = function () {
            try {
                a.la && (clearTimeout(a.la), a.la = 0), b.timeout && (clearTimeout(b.timeout), b.timeout = 0)
            } catch (c) {
            }
        };
        b.onload = b.ub = function () {
            b.ra();
            a.$a();
            a.Z();
            a.v = 0;
            a.da();
            if (b.pa) {
                b.pa = !1;
                try {
                    var c = a.R(b.responseText);
                    AudienceManagement.passData(c)
                } catch (d) {
                }
            }
        };
        b.onabort = b.onerror = b.bb = function () {
            b.ra();
            (a.trackOffline || a.ja) && a.v && a.g.unshift(a.Za);
            a.v = 0;
            a.fa > a.J && a.Da(a.g);
            a.Z();
            a.ma(500)
        };
        b.onreadystatechange = function () {
            4 == b.readyState &&
            (200 == b.status ? b.ub() : b.bb())
        };
        a.Ca = a.r();
        if (1 == d || 2 == d) {
            var e = c.indexOf("?");
            f = c.substring(0, e);
            e = c.substring(e + 1);
            e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, "");
            1 == d ? (b.open("POST", f, !0), b.send(e)) : 2 == d && (b.open("POST", f), b.send(e))
        } else if (b.src = c, 3 == d) {
            if (a.Aa)try {
                f.removeChild(a.Aa)
            } catch (g) {
            }
            f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
            a.Aa = a.Ya
        }
        b.abort && (a.la = setTimeout(b.abort, 5E3));
        a.Za = c;
        a.Ya = k["s_i_" + a.replace(a.account, ",", "_")] = b;
        if (a.useForcedLinkTracking && a.F || a.q) a.forcedLinkTrackingTimeout ||
        (a.forcedLinkTrackingTimeout = 250), a.aa = setTimeout(a.Z, a.forcedLinkTrackingTimeout)
    };
    a.$a = function () {
        if (a.ka() && !(a.Ba > a.J))try {
            k.localStorage.removeItem(a.ia()), a.Ba = a.r()
        } catch (c) {
        }
    };
    a.Da = function (c) {
        if (a.ka()) {
            a.Fa();
            try {
                k.localStorage.setItem(a.ia(), k.JSON.stringify(c)), a.J = a.r()
            } catch (b) {
            }
        }
    };
    a.Fa = function () {
        if (a.trackOffline) {
            if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
            for (; a.g.length > a.offlineLimit;)a.ua()
        }
    };
    a.forceOffline = function () {
        a.ja = !0
    };
    a.forceOnline = function () {
        a.ja = !1
    };
    a.ia =
        function () {
            return a.offlineFilename + "-" + a.visitorNamespace + a.account
        };
    a.r = function () {
        return (new Date).getTime()
    };
    a.ya = function (a) {
        a = a.toLowerCase();
        return 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:") ? !0 : !1
    };
    a.setTagContainer = function (c) {
        var b, d, f;
        a.vb = c;
        for (b = 0; b < a._il.length; b++)if ((d = a._il[b]) && "s_l" == d._c && d.tagContainerName == c) {
            a.M(d);
            if (d.lmq)for (b = 0; b < d.lmq.length; b++)f = d.lmq[b], a.loadModule(f.n);
            if (d.ml)for (f in d.ml)if (a[f])for (b in c = a[f],
                f = d.ml[f], f)!Object.prototype[b] && ("function" != typeof f[b] || 0 > ("" + f[b]).indexOf("s_c_il")) && (c[b] = f[b]);
            if (d.mmq)for (b = 0; b < d.mmq.length; b++)f = d.mmq[b], a[f.m] && (c = a[f.m], c[f.f] && "function" == typeof c[f.f] && (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
            if (d.tq)for (b = 0; b < d.tq.length; b++)a.track(d.tq[b]);
            d.s = a;
            break
        }
    };
    a.Util = {
        urlEncode: a.escape,
        urlDecode: a.unescape,
        cookieRead: a.cookieRead,
        cookieWrite: a.cookieWrite,
        getQueryParam: function (c, b, d) {
            var f;
            b || (b = a.pageURL ? a.pageURL : k.location);
            d || (d = "&");
            return c &&
            b && (b = "" + b, f = b.indexOf("?"), 0 <= f && (b = d + b.substring(f + 1) + d, f = b.indexOf(d + c + "="), 0 <= f && (b = b.substring(f + d.length + c.length + 1), f = b.indexOf(d), 0 <= f && (b = b.substring(0, f)), 0 < b.length))) ? a.unescape(b) : ""
        }
    };
    a.A = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData pe pev1 pev2 pev3 pageURLRest".split(" ");
    a.c = a.A.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
    a.ga = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
    a.K = a.ga.slice(0);
    a.oa = "account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
    for (n = 0; 250 >= n; n++)76 > n && (a.c.push("prop" + n), a.K.push("prop" + n)), a.c.push("eVar" + n), a.K.push("eVar" + n), 6 > n && a.c.push("hier" + n), 4 > n && a.c.push("list" + n);
    n = "latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage".split(" ");
    a.c = a.c.concat(n);
    a.A = a.A.concat(n);
    a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf("https");
    a.charSet = "UTF-8";
    a.contextData = {};
    a.offlineThrottleDelay = 0;
    a.offlineFilename = "AppMeasurement.offline";
    a.Ca = 0;
    a.fa = 0;
    a.J = 0;
    a.Ba = 0;
    a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
    a.w = k;
    a.d = k.document;
    try {
        a.lb = "Microsoft Internet Explorer" == navigator.appName
    } catch (y) {
    }
    a.Z = function () {
        a.aa && (k.clearTimeout(a.aa), a.aa = q);
        a.j && a.F && a.j.dispatchEvent(a.F);
        a.q && ("function" == typeof a.q ? a.q() : a.j && a.j.href && (a.d.location = a.j.href));
        a.j = a.F = a.q = 0
    };
    a.Ea = function () {
        a.b = a.d.body;
        a.b ? (a.p = function (c) {
                var b, d, f, e, g;
                if (!(a.d && a.d.getElementById("cppXYctnr") || c && c["s_fe_" + a._in])) {
                    if (a.qa)if (a.useForcedLinkTracking) a.b.removeEventListener("click",
                        a.p, !1); else {
                        a.b.removeEventListener("click", a.p, !0);
                        a.qa = a.useForcedLinkTracking = 0;
                        return
                    } else a.useForcedLinkTracking = 0;
                    a.clickObject = c.srcElement ? c.srcElement : c.target;
                    try {
                        if (!a.clickObject || a.I && a.I == a.clickObject || !(a.clickObject.tagName || a.clickObject.parentElement || a.clickObject.parentNode)) a.clickObject = 0; else {
                            var m = a.I = a.clickObject;
                            a.ea && (clearTimeout(a.ea), a.ea = 0);
                            a.ea = setTimeout(function () {
                                a.I == m && (a.I = 0)
                            }, 1E4);
                            f = a.wa();
                            a.track();
                            if (f < a.wa() && a.useForcedLinkTracking && c.target) {
                                for (e = c.target; e &&
                                e != a.b && "A" != e.tagName.toUpperCase() && "AREA" != e.tagName.toUpperCase();)e = e.parentNode;
                                if (e && (g = e.href, a.ya(g) || (g = 0), d = e.target, c.target.dispatchEvent && g && (!d || "_self" == d || "_top" == d || "_parent" == d || k.name && d == k.name))) {
                                    try {
                                        b = a.d.createEvent("MouseEvents")
                                    } catch (n) {
                                        b = new k.MouseEvent
                                    }
                                    if (b) {
                                        try {
                                            b.initMouseEvent("click", c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget)
                                        } catch (q) {
                                            b = 0
                                        }
                                        b && (b["s_fe_" + a._in] = b.s_fe =
                                            1, c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), c.preventDefault(), a.j = c.target, a.F = b)
                                    }
                                }
                            }
                        }
                    } catch (r) {
                        a.clickObject = 0
                    }
                }
            }, a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.p) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && k.MouseEvent) && (a.qa = 1, a.useForcedLinkTracking = 1, a.b.addEventListener("click", a.p, !0)), a.b.addEventListener("click", a.p, !1))) : setTimeout(a.Ea, 30)
    };
    a.Ea()
}
function s_gi(a) {
    var k, q = window.s_c_il, r, n, t = a.split(","), u, s, x = 0;
    if (q)for (r = 0; !x && r < q.length;) {
        k = q[r];
        if ("s_c" == k._c && (k.account || k.oun))if (k.account && k.account == a) x = 1; else for (n = k.account ? k.account : k.oun, n = k.allAccounts ? k.allAccounts : n.split(","), u = 0; u < t.length; u++)for (s = 0; s < n.length; s++)t[u] == n[s] && (x = 1);
        r++
    }
    x || (k = new AppMeasurement);
    k.setAccount ? k.setAccount(a) : k.sa && k.sa(a);
    return k
}
AppMeasurement.getInstance = s_gi;
window.s_objectID || (window.s_objectID = 0);
function s_pgicq() {
    var a = window, k = a.s_giq, q, r, n;
    if (k)for (q = 0; q < k.length; q++)r = k[q], n = s_gi(r.oun), n.setAccount(r.un), n.setTagContainer(r.tagContainerName);
    a.s_giq = 0
}
s_pgicq();


//***********************************************************************
//*************************** Page Tracking Code ************************
//***********************************************************************
var s_account = "eshipeship-189-all";
var s_jt = s_gi(s_account)
s_jt.debugTracking = false
s_jt.charSet = "UTF-8"
s_jt.currencyCode = "CNY"

/* Link and ClickMap tracking */
s_jt.trackDownloadLinks = false
s_jt.trackExternalLinks = true
s_jt.trackInlineStats = true
s_jt.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s_jt.linkInternalFilters = "javascript:,189.cn,189test.vnet.cn"
s_jt.linkLeaveQueryString = false
s_jt.linkTrackVars = "None"
s_jt.linkTrackEvents = "None"
s_jt.codeVersion = '20170106';
s_jt.usePlugins = true
var clickeFlag = true;
if (window.location != window.top.location) {
    var trkiframeFlag = window.trkIframe;
    if (trkiframeFlag && trkiframeFlag == "true") {

    } else {
        s_jt.t = function () {
        };

    }
}
var r_userId = omniGetCookie('userId');
if (r_userId && r_userId.indexOf('jichengboce-') > -1) {
    s_jt.t = function () {
    }
}

var s_rsid = "";
var sc_referer = "";
var js_referer = "";  //江苏网厅反向链接
var delayFlag = "";
var intervalId = 0;
var interval_flag = 0;
var search_click_flag = 0;
var no_search_result_flag = 0;
var haoma_heatmap_flag = 0;
var doPluginsFlag = 0;

var reg_exp = /^\/(nx|nm|bj|tj|he|hl|sx|ln|jx|sh|hn|jl|ah|hi|sn|hb|fj|zj|cq|xz|qh|ha|gz|js|sc|xj|gs|sd|gx|gd|yn)[^\/]*/;
var province_exp = /^(nx|nm|bj|tj|he|hl|sx|ln|jx|sh|hn|jl|ah|hi|sn|hb|fj|zj|cq|xz|qh|ha|gz|js|sc|xj|gs|sd|gx|gd|yn)$/;
var homePage_exp = /^\/($|(nx|nm|bj|tj|he|hl|sx|ln|jx|sh|hn|jl|ah|hi|sn|hb|fj|zj|cq|xz|qh|ha|gz|js|sc|xj|gs|sd|gx|gd|yn)\/$)/;
var internalLink_exp = /^(http:\/\/(www\.|shouji\.)?189.cn.*|javascript:.*)$/;
var excludeLink_exp = /^(http:\/\/www\.189.cn\/bj\/ifree.*|.*#.*)$/;
var SCUserInfo = {"userName": '', "userPhoneNum": '', "userId": '', "address": '', "flag": 1};

function s_doPlugins(s) {
    doPluginsFlag = doPluginsFlag + 1;
    try {
        //采集页面URI
        trkPageName();

        //采集基本流量信息
        trkBaseTrafficInfo();

        //采集频道信息
        trkSiteChannel();

        //采集citycode信息
        trkCitycode();

        //采集用户信息和登录状态
        trkUserInfo();

        //采集首页反向链接
        trkHomePageReferrer();

        //获取江苏的反向链接和cmpid
        getJsRedirectInfo();

        //采集搜索引擎流量信息
        trkSearchEngine();

        //采集产品订单事件
        trkOrderEvents()

        //统计站内搜索
        trkInternalSearch();

        //统计首页二级导航点击
        trkHomeSubNavClick();

        //页面响应时长和5秒响应及时率
        trkResponseDuration();

        //访客识别
        trkNewVisitors();

        //新业务流程统计
        trkServiceProcessing();

        //统计点击热图坐标
        trkHmCoords();

        trkCQEvents();
        //产品插码监测
        //sc_checkCodeDeploy();

        trkSCUserInfo();

        trkGetFormInfo();

    } catch (e) {
        console.log(e);
    }
}

/**************plugins*****************/
/*
 * Plugin: getElement by attr
 */
function e(item, eType) {
    var delimit = item.substr(0, 1);
    var exp = /\.|#/;
    if (exp.test(delimit)) {
        var attr = item.substr(1);
        if (attr && delimit == "#") {
            return document.getElementById(attr);
        } else if (attr && delimit == ".") {
            eType = eType ? eType : "div";
            return getFirstElementByAttr(eType, "class", attr);
        }
    }
}

function getFirstElementByAttr(elementType, attr, attrName) {
    var elems = document.getElementsByTagName(elementType);
    for (var i = 0; i < elems.length; i++) {
        var elemAttrName = elems[i].getAttribute(attr);
        if (attr == "class" && !elemAttrName) {
            elemAttrName = elems[i].getAttribute("className");
        }
        if (elemAttrName == attrName) {
            return elems[i];
        }
    }
}

function getElementsByAttr(elementType, attr, attrName) {
    var te = [];
    var elems = document.getElementsByTagName(elementType);
    for (var i = 0; i < elems.length; i++) {
        var elemAttrName = elems[i].getAttribute(attr);
        if (attr == "class" && !elemAttrName) {
            elemAttrName = elems[i].getAttribute("className");
        }
        if (elemAttrName == attrName) {
            te.push(elems[i]);
        }
    }
    return te;
}

//本地数据存储
localData_fx = {
    hname: 'localUserData_fx',
    isLocalStorage: false,
    isLocalStorage: function () {
        try {
            return window.localStorage ? true : false;
        } catch (e) {
            return false;
        }
    },

    dataDom: null,

    initDom: function () { //初始化userData
        if (!this.dataDom) {
            try {
                this.dataDom = document.createElement('input');
                this.dataDom.type = 'hidden';
                this.dataDom.style.display = "none";
                this.dataDom.addBehavior('#default#userData');
                document.body.appendChild(this.dataDom);
                var exDate = new Date();
                exDate = exDate.getDate() + 365;
                this.dataDom.expires = exDate.toUTCString();
            } catch (ex) {
                return false;
            }
        }
        return true;
    },
    set: function (key, value) {
        if (this.isLocalStorage) {
            try {
                window.localStorage.setItem(key, value);
            } catch (e) {
            }
        } else {
            if (this.initDom()) {
                this.dataDom.load(this.hname);
                this.dataDom.setAttribute(key, value);
                this.dataDom.save(this.hname)
            }
        }
    },
    get: function (key) {
        if (this.isLocalStorage) {
            try {
                return window.localStorage.getItem(key);
            } catch (e) {
            }
        } else {
            if (this.initDom()) {
                this.dataDom.load(this.hname);
                return this.dataDom.getAttribute(key);
            }
        }
    },
    remove: function (key) {
        if (this.isLocalStorage) {
            try {
                localStorage.removeItem(key);
            } catch (e) {
            }
        } else {
            if (this.initDom()) {
                this.dataDom.load(this.hname);
                this.dataDom.removeAttribute(key);
                this.dataDom.save(this.hname)
            }
        }
    },
    isSupport: function () {
        return this.isLocalStorage || this.initDom();
    }
}

s_jt.uuidFast = function () {
    var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var chars = CHARS, uuid = new Array(36), rnd = 0, r;
    for (var i = 0; i < 36; i++) {
        if (i == 8 || i == 13 || i == 18 || i == 23) {
            uuid[i] = '-';
        } else if (i == 14) {
            uuid[i] = '4';
        } else {
            if (rnd <= 0x02) rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
            r = rnd & 0xf;
            rnd = rnd >> 4;
            uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
    }
    return uuid.join('');
};

/*
 * Plugin Utility: apl v1.1
 */
s_jt.apl = new Function("l", "v", "d", "u", ""
    + "var s=this,m=0;if(!l)l='';if(u){var i,n,a=s_jt.split(l,d);for(i=0;i<a."
    + "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
    + "e()));}}if(!m)l=l?l+d+v:v;return l");

/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s_jt.split = new Function("l", "d", ""
    + "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
    + "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

//get Vid
s_jt.getVID = new Function(""
    + "var s=this;var a=s_jt.Util.cookieRead('lvid');if(!a){var b='abcdef1234567890'.spli"
    + "t('');for(var n=0;n<32;n++){a+=b[Math.round(Math.random()*(b.length"
    + "-1))]}var c=new Date;c.setTime(c.getTime()+5*365*24*60*60*1000);if("
    + "!s_jt.Util.cookieWrite('lvid',a,c)){a=''}}return a");

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
}

/* WARNING: Changing any of the below variables will cause drastic
 changes to how your visitor data is collected.  Changes should only be
 made when instructed to do so by your account manager.*/
s_jt.doPlugins = s_doPlugins
s_jt.visitorNamespace = "eshipgdt"
s_jt.trackingServer = "ctweb.omniture.cn:9000"
s_jt.t();

/**************Custom Code*****************/

//获取江苏的反向链接和cmpid
function getJsRedirectInfo() {
    if (s_jt.pageName == "/js/" && document.referrer == "http://js.189.cn/") {
        var ref = s_jt.Util.cookieRead("get_referrer");
        if (ref) {
            js_referer = ref;
            s_jt.referrer = ref;
        }

        var cmpid_query = s_jt.Util.cookieRead("get_query");
        if (cmpid_query) {
            var regx = /(^|&)cmpid=([^&]+)/;
            var regx_match = cmpid_query.match(regx);
            var cmpid = RegExp.$2;
            if (cmpid) {
                s_jt.campaign = cmpid;
            }
        }
    }
}

function sc_checkCodeDeploy() {
    var regx_prodview = /^\/products\/[^\.]+\.html/;
    var pagePath = document.location.pathname;
    var pageTitle = document.title;
    if (pagePath.search(regx_prodview) == 0) {
        if (!window.trkProducts) {
            s_jt.prop15 = "no_ProductId_in_prodView:" + document.location.href;
        }
        if (!window.trkEvents) {
            s_jt.prop16 = "no_Events_in_prodView:" + document.location.href;
        }
    }

    var submitBtn = document.getElementById("order-submit");
    if (pageTitle.indexOf("订单填写页") == 0 && submitBtn) {
        if (!window.trkProducts) {
            s_jt.prop15 = "no_ProductId_in_orderForm:" + document.location.href;
        }
        if (!window.trkEvents) {
            s_jt.prop16 = "no_Events_in_orderForm:" + document.location.href;
        }
    }

    if (pageTitle.indexOf("选择支付平台") == 0) {
        if (!window.trkProducts) {
            s_jt.prop15 = "no_ProductId_in_orderSuccess:" + document.location.href;
        }
        if (!window.trkEvents) {
            s_jt.prop16 = "no_Events_in_orderSuccess:" + document.location.href;
        }
    }
}

function trkOrderFormErrMsg(errMsg) {
    clearVars(s);
    s_jt.linkTrackVars = "products,eVar34";
    s_jt.products = window.trkProducts;
    s_jt.eVar34 = errMsg;
    s_jt.tl(true, 'o', "trkOrderFormErrMsg");
}

//采集订单填写页表单触发的事件
function trkOrderForm(operation) {
    clearVars(s);
    s_jt.linkTrackVars = "eVar4,eVar5,eVar6,eVar7,eVar29,eVar36,prop70,products,events";
    s_jt.linkTrackEvents = 'event12,event13,event14,event15,event16';
    s_jt.products = window.trkProducts;

    if (operation == "loginSuccess") {
        s_jt.events = "event13";
        s_jt.eVar36 = "login_success";
        trkUserInfo();
    } else if (operation == "registion") {
        s_jt.events = "event14";
    } else if (operation == "address") {
        s_jt.events = "event15";
    } else if (operation == "networkInfo") {
        s_jt.events = "event16";
    }
    s_jt.tl(true, 'o', "trkOrderForm");
}

function sc_trkPrivateInfo(voice, traffic, sms, price, discount_price) {
    clearVars(s);
    s_jt.linkTrackVars = "eVar30,eVar31,eVar32,eVar33,products";
    s_jt.products = window.trkProducts;
    s_jt.eVar30 = "流量" + traffic + "M";
    s_jt.eVar31 = "语音" + voice + "分钟";
    s_jt.eVar32 = "短/彩信" + sms + "条";
    var jiage = "套餐原价" + price + "元";
    var youhuijia = "优惠价" + discount_price + "元";
    s_jt.eVar33 = s_jt.eVar30 + " - " + s_jt.eVar31 + " - " + s_jt.eVar32 + " - " + jiage + " - " + youhuijia
    s_jt.tl(true, 'o', "private");
}

//手机充值
function sc_pay(type, orderId, trkProducts, quantity) {
    if (orderId && localData_fx.isSupport()) {
        var local_orderId = localData_fx.get(orderId);
        if (!local_orderId) {
            localData_fx.set(orderId, "1");
        } else {
            return;
        }
    }

    s_jt.usePlugins = false;
    s_jt.linkTrackVars = "events,purchaseID,products,referrer,prop5,eVar4,eVar5,eVar6,eVar7,eVar10,eVar19,eVar20,eVar24,eVar29,eVar35,server";
    s_jt.linkTrackEvents = 'purchase';
    s_jt.events = "purchase";
    s_jt.referrer = document.location.href;
    s_jt.purchaseID = (orderId.length > 20) ? orderId.substring(orderId.length - 20) : orderId;
    s_jt.eVar10 = orderId;

    var money = "";
    var selectmoney = document.getElementById("selectmoney");
    if (selectmoney) {
        money = selectmoney.innerHTML;
        money = money.substring(1, money.indexOf("."))
    } else {
        money = quantity;
    }
    if (trkProducts.indexOf(";") == 0) {
        s_jt.eVar24 = quantity ? trkProducts.replace(";", "") + money : "chongzhika";
    }

    if (type == "chongzhi_yhk" && trkProducts == ";18988888888") {
        s_jt.products = "41" + trkProducts + ";1;" + quantity;
    } else if (type == "chongzhi_yhk" && trkProducts == ";189777777770") {
        s_jt.products = "43" + trkProducts + ";1;" + money;
    } else if (type == "chongzhi_czk") {
        s_jt.products = trkProducts;
    }
    s_jt.tl(true, 'o', type + "_" + trkProducts.replace(";", ""));
}

function clearVars(s) {
    var varNames = new Array("products", "purchaseID", "channel", "server", "events", "pageName", "campaign");
    for (i = 1; i <= 75; i++) {
        varNames.push("prop" + i);
        varNames.push("eVar" + i);
    }
    for (j = 0; j < varNames.length; j++) {
        var varName = varNames[j];
        s[varName] = "";
    }
}

function getValueOnce(value, cookie, expiration, minute) {
    var a = new Date();
    v = value ? value : '';
    c = cookie ? cookie : 's_gvo';
    e = expiration ? expiration : 0;
    var i = (minute == 'm') ? 60000 : 86400000;
    var k = s_jt.Util.cookieRead(cookie);
    if (v) {
        a.setTime(a.getTime() + e * i);
        s_jt.Util.cookieWrite(c, v, (e == 0) ? 0 : a);
    }
    var ret = (v == k) ? '' : v;
    return ret;
}

function searchMatch(str) {
    var _TheArray = [["p.zhongsou.com", "w", "中搜"], ["www.zhongsou.com", "w", "中搜"], ["sg.search.yahoo.com", "p", "雅虎搜索"], ["www.youdao.com", "q", "有道搜索"], ["www.haosou.com", "q", "360搜索"], ["www.baidu.com", "wd", "百度"], ["www.baidu.com", "word", "百度"], ["m.baidu.com", "wd", "百度"], ["m.baidu.com", "word", "百度"], ["wap.baidu.com", "wd", "百度"], ["wap.baidu.com", "word", "百度"], ["www.soso.com", "w", "搜搜"], ["www.soso.com", "query", "搜搜"], ["wap.soso.com", "key", "搜搜"], ["www.so.com", "q", "360搜索"], ["m.so.com", "q", "360"], ["www.sogou.com", "query", "搜狗"], ["m.sogou.com", "keyword", "搜狗"], ["wap.sogou.com", "keyword", "搜狗"], ["www.google.com", "q", "谷歌"], ["cn.bing.com", "q", "必应"], ["m.sp.sm.cn", "q", "神马"]];

    var retuString = "";
    var retuObject = new Object();
    var i, j;

    if (str.indexOf("google.com") > -1) {
        retuObject.searchEngine = "google";
        retuObject.keyName = "not provide";
        retuObject.codeName = "not provide";
        return retuObject;
    }

    for (i = 0; i < _TheArray.length; i++) {
        var arr_l = new Array();
        arr_1 = _TheArray[i];
        var flag = -1;
        //是否找到符合_TheArray的搜索引擎
        if (str.indexOf(arr_1[0]) != -1) {
            //获取搜索引擎
            retuObject.searchEngine = arr_1[2];
            retuObject.webUrl = arr_1[0];
            //retuString=arr_1[2]+"----"+arr_1[0];
            //获取关键字
            //是否输入关键字变量
            var subName = "";
            var charName = getJsUrl(str, arr_1[1]);
            if (charName) {
                flag = str.indexOf(arr_1[1]) + arr_1[1].length;
            }

            if (flag != -1) {
                try {
                    retuObject.keyName = decodeURIComponent(charName);
                } catch (e) {
                    retuObject.keyName = charName;
                }
                charName = getJsUrl(str, arr_1[1]);

                retuObject.codeName = getCode(charName);
                //retuString=retuString+"----"+decodeURIComponent(charName)+"----"+getCode(charName);
                return retuObject;
            }
            //获取字符集
        }
    }
}

function getJsUrl(strUrl, wordKeyName) {
    var pos, str, para, parastr;
    if (strUrl.indexOf("?") > -1) {
        var array = parastr = strUrl.split("?")[1];
        var arr = parastr.split("&");
        for (var i = 0; i < arr.length; i++) {
            if (wordKeyName == arr[i].split("=")[0]) {
                return arr[i].split("=")[1];
            }
        }
    }
}

function getCode(str) {
    if (str.indexOf("%") == -1) {
        return "none";
    }
    var result = "";
    var a = str.split("%");
    for (var i = 1; i < a.length; i++) {
        if (a[i] && a[i].length >= 2) {
            var code = a[i].substr(0, 2);
            var b = parseInt(code, 16);
            var c = b.toString(2);
            result += padding(c, 8) + ' ';
        }
    }
    if (result == "") {
        return "none";
    }

    var exp_utf8 = /^(1110\d{4}\s10\d{6}\s10\d{6}\s?|0\d{7}\s?)+$/;
    var ret_utf8 = result.match(exp_utf8);
    if (ret_utf8) {
        return ("utf-8");
    } else {
        return ("gb2312");
    }
}
function padding(chr, len) {
    var l = len - chr.length;
    var r = chr;
    for (var i = 0; i < l; i++) {
        r = '0' + r;
    }
    return r;
}

//判断是否为一个元素的子元素
function isParent(obj, parentObj) {
    while (obj && obj.tagName && obj.tagName.toUpperCase() != 'BODY') {
        if (obj == parentObj) {
            return true;
        }
        obj = obj.parentNode;
    }
    return false;
}

//根据类名获取父元素的坐标
function getParentCoordsByClass(obj, className) {
    while (obj && obj.tagName && obj.tagName.toUpperCase() != 'BODY') {
        var obj_class = getClassName(obj);
        if (obj_class.indexOf(className) == 0) {
            var elem = getElemCoords(obj);
            coords = elem.left + "," + elem.top + "," + elem.right + "," + elem.bottom + "," + elem.scrollHeight;
            return coords;
        }
        obj = obj.parentNode;
    }
    return "";
}

function getElementLeft(element) {
    try {
        var actualLeft = element.offsetLeft;
        var current = element.offsetParent;
        while (current !== null) {
            actualLeft += current.offsetLeft;
            current = current.offsetParent;
        }
        return actualLeft;
    } catch (e) {
    }
}

function getElementTop(element) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}

//getcookie
function omniGetCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null;
}

function omnSetCookie(key, value, expire) {
    var exp = new Date();
    expire = expire ? expire : 30;
    exp.setTime(exp.getTime() + expire * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}


//站内搜索跟踪
function trkInternalSearch() {
    var searchKey = window.trk_searck_key;
    if (searchKey) {
        s_jt.eVar2 = decodeURI(searchKey);
        if (no_search_result_flag == 0) {
            intervalId = window.setInterval(checkSearchResult, 500);
        }
    }
    var internal_search_flag = omniGetCookie("internal_search_flag");
    if (internal_search_flag == "1") {
        s_jt.events = s_jt.apl(s_jt.events, 'event17', ',', 1);
        s_jt.contextData['internal_search_click_event'] = "1";
        s_jt.Util.cookieWrite("internal_search_flag", "0");
    }
}

function checkSearchResult() {
    //var result_div = document.getElementById("trk_no_search_result");
    //if(result_div){
    //no_search_result_flag = 1;
    //var search_result = result_div.innerHTML;
    var search_result = window.trk_no_search_result
    if (search_result) {
        no_search_result_flag = 1;
        if (search_result && !isNaN(search_result)) {
            window.clearInterval(intervalId);
            s_jt.linkTrackVars = "server,eVar4,eVar37,eVar38,events";
            s_jt.linkTrackEvents = 'event18';
            var searchKey = window.trk_searck_key;
            if (searchKey) {
                s_jt.eVar37 = decodeURI(searchKey);
            }
            s_jt.eVar38 = "y";
            if (search_result == "0") {
                s_jt.contextData['trk_no_search_result'] = "1";
                s_jt.linkTrackVars += ",contextData.trk_no_search_result";
                s_jt.events = "event18";
                s_jt.eVar38 = "n";
            }
            s_jt.tl(true, 'o', "trkSearchResult");
        }
    }
}

function trkSearchResultClick(obj) {
    if (s_jt.eVar2) {
        var div = document.getElementById("blockUl");
        var state = isParent(obj, div);
        if (state) {
            s_jt.Util.cookieWrite("internal_search_flag", "1");
        }
    }
}

//采集citycode信息
function trkCitycode() {
    var province = s_jt.Util.cookieRead('cityCode');
    if (province) {
        var short_province = province.substring(0, 2);
        if (province_exp.test(short_province)) {
            s_jt.eVar29 = province;
            s_jt.eVar4 = s_jt.server = short_province;
        }
    }
    var expires = new Date();
    expires.setTime(expires.getTime() + 365 * 86400000);
    var citycode_exp = /^(nx|nm|bj|tj|he|hl|sx|ln|jx|sh|hn|jl|ah|hi|sn|hb|fj|zj|cq|xz|qh|ha|gz|js|sc|xj|gs|sd|gx|gd|yn)-.+/;

    var tgCityCode = s_jt.Util.getQueryParam('citycode');
    if (tgCityCode) {
        s_jt.eVar29 = s_jt.eVar4 = s_jt.server = tgCityCode.substring(0, 2).toLowerCase();
        s_jt.Util.cookieWrite('cityCode', s_jt.eVar4, expires);
        return;
    }

    var cmpid = s_jt.Util.getQueryParam('cmpid').replace(/\#.*/, '');
    if (citycode_exp.test(cmpid)) {
        s_jt.eVar29 = s_jt.eVar4 = s_jt.server = cmpid.substring(0, 2).toLowerCase();
        s_jt.Util.cookieWrite('cityCode', s_jt.eVar4, expires);
        return;
    }

    var intid = s_jt.Util.getQueryParam('intid').replace(/\#.*/, '');
    if (citycode_exp.test(intid)) {
        s_jt.eVar29 = s_jt.eVar4 = s_jt.server = intid.substring(0, 2).toLowerCase();
        s_jt.Util.cookieWrite('cityCode', s_jt.eVar4, expires);
        return;
    }

    var citycode_exp2 = /^http:\/\/(nx|nm|bj|tj|he|hl|sx|ln|jx|sh|hn|jl|ah|hi|sn|hb|fj|zj|cq|xz|qh|ha|gz|js|sc|xj|gs|sd|gx|gd|yn)\.189\.cn.*/;
    var citycode_match = window.location.href.match(citycode_exp2);
    if (citycode_match && citycode_match.length > 1) {
        s_jt.eVar29 = s_jt.eVar4 = s_jt.server = citycode_match[1];
        s_jt.Util.cookieWrite('cityCode', s_jt.eVar4, expires);
        return;
    }
}

//检查订单是否重复提交
function checkOrderResubmit() {
    var isOrderResubmit = false;
    if (!document.referrer || !window.trkPurchaseId) {
        return true;
    }

    if (localData_fx.isSupport()) {
        var local_purchaseId = localData_fx.get(window.trkPurchaseId);
        if (!local_purchaseId) {
            localData_fx.set(window.trkPurchaseId, "1");
        } else {
            return true;
        }
    }

    var unique_purchaseId = getValueOnce(window.trkPurchaseId, "purchaseId");
    if (!unique_purchaseId) {
        return true;
    }

    //不统计从用户后台我的订单页面过来的订单生成，避免重复
    if (document.referrer) {
        var exp = /.*(myOrderInfoList\.do|virtualMyOrderInfo\.do).*/;
        if (exp.test(document.referrer)) {
            return true;
        }
    }

    //不统计从天翼小白首页跳转到支付页的订单
    if (document.referrer) {
        var exp1 = /.*(whiteCard\/checkCard_first\.jsp).*/;
        if (exp1.test(document.referrer)) {
            return true;
        }
    }
    return isOrderResubmit;
}

//首页二级导航点击统计
function trkHomeSubNavClick() {
    var isFromHomePage = false;
    var home_page_exp = /^http:\/\/(www.)?189.cn\/(nx|nm|bj|tj|he|hl|sx|ln|jx|sh|hn|jl|ah|hi|sn|hb|fj|zj|cq|xz|qh|ha|gz|js|sc|xj|gs|sd|gx|gd|yn|)\/?(\?.*)?$/;
    var referrer_url = document.referrer;
    if (referrer_url) {
        isFromHomePage = home_page_exp.test(referrer_url);
    }

    if (isFromHomePage) {
        var currentUrl = document.location.href;
        var match_exp = /^http:\/\/(www.)?189.cn\/dqmh\/tianyiMall\/searchMallAction.do\?method=shopPhone.+/;

        var match_exp2 = /http:\/\/(www.)?189.cn\/(189qq|safe|quanwangtong|[a-zA-Z]{1,2}\/zthd\/2014yzfNFCwt)\/?/;
        var match_nav = currentUrl.match(match_exp2);
        if (match_nav && match_nav.length > 2) {
            var type = match_nav[2];
            if (type && type.indexOf("2014yzfNFCwt") > 0) {
                type = "nfc";
            }
            var type_cn = "";
            switch (type) {
                case "189qq":
                    type_cn = "视频手机";
                    break;
                case "safe":
                    type_cn = "安全手机";
                    break;
                case "quanwangtong":
                    type_cn = "全网通";
                    break;
                case "nfc":
                    type_cn = "电信NFC一卡通";
                    break;
            }
            s_jt.contextData['nav_type'] = type_cn;
        } else if (match_exp.test(currentUrl)) {
            var pinpai = s_jt.Util.getQueryParam('pinpai');
            var jiage = s_jt.Util.getQueryParam('jiage');
            var xitong = s_jt.Util.getQueryParam('xitong');
            var chichun = s_jt.Util.getQueryParam('chichun');

            if (pinpai) {
                var pinpai_cn = decodeURI(decodeURI(pinpai));
                s_jt.contextData['nav_pinpai'] = pinpai_cn;
            } else if (jiage) {
                jiage = (jiage == "4001-20000") ? "4000以上" : jiage;
                s_jt.contextData['nav_jiage'] = jiage;
            } else if (xitong) {
                var xitong_cn = decodeURI(decodeURI(xitong));
                s_jt.contextData['nav_xitong'] = xitong_cn;
            } else if (chichun) {
                var chichun_cn = decodeURI(decodeURI(chichun));
                s_jt.contextData['nav_chichun'] = chichun_cn;
            }
        }
    }
}

function trkSiteChannel() {
    var url = document.location.href;
    var path = document.location.pathname;
    var kuandai_exp = /^\/(nx|nm|bj|tj|he|hl|sx|ln|jx|sh|hn|jl|ah|hi|sn|hb|fj|zj|cq|xz|qh|ha|gz|js|sc|xj|gs|sd|gx|gd|yn)(_.+)?\/kd\/.*$/;
    var service_exp = /^\/(nx|nm|bj|tj|he|hl|sx|ln|jx|sh|hn|jl|ah|hi|sn|hb|fj|zj|cq|xz|qh|ha|gz|js|sc|xj|gs|sd|gx|gd|yn)(_.+)?\/service\/.*$/;
    var laoyonghu_exp = /^\/(nx|nm|bj|tj|he|hl|sx|ln|jx|sh|hn|jl|ah|hi|sn|hb|fj|zj|cq|xz|qh|ha|gz|js|sc|xj|gs|sd|gx|gd|yn)(_.+)?\/(zthd\/smdhk|laoyonghu)\/.*$/;
    var shengqian_exp = /^\/(nx|nm|bj|tj|he|hl|sx|ln|jx|sh|hn|jl|ah|hi|sn|hb|fj|zj|cq|xz|qh|ha|gz|js|sc|xj|gs|sd|gx|gd|yn)(_.+)?\/shengqian\/.*$/;
    var tongchenghui_exp = /^\/(nx|nm|bj|tj|he|hl|sx|ln|jx|sh|hn|jl|ah|hi|sn|hb|fj|zj|cq|xz|qh|ha|gz|js|sc|xj|gs|sd|gx|gd|yn)(_.+)?\/tongchenghui\/.*$/;
    var haoma_exp = /^\/haoma\/.*/;
    var liuliang_exp = /^\/(nx|nm|bj|tj|he|hl|sx|ln|jx|sh|hn|jl|ah|hi|sn|hb|fj|zj|cq|xz|qh|ha|gz|js|sc|xj|gs|sd|gx|gd|yn)(_.+)?\/liuliang\/.*$/;
    var zhigo_exp = /^\/zhigo\/.*/;

    if (homePage_exp.test(path)) {
        s_jt.channel = "首页";
    } else if (kuandai_exp.test(path) || url.indexOf("http://cq.189.cn/activity/net/index.htm") == 0) {
        s_jt.channel = "宽带光纤";
    } else if (service_exp.test(path)) {
        s_jt.channel = "自助服务";
    } else if (laoyonghu_exp.test(path)) {
        s_jt.channel = "老用户";
    } else if (shengqian_exp.test(path)) {
        s_jt.channel = "省钱";
    } else if (tongchenghui_exp.test(path)) {
        s_jt.channel = "同城惠";
    } else if (haoma_exp.test(s_jt.pageName)) {
        s_jt.channel = "靓号专区";
    } else if (liuliang_exp.test(s_jt.pageName)) {
        s_jt.channel = "流量专区";
    } else if (s_jt.pageName.indexOf("/4g/") == 0) {
        s_jt.channel = "4g专区";
    } else if (s_jt.pageName.indexOf("/private/") == 0) {
        s_jt.channel = "个人定制";
    } else if (s_jt.pageName.indexOf("/yksh/") == 0) {
        s_jt.channel = "一卡双号";
        //手机频道定义放最后，因为有类似于http://shouji.189.cn/bj/kd/
        //这类网址，实际上却属于宽带频道的
    } else if (url.indexOf("http://shouji.189.cn") == 0) {
        s_jt.channel = "手机";
    } else if (zhigo_exp.test(path)) {
        s_jt.channel = "智能专区";
    } else {
        s_jt.channel = "其它";
    }
    //频道修正
    var navMenu = document.getElementById("indexMenus");
    if (navMenu && s_jt.channel != "其它") {
        var matchFlag = false;
        var channels = navMenu.getElementsByTagName("a");
        for (var i = 0; i < channels.length; i++) {
            var channelName = channels[i].innerHTML;
            if (s_jt.channel == channelName) {
                matchFlag = true;
                break;
            }
        }
        if (!matchFlag) {
            s_jt.channel = "其它";
        }
    }
}

function trkPageName() {
    s_jt.pageName = document.location.pathname;
    if (document.location.href.indexOf("http://shouji.189.cn") == 0) {
        s_jt.pageName = "shouji.189.cn" + s_jt.pageName;
    }
    var rVar = /[?&](method)\=\w+/gi;
    var tVar = document.location.search.match(rVar);
    if (tVar) {
        tVar = tVar.toString().replace(/[?&]/g, "");
        tVar = tVar.replace(",", "");
        s_jt.pageName += "?" + tVar;
    }
}

function addEvent(node, type, listener) {
    if (node.addEventListener) {
        node.addEventListener(type, listener, false);
        return true;
    } else if (node.attachEvent) {
        node['e' + type + listener] = listener;
        node[type + listener] = function () {
            node['e' + type + listener](window.event);
        };
        node.attachEvent('on' + type, node[type + listener]);
        return true;
    }
    return false;
}

//计算元素的位置和页面的高度
function getElemCoords(obj) {
    var elem = {};
    var left = getElementLeft(obj);
    var top = getElementTop(obj);
    var right = left + obj.offsetWidth;
    var bottom = top + obj.offsetHeight;

    var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    var scrollWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
    var borderWidth = Math.round((scrollWidth - 1200) / 2);
    if (scrollWidth > 1200) {
        left = left - borderWidth;
        right = left + obj.offsetWidth;
    }

    right = (right > 1200) ? 1200 : right;
    left = (left < 1) ? 0 : left;

    elem.left = left;
    elem.top = top;
    elem.right = right;
    elem.bottom = bottom;
    elem.scrollHeight = scrollHeight;

    return elem;
}
var container = document.getElementsByTagName("body")[0];
addEvent(container, "click", function (evt) {
    addMouseClickListener(evt);
});
function addMouseClickListener(evt, type) {
    try {
        if (s_jt.pageName.indexOf("/haoma/") == 0 && type != 1) {
            return;
        }
        if (evt) {
            obj = evt.srcElement || evt.target;
            if (obj) {
                var cobj = obj;
                var x = evt.pageX || (evt.clientX +
                    (document.documentElement.scrollLeft
                    || document.body.scrollLeft));
                var y = evt.pageY || (evt.clientY +
                    (document.documentElement.scrollTop
                    || document.body.scrollTop));
                var left = getElementLeft(obj);
                var scrollWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
                var borderWidth = Math.round((scrollWidth - 1200) / 2);
                if (scrollWidth > 1200) {
                    x = x - borderWidth;
                }
                var eleme = getElemCoords(obj);
                var hm_clickCoords = x + "," + y + "," + eleme.scrollHeight;
                s_jt.Util.cookieWrite('trkHmClickCoords', hm_clickCoords);

                //首页楼层左侧，img的父节点是p，p的父节点才是a
                var nodeName = obj.nodeName.toUpperCase();
                if (nodeName && nodeName != "A") {
                    obj = obj.parentNode;
                    if (obj.nodeName.toUpperCase() != "A") {
                        obj = obj.parentNode;
                    }
                }
                var href = obj.href;
                if (href && href.indexOf("189.cn") < 0 && href.indexOf("javascript") < 0) {
                    s_jt.linkTrackVars = "prop17,prop7,eVar3,eVar39";
                    var ql = href.indexOf("?");
                    s_jt.prop7 = ql > 0 ? href.substring(0, ql) : href;
                    var tempUrl;
                    var a1;
                    var a2;
                    if (ql > 0 && href.indexOf("intid=") > 0) {
                        tempUrl = href.split("intid=")[1];
                        a1 = tempUrl.indexOf("&") > 0 ? tempUrl.substring(0, tempUrl.indexOf("&")) : tempUrl;
                    }
                    if (ql > 0 && href.indexOf("intaid=") > 0) {
                        tempUrl = href.split("intaid=")[1];
                        a2 = tempUrl.indexOf("&") > 0 ? tempUrl.substring(0, tempUrl.indexOf("&")) : tempUrl;
                    }
                    s_jt.eVar3 = a1;
                    s_jt.eVar39 = a2;
                    s_jt.tl(true, 'o', "ExternalLinks");
                }
                if (href && href.indexOf("javascript") < 0 && s_jt.channel == "首页" && (href.indexOf("intid") > 0 || href.indexOf("intaid") > 0)) {
                    s_jt.linkTrackVars = "prop17,prop7,eVar3,eVar39";
                    var ql = href.indexOf("?");
                    s_jt.prop7 = ql > 0 ? href.substring(0, ql) : href;
                    var tempUrl;
                    var a1 = "";
                    var a2 = "";
                    if (ql > 0 && href.indexOf("intid=") > 0) {
                        tempUrl = href.split("intid=")[1];
                        a1 = tempUrl.indexOf("&") > 0 ? tempUrl.substring(0, tempUrl.indexOf("&")) : tempUrl;
                    }
                    if (ql > 0 && href.indexOf("intaid=") > 0) {
                        tempUrl = href.split("intaid=")[1];
                        a2 = tempUrl.indexOf("&") > 0 ? tempUrl.substring(0, tempUrl.indexOf("&")) : tempUrl;
                    }
                    s_jt.eVar3 = a1;
                    s_jt.eVar39 = a2;
                    if (a1) s_jt.Util.cookieWrite("trkintid", a1);
                    if (a2) s_jt.Util.cookieWrite("trkintaid", a2);
                    s_jt.tl(true, 'o', "internal_campaign");
                }
                //采集href为javascript类型的链接
                var onclick = obj.getAttribute("onclick");
                if (onclick && !s_jt.eVar2) {
                    href = "javascript:" + onclick;
                }
                if (href == "javascript:;") {
                    href = "";
                }

                if (href) {
                    //站内搜索结果点击
                    trkSearchResultClick(obj);
                    var url = document.location.href;
                    if (s_jt.channel
                        && (s_jt.channel != "其它" || s_jt.eVar2)  // 统计站内搜索页面的热图点击
                        && url.indexOf("http://zsc.189.cn") == -1) {
                        //热图坐标统计
                        var hmCoords = "";
                        //获取根据页面优化过的坐标
                        var correctionCoords = getHeatMapElemCoords(obj);
                        if (correctionCoords && correctionCoords != "exclude") {
                            hmCoords = correctionCoords;
                        } else if (!correctionCoords) {
                            var elem = getElemCoords(obj);
                            hmCoords = elem.left + "," + elem.top + "," + elem.right + "," + elem.bottom + "," + elem.scrollHeight;
                        }
                        if (hmCoords) {
                            var hmCitycode = getCorrectionCitycode();
                            if (!hmCitycode) {
                                hmCitycode = s_jt.eVar4;
                            }
                            //假如点击的链接是站内链接且没有出现在排除列表中，则在下一页发送
                            var hmPageName = s_jt.pageName;
                            if (hmPageName == "/") {
                                hmPageName = "/" + hmCitycode + "/";
                            }
                            //统一搜索页的hmPageName
                            if (s_jt.eVar2 || hmPageName.indexOf("/search/keyword/") == 0) {
                                hmPageName = "/search/keyword/";
                            }

                            //设置在点击时发送还是在下一页发送
                            if (internalLink_exp.test(href)
                                && !excludeLink_exp.test(href)
                                && s_jt.channel != "自助服务"  //自助服务页面点击直接发送
                                && s_jt.pageName != "/xiaoyuan/") { //校园页面的点击直接发送
                                s_jt.Util.cookieWrite('trkHmLinks', href);
                                s_jt.Util.cookieWrite('trkHmCoords', hmCoords);
                                s_jt.Util.cookieWrite('trkHmCity', hmCitycode);
                                s_jt.Util.cookieWrite('trkHmPageName', hmPageName);
                                s_jt.Util.cookieWrite('trkHmClickCoords', hm_clickCoords);
                                var trkHmCoords = omniGetCookie('trkHmCoords');
                            } else {
                                s_jt.linkTrackVars = "server,eVar4,eVar29,prop26,prop27,prop29,prop31,prop32,prop33";
                                s_jt.prop26 = hmPageName;
                                s_jt.prop27 = href;
                                s_jt.prop29 = hm_clickCoords;
                                s_jt.prop31 = hmCitycode;
                                s_jt.prop32 = hmCoords;
                                s_jt.prop33 = href;
                                s_jt.Util.cookieWrite('trkHmCitycode', '0');
                                s_jt.Util.cookieWrite('trkHmCoords', '0');
                                s_jt.Util.cookieWrite('trkHmPageName', '0');
                                s_jt.Util.cookieWrite('trkHmClickCoords', "0");
                                s_jt.tl(true, 'o', "external_url_heatmap");
                            }
                        }
                    }
                }
                //按钮点击统计
                if (clickeFlag) {
                    var btnAttr = cobj.getAttribute("trkbtn");
                    if (btnAttr && btnAttr.indexOf("trkBtnCount") == 0) {
                        var btnName = btnAttr.replace(/trkBtnCount_/, "");
                        var btnLocation = "";
                        if (btnAttr.indexOf("my189") > 0) {
                            var btnPrms = btnName.split("_");
                            var fpid = btnPrms[btnPrms.length - 1];
                            var fp = document.getElementById(fpid);
                            var tp = getFirstElementByAttr('div', 'tree_id', fpid);
                            tp = tp ? tp : getFirstElementByAttr('a', 'tree_id', fpid);
                            var btnLocation = btnPrms.length >= 2 ? btnPrms[0] + "_" + btnPrms[1] : btnPrams[0];
                            if (fp) {
                                btnLocation = btnLocation + "_" + fp.innerHTML;
                            } else if (tp) {
                                btnLocation = btnLocation + "_" + tp.innerHTML;
                            }
                            var btnContext = cobj.innerHTML;
                            btnLocation = btnLocation + "_" + btnContext;
                        }
                        s_jt.linkTrackVars = "prop42,prop7";
                        s_jt.prop7 = btnLocation;
                        s_jt.prop42 = btnName;
                        s_jt.tl(true, 'o', "BtnClick");
                    }
                }

            }
        }
    } catch (e) {
    }
}

//获取上一页热图点击坐标
function trkHmCoords() {
    var hmCoords = omniGetCookie('trkHmCoords');
    var hmPageName = omniGetCookie('trkHmPageName');
    var hmCitycode = omniGetCookie('trkHmCity');
    var hmLinks = omniGetCookie('trkHmLinks');
    var hmClickCoords = omniGetCookie('trkHmClickCoords');

    if (hmCoords && hmCoords != "0") {
        s_jt.prop26 = hmPageName;
        s_jt.prop29 = hmClickCoords;
        s_jt.prop31 = hmCitycode;
        s_jt.prop32 = hmCoords;
        s_jt.prop33 = hmLinks;
        s_jt.Util.cookieWrite('trkHmCoords', "0");
        s_jt.Util.cookieWrite('trkHmCity', "0");
        s_jt.Util.cookieWrite('trkHmLinks', '0');
        s_jt.Util.cookieWrite('trkHmClickCoords', "0");
    }

    //站内搜索框（iframe）的页面点击图
    var searchIframe = document.getElementById("iframesearchtext");
    if (searchIframe && document.location.href.indexOf("http://shouji.189.cn") == -1) {
        var iframeDocument = searchIframe.contentDocument || searchIframe.contentWindow.document;
        if (iframeDocument) {
            var bodyArr = iframeDocument.getElementsByTagName("body");
            if (bodyArr && bodyArr.length == 1) {
                var iframeContainer = bodyArr[0];
                addEvent(iframeContainer, "click", function (evt) {
                    trkInternalSearchClickMap(evt);
                });
            }
        }
    }
    if (s_jt.pageName.indexOf("/haoma/") == 0) {
        var exp = /(toBackup|toBuy)/;
        var arr = document.getElementsByTagName("a");
        if (doPluginsFlag == 1) {
            for (var i = 0; i < arr.length; i++) {
                var a = arr[i];
                if (!exp.test(getClassName(a))) {
                    addEvent(a, "click", function (evt) {
                        addMouseClickListener(evt, 1);
                    });
                }
            }
        }

        if (doPluginsFlag == 2) {
            for (var i = 0; i < arr.length; i++) {
                var a = arr[i];
                if (doPluginsFlag == 2 && exp.test(getClassName(a))) {
                    addEvent(a, "click", function (evt) {
                        addMouseClickListener(evt, 1);
                    });
                }
            }
        }
    }

}

//iframe站内搜索框的clickmap采集
function trkInternalSearchClickMap(evt) {
    obj = evt.srcElement || evt.target;
    if (obj) {
        var nodeName = obj.nodeName.toUpperCase();
        if (nodeName == "A") {
            var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            var x = evt.pageX || (evt.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
            var y = evt.pageY || (evt.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
            var hm_clickCoords = x + "," + y;
            s_jt.Util.cookieWrite('trkHmCoords2', "800,80,890,116," + scrollHeight);
            s_jt.Util.cookieWrite('trkHmCoords', "800,80,890,116," + scrollHeight);
            s_jt.Util.cookieWrite('trkHmCity', s_jt.eVar4);
            s_jt.Util.cookieWrite('trkHmPageName', s_jt.pageName);
            s_jt.Util.cookieWrite('trkHmLinks', "http://www.189.cn/search/keyword/");
            s_jt.Util.cookieWrite('trkHmClickCoords', hm_clickCoords);
        }
    }
}

//页面响应时长和5秒响应及时率
function trkResponseDuration() {
    var perf = window.performance || window.msPerformance || window.webkitPerformance;
    if (perf && perf.timing && perf.timing.navigationStart) {
        s_jt.eVar17 = document.location.pathname;
        var now = new Date().getTime();
        var page_load_time = now - perf.timing.navigationStart;
        if (page_load_time <= 5000) {
            s_jt.events = s_jt.apl(s_jt.events, 'event8', ',', 1);
        }
        if (page_load_time > 0 && page_load_time < 100000) {
            s_jt.prop28 = page_load_time;
        }
    }
}

//采集产品订单事件
function trkOrderEvents() {
    if (window.trkProducts && window.trkEvents && doPluginsFlag == 1) {
        s_jt.products = window.trkProducts.replace(/\s/g, "");
        products_tl = window.trkProducts.replace(/\s/g, "");
        var orderEvents = "";
        switch (window.trkEvents) {
            //产品查看
            case "prodView":
                orderEvents = "prodView";
                if (document.location.href.indexOf("http://cq.189.cn") == 0) {
                    var arr = products_tl.split(",");
                    if (arr.length > 1) {
                        for (var i = 1; i < arr.length; i++) {
                            s_jt.products = arr[i];
                            s_jt.linkTrackVars = "eVar4,products,events";
                            s_jt.linkTrackEvents = "prodView";
                            s_jt.events = orderEvents;
                            s_jt.tl(true, 'o', "prodView");
                        }
                    }
                    if (arr.length > 0) {
                        s_jt.products = arr[0];
                    }
                }
                break;
            case "choosePackage":
                orderEvents = "choosePackage";
                break;

            //订单填写
            case "scCheckout":
                orderEvents = "scCheckout";
                var param_orderId = s_jt.Util.getQueryParam("orderId");
                if (param_orderId) {
                    //记录订单填写未登录事件
                    if (s_jt.pageName.indexOf("/dqmh/chongzhi.do") == -1) {
                        var loginStatus = s_jt.Util.cookieRead('isLogin');
                        if (loginStatus == "logined") {
                            s_jt.eVar36 = "logined";
                        } else {
                            s_jt.eVar36 = "non-logined";
                            s_jt.events = s_jt.apl(s_jt.events, 'event12', ',', 1);
                            s_jt.Util.cookieWrite("nonlogin_orderId", param_orderId);
                            localData_fx.set("nonlogin_orderId", param_orderId);
                        }
                    }
                }
                break;
            //订单生成
            case "purchase":
                if (!checkOrderResubmit()) {
                    orderEvents = "purchase";
                    s_jt.eVar10 = window.trkPurchaseId;
                    s_jt.purchaseID = window.trkPurchaseId;
                    var pidL = s_jt.purchaseID.length;
                    if (pidL > 20) {
                        s_jt.purchaseID = s_jt.purchaseID.substring(pidL - 20);
                    }
                    //记录订单填写未登录的订单生成
                    var nonlogin_orderId = s_jt.Util.cookieRead("nonlogin_orderId");
                    if (nonlogin_orderId == window.trkPurchaseId) {
                        s_jt.eVar36 = "order_success";
                    } else if (localData_fx.get("nonlogin_orderId") == window.trkPurchaseId) {
                        s_jt.eVar36 = "order_success";
                    }
                }
                break;
        }
        if (orderEvents) {
            s_jt.events = s_jt.apl(s_jt.events, orderEvents, ",", 1);
        }
    }
}

//采集用户信息和登录状态
function trkUserInfo() {
    //采集登录账号
    var s_uid = s_jt.Util.cookieRead('userId');
    if (s_uid) {
        var user = s_uid.split('|');
        if (user.length > 1) {
            s_jt.eVar5 = user[0];
            s_jt.eVar6 = user[1];
        }
    }
    var s_uname = s_jt.Util.cookieRead('aactgsh111220');
    if (s_uname) {
        s_jt.eVar40 = s_uname;
    }
    //采集登录状态
    s_jt.eVar7 = s_jt.Util.cookieRead('isLogin');

    if (s_jt.eVar7 == "logined" && (s_jt.Util.cookieRead('loginStatus') == "non-logined" || s_jt.Util.cookieRead('loginStatus') == "")) {
        s_jt.prop40 = "logined";
    }
    if (!s_jt.Util.cookieRead('loginStatus') || !s_jt.eVar7) {
        var loginStatusVar = s_jt.eVar7 || 'non-logined';
        s_jt.Util.cookieWrite('loginStatus', loginStatusVar);
    }


    if (s_jt.eVar7) {
        if (s_jt.Util.cookieRead('loginStatus') != s_jt.eVar7) {
            s_jt.Util.cookieWrite('loginStatus', s_jt.eVar7);
        }
    }
}

//采集基本流量信息
function trkBaseTrafficInfo() {
    if (doPluginsFlag == 1) {
        s_jt.plugins = '';
        s_jt.prop1 = document.location.pathname;
        s_jt.prop2 = 'D=g';
        s_jt.prop3 = unescape(document.title);
        s_jt.prop4 = document.location.hostname;
        s_jt.prop6 = 'D=pid';
        s_jt.prop7 = 'D=oid';
        s_jt.prop13 = 'D=t';
        s_jt.prop18 = s_jt.codeVersion;
        s_jt.prop20 = s_jt.Util.cookieRead('s_tagEnv');
        if (document.location.href.indexOf("http://cq.189.cn") == 0) {
            s_jt.prop38 = "cq";
            s_jt.eVar4 = s_jt.server = "cq";
            s_jt.pageName = "cq.189.cn" + s_jt.pageName;
        }
        if (document.location.href.indexOf("http://xj.189.cn") == 0) {
            var pathName = document.location.pathname;
            var hostName = document.location.hostname;
            s_jt.pageName = hostName + pathName;
        }
        s_jt.prop45 = window.trkSCPurchaseId;
        s_jt.eVar1 = 'D=vid';
        s_jt.eVar3 = s_jt.Util.getQueryParam('intid').replace(/\#.*/, '');
        s_jt.eVar39 = s_jt.Util.getQueryParam('intaid').replace(/\#.*/, '');
        var url_intaid = s_jt.Util.getQueryParam('intaid').replace(/\#.*/, '');
        var url_intid = s_jt.Util.getQueryParam('intid').replace(/\#.*/, '');
        s_jt.eVar8 = window.trkPayType;
        s_jt.eVar9 = window.trkBank;
        s_jt.prop41 = window.sfjc;
        s_jt.campaign = GetQueryString("cmpid");
        var pt = window.trkPageType;
        if (pt) {
            s_jt.prop44 = pt;
        }
        if (localData_fx.isSupport()) {
            s_jt.events = s_jt.apl(s_jt.events, 'event99', ',', 1);
        }
        var c_intaid = s_jt.Util.cookieRead("trkintaid");
        if (c_intaid && c_intaid != "" && c_intaid != "1" && c_intaid == url_intaid) {
            s_jt.eVar39 = "";
            s_jt.Util.cookieWrite("trkintaid", "1");
        }
        var c_intid = s_jt.Util.cookieRead("trkintid");
        if (c_intid && c_intid != "" && c_intid != "1" && c_intid == url_intid) {
            s_jt.Util.cookieWrite("trkintid", "1");
            s_jt.eVar3 = "";
        }
    }
}

//采集首页反向链接
function trkHomePageReferrer() {
    var cookie_referer = s_jt.Util.cookieRead('sc_referer');
    if (homePage_exp.test(s_jt.pageName)) {
        if (cookie_referer && cookie_referer.indexOf("http") == 0) {
            sc_referer = cookie_referer;
            s_jt.referrer = cookie_referer;
            var exp = new Date();
            exp.setTime(exp.getTime() - 10000);
            s_jt.Util.cookieWrite('sc_referer', '', exp);
        }
    }
    s_jt.eVar35 = s_jt.referrer;
}

//采集搜索引擎流量信息
function trkSearchEngine() {
    var se_referrer = sc_referer ? sc_referer : document.referrer;
    if (se_referrer.indexOf('189.cn/') == -1) {
        var seObject = searchMatch(se_referrer);
        if (seObject) {
            s_jt.contextData['se'] = seObject.searchEngine;
            s_jt.contextData['se-encode'] = seObject.codeName;
            s_jt.contextData['se-kv'] = seObject.keyName;
        }
    }
}

//访客识别
function trkNewVisitors() {
    var expires = new Date();
    expires.setTime(expires.getTime() + 3650 * 86400000);

    var svid = s_jt.getVID();
    var localVid = localData_fx.get("lvid");
    if (localVid && localVid != svid) {
        s_jt.Util.cookieWrite("lvid", localVid, expires);
    }

    var nvid = s_jt.Util.cookieRead("nvid");
    if (localVid && !nvid) {
        s_jt.Util.cookieWrite("nvid", "1", expires);
    }
    if (!localVid && svid) {
        localData_fx.set("lvid", svid);
        if (!nvid) {
            s_jt.Util.cookieWrite("nvid", "1", expires);
            s_jt.prop39 = "1";
        }
    }

    var trkId = "";
    trkId = localData_fx.get("trkId");
    if (!trkId || trkId.length < 36) {
        trkId = s_jt.Util.cookieRead("trkId");
        if (!trkId || trkId.length < 36) {
            trkId = s_jt.uuidFast();
        }
        localData_fx.set("trkId", trkId);
    }
    s_jt.Util.cookieWrite("trkId", trkId, expires);
    s_jt.prop17 = trkId;

}

function getClassName(obj) {
    var className = obj.getAttribute("class");
    if (!className) {
        className = obj.getAttribute("className");
    }
    return className;
}

//热图坐标修正
function getHeatMapElemCoords(obj) {
    try {
        var path = document.location.pathname;
        var obj_class = getClassName(obj);
        if (obj.parentNode && obj.parentNode.parentNode) {
            var navParent = obj.parentNode.parentNode;
            var id = navParent.getAttribute("id");
            if (id == "indexMenus") { // 导航栏坐标，取父节点li的坐标
                return getCoordsByParent(obj, obj.parentNode);
            }
        }

        var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        var topCity = getFirstElementByAttr("div", "class", "topCity hode_show");
        if (isParent(obj, topCity)) {
            var coords = "200,87,281,116," + scrollHeight;
            return coords;
        }

        if (s_jt.channel != "其它") {
            //不采集左侧菜单的坐标点击
            if (obj.parentNode.getAttribute("id") == "ul_a_a" || (obj_class && obj_class.indexOf("its0") == 0)) {
                return "exclude";
            }
            var classmainleft = getFirstElementByAttr("div", "class", "classmainleft");
            if (isParent(obj, classmainleft)) {
                return "exclude";
            }
        }

        //站内搜索优化
        if (s_jt.eVar2) {
            var parentNode_search = obj.parentNode;
            var search_id = parentNode_search.getAttribute("id");
            var search_nodeName = parentNode_search.nodeName.toUpperCase();
            if (search_nodeName == "LI" && search_id.indexOf("fItem0") == 0) {
                var elem = getElemCoords(parentNode_search);
                coords = elem.left + "," + elem.top + "," + elem.right + "," + elem.bottom + "," + elem.scrollHeight;
                return coords;
            }
        }

        //4g专区优化
        if (s_jt.channel == "4g专区") {
            //4g专区2楼广告位坐标优化
            var toutmp = getFirstElementByAttr("ul", "class", "toutmp cfix");
            if (isParent(obj, toutmp)) {
                var liObj = obj.parentNode;
                var nodeName = liObj.nodeName.toUpperCase();
                while (nodeName != "BODY") {
                    if (nodeName == "LI") {
                        var elem = getElemCoords(liObj);
                        coords = elem.left + "," + elem.top + "," + elem.right + "," + elem.bottom + "," + elem.scrollHeight;
                        return coords;
                    }
                    liObj = liObj.parentNode;
                    nodeName = liObj.nodeName.toUpperCase();
                }
            }
            //4g专区上方焦点图坐标优化
            var slides = getFirstElementByAttr("ul", "class", "slides");
            if (isParent(obj, slides)) {
                var coords = "0,152,950,542" + "," + scrollHeight;
                return coords;
            }

            //4g专区4楼广告位坐标优化
            var thumbnail_parent = obj.parentNode;
            if (getClassName(thumbnail_parent) == "post_thumbnail") {
                var elem = getElemCoords(thumbnail_parent);
                coords = elem.left + "," + elem.top + "," + elem.right + "," + elem.bottom + "," + elem.scrollHeight;
                return coords;
            }
        }

        if (s_jt.channel == "手机") {
            var main_right_01 = getFirstElementByAttr("div", "class", "main_right_01");
            if (isParent(obj, main_right_01)) {
                return getParentCoordsByClass(obj, "show_photo ad");
            }
        }

        //靓号专区坐标优化
        if (s_jt.channel == "靓号专区") {
            var exp = /(close|buy)/;
            if (obj.href == document.location.href + "#" && exp.test(obj_class)) {
                return "exclude";
            }
            //靓号专区上方焦点图坐标优化
            var banner_show = document.getElementById("banner_show");
            if (isParent(obj, banner_show)) {
                return "0,171,1200,596," + scrollHeight;
            }
        }

        if (s_jt.channel == "一卡双号") {
            var yksh_parent = obj.parentNode;
            if (getClassName(yksh_parent).indexOf("bt_0") == 0) {
                var elem = getElemCoords(yksh_parent);
                coords = elem.left + "," + elem.top + "," + elem.right + "," + elem.bottom + "," + elem.scrollHeight;
                return coords;
            }
        }

        if (s_jt.channel == "宽带光纤") {
            var bd_fibre = obj.parentNode;
            if (getClassName(bd_fibre) == "bd_fibre" && getClassName(obj) == "pic") {
                var elem = getElemCoords(bd_fibre);
                coords = elem.left + "," + elem.top + "," + elem.right + "," + elem.bottom + "," + elem.scrollHeight;
                return coords;
            }
        }

        if (s_jt.channel == "首页") {
            //固定首页上方焦点图的坐标
            var playBox = document.getElementById("playBox");
            if (isParent(obj, playBox)) {
                return "190,197,970,617," + scrollHeight;
            }

            //楼层左侧
            var fi_b_left = obj.parentNode.parentNode;
            var fi_b_left_class = getClassName(fi_b_left);
            if (fi_b_left_class && fi_b_left_class.indexOf("fi_b_left") == 0) {
                return getCoordsByParent(obj, fi_b_left);
            }

            //不采集首页专区公告栏
            var voucha_2 = document.getElementById("voucha_2");
            if (isParent(obj, voucha_2)) {
                return "exclude";
            }

            //修正焦点图下方手机推荐栏的坐标
            var dock3 = document.getElementById("dock3");
            if (isParent(obj, dock3)) {
                var dock3SubElems = dock3.getElementsByTagName("a");
                var len = dock3SubElems.length;
                var offset = Math.round((1200 - len * 75) / 2);

                for (var j = 0; j < len; j++) {
                    if (dock3SubElems[j] == obj) {
                        var index = (j < len / 2) ? len - 1 : 0;
                        var destElem = dock3SubElems[index];
                        var width = parseInt(destElem.style.width);
                        var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
                        var x = width * j + offset;
                        var y = getElementTop(destElem);
                        var x2 = x + width;
                        var y2 = y + destElem.offsetHeight
                        var coords = x + "," + y + "," + x2 + "," + y2 + "," + scrollHeight;
                        return coords;
                    }
                }
            }

            //修正楼层广告位的坐标
            var divObj = obj.parentNode;
            var nodeName = divObj.nodeName;
            if (nodeName) {
                if (nodeName.toUpperCase() != "DIV") {
                    divObj = divObj.parentNode;
                    nodeName = divObj.nodeName;
                }
                if (nodeName.toUpperCase() == "DIV") {
                    var className = getClassName(divObj);
                    if (className.indexOf("box") == 0) {
                        var elem = getElemCoords(divObj);
                        var coords = elem.left + "," + elem.top + "," + elem.right + "," + elem.bottom + "," + elem.scrollHeight;
                        return coords;
                    }
                }
            }
        } else if (s_jt.channel == "手机") {
            var play_slides = document.getElementById("play_slides");
            return getCoordsByParent(obj, play_slides);
        } else if (s_jt.channel == "自助服务" || s_jt.channel == "同城惠") {
            var banner_show = document.getElementById("banner_show");
            if (isParent(obj, banner_show)) {
                return "0,197,1200,622," + scrollHeight;
            }
        } else if (s_jt.channel == "宽带光纤" || s_jt.channel == "省钱") {
            var playBox = document.getElementById("playBox");
            return getCoordsByParent(obj, playBox);
        } else if (s_jt.channel == "省钱") {
            var banner_show = document.getElementById("banner_show");
            return getCoordsByParent(obj, banner_show);
        } else if (s_jt.channel == "流量专区") {
            var home_banner = document.getElementById("home_banner");
            return getCoordsByParent(obj, home_banner);
        } else if (s_jt.channel == "个人定制") {
            var className = getClassName(obj.parentNode);
            if (className == "pic") {
                var coords = "0,143,950,533" + "," + scrollHeight;
                return coords;
            }
            var className = getClassName(obj.parentNode);
            if (className == "cus_one cfix") {
                return getCoordsByParent(obj, obj.parentNode);
            }
        }
    } catch (e) {
        s_jt.contextData['exception'] = "getHeatMapElemCoords";
    }
    return "";
}

function getCoordsByParent(obj, parentObj) {
    if (parentObj && isParent(obj, parentObj)) {
        var elem = getElemCoords(parentObj);
        var coords = elem.left + "," + elem.top + "," + elem.right + "," + elem.bottom + "," + elem.scrollHeight;
        return coords;
    }
}

function getCorrectionCitycode() {
    var indexMenus = document.getElementById("indexMenus");
    if (indexMenus) {
        var exp = /.*\/(nx|nm|bj|tj|he|hl|sx|ln|jx|sh|hn|jl|ah|hi|sn|hb|fj|zj|cq|xz|qh|ha|gz|js|sc|xj|gs|sd|gx|gd|yn)($|\/.*)/;
        var arr = indexMenus.getElementsByTagName("a");
        for (var i = 0; i < arr.length; i++) {
            var href = arr[i].href;
            if (href) {
                var matchArr = href.match(exp);
                if (matchArr && matchArr.length > 1) {
                    return matchArr[1];
                }
            }
        }
    }
}

//业务流程统计
function trkServiceProcessing() {
    if (doPluginsFlag == 1 && window.trkServiceEvents) {
        var sEvents = window.trkServiceEvents;
        var processReg = /^tyxb-purchase$/;
        var tyxbReg = /tyxb-/;
        var type = "others";
        var product = window.trkProducts;
        if (tyxbReg.test(sEvents)) {
            type = "tyxb";
        }
        if (processReg.test(sEvents)) {
            type = "purchase";
        }
        switch (type) {
            case "others":
                s_jt.prop34 = sEvents;
                if (product) {
                    s_jt.products = product;
                }
                break;
            case "tyxb":
                s_jt.prop34 = sEvents;
                if (product) {
                    s_jt.products = ";" + product;
                }
                break;
            case "purchase":
                s_jt.prop34 = sEvents;
                if (!checkOrderResubmit()) {
                    s_jt.eVar10 = window.trkPurchaseId;
                    s_jt.purchaseID = window.trkPurchaseId;
                    var pidL = s_jt.purchaseID.length;
                    if (pidL > 20) {
                        s_jt.purchaseID = s_jt.purchaseID.substring(pidL - 20);
                    }
                }
                break;
        }
    }
}


function trkServiceProcessing_tl(sEvents_tl) {
    if (sEvents_tl) {
        s_jt.prop34 = sEvents_tl;
        s_jt.linkTrackVars = "eVar4,prop34";
        s_jt.tl(true, 'o', "trkServiceProcessing_tl");
    }
}

function trkCQEvents() {
    if (s_jt.pageName == "cq.189.cn/pay/bestcz.htm") {
        s_jt.events = s_jt.apl(s_jt.events, 'scCheckout', ',', 1);
        s_jt.products = "411;18988888888cq";
    } else if (s_jt.pageName == "cq.189.cn/pay/11888.htm") {
        s_jt.events = s_jt.apl(s_jt.events, 'scCheckout', ',', 1);
        s_jt.products = "412;18977777777cq";
    } else if (s_jt.pageName == "cq.189.cn/pay/flow3g.htm") {
        s_jt.events = s_jt.apl(s_jt.events, 'scCheckout', ',', 1);
        s_jt.products = "413;18966666666cq";
    }
}


//重庆充值按钮的监听
if (document.location.href.indexOf("http://cq.189.cn") > -1) {
    var btn = document.getElementById("confirmPay");
    if (btn) {
        addEvent(btn, "click", function (evt) {
            trkConfirmPay(evt);
        });
    }
}


//重庆充值按钮
function trkConfirmPay(evt) {
    if (evt) {
        obj = evt.srcElement || evt.target;
        if (obj) {
            var phoneNumber = document.getElementById("confirmAccNbr").innerHTML;
            var timestamp = new Date().getTime();
            var orderEvents = "purchase";
            if (s_jt.pageName == "cq.189.cn/pay/bestcz.htm") {
                s_jt.eVar4 = "cq";
                s_jt.products = "411;18988888888cq";
                s_jt.purchaseID = phoneNumber + timestamp;
                s_jt.eVar10 = "18988888888cq";
                s_jt.linkTrackVars = "eVar4,purchaseID,products,eVar10,events";
                s_jt.linkTrackEvents = "purchase";
                s_jt.events = orderEvents;
                s_jt.tl(true, 'o', "trkConfirmPay");
                return;
            }
            if (s_jt.pageName == "cq.189.cn/pay/11888.htm") {
                s_jt.eVar4 = "cq";
                s_jt.products = "412;18977777777cq";
                s_jt.purchaseID = phoneNumber + timestamp;
                s_jt.eVar10 = "18977777777cq";
                s_jt.linkTrackVars = "eVar4,purchaseID,products,eVar10,events";
                s_jt.linkTrackEvents = "purchase";
                s_jt.events = "purchase";
                s_jt.tl(true, 'o', "trkConfirmPay");
                return;
            }
            if (s_jt.pageName == "cq.189.cn/pay/flow3g.htm") {
                s_jt.eVar4 = "cq";
                s_jt.products = "413;18966666666cq";
                s_jt.purchaseID = phoneNumber + timestamp;
                s_jt.eVar10 = "18966666666cq";
                s_jt.linkTrackVars = "eVar4,purchaseID,products,eVar10,events";
                s_jt.linkTrackEvents = "purchase";
                s_jt.events = "purchase";
                s_jt.tl(this, 'o', "trkConfirmPay");
                return;
            }
        }
    }
}

//四川宽带快速预约采集
function trkScNetSubscribe(orderId) {
    try {
        var cityValue = document.getElementById('selectProvince').innerHTML;
        var BlockValue = document.getElementById('selectProvincetwo').innerHTML;
        s_jt.prop45 = 'ksyy-' + orderId;
        s_jt.prop46 = SCUserInfo.userName;
        s_jt.prop47 = SCUserInfo.userPhoneNum;
        s_jt.prop48 = SCUserInfo.userId;
        s_jt.prop49 = cityValue + '&' + BlockValue + '&' + SCUserInfo.address;
        s_jt.linkTrackVars = "eVar4,prop17,prop41,prop45,prop46,prop47,prop48,prop49";
        s_jt.tl(true, 'o', "trkScNetSubscribe");
    } catch (e) {
    }
}
function trkSCUserInfo() {
    try {
        if (window.sfjc == 'sc') {
            var scUserCity = "";
            var scUserCityBlock = "";
            var scUserAddress = "";
            var linkMan = document.getElementById('linkMan');
            var linkManValue = linkMan.value;
            if (linkManValue != "请输入用户名" && linkManValue != "") {
                SCUserInfo.userName = linkManValue;
                linkMan.onblur = function () {
                    SCUserInfo.userName = linkMan.value
                }
            }
            var linkNo = document.getElementById('linkNo');
            var linkNoValue = linkNo.value;
            if (linkNoValue != "请输入联系电话" && linkNoValue.length > 6) {
                SCUserInfo.userPhoneNum = linkNoValue;
                linkNo.onblur = function () {
                    SCUserInfo.userPhoneNum = linkNo.value
                }
            }
            var cartNo = document.getElementById('cartNo');
            var cartNoValue1 = cartNo.value;
            if (cartNoValue1 != "请输入申办人身份证号码") {
                SCUserInfo.userId = cartNoValue1;
                cartNo.onblur = function () {
                    SCUserInfo.userId = cartNo.value
                }
            }
            var scAddress = document.getElementById('address');
            var addressValue = scAddress.value;
            if (addressValue != "例如：XX路XX小区XX单元XX号" && addressValue != "") {
                SCUserInfo.address = addressValue;
                scAddress.onblur = function () {
                    SCUserInfo.address = scAddress.value
                }
            }
        }
    } catch (e) {
    }
}
function trkGetFormInfo() {
    try {
        var urn = getElementsByAttr("input", "trkuserrealname", "true");
        if (urn != null) {
            for (var i = 0; i < urn.length; i++) {
                var tempEle = urn[i];
                addEvent(tempEle, "blur", function (evt) {
                    var bobj = evt.srcElement || evt.target;
                    if (bobj) SCUserInfo.userName = bobj.value
                })
            }
        }
        var upn = getElementsByAttr("input", "trkuserphonenum", "true");
        if (upn != null) {
            for (var i = 0; i < upn.length; i++) {
                var tempEle = upn[i];
                addEvent(tempEle, "blur", function (evt) {
                    var bobj = evt.srcElement || evt.target;
                    if (bobj) SCUserInfo.userPhoneNum = bobj.value
                })
            }
        }
        var ui = getElementsByAttr("input", "trkuseridentity", "true");
        if (ui != null) {
            for (var i = 0; i < ui.length; i++) {
                var tempEle = ui[i];
                addEvent(tempEle, "blur", function (evt) {
                    var bobj = evt.srcElement || evt.target;
                    if (bobj) SCUserInfo.userId = bobj.value
                })
            }
        }
        var ua = getElementsByAttr("input", "trkuseraddress", "true");
        if (ua != null) {
            for (var i = 0; i < ua.length; i++) {
                var tempEle = ua[i];
                addEvent(tempEle, "blur", function (evt) {
                    var bobj = evt.srcElement || evt.target;
                    if (bobj) SCUserInfo.address = bobj.value
                })
            }
        }
    } catch (e) {
    }
}
function trkSendFormInfo(pevName, orderId) {
    try {
        var pn = "sendFormInfo";
        var oi = "";
        if (pevName && pevName != "") pn = pevName;
        if (window.sfjc == 'sc' && orderId && orderId != "") {
            oi = orderId;
            s_jt.prop45 = oi
        }
        s_jt.prop46 = SCUserInfo.userName;
        s_jt.prop47 = SCUserInfo.userPhoneNum;
        s_jt.prop48 = SCUserInfo.userId;
        s_jt.prop49 = SCUserInfo.address;
        if (oi != "" || s_jt.prop46 != "" || s_jt.prop47 != "" || s_jt.prop48 != "" || s_jt.prop49 != "") {
            s_jt.linkTrackVars = "eVar4,prop17,prop41,prop45,prop46,prop47,prop48,prop49";
            s_jt.tl(true, 'o', pn)
        }
    } catch (e) {
        console.log(e)
    }
}

//  绑定
s_jt.bind = function (o, evt, fn) {
    if (o) {
        if (o.attachEvent) {
            o.attachEvent('on' + evt, fn);
        } else {
            o.addEventListener(evt, fn, false);
        }
        return true
    } else {
        return false
    }
}

function $_ID(a) {
    return document.getElementById(a);
}

function $_CN(a) {
    return document.getElementsByClassName(a);
}

function $_TN(a) {
    return document.getElementsByTagName(a);
}

function $_N(a) {
    return document.getElementsByName(a);
}
//  四川宽带绿通

function sc_kdlt() {
    try {
        var input_value;
        var nav_value = $_CN('on')[0].innerText;

        if (nav_value == "宽带") {

            input_value = $_CN('show')[0].getElementsByClassName('car_inp')[0].value;


        } else if (nav_value == "手机") {

            input_value = $_CN('show')[0].getElementsByClassName('num_inp')[0].value;

        } else if (nav_value == "座机") {

            input_value = $_CN('show')[0].getElementsByClassName('car_inp')[0].value;

        } else {

            input_value = $_CN('show')[0].getElementsByClassName('car_inp')[0].value;
        }

        s_jt.eVar40 = input_value;
        s_jt.linkTrackVars = "eVar40";
        s_jt.tl(true, 'o', 'sc_kdlt');
    } catch (e) {
    }
}

if (window.sfjc == 'sc') {
    try {
        var products = document.getElementsByClassName("product-wrap")[0].getElementsByClassName("product");
        var input1 = products[0].getElementsByClassName("car_inp")[0];
        var input2 = products[1].getElementsByClassName("num_inp")[0];
        var input3 = products[2].getElementsByClassName("car_inp")[0];
        var input4 = products[3].getElementsByClassName("car_inp")[0];
        s_jt.bind(input1, 'blur', function () {
            sc_kdlt();
        });
        s_jt.bind(input2, 'blur', function () {
            sc_kdlt();
        });
        s_jt.bind(input3, 'blur', function () {
            sc_kdlt();
        });
        s_jt.bind(input4, 'blur', function () {
            sc_kdlt();
        });
    } catch (e) {
    }
}