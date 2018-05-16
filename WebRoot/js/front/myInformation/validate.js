var Validator = {
	// 邮箱验证
	isEmail : function(s) {
		//return this.test(s, '^(\.[a-zA-Z0-9_-]+)+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$');
		var myreg = /^([a-zA-Z0-9]+[-|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
 		return this.test(s,myreg);
		//return this.test(s, '^[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&\'*+\\/0-9=?A-Z^_`a-z{|}~]+\.[-!#$%&\'*+\\./0-9=?A-Z^_`a-z{|}~]+$');
	},
	// URL地址验证
	isAbsUrl : function(s) {
		return this.test(s, '^(news|telnet|nttp|file|http|ftp|https)://[-A-Za-z0-9\\.]+\\/?.*$');
	},
	//
	isSize : function(s) {
		return this.test(s, '^[0-9.]+(%|in|cm|mm|em|ex|pt|pc|px)?$');
	},
	//
	isId : function(s) {
		return this.test(s, '^[A-Za-z_]([A-Za-z0-9_])*$');
	},
	// 手机号码验证
	isPhone : function (s) {
		return this.test(s,"^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])\\d{8}$");
	},
	// 电信号码验证
	isTyPhone : function(s){
		return this.test(s,"^(133|153|181|189|180|177)\\d{8}$")||this.test(s,"^(1700)\\d{7}$");
	},
	//
	// 电信号码验证(带173的)
	isTyPhone_new : function(s){
		return this.test(s,"^(133|153|181|189|180|177|173)\\d{8}$")||this.test(s,"^(1700)\\d{7}$");
	},
	// 电话号码验证
	isTel:function(s){
		return this.test(s,"\\d{4}-\\d{8}|\\d{4}-\\d{7}|\\d{3}-\\d{8}");
	},
	// 区号
	isTelcode:function(s){
		return this.test(s,"\\d{4}|\\d{3}");
	},
	// 电话号
	isTelNum:function(s){
		return this.test(s,"\\d{7,8}");
	},
	// 分机号
	isTelpart:function(s){
		return this.test(s,"\\d{4}|\\d{3}|\\d{2}|\\d{1}");
	},
	isZipCode:function(s){
		return this.test(s, "^[0-9]{5,7}");
	},
	//
	isFax:function(s){
		return this.test(s,"^[0-9]{7,11}");
	},
	// 邮编验证
	isPostcode:function(s){
		// return this.test(s,"[1-9]\\d{5}(?!\\d)");
		return this.test(s,"^[0-9][0-9]{5}$");// 开头不能为0，共6位
	},
	// 身份证验证
	isIdCard:function(s){
		return this.test(s, "^([0-9]{6})(18|19|20)?([0-9]{2})([01][0-9])([0123][0-9])([0-9]{3})([0-9]|X|x)?$");
	},
	// 字母
	isEn:function(s){
		return this.test(s,"^[a-zA-Z]");
	},
	// 中文
	isChinaHan:function(s){
	   var reg = /^[\u4e00-\u9fa5]+$/i;
	   return reg.test(s);
	},
	isContainCN:function(s)
	 { // 验证是否包含 中文
		if (escape(s).indexOf( "%u" )<0)
		 {
			  // alert( "没有包含中文" );
			return false;
			 } else {
			 // alert( "包含中文" );
				 return true;
		 }
	 },
	 /* 是否包含空格 */
	 isIncSpace:function(s){    
	      var   valid=/\s/;   
	      return   (valid.test(s));
	      },  
	// 是否为空
	isEmpty : function(s) {
		var nl, i;

		if (s.nodeName == 'SELECT' && s.selectedIndex < 1)
			return true;

		if (s.type == 'checkbox' && !s.checked)
			return true;

		if (s.type == 'radio') {
			for (i=0, nl = s.form.elements; i<nl.length; i++) {
				if (nl[i].type == "radio" && nl[i].name == s.name && nl[i].checked)
					return false;
			}

			return true;
		}

		return new RegExp('^\\s*$').test(s.nodeType == 1 ? s.value : s);
	},
	// 是否是数字
	isNumber : function(s, d) {
		return !isNaN(s.nodeType == 1 ? s.value : s) && (!d || !this.test(s, '^-?[0-9]*\\.[0-9]*$'));
	},
	// 是否是整数
	isInt:function(s){
		return !isNaN(s)&&this.test(s, "^[0-9]*$");
	},
	// 是否为非法字符
	isByte:function(s){
	    return this.test(s,"[`~!@#$^&*()=|{}':;',\\[\\]._+<>/?%~！@#￥……&*（）——|{}【】‘；：”“\"'。，、？＂，．^\\s*]");
	},
	// 验证姓名是否为非法字符
	isFFByte:function(s){
	    return this.test(s,"[`~!@#$^&*()=|{}':;',\\[\\]_+<>/?%~！@#￥……&*（）——|{}【】‘；：”“\"'。，、？＂，^\\s*]");
	},
	// 求字符长度
	byteLength:function(s){
		return s.replace(/[^\x00-\xff]/g, "xx" ).length;
	},
	// 判断是否为IE
	isIE:function(){
		return /msie (\d+\.\d+)/i.test(navigator.userAgent);
	},
	// 判断是否为火狐
	isFireFox:function(){
	    return /firefox\/(\d+\.\d+)/i.test(navigator.userAgent); 
	},
	// 判断是否为谷歌
	isChrome:function(){
	    return /chrome\/(\d+\.\d+)/i.test(navigator.userAgent);
	},
	// 控制文件上传大小，传id值的字符串，则清空文本框的值
	checkfileSize:function(obj,filesize,Id){ 
	    var flag = false;
        var fileSize = 0; 
		var isIE = /msie (\d+\.\d+)/i.test(navigator.userAgent); // 如果是IE
    /*
	 * try { var filePath = obj.value; var fileSystem = new
	 * ActiveXObject("Scripting.FileSystemObject"); fileSize =
	 * parseInt(fileSystem.getFile(filePath).size);//计算文件大小 } catch(e) {
	 * fileSize = obj.files[0].size; //火狐,谷歌 }
	 */
		 fileSize = obj.files[0].size;  // 火狐,谷歌
         var size = fileSize / 1024; // 单位为K
         if(size>filesize){
           alertDiv("文件大于"+filesize+"K,请修改后重新上传");
           $("#"+Id).val('');
           if(isIE&&Id.length>0){
             // 兼容ie无法清空file里的值
             // obj.select();document.execCommand('Delete');
           	  obj.outerHTML+='';
            
           }
          return flag;
         }
         else{
           flag = true;
          return flag;
        }
	   },
	test : function(s, p) {
		s = s.nodeType == 1 ? s.value : s;

		return s == '' || new RegExp(p).test(s);
	}
};
