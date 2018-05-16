package com.service;

import java.util.List;

import com.model.pojo.Area;


public interface IAreaService {
	public List<Area> selectAreaList(Area area); //查询区域列表
	public void updateArea(Area area);    //修改区域名
	public void insertArea(Area area);   //插入新编辑的区域
	
}
