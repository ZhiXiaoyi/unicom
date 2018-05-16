package com.web.action;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.model.pojo.MobileCard;
import com.service.IMobileCardService;


@SuppressWarnings("serial")
@Controller
public class SearchCostbalanceAction extends BaseAction{
	private MobileCard mobileCard;//手机类
	private Long phoneNumber;//手机号号码
	private Integer servicePwd;//服务密码
	private Integer costbBalance;//手机余额
	private Integer applicationState;//业务状态 --数据库integer类型
	private String mobileState;//手机状态 转化为string
	private String tip;//提示信息
	@Resource
	private IMobileCardService mobileCardService;

	public String searchCostbalance(){
		//查询手机表
		mobileCard= mobileCardService.findMobileCardByPhoneNumber(phoneNumber);

		//判断手机是否存在
		if (mobileCard!=null) {
			tip="手机号码存在";
			//查询手机状态
			applicationState = mobileCard.getApplicationState();
			System.out.println(applicationState);
			//判断手机卡状态是否销售
			if (applicationState!=4) {
				//判断服务密码
//				System.out.println(mobileCard.getServicePwd()+"数据库密码");
//				System.out.println(servicePwd+"界面密码");
				if (mobileCard.getServicePwd().equals(servicePwd)) {
					tip="服务密码正确";
					//查询余额
					costbBalance=mobileCardService.findMobileCardByPhoneNumber(phoneNumber).getCostBalance();
					System.out.println(costbBalance+"手机余额");
					if (applicationState==1) {
						mobileState="通讯正常";
					}else if(applicationState==2){
						mobileState="欠费";
					}else if (applicationState==3) {
						mobileState="停机";
					}
					return SUCCESS;
				}else {
					tip="服务密码不正确";
					System.out.println("服务密码不正确");
					return ERROR;
				}	
			}else {
				tip="手机号码不存在";
				System.out.println("手机号码不存在");
				return ERROR;
			}
		}else {
			tip="手机号码不存在";
			System.out.println("手机号码不存在");
			return ERROR;
		}
	}
	
	//返回查询界面
	public String returnSearchCostbalance(){
		return SUCCESS;
	}
	public Long getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public Integer getServicePwd() {
		return servicePwd;
	}
	public void setServicePwd(Integer servicePwd) {
		this.servicePwd = servicePwd;
	}

	public MobileCard getMobileCard() {
		return mobileCard;
	}

	public void setMobileCard(MobileCard mobileCard) {
		this.mobileCard = mobileCard;
	}

	public Integer getCostbBalance() {
		return costbBalance;
	}

	public void setCostbBalance(Integer costbBalance) {
		this.costbBalance = costbBalance;
	}

	public String getTip() {
		return tip;
	}

	public void setTip(String tip) {
		this.tip = tip;
	}

	public IMobileCardService getMobileCardService() {
		return mobileCardService;
	}

	public void setMobileCardService(IMobileCardService mobileCardService) {
		this.mobileCardService = mobileCardService;
	}

	public Integer getApplicationState() {
		return applicationState;
	}

	public void setApplicationState(Integer applicationState) {
		this.applicationState = applicationState;
	}

	public String getMobileState() {
		return mobileState;
	}

	public void setMobileState(String mobileState) {
		this.mobileState = mobileState;
	}

	
}
