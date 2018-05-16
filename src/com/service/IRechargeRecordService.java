package com.service;

import com.model.pojo.MobileCard;
import com.model.pojo.RechargeRecord;


/**
 * @author CHIN
 * @param 充值记录表
 */

public interface IRechargeRecordService {
	
	public void insertRecord(RechargeRecord rechargeRecord);
	public Integer findAllAddIntegeral(Long rechargePhoneNumber);
	public MobileCard findUserIdByPhoneNumber(Long rechargePhoneNumber);
}
