package com.dao;


import java.util.ArrayList;

import com.model.pojo.PrepaidCard;
import com.model.vo.PrepaidCardIdAndPsw;
import com.utils.annotation.MyBatisRepository;

@MyBatisRepository
public interface PrepaidCardMapper {
	/**
	 * 通过充值卡id查询充值卡
	 * */
	public PrepaidCard findPrepaidCardByPrepaidCardId(Integer PrepaidCardId);
	
	/**
	 * 通过充值卡id修改充值卡状态
	 * */
	public void updatePrepaidCardStateByPrepaidCardId(PrepaidCardIdAndPsw prepaidCardIdAndPsw);
	
	/**
	 * 通过充值卡id修改充值卡销售时间
	 * */
	
	public void updateSallTimeByPrepaidCardId(Integer PrepaidCardId);
	
	
	/**
	 * 通过充值卡id修改充值的手机卡id
	 * */
	public void updateMobileCardIdByPrepaidCardId(PrepaidCardIdAndPsw prepaidCardIdAndPsw);
	
	/**
	 * 查询出未售的充值卡张数
	 * */
	public Integer selectUnsellPrepaidCardNumber();
	/**
	 * 查询出未售的充值卡的id和密码
	 * */
	public ArrayList<PrepaidCardIdAndPsw> selectUnsellPrepaidCard(Integer cardNumber);
}
