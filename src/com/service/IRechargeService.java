package com.service;

import com.model.vo.PhoneNumberAndCostblance;


/**
 * 
 * 充值
 * @author lcz
 * 
 */

public interface IRechargeService {
	/**
	 * 通过电话号码查询出卡信息---余额
	 * @param phoneNumber
	 * 
	 * */
	public Integer selectCostBalance(Long phoneNumber);
	
	
	/**
	 * 
	 * 余额 = 手机的余额 + 充值的话费
	 *
	 * @param costBalance phoneNumber
	 * 
	 * */
	public void updateCostBalance(PhoneNumberAndCostblance phoneNumberAndCostblance);
}
