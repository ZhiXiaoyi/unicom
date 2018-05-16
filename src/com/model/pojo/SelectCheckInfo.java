package com.model.pojo;

public class SelectCheckInfo {
	private Long phoneNumber;
	private Integer applicationState;
	public SelectCheckInfo(){
		
	}

	public SelectCheckInfo(Long phoneNumber, Integer applicationState) {
		super();
		this.phoneNumber = phoneNumber;
		this.applicationState = applicationState;
	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public Integer getApplicationState() {
		return applicationState;
	}
	public void setApplicationState(Integer applicationState) {
		this.applicationState = applicationState;
	}
	
}
