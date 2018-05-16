package com.model.pojo;

import java.util.List;

public class ApplicationForm {
	private Integer applicationid;
	private Integer newpackageNum;
	private String newpackageInfo;
	private String oldpackageInfo;
	private Long mobilecardid;
	private Integer State;
	private List<Integer> applicationFormList;
	private List<ChangePackage> cpList; 
	public ApplicationForm(){
		
	}
	
	public ApplicationForm(Integer applicationid, Integer newpackageNum,
			String newpackageInfo, String oldpackageInfo, Long mobilecardid,
			Integer state, List<Integer> applicationFormList,
			List<ChangePackage> cpList) {
		super();
		this.applicationid = applicationid;
		this.newpackageNum = newpackageNum;
		this.newpackageInfo = newpackageInfo;
		this.oldpackageInfo = oldpackageInfo;
		this.mobilecardid = mobilecardid;
		State = state;
		this.applicationFormList = applicationFormList;
		this.cpList = cpList;
	}

	public Integer getApplicationid() {
		return applicationid;
	}
	public void setApplicationid(Integer applicationid) {
		this.applicationid = applicationid;
	}
	public Integer getNewpackageNum() {
		return newpackageNum;
	}
	public void setNewpackageNum(Integer newpackageNum) {
		this.newpackageNum = newpackageNum;
	}
	public String getNewpackageInfo() {
		return newpackageInfo;
	}
	public void setNewpackageInfo(String newpackageInfo) {
		this.newpackageInfo = newpackageInfo;
	}
	public String getOldpackageInfo() {
		return oldpackageInfo;
	}
	public void setOldpackageInfo(String oldpackageInfo) {
		this.oldpackageInfo = oldpackageInfo;
	}
	public Long getMobilecardid() {
		return mobilecardid;
	}
	public void setMobilecardid(Long mobilecardid) {
		this.mobilecardid = mobilecardid;
	}
	public Integer getState() {
		return State;
	}
	public void setState(Integer state) {
		State = state;
	}
	public List<Integer> getApplicationFormList() {
		return applicationFormList;
	}
	public void setApplicationFormList(List<Integer> applicationFormList) {
		this.applicationFormList = applicationFormList;
	}
	public List<ChangePackage> getCpList() {
		return cpList;
	}
	public void setCpList(List<ChangePackage> cpList) {
		this.cpList = cpList;
	}
	


	
}
