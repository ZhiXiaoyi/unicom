package com.service;

import java.util.List;

import com.model.pojo.StatisticalCondition;

public interface StatisticsService {
	
	public Integer getAreaId(String areaName);//查询区ID
	public List<String> getAreas();//
	public Double statisticsPrepaidcard(StatisticalCondition sc); //电子卡统计
	public Double statisticsTrechargerecord(StatisticalCondition sc);//充值记录统计
	public Double statisticsOrders(StatisticalCondition sc);  //电话卡统计
}
