package com.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author CHIN
 *
 */

@Service
@Transactional(readOnly = true)
public interface ISearchScore {
	
	/**
	 * 根据电话得到用户使用的积分
	 * @param phoneNumber
	 * @return
	 */
	public Integer findUsedScoreByPhoneNumber(Long phoneNumber);
	
	public Integer findRemainingScore(Long rechargePhoneNumber);

	public Integer findCostbalance(Long rechargePhoneNumber);
}
