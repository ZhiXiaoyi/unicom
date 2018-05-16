package com.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.CheckMapper;
import com.model.pojo.ApplicationForm;
import com.model.pojo.ChangePackage;
import com.model.pojo.MobileCard;
import com.model.pojo.SelectCheckInfo;
import com.model.pojo.TPackage;
import com.service.ICheckPackageService;

@Service
@Transactional(readOnly = true)
public class CheckPackageServiceImpl implements ICheckPackageService {
	@Resource
	private CheckMapper checkMapper;

	@Override
	public List<ApplicationForm> getApplicationForms() {
		return checkMapper.getApplicationForms();
	}

	@Override
	public List<ApplicationForm> getApplicationForm(SelectCheckInfo scif) {
		return checkMapper.getApplicationForm(scif);
	}

	@Override
	public void updateApplicationState(ApplicationForm af) {
		checkMapper.updateApplicationState(af);
	}

	@Override
	public void updateChangePackage(ChangePackage cp) {
		checkMapper.updateChangePackage(cp);
	}

	@Override
	public List<TPackage> getPackageList() {
		return checkMapper.getPackageList();
	}

	@Override
	public void uploadApplication(ApplicationForm af) {
		checkMapper.uploadApplication(af);
	}

	@Override
	public MobileCard selectPhoneNumber(Integer id) {
		return checkMapper.selectPhoneNumber(id);
	}

	public CheckMapper getCheckMapper() {
		return checkMapper;
	}

	public void setCheckMapper(CheckMapper checkMapper) {
		this.checkMapper = checkMapper;
	}

}
