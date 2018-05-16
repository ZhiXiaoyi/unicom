package com.model.pojo;

import com.model.CommoditySearchCondition;

public class Commodity {

	
	 private Integer commodityNumber;//商品编号
	 private String commodityName;//商品名称
	 private Long  commodityPrice ;//商品价格
	 private Integer commodityIntegral ;//商品积分
	 private String commodityImgPath  ;//商品图片路径
	 private String  commodityInfo  ;//商品信息
	 private Integer commodityStock  ;//商品库存
	 private Integer   commodityType ;//商品类型
	 
	  
	 private CommoditySearchCondition searchCondition;//搜索帮助类
	 
	 
	 public Commodity(){}
	 
	 
	
	 public Commodity(Integer commodityNumber, String commodityName,
			Long commodityPrice, Integer commodityIntegral,
			String commodityImgPath, String commodityInfo,
			Integer commodityStock, Integer commodityType,CommoditySearchCondition searchCondition) {
		super();
		this.commodityNumber = commodityNumber;
		this.commodityName = commodityName;
		this.commodityPrice = commodityPrice;
		this.commodityIntegral = commodityIntegral;
		this.commodityImgPath = commodityImgPath;
		this.commodityInfo = commodityInfo;
		this.commodityStock = commodityStock;
		this.commodityType = commodityType;
		this.searchCondition = searchCondition;
	}



	public Integer getCommodityNumber() {
		return commodityNumber;
	}
	public void setCommodityNumber(Integer commodityNumber) {
		this.commodityNumber = commodityNumber;
	}
	
	public String getCommodityName() {
		return commodityName;
	}
	public void setCommodityName(String commodityName) {
		this.commodityName = commodityName;
	}
	public Long getCommodityPrice() {
		return commodityPrice;
	}
	public void setCommodityPrice(Long commodityPrice) {
		this.commodityPrice = commodityPrice;
	}
	public Integer getCommodityIntegral() {
		return commodityIntegral;
	}
	public void setCommodityIntegral(Integer commodityIntegral) {
		this.commodityIntegral = commodityIntegral;
	}
	public String getCommodityImgPath() {
		return commodityImgPath;
	}
	public void setCommodityImgPath(String commodityImgPath) {
		this.commodityImgPath = commodityImgPath;
	}
	public String getCommodityInfo() {
		return commodityInfo;
	}
	public void setCommodityInfo(String commodityInfo) {
		this.commodityInfo = commodityInfo;
	}
	public Integer getCommodityStock() {
		return commodityStock;
	}
	public void setCommodityStock(Integer commodityStock) {
		this.commodityStock = commodityStock;
	}
	public Integer getCommodityType() {
		return commodityType;
	}
	public void setCommodityType(Integer commodityType) {
		this.commodityType = commodityType;
	}

	public CommoditySearchCondition getSearchCondition() {
		return searchCondition;
	}

	public void setSearchCondition(CommoditySearchCondition searchCondition) {
		this.searchCondition = searchCondition;
	}
	
	
	
	
	
	
	
	
}
