package com.service;

import java.util.List;

import com.model.Page;
import com.model.pojo.Log;

public interface ILogService {
	
	/**
	 * 插入日志数据
	 * @param log
	 * @return
	 */
	public boolean insertLog(Log log);
	
	/**
	 * 查询日志总共有多少行
	 * @return
	 */
	public Integer findLogCount();
	
	/**
	 * 根据页码得到日志展示的集合
	 * @param page
	 * @return
	 */
	public List<Log> findLogList(Page page);

}
