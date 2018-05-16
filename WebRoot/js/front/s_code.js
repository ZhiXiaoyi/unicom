sc();
function sc() {
    try {
        st = gc("s_tagEnv");
        st = st ? st : "live";
        sv = location.protocol.toLowerCase() + "//ctweb.omniture.cn:9000", d = document, ist = d
            .createElement("script");
        l = d.getElementsByTagName('head'), p = l && l[0] ? l[0] : '';
        ist.type = "text/javascript"
        ;v = gc("insight_v");
        js = v ? "ct189.js?v=" + v : "v.js?t=" + new Date().getTime();
        ist.src = sv + "/scode/" + st + "/" + js
        ;
        if (p.firstChild) {
            p.insertBefore(ist, p.firstChild)
        } else {
            p.appendChild(ist)
        }
    } catch (e) {
    }
}
function gc(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))return unescape
    (arr[2])
}