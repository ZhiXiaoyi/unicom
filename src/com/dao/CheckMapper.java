package com.dao;

import java.util.List;

import com.model.pojo.ApplicationForm;
import com.model.pojo.ChangePackage;
import com.model.pojo.MobileCard;
import com.model.pojo.SelectCheckInfo;
import com.model.pojo.TPackage;
import com.utils.annotation.MyBatisRepository;

@MyBatisRepository
public interface CheckMapper {
	
	public List<ApplicationForm> getApplicationForms(); // 获得所有客户未审核的套餐变更申请

	public List<ApplicationForm> getApplicationForm(SelectCheckInfo scif); // 查询申请了业务变更的电话卡

	public List<TPackage> getPackageList(); // 查看可更换的业务套餐列表

	public void updateApplicationState(ApplicationForm af); // 审核通过

	public void updateChangePackage(ChangePackage cp); // 审核通过改变电话卡业务套餐

	public void uploadApplication(ApplicationForm af); // 上传客户刚提交的套餐变更申请

	public MobileCard selectPhoneNumber(Integer id); // 利用Userid查询电话卡
}
