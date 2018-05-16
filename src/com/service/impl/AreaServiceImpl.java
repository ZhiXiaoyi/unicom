package com.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.dao.AreaMapper;
import com.model.pojo.Area;
import com.service.IAreaService;
@Service
public class AreaServiceImpl implements IAreaService {
	@Resource
	private AreaMapper areamapper;
	
	@Override
	public List<Area> selectAreaList(Area area) {
		// TODO Auto-generated method stub
		return areamapper.selectAreaList(area);
	}

	@Override
	public void updateArea(Area area) {
		// TODO Auto-generated method stub
	   areamapper.updateArea(area);
	}

	@Override
	public void insertArea(Area area) {
		// TODO Auto-generated method stub
		areamapper.insertArea(area);
	}
	
}
