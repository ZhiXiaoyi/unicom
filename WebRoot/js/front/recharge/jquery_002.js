 String.prototype.replaceAll = function(s1,s2){ 
return this.replace(new RegExp(s1,"gm"),s2); 
}; 
(function($){ 
/* 
* $-layer 0.1 - New Wave Javascript 
* 
* Copyright (c) 2008 King Wong 
* $Date: 2008-10-09 $ 
*/ 
var ___id___ = ""; 
var ___settings___ = {}; 
var isMouseDown = false; 
var currentElement = null; 
var dropCallbacks = {}; 
var dragCallbacks = {}; 
var bubblings = {}; 
var lastMouseX; 
var lastMouseY; 
var lastElemTop; 
var lastElemLeft; 
var dragStatus = {}; 
var holdingHandler = false; 
$.getMousePosition = function(e){ 
var posx = 0; 
var posy = 0; 
if (!e) var e = window.event; 
if (e.pageX || e.pageY) { 
posx = e.pageX; 
posy = e.pageY; 
} 
else if (e.clientX || e.clientY) { 
posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
} 
return { 'x': posx, 'y': posy }; 
}; 
$.updatePosition = function(e) { 
var pos = $.getMousePosition(e); 
var spanX = (pos.x - lastMouseX); 
var spanY = (pos.y - lastMouseY); 
var _top = (lastElemTop + spanY) > 0 ? (lastElemTop + spanY) : 0; 
var _left = (lastElemLeft + spanX) > 0 ? (lastElemLeft + spanX) : 0; 
$("#"+___id___).css("top", _top); 
$("#"+___id___).css("left", _left); 
}; 
$.fn.ondrag = function(callback){ 
return this.each(function(){ 
dragCallbacks[this.id] = callback; 
}); 
}; 
$.fn.ondrop = function(callback){ 
return this.each(function(){ 
dropCallbacks[this.id] = callback; 
}); 
}; 
$.fn.dragOff = function(){ 
return this.each(function(){ 
dragStatus[this.id] = 'off'; 
}); 
}; 
$.fn.dragOn = function(){ 
return this.each(function(){ 
dragStatus[this.id] = 'on'; 
}); 
}; 
$.extend({ 
layerSettings:{ 
id:"layerdiv", 
width:220, 
height:220, 
templete:'<div style="height:20px; width:@width@px; background-color:#777777;"><span id="@moveid@" style="position:relative; left:0px; top:0px; height:20px; width:100px;"><span id="@titleid@">@title@</span></span><span class="layerclose" style="position:relative; top:0px; float:right; right:20px; color:red;">close</span></div><div style="border:solid #ff0000 1px; width:@width@px; height:@height@px;"><div style="width:100%; height:100%; background-color:#ffffff;" id="@contentid@"></div></div>', 
content:'', 
title:'', 
isbg:true, 
opacity:0.3 
}, 
layerSetup: function( settings ) { 
$.extend( $.layerSettings, settings ); 
___settings___[settings.id] = settings; 
___id___ = settings.id; 
}, 
layershow:function(){ 
var __bw = $("body").width(); 
var __bh = $("body").height() > $(window).height() ? $("body").height() : $(window).height(); 
var _width = $.layerSettings.width; 
var _height = $.layerSettings.height; 
if(document.getElementById(___id___)) return; 
var _moveid = ___id___ + "_move"; 
var _titleid = ___id___ + "_title"; 
var _contentid = ___id___ + "_content"; 
var _cssurl = $.layerSettings.cssurl; 
var opacity = $.layerSettings.opacity; 
__index = $.layermaxindex(); 
var __left = (__bw - _width) > 0 ? (__bw - _width)/2 : 0; 
var __top = 100; 
var __bgDiv = '<div id="'+___id___+'_background" style="background:#000000; filter:alpha(opacity='+(opacity*100)+'); opacity: '+opacity+'; width:'+__bw+'px; height:'+__bh+'px; z-index:'+(__index++)+'; position:absolute; left:0px; top:0px;"></div>'; 
if($.layerSettings.isbg) 
{ 
$("body").append(__bgDiv); 
} 
$("body").append('<div id="'+___id___+'" style="z-index:'+__index+';position:absolute; left:'+__left+'px; top:'+__top+'px;"></div>'); 
var _templete = $.layerSettings.templete; 
var __templete = _templete.replaceAll("@width@",_width).replaceAll("@height@",_height).replaceAll("@titleid@",_titleid).replaceAll("@contentid@",_contentid).replaceAll("@title@",jQuery.layerSettings.title).replaceAll("@moveid@",_moveid); 
$("#"+___id___).append(__templete); 
$("#"+_contentid).append($.layerSettings.content); 
$("#"+_titleid).append($.layerSettings.title); 
var idd = ___id___; 
$(".layerclose").bind("click",function() 
{ 
$.layerclose(idd); 
}); 
$("#"+___id___).bind("click",function() 
{ 
var id = this.id; 
$.layerSetup(___settings___[id]); 
$(this).css("z-index",$.layermaxindex()); 
}); 
$(document).bind("click",function(e) 
{ 
var pos = $.getMousePosition(e); 
}); 
$(document).mousemove(function(e){ 
if(isMouseDown && dragStatus[currentElement.id] != 'false'){ 
$.updatePosition(e); 
if(dragCallbacks[currentElement.id] != undefined){ 
dragCallbacks[currentElement.id](e, currentElement); 
} 
return false; 
} 
}); 
$(document).mouseup(function(e){ 
if(isMouseDown && dragStatus[currentElement.id] != 'false'){ 
isMouseDown = false; 
if(dropCallbacks[currentElement.id] != undefined){ 
dropCallbacks[currentElement.id](e, currentElement); 
} 
return false; 
} 
}); 
(function(){ 
bubblings[___id___] = true; 
dragStatus[___id___] = "on"; 
//setHandler 
bubblings[this.id] = true; 
dragStatus[_moveid] = "handler"; 
$("#"+_moveid).css("cursor", "move"); 
$("#"+_moveid).mousedown(function(e){ 
var id = this.id.replace("_move",""); 
___id___ = id; 
$("#"+id).css("z-index",$.layermaxindex()); 
$.layerSetup(___settings___[id]); 
if((dragStatus[___id___] == "off") || (dragStatus[___id___] == "handler" && !holdingHandler)) 
return bubblings["#"+___id___]; 
isMouseDown = true; 
currentElement = $("#"+___id___); 
var pos = $.getMousePosition(e); 
lastMouseX = pos.x; 
lastMouseY = pos.y; 
lastElemTop = document.getElementById(___id___).offsetTop; 
lastElemLeft = document.getElementById(___id___).offsetLeft; 
$.updatePosition(e); 
holdingHandler = true; 
}); 
$("#"+_moveid).mouseup(function(e){ 
holdingHandler = false; 
}); 
//end setHandler 
})(); 
}, 
layerclose:function(__id) 
{ 
$("#"+__id+"_background").remove(); 
$("#"+__id).remove(); 
}, 
layermaxindex:function() 
{ 
var ___index = 0; 
$.each($("*"),function(i,n){ 
var __tem = $(n).css("z-index"); 
if(__tem>0) 
{ 
if(__tem > ___index) 
{ 
___index = __tem + 1; 
} 
} 
}); 
return ___index; 
} 
}); 
})(jQuery);