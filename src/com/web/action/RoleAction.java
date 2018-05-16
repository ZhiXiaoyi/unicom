package com.web.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.model.Page;
import com.model.pojo.Role;
import com.service.IRoleService;

@SuppressWarnings("serial")
@Controller
public class RoleAction extends BaseAction {

	private Role role;//角色
	private Integer roleId;//角色ID
	private String roleName;//角色名
	private Page page;// 分页类
	private Integer pageIndex;// 当前页
	private Integer pageSize = 10;// 每页大小
	private List<Role> roleList;//角色集合

	private Integer[] node;//权限ID数组
	

	private Map<String, Object> map = new HashMap<String, Object>();//json对象

	@Resource
	private IRoleService roleService;

	// 分页查询跳转
	public String toPage() {
		try{
		if (pageIndex == null) {
			pageIndex = 1;
		}
		page = new Page(pageIndex, pageSize, roleService.getCount(role));
		roleList = roleService.getList(role, page);
		}catch(Exception e){
			
		}
		return SUCCESS;
	}

	// 添加角色
	public String addRole() {
		try {
			if (node!=null) {
				roleService.addRole(role, node);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;
	}

	// 跳转添加角色界面
	public String toAddPage() {
		return SUCCESS;
	}
	
	//跳转编辑角色界面
	public String toEditPage(){
		role = roleService.findRoleById(roleId);
		return SUCCESS;
	    
	}
	//编辑角色信息
	public String editRole(){
		roleService.updataRole(role, node);
		return SUCCESS;
	}
	
	//查询角色名是否存在	
	public String isRole(){
		try {
			boolean flag = roleService.findRoleByName(roleName);
			map.put("isRole", flag);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;
	}
	 
	
	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
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

	public List<Role> getRoleList() {
		return roleList;
	}

	public void setRoleList(List<Role> roleList) {
		this.roleList = roleList;
	}

	public IRoleService getRoleService() {
		return roleService;
	}

	public void setRoleService(IRoleService roleService) {
		this.roleService = roleService;
	}

	public Integer[] getNode() {
		return node;
	}

	public void setNode(Integer[] node) {
		this.node = node;
	}

	public Integer getRoleId() {
		return roleId;
	}

	public void setRoleId(Integer roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public Map<String, Object> getMap() {
		return map;
	}

	public void setMap(Map<String, Object> map) {
		this.map = map;
	}

	
	
}
