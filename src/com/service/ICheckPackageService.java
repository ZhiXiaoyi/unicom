package com.service;

import java.util.List;

import com.model.pojo.ApplicationForm;
import com.model.pojo.ChangePackage;
import com.model.pojo.MobileCard;
import com.model.pojo.SelectCheckInfo;
import com.model.pojo.TPackage;

public interface ICheckPackageService {
	public List<ApplicationForm> getApplicationForms();
	public List<ApplicationForm> getApplicationForm(SelectCheckInfo scif);
	public List<TPackage> getPackageList();
	public void updateApplicationState(ApplicationForm af);
	public void updateChangePackage(ChangePackage cp);
	public void uploadApplication(ApplicationForm af);
	public MobileCard selectPhoneNumber(Integer id);
}
