package com.web.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.model.Page;
import com.model.pojo.Admin;
import com.model.pojo.Role;
import com.service.IAdminService;
import com.service.IRoleService;


@SuppressWarnings("serial")
@Controller
public class AdminAction  extends BaseAction {

	private Admin admin;//管理员用户
	private String adminName;//管理员名
	private Integer adminId;//管理员ID
	private Page page;//分页类
	private Integer pageIndex;//当前页
	private Integer pageSize = 10;//每页大小
	
	
	private List<Admin> adminList;//管理员集合
	private List<Role>  roleList;//角色集合
	
	private Map<String, Object> map = new HashMap<String, Object>();//json对象
	
	@Resource
	private IAdminService adminService;
	
	@Resource
	private IRoleService roleService;
	
	//添加用户
	public String addAdmin(){
		try {
			System.out.println(admin.getAdminName());
			System.out.println(admin.getRoleId());
			System.out.println(admin.getAdminPassword());
			adminService.addAdmin(admin);	
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;
	}

	//修改用户信息
	public String editAdmin(){
		adminService.updateAdmin(admin);
		return SUCCESS;
	}
	//删除用户
	public String delAdmin(){
		adminService.delAdmin(adminId);
		return SUCCESS;
	}
	
	//分页查询跳转
	public String toPage(){
		try{
		if(pageIndex==null){
			pageIndex = 1;
		}
		page = new Page(pageIndex, pageSize, adminService.getCount(admin));	
		adminList = adminService.getList(admin, page);
		}catch(Exception e){
			
		}
		return SUCCESS;
	}
	//跳转添加用户的界面
	public String toAddPage(){
		try{
			roleList = roleService.findRoleAll();	
		}catch(Exception e){
			
		}
		return SUCCESS;
	}
	
	//跳转用户编辑界面
	public String toEditPage(){
		
		try{
			roleList = roleService.findRoleAll();
			admin =adminService.findAdminById(adminId);
		}catch(Exception e){
			
		}
		return SUCCESS;
	}
	
	//查询用户名是否存在
	public String isAdmin(){
		
		try{
			boolean flag = adminService.findAdminByName(adminName);
			map.put("isAdmin", flag);
		}catch(Exception e){
			
		}

		return SUCCESS;
	}


	

	
	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	public IAdminService getAdminService() {
		return adminService;
	}

	public void setAdminService(IAdminService adminService) {
		this.adminService = adminService;
	}

	public List<Admin> getAdminList() {
		return adminList;
	}

	public void setAdminList(List<Admin> adminList) {
		this.adminList = adminList;
	}


	public Page getPage() {
		return page;
	}

	public void setPage(Page page) {
		this.page = page;
	}

	public Integer getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(Integer pageIndex) {
		this.pageIndex = pageIndex;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	public IRoleService getRoleService() {
		return roleService;
	}

	public void setRoleService(IRoleService roleService) {
		this.roleService = roleService;
	}

	public List<Role> getRoleList() {
		return roleList;
	}

	public void setRoleList(List<Role> roleList) {
		this.roleList = roleList;
	}

	public Integer getAdminId() {
		return adminId;
	}

	public void setAdminId(Integer adminId) {
		this.adminId = adminId;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public Map<String, Object> getMap() {
		return map;
	}

	public void setMap(Map<String, Object> map) {
		this.map = map;
	}

	

}
