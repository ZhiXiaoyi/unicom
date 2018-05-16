package com.service;

import java.util.List;

import com.model.Page;
import com.model.pojo.Role;

public interface IRoleService {

	
	public List<Role> findRoleAll();
	
	
	public int getCount(Role role);
	
	
	public List<Role> getList(Role role,Page page);
	
	
	public void addRole(Role role,Integer[] node);
	
	public Role findRoleById(Integer roleId);
	
	
	public void updataRole(Role role,Integer[] node);
	
	public boolean findRoleByName(String roleName);
	

}
