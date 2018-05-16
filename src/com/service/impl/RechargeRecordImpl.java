package com.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.MobileCardMapper;
import com.dao.RechargeRecordMapper;
import com.model.pojo.MobileCard;
import com.model.pojo.RechargeRecord;
import com.service.IRechargeRecordService;

/**
 * @author CHIN
 *	
 */
@Service
@Transactional(readOnly = true)
public class RechargeRecordImpl implements IRechargeRecordService{
	@Resource
	private RechargeRecordMapper rechargeRecordMapper;
	@Resource
	private MobileCardMapper mobileCardMapper;
	
	@Override
	public void insertRecord(RechargeRecord rechargeRecord) {
		rechargeRecordMapper.insertRecord(rechargeRecord);
		
	}
	
	@Override
	public Integer findAllAddIntegeral(Long rechargePhoneNumber) {
		return rechargeRecordMapper.findAllAddIntegral(rechargePhoneNumber);
	}
	
	@Override
	public MobileCard findUserIdByPhoneNumber(Long rechargePhoneNumber) {
		return mobileCardMapper.findMobileCardByPhoneNumber(rechargePhoneNumber);
		
		
	}

	public RechargeRecordMapper getRechargeRecordMapper() {
		return rechargeRecordMapper;
	}
	public void setRechargeRecordMapper(RechargeRecordMapper rechargeRecordMapper) {
		this.rechargeRecordMapper = rechargeRecordMapper;
	}
	public MobileCardMapper getMobileCardMapper() {
		return mobileCardMapper;
	}
	public void setMobileCardMapper(MobileCardMapper mobileCardMapper) {
		this.mobileCardMapper = mobileCardMapper;
	}



	



	

}
