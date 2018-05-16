package com.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.StatisticsMapper;
import com.model.pojo.StatisticalCondition;
import com.service.IStatisticsService;

@Service
@Transactional(readOnly = true)
public class StatisticsServiceImpl implements IStatisticsService{
	
	@Resource
	private StatisticsMapper statisticsMapper;
	
	@Override
	public Integer getAreaId(String areaName) {
		return statisticsMapper.getAreaId(areaName);
	}
	@Override
	public List<String> getAreas() {
		return statisticsMapper.getAreas();
	}
	@Override
	public Double statisticsPrepaidcard(StatisticalCondition sc) {
		return statisticsMapper.statisticsPrepaidcard(sc);
	}	
	@Override
	public Double statisticsTrechargerecord(StatisticalCondition sc) {
		return statisticsMapper.statisticsTrechargerecord(sc);
	}
	@Override
	public Double statisticsOrders(StatisticalCondition sc) {
		// TODO Auto-generated method stub
		return statisticsMapper.statisticsOrders(sc);
	}
	
	
	
	public StatisticsMapper getSm() {
		return statisticsMapper;
	}
	public void setSm(StatisticsMapper sm) {
		this.statisticsMapper = sm;
	}

	public static void main(String[] args) {	
		StatisticsMapper statisticsMapper=new StatisticsServiceImpl().getSm();
		System.out.println(statisticsMapper);
		List<String> areas=statisticsMapper.getAreas();
		for (int i = 0; i < args.length; i++) {
			System.out.println(areas.get(i));
		}
	}



	
}
