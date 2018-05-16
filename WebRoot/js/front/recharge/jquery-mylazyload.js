/*延迟加载图片开始*/
var idbox;
//是否为ie，并读出ie版本
var isIE = !!navigator.userAgent.match(/MSIE\b\s*([0-10]\.[0-10]);/img);
isIE && (isIE = RegExp.$1);
//是否为chrome
var isGoo = !!navigator.userAgent.match(/AppleWebKit\b/img);
//获得可以触发scroll事件的对象
var box = isIE ? document.documentElement : document;

jQuery(document).ready(function(){
  jQuery('body img').each(function (i,obj){
    var top = isGoo ? document.body.scrollTop :
           document.documentElement.scrollTop, left = isGoo ?   document.body.scrollLeft :document.documentElement.scrollLeft,
      width = document.documentElement.clientWidth,
         height = document.documentElement.clientHeight;
    var _left=getElPos(obj).x, _top=getElPos(obj).y;
      if( _top >= 0 &&
        _left >= left &&
        _top <= height &&
        _left <= left+width){
        //如果图片已经显示，则取消赋值
        if(jQuery(this).attr("src-lazy")!=null && jQuery(this).attr("src-lazy")!="" && jQuery(this).attr("src") !== jQuery(this).attr("src-lazy")){ 
          jQuery(this).attr("src",jQuery(this).attr("src-lazy"));
        }
      }
    });

     jQuery(window).scroll(function(){  
        var top = isGoo ? document.body.scrollTop :
             document.documentElement.scrollTop, left = isGoo ?   document.body.scrollLeft :document.documentElement.scrollLeft,
        width = document.documentElement.clientWidth,
           height = document.documentElement.clientHeight;
           jQuery('body img').each(function (i,obj){
          var _left=getElPos(obj).x, _top=getElPos(obj).y;
          if( _top >= top &&
            _left >= left &&
            _top <= top+height &&
            _left <= left+width){
            //如果图片已经显示，则取消赋值
            if(jQuery(this).attr("src-lazy")!=null && jQuery(this).attr("src-lazy")!="" && jQuery(this).attr("src") !== jQuery(this).attr("src-lazy")){ 
              jQuery(this).attr("src",jQuery(this).attr("src-lazy"));
            }
          }
        });
      });
});

function getElPos(el) {
  var ua = navigator.userAgent.toLowerCase();
    var isOpera = (ua.indexOf('opera') != -1);
    var isIE = (ua.indexOf('msie') != -1 && !isOpera); // not opera spoof
    if(el==null||el.parentNode == null || el.style.display == 'none') {
      return false;
    }      
    var parent = null;
    var pos = [];     
    var box;     
    if(el.getBoundingClientRect)    //IE
    {         
      box = el.getBoundingClientRect();
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
        return {x:box.left + scrollLeft, y:box.top + scrollTop};
    }else if(document.getBoxObjectFor){   // gecko    
      box = document.getBoxObjectFor(el); 
        var borderLeft = (el.style.borderLeftWidth)?parseInt(el.style.borderLeftWidth):0; 
        var borderTop = (el.style.borderTopWidth)?parseInt(el.style.borderTopWidth):0; 
        pos = [box.x - borderLeft, box.y - borderTop];
    } else {   // safari & opera    
        pos = [el.offsetLeft, el.offsetTop];  
        parent = el.offsetParent;     
        if (parent != el) { 
           while (parent) {  
            pos[0] += parent.offsetLeft; 
            pos[1] += parent.offsetTop; 
            parent = parent.offsetParent;
           }  
        }   
        if (ua.indexOf('opera') != -1 || ( ua.indexOf('safari') != -1 && el.style.position == 'absolute' )) { 
           pos[0] -= document.body.offsetLeft;
           pos[1] -= document.body.offsetTop;         
        }    
   }              
   if (el.parentNode) { 
       parent = el.parentNode;
   } else {
        parent = null;
   }
   while (parent && parent.tagName != 'BODY' && parent.tagName != 'HTML') { // account for any scrolled ancestors
       pos[0] -= parent.scrollLeft;
       pos[1] -= parent.scrollTop;
        if (parent.parentNode) {
           parent = parent.parentNode;
        } else {
           parent = null;
        }
   }
   return {x:pos[0], y:pos[1]};
}