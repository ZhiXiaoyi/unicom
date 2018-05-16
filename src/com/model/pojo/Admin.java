package com.model.pojo;

public class Admin {
	
	private Integer adminId;//用户ID
	private Integer roleId;//角色ID
	private String adminName;//用户姓名
	private String adminPassword;//用户密码
	
	
	private Role role;//所属角色
	
	public Admin(){}

	

	public Admin(Integer adminId,Integer roleId,String adminName, String adminPassword,
			Role role) {
		super();
		this.adminId = adminId;
		this.roleId = roleId;
		this.adminName = adminName;
		this.adminPassword = adminPassword;
		this.role = role;
	}



	public Integer getAdminId() {
		return adminId;
	}

	public void setAdminId(Integer adminId) {
		this.adminId = adminId;
	}
	public Integer getRoleId() {
		return roleId;
	}
	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}
	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}
	
	

}
