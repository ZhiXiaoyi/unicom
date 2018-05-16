package com.service.impl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.LogMapper;
import com.model.Page;
import com.model.pojo.Log;
import com.service.ILogService;
import com.utils.SearchPageUtil;

@Service
@Transactional(readOnly = true)
// 事务
public class LogServiceImp implements ILogService {

	@Resource
	private LogMapper logMapper;

	@Override
	public boolean insertLog(Log log) {
		try {
			Date date = new Date();
			DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String time = format.format(date);
			log.setLogOperationTime(time);// 设置插入时间
			logMapper.insertLog(log);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public Integer findLogCount() {
		return logMapper.findLogCount();
	}
	
	/**
	 * 分页查询日志
	 */
	public List<Log> findLogList(Page page) {
		// 新建一个VO对象
		SearchPageUtil searchPageUtil = new SearchPageUtil();
		// 设置当前页面的熟悉
		searchPageUtil.setPage(page);
		//根据封装的VO对象，数据库查询日志对象集合
		List<Log> logList = logMapper.getLogList(searchPageUtil);
		return logList;
	}

}
