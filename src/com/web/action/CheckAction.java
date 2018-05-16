package com.web.action;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import net.sf.json.JSONArray;

import com.model.pojo.ApplicationForm;
import com.model.pojo.ChangePackage;
import com.model.pojo.MobileCard;
import com.model.pojo.SelectCheckInfo;
import com.model.pojo.User;
import com.service.ICheckPackageService;
import com.model.pojo.TPackage;

@SuppressWarnings("serial")
@Controller
public class CheckAction extends BaseAction{
	private List<ApplicationForm> changepackage; //改变业务申请列表
	private Long phoneNumber;
	private String State=null;  
	private MobileCard mobilecard;
	private String json;           
	private String cards;
	
	private Long mobileCardId;
	private Integer packageId;
	private List<TPackage> packageList;
	@Resource
	private ICheckPackageService icps;
	public String getApplicationList(){	
		changepackage=icps.getApplicationForms();
		return "success";
	}
	/**
	 * @return
	 */
	public String getApplication(){ 
		
		try {
			//查看审核列表
			if(phoneNumber==null){
				phoneNumber=0l;
			}

			SelectCheckInfo scif=new SelectCheckInfo();
			scif.setPhoneNumber(phoneNumber);
			if(State.equals("已审核")){
				scif.setApplicationState(1);
			}else if(State.equals("待审核")){
				scif.setApplicationState(0);
			}
			
			changepackage=icps.getApplicationForm(scif);

		} catch (Exception e) {

		}
		
		return "success";
	}
	
	public String passCheck(){  
		
		//通过审核后改变数据库
		
		try {	
		System.out.println("进入PASS");
		System.out.println(cards);
		JSONArray jarycards=JSONArray.fromObject(cards);

		@SuppressWarnings({ "unchecked", "static-access" })
		ArrayList<ChangePackage> cpList = (ArrayList<ChangePackage>) jarycards.toCollection(jarycards, ChangePackage.class);
	
		
		JSONArray jary=JSONArray.fromObject(json);
		ApplicationForm af=new ApplicationForm();
		af.setApplicationFormList(new ArrayList<Integer>());//设置改变业务申请
		for (int i = 0; i <jary.size(); i++) {
			af.getApplicationFormList().add(jary.getInt(i));
		}
		icps.updateApplicationState(af);  //修改数据库审核状态
		if(cpList.size()>0){
			for (int i = 0; i < cpList.size(); i++) {
				icps.updateChangePackage(cpList.get(i));
			}	
		}
		System.out.println("完成");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "success";
	}
	//获取可改变的业务信息
	public String toPackageList(){ 
		
		try {
			System.out.println("进入toPackageList");
			packageList=icps.getPackageList(); //获取业务信息列表
			User user=(User) session.get("user");
			if(user==null){
				return "login";
			}
			mobilecard=icps.selectPhoneNumber(user.getUserId());
			System.out.println(mobilecard.getPhoneNumber());
		} catch (Exception e) {

		}
		return "success";
	}
	
	//上传用户刚申请变更的套餐存储
	public String uploadApplication(){
		
		try{
		ApplicationForm af=new ApplicationForm();
		af.setMobilecardid(mobileCardId);
		af.setNewpackageNum(packageId);
		icps.uploadApplication(af);
		}catch(Exception e){
			e.printStackTrace();
		}
		return "success";
	}
	public List<ApplicationForm> getChangepackage() {
		return changepackage;
	}
	public void setChangepackage(List<ApplicationForm> changepackage) {
		this.changepackage = changepackage;
	}
	public ICheckPackageService getIcps() {
		return icps;
	}
	public void setIcps(ICheckPackageService icps) {
		this.icps = icps;
	}
	public Long getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getState() {
		return State;
	}
	public void setState(String state) {
		State = state;
	}
	public String getJson() {
		return json;
	}
	public void setJson(String json) {
		this.json = json;
	}
	public String getCards() {
		return cards;
	}
	public void setCards(String cards) {
		this.cards = cards;
	}
	public void setPackageList(List<TPackage> packageList) {
		this.packageList = packageList;
	}
	public List<TPackage> getPackageList() {
		return packageList;
	}
	public MobileCard getMobilecard() {
		return mobilecard;
	}
	public void setMobilecard(MobileCard mobilecard) {
		this.mobilecard = mobilecard;
	}

	public Long getMobileCardId() {
		return mobileCardId;
	}
	public void setMobileCardId(Long mobileCardId) {
		this.mobileCardId = mobileCardId;
	}
	public Integer getPackageId() {
		return packageId;
	}
	public void setPackageId(Integer packageId) {
		this.packageId = packageId;
	}


	
}
