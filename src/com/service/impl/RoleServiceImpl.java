package com.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.RelationMapper;
import com.dao.RoleMapper;
import com.model.Page;
import com.model.pojo.Relation;
import com.model.pojo.Role;
import com.service.IRoleService;
import com.utils.SearchPageUtil;

@Service
@Transactional(readOnly = true)
public class RoleServiceImpl implements IRoleService {

	@Resource
	private RoleMapper roleMapper;// 角色mapper

	@Resource
	private RelationMapper relationMapper;// 关系mapper

	@Override
	public List<Role> findRoleAll() {
		return roleMapper.findRoleAll();
	}

	@Override
	public int getCount(Role role) {
		return roleMapper.getCount(role);
	}

	@Override
	public List<Role> getList(Role role, Page page) {
		SearchPageUtil searchPageUtil = new SearchPageUtil();
		searchPageUtil.setPage(page);
		searchPageUtil.setObject(role);
		final List<Role> list = roleMapper.getList(searchPageUtil);
		return list;
	}

	@Override
	public void addRole(Role role, Integer[] node) {
		roleMapper.addRole(role);
		if (node != null) {
			Role rl = roleMapper.findRoleByName(role.getRoleName());
			for (int i = 0; i < node.length; i++) {
				Relation relation = new Relation(null, node[i], rl.getRoleId());
				relationMapper.addRelation(relation);
			}
		}
	}

	@Override
	public Role findRoleById(Integer roleId) {
		return roleMapper.findRoleById(roleId);
	}

	@Override
	public void updataRole(Role role, Integer[] node) {
		roleMapper.updateRole(role);
		relationMapper.delRelationByRoleId(role.getRoleId());
		if (node != null) {
			for (int i = 0; i < node.length; i++) {
				Relation relation = new Relation(null, node[i], role.getRoleId());
				relationMapper.addRelation(relation);
			}
		}
	}

	@Override
	public boolean findRoleByName(String roleName) {
		Role role = roleMapper.findRoleByName(roleName);
		if(role==null){
			return true;
		}else{
			return false;
		}	
	}



}
