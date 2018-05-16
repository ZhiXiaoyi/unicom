package com.web.action;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;

import com.model.vo.Score;
import com.service.IRechargeRecordService;
import com.service.ISearchScore;

/**
 * @author CHIN
 *
 */

@SuppressWarnings("serial")
@Controller
public class SearchRemainingScoreAction extends BaseAction {

	private String Checkbox1;// 选择表格按钮
	private String Checkbox2;// 选择饼图按钮
	private String Checkbox3;// 选择柱状图按钮
	private Long phoneNumber;// 手机号码
	private Integer remainingScore;// 当前积分
	private Integer allIntegeral;// 所有积分=所有充值的金额总和
	private Integer usedIntegeral;// 已使用的积分
	private Score score;// 积分类
	private String startdate;//查询开始时间
	private String lastdate;//查询结束时间
	@Resource
	private ISearchScore searchScore;
	
	Logger	logger = Logger.getLogger(this.getClass());
	
	@Resource
	IRechargeRecordService rechargeRecordService;

	public String searchScore() {
		try {
			score = new Score();
			
			if (phoneNumber != null) {
				//得到已经使用的积分
				usedIntegeral=searchScore.findUsedScoreByPhoneNumber(phoneNumber);
				System.out.println("已使用的积分" + usedIntegeral);
				allIntegeral = rechargeRecordService.findAllAddIntegeral(phoneNumber);
				// 查询当前的积分
				remainingScore = searchScore.findRemainingScore(phoneNumber);
				System.out.println("当前的积分" + remainingScore);
				// 计算出总积分
				allIntegeral = remainingScore - usedIntegeral;
				
				// 将三个积分传给score
				score.setAllIntegeral(allIntegeral);
				score.setRemainingScore(remainingScore);
				score.setUsedIntegeral(-usedIntegeral);
				return SUCCESS;
			} else {
				return ERROR;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ERROR;
		}

	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
		System.out.println(phoneNumber);
	}

	public ISearchScore getSearchScore() {
		return searchScore;
	}

	public void setSearchScore(ISearchScore searchScore) {
		this.searchScore = searchScore;
	}

	public IRechargeRecordService getRechargeRecordService() {
		return rechargeRecordService;
	}

	public void setRechargeRecordService(
			IRechargeRecordService rechargeRecordService) {
		this.rechargeRecordService = rechargeRecordService;
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

	public Integer getRemainingScore() {
		return remainingScore;
	}

	public void setRemainingScore(Integer remainingScore) {
		this.remainingScore = remainingScore;
	}

	public Integer getAllIntegeral() {
		return allIntegeral;
	}

	public void setAllIntegeral(Integer allIntegeral) {
		this.allIntegeral = allIntegeral;
	}

	public Integer getUsedIntegeral() {
		return usedIntegeral;
	}

	public void setUsedIntegeral(Integer usedIntegeral) {
		this.usedIntegeral = usedIntegeral;
	}
	public Score getScore() {
		return score;
	}

	public void setScore(Score score) {
		this.score = score;
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
	
}
