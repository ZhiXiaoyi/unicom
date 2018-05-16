/* 顶部 */
//顶部下拉
jQuery(document).ready(function(){
    jQuery(".top_nav").hover(function(){
        jQuery(this).find(".top_nav_f").show();
          },function(){
              jQuery(this).find(".top_nav_f").hide();
              })
});

//登录状态判定
        jQuery.ajax({
            url:"/ajaxServlet/getCityCodeAndIsLogin",
       data: {"method":"getCityCodeAndIsLogin"},
       type:"post",
      success: function(data){
          if(data!=""){
                var dataObj=eval("("+data+")");
                var msg=dataObj.MSG;
                var islogin=dataObj.ISLOGIN;
                if(islogin=="true"){
                jQuery("#login").html(msg+"<a href=\"/service/manage/index.jsp?TYPE=ChangePwd\">【密码管理】</a>");  
				jQuery("#loginli").html("<a href=\"/common/v2011/exit.jsp\">【退出】</a>");
                jQuery("#mail").attr("href","https://uam.fj.ct10000.com/ffcs-uam/SSOToUDB?ReturnURL=http://mail.189.cn&ErrorReturnURL=http://mail.189.cn");
                if(dataObj.PRODUCTID=="50"){
                jQuery("#mail_link").append("<a id='newMail' target='_blank'><img src='/cms/up2/images/public/newemail.gif' id='nImg' style='border:0px;'/></a><div id='ecount' style='display:none;width: 100px;background-color: #FFFFCD;border:1px solid black;position: absolute;'></div>");
                jQuery("#newMail").attr("href","https://uam.fj.ct10000.com/ffcs-uam/SSOToUDB?ReturnURL=http://webmail.189.cn/webmail/UDBLogin?skey=3&TargetPage=mailRead&ErrorReturnURL=http://mail.189.cn");
                
                 }
                }
          }
        }
        
    });

/* 登录状态获取189邮箱未读数量*/
    function showMailCount(){
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
    }
/* LOGO模块 */

jQuery(document).ready(function(){
   jQuery("#shengfen").hover(function(){
      jQuery(this).find("#shengfen_frame").show();
      },function(){
        jQuery(this).find("#shengfen_frame").hide();
        });
    jQuery("#dishi").hover(function(){
      jQuery(this).find("#dishi_frame").show();
      },function(){
        jQuery(this).find("#dishi_frame").hide();
        });
  jQuery(".ywjs_ny_content div").css({"font-size":"12px","line-height":"21px" });
  jQuery(".ywjs_ny_content p").css({"font-size":"12px","line-height":"21px" });
  jQuery(".ywjs_ny_content span").css({"font-size":"12px","line-height":"21px" });
  jQuery(".ywjs_ny_content b").css({"font-size":"12px","line-height":"21px" });
  jQuery.ajax({
    url:"/ajaxServlet/getCityCodeAndIsLogin",
       data: {"method":"getCityCodeAndIsLogin"},
       type:"post",
      success: function(data){
        if(data!=""){
          var dataObj=eval("("+data+")");
          var msg=dataObj.MSG;
          var islogin=dataObj.ISLOGIN;
          var citycode=dataObj.CITYCODE;
          var curCityName="";
          if(citycode=="0590" ||citycode==""){
            curCityName="福州";
            //fuc_setcity('福州','$contextpath','0591','');
          }
          else if(citycode=="0591") curCityName="福州";
          else if(citycode=="0592") curCityName="厦门";
          else if(citycode=="0593") curCityName="宁德";
          else if(citycode=="0594") curCityName="莆田";
          else if(citycode=="0595") curCityName="泉州";
          else if(citycode=="0596") curCityName="漳州";
          else if(citycode=="0597") curCityName="龙岩";
          else if(citycode=="0598") curCityName="三明";
          else if(citycode=="0599") curCityName="南平";
      var citydl = "<dl id=\"dishi_frame\" style=\"display:none;\">"
          +"<dd><a onclick=\"fuc_setcity('福州','$contextpath','0591','')\">福州</a>"
          +"<a onclick=\"fuc_setcity('厦门','$contextpath','0592','')\">厦门</a>"
          +"<a onclick=\"fuc_setcity('宁德','$contextpath','0593','')\">宁德</a>"
          +"<a onclick=\"fuc_setcity('莆田','$contextpath','0594','')\">莆田</a>"
          +"<a onclick=\"fuc_setcity('泉州','$contextpath','0595','')\">泉州</a>"
          +"<a onclick=\"fuc_setcity('漳州','$contextpath','0596','')\">漳州</a>"
          +"</dd>"
          +"<dd><a onclick=\"fuc_setcity('龙岩','$contextpath','0597','')\">龙岩</a>"
          +"<a onclick=\"fuc_setcity('三明','$contextpath','0598','')\">三明</a>"
          +"<a onclick=\"fuc_setcity('南平','$contextpath','0599','')\">南平</a>"
          +"</dd>"
          +"</dl>";
          jQuery("#dishi").html(curCityName+citydl);
        }
      }
  });
  });
