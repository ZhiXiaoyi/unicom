package com.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.CapitalFlowMapper;
import com.dao.MobileCardMapper;
import com.model.pojo.MobileCard;
import com.service.ISearchScore;

/**
 * 查询电话卡表当前的积分
 * 
 * @author CHIN
 *
 */
@Service
@Transactional(readOnly = true)
public class SearchScoreImpl implements ISearchScore {

	@Resource
	private MobileCardMapper mobileCardMapper;

	@Resource
	private CapitalFlowMapper capitalFlowMapper;

	@Override
	public Integer findRemainingScore(Long rechargePhoneNumber) {
		return mobileCardMapper.findNowRemainingScore(rechargePhoneNumber);

	}

	@Override
	public Integer findCostbalance(Long phoneNumber) {
		return mobileCardMapper.findMobileCardByPhoneNumber(phoneNumber)
				.getCostBalance();
	}

	@Override
	public Integer findUsedScoreByPhoneNumber(Long phoneNumber) {
		Integer usedScore = 0;
		MobileCard mobileCard = mobileCardMapper.findMobileCardByPhoneNumber(phoneNumber);
		Integer userId = mobileCard.getUserId();
		Logger.getLogger(this.getClass()).info(userId);
		List<Integer> scoreList = capitalFlowMapper.findUsedScoreByUserId(userId);
		for (Integer score : scoreList) {
			if (score < 0) {
				usedScore = score + usedScore;
			}
		}
		return usedScore;
	}

}
