var idbox;
//是否为ie，并读出ie版本
var isIE = !!navigator.userAgent.match(/MSIE\b\s*([0-10]\.[0-10]);/img);
isIE && (isIE = RegExp.$1);
//是否为chrome
var isGoo = !!navigator.userAgent.match(/AppleWebKit\b/img);
//获得可以触发scroll事件的对象
var box = isIE ? document.documentElement : document;
//顶部下拉
jQuery(document).ready(function(){
    jQuery(".top_nav").hover(function(){
        jQuery(this).find(".top_nav_f").show();
          },function(){
              jQuery(this).find(".top_nav_f").hide();
              })
});


function changeUrlJT(){
	jQuery.ajax({
	url:"/ajaxServlet/getCityCodeAndIsLogin",
	data: {"method":"getCityCodeAndIsLogin"},
	type:"post",
	success: function(data){
	if(data!=""){
		var dataObj=eval("("+data+")");
		var msg=dataObj.MSG;
		var islogin=dataObj.ISLOGIN;
		var isRegister=dataObj.ISREGISTER;
				
		if(islogin=="true"){
			jQuery(".Menunav_info .menu_nav li").each(function(index){
		 
			var url =  enCodeUrl(jQuery(this).find("a").attr("href"));
				if(url != '/support/' && url !='/club/' && url != '/avtivity/' && url != '/llzq/'){
					jQuery(this).find("a").attr("href","http://login.189.cn/redirect/ECSSSOTransit?Req="+url);
				}
                    		
			});
			}
		}
	}
            
	});
  }  

function enCodeUrl(url){
    if(url == '/support/' || url =='/club/' || url == '/avtivity/'  || url == '/llzq/'){
        return url;
    }
	if(url=="/service/"){
		url = 'http://www.189.cn/fj/service/';
	}
       	 jQuery.ajax({
       	       url:"/ajaxServlet/enCodeUrl?url="+url,
       	       data: {"method":"enCodeUrl"},
       	       type:"post",
			    async :false,
       	      success: function(data){
       	          if(data!=""){
       	           var dataObj=eval("("+data+")");
       	            url=dataObj.URL; 
       	          }
       	        }
       	     });
			 return url;
       }

