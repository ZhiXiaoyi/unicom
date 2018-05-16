package com.model.pojo;

public class TPackage {
	private Integer packageid;
	private Integer packagemoney;
	private String packageinfo;
	public TPackage(){
		
	}
	public TPackage(Integer packageid, Integer packagemoney, String packageinfo) {
		super();
		this.packageid = packageid;
		this.packagemoney = packagemoney;
		this.packageinfo = packageinfo;
	}
	public Integer getPackageid() {
		return packageid;
	}
	public void setPackageid(Integer packageid) {
		this.packageid = packageid;
	}
	public Integer getPackagemoney() {
		return packagemoney;
	}
	public void setPackagemoney(Integer packagemoney) {
		this.packagemoney = packagemoney;
	}
	public String getPackageinfo() {
		return packageinfo;
	}
	public void setPackageinfo(String packageinfo) {
		this.packageinfo = packageinfo;
	}
	
}
