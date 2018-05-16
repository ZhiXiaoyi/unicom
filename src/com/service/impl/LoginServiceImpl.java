package com.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.AdminMapper;
import com.dao.MobileCardMapper;
import com.dao.RoleMapper;
import com.dao.UserMapper;
import com.model.pojo.Admin;
import com.model.pojo.MobileCard;
import com.model.pojo.Role;
import com.model.pojo.User;
import com.service.ILoginService;

@Service
@Transactional(readOnly = true)
// 事务
public class LoginServiceImpl implements ILoginService {

	@Resource
	private AdminMapper adminMapper;// 管理员Mapper

	@Resource
	private  UserMapper userMapper;// 用户Mapper

	@Resource
	private MobileCardMapper mobileCardMapper;// 电话卡Mapper
	
	@Resource
	private RoleMapper roleMapper;// 角色Mapper
	
	@Override
	public Admin findAdminByName(String adminName) {
		try {
			Admin admin = adminMapper.findAdminByName(adminName);
			Role role = roleMapper.findRoleById(admin.getRoleId());
			admin.setRole(role);
			return admin;
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}

	@Override
	public User findUserByEmail(String userEmail) {
		return userMapper.findUserByEmail(userEmail);
	}

	@Override
	public MobileCard findMobileCardByPhoneNumber(Long phoneNumber) {
		return mobileCardMapper.findMobileCardByPhoneNumber(phoneNumber);
	}
	
	@Override
	public User findUserByUserId(Integer userId) {
		return userMapper.findUserByUserId(userId);
	}
	
	@Override
	public MobileCard findMobileCardByUserId(Integer userId) {
		return mobileCardMapper.findMobileCardByUserId(userId);
	}

	public AdminMapper getAdminMapper() {
		return adminMapper;
	}

	public void setAdminMapper(AdminMapper adminMapper) {
		this.adminMapper = adminMapper;
	}

	public UserMapper getUserMapper() {
		return userMapper;
	}

	public void setUserMapper(UserMapper userMapper) {
		this.userMapper = userMapper;
	}



}
