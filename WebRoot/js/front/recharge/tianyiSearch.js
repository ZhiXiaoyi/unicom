
/*搜索框关键字自动提示效果*/
jQuery(document).ready(function(){   
	jQuery("#qs").autocomplete("/AutocompleteServlet.do",{ 
	
	    minChars: 1, 

	    width: 400, 
	    
	    // 击键后激活autoComplete的延迟时间(单位毫秒)
	    delay: 400,

	    matchContains: true, 

	    autoFill: false, 
	    
	    // 在用户键入tab或return键时autoComplete下拉列表的第一个值将被自动选择,尽管它没被手工选中(用键盘或鼠标),默认为true
	    selectFirst:false,
	    
	    // 超过默认高度后是否有是否有滚动条
	    scroll:false,
	    
	    multipleSeparator: ' ',
	    
	    // 如果设置为true,autoComplete只会允许匹配的结果出现在输入框,当用户输入的是非法字符时将会得不到下拉框
	    mustMatch:false,
	    
	    // dataType:'json',//返回数据类型
	    
	    parse:function(data){
	         var rows=[];
	         var jsonObject = eval("("+data+")"); 
	         
	         for(var i=0;i<jsonObject.length;i++){

	              //一定要按以下格式设置数据

	              rows[rows.length]={

	                  data:jsonObject[i],

	                  value:jsonObject[i].keyname,//值

	                  result:jsonObject[i].keyname  //返回结果显示内容

	             };
	             

	          }

	          return rows;

	     },
	     formatItem:function(row, i, n) { 
	          return "<div>" +row.keyname+ "<div>";     

	     }  
	// 选中某一项后触发提交事件
	}).result(function(event, item) {
		   document.forms[0].submit();
	});


});

// <!--我要提问、我要回答、以及头部连接跳转开始-->
function toAsk(path){
		var title =  encodeURIComponent(encodeURIComponent(document.getElementById("qs").value));
		if(title != null && title != ""){
			window.location.href = path + "/10000zhidao/aiwen/addQuestion.jsp?title="+title;
		}else{
			window.location.href = path + "/10000zhidao/aiwen/addQuestion.jsp";
		}
	
	}
	function toAnswer(path){
		var title = encodeURIComponent(encodeURIComponent(document.getElementById("qs").value));
		if(title != null && title != ""){
			window.location.href = path + "/10000zhidao/searchaiwen.jsp?qs="+title+"&qastate=I";
		}else{
			window.location.href = path + "/10000zhidao/searchaiwen.jsp?qastate=I";
		}
			
	} 
	
	function toDump(path,purvICode){
		var title = encodeURIComponent(encodeURIComponent(document.getElementById("qs").value));
		if(title != null && title != ""){
			window.location.href = path+"?qs="+title+"&purvICode="+purvICode;
		}else{
			window.location.href = path;
		}
	}
	
	function toDump2(path,purvICode){
		var title = encodeURIComponent(encodeURIComponent(document.getElementById("qs").value));
		if(title != null && title != ""){
			window.location.href = path+"&qs="+title+"&purvICode="+purvICode;
		}else{
			window.location.href = path;
		}
	}
	// <!--我要提问、我要回答、以及头部连接跳转结束-->