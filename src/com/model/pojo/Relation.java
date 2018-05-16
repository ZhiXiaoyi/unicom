package com.model.pojo;

/**
 * 
 * 角色权限关系类
 * @author LeeP1994
 *
 */
public class Relation {

	private Integer relationId;//角色权限关系ID
	private Integer jurisdictionId;//权限ID
	private Integer roleId;//角色ID
	
	public Relation(){}

	public Relation(Integer relationId, Integer jurisdictionId, Integer roleId) {
		super();
		this.relationId = relationId;
		this.jurisdictionId = jurisdictionId;
		this.roleId = roleId;
	}

	public Integer getRelationId() {
		return relationId;
	}

	public void setRelationId(Integer relationId) {
		this.relationId = relationId;
	}

	public Integer getJurisdictionId() {
		return jurisdictionId;
	}

	public void setJurisdictionId(Integer jurisdictionId) {
		this.jurisdictionId = jurisdictionId;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}
	
	
	
	
}
