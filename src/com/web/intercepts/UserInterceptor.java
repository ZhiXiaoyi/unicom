package com.web.intercepts;

import java.util.Map;

import com.model.pojo.User;
import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

public class UserInterceptor implements Interceptor {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void destroy() {
	}

	public void init() {
	}
	
	public String intercept(ActionInvocation arg0) throws Exception {
		// 取得请求相关的session实例
		Map<String, Object> session = ActionContext.getContext().getSession();
		User user = (User) session.get("user");
		
		// 如果没有登陆，或者登陆所用的用户名不是scott，都返回重新登陆
		if (user != null) {
			 arg0.invoke();
		}
		// 直接返回login的逻辑视图
		return Action.LOGIN;
	}

}
