
package com.dao;

import org.apache.ibatis.annotations.Param;
import com.model.pojo.MobileCard;
import com.utils.annotation.MyBatisRepository;


@MyBatisRepository
public interface MobileCardMapper {
	
	/**
	 * 通过用户电话号码找到电话卡对象
	 * 
	 */
	public MobileCard findMobileCardByPhoneNumber(Long phoneNumber);
	
	/**
	 * 增加已销售电话卡
	 * 
	 */
	public int addMobileCard(MobileCard newsaledcard);
	

	/**
	 * 查询当前的积分
	 * @author lcz
	 *	@return ramainingScore
	 */
	public Integer findNowRemainingScore(Long phoneNumber);

	/**
	 * 通过用户ID找到电话卡对象
	 * 
	 * @param userId
	 * @return
	 */
	
	public MobileCard findMobileCardByUserId(Integer userId);
	
	/**
	 * 通过电话号码 和 用户身份证找到 MobileCard
	 * @param phoneNumber
	 * @param idCard
	 * @return
	 */
	public MobileCard findMobileCardByPhoneNumberAndIdCard(@Param("phoneNumber")Long phoneNumber,
							@Param("idCard")String idCard);
	
	/**
	 * 给电话卡更新用户Id
	 * @param mobileCard
	 * @return
	 */
	public boolean updateMobileCardUserId(@Param("userId")Integer userId,@Param("phoneNumber")Long phoneNumber);
	
	/**
	 * 通过用户ID修改手机卡的积分
	 * 
	 * @param userId remainingScore
	 * @return
	 */
	
	public int updateMobileCardRemainingScore(@Param("userId")Integer userId,@Param("remainingScore")Integer remainingScore);
	

}

