package com.web.action;

import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;


/**
 * Action基类，用于封装Action通用的方法。
 */
@SuppressWarnings("serial")
@Controller
public class BaseAction extends ActionSupport implements SessionAware {

	protected Map<String, Object> session;
	// 采用接口注入的方式统一获取session
	public void setSession(Map<String, Object> arg0) {
		session = arg0;
	}
	
	
	
	
	
	
}
