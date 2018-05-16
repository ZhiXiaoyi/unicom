//jquery.cxscroll.min.js start
!function(a){a.fn.cxScroll=function(b){var c,d;this.length&&(b=a.extend({},a.cxScroll.defaults,b),c=this,d={lock:!1,dom:{}},d.init=function(){if(d.dom.box=c.find(".box"),d.dom.list=d.dom.box.find(".list"),d.dom.items=d.dom.list.find("li"),d.itemSum=d.dom.items.length,d.dom.list.append(d.dom.list.html()),!(d.itemSum<=1)){if(d.dom.prevBtn=c.find(".prev"),d.dom.nextBtn=c.find(".next"),d.itemWidth=d.dom.items.outerWidth(),d.itemHeight=d.dom.items.outerHeight(),"left"==b.direction||"right"==b.direction){if(d.itemWidth*d.itemSum<=d.dom.box.outerWidth())return;d.prevVal="left",d.nextVal="right",d.moveVal=d.itemWidth}else{if(d.itemHeight*d.itemSum<=d.dom.box.outerHeight())return;d.prevVal="top",d.nextVal="bottom",d.moveVal=d.itemHeight}b.prevBtn&&!d.dom.prevBtn.length&&(d.dom.prevBtn=a("<a></a>",{"class":"prev"}).prependTo(c)),b.nextBtn&&!d.dom.nextBtn.length&&(d.dom.nextBtn=a("<a></a>",{"class":"next"}).prependTo(c)),b.auto&&c.hover(function(){b.auto=!1,d.lock=!1,d.off()},function(){b.auto=!0,d.lock=!1,d.on()}),d.bindEvents(),d.on()}},d.bindEvents=function(){b.nextBtn&&d.dom.prevBtn.length&&d.dom.nextBtn.bind("click",function(){d.lock||d.goto(d.nextVal,b.accel)}),b.prevBtn&&d.dom.prevBtn.length&&d.dom.prevBtn.bind("click",function(){d.lock||d.goto(d.prevVal,b.accel)})},d.on=function(){b.auto&&("undefined"!=typeof d.run&&clearTimeout(d.run),d.run=setTimeout(function(){d.goto(b.direction)},b.time))},d.off=function(){d.dom.box.stop(!0),"undefined"!=typeof d.run&&clearTimeout(d.run)},d.goto=function(c,e){var f,g,h;switch(d.off(),b.controlLock&&(d.lock=!0),h=e||b.speed,c){case"left":case"top":f=0,"left"==c?(0==parseInt(d.dom.box.scrollLeft(),10)&&d.dom.box.scrollLeft(d.itemSum*d.moveVal),g=d.dom.box.scrollLeft()-d.moveVal*b.step,g%d.itemWidth>0&&(g-=g%d.itemWidth-d.itemWidth),f>g&&(g=f),d.dom.box.animate({scrollLeft:g},h,b.easing,function(){parseInt(d.dom.box.scrollLeft(),10)<=f&&d.dom.box.scrollLeft(0)})):(0==parseInt(d.dom.box.scrollTop(),10)&&d.dom.box.scrollTop(d.itemSum*d.moveVal),g=d.dom.box.scrollTop()-d.moveVal*b.step,g%d.itemHeight>0&&(g-=g%d.itemHeight-d.itemHeight),f>g&&(g=f),d.dom.box.animate({scrollTop:g},h,b.easing,function(){parseInt(d.dom.box.scrollTop(),10)<=f&&d.dom.box.scrollTop(0)}));break;case"right":case"bottom":f=d.itemSum*d.moveVal,"right"==c?(g=d.dom.box.scrollLeft()+d.moveVal*b.step,g%d.itemWidth>0&&(g-=g%d.itemWidth),g>f&&(g=f),d.dom.box.animate({scrollLeft:g},h,b.easing,function(){parseInt(d.dom.box.scrollLeft(),10)>=f&&d.dom.box.scrollLeft(0)})):(g=d.dom.box.scrollTop()+d.moveVal*b.step,g%d.itemHeight>0&&(g-=g%d.itemHeight),g>f&&(g=f),d.dom.box.animate({scrollTop:g},h,b.easing,function(){parseInt(d.dom.box.scrollTop(),10)>=f&&d.dom.box.scrollTop(0)}))}d.dom.box.queue(function(){b.controlLock&&(d.lock=!1),d.on(),a(this).dequeue()})},d.init())},a.cxScroll={defaults:{direction:"right",easing:"swing",step:1,accel:160,speed:800,time:4e3,auto:false,prevBtn:!0,nextBtn:!0,safeLock:!0}}}(jQuery);
//jquery.cxscroll.min.js end
//jquery.rotate.min.360.js  start 
(function(k){for(var d,f,l=document.getElementsByTagName("head")[0].style,h=["transformProperty","WebkitTransform","OTransform","msTransform","MozTransform"],g=0;g<h.length;g++)void 0!==l[h[g]]&&(d=h[g]);d&&(f=d.replace(/[tT]ransform/,"TransformOrigin"),"T"==f[0]&&(f[0]="t"));eval('IE = "v"=="\v"');jQuery.fn.extend({rotate:function(a){if(0!==this.length&&"undefined"!=typeof a){"number"==typeof a&&(a={angle:a});for(var b=[],c=0,d=this.length;c<d;c++){var e=this.get(c);if(e.Wilq32&&e.Wilq32.PhotoEffect)e.Wilq32.PhotoEffect._handleRotation(a);
else{var f=k.extend(!0,{},a),e=(new Wilq32.PhotoEffect(e,f))._rootObj;b.push(k(e))}}return b}},getRotateAngle:function(){for(var a=[],b=0,c=this.length;b<c;b++){var d=this.get(b);d.Wilq32&&d.Wilq32.PhotoEffect&&(a[b]=d.Wilq32.PhotoEffect._angle)}return a},stopRotate:function(){for(var a=0,b=this.length;a<b;a++){var c=this.get(a);c.Wilq32&&c.Wilq32.PhotoEffect&&clearTimeout(c.Wilq32.PhotoEffect._timer)}}});Wilq32=window.Wilq32||{};Wilq32.PhotoEffect=function(){return d?function(a,b){a.Wilq32={PhotoEffect:this};
this._img=this._rootObj=this._eventObj=a;this._handleRotation(b)}:function(a,b){this._img=a;this._onLoadDelegate=[b];this._rootObj=document.createElement("span");this._rootObj.style.display="inline-block";this._rootObj.Wilq32={PhotoEffect:this};a.parentNode.insertBefore(this._rootObj,a);if(a.complete)this._Loader();else{var c=this;jQuery(this._img).bind("load",function(){c._Loader()})}}}();Wilq32.PhotoEffect.prototype={_setupParameters:function(a){this._parameters=this._parameters||{};"number"!==
typeof this._angle&&(this._angle=0);"number"===typeof a.angle&&(this._angle=a.angle);this._parameters.animateTo="number"===typeof a.animateTo?a.animateTo:this._angle;this._parameters.step=a.step||this._parameters.step||null;this._parameters.easing=a.easing||this._parameters.easing||this._defaultEasing;this._parameters.duration=a.duration||this._parameters.duration||1E3;this._parameters.callback=a.callback||this._parameters.callback||this._emptyFunction;this._parameters.center=a.center||this._parameters.center||
["50%","50%"];this._rotationCenterX="string"==typeof this._parameters.center[0]?parseInt(this._parameters.center[0],10)/100*this._imgWidth*this._aspectW:this._parameters.center[0];this._rotationCenterY="string"==typeof this._parameters.center[1]?parseInt(this._parameters.center[1],10)/100*this._imgHeight*this._aspectH:this._parameters.center[1];a.bind&&a.bind!=this._parameters.bind&&this._BindEvents(a.bind)},_emptyFunction:function(){},_defaultEasing:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-
1)+c},_handleRotation:function(a,b){d||this._img.complete||b?(this._setupParameters(a),this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart()):this._onLoadDelegate.push(a)},_BindEvents:function(a){if(a&&this._eventObj){if(this._parameters.bind){var b=this._parameters.bind,c;for(c in b)b.hasOwnProperty(c)&&jQuery(this._eventObj).unbind(c,b[c])}this._parameters.bind=a;for(c in a)a.hasOwnProperty(c)&&jQuery(this._eventObj).bind(c,a[c])}},_Loader:function(){return IE?function(){var a=
this._img.width,b=this._img.height;this._imgWidth=a;this._imgHeight=b;this._img.parentNode.removeChild(this._img);this._vimage=this.createVMLNode("image");this._vimage.src=this._img.src;this._vimage.style.height=b+"px";this._vimage.style.width=a+"px";this._vimage.style.position="absolute";this._vimage.style.top="0px";this._vimage.style.left="0px";this._aspectW=this._aspectH=1;this._container=this.createVMLNode("group");this._container.style.width=a;this._container.style.height=b;this._container.style.position=
"absolute";this._container.style.top="0px";this._container.style.left="0px";this._container.setAttribute("coordsize",a-1+","+(b-1));this._container.appendChild(this._vimage);this._rootObj.appendChild(this._container);this._rootObj.style.position="relative";this._rootObj.style.width=a+"px";this._rootObj.style.height=b+"px";this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;for(this._eventObj=this._rootObj;a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}:function(){this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._imgWidth=this._img.naturalWidth;this._imgHeight=this._img.naturalHeight;var a=Math.sqrt(this._imgHeight*this._imgHeight+this._imgWidth*this._imgWidth);this._width=3*a;this._height=3*a;this._aspectW=this._img.offsetWidth/this._img.naturalWidth;this._aspectH=this._img.offsetHeight/this._img.naturalHeight;this._img.parentNode.removeChild(this._img);this._canvas=document.createElement("canvas");
this._canvas.setAttribute("width",this._width);this._canvas.style.position="relative";this._canvas.style.left=-this._img.height*this._aspectW+"px";this._canvas.style.top=-this._img.width*this._aspectH+"px";this._canvas.Wilq32=this._rootObj.Wilq32;this._rootObj.appendChild(this._canvas);this._rootObj.style.width=this._img.width*this._aspectW+"px";this._rootObj.style.height=this._img.height*this._aspectH+"px";this._eventObj=this._canvas;for(this._cnv=this._canvas.getContext("2d");a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer);this._animateStartTime=+new Date;this._animateStartAngle=this._angle;this._animate()},_animate:function(){var a=+new Date,b=a-this._animateStartTime>this._parameters.duration;if(b&&!this._parameters.animatedGif)clearTimeout(this._timer);else{if(this._canvas||this._vimage||this._img)a=this._parameters.easing(0,a-this._animateStartTime,this._animateStartAngle,this._parameters.animateTo-this._animateStartAngle,this._parameters.duration),
this._rotate(~~(10*a)/10);this._parameters.step&&this._parameters.step(this._angle);var c=this;this._timer=setTimeout(function(){c._animate.call(c)},10)}this._parameters.callback&&b&&(this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj))},_rotate:function(){var a=Math.PI/180;return IE?function(a){this._angle=a;this._container.style.rotation=a%360+"deg";this._vimage.style.top=-(this._rotationCenterY-this._imgHeight/2)+"px";this._vimage.style.left=
-(this._rotationCenterX-this._imgWidth/2)+"px";this._container.style.top=this._rotationCenterY-this._imgHeight/2+"px";this._container.style.left=this._rotationCenterX-this._imgWidth/2+"px"}:d?function(a){this._angle=a;this._img.style[d]="rotate("+a%360+"deg)";this._img.style[f]=this._parameters.center.join(" ")}:function(b){this._angle=b;b=b%360*a;this._canvas.width=this._width;this._canvas.height=this._height;this._cnv.translate(this._imgWidth*this._aspectW,this._imgHeight*this._aspectH);this._cnv.translate(this._rotationCenterX,
this._rotationCenterY);this._cnv.rotate(b);this._cnv.translate(-this._rotationCenterX,-this._rotationCenterY);this._cnv.scale(this._aspectW,this._aspectH);this._cnv.drawImage(this._img,0,0)}}()};IE&&(Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{return!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(a){return function(a){return document.createElement("<"+
a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}())})(jQuery);
//jquery.rotate.min.360.js  end 
//jquery.cookiescc.js  start 
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        //var path = options.path ? '; path=' + (options.path) : '';
	var path = ";path=/" ;
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure,].join('');
	
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
///jquery.cookiescc.js  end
//s_code.js  start 
sc();function sc(){try{st=gc("s_tagEnv");st=st?st:"live";sv=location.protocol.toLowerCase()+"//ctweb.omniture.cn:9000",d=document,ist=d.createElement("script");l=d.getElementsByTagName('head'),p=l&&l[0]?l[0]:'';
	ist.type="text/javascript";v=gc("insight_v");js=v?"ct189.js?v="+v:"v.js?t="+new Date().getTime();ist.src=sv+"/scode/"+st+"/"+js;
	if(p.firstChild){p.insertBefore(ist,p.firstChild)}else{p.appendChild(ist)}}catch(e){}}
		function gc(name){var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");if(arr=document.cookie.match(reg))return unescape(arr[2])}
//s_code.js  end 
//jquery.js  start
<!--搜索框tab-->
function secBoard(elementID, listName, elementname, n) {
	var elem = document.getElementById(elementID);
	 var elemlist = elem.getElementsByTagName(elementname);
	for (var i = 0; i < elemlist.length; i++) {
		elemlist[i].className = "li02";
		var m = i + 1;
			document.getElementById(listName + "_" + m).style.display = "none";
		}
		elemlist[n - 1].className = "li01";
			document.getElementById(listName + "_" + n).style.display = "block";
}
//*位移
$(function () {
	 $('.go_img img').hover(function () {
        if($(this).css('opacity')) {
            $(this).css('opacity',1);
        }
        $(this).stop().animate({
            'margin-left': '-10px'
        }, 200)
    }, function () {
        $(this).stop().animate({
            'margin-left': '0'
        }, 200);
    });
}); 
/*腰带
$(function () { 
	// Dock initialize
	$('#dock').Fisheye(
		{
			maxWidth: 40,
			items: 'a',
			itemsText: 'span',
			container: '.dock-container',
			itemWidth: 90,
			proximity: 90,
			alignment : 'left',
			valign: 'bottom',
			halign : 'center'
		}
	);
});*/
/*360*/
function imgRotate() {
    // $("#img1").rotate({ 
    //    bind: 
    //      { 
    //         mouseover : function() { 
    //             $(this).rotate({animateTo:360});
    //         },
    //         mouseout : function() { 
    //             $(this).rotate({animateTo:0});
    //         }
    //      }     
    // });
    // var itemlist = [];
    // for(var i=1; i<17; i++) {
    //     var item = $("#img" + i);
    //     itemlist.push(item);  
    // }

    // $("#img1").lazyload({ 
    //     failure_limit: 10,
    //     effect : "fadeIn",
    //     skip_invisible : true,//加载隐藏图片
    //     load: function() {
    //         var flag = true;
    //         if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0") {
    //             flag = $("#img1")[0].complete;
    //         }
    //         if(flag) {
    //             $("#img1").rotate({ 
    //                bind: 
    //                  { 
    //                     mouseover : function() { 
    //                         $(this).rotate({animateTo:360});
    //                     },
    //                     mouseout : function() { 
    //                         $(this).rotate({animateTo:0});
    //                     }
    //                  }     
    //             });
    //         }else {
    //             setTimeout(arguments.callee(),500)
    //         }
            
    //     }
    // });
    $('.fs p img').not('#img1').not('#img2').lazyload({ 
        failure_limit: 10,
        effect : "fadeIn",
        skip_invisible : true,//加载隐藏图片
        load: function() {
            var flag = true;
            if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0") {
                flag = $(this)[0].complete;
            }
            if(flag) {
                $(this).rotate({ 
                   bind: 
                     { 
                        mouseover : function() { 
                            $(this).rotate({animateTo:360});
                        },
                        mouseout : function() { 
                            $(this).rotate({animateTo:0});
                        }
                     }     
                });
            }else {
                setTimeout(arguments.callee(),500)
            }
            
        }
    });

    $('#img1').lazyload({ 
        threshold: -35,
        failure_limit: 10,
        effect : "fadeIn",
        skip_invisible : true,//加载隐藏图片
        load: function() {
            var flag = true;
            if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0") {
                flag = $(this)[0].complete;
            }
            if(flag) {
                $(this).rotate({ 
                   bind: 
                     { 
                        mouseover : function() { 
                            $(this).rotate({animateTo:360});
                        },
                        mouseout : function() { 
                            $(this).rotate({animateTo:0});
                        }
                     }     
                });
            }else {
                setTimeout(arguments.callee(),500)
            }
            
        }
    });
    $('#img2').lazyload({ 
        threshold: -35,
        failure_limit: 10,
        effect : "fadeIn",
        skip_invisible : true,//加载隐藏图片
        load: function() {
            var flag = true;
            if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0") {
                flag = $(this)[0].complete;
            }
            if(flag) {
                $(this).rotate({ 
                   bind: 
                     { 
                        mouseover : function() { 
                            $(this).rotate({animateTo:360});
                        },
                        mouseout : function() { 
                            $(this).rotate({animateTo:0});
                        }
                     }     
                });
            }else {
                setTimeout(arguments.callee(),500)
            }
            
        }
    });


    $('.advisory ul li a img').lazyload({ 
        failure_limit: 10,
        effect : "fadeIn",
        skip_invisible : true,//加载隐藏图片
        load: function() {
            var flag = true;
            if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0") {
                flag = $(this)[0].complete;
            }
            if(flag) {
                $(this).rotate({ 
                   bind: 
                     { 
                        mouseover : function() { 
                            $(this).rotate({animateTo:360});
                        },
                        mouseout : function() { 
                            $(this).rotate({animateTo:0});
                        }
                     }     
                });
            }else {
                setTimeout(arguments.callee(),500)
            }
            
        }
    });


 if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0" || 
    navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0") 
{ 
    
    //img1-img12
    $('.fs p img').each(function() {
       $(this).attr('data-original', $(this).attr('data-original') + '?a=' + Math.random()); 
    });
    //img13-img16
    $('.advisory ul li a img').each(function() {
       $(this).attr('data-original', $(this).attr('data-original') + '?a=' + Math.random()); 
    });
} 
    

    
    //img1-img12
    
    // $('.fs p img').each(function() {
    //     var ele = $(this);
    //     ele[0].onload = function() {
    //         if(ele.attr('src')) {
    //             if(ele.attr('src').indexOf('grey.gif') > -1) {
    //                 setTimeout(function(){check();},500);
    //                 return;
    //             }
    //         }
    //         ele.rotate({ 
    //            bind: 
    //              { 
    //                 mouseover : function() { 
    //                     $(this).rotate({animateTo:360});
    //                 },
    //                 mouseout : function() { 
    //                     $(this).rotate({animateTo:0});
    //                 }
    //              }     
    //         });
    //     }
    //     function check(){//ie7下显示bug的修复
    //         if(ele[0].complete){
    //             ele[0].onload();
    //         }else{
    //             setTimeout(function(){check();},500);//每隔0.5秒检查一次
    //         }
    //     }
    //     check();
    // });
           
    
}

/*banner*/
$(function(){
var timer=3000;
var showtime = 800;
var showbox = $("#banner_show");
var inbox = $(".bannger_inbox");
var movelist = $("#yq_banner_list");
var s;
var b = 0;
var size =inbox.size();
var play = 1;
function move(){
b++;
if(b>size-1){
b=0;
}
inbox.each(function(e){
inbox.eq(e).hide(0);
$("#banner_magbox"+e).hide();
movelist.find("a").eq(e).removeClass("hover");
if(e == b){

    //这边开始我加的
            var dataOriginal = inbox.find("img").eq(e).attr("data-original");
            if( dataOriginal) {
                for(var i=3;i<size;i++) {
                    var dataOri = inbox.find("img").eq(i).attr("data-original");
                    if(dataOri != ""){
                        inbox.find("img").eq(i).attr("src",dataOri);
                        inbox.find("img").eq(i).removeAttr("data-original");
                    }                   
                }               
            }
            //我加的结束



inbox.eq(b).fadeIn(showtime);
$("#banner_magbox"+b).show();
movelist.find("a").eq(b).addClass("hover");
}
});
}
s = setInterval(move,timer);
function stopp(obj){
$(obj).hover(function(){
if(play){
clearInterval(s);
play = 0;
}	  
},
function(){
if(!play){
s = setInterval(move,timer); 
play = 1;
}	
}		  
);
}
stopp(".banner_show");
$(".banner_btn_right").click(function(){
move(); 
});
$(".banner_btn_left").click(function(){
b--;
if(b<0){
b=size-1
}
inbox.each(function(e){
inbox.eq(e).hide(0);
movelist.find("a").eq(e).removeClass("hover");
if(e == b){
inbox.eq(b).fadeIn(showtime);
movelist.find("a").eq(b).addClass("hover");
}
}); 
});
movelist.find("a").click(function(){
var rel = $(this).attr("rel");
inbox.each(function(e){
inbox.eq(e).hide(0);
movelist.find("a").eq(e).removeClass("hover");
$("#banner_magbox"+e).hide(0);
if(e == rel){

            //这边开始我加的
            var dataOriginal = inbox.find("img").eq(e).attr("data-original");
            if( dataOriginal) {
                for(var i=3;i<size;i++) {
                    var dataOri = inbox.find("img").eq(i).attr("data-original");
                    if(dataOri != ""){
                        inbox.find("img").eq(i).attr("src",dataOri);
                        inbox.find("img").eq(i).removeAttr("data-original");
                    }                   
                }               
            }
            //我加的结束

inbox.eq(rel).fadeIn(showtime);
movelist.find("a").eq(rel).addClass("hover");
$("#banner_magbox"+rel).show(0);	
}
});
});
$(".bannger_inbox").each(function(e){
var inboxsize = $(".bannger_inbox").size();
inboxwimg = $(this).find("img").width();
$(".bannger_inbox").eq(e).css({"margin-left":(-1)*inboxwimg/2+"px","z-index":inboxsize-e});
});
});
/*专区*tab*/
(function(){
	$.fn.tabs = function(o){
		var o = $.extend({meth:"hover"}, o||{})
		return this.each(function(){
			var $menu = $(this).children(".tab_menu").children("li"), $cont = $(this).children(".tab_cont").children(".cont");
			$menu.each(function(i){	
				if(o.meth == "click"){
					$(this).click(function(){ toggle(i) });				
				}else if(o.meth == "hover"){					
					$(this).hover(function(){ toggle(i) });
				}
			});
			function toggle(i){              
				$menu.removeClass("cur");
				$menu.eq(i).addClass("cur");
				$cont.removeClass("cur");
				$cont.eq(i).addClass("cur");
			}
		});
	}
})(jQuery);
$(function(){      
       $(".tab01").tabs({meth:"hover"});   
});
/*right_bottom*/
function secBoard(elementID, listName, elementname, n) {
    var elem = document.getElementById(elementID);
    var elemlist = elem.getElementsByTagName(elementname);
    for (var i = 0; i < elemlist.length; i++) {
        elemlist[i].className = "li02";
        var m = i + 1;
        document.getElementById(listName + "_" + m).style.display = "none";
    }
    elemlist[n - 1].className = "li01";
    document.getElementById(listName + "_" + n).style.display = "block";
}		
<!--下拉框-->
function getObject(objectId){
	if(document.getElementById && document.getElementById(objectId)){
		return document.getElementById(objectId);
	}else if(document.all && document.all(objectId)){
		return document.all(objectId);
	}else if(document.layers && document.layers[objectId]){
		return document.layers[objectId];
	}else{
		return false;
		}
	}                                       
	 function showHide(e,objname){
		var obj = getObject(objname);
		if(obj.style.display == "none"){
			obj.style.display = "block";
			e.className="minus";
		}else{
			obj.style.display = "none";
			e.className="plus";
		}
}
//*下拉选取地区
$(function(){
	$("#dropdowna p").click(function(){
		var ul = $("#dropdowna ul");
		if(ul.css("display")=="none"){
			ul.slideDown("fast");
		}else{
			ul.slideUp("fast");
		}
	});
	$("#dropdowna ul li a").click(function(){
		var txt = $(this).text();
		$("#dropdowna p").html(txt);
		var value = $(this).attr("rel");
		$("#dropdowna ul").hide();
		$("#result").html("您选择了"+txt+"，值为："+value);
	});
	
});

function AddFavorite(sURL, sTitle) {
	try {
		window.external.addFavorite(sURL, sTitle);
	} catch (e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, "");
		} catch (e) {
			alert("您的浏览器不支持直接将页面添加为书签，请使用Ctrl + D手动操作。");
		}
	}
} 
//jquery.js  end 

//redirectProvince.js  start 
function redirectProvince(cityCode){
	var date = new Date();
	date.setTime(date.getTime()+1000*60*60*24*30);
	saveCookieUtil("cityCode",cityCode,date,"",".189.cn");
	
	var form = document.createElement("form");
	form.setAttribute("action", "/dqmh/system.do?operate=getCookie&city="+cityCode);
	form.setAttribute("method", "post");
	document.body.appendChild(form);
	form.submit();
}

function saveCookieUtil(cookieName,cookieValue,expiresTime,path,domain){
	
	var Days = 30; //cookie 将被保存一个月   
	var exp = new Date(); //获得当前时间   
	//cookie默认保存时间
	if(expiresTime == ''){
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000); //换成毫秒
	}else{
		exp = expiresTime;
	}
	
	if(path == ''){
		path = "/";
	}
	document.cookie = cookieName + "=" +escape(cookieValue)+";expires="+exp.toGMTString()+"; path="+path+";domain="+domain;
}
//redirectProvince.js  end
//--------------------
//图片延时加载lazyload插件
/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
//Lazy Load 1.9.3 end
/**延时加载图片*/
$("img:not(#pic_list_2 .list li a img)").not('#img1').not('#img2').show().lazyload();
$("img:not(#pic_list_2 .list li a img)").not('#img1').not('#img2').lazyload({ 
    failure_limit: 10,
    effect : "fadeIn",
    skip_invisible : true//加载隐藏图片
});

