package com.service;

import java.util.List;

import com.model.Page;
import com.model.pojo.Commodity;

public interface ICommodityService {

	//添加上传商品信息
	public void addCommodity(Commodity commodity);
	
	//符合条件的数据有多少
	public int getCount(Commodity commodity);
	
	//分页获取对象集合
	public List<Commodity> getList(Commodity commodity,Page page);
	
	//删除商品数据
	public void delCommodity(Integer commodityNumber);
	
	//根据商品编号查询数据
	public Commodity findCommodityById(Integer commodityNumber);
	
	//修改商品的信息
	public void updateCommodity(Commodity commodity);
	
	
}
