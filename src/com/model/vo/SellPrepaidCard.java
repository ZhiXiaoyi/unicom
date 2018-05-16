package com.model.vo;

import java.sql.Date;

public class SellPrepaidCard {
	// 出售充值卡时修改的字段
	private Integer prepaidCardId;// 充值卡id
	private Integer areaId; // 区域id
	private String prepaidCardState;// 充值卡状态
	private Date sallTime;// 出售时间

	public Integer getPrepaidCardId() {
		return prepaidCardId;
	}

	public void setPrepaidCardId(Integer prepaidCardId) {
		this.prepaidCardId = prepaidCardId;
	}

	public Date getSallTime() {
		return sallTime;
	}

	public void setSallTime(Date sallTime) {
		this.sallTime = sallTime;
	}

	public Integer getAreaId() {
		return areaId;
	}

	public void setAreaId(Integer areaId) {
		this.areaId = areaId;
	}

	public String getPrepaidCardState() {
		return prepaidCardState;
	}

	public void setPrepaidCardState(String prepaidCardState) {
		this.prepaidCardState = prepaidCardState;
	}

	public SellPrepaidCard(Integer prepaidCardId, Integer areaId,
			String prepaidCardState, Date sallTime) {
		super();
		this.prepaidCardId = prepaidCardId;
		this.areaId = areaId;
		this.prepaidCardState = prepaidCardState;
		this.sallTime = sallTime;
	}

	public SellPrepaidCard() {
		super();
	}

}
