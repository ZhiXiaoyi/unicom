package com.model.pojo;

public class Area {
	private Integer areaid;
	private String areaname;
	public Area(){
		
	}
	public Area(Integer areaid, String areaname) {
		super();
		this.areaid = areaid;
		this.areaname = areaname;
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
	
}
