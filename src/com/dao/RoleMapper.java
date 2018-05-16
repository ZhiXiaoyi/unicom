package com.dao;

import java.util.List;

import com.model.pojo.Role;
import com.utils.SearchPageUtil;
import com.utils.annotation.MyBatisRepository;



@MyBatisRepository
public interface RoleMapper {

	
	//插入角色
	public void addRole(Role role);
	//根据角色名查角色
	public Role findRoleByName(String roleName);
	//根据角色ID查找角色
	public Role findRoleById(Integer roleId);
	 //查询所有的角色信息集合
	public List<Role> findRoleAll();
	//查询数据总数
	public int getCount(Role role);
	//分页查询
	public List<Role> getList(SearchPageUtil searchPageUtil);
	//修改角色信息
	public void updateRole(Role role);
	
}
