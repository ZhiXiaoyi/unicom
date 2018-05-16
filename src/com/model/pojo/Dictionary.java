package com.model.pojo;

public class Dictionary {
	
	private Integer dictionaryId;//字典值ID
	private String dictionaryValue;//字典值
	private Integer dictionaryTypeId;//字典类别ID
	private String remarks;//备注
	
	
	private DictionaryType dictionaryType;//字典类别

	
	
	public Dictionary(){}
	
	

	public Dictionary(Integer dictionaryId, String dictionaryValue,
			Integer dictionaryTypeId, DictionaryType dictionaryType) {
		super();
		this.dictionaryId = dictionaryId;
		this.dictionaryValue = dictionaryValue;
		this.dictionaryTypeId = dictionaryTypeId;
		this.dictionaryType = dictionaryType;
	}



	public Integer getDictionaryId() {
		return dictionaryId;
	}


	public void setDictionaryId(Integer dictionaryId) {
		this.dictionaryId = dictionaryId;
	}


	public String getDictionaryValue() {
		return dictionaryValue;
	}


	public void setDictionaryValue(String dictionaryValue) {
		this.dictionaryValue = dictionaryValue;
	}


	public Integer getDictionaryTypeId() {
		return dictionaryTypeId;
	}


	public void setDictionaryTypeId(Integer dictionaryTypeId) {
		this.dictionaryTypeId = dictionaryTypeId;
	}


	public DictionaryType getDictionaryType() {
		return dictionaryType;
	}


	public void setDictionaryType(DictionaryType dictionaryType) {
		this.dictionaryType = dictionaryType;
	}



	public String getRemarks() {
		return remarks;
	}



	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	
	
}
