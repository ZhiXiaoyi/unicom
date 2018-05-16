<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>个人信息</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<link href="css/front/myInformation/common(4).css" rel="stylesheet"
	type="text/css">
<link href="css/front/myInformation/account.css" rel="stylesheet"
	type="text/css">

<script src="js/jquery.min.js"></script>
<script type="text/javascript"
	src="js/front/jquery.imgareaselect.pack.js"></script>
<script type="text/javascript" src="js/front/myInformation/form.js"></script>
<script type="text/javascript" src="js/front/myInformation/validate.js"></script>
<script type="text/javascript"
	src="js/front/myInformation/init_account_new.js"></script>
<script type="text/javascript">
        function loadIframeHeight() {
            var reloadJT_path = "http://zsc.189.cn/dqmh/web/zhidao/proxy.html";
            var nowH = $("body").height() + 20;

            var ifr = document.createElement("iframe");
            ifr.height = 0;
            ifr.style.display = "none";
            ifr.src = reloadJT_path + "#" + nowH;
            $("body").append(ifr);
        }

        function changeView(picId, picId_1, picId_2, fileId) {
        	var path=$("#nowPhotoPath").val();
            var pic = document.getElementById(picId);
            var pic1 = document.getElementById(picId_1);
            var pic2 = document.getElementById(picId_2);
            var file = document.getElementById(fileId);
            pic.src = path;
            pic1.src = path;
            pic2.src = path;
            if (window.FileReader) {//chrome,firefox7+,opera,IE10,IE9，IE9也可以用滤镜来实现
                oFReader = new FileReader();
                oFReader.readAsDataURL(file.files[0]);
                oFReader.onload = function (oFREvent) {
                    pic.src = oFREvent.target.result;
                    pic1.src = oFREvent.target.result;
                    pic2.src = oFREvent.target.result;
                };
            } else if (document.all) {//IE8-
                file.select();
                window.top.parent.document.body.focus();
                var reallocalpath = document.selection.createRange().text + "?t=" + new Date().getTime();//IE下获取实际的本地文件路径
                if (window.ie6) {
                    pic.src = reallocalpath;
                    pic1.src = reallocalpath;
                    pic2.src = reallocalpath; //IE6浏览器设置img的src为本地路径可以直接显示图片
                } else { //非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现，IE10浏览器不支持滤镜，需要用FileReader来实现，所以注意判断FileReader先
                    pic.style.width = "420px";
                    pic.style.height = "auto";

                    pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src=\"" + reallocalpath + "\")";
                    pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';//设置img的src为base64编码的透明图片，要不会显示红xx

                    pic1.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src=\"" + reallocalpath + "\")";
                    pic1.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';//设置img的src为base64编码的透明图片，要不会显示红xx

                    pic2.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src=\"" + reallocalpath + "\")";
                    pic2.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';//设置img的src为base64编码的透明图片，要不会显示红xx

                }
            } else if (file.files) {//firefox6-
                if (file.files.item(0)) {
                    url = file.files.item(0).getAsDataURL() + "?t=" + new Date().getTime();
                    pic.src = url;
                    pic1.src = url;
                    pic2.src = url;
                }
            }
        }

        function uploadUserPhoto(){
        if($("#userEmailHidden").val()==null){
        	alert("请先绑定邮箱");
        	}else{
        	var formData = new FormData($("#crop_form" )[0]); 
        	var photo = document.getElementById("up").files[0];
        	formData.append("myFile", photo);
        $.ajax({
				type : "POST",
				url : "starUpdateUser/updateUserPhotoPath",
				data :formData,// 你的formid
				async : false,
				cache : false,
				contentType : false,
				processData : false,
				error : function(request) {
					$("#upTip_error1_2").text("保存失败,邮箱或手机已存在").show();
				},
				success : function(data) {
					var msg = data;
					if (msg.message == '0') {
						$("#headsuccTip").text("提交成功").show();
						window.parent.parent.open("iframes/toNewMyInformation", '_self');
						// window.location.reload();
					} else {
						$("#err_head_tip").show();
					}
				}
			});     
        }}
    </script>
</head>
<body>

	<div class="usrr_mbgr">
		<div class="title_ord h30">
			<div class="greent_txt fl">
				<h3>个人资料</h3>
			</div>
		</div>
		<div class="umbgr_con clearfix">
			<div class="myinfotab">
				<div class="myinfo_tab_menu">
					<ul>
						<li class="s selected">基本信息</li>
						<li class="t">|</li>
						<li class="s">头像照片</li>
					</ul>
				</div>
				<div class="myinfo_tab_box">
					<div id="mf_01" class="myform hide" style="display: block;">
						<form id="personalInfo" name="personalInfo" method="post">
							<input type="hidden" name="portraitUrl" value=""> <input
								type="hidden" name="nowUserId" value="${user.userId }">
							<div class="item">
								<span class="ftit">手&nbsp;&nbsp;&nbsp;&nbsp;机:</span>
								<div class="fcon">
									<span> <s:if
											test="#session.mobileCard.phoneNumber!=null">
									${mobileCard.phoneNumber}
									</s:if> <s:else>
									暂无绑定
									</s:else> <s:if test="#session.user.userEmail!=null">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									邮&nbsp;&nbsp;&nbsp;&nbsp;箱:
									${user.userEmail }
									</s:if> <s:else>
									暂无绑定
									</s:else>
									</span>
								</div>
							</div>
							<div class="item">
								<span class="ftit"><em>*</em>昵&nbsp;&nbsp;&nbsp;&nbsp;称:</span>
								<div class="fcon">
									<input type="text" name="nickName" class="text"
										value="${user.userNickname }"> <span class="txt">昵称由4-20个字符的数字、字母、中文及-和_组成，不能使用纯数字</span>
									<div class="tip tip_01 mleft203">昵称可展示在评价晒单等地方，不能用来登录</div>
								</div>
							</div>
							<div class="item">
								<span class="ftit"><em>*</em>性&nbsp;&nbsp;&nbsp;&nbsp;别:</span>
								<div class="fcon">
									<input type="hidden" name="userSex" id="userSexHidden"
										value="${user.userSex }"> <label for="sex_01">
										<input type="radio" id="sex_01" name="gender" value="1">
										男
									</label> <label for="sex_02"> <input type="radio" id="sex_02"
										name="gender" value="2"> 女
									</label>
									<script type="text/javascript">
                                    if ($("#userSexHidden").val() =="1") {
											$("#sex_01").attr("checked","checked");
											$("#sex_02").attr("checked",false);
                                    }else if($("#userSexHidden").val() =="2"){
                                    		$("#sex_01").attr("checked",false);
											$("#sex_02").attr("checked",true);
                                    }                         
                                </script>
								</div>
							</div>
							<div class="item" style="z-index:999;">
								<span class="ftit">年&nbsp;&nbsp;&nbsp;&nbsp;龄:</span>
								<div class="fcon">
									<input type="text" name="age" class="text"
										value="${user.userAge }">
									<div class="tip tip_00">填年龄有惊喜哦~~</div>
								</div>
							</div>
							<div class="item">
								<span class="ftit"><em>*</em>真实姓名:</span>
								<div class="fcon">
									<input type="text" id="realName" name="realName" class="text"
										value="${user.userRealname }"
										onblur="if(this.value==&#39;&#39;){this.value=&#39;请填写真实姓名&#39;; this.style.color=&#39;#a0a0a0&#39;;}"
										onfocus="if (this.value==&#39;请填写真实姓名&#39;){this.value=&#39;&#39;; this.style.color=&#39;#6C776C&#39;;}">
									<script type="text/javascript">
                                    if (document.personalInfo.realName.value == "") {
                                        document.personalInfo.realName.value = "请填写真实姓名";
                                        document.personalInfo.realName.style.color = "#a0a0a0";
                                    }
                                </script>
								</div>
							</div>
							<div class="item">
								<span class="ftit"><em>*</em>手机号码:</span>
								<div class="fcon">
									<input type="text" id="phoneNumber" name="phoneNumber"
										maxlength="11" class="text" value="${mobileCard.phoneNumber}"
										onblur="if(this.value==&#39;&#39;){this.value=&#39;请填写手机信息&#39;; this.style.color=&#39;#a0a0a0&#39;;}"
										onfocus="if (this.value==&#39;请填写手机信息&#39;){this.value=&#39;&#39;; this.style.color=&#39;#6C776C&#39;;}">
									<script type="text/javascript">
                                    if (document.personalInfo.phoneNumber.value == "") {
                                        document.personalInfo.phoneNumber.value = "请填写手机信息";
                                        document.personalInfo.phoneNumber.style.color = "#a0a0a0";
                                    }
                                </script>
								</div>
							</div>
							<div class="item">
								<span class="ftit"><em>*</em>证件信息:</span>
								<div class="fcon">
									<div class="swrap">
										<div class="tag_select">身份证</div>
									</div>
									<input type="text" id="certificateNumber"
										name="certificateNumber" class="text" maxlength="18"
										value="${mobileCard.idCard }"
										onblur="if(this.value==&#39;&#39;){this.value=&#39;请填写身份证信息&#39;; this.style.color=&#39;#a0a0a0&#39;;}"
										onfocus="if (this.value==&#39;请填写身份证信息&#39;){this.value=&#39;&#39;; this.style.color=&#39;#6C776C&#39;;}">
									<script type="text/javascript">
                                    if (document.personalInfo.certificateNumber.value == "") {
                                        document.personalInfo.certificateNumber.value = "请填写身份证信息";
                                        document.personalInfo.certificateNumber.style.color = "#a0a0a0";
                                    }
                                </script>
								</div>
							</div>
							<div class="item">
								<span class="ftit"><em>*</em>邮&nbsp;&nbsp;&nbsp;&nbsp;箱:</span>
								<div class="fcon">
									<input type="text" id="userEmail" name="userEmail" class="text"
										value="${user.userEmail }"
										onblur="if(this.value==&#39;&#39;){this.value=&#39;请填写邮箱信息&#39;; this.style.color=&#39;#a0a0a0&#39;;}"
										onfocus="if (this.value==&#39;请填写邮箱信息&#39;){this.value=&#39;&#39;; this.style.color=&#39;#6C776C&#39;;}">
									<script type="text/javascript">
                                    if (document.personalInfo.userEmail.value == "") {
                                        document.personalInfo.userEmail.value = "请填写邮箱信息";
                                        document.personalInfo.userEmail.style.color = "#a0a0a0";
                                    }
                                </script>
								</div>
							</div>
							<div class="item">
								<span class="ftit"><em>*</em>详细地址:</span>
								<div class="fcon" id="addressTd">
									<textarea name="address" id="address"
										style="width: 280px;height: 50px;">${user.userAddress }</textarea>
								</div>
							</div>
						</form>
						<div class="item">
							<div class="fsub">
								<input type="button" value="立即提交" id="personalInfoBtn"
									class="button" onclick="updateInfo(1,2);">
								<div id="upTip1_2" class="tip tip_01 initdistip"
									style="display: none;">提交成功</div>
								<div id="upTip_error1_2" class="errortip initdistip"
									style="display: none;">保存失败</div>
							</div>
						</div>
					</div>
					<script style="display: none;">

                    function PreviewImage() {
                        var imgFile = document.getElementById("up");
                        $("#default_pic_n").val("");
                        var pattern = /(\.*.jpg$)|(\.*.png$)|(\.*.jpeg$)|(\.*.gif$)|(\.*.bmp$)/;
                        var patternCase = imgFile.value.toLowerCase();
                        if (!pattern.test(patternCase)) {
                            $("#err_head_tip").text("系统仅支持jpg/jpeg/png/gif/bmp格式的照片！").show();
                            imgFile.focus();
                        } else {
                            $("#err_head_tip").text("");

                            changeView("avatar", "avatar1", "avatar2", "up");
                        }
                    }
                    //onchange='PreviewImage(this)'
                </script>
					<div id="mf_02" class="myform hide" style="display: none;">
						<div class="portrait">
							<div class="portrait_left">
								<form id="crop_form" method="post" enctype="multipart/form-data">
									<input type="hidden" id="userEmailHidden" class="text"
										value="${user.userId }">
									<div class="upload_pro">
										<label for="up"> <span>选择您要上传的头像</span> <input
											type="file" id="up" onpropertychange="PreviewImage()"
											onchange="PreviewImage()">
										</label>
									</div>
									<div class="tip top_00">仅支持JPG、GIF、PNG、JPEG、BMP格式，文件小于4M</div>
									<div id="picture" class="picturecss">
										<s:if test="#session.user.userPhotoPath!=null">
											<img id="avatar" class="avatarcss" alt="请上传头像"
												src="commodity/tophoto.action?path=${user.userPhotoPath }">
												<input type="hidden" id="nowPhotoPath" value="${user.userPhotoPath }">
										</s:if>
										<s:else>
											<img id="avatar" class="avatarcss" alt="请上传头像"
												src="images/front/myInformation/13042132Q-6.jpg">
										</s:else>
									</div>
									<input id="id_top" type="hidden" name="top" value="0">
									<input id="id_left" type="hidden" name="left" value="0">
									<input id="id_right" type="hidden" name="right" value="0">
									<input id="id_bottom" type="hidden" name="bottom" value="0">
								</form>
								<div class="portrait_demo">
									<strong>推荐头像</strong> <input type="hidden" id="default_pic_n"
										value="">
									<div class="portrait_list">
										<a href="javascript:void(0);" onclick=""><img
											src="images/front/myInformation/01.jpg"></a> <a
											href="javascript:void(0);" onclick=""><img
											src="images/front/myInformation/02.jpg"></a> <a
											href="javascript:void(0);" onclick=""><img
											src="images/front/myInformation/03.jpg"></a> <a
											href="javascript:void(0);" onclick=""><img
											src="images/front/myInformation/04.jpg"></a> <a
											href="javascript:void(0);" onclick=""><img
											src="images/front/myInformation/05.jpg"></a> <a
											href="javascript:void(0);" onclick=""><img
											src="images/front/myInformation/06.jpg"></a> <a
											href="javascript:void(0);" onclick=""><img
											src="images/front/myInformation/07.jpg"></a> <a
											href="javascript:void(0);" onclick=""><img
											src="images/front/myInformation/08.jpg"></a> <a
											href="javascript:void(0);" onclick=""><img
											src="images/front/myInformation/09.jpg"></a>
									</div>
								</div>
								<div class="item">
									<div class="fsub">
										<input type="button" class="button"
											onclick="uploadUserPhoto()" value="立即提交">
										<div id="err_head_tip" class="errortip initdistip"
											style="margin-top: 0px; display: none;"></div>
										<div id="headsuccTip" class="tip tip_01 initdistip"
											style="margin-top: 0px; display: none;">提交成功</div>
									</div>
								</div>
							</div>
							<div class="portrait_right">
								<p class="portrait_right_txt">
									<strong>效果预览</strong>选择您要上传的头像
								</p>
								<div class="portrait1">
									<div id="img_big_preview" class="img_preview">
										<s:if test="#session.user.userPhotoPath!=null">
											<img id="avatar1" class="avatarcss" alt="请上传头像"
												src="commodity/tophoto.action?path=${user.userPhotoPath }">
										</s:if>
										<s:else>
											<img id="avatar1" class="avatarcss" alt="请上传头像"
												src="images/front/myInformation/13042132Q-6.jpg">
										</s:else>
									</div>
									<p>原比例</p>
								</div>
								<div class="portrait2">
									<div id="img_small_preview" class="img_preview">
										<s:if test="#session.user.userPhotoPath!=null">
										 <img id="avatar2" class="avatarcss" alt="请上传头像"
												src="commodity/tophoto.action?path=${user.userPhotoPath }">
										</s:if>
										<s:else>
											<img id="avatar2" class="avatarcss" alt="请上传头像"
												src="images/front/myInformation/13042132Q-6.jpg">
										</s:else>
									</div>
									<p>50%比例</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript">
    $(function () {
        var $div_li = $("div.myinfo_tab_menu ul li.s");
        $div_li.click(function () {
            $(this).addClass("selected")
                .siblings().removeClass("selected");
            var index = $div_li.index(this);
            $("div.myinfo_tab_box > div.myform")
                .eq(index).show()
                .siblings().hide();
            $(".initdistip").hide();
           loadIframeHeight();
        });
    })
</script>
</body>

</html>