$('#pic_list_2 .list li a img').lazyload({
    threshold: -60,
    failure_limit: 10,
    effect : "fadeIn",
    skip_invisible : true//加载隐藏图片
});


$(".meun_down >  ul > li").hover(function() {
	$(this).find("img").each(function() {
		if ($(this).attr("data-original") != "") {
			$(this).attr("src", $(this).attr("data-original"));
			$(this).removeAttr("data-original");
		}
	})
});
//===========================
//延迟加载超值购部分的小图标
$(".tabmenu01").mouseenter(function(){
	$("#pic_list_0").find("img").each(function() {
		if ($(this).attr("data-original") != "") {
			$(this).attr("src", $(this).attr("data-original"));
			$(this).removeAttr("data-original");
		}
	})
});

//"欢乐购"左右切换按钮延迟加载事件
// $("#pic_list_0 > a").click(function(){
// 	$("#pic_list_0").find("img").each(function() {
// 		if ($(this).attr("data-original") != "") {
// 			$(this).attr("src", $(this).attr("data-original"));
// 			$(this).removeAttr("data-original");
// 		}
// 	})
// });

//首页头部"消费者帮助中心"
$("#helpcenter").mouseenter(function(){
	var imgObj=$("#helpcenter_img");
	if (imgObj.attr("data-original") != "") {
		imgObj.attr("src", imgObj.attr("data-original"));
		imgObj.removeAttr("data-original");
	}
});

