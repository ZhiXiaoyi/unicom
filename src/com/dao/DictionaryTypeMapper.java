package com.dao;

import java.util.List;

import com.model.pojo.DictionaryType;
import com.utils.annotation.MyBatisRepository;




@MyBatisRepository
public interface DictionaryTypeMapper {
	
	
	//插入字典类别名
	public void addDictionaryType(DictionaryType dictionaryType);
	
	//查询所有的字典类别	
	public List<DictionaryType> findDictionaryTypeAll();
	
}
