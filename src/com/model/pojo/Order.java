package com.model.pojo;


public class Order {
	
	private Integer orderId;//订单编号
	private Integer commodityNumber;//商品编号
	private Integer harvestAddressInfoId;//收货信息ID
	private Integer userId;//用户ID
	private Double orderMoney;//订单金额
	private String placeOrderTime;//下单时间
	private String cancerOrderTime;//取消时间
	private String paymentTime;//支付时间
	private String orderState;//订单状态
	private String paymentMode;//支付方式
	private String shippingMode;//配送方式
	private String whetherInvoice;//是否要发票
	
	
	
	private User user;
	
	private Commodity commodity;
	
	private HarvestAddressInfo harvestAddressInfo;
	
	
	public Order(){}


	


	public Order(Integer orderId, Integer commodityNumber,
			Integer harvestAddressInfoId, Integer userId, Double orderMoney,
			String placeOrderTime, String cancerOrderTime, String paymentTime,
			String orderState, String paymentMode, String shippingMode,
			String whetherInvoice, User user, Commodity commodity,
			HarvestAddressInfo harvestAddressInfo) {
		super();
		this.orderId = orderId;
		this.commodityNumber = commodityNumber;
		this.harvestAddressInfoId = harvestAddressInfoId;
		this.userId = userId;
		this.orderMoney = orderMoney;
		this.placeOrderTime = placeOrderTime;
		this.cancerOrderTime = cancerOrderTime;
		this.paymentTime = paymentTime;
		this.orderState = orderState;
		this.paymentMode = paymentMode;
		this.shippingMode = shippingMode;
		this.whetherInvoice = whetherInvoice;
		this.user = user;
		this.commodity = commodity;
		this.harvestAddressInfo = harvestAddressInfo;
	}





	public Integer getOrderId() {
		return orderId;
	}


	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}


	public Integer getCommodityNumber() {
		return commodityNumber;
	}


	public void setCommodityNumber(Integer commodityNumber) {
		this.commodityNumber = commodityNumber;
	}


	public Integer getHarvestAddressInfoId() {
		return harvestAddressInfoId;
	}


	public void setHarvestAddressInfoId(Integer harvestAddressInfoId) {
		this.harvestAddressInfoId = harvestAddressInfoId;
	}


	public Integer getUserId() {
		return userId;
	}


	public void setUserId(Integer userId) {
		this.userId = userId;
	}


	public Double getOrderMoney() {
		return orderMoney;
	}


	public void setOrderMoney(Double orderMoney) {
		this.orderMoney = orderMoney;
	}


	


	public String getPlaceOrderTime() {
		return placeOrderTime;
	}





	public void setPlaceOrderTime(String placeOrderTime) {
		this.placeOrderTime = placeOrderTime;
	}





	public String getCancerOrderTime() {
		return cancerOrderTime;
	}





	public void setCancerOrderTime(String cancerOrderTime) {
		this.cancerOrderTime = cancerOrderTime;
	}





	public String getPaymentTime() {
		return paymentTime;
	}





	public void setPaymentTime(String paymentTime) {
		this.paymentTime = paymentTime;
	}





	public String getOrderState() {
		return orderState;
	}


	public void setOrderState(String orderState) {
		this.orderState = orderState;
	}


	public String getPaymentMode() {
		return paymentMode;
	}


	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}


	public String getShippingMode() {
		return shippingMode;
	}


	public void setShippingMode(String shippingMode) {
		this.shippingMode = shippingMode;
	}


	public String getWhetherInvoice() {
		return whetherInvoice;
	}


	public void setWhetherInvoice(String whetherInvoice) {
		this.whetherInvoice = whetherInvoice;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Commodity getCommodity() {
		return commodity;
	}


	public void setCommodity(Commodity commodity) {
		this.commodity = commodity;
	}


	public HarvestAddressInfo getHarvestAddressInfo() {
		return harvestAddressInfo;
	}


	public void setHarvestAddressInfo(HarvestAddressInfo harvestAddressInfo) {
		this.harvestAddressInfo = harvestAddressInfo;
	}


	
	

}