package com.service.impl;



import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.CommodityMapper;
import com.dao.HarvestAddressInfoMapper;
import com.dao.MobileCardMapper;
import com.dao.OrderMapper;
import com.model.Page;
import com.model.pojo.Commodity;
import com.model.pojo.HarvestAddressInfo;
import com.model.pojo.MobileCard;
import com.model.pojo.Order;
import com.service.IOrderService;
import com.utils.SearchPageUtil;


@Service
@Transactional(readOnly = true)
//事务
public class OrderServiceImpl implements IOrderService {

	@Resource
	private OrderMapper orderMapper;
	
	@Resource
	private HarvestAddressInfoMapper harvestAddressInfoMapper;
	
	@Resource
	private MobileCardMapper mobileCardMapper;
	
	@Resource
	private CommodityMapper commodityMapper;
	
	@Override
	public int getCount(Order order) {
		return orderMapper.getCount(order);
	}

	@Override
	public List<Order> getList(Order order, Page page) {
		    SearchPageUtil searchPageUtil = new SearchPageUtil();   
	        searchPageUtil.setPage(page); 
	        searchPageUtil.setObject(order);  
	        final List<Order> list = orderMapper.getList(searchPageUtil);  
	        return list;  
	}

	@Override
	public void updateOrderState(Integer orderId, Integer type) {
		orderMapper.updateOrderState(orderId, type);
	}

	@Override
	public void addOrder(Order order,HarvestAddressInfo harvestAddressInfo,Commodity commodity) { 
		
		  harvestAddressInfoMapper.addHarvestAddressInfo(harvestAddressInfo); //插入收货信息
		  order.setHarvestAddressInfoId(harvestAddressInfo.getHarvestAddressInfoId());
		 
		  Date date = new Date();
		  DateFormat format=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		  String time=format.format(date);
		  order.setPaymentTime(time); 
		  order.setPlaceOrderTime(time);
		  orderMapper.addOrder(order); //插入订单
		  
		  //减去用户的积分
		  MobileCard mobileCard =  mobileCardMapper.findMobileCardByUserId(order.getUserId());
		  Integer remainingScore = mobileCard.getRemainingScore()-commodity.getCommodityIntegral();
		  mobileCardMapper.updateMobileCardRemainingScore(order.getUserId(), remainingScore);
		  
	}

	@Override
	public void updateRemainingScore(Integer userId, Integer commodityNumber) {
		//得到商品的积分
		Commodity commodity = commodityMapper.findCommodityById(commodityNumber);
		//得到用户原来的积分
		MobileCard mobileCard =  mobileCardMapper.findMobileCardByUserId(userId);
		//算出最终得分
		Integer remainingScore = mobileCard.getRemainingScore()+commodity.getCommodityIntegral();
		
		//修改数据
		mobileCardMapper.updateMobileCardRemainingScore(userId, remainingScore);	
	}

	@Override
	public void updateCommodityStock(Integer commodityNumber) {
		//得到商品的库存
		Commodity commodity = commodityMapper.findCommodityById(commodityNumber);
		//算出商品的最终库存
		Integer commodityStock = commodity.getCommodityStock()-1;
		//修改数据
		commodityMapper.updateCommodityStock(commodityNumber,commodityStock);
	}

	@Override
	public Order findOrderById(Integer orderId) {
		return orderMapper.findOrderById(orderId);
	}

	@Override
	public HarvestAddressInfo findInfoById(Integer harvestAddressInfoId) {	
		return harvestAddressInfoMapper.findById(harvestAddressInfoId);
	}

	

}
