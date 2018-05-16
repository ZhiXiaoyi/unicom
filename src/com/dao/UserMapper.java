package com.dao;

import com.model.pojo.User;
import com.utils.annotation.MyBatisRepository;

@MyBatisRepository
public interface UserMapper {
	
	
	/**
	 * 通过用户邮箱找到用户对象
	 * 
	 * @param userEmail
	 * @return
	 */
	public User findUserByEmail(String userEmail);
	
	/**
	 * 通过用户Id找到用户对象
	 * 
	 * @param userId
	 * @return
	 */
	public User findUserByUserId(Integer userId);
	
	/**
	 * 添加用户
	 * @param user
	 * @return
	 */
	public void addUser(User user);

	/**
	 * 修改用户信息
	 * @param user
	 */
	public void updateUser(User user);

}