jQuery(document).ready(function(){
	changeUrlJT();
    // 登录状态获取189邮箱未读数量
  /*  function showMailCount(){
     jQuery.ajax({
       url:"/ajaxServlet/getEmailCount",
       data: {"method":"getEmailCount"},
       type:"post",
      success: function(data){
          if(data!=""){
           var dataObj=eval("("+data+")");
           var code=dataObj.CODE;
           if(code=="0"){
               var newCount=dataObj.NEWCOUNT;
               if(newCount>0){
               jQuery("#nImg").hover(function(){
                   jQuery("#ecount").show();
                  jQuery("#ecount").html(newCount+"封未读");
                  },function(){
                  jQuery("#ecount").html("");
                  jQuery("#ecount").hide();
                  });
              jQuery("#mail").hover(function(){
                  jQuery("#ecount").show();
                  jQuery("#ecount").html(newCount+"封未读");
                  },function(){
                  jQuery("#ecount").hide();
                  jQuery("#ecount").html("");
                  });
               }
           }
          
          }
        }
     });
    }*/
    /* 右侧客服 */
      jQuery(".right_kefu").hover(function(){
          jQuery(this).find("li").show();
          jQuery(this).addClass("index");
          },function(){
          jQuery(this).removeClass("index");
          jQuery(this).find("li").hide();
              });
     jQuery(".right_kefu li").hover(function(){
          jQuery(this).addClass("index").siblings().removeClass("index");
          },function(){
              jQuery(this).removeClass("index");
              });
      jQuery(window).scroll(function() {
            jQuery(".right_kefu").css("top", jQuery(window).scrollTop()+285+"px");
            });
      /* /回顶部*/
      jQuery(".backtop").click(function(){        
              jQuery("html, body").animate({scrollTop:0}, "slow");    
                  });
      
      jQuery(".phone").hover(function(){
          jQuery(this).addClass("index");
          jQuery(this).find("dd").show();
          },function(){
              jQuery(this).removeClass("index");
              jQuery(this).find("dd").hide();
              });
      
    
    jQuery('body img').each(function (i,obj){
        var top = isGoo ? document.body.scrollTop :
             document.documentElement.scrollTop, left = isGoo ?     document.body.scrollLeft :document.documentElement.scrollLeft,
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

    
    
    //页面加载延迟
         jQuery(window).scroll(function(){  
                var top = isGoo ? document.body.scrollTop :
                 document.documentElement.scrollTop, left = isGoo ?     document.body.scrollLeft :document.documentElement.scrollLeft,
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
 
	 

		    jQuery('.ywjs_ny_content table').css({ border:'1px solid #000000' });
			jQuery('.ywjs_ny_content table th').css({ border:'1px solid #000000' });
			jQuery('.ywjs_ny_content table td').css({ border:'1px solid #000000' });
			jQuery('.ywjs_ny_content style').remove();
			jQuery('.ywjs_yhcx_contentny style').remove();
			
		
			
    });
function addfavorite() {
    //window.external.addfavorite(parent.document.URL,parent.document.title);
    try {
     window.external.addFavorite(parent.document.URL, parent.document.title);
    }
    catch (e) {
         try {
            window.sidebar.addPanel(parent.document.title, parent.document.URL, "");
        }
       catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
       }
    }
    }   
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


/* 导航 */

function changeTomax(obj){
    obj.animate({
        fontSize:'18px'
    }, {
        duration: 'slow',
        queue:false,
        complete: function() {
changeTomin(obj);
        }
    });
}
function changeTomin(obj){
obj.animate({
    fontSize:'14px'
    }, {
        duration: 'slow',
        queue:false,
        complete: function() {
        changeTomax(obj);
        }
    });
}
var where=-1;
jQuery(document).ready(function(){
  jQuery(".menu_nav li").each(function(index){ //遍历URL与导航条URL是否对应
    var url=jQuery(this).find("a").attr("href");
	if(url!=undefined){
		 if(url == 'http://189.cn/fj/service/' || url == '189.cn/fj/service/' || url.indexOf('687474703A2F2F3138392E636E2F666A2F736572766963652F')>=0 ||url.indexOf('/service2')>=0){
				url = '/service/';
		}
	}
   
    var path=window.location.pathname;
    if(path.indexOf(url)>=0){
      where=index;
    }
  } );  
    
  if(where!=-1){
    jQuery(".menu_nav li:eq("+where+")").addClass("index"); //home为导航上需要高亮的LI的ID
    }
    jQuery(".menu_nav li").hover(function(){
          jQuery(this).addClass("index").siblings().removeClass("index");
          },function(){
              if(where!=-1){
              jQuery(".menu_nav li:eq("+where+")").addClass("index").siblings().removeClass("index");   //home为导航上需要高亮的LI的ID
              }
    });
    
      
    });   
 

//跳转切换地市页面
function goCityPage(url) {

//登录状态判定
    jQuery.ajax( {
        url : "/ajaxServlet/getCityCodeAndIsLogin",
        data : {
            "method" : "getCityCodeAndIsLogin"
        },
        async :false,
        type : "post",
        success : function(data) {
            var dataObj = eval("(" + data + ")");
            var msg = dataObj.MSG;
            var islogin = dataObj.ISLOGIN;
            if(islogin==true||islogin=='true'){
                if(url=="L3NlcnZpY2Uv"){
                    url = "L3NlcnZpY2UvYWNjb3VudC8=";
                }
                if(url=="L2NsdWIv"){
                    url = "L2NsdWIvaW5mbw==";
                }
            }
        }
    });
     var sURL = "/common/v2011/order_net_selectCity.jsp?&url=" + url;
        location.href = sURL;
}
function show(){
document.getElementById("div").style.display="";
//alert(document.getElementById("div").style.display)
}
function hidden(){
document.getElementById("div").style.display="none";
//alert(document.getElementById("div").style.display)
}
























/* 统一门户四期导航 */
var where=-1;
jQuery(document).ready(function(){
  jQuery(".head_top .main ul li").each(function(headmain_bg){ //遍历URL与导航条URL是否对应
    var url=jQuery(this).find("a").attr("href");
	if(url!=undefined){
		 if(url == 'http://189.cn/fj/service/' || url == '189.cn/fj/service/' || url.indexOf('687474703A2F2F3138392E636E2F666A2F736572766963652F')>=0  || url.indexOf('/service2')>=0){
				url = '/service/';
		}
	}
    var path=window.location.pathname;
    if(path.indexOf(url)>=0){
      where=headmain_bg;
    }
  } );  
    
  if(where!=-1){
    jQuery(".head_top .main ul li:eq("+where+")").addClass("headmain_bg"); //home为导航上需要高亮的LI的ID
    }
    jQuery(".head_top .main ul li").hover(function(){
          jQuery(this).addClass("headmain_bg").siblings().removeClass("headmain_bg");
          },function(){
              if(where!=-1){
              jQuery(".head_top .main ul li:eq("+where+")").addClass("headmain_bg").siblings().removeClass("headmain_bg");   //home为导航上需要高亮的LI的ID
              }
    });
    
      
    }); 
