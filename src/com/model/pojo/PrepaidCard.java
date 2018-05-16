package com.model.pojo;

import javax.xml.crypto.Data;
 /**
 * @author lcz
 *充值卡
 */
public class PrepaidCard {
	
	private Integer prepaidCardId;//充值卡id
	private Integer areaId;//区域id
	private Integer mobileCardId;//手机卡id
	private Integer faceValue;//面值
	private Integer prepaidCardPassword;//充值卡密码
	private String prepaidCardState;//充值卡状态
	private Data sallTime;//销售时间
	
	public PrepaidCard() {
		super();
	}
	
	public PrepaidCard(Integer prepaidCardId, Integer areaId,
			Integer mobileCardId, Integer faceValue,
			Integer prepaidCardPassword, String prepaidCardState, Data sallTime) {
		super();
		this.prepaidCardId = prepaidCardId;
		this.areaId = areaId;
		this.mobileCardId = mobileCardId;
		this.faceValue = faceValue;
		this.prepaidCardPassword = prepaidCardPassword;
		this.prepaidCardState = prepaidCardState;
		this.sallTime = sallTime;
	}
	public Integer getPrepaidCardId() {
		return prepaidCardId;
	}
	public void setPrepaidCardId(Integer prepaidCardId) {
		this.prepaidCardId = prepaidCardId;
	}
	public Integer getAreaId() {
		return areaId;
	}
	public void setAreaId(Integer areaId) {
		this.areaId = areaId;
	}
	public Integer getMobileCardId() {
		return mobileCardId;
	}
	public void setMobileCardId(Integer mobileCardId) {
		this.mobileCardId = mobileCardId;
	}
	public Integer getFaceValue() {
		return faceValue;
	}
	public void setFaceValue(Integer faceValue) {
		this.faceValue = faceValue;
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

	public Data getSallTime() {
		return sallTime;
	}

	public void setSallTime(Data sallTime) {
		this.sallTime = sallTime;
	}

	
	
	
}
