package com.model.pojo;

/**
 * 手机卡
 * 
 * @author CHIN
 *
 */
public class MobileCard {

	private Integer mobileCardId;// 手机卡id
	private Integer userId;// 用户id
	private Integer packageId;// 套餐id
	private Long phoneNumber;// 手机号码
	private Integer servicePwd;// servicePwd
	private Integer costBalance;// 话费余额
	private Integer remainingScore;// 积分余额
	private String realName;// 姓名
	private String idCard;// 身份证号
	private String attribution;// 归属地
	private Integer numberPrice;// 号码价格
	private Integer applicationState;// 业务状态

	public MobileCard() {
	}

	public MobileCard(Integer mobileCardId, Integer userId, Integer packageId,
			Long phoneNumber, Integer servicePwd, Integer costBalance,
			Integer remainingScore, String realName, String idCard,
			String attribution, Integer numberPrice, Integer applicationState) {
		super();
		this.mobileCardId = mobileCardId;
		this.userId = userId;
		this.packageId = packageId;
		this.phoneNumber = phoneNumber;
		this.servicePwd = servicePwd;
		this.costBalance = costBalance;
		this.remainingScore = remainingScore;
		this.realName = realName;
		this.idCard = idCard;
		this.attribution = attribution;
		this.numberPrice = numberPrice;
		this.applicationState = applicationState;
	}

	public Integer getMobileCardId() {
		return mobileCardId;
	}

	public void setMobileCardId(Integer mobileCardId) {
		this.mobileCardId = mobileCardId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getPackageId() {
		return packageId;
	}

	public void setPackageId(Integer packageId) {
		this.packageId = packageId;
	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public Integer getServicePwd() {
		return servicePwd;
	}

	public void setServicePwd(Integer servicePwd) {
		this.servicePwd = servicePwd;
	}

	public Integer getCostBalance() {
		return costBalance;
	}

	public void setCostBalance(Integer costBalance) {
		this.costBalance = costBalance;
	}

	public Integer getRemainingScore() {
		return remainingScore;
	}

	public void setRemainingScore(Integer remainingScore) {
		this.remainingScore = remainingScore;
	}

	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public String getIdCard() {
		return idCard;
	}

	public void setIdCard(String idCard) {
		this.idCard = idCard;
	}

	public String getAttribution() {
		return attribution;
	}

	public void setAttribution(String attribution) {
		this.attribution = attribution;
	}

	public Integer getNumberPrice() {
		return numberPrice;
	}

	public void setNumberPrice(Integer numberPrice) {
		this.numberPrice = numberPrice;
	}

	public Integer getApplicationState() {
		return applicationState;
	}

	public void setApplicationState(Integer applicationState) {
		this.applicationState = applicationState;
	}

}
