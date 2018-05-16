package com.service;

import com.model.pojo.Admin;
import com.model.pojo.MobileCard;
import com.model.pojo.User;

/**
 * 
 * 登录
 * 
 * @author CHIN
 *
 */
public interface ILoginService {

	/**
	 * 通过管理员姓名找到管理员对象
	 * 
	 * @param adminName
	 * @return
	 */
	public Admin findAdminByName(String adminName);

	/**
	 * 通过用户邮箱找到用户对象
	 * 
	 * @param userEmail
	 * @return
	 */
	public User findUserByEmail(String userEmail);

	/**
	 * 通过用户电话号码找到电话卡对象
	 * 
	 * @param phoneNumber
	 * @return
	 */
	public MobileCard findMobileCardByPhoneNumber(Long phoneNumber);
	
	/**
	 * 通过用户Id找到用户对象
	 * 
	 * @param userId
	 * @return
	 */
	public User findUserByUserId(Integer userId);
	
	/**
	 * 通过用户id找到电话卡对象
	 * @param userId
	 * @return
	 */
	public MobileCard findMobileCardByUserId(Integer userId);
}