//首页头部"欢go客户端"
$("#goclient").mouseenter(function(){
	var imgObj=$("#goclient_img");
	if (imgObj.attr("data-original") != "") {
		imgObj.attr("src", imgObj.attr("data-original"));
		imgObj.removeAttr("data-original");
	}
});

//头部鼠标移入显示加载小图片
$(".login_ul li").mouseenter(function(){
	$(this).find("img").each(function() {
		if ($(this).attr("data-original") != "") {
			$(this).attr("src", $(this).attr("data-original"));
			$(this).removeAttr("data-original");
		}
	})
});

//“欢享服务”第二页小图标延迟加载
$("#pic_list_1").click(function(event){
    if($(event.target).hasClass("next") || $(event.target).hasClass("prev") ) {
        $("#pic_list_1 > div[class='box']:eq(0) li:eq(1)").find("img").each(function() {
            if ($(this).attr("data-original") != "") {
                $(this).parent().css("display","block");
                $(this).attr("src", $(this).attr("data-original"));
                $(this).removeAttr("data-original");
            }
        })
    }	
});

$(document).ready(function() {
    imgRotate();
    $('img').css({
        '-moz-user-select': 'none',
        '-webkit-user-select': 'none',
        '-ms-user-select': 'none',
        '-khtml-user-select': 'none',
        'user-select': 'none'
    });
});

function lazyinit() {
    $('#topLoginFrame').attr('src','http://www.189.cn/dqmh/cms/index/login_jx.jsp?ifindex=index');
    $('#rightLoginFrame').attr('src','http://www.189.cn/dqmh/login.do?method=loginright');
}

document.writeln("<div class=\"sideFloat\" style=\"position: fixed;right: 0px;z-index: 999999;bottom: 0px; display: block;\">");
document.writeln("		  <div class=\"one1Float\">");

document.writeln("							<map name=\"map1\">");
document.writeln("							<area href=\"javascript:smallclose();\" coords=\"150,6,170,25\" shape=\"RECT\">");
document.writeln("							<area href=\"/hd/cj\" target=\"_blank\" coords=\"0,25,180,210\" shape=\"RECT\">");

document.writeln("							</map>");
document.writeln("							<img src=\"http://image1.chinatelecom-ec.com/image/189cnv2/images/bg/cjpc.png\"  border=\"0\" alt=\"Image Map\" name=\"navmap\" usemap=\"#map1\">");

document.writeln("			  ");
document.writeln("		  </div>");
document.writeln("	</div>");

    function smallclose(){
      
        $(".sideFloat").hide();
        
       
    }
