package com.dao;


import java.util.List;

import com.model.pojo.Admin;
import com.utils.SearchPageUtil;
import com.utils.annotation.MyBatisRepository;

@MyBatisRepository
public interface AdminMapper {

	//根据管理员名去查询管理员对象
	public Admin findAdminByName(String adminName);
	
	//插入一个管理员对象到数据表中
	public void addAdmin(Admin admin);
	
	//查询信息总数
	public int getCount(Admin admin);
	
	//根据用户ID查询
	public Admin findAdminById(Integer adminId);
	
	//根据条件获取      
	public List<Admin> getList(SearchPageUtil searchPageUtil);
	
	//修改用户信息
	public int updateAdmin(Admin admin);
	
	//删除用户数据信息
	public int delAdmin(Integer adminId);
}
