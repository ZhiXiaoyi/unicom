package com.model.pojo;

public class DictionaryType {
	
	private Integer dictionaryTypeId;
	private String dictionaryTypeName;

	
	public DictionaryType(){}


	public DictionaryType(Integer dictionaryTypeId, String dictionaryTypeName) {
		super();
		this.dictionaryTypeId = dictionaryTypeId;
		this.dictionaryTypeName = dictionaryTypeName;
	}


	public Integer getDictionaryTypeId() {
		return dictionaryTypeId;
	}


	public void setDictionaryTypeId(Integer dictionaryTypeId) {
		this.dictionaryTypeId = dictionaryTypeId;
	}


	public String getDictionaryTypeName() {
		return dictionaryTypeName;
	}


	public void setDictionaryTypeName(String dictionaryTypeName) {
		this.dictionaryTypeName = dictionaryTypeName;
	}
	
	
}
