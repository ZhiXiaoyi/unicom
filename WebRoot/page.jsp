<jsp:directive.page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"/>  
<%@ taglib prefix="s" uri="/struts-tags" %> 
当前第  
<s:property value="page.pageIndex"/>  
页 共有  
<s:property value="page.rowTotal"/>  
结果 每页  
<s:property value="page.pageSize"/>  
条    
<s:if test="page.pageIndex > 1">  
    <a href="javascript:gotoPage(1);">首页</a>   
</s:if>  
<s:else>  
首页   
</s:else>  
<s:if test="page.pageIndex > 1">  
    <a href="javascript:gotoPage(<s:property value ="page.pageIndex-1"/>);">上页</a>   
</s:if>  
<s:else>  
上页   
</s:else>  
<s:if test="page.pageIndex < page.pageTotal">  
    <a href="javascript:gotoPage(<s:property value = "page.pageIndex+1"/>);">下页</a>   
</s:if>  
<s:else>  
下页   
</s:else>  
<s:if test="page.pageIndex < page.pageTotal">  
    <a href="javascript:gotoPage(<s:property value = "page.pageTotal"/>);">尾页</a>   
</s:if>  
<s:else>  
尾页   
</s:else>  
跳转到  
<input name="inputPageIndex" id="inputPageIndex" type="text" size="3" value="<s:property value="page.pageIndex"/>"/>  
页   
<input name="Submit" type="submit" onClick="javascript:gotoPageByIndex(<s:property value = "page.pageTotal"/>)" value="确定"/>