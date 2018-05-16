package com.model.vo;

public class PhoneNumberAndCostblance {
	//修改充值后的余额
	private Long phoneNumber;//电话号码
	private Integer costBalance;//余额
	
	public Long getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public Integer getCostBalance() {
		return costBalance;
	}
	public void setCostBalance(Integer costBalance) {
		this.costBalance = costBalance;
	}
	public PhoneNumberAndCostblance(Long phoneNumber, Integer costBalance) {
		super();
		this.phoneNumber = phoneNumber;
		this.costBalance = costBalance;
	}
	public PhoneNumberAndCostblance() {
		super();
	}
	
	
}
