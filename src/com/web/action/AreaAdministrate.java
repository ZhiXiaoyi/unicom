package com.web.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.model.pojo.Area;
import com.service.IAreaService;

@Controller
public class AreaAdministrate extends BaseAction{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Resource
	private IAreaService areaservice;
	private List<Area> areaList;
	private Integer areaid;
	private String areaname;
	private Area area;
	private Integer type;
	private String json;
	
	/***
	 * 区域管理
	 * areaList---已有的区域列表
	 * @return
	 */
	public String excute(){
		area=new Area(areaid, areaname);
		areaList=areaservice.selectAreaList(area);
		return "success";
	}
	
	/**
	 * 区域编辑
	 * 
	 * @return
	 */
	public String toEditor(){
		if(type==0){    //如果是进行编辑
			areaList=areaservice.selectAreaList(new Area(areaid, null));
			area=areaList.get(0);
		}
		
		return "success";
	}
	
	/**
	 * 保存区域编辑
	 * @return
	 */
	public String toPassEditor(){
		json="s";		
		areaList=areaservice.selectAreaList(new Area());
		for (int i = 0; i < areaList.size(); i++) {
			if(areaList.get(i).getAreaname().equals(areaname)){
				if(areaList.get(i).getAreaid().equals(areaid)){
					json="f";
					return "success";	
				}else{
					json="e";
					return "success";
				}

			}				
		}
		areaservice.updateArea(new Area(areaid, areaname));
		return "success";
	}
	
	
	
	
	/**
	 * 插入新区域
	 * @return
	 */
	public String toPassInsert(){
		try{
		json="s";		
		areaList=areaservice.selectAreaList(new Area());
		for (int i = 0; i < areaList.size(); i++) {
			if(areaList.get(i).getAreaname().equals(areaname)){
				json="e";
				return "success";
			}				
		}
		areaservice.insertArea(new Area(null,areaname));
		}catch(Exception e){
			e.printStackTrace();
		}
		return "success";
	}

	public IAreaService getAreaservice() {
		return areaservice;
	}
	public void setAreaservice(IAreaService areaservice) {
		this.areaservice = areaservice;
	}
	public List<Area> getAreaList() {
		return areaList;
	}
	public void setAreaList(List<Area> areaList) {
		this.areaList = areaList;
	}

	public Area getArea() {
		return area;
	}

	public void setArea(Area area) {
		this.area = area;
	}

	public Integer getAreaid() {
		return areaid;
	}

	public void setAreaid(Integer areaid) {
		this.areaid = areaid;
	}

	public String getAreaname() {
		return areaname;
	}

	public void setAreaname(String areaname) {
		this.areaname = areaname;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}



	public String getJson() {
		return json;
	}

	public void setJson(String json) {
		this.json = json;
	}

	

	
}
