package com.dao;

import java.util.List;






import org.apache.ibatis.annotations.Param;

import com.model.pojo.Commodity;
import com.utils.SearchPageUtil;
import com.utils.annotation.MyBatisRepository;


@MyBatisRepository
public interface CommodityMapper {

	//通过条件查找商品, 
	public List<Commodity> selectonecommodity();
	//添加商品
	public void addCommodity(Commodity commodity);
	//查询符合条件的数据数
	public int getCount(Commodity commodity);
	//符合条件的分页查询
	public List<Commodity> getList(SearchPageUtil searchPageUtil);
	//删除商品信息
	public void delCommodity(Integer commodityNumber);
	//根据商品ID查询商品
	public Commodity findCommodityById(Integer commodityNumber);
	//修改商品信息
	public void updateCommodity(Commodity commodity);
	//修改商品的库存
	public void updateCommodityStock(@Param("commodityNumber")Integer commodityNumber,@Param("commodityStock")Integer commodityStock);
	
	
}
