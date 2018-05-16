package com.model.vo;

public class Score {
	//积分 用于统计使用
	private Integer remainingScore;// 当前积分
	private Integer allIntegeral;// 所有积分
	private Integer usedIntegeral;// 已使用的积分
	private String startdate; //起始时间
	private String lastdate;  //截至时间
	public Integer getRemainingScore() {
		return remainingScore;
	}
	public void setRemainingScore(Integer remainingScore) {
		this.remainingScore = remainingScore;
	}
	public Integer getAllIntegeral() {
		return allIntegeral;
	}
	public void setAllIntegeral(Integer allIntegeral) {
		this.allIntegeral = allIntegeral;
	}
	public Integer getUsedIntegeral() {
		return usedIntegeral;
	}
	public void setUsedIntegeral(Integer usedIntegeral) {
		this.usedIntegeral = usedIntegeral;
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
	public Score(Integer remainingScore, Integer allIntegeral,
			Integer usedIntegeral, String startdate, String lastdate) {
		super();
		this.remainingScore = remainingScore;
		this.allIntegeral = allIntegeral;
		this.usedIntegeral = usedIntegeral;
		this.startdate = startdate;
		this.lastdate = lastdate;
	}
	public Score() {
		super();
	}
	
	
	
}
