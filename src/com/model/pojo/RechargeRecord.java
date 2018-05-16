package com.model.pojo;

import java.util.Date;



/**
 * @author lcz
 * @param 充值记录表
 */
public class RechargeRecord {
	
	private Integer rechargeRecordId;//充值记录id
	private Integer userId;//用户id
	private Integer areaId;//区域id
	private Long rechargePhoneNumber;//充值号码
	private Integer rechargeMoney;//充值金额
	private Integer addIntegral;//增加的积分
	private Date rechargeTime;//充值时间
	
	
	public Integer getRechargeRecordId() {
		return rechargeRecordId;
	}
	public void setRechargeRecordId(Integer rechargeRecordId) {
		this.rechargeRecordId = rechargeRecordId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public Integer getAreaId() {
		return areaId;
	}
	public void setAreaId(Integer areaId) {
		this.areaId = areaId;
	}
	public Long getRechargePhoneNumber() {
		return rechargePhoneNumber;
	}
	public void setRechargePhoneNumber(Long rechargePhoneNumber) {
		this.rechargePhoneNumber = rechargePhoneNumber;
	}
	public Integer getRechargeMoney() {
		return rechargeMoney;
	}
	public void setRechargeMoney(Integer rechargeMoney) {
		this.rechargeMoney = rechargeMoney;
	}
	public Integer getAddIntegral() {
		return addIntegral;
	}
	public void setAddIntegral(Integer addIntegral) {
		this.addIntegral = addIntegral;
	}
	public Date getRechargeTime() {
		return rechargeTime;
	}
	public void setRechargeTime(Date rechargeTime) {
		this.rechargeTime = rechargeTime;
	}
	
}
