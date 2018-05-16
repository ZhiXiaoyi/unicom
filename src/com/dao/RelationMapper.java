package com.dao;


import com.model.pojo.Relation;
import com.utils.annotation.MyBatisRepository;



@MyBatisRepository
public interface RelationMapper {
	
	//删除管理权限关系
	public void delRelationByRoleId(Integer roleId);
	//增加管理的 权限关系
	public void addRelation(Relation relation);
	
	
}
