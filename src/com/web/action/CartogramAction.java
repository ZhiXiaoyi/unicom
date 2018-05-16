package com.web.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.model.pojo.StatisticalCondition;
import com.model.pojo.StatisticalResult;
import com.service.IStatisticsService;

@Controller
public class CartogramAction extends BaseAction{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String area;
	private String startdate;
	private String lastdate;
	private String Checkbox1;
	private String Checkbox2;
	private String Checkbox3;
	private StatisticalResult sr;
	private List<String> areas;
	@Resource
	private IStatisticsService statisticsService;
	public StatisticalResult getSr() {
		return sr;
	}
	public void setSr(StatisticalResult sr) {
		this.sr = sr;
	}
	public String Cartogram(){
		
		try {
			
			StatisticalCondition sc=new StatisticalCondition(null,startdate,lastdate); //初始化查询条件对象	
			Double rechargeRecord=statisticsService.statisticsTrechargerecord(sc);
			System.out.println("充值销售额:"+rechargeRecord);
			Double prepaidcard=statisticsService.statisticsPrepaidcard(sc);
			System.out.println("电子卡销售额:"+prepaidcard);
			Double orders=statisticsService.statisticsOrders(sc);
			System.out.println("电话卡销售额:"+orders);
			sr=new StatisticalResult(rechargeRecord, prepaidcard,orders);
		} catch (Exception e) {

		}
		return "success";
	}
	public String toAreaExcute(){
		
		try {
			
			System.out.println("进入Area统计");
			areas=statisticsService.getAreas();
		} catch (Exception e) {

		}
		return "success";
	}
	public String AreaCartogram(){
		
		try {
			areas=statisticsService.getAreas();
			System.out.println("进入AreaCartogram");
			Integer areaid=statisticsService.getAreaId(area);	
			StatisticalCondition sc=new StatisticalCondition(areaid,startdate,lastdate); //初始化查询条件对象	
			Double rechargeRecord=statisticsService.statisticsTrechargerecord(sc);
			System.out.println("充值销售额:"+rechargeRecord);
			Double prepaidcard=statisticsService.statisticsPrepaidcard(sc);
			System.out.println("电子卡销售额:"+prepaidcard);
			Double orders=statisticsService.statisticsOrders(sc);
			System.out.println("电话卡销售额:"+orders);
			sr=new StatisticalResult(rechargeRecord, prepaidcard,orders);
		} catch (Exception e) {

		}
		return "success";
	}
	public String execute(){
		
		return "success";
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}

	public String getStartdate() {
		return startdate;
	}
	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}
	public String getLastdate() {
		return lastdate;
	}
	public void setLastdate(String lastdate) {
		this.lastdate = lastdate;
	}
	public String getCheckbox1() {
		return Checkbox1;
	}
	public void setCheckbox1(String checkbox1) {
		Checkbox1 = checkbox1;
	}
	public String getCheckbox2() {
		return Checkbox2;
	}
	public void setCheckbox2(String checkbox2) {
		Checkbox2 = checkbox2;
	}
	public String getCheckbox3() {
		return Checkbox3;
	}
	public void setCheckbox3(String checkbox3) {
		Checkbox3 = checkbox3;
	}
	public IStatisticsService getStatisticsService() {
		return statisticsService;
	}
	public void setStatisticsService(IStatisticsService statisticsService) {
		this.statisticsService = statisticsService;
	}
	public List<String> getAreas() {
		return areas;
	}
	public void setAreas(List<String> areas) {
		this.areas = areas;
	}

	

}
