package com.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.CommodityMapper;
import com.model.Page;
import com.model.pojo.Commodity;
import com.service.ICommodityService;
import com.utils.SearchPageUtil;


@Service
@Transactional(readOnly = true)
//事务
public class CommodityServiceImpl implements ICommodityService {

	@Resource
	private CommodityMapper commodityMapper;
	
	
	@Override
	public void addCommodity(Commodity commodity) {
		commodityMapper.addCommodity(commodity);	
	}


	@Override
	public int getCount(Commodity commodity) {
		return commodityMapper.getCount(commodity);
	}


	@Override
	public List<Commodity> getList(Commodity commodity, Page page) {
		SearchPageUtil searchPageUtil = new SearchPageUtil();   
        searchPageUtil.setPage(page); 
        searchPageUtil.setObject(commodity);  
        final List<Commodity> list = commodityMapper.getList(searchPageUtil);  
        return list;  
	}


	@Override
	public void delCommodity(Integer commodityNumber) {
		commodityMapper.delCommodity(commodityNumber);
		
	}


	@Override
	public Commodity findCommodityById(Integer commodityNumber) {	
		return commodityMapper.findCommodityById(commodityNumber);
	}


	@Override
	public void updateCommodity(Commodity commodity) {
		commodityMapper.updateCommodity(commodity);
		
	}

}
