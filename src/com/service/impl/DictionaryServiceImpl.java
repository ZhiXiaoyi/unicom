package com.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;






import com.dao.DictionaryMapper;
import com.dao.DictionaryTypeMapper;
import com.model.pojo.Dictionary;
import com.model.pojo.DictionaryType;
import com.service.IDictionaryService;

@Service
@Transactional(readOnly = true)
// 事务
public class DictionaryServiceImpl implements IDictionaryService{

	
	@Resource
	private DictionaryTypeMapper mapper;//字典类别Mapper
	
	@Resource
	private DictionaryMapper dictionaryMapper;//字典值Mapper
	
	@Override
	public void addDictionaryType(DictionaryType dictionaryType) {
		mapper.addDictionaryType(dictionaryType);		
	}
	
	@Override
	public List<DictionaryType> findDictionaryTypeAll() {	
		return mapper.findDictionaryTypeAll();
	}
	
	@Override
	public void addDictionary(Dictionary dictionary) {
		dictionaryMapper.addDictionary(dictionary);		
	}
	
	@Override
	public List<Dictionary> getDictionaryList(Dictionary dictionary){
		return dictionaryMapper.getDictionaryList(dictionary);
	};
	
	
	
	@Override
	public void delDictionary(Integer dictionaryId) {
		
		dictionaryMapper.delDictionary(dictionaryId);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	public DictionaryTypeMapper getMapper() {
		return mapper;
	}

	public void setMapper(DictionaryTypeMapper mapper) {
		this.mapper = mapper;
	}

	public DictionaryMapper getDictionaryMapper() {
		return dictionaryMapper;
	}

	public void setDictionaryMapper(DictionaryMapper dictionaryMapper) {
		this.dictionaryMapper = dictionaryMapper;
	}

	



	



	
	

}