function getCurrCityName(citycode){
    var curCityName = "";
    if(citycode=="0590") curCityName="福建";
    else if(citycode=="0591") curCityName="福州";
    else if(citycode=="0592") curCityName="厦门";
    else if(citycode=="0593") curCityName="宁德";
    else if(citycode=="0594") curCityName="莆田";
    else if(citycode=="0595") curCityName="泉州";
    else if(citycode=="0596") curCityName="漳州";
    else if(citycode=="0597") curCityName="龙岩";
    else if(citycode=="0598") curCityName="三明";
    else if(citycode=="0599") curCityName="南平";
    else curCityName="福建";
    return curCityName;
}


/**地市切换方法*/
function fuc_setcity(cityName,path,citycode,servletPath,alias,cmsdir,cmsext){
  var citycode2 = citycode;
  var fj =  document.cookie.indexOf("fj");
  if(citycode2 == "0590")
    citycode2 = alias;
  if(citycode != document.getElementById("CITYCODE").value){
     var exitFlag = "false";
      jQuery.ajax({
            url:"/ajaxServlet/getCityCodeAndIsLogin",
               data: {"method":"getCityCodeAndIsLogin"},
               type:"post",
               async:false,
              success: function(data){
                if(data!=""){
                  var dataObj=eval("("+data+")");
                  var  islogin=dataObj.ISLOGIN;
                  var nowCityCode=dataObj.CITYCODE;
                  var nowCityName=getCurrCityName(nowCityCode);
                  if(islogin == "true"){
                    var is =window.confirm('您已登录网上营业厅·'+nowCityName+'区域，若要切换所在城市，系统将退出网上营业厅·'+nowCityName+'区域，确认退出？');
                    if(!is){
                        exitFlag = "true";
                    }
                }
                }
              }
          });

          if(exitFlag == "false") {
            jQuery.ajax({
              url:"/ajaxServlet/setCityCode",
                 data: {"method":"setCityCode","citycode":citycode},
                 type:"post",
                success: function(data){
                  if(data!="0"){
                  	if(citycode == '0591'){
						location.href = "http://189.cn/fj_fz/";
					}else if(citycode == '0592'){
						location.href = "http://189.cn/fj_xm/";
					}else if(citycode == '0593'){
						location.href = "http://189.cn/fj_nd/";
					}else if(citycode == '0594'){
						location.href = "http://189.cn/fj_pt/";
					}else if(citycode == '0595'){
						location.href = "http://189.cn/fj_qz/";
					}else if(citycode == '0596'){
						location.href = "http://189.cn/fj_zz/";
					}else if(citycode == '0597'){
						location.href = "http://189.cn/fj_ly/";
					}else if(citycode == '0598'){
						location.href = "http://189.cn/fj_sm/";
					}else if(citycode == '0599'){
						location.href = "http://189.cn/fj_np/";
					}else{
						location.href = "http://189.cn/fj";
					}
	  	              }
  	              }
            });
        }
      }  
  }
function searchfocus(){
  if(document.getElementById("qs").value == "您可以搜索产品/活动/问题等"){
    document.getElementById("qs").value = "";
  }
}
function searchblur(){
  if(document.getElementById("qs").value == ""){
    document.getElementById("qs").value = "您可以搜索产品/活动/问题等";
  }
}
function checkSearch() {
  if(document.getElementById("qs").value == "您可以搜索产品/活动/问题等"){
    document.getElementById("qs").value = "";
  }
}