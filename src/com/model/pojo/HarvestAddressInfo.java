package com.model.pojo;

public class HarvestAddressInfo {
	
	
	private Integer harvestAddressInfoId;//收货信息编号ID
	private String harvestName;//收货人姓名
	private Long harvestPhoneNumber;//收货人手机号码
	private String harvestAddress;//收货地址
	private Integer postCode;//邮政编码
	
	
	public HarvestAddressInfo(){}


	public HarvestAddressInfo(Integer harvestAddressInfoId, String harvestName,
			Long harvestPhoneNumber, String harvestAddress, Integer postCode) {
		super();
		this.harvestAddressInfoId = harvestAddressInfoId;
		this.harvestName = harvestName;
		this.harvestPhoneNumber = harvestPhoneNumber;
		this.harvestAddress = harvestAddress;
		this.postCode = postCode;
	}


	public Integer getHarvestAddressInfoId() {
		return harvestAddressInfoId;
	}


	public void setHarvestAddressInfoId(Integer harvestAddressInfoId) {
		this.harvestAddressInfoId = harvestAddressInfoId;
	}


	public String getHarvestName() {
		return harvestName;
	}


	public void setHarvestName(String harvestName) {
		this.harvestName = harvestName;
	}


	public Long getHarvestPhoneNumber() {
		return harvestPhoneNumber;
	}


	public void setHarvestPhoneNumber(Long harvestPhoneNumber) {
		this.harvestPhoneNumber = harvestPhoneNumber;
	}


	public String getHarvestAddress() {
		return harvestAddress;
	}


	public void setHarvestAddress(String harvestAddress) {
		this.harvestAddress = harvestAddress;
	}


	public Integer getPostCode() {
		return postCode;
	}


	public void setPostCode(Integer postCode) {
		this.postCode = postCode;
	}
	
	
}
