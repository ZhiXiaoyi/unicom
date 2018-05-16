package com.service;

import java.util.List;

import com.model.Page;
import com.model.pojo.Admin;


public interface IAdminService {

	/**
	 * 添加管理员用户
	 */	
	public void addAdmin(Admin admin);
	/**
	 * 获得符合条件的数据总数
	 */	
	public int getCount(Admin admin);
	
	/**
	 * 根据ID查询管理员
	 */	
	public Admin findAdminById(Integer adminId);
	
	/**
	 * 分页查询获得数据集合
	 */	
	public List<Admin> getList(Admin admin,Page page);
	
	/**
	 * 更新修改管理员信息
	 */	
	public int updateAdmin(Admin admin);
	
	/**
	 * 删除管理员数据
	 */	
	public int delAdmin(Integer adminId);
	
	/**
	 * 根据用户名查询管理员信息是否存在
	 */	
	public boolean findAdminByName(String adminName);
	
	
}
