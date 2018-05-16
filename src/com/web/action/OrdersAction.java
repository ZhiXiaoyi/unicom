package com.web.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.model.Page;
import com.model.pojo.HarvestAddressInfo;
import com.model.pojo.Order;
import com.service.IOrderService;

@SuppressWarnings("serial")
@Controller
public class OrdersAction extends BaseAction {

	private Order order;// 订单
	private Integer orderId;// 订单ID
	private Integer userId;//用户ID
	private Integer harvestAddressInfoId;//收货信息ID
	private HarvestAddressInfo harvestAddressInfo;//收货信息对象
	private Integer commodityNumber;//商品编号
	private Integer type;// 操作类型
	private Page page;// 分页类
	private Integer pageIndex;// 当前页
	private Integer pageSize = 10;// 每页大小

	private List<Order> orderList;
	
	
	private Map<String, Object> map = new HashMap<String, Object>();//json对象

	@Resource
	private IOrderService orderService;

	// 跳转审核商品订单信息//分页查询
	public String toOrderPage() {
		try {
			if (pageIndex == null) {
				pageIndex = 1;
			}		
			page = new Page(pageIndex, pageSize, orderService.getCount(order));
			orderList = orderService.getList(order, page);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}

	//修改订单状态
	public String editOrder(){
		
		try {
			orderService.updateOrderState(orderId, type);
			//如果积分商品审核没有通过，返回该商品的积分给原来用户
			if(type==2){
				orderService.updateRemainingScore(userId,commodityNumber);
			}//审核通过后，库存减少
			else if(type==1){
				orderService.updateCommodityStock(commodityNumber);	
			}
		} catch (Exception e) {

		}
		return SUCCESS;
	}
	
	//根据ID查询收货信息
	public String detailInfo(){
		harvestAddressInfo = orderService.findInfoById(harvestAddressInfoId);
		map.put("harvestAddressInfo", harvestAddressInfo);
		return SUCCESS;
	}
	
	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public Page getPage() {
		return page;
	}

	public void setPage(Page page) {
		this.page = page;
	}

	public Integer getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(Integer pageIndex) {
		this.pageIndex = pageIndex;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	public List<Order> getOrderList() {
		return orderList;
	}

	public void setOrderList(List<Order> orderList) {
		this.orderList = orderList;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
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

	public HarvestAddressInfo getHarvestAddressInfo() {
		return harvestAddressInfo;
	}

	public void setHarvestAddressInfo(HarvestAddressInfo harvestAddressInfo) {
		this.harvestAddressInfo = harvestAddressInfo;
	}

	public Map<String, Object> getMap() {
		return map;
	}

	public void setMap(Map<String, Object> map) {
		this.map = map;
	}

	
}
