
/**
 * Describe：页面常用功能单元
   Author：bellone
 * @param {Object} str
 */
	/**
	 * 计算字符串长度,一个中文字符算2
	 * @param {Object} str
	 */
function checkStrLength(str){
			var pattern=/^[\u0391-\uFFE5]+$/;
			var len=0;
			for(var i=0;i<str.length;i++){
				var s=str.substr(i,1);
				if(pattern.test(s)){
					len+=2;
				}else{
					len+=1;
				}
			}
			return len;
	 }
	 
	 /**
	  * 查看某个表单值是否为空,当为空时返回真。
	  */
	 function isEmpty(str){
		 if(document.getElementById(str) != null){
				if (document.getElementById(str).value==""){
					 //如果为空则为真
					 return true;
				}else{
					 return false;
				}
		 }else{
			  return false;
		 }
	 }
	 
	 /**
	  * 查看某个表单值是否为空,当为空时返回假。
	  */
	function checkEmpty(str){
		 if(document.getElementById(str) != null){
				if (document.getElementById(str).value==""){
					 //如果为空则为真
					 return false;
				}else{
					 return true;
				}
		 }else{
			  return true;
		 }
	 }
	 
	 /**
	  * 验证单选框，复选框
	  * @param {Object} nameStr
	  */
	 function checkRadioAndBox(str){
		 if(document.getElementsByName(str) != null){
			  for (i=0;i<document.getElementsByName(str).length;i++){
						  if(document.getElementsByName(str)[i].checked){
							   return true;
						  }
			   }
			   return false;
		 }else{
			  return true;
		 }
	 }
	 
	 /**
	  * 取得节点的值
	  * @param {Object} nameStr
	  */
	 function getElementValue(nameStr){
	 	var replay = "";
	 	if(document.getElementById(nameStr)){
			replay = document.getElementById(nameStr).value;
		}
		return replay;
	 }
	 
	 /**
	  * 验证某值是否存在
	  * @param {Object} nameStr
	  */
	 function isExist(str){
		if(document.getElementById(str) != null){
		 	return true;
		}else{
		    return false;	
		}
	 }
	 
	 /* *
	  * 移除所有选中的
	  * @param {Object} str
	  */
	 function delSelectNodes(elementId){
		 var elem = document.getElementById(elementId);
		 	while (elem.childNodes.length > 0) {
				elem.removeChild(elem.childNodes[0]);
			}
	 }
	 
	 /**
	  *用于使复选框的某个选项被选种
	  */
	 function selectedOptions(selectId,cmpValue)
	 {
	 	var selectElem = document.getElementById(selectId);
	 	for (var i=0;i< selectElem.options.length;i++)
		{
		 	if(selectElem.options[i].value == cmpValue)
		 	{selectElem.options[i].selected=true;break;}
		}
	 }
	 
	 /**
	 * @param {Object} fNameList 展现的列表值，fOld为旧值。
	 * 如果旧值为列表值的某一项，则选中他
	 */
	 function checkedOldValue(fNameList ,fOld){
		 var num_pic = document.getElementsByName(fNameList);
		 var old_str = document.getElementById(fOld);
		 if(num_pic != null && old_str != null){
			 for (k=0;k<num_pic.length;k++){
				  var sinFname = document.getElementsByName(fNameList)[k];
				  if(sinFname.value == old_str.value){
					   sinFname.checked = true;
				  }
			 }
		 }
	 }
	 
	 /**
	  * 设置焦点
	  * @param {Object} str
	  */
	 function setFocus(str){
		if(document.getElementById(str) != null){
		 	document.getElementById(str).focus();
		}
	 }
	 
	  /*表单重置*/
	  function imgReset(form_modify){
	     	document.getElementById(form_modify).reset();  
	  }
	  
	/**
	 * 验证电话号码格式
	 * @param {Object} str
	 */
	function  checkPhoneNum(str,rep_str){
		    var replay_str = "联系电话";
			if(rep_str != undefined && rep_str != "")replay_str = rep_str;
		    var replay = "0";
			var _relationtel = document.getElementById(str);
			if(_relationtel == null){
					return true;
			}else if(_relationtel.value == ""){
					replay = "请填写"+replay_str+"！！！";
					alert(replay);
					return false;
			}else if(_relationtel.value.length < 7){
					replay = "您填的"+replay_str+"不应小于7位！！！";
					alert(replay);
					return false;
			}else if( _relationtel.value.replace(/[\d|-]/g,'')!=""){
					replay = "您填的"+replay_str+"格式不对，只能输入 - 与数字 ！！！";
					alert(replay);
					return false;
			}else{
					return true;
			}
	}
	
	/**
	 * 验证电话号码且宽带格式
	 * @param {Object} str
	 */
	function  checkPhoneAndNet(str,rep_str){
			var replay_str = "业务号码";
			if(rep_str != undefined && rep_str != "")replay_str = rep_str;
		    var replay = "0";
			var _relationtel = document.getElementById(str);
			if(_relationtel == null){
					return true;
			}else if(_relationtel.value == ""){
					replay = "请填写"+replay_str+"（数字或字母）！！！";
					alert(replay);
					return false;
			}else if(_relationtel.value.length < 6){
					replay = "您填的"+replay_str+"不应小于6位！！！";
					alert(replay);
					return false;
			}else if( _relationtel.value.replace(/[\w.@]/g,'')!=""){
					replay = "您填的"+replay_str+"格式不对，只能输入@、数字与字母 ！！！";
					alert(replay);
					return false;
			}else{
					return true;
			}
	}
	
	/**
	 * 验证宽带帐号
	 * @param {Object} str
	 */
	function  checkNetAccount(str,rep_str){
			var replay_str = "宽带帐号";
			if(rep_str != undefined && rep_str != "")replay_str = rep_str;
			var netAcc = document.getElementById(str);
			var check=/^[a-z]{2}[A-Za-z0-9]/;
			if(netAcc == null){
				return true;
			}else if(netAcc.value == ""){			   
				alert("请输入新装"+replay_str+"，新装宽带帐号不能为空！！！");
				return false;
			}else if(netAcc.value.length < 6 ) {         
				alert("抱歉，系统支持的最小帐号字符长度为6位，请调整您的"+replay_str+"位数，谢谢！！！");
				return false;
			}else if(netAcc.value.length > 8) {        
				alert("抱歉，系统支持的最大帐号字符长度为8位，请调整您的"+replay_str+"位数，谢谢！！！");
				return false;
			}else if(!check.test(netAcc.value)) {        
				alert("抱歉，你输入的"+replay_str+"格式不正确，请重新输入，谢谢！！！");
				return false;
			}else{
				return true;
			}
	}
	
			
	/**
	 * 验证身份证格式
	 * @param {Object} str
	 */
	function checkCardNo(cartnoStr){	
		//增加身份证号验证
		var pattern=/^\d{15}(\d{2}[Xx0-9])?$/;
		if(document.getElementById(cartnoStr) != null && document.getElementById(cartnoStr).style.display != "none"){
			if(!pattern.test(document.getElementById(cartnoStr).value.Trim())){
				alert("身份证号有误,请确认！！！");
				return false;
			}else{
				 return true;
			}
		}else{
			return true;
		}
	}
	
	//固话与ADSL同装中电子邮件不需要必填验证。
	function checkEmailForNew(str){
		var emailStr = document.getElementById(str);
		if(pri_checkEmail(emailStr.value)){
					 return true;
				}else{
					 alert("您输入的电子邮件格式不对！！！");
					 return false;
				}
	}
	/**
	 *手机格式修改
	 */
	function checkMobile(str,rep_str){
		var replay_str = "手机号码";
		if(rep_str != undefined && rep_str != "")replay_str = rep_str;
		var mobileObj = document.getElementById(str);
		var cdma_no = mobileObj.value;
	    if(cdma_no == ""){
		  	alert("请输入"+replay_str+"！");
		  	document.getElementById(str).focus();
			return;
	   }
	   var reg=new RegExp(/^\d{11}$/);
   	   if(!reg.test(cdma_no)){
	   	    alert(replay_str+"格式有误，请重新输入!!!");
	   	    document.getElementById(str).focus();
	   	    return false;
   	   }	
	  if(cdma_no.substring(0,3)!="133" && cdma_no.substring(0,3)!="153" && cdma_no.substring(0,3)!="189" && cdma_no.substring(0,3)!="180"&& cdma_no.substring(0,3)!="181"&& cdma_no.substring(0,3)!="177"  && cdma_no.substring(0,3)!="173"){
	  		alert("对不起，您输入的"+replay_str+"不是合法的CDMA用户!");		  		
	  		return false;
	  }
	  return true;
	}
	
	/**
	 * 验证email格式
	 * @param {Object} str
	 */
	function checkEmail(str,isRequired){
		 var emailStr = document.getElementById(str);

		 if(emailStr != null){
			 	if(isRequired != undefined && isRequired != ""){
					if(emailStr.value== ""){
						 alert("请输入的电子邮件！！！");
						 return false;
					}
				}
			
			    if(pri_checkEmail(emailStr.value)){
					 return true;
				}else{
					 alert("您输入的电子邮件格式不对！！！");
					 emailStr.focus();
					 emailStr.select();
					 return false;
				}
		 }else{
		    return false;
		 }
	}
	function pri_checkEmail(emailStr) {
        if (emailStr.length == 0) {
            return true;
        }
        // TLD checking turned off by default
        var checkTLD=0;
        var knownDomsPat=/^(com|cn|mobi|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;
        var emailPat=/^(.+)@(.+)$/;
        var specialChars="\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
        var validChars="\[^\\s" + specialChars + "\]";
        var quotedUser="(\"[^\"]*\")";
        var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
        var atom=validChars + '+';
        var word="(" + atom + "|" + quotedUser + ")";
        var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
        var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");
        var matchArray=emailStr.match(emailPat);
        if (matchArray==null) {
            return false;
        }
        var user=matchArray[1];
        var domain=matchArray[2];
        for (i=0; i<user.length; i++) {
            if (user.charCodeAt(i)>127) {
                return false;
            }
        }
        for (i=0; i<domain.length; i++) {
            if (domain.charCodeAt(i)>127) {
                return false;
            }
        }
        if (user.match(userPat)==null) {
            return false;
        }
        var IPArray=domain.match(ipDomainPat);
        if (IPArray!=null) {
            for (var i=1;i<=4;i++) {
                if (IPArray[i]>255) {
                    return false;
                }
            }
            return true;
        }
        var atomPat=new RegExp("^" + atom + "$");
        var domArr=domain.split(".");
        var len=domArr.length;
        for (i=0;i<len;i++) {
            if (domArr[i].search(atomPat)==-1) {
                return false;
            }
        }
        if (checkTLD && domArr[domArr.length-1].length!=2 && 
            domArr[domArr.length-1].search(knownDomsPat)==-1) {
            return false;
        }
        if (len<2) {
            return false;
        }
        return true;
    }
	/**
	 * 根据正则表达式ss 验证val
	 * @param val
	 * @param ss
	 * @return
	 */
	function isTrue(val,ss){
		var reg=ss;
		if (!ss.exec(val))return false;
		else return true;
	}
     /**
	 * 宽带类型__密码修改页面的表单部分check
	 * 其中表单ID应该命名一样的：form表单名form_modify，旧密码OLDPWD，新密码NEWPWD，确认密码RE_NEWPWD，验证码yzm
	 */
	 function modifyNetPwd(){
	 		var oldpwd = document.form_modify.OLDPWD.value;
	 		var newpwd = document.form_modify.NEWPWD.value;
	 		var re_newpwd = document.form_modify.RE_NEWPWD.value;
	 		var yzm = document.form_modify.yzm.value;
	 		if (oldpwd == ""){ 
					alert("请填写旧密码！"); 
					document.form_modify.OLDPWD.focus();
					return false;
			}
		    if (newpwd=="") { 
					alert("请填写新密码！"); 
					document.form_modify.NEWPWD.focus();
					return false;
			}
			if(document.form_modify.NEWPWD.value.length < 6 || document.form_modify.NEWPWD.value.length > 16) {         
				alert("密码长度必须是6-16位！"); 
				document.form_modify.NEWPWD.value = "";
				document.form_modify.NEWPWD.focus();
				return false;
			}
			
		    if (re_newpwd==""){ 
					alert("请填写确认密码！"); 
					document.form_modify.RE_NEWPWD.focus();
					return false;
			}			
		 	if (re_newpwd.length != newpwd.length) { 
				alert("新密码与确认密码位数不一致！"); 
				document.form_modify.RE_NEWMM.value="";
				document.form_modify.RE_NEWMM.focus();
				return false;
			 }
			if (re_newpwd != newpwd) { 
				alert("新密码与确认密码不一致！"); 
				document.form_modify.NEWPWD.value="";
				document.form_modify.RE_NEWPWD.value="";
				document.form_modify.NEWPWD.focus();
				return false;
			 }
			if (oldpwd == newpwd) { 
					alert("新密码与旧密码是一致的！"); 
					document.form_modify.NEWPWD.value="";
					document.form_modify.NEWPWD.value="";
					document.form_modify.RE_NEWPWD.value="";
					return false;
			 }
			 if(!isTrue(newpwd,/^[a-zA-Z0-9]*$/)){
				alert("新密码格式须为6-16位的数字+字符的组合，且后6位必须为纯数字，请重新输入！");
				document.getElementById("NEWMM").value = "";
				document.getElementById("NEWMM").focus();
				return false;
		   }
			//取密码尾数6位
			 var newpwd_la = newpwd.substring(newpwd.length-6,newpwd.length);
			 if(!isTrue(newpwd_la,/^[0-9]*$/)){
					alert("新密码格式须为6-16位的数字+字符的组合，且后6位必须为纯数字，请重新输入!");
					document.getElementById("NEWMM").value = "";
					document.getElementById("NEWMM").focus();
					return false;
			    }
			 for(var i=0;i<newpwd.length;i++){
					var c=newpwd.substring(i,i+1);
					if(c==' ' || c=='-' ||c=='”' ||c=='‘' ||c=='$'){
						alert("新密码含有空格，-，”，’，$等非法字符，请重新输入！"); 
						document.form_modify.NEWPMM.value="";
						document.form_modify.RE_NEWMM.value="";
						document.form_modify.NEWPWD.focus();
						return false;
					}
				}
			 if (document.form_modify.yzm.value=="") { 
					alert("验证码不能为空！"); 
					document.form_modify.yzm.focus();
					return false;
			  }
	 }

     /**
	 * 固话小灵通__密码修改页面的表单部分check
	 * 其中表单ID应该命名一样的：form表单名form_modify，旧密码OLDPWD，新密码NEWPWD，确认密码RE_NEWPWD，验证码yzm
	 */
	 function modifyPwd(){
	       	var oldpwd = document.form_modify.OLDPWD.value;
	 		var newpwd = document.form_modify.NEWPWD.value;
	 		var re_newpwd = document.form_modify.RE_NEWPWD.value;
	 		var yzm = document.form_modify.yzm.value;
	 		if(isNaN(oldpwd)){
	 				alert("密码应是数字");
	 				document.form_modify.OLDPWD.focus();
	 				return false;
	 		}
	 		if(isNaN(newpwd)){
	 				alert("密码应是数字");
	 				document.form_modify.NEWPWD.focus();
	 				return false;
	 		}
	 		if(isNaN(re_newpwd)){
	 				alert("密码应是数字");
	 				document.form_modify.RE_NEWPWD.focus();
	 				return false;
	 		}	 			 		
	 	   if (newpwd.length != 6){ 
					alert("密码长度必须是6位！"); 
					document.form_modify.NEWPWD.focus();
					return false;
			}
		   if (re_newpwd.length != 6){ 
					alert("密码长度必须是6位！"); 
					document.form_modify.RE_NEWPWD.focus();
					return false;
			}
	 		if (oldpwd == ""){ 
					alert("请填写旧密码！"); 
					document.form_modify.OLDPWD.focus();
					return false;
			}
		    if (newpwd=="") { 
					alert("请填写新密码！"); 
					document.form_modify.NEWPWD.focus();
					return false;
			}
		    if (re_newpwd==""){ 
					alert("请填写确认密码！"); 
					document.form_modify.RE_NEWPWD.focus();
					return false;
			}
			if (re_newpwd.length != newpwd.length) { 
					alert("新密码与确认密码位数不一致！"); 
					document.form_modify.RE_NEWPWD.value="";
					document.form_modify.RE_NEWPWD.focus();
					return false;
			 }
			if (re_newpwd != newpwd) { 
					alert("新密码与确认密码不一致！"); 
					document.form_modify.NEWPWD.value="";
					document.form_modify.RE_NEWPWD.value="";
					document.form_modify.NEWPWD.focus();
					return false;
			 }
			if (oldpwd == newpwd) { 
					alert("新密码与旧密码是一致的！"); 
					document.form_modify.NEWPWD.value="";
					document.form_modify.RE_NEWPWD.value="";
					document.form_modify.NEWPWD.focus();
					return false;
			 }
			  if(!isTrue(newpwd,/^[a-zA-Z0-9]*$/)){
				alert("新密码格式须为6-16位的数字+字符的组合，且后6位必须为纯数字，请重新输入！");
				document.getElementById("NEWMM").value = "";
				document.getElementById("NEWMM").focus();
				return false;
		   }
			//取密码尾数6位
			 var newpwd_la = newpwd.substring(newpwd.length-6,newpwd.length);
			 if(!isTrue(newpwd_la,/^[0-9]*$/)){
					alert("新密码格式须为6-16位的数字+字符的组合，且后6位必须为纯数字，请重新输入!");
					document.getElementById("NEWMM").value = "";
					document.getElementById("NEWMM").focus();
					return false;
			    }
			 for(var i=0;i<newpwd.length;i++){
					var c=newpwd.substring(i,i+1);
					if(c==' ' || c=='-' ||c=='”' ||c=='‘' ||c=='$'){
						alert("新密码含有空格，-，”，’，$等非法字符，请重新输入！"); 
						document.form_modify.NEWPMM.value="";
						document.form_modify.RE_NEWMM.value="";
						document.form_modify.NEWPWD.focus();
						return false;
					}
				}
			 if (yzm=="") { 
					alert("验证码不能为空！"); 
					document.form_modify.yzm.focus();
					return false;
			  }
	 }
	 
	 /**
	 * 固话小灵通__密码修改页面的表单部分check(解决“已解密的登录请求”安全问题)
	 * 其中表单ID应该命名一样的：form表单名form_modify，旧密码OLDPWD，新密码NEWPWD，确认密码RE_NEWPWD，验证码yzm
	 */
	  function modifyPwdNew(){
	       	var oldpwd = document.form_modify.OLDMM.value;
	 		var newpwd = document.form_modify.NEWMM.value;
	 		var re_newpwd = document.form_modify.RE_NEWMM.value;
	 		var yzm = document.form_modify.yzm.value;
	 		if (oldpwd == ""){ 
				alert("请填写旧密码！"); 
				document.form_modify.OLDMM.focus();
				return false;
	 		}
		    if (newpwd=="") { 
					alert("请填写新密码！"); 
					document.form_modify.NEWMM.focus();
					return false;
			}
		    if (re_newpwd==""){ 
					alert("请填写确认密码！"); 
					document.form_modify.RE_NEWMM.focus();
					return false;
			}
	 	   if (newpwd.length < 6||newpwd.length > 16){ 
					alert("密码长度必须是6-16位！"); 
					document.form_modify.NEWMM.focus();
					return false;
			}
		   if (re_newpwd.length < 6||re_newpwd.length > 16){ 
					alert("确认密码长度必须是6-16位！"); 
					document.form_modify.RE_NEWMM.focus();
					return false;
			}
			if (oldpwd.length < 6||oldpwd.length > 16){ 
				alert("旧密码长度必须是6-16位！"); 
				document.form_modify.OLDMM.focus();
				return false;
		}
		if (re_newpwd.length != newpwd.length) { 
					alert("新密码与确认密码位数不一致！"); 
					document.form_modify.RE_NEWPWD.value="";
					document.form_modify.RE_NEWPWD.focus();
					return false;
			 }
			if (re_newpwd != newpwd) { 
					alert("新密码与确认密码不一致！"); 
					document.form_modify.NEWMM.value="";
					document.form_modify.RE_NEWMM.value="";
					document.form_modify.NEWMM.focus();
					return false;
			 }
			if (oldpwd == newpwd) { 
					alert("新密码与旧密码是一致的！"); 
					document.form_modify.NEWMM.value="";
					document.form_modify.RE_NEWMM.value="";
					document.form_modify.NEWMM.focus();
					return false;
			 }
		   
		   if(!isTrue(oldpwd,/^[a-zA-Z0-9]*$/)){
				alert("新密码格式须为6-16位的数字+字符的组合，且后6位必须为纯数字，请重新输入!");
				document.form_modify.OLDMM.focus();
				return false;
		   }
		   if(!isTrue(newpwd,/^[a-zA-Z0-9]*$/)){
				alert("新密码格式须为6-16位的数字+字符的组合，且后6位必须为纯数字，请重新输入!");
				document.form_modify.NEWMM.focus();
				return false;
		   }
		   if(!isTrue(re_newpwd,/^[a-zA-Z0-9]*$/)){
				alert("新密码格式须为6-16位的数字+字符的组合，且后6位必须为纯数字，请重新输入!");
				document.form_modify.RE_NEWMM.focus();
				return false;
		   }	 			 
		   //取密码尾数6位
	 		var newpwd_la = newpwd.substring(newpwd.length-6,newpwd.length);
	 		var re_newpwd_la = re_newpwd.substring(re_newpwd.length-6,re_newpwd.length);
	 		if(!isTrue(newpwd_la,/^[0-9]*$/)){
				alert("新密码格式须为6-16位的数字+字符的组合，且后6位必须为纯数字，请重新输入!");
				document.form_modify.NEWMM.focus();
				return false;
		    }
		    if(!isTrue(re_newpwd_la,/^[0-9]*$/) && re_newpwd.length>6){
				alert("新密码格式须为6-16位的数字+字符的组合，且后6位必须为纯数字，请重新输入!");
				document.form_modify.RE_NEWMM.focus();
				return false;
		     }		
		     	for(var i=0;i<newpwd.length;i++){
					var c=newpwd.substring(i,i+1);
					if(c==' ' || c=='-' ||c=='”' ||c=='‘' ||c=='$'){
						alert("新密码含有空格，-，”，’，$等非法字符，请重新输入！"); 
						document.form_modify.NEWPMM.value="";
						document.form_modify.RE_NEWMM.value="";
						document.form_modify.NEWPWD.focus();
						return false;
					}
				}
			 if (yzm=="") { 
					alert("验证码不能为空！"); 
					document.form_modify.yzm.focus();
					return false;
			  }
	 }
	 

	
	/**
	 * 只能输入字符串，立即点击生效,当输入字符时，立既转为空白，相当于无输入
	 * @param {Object} str
	 */
	 function checkKeyUpStrIsNum(elementId){
		 if(document.getElementById(elementId) != null){
			 	var vStr = document.getElementById(elementId);
		  			vStr.value=vStr.value.replace(/[^\d]/g,'');
		 }
	 }
	 
	/**
	 * wull
	 * 过滤非法字符
	 */
	function htmlEncode(str) {
		str = str.replace(/&/ig,"＆");
		str = str.replace(/ /ig," ");
		str = str.replace(/>/ig,"＞");
		str = str.replace(/</ig,"＜");
		str = str.replace(/&#60;br&#62;/ig,"<br>");
		str = str.replace(/<br>/ig,"<br>");
		str = str.replace(/\'/ig,"'");
		str = str.replace(/'/gi,"'");
		return str ;
	}
	
	/**
	 * 转义所有表单的值的特殊字符
	 * 包括单选框和多选框
	 * @param {} formObj
	 */
	function replaeFormValue(formObj) {
		formObj = document.forms[formObj] || document.getElementById(formObj) || formObj;
		if(!formObj) return;
		try{
			for (var i=0;i<formObj.elements.length;i++ )
				{
					var el = formObj.elements[i];
					var elValue = el.value;
					elValue = elValue.replace(/</g,"＜");
					elValue = elValue.replace(/>/g,"＞");
					elValue = elValue.replace(/&/g,"＆");
					elValue = elValue.replace(/'/ig,"‘");
					elValue = elValue.replace(/"/gi,"“");
					elValue = elValue.replace(/:/gi,"：");
					elValue = elValue.replace(/\%|\<|\>|\[|\]|\{|\}|\;|\&|\+|\-|\(|\)/g,"");
					el.value = elValue;
			}
		}catch(e){}
	}


	/**
	 * 去除空格
	 * @param {Object} str
	 */
	 String.prototype.Trim = function() { 
		return this.replace(/(^\s*)|(\s*$)/g, ""); 
	 } 
	 //去除头空格
	 String.prototype.LTrim = function() { 
		return this.replace(/(^\s*)/g, ""); 
	 } 
	 //去除尾空格
	 String.prototype.RTrim = function(){ 
		return this.replace(/(\s*$)/g, ""); 
	 } 
	 
	 /**
	  * 屏蔽特殊字符
	  * 保留@符号,宽带登录要用
	  * 兼容IE ,FF
	  * 
	  */
	 function filerValidChar(event){
	 	var event = event || window.event;
	 	var keyCode = event.which || event.keyCode;
	 	if ((keyCode > 32 && keyCode < 48)
			|| (keyCode > 57 && keyCode < 64)
			|| (keyCode > 90 && keyCode < 95) || (keyCode == 96) || (keyCode > 122 && keyCode <127)){
			      if(window.event)
			         event.returnValue = false;
			      else
			    	  event.preventDefault();//for firefox
	 	}
	}
	 /**
	  * 异步添加网络安全日志
	  * url: 
	  * servicenumber:
	  */
	function ajaxInsertSafeLog(Url,Servicenumber){
		if(Url==null|Url==undefined||Url==""){
			//字段为空不做任何处理
		}else{
			try{
				var path = "/AjaxServlet.do";
		    	jQuery.ajax( {
			  		url : path,
			  		type : 'POST',
			  		dataType : 'json',
			  		cache : false,
			  		async : true,
			  		data : ( {
			  			method:'insertsalelog',url:Url,servicenumber:Servicenumber
			  		}),
			  		timeout : 10000,
			  		success : function(json) 
			  		{
		    				//成功不做任务处理
			  		},
					error : function() 
					{
				   		//异常不做任务处理
					}
			  	});
				
			}catch(err){
				//确保异常不会影响其他业务
			}
		}
			
			
		
	}

	
