package com.service;

import java.util.List;

import com.model.pojo.Dictionary;
import com.model.pojo.DictionaryType;

public interface IDictionaryService {

	
	public void addDictionaryType(DictionaryType dictionaryType);
	
	public List<DictionaryType> findDictionaryTypeAll();
	
	public void addDictionary(Dictionary dictionary);
	
	public List<Dictionary> getDictionaryList(Dictionary dictionary);
	
	public void delDictionary(Integer dictionaryId);
}
