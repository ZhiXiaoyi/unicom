package com.web.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import com.model.Page;
import com.model.pojo.Log;
import com.service.ILogService;

@Controller
@Transactional(readOnly = true)
// 事务
public class LogAction extends BaseAction {
	
	private static final long serialVersionUID = 1L;
	// private LogShow logShow;// 日志显示模型
	// private List<LogShow> logShowList;
	private List<Log> logList;
	private Page page;// 分页类
	private Integer pageIndex;// 当前页
	private Integer pageSize = 10;// 每页大小

	@Resource
	private ILogService logService;

	
	/**
	 * 分页查询跳转
	 */
	public String topage() {
		try { 	if (pageIndex == null) {
				pageIndex = 1;
			}
			//从界面获取当前页面的属性
			page = new Page(pageIndex, pageSize, logService.findLogCount());
			//调用查看日志的业务逻辑
			logList = logService.findLogList(page);
		} catch (Exception e) {
		}
		return SUCCESS;
	}

	public List<Log> getLogList() {
		return logList;
	}

	public void setLogList(List<Log> logList) {
		this.logList = logList;
	}

	public Page getPage() {
		return page;
	}

	public void setPage(Page page) {
		this.page = page;
	}

	public Integer getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(Integer pageIndex) {
		this.pageIndex = pageIndex;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

}
