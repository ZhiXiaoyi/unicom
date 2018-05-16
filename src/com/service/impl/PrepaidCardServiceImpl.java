package com.service.impl;

import java.util.ArrayList;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.PrepaidCardMapper;
import com.model.pojo.PrepaidCard;
import com.model.vo.PrepaidCardIdAndPsw;
import com.service.IPrepaidCardService;


/**
 * @author lcz
 *
 */

@Service
@Transactional(readOnly = true)
public class PrepaidCardServiceImpl implements IPrepaidCardService {
	
	@Resource
	private PrepaidCardMapper prepaidCardMapper;
	/**
	 * @author lcz
	 *@param 通过充值卡id查询充值卡
	 */
	@Override
	public PrepaidCard findPrepaidCardByPrepaidCardId(Integer PrepaidCardId) {
		return prepaidCardMapper.findPrepaidCardByPrepaidCardId(PrepaidCardId);
	}
	/**
	 * @author lcz
	 *@param 通过充值卡id查询修改状态
	 */
	@Override
	public void updatePrepaidCardStateByPrepaidCardId(
			PrepaidCardIdAndPsw prepaidCardIdAndPsw) {
		prepaidCardMapper.updatePrepaidCardStateByPrepaidCardId(prepaidCardIdAndPsw);
		
	}
	/**
	 * @author lcz
	 *@param 通过充值卡id修改充值卡使用时间
	 */
	@Override
	public void updateSallTimeByPrepaidCardId(Integer PrepaidCardId) {
		prepaidCardMapper.updateSallTimeByPrepaidCardId(PrepaidCardId);
		
	}
	/**
	 * @author lcz
	 *@param 通过充值卡id修改充值的手机
	 */
	@Override
	public void updateMobileCardIdByPrepaidCardId(
			PrepaidCardIdAndPsw prepaidCardIdAndPsw) {
		prepaidCardMapper.updateMobileCardIdByPrepaidCardId(prepaidCardIdAndPsw);
		
	}
	/**
	 * @author lcz
	 *@param 通过购卡张数查询出购卡的账号和密码的集合
	 */
	@Override
	public ArrayList<PrepaidCardIdAndPsw> selectUnsellPrepaidCard(
			Integer cardNumber) {
		return  prepaidCardMapper.selectUnsellPrepaidCard(cardNumber);
	}
	
	/**
	 * @author lcz
	 *@param 查询未出售的充值卡数量
	 */
	
	@Override
	public Integer selectUnsellPrepaidCardNumber() {
		return prepaidCardMapper.selectUnsellPrepaidCardNumber();
	}

	public PrepaidCardMapper getPrepaidCardMapper() {
		return prepaidCardMapper;
	}

	public void setPrepaidCardMapper(PrepaidCardMapper prepaidCardMapper) {
		this.prepaidCardMapper = prepaidCardMapper;
	}
	
	

}
