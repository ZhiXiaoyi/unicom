package com.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.AdminMapper;
import com.model.Page;
import com.model.pojo.Admin;
import com.service.IAdminService;
import com.utils.SearchPageUtil;



@Service
@Transactional(readOnly = true)
//事务
public class AdminServiceImpl implements IAdminService{

	@Resource
	private AdminMapper adminMapper;//管理员mapper
	
	
	@Override
	public void addAdmin(Admin admin) {
		adminMapper.addAdmin(admin);	
	}

	
	
	@Override
	public int getCount(Admin admin) {
		 return adminMapper.getCount(admin);  
	}


	@Override
	public List<Admin> getList(Admin admin, Page page) {
		   SearchPageUtil searchPageUtil = new SearchPageUtil();   
	        searchPageUtil.setPage(page); 
	        searchPageUtil.setObject(admin);  
	        final List<Admin> list = adminMapper.getList(searchPageUtil);  
	        return list;  
	    }  

	@Override
	public Admin findAdminById(Integer adminId) {
		return adminMapper.findAdminById(adminId);
	}
	
	@Override
	public int updateAdmin(Admin admin) {
		return adminMapper.updateAdmin(admin);
	}
	
	@Override
	public int delAdmin(Integer adminId) {
		return adminMapper.delAdmin(adminId);
	}
	
	
	@Override
	public boolean findAdminByName(String adminName) {
		   Admin admin = adminMapper.findAdminByName(adminName);
		   if(admin==null){
			   return true;//如果不存在，返回True
		   }else{
			   return false;
		   }
	}



	
	
	
	
	
	
	
	
	
	
	public AdminMapper getAdminMapper() {
		return adminMapper;
	}

	public void setAdminMapper(AdminMapper adminMapper) {
		this.adminMapper = adminMapper;
	}



	
	



	


	
	

	
	
}
