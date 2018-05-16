package com.dao;

import java.util.List;

import com.model.pojo.Area;
import com.utils.annotation.MyBatisRepository;

@MyBatisRepository
public interface AreaMapper {
	public List<Area> selectAreaList(Area area);  
	public void updateArea(Area area);
	public void insertArea(Area area);
}
