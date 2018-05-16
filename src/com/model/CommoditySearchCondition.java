package com.model;

/**
 * 商品积分搜索帮助类
 * @author LeeP1994
 *
 */
public class CommoditySearchCondition {

	
	public Integer from;//最小积分
	public Integer to;//最大积分
	
	public CommoditySearchCondition(){}

	
	
	public CommoditySearchCondition(Integer from, Integer to) {
		super();
		this.from = from;
		this.to = to;
	}



	public Integer getFrom() {
		return from;
	}

	public void setFrom(Integer from) {
		this.from = from;
	}

	public Integer getTo() {
		return to;
	}

	public void setTo(Integer to) {
		this.to = to;
	}
	
	
}
