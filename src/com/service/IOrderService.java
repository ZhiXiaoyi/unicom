package com.service;

import java.util.List;

import com.model.Page;
import com.model.pojo.Commodity;
import com.model.pojo.HarvestAddressInfo;
import com.model.pojo.Order;

public interface IOrderService {

	
	public int getCount(Order order);
	
	public List<Order> getList(Order order,Page page);
	
	public void updateOrderState(Integer orderId,Integer type);
	
	public void addOrder(Order order,HarvestAddressInfo harvestAddressInfo,Commodity commodity);
	
	public void updateRemainingScore(Integer userId,Integer commodityNumber);
	
	public void updateCommodityStock(Integer commodityNumber);
	
	public Order findOrderById(Integer orderId);
	
	public HarvestAddressInfo findInfoById(Integer  harvestAddressInfoId);
}
