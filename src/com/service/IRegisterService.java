package com.service;

import com.model.pojo.User;

public interface IRegisterService {
	
	/**
	 * 插入用户对象
	 * @param user
	 * @return
	 */
	public boolean addUser(User user);
	
	/**
	 * 通过用户邮箱找到用户对象
	 * 
	 * @param userEmail
	 * @return
	 */
	public User findUserByEmail(String userEmail);
	
	/**
	 * 修改用户和电话信息
	 * @param user
	 * @return
	 */
	public boolean updateUserAndMobileCardUserId(User user,Long phoneNumber);
	
	/**
	 * 修改用户信息
	 * @param user
	 * @return
	 */
	public boolean updateUser(User user);
	


}
