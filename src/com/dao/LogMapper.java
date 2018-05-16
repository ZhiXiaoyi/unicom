package com.dao;

import java.util.List;

import com.model.pojo.Log;
import com.utils.SearchPageUtil;
import com.utils.annotation.MyBatisRepository;

@MyBatisRepository
public interface LogMapper {
	
	/**
	 * 插入日志
	 * @return
	 */
	public boolean insertLog(Log log);

	/**
	 * 查询日志总共有多少行
	 * @return
	 */
	public Integer findLogCount();

	/**
	 * 查询每页的日志
	 * @param searchPageUtil
	 * @return
	 */
	public List<Log> getLogList(SearchPageUtil searchPageUtil);

}
