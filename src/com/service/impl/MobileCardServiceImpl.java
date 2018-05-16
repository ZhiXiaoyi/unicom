package com.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.MobileCardMapper;
import com.model.pojo.MobileCard;
import com.service.IMobileCardService;


@Service
@Transactional(readOnly = true)
//事务
public class MobileCardServiceImpl implements IMobileCardService{

	
	@Resource
	private MobileCardMapper mobileCardMapper;
	
	

	@Override
	public MobileCard findMobileCardByUserId(Integer userId) {
		return mobileCardMapper.findMobileCardByUserId(userId);
	}

	
	/**
	 * @author lcz
	 * 查询手机是否存在，再查询余额
	 */
	@Override
	public MobileCard findMobileCardByPhoneNumber(Long phoneNumber) {
		return mobileCardMapper.findMobileCardByPhoneNumber(phoneNumber);
	}




	public MobileCardMapper getMobileCardMapper() {
		return mobileCardMapper;
	}




	public void setMobileCardMapper(MobileCardMapper mobileCardMapper) {
		this.mobileCardMapper = mobileCardMapper;
	}
	
	

}
