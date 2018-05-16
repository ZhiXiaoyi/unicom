package com.model.vo;

public class PrepaidCardIdAndPsw {
	//数据库筛选的出售卡的id和密码
	private Integer prepaidCardId;//id
	private Integer prepaidCardPassword;//密码
	private String prepaidCardState;//状态
	public Integer getPrepaidCardId() {
		return prepaidCardId;
	}
	public void setPrepaidCardId(Integer prepaidCardId) {
		this.prepaidCardId = prepaidCardId;
	}
	public Integer getPrepaidCardPassword() {
		return prepaidCardPassword;
	}
	public void setPrepaidCardPassword(Integer prepaidCardPassword) {
		this.prepaidCardPassword = prepaidCardPassword;
	}
	
	public String getPrepaidCardState() {
		return prepaidCardState;
	}
	public void setPrepaidCardState(String prepaidCardState) {
		this.prepaidCardState = prepaidCardState;
	}
	public PrepaidCardIdAndPsw() {
		super();
	}
	public PrepaidCardIdAndPsw(Integer prepaidCardId,
			Integer prepaidCardPassword, String prepaidCardState) {
		super();
		this.prepaidCardId = prepaidCardId;
		this.prepaidCardPassword = prepaidCardPassword;
		this.prepaidCardState = prepaidCardState;
	}

	
	
	
	

}
