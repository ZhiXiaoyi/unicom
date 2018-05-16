package com.model.pojo;

public class ChangePackage {  //改变电话
	private Long phonenumber;
	private Integer packageid;
	public ChangePackage(){
		
	}











	public ChangePackage(Long phonenumber, Integer packageid) {
		super();
		this.phonenumber = phonenumber;
		this.packageid = packageid;
	}











	public Long getPhonenumber() {
		return phonenumber;
	}











	public void setPhonenumber(Long phonenumber) {
		this.phonenumber = phonenumber;
	}











	public Integer getPackageid() {
		return packageid;
	}
	public void setPackageid(Integer packageid) {
		this.packageid = packageid;
	}
	
}
