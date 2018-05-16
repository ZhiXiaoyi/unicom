/**
 * @author PLY
 */
function getElementPos(elementId) {
     var ua = navigator.userAgent.toLowerCase();
     var isOpera = (ua.indexOf('opera') != -1);
     var isIE = (ua.indexOf('msie') != -1 && !isOpera); // not opera spoof
     var el = document.getElementById(elementId);
	 //var el=elementId;
     if(null==el||null==el.parentNode || el.style.display == 'none') {
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
     }else if(document.getBoxObjectFor)    // gecko    
     {
      box = document.getBoxObjectFor(el); 
      var borderLeft = (el.style.borderLeftWidth)?parseInt(el.style.borderLeftWidth):0; 
      var borderTop = (el.style.borderTopWidth)?parseInt(el.style.borderTopWidth):0; 
      pos = [box.x - borderLeft, box.y - borderTop];
     } else    // safari & opera    
     {
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


function AddFavorite(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
function SetHome(obj,vrl){
        try{
                obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
        }
        catch(e){
                if(window.netscape) {
                        try {
                                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        }
                        catch (e) {
                                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
                        }
                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage',vrl);
                 }
        }
}


/**
 * Iframe高度自适应
 */
 	var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

	var reinitIframe=function(){
		var cms_iframe_objs = document.getElementsByTagName('iframe');
		if(cms_iframe_objs && cms_iframe_objs.length>0){	
			for(i=0;i<cms_iframe_objs.length;i++){
				try{
					var iframe=cms_iframe_objs[i];
					var bHeight ;
					
					var dHeight ;
					if (Sys.firefox || Sys.opera || Sys.ie >= 9){
						//bHeight = iframe.contentWindow.document.body.offsetHeight;
						
						//dHeight = iframe.contentWindow.document.documentElement.offsetHeight;
						
						//height = Math.max(bHeight, dHeight);
						//iframe.height =  height;

						bHeight = iframe.contentWindow.document.body.scrollHeight; 
						dHeight = iframe.contentWindow.document.documentElement.scrollHeight; 
						height = Math.max(bHeight, dHeight);
						iframe.height = height; 
					}else if((Sys.ie>=6 && Sys.ie<=8) || Sys.chrome || Sys.safari){
						bHeight = iframe.contentWindow.document.body.scrollHeight;
						
						dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
						var nowH = jQuery(document).height();
						height = Math.min(bHeight, nowH);
						iframe.height =  height;
					}else{
						var offsetHeight=iframe.contentWindow.document.body.clientHeight;
						var topMargin = iframe.contentWindow.document.body.topMargin;
						var bottomMargin= iframe.contentWindow.document.body.bottomMargin  ;
								
						offsetHeight=parseInt(offsetHeight);
						topMargin=parseInt(topMargin);
						bottomMargin=parseInt(bottomMargin);
								
						if ( topMargin && bottomMargin) {
						  iframe.height =  offsetHeight + topMargin + bottomMargin;
						} else if ( topMargin) {
						   iframe.height =  offsetHeight + topMargin;
						}else if ( bottomMargin) {
						   iframe.height =  offsetHeight + bottomMargin;
						}else {
						   iframe.height = offsetHeight;
						}
					}
				}catch (ex){}
				if(iframe.name == "com_ifr"){//v4改版用，div无法展示和div无限增高解决
					var if_height = jQuery(iframe).contents().find("#common_div").height() ;
					if(if_height != 0 && if_height!=null){
						iframe.height = if_height;
					}
				}
			}
		}
		window.setTimeout("reinitIframe()", 200);
	}
	if ( typeof window.onload!='function') { 
		reinitIframe();
	}else{
		 var oldonload=window.onload; 
		 window.onload=function(){ 
			oldonload(); 
			reinitIframe();
		 }
	}