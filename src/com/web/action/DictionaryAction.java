package com.web.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import com.model.pojo.Dictionary;
import com.model.pojo.DictionaryType;
import com.service.IDictionaryService;


@Controller
public class DictionaryAction extends BaseAction{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private DictionaryType dictionaryType;//字典类别
	
    private Dictionary dictionary;//字典值
	
	private List<DictionaryType> dictionaryTypeList;//字典类别集合
	
	private List<Dictionary> dictionaryList;//字典值集合
	
	private Integer dictionaryId;//字典值ID
	

	
	private Map<String, Object> map = new HashMap<String, Object>();//json对象
		
	
	//注入
	@Resource
	private IDictionaryService dictionaryService;
	
	//添加字典类别的方法
	public String addDictionaryType(){
		
		try {
			if(!dictionaryType.getDictionaryTypeName().equals("")){
				dictionaryService.addDictionaryType(dictionaryType);
				}
		} catch (Exception e) {

		}
		
		return SUCCESS;	
	}
	//初始化数据字典的界面方法
	public String toPage(){
		
		try {
			
			dictionaryTypeList=dictionaryService.findDictionaryTypeAll();	
			dictionaryList = dictionaryService.getDictionaryList(dictionary);	
		} catch (Exception e) {

		}

		return SUCCESS;
	}
	
	//添加字典值的方法
	public String addDictionary(){
		
		try {
			if(!dictionary.getDictionaryValue().equals("")){
				dictionaryService.addDictionary(dictionary);
			 }
		} catch (Exception e) {

		}

		return SUCCESS;
	}
	
	//JSON查询方法
	public String searchDictionary(){
			
		try {
			dictionaryList = dictionaryService.getDictionaryList(dictionary);	
			map.put("dictionaryList", dictionaryList);
		} catch (Exception e) {
			e.printStackTrace();
		}		
		return SUCCESS;
	}
	
	//删除字典值
	public String deleteDictionary(){
		try {
			dictionaryService.delDictionary(dictionaryId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;
	}



	public DictionaryType getDictionaryType() {
		return dictionaryType;
	}
	public void setDictionaryType(DictionaryType dictionaryType) {
		this.dictionaryType = dictionaryType;
	}
	public IDictionaryService getDictionaryService() {
		return dictionaryService;
	}
	public Dictionary getDictionary() {
		return dictionary;
	}
	public void setDictionary(Dictionary dictionary) {
		this.dictionary = dictionary;
	}
	public void setDictionaryService(IDictionaryService dictionaryService) {
		this.dictionaryService = dictionaryService;
	}
	public List<DictionaryType> getDictionaryTypeList() {
		return dictionaryTypeList;
	}
	public void setDictionaryTypeList(List<DictionaryType> dictionaryTypeList) {
		this.dictionaryTypeList = dictionaryTypeList;
	}
	public List<Dictionary> getDictionaryList() {
		return dictionaryList;
	}
	public void setDictionaryList(List<Dictionary> dictionaryList) {
		this.dictionaryList = dictionaryList;
	}

	public Map<String, Object> getMap() {
		return map;
	}
	public void setMap(Map<String, Object> map) {
		this.map = map;
	}
	public Integer getDictionaryId() {
		return dictionaryId;
	}
	public void setDictionaryId(Integer dictionaryId) {
		this.dictionaryId = dictionaryId;
	}
	
	
	
	
}
