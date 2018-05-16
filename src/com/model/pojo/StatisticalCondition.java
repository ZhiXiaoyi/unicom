package com.model.pojo;

public class StatisticalCondition { //查询条件
	private Integer areaid;  //地区ID
	private String startdate; //起始时间
	private String lastdate;  //截至时间
	public StatisticalCondition(){
		
	}
	
	public StatisticalCondition(Integer areaid, String startdate,
			String lastdate) {
		super();
		this.areaid = areaid;
		this.startdate = startdate;
		this.lastdate = lastdate;
	}

	public Integer getAreaid() {
		return areaid;
	}
	public void setAreaid(Integer areaid) {
		this.areaid = areaid;
	}
	public String getStartdate() {
		return startdate;
	}
	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}
	public String getLastdate() {
		return lastdate;
	}
	public void setLastdate(String lastdate) {
		this.lastdate = lastdate;
	}

	
	
}
