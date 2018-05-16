package com.service;


import java.util.ArrayList;

import com.model.pojo.PrepaidCard;
import com.model.vo.PrepaidCardIdAndPsw;

/**
 * 修改充值卡信息
 * */

public interface IPrepaidCardService {
	/**
	 * 通过充值卡id查询充值卡
	 * @author lcz
	 * @return PrepaidCard
	 * */
	public PrepaidCard findPrepaidCardByPrepaidCardId(Integer PrepaidCardId);
	
	
	/**
	 * 通过充值卡id修改充值卡状态
	 * @author lcz
	 * */
	public void updatePrepaidCardStateByPrepaidCardId(PrepaidCardIdAndPsw prepaidCardIdAndPsw);
	
	/**
	 * 通过充值卡id修改充值卡销售时间
	 * @author lcz 
	 * */
	
	public void updateSallTimeByPrepaidCardId(Integer PrepaidCardId);
	
	
	/**
	 * 通过充值卡id修改充值的手机卡id
	 * @author lcz 
	 * */
	public void updateMobileCardIdByPrepaidCardId(PrepaidCardIdAndPsw prepaidCardIdAndPsw);
	
	/**
	 * 查询出未售的充值卡数量
	 * @author lcz 
	 * */
	public Integer selectUnsellPrepaidCardNumber();
	
	/**
	 * 查询出未售的充值卡的id和密码
	 * @author lcz 
	 * */
	public ArrayList<PrepaidCardIdAndPsw> selectUnsellPrepaidCard(Integer cardNumber);
	
}
