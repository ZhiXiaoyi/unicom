

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