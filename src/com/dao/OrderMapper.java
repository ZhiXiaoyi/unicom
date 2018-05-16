package com.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.model.pojo.Order;
import com.utils.SearchPageUtil;
import com.utils.annotation.MyBatisRepository;


@MyBatisRepository
public interface OrderMapper {
    //获取查询数据总数
	public int getCount(Order order);
	//分页查询数据集合
	public List<Order> getList(SearchPageUtil searchPageUtil);
	//改变订单的状态
	public void updateOrderState(@Param("orderId")Integer orderId,@Param("type")Integer type);
	//添加订单
	public void addOrder(Order order);
	//根据ID查询订单
	public Order findOrderById(Integer orderId);
}
