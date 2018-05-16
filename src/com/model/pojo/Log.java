package com.model.pojo;


/**
 * 日志表
 * 
 * @author CHIN
 *
 */
public class Log {

	private Integer communicationRecordId;// 通信记录id

	private Integer userId;// 用户id

	private String logOperation;// 操作内容

	private String logOperationTime;// 操作时间

	public Log() {

	}

	public Log(Integer communicationRecordId, Integer userId,
			String logOperation, String logOperationTime) {
		super();
		this.communicationRecordId = communicationRecordId;
		this.userId = userId;
		this.logOperation = logOperation;
		this.logOperationTime = logOperationTime;
	}

	public Integer getCommunicationRecordId() {
		return communicationRecordId;
	}

	public void setCommunicationRecordId(Integer communicationRecordId) {
		this.communicationRecordId = communicationRecordId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getLogOperation() {
		return logOperation;
	}

	public void setLogOperation(String logOperation) {
		this.logOperation = logOperation;
	}

	public String getLogOperationTime() {
		return logOperationTime;
	}

	public void setLogOperationTime(String logOperationTime) {
		this.logOperationTime = logOperationTime;
	}


}
