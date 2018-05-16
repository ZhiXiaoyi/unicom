if ("undefined" === typeof(Async) || !Async) {
    var Async = {}
}
Async.addHandler=function (target,eventType,handler) { 
    if(target.addEventListener) { 
        addHandler = function(target,eventType,handler){ 
            target.addEventListener(eventType,handler,false); 
        } 
    }else{ 
        addHandler = function(target,eventType,handler){ 
            target.attachEvent("on"+eventType,handler); 
        } 
    } 
    addHandler(target,eventType,handler); 
}
Async.Script = {
    loadScript: function(url, onload) {
        Async.Script.loadScriptDomElement(url, onload)
    },
    loadScripts: function(aUrls, onload) {
        var nUrls = aUrls.length;
        var bDifferent = false;
        for (var i = 0; i < nUrls; i++) {
            if (Async.Script.differentDomain(aUrls[i])) {
                bDifferent = true;
                break
            }
        }
        var loadFunc = Async.Script.loadScriptXhrInjection;
        if (bDifferent) {
            if ( - 1 != navigator.userAgent.indexOf("Firefox") || -1 != navigator.userAgent.indexOf("Opera")) {
                loadFunc = Async.Script.loadScriptDomElement
            } else {
                loadFunc = Async.Script.loadScriptDocWrite
            }
        }
        for (var i = 0; i < nUrls; i++) {
            loadFunc(aUrls[i], (i + 1 == nUrls ? onload: null), true)
        }
    },
    differentDomain: function(url) {
        if (0 === url.indexOf("http://") || 0 === url.indexOf("https://")) {
            var mainDomain = document.location.protocol + "://" + document.location.host + "/";
            return (0 !== url.indexOf(mainDomain))
        }
        return false
    },
    loadScriptDomElement: function(url, onload) {
        var domscript = document.createElement("script");
        domscript.src = url;
        if (onload) {
            domscript.onloadDone = false;
            domscript.onload = function() {
                if (!domscript.onloadDone) {
                    domscript.onloadDone = true;
                    onload()
                }
            };
            domscript.onreadystatechange = function() {
                if (("loaded" === domscript.readyState || "complete" === domscript.readyState) && !domscript.onloadDone) {
                    domscript.onloadDone = true;
                    onload()
                }
            }
        }
        document.getElementsByTagName("head")[0].appendChild(domscript)
    },
    loadScriptDocWrite: function(url, onload) {
        document.write("<scr" + 'ipt src="' + url + '" type="text/javascript"></scr' + "ipt>");
        if (onload) {
            Async.addHandler(window, "load", onload)
        }
    },
    queuedScripts: new Array(),
    loadScriptXhrInjection: function(url, onload, bOrder) {
        var iQueue = Async.Script.queuedScripts.length;
        if (bOrder) {
            var qScript = {
                response: null,
                onload: onload,
                done: false
            };
            Async.Script.queuedScripts[iQueue] = qScript
        }
        var xhrObj = Async.Script.getXHRObject();
        xhrObj.onreadystatechange = function() {
            if (xhrObj.readyState == 4) {
                if (bOrder) {
                    Async.Script.queuedScripts[iQueue].response = xhrObj.responseText;
                    Async.Script.injectScripts()
                } else {
                    var se = document.createElement("script");
                    document.getElementsByTagName("head")[0].appendChild(se);
                    se.text = xhrObj.responseText;
                    if (onload) {
                        onload()
                    }
                }
            }
        };
        xhrObj.open("GET", url, true);
        xhrObj.send("")
    },
    injectScripts: function() {
        var len = Async.Script.queuedScripts.length;
        for (var i = 0; i < len; i++) {
            var qScript = Async.Script.queuedScripts[i];
            if (!qScript.done) {
                if (!qScript.response) {
                    break
                } else {
                    var se = document.createElement("script");
                    document.getElementsByTagName("head")[0].appendChild(se);
                    se.text = qScript.response;
                    if (qScript.onload) {
                        qScript.onload()
                    }
                    qScript.done = true
                }
            }
        }
    },
    getXHRObject: function() {
        var xhrObj = false;
        try {
            xhrObj = new XMLHttpRequest()
        } catch(e) {
            var aTypes = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
            var len = aTypes.length;
            for (var i = 0; i < len; i++) {
                try {
                    xhrObj = new ActiveXObject(aTypes[i])
                } catch(e) {
                    continue
                }
                break
            }
        } finally {
            return xhrObj
        }
    }
};