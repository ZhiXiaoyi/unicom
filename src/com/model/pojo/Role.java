package com.model.pojo;

import java.util.List;

/**
 * 
 * 角色对象类
 * @author LeeP1994
 *
 */
public class Role {

	private Integer roleId;//角色ID
	private String roleName;//角色名称
	
	
	private List<Relation> relationList;//角色权限集合
	
	public Role(){}

	public Role(Integer roleId, String roleName, 
			List<Relation> relationList) {
		super();
		this.roleId = roleId;
		this.roleName = roleName;
		this.relationList = relationList;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public List<Relation> getRelationList() {
		return relationList;
	}

	public void setRelationList(List<Relation> relationList) {
		this.relationList = relationList;
	}
	
	
	
}
