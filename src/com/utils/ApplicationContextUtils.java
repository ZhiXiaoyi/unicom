package com.utils;


import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationObjectSupport;

public class ApplicationContextUtils extends WebApplicationObjectSupport{
	
	
    public  WebApplicationContext isgetWebApplicationContext(){  
        return super.getWebApplicationContext();  
    }  

}
