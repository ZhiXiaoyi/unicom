package com.dao;

import com.model.vo.PhoneNumberAndCostblance;
import com.utils.annotation.MyBatisRepository;

@MyBatisRepository
public interface RechargeMapper {
	
	public Integer selectCostBalance(Long phoneNumber);
	public void updateCostBalance(PhoneNumberAndCostblance phoneNumberAndCostblance);
}
