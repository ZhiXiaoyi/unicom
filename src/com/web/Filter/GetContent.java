package com.web.Filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.utils.SysContent;

public class GetContent implements Filter{


	@Override
	public void destroy() {
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
		FilterChain chain) throws IOException, ServletException {  
		//System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++");
        SysContent.setRequest((HttpServletRequest) request);  
        SysContent.setResponse((HttpServletResponse) response);  
       // System.out.println(((HttpServletRequest) request).getSession());
        //System.out.println(SysContent.getRequest().getSession());
        chain.doFilter(request, response);  
		
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		
	}

}
