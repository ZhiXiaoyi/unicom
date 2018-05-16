package com.model;

/**
 * 
 * 翻页类
 * @author LeeP1994
 *
 */
public class Page {  
	// 第几页  
    private int pageIndex;  
    // 每页大小  
    private int pageSize;  
    // 总数  
    private int rowTotal;  
    // 总共多少页  
	@SuppressWarnings("unused")
	private int pageTotal;  
  
    public Page(int pageIndex, int pageSize, int rowTotal) {  
        this.pageIndex = pageIndex;  
        this.pageSize = pageSize;  
        this.rowTotal = rowTotal;  
    }  
  
    public int getRowTotal() {  
        return rowTotal;  
    }  
  
    public void setRowTotal(int rowTotal) {  
        this.rowTotal = rowTotal;  
    }  
  
    public int getPageIndex() {  
        return pageIndex;  
    }  
  
    public void setPageIndex(int pageIndex) {  
        this.pageIndex = pageIndex;  
    }  
  
    public int getPageSize() {  
        return pageSize;  
    }  
  
    public void setPageSize(int pageSize) {  
        this.pageSize = pageSize;  
    }  
  
    public int getPageTotal() {  
        int pageTotal = 0;  
        if (rowTotal % pageSize == 0) {  
            pageTotal = this.rowTotal / this.pageSize;  
  
        } else {  
            pageTotal = rowTotal / pageSize + 1;  
        }  
        return pageTotal;  
    }  
  
    public void setPageTotal(int pageTotal) {  
        this.pageTotal = pageTotal;  
    }  
  
}  