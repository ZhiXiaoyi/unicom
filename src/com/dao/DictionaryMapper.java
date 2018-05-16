package com.dao;

import java.util.List;

import com.model.pojo.Dictionary;
import com.utils.annotation.MyBatisRepository;



@MyBatisRepository
public interface DictionaryMapper {

	//插入字典值
	public void addDictionary(Dictionary dictionary);

	//查询数据集合
	public List<Dictionary> getDictionaryList(Dictionary dictionary);

    //删除字典值数据
	public void delDictionary(Integer dictionaryId);

   
}
