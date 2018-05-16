package com.service;

import com.model.pojo.MobileCard;


public interface IMobileCardService {

	//根据用户ID查找手机卡的信息
	public MobileCard findMobileCardByUserId(Integer userId);
	
	/**
	 * @author lcz
	 *
	 */
	//通过电话号码查询手机卡
	public MobileCard findMobileCardByPhoneNumber(Long phoneNumber);
	
}
