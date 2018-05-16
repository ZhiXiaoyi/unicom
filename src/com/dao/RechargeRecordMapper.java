package com.dao;

import com.model.pojo.RechargeRecord;
import com.utils.annotation.MyBatisRepository;

/**
 * @author lcz
 *	
 */
@MyBatisRepository
public interface RechargeRecordMapper {
	//每次充值都需插入记录表中
	public void insertRecord(RechargeRecord rechargeRecord);
	//查询出所有的积分
	public Integer findAllAddIntegral(Long rechargePhoneNumber);
	
}
