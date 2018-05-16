package com.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.RechargeMapper;
import com.model.vo.PhoneNumberAndCostblance;
import com.service.IRechargeService;

/**
 * @author lcz
 *
 */

@Service
@Transactional(readOnly = true)
public class RechargeServiceImpl implements IRechargeService{
	/**
	 * @author lcz
	 * @param 新建一个查询的dao
	 */
	@Resource
	private RechargeMapper rechargeMapper; //充值的mapper
	
	/**
	 * @author lcz
	 * @param 通过手机号码差余额
	 */
	@Override
	public Integer selectCostBalance(Long phoneNumber) {
		return rechargeMapper.selectCostBalance(phoneNumber);
	}
	/**
	 * @author lcz
	 * @param 修改充充值后的余额 costBalance（余额+充值金额） phoneNumber（电话号码）
	 */
//	@Transactional(readOnly=false,propagation =Propagation.REQUIRES_NEW)
	public void updateCostBalance(PhoneNumberAndCostblance phoneNumberAndCostblance) {
		rechargeMapper.updateCostBalance(phoneNumberAndCostblance);

	}

	public RechargeMapper getRechargeMapper() {
		return rechargeMapper;
	}

	public void setRechargeMapper(RechargeMapper rechargeMapper) {
		this.rechargeMapper = rechargeMapper;
	}
	
	

}
