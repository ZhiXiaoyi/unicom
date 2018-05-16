package com.model.pojo;
/*
 * 统计结果
 * */
public class StatisticalResult {
	private Double rechargeRecord;
	private Double prepaidcard;
	private Double orders;
	
	public StatisticalResult(){}

	public StatisticalResult(Double rechargeRecord, Double prepaidcard,
			Double orders) {
		super();
		this.rechargeRecord = rechargeRecord;
		this.prepaidcard = prepaidcard;
		this.orders = orders;
	}

	public Double getRechargeRecord() {
		return rechargeRecord;
	}

	public void setRechargeRecord(Double rechargeRecord) {
		this.rechargeRecord = rechargeRecord;
	}

	public Double getPrepaidcard() {
		return prepaidcard;
	}

	public void setPrepaidcard(Double prepaidcard) {
		this.prepaidcard = prepaidcard;
	}

	public Double getOrders() {
		return orders;
	}

	public void setOrders(Double orders) {
		this.orders = orders;
	}
	
	
}
