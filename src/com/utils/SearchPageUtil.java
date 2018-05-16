package com.utils;

import com.model.Page;

public class SearchPageUtil {
	 // 查询对象  
    private Object object;  
    // 排序字段  
    private String[] orderBys;  
    // 开始行  
    private int startRow;  
    // 终止行  
    private int pageSize;  
    // 条件字符串  
    private String filter;  
    // 排序字符串  
    private String orderBy;  
    // 分页类  
    private Page page;  
  
    public Object getObject() {  
        return object;  
    }  
  
    public void setObject(Object object) {  
        this.object = object;  
    }  
  
    public int getStartRow() {  
        return startRow;  
    }  
  
    public void setStartRow(int startRow) {  
        this.startRow = startRow;  
    }  
  
    public String getFilter() {  
        return filter;  
    }  
  
    public int getPageSize() {  
        return pageSize;  
    }  
  
    public void setPageSize(int pageSize) {  
        this.pageSize = pageSize;  
    }  
  
    public void setFilter(String filter) {  
        this.filter = filter;  
    }  
  
    public String[] getOrderBys() {  
        return orderBys;  
    }  
  
    public void setOrderBys(String[] orderBys) {  
        this.orderBys = orderBys;  
    }  
  
    public String getOrderBy() {  
        return orderBy;  
    }  
  
    public void setOrderBy(String orderBy) {  
        this.orderBy = orderBy;  
    }  
  
    public Page getPage() {  
        return page;  
    }  
  
    public void setPage(Page page) {  
        this.startRow = (page.getPageIndex() - 1) * page.getPageSize();  
        this.pageSize = page.getPageSize();  
        this.page = page;  
    }  
}  

