package com.model.vo;

import com.model.pojo.Log;

/**
 * 用来查询显示到界面的日志模型
 * @author CHIN
 *
 */
public class LogShow extends Log{
	
	private Long phoneNumber;
	private String userName;
	
	public LogShow() {
		
	}

	public LogShow(Integer communicationRecordId, Integer userId,
			String logOperation, String logOperationTime) {
		super(communicationRecordId, userId, logOperation, logOperationTime);
	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	
}
