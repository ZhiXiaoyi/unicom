package com.dao;

import com.model.pojo.HarvestAddressInfo;
import com.utils.annotation.MyBatisRepository;

/**
 * @author LeeP1994
 *
 */
@MyBatisRepository
public interface HarvestAddressInfoMapper {

	/**
	 * 添加收货信息到数据库中
	 */
	public int addHarvestAddressInfo(HarvestAddressInfo harvestAddressInfo);
	
	/**
	 * 根据ID查询收货信息
	 */
	public HarvestAddressInfo findById(Integer harvestAddressInfoId);
}
