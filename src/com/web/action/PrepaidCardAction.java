package com.web.action;

import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import com.model.pojo.PrepaidCard;
import com.model.vo.PrepaidCardIdAndPsw;
import com.service.IPrepaidCardService;


@SuppressWarnings("serial")
@Controller
public class PrepaidCardAction extends BaseAction{
	private String prepaidCardState;//充值卡状态
	private Integer facevalue;//充值卡面值
	private Integer cardNumber;//购买的充值卡数量
	private Long phone;//接收账号的手机
	private Integer money;//总金额
	private String mail;//接受账号的邮箱
	private Integer unsellPrepaidCardNumber;//未出售的充值卡数量
	private List<PrepaidCardIdAndPsw> list;//未售卡的id和密码
	private String tip;//提示
	private PrepaidCard PrepaidCard;
	private PrepaidCardIdAndPsw prepaidCardIdAndPsw = new PrepaidCardIdAndPsw();//vo账号密码和购卡数量
	
	@Resource
	private IPrepaidCardService prepaidCardService;
//	@Resource
//	private IRechargeRecordService rechargeRecordService;
	
	public String buyPrepadiCard(){
		
		try {
//			Date date= new Date();//创建一个时间对象，获取到当前的时间
//			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置时间显示格式
//			String rechargeTime = sdf.format(date);//将当前时间格式化为需要的类型
//				System.out.println(rechargeTime);//输出当前时间

			//查询出剩余的充值卡数量
			unsellPrepaidCardNumber = prepaidCardService.selectUnsellPrepaidCardNumber();
			System.out.println("未出售的充值卡数量aaa"+unsellPrepaidCardNumber);
			//判断充值卡库存是否足够，如果库存足够修改卡状态
			if (unsellPrepaidCardNumber>=cardNumber) {
				
				//获得购卡数量
				System.out.println(cardNumber);

				list = prepaidCardService.selectUnsellPrepaidCard(cardNumber);
				System.out.println(list.size());
				System.out.println(list+"集合");
				System.out.println("查询充值卡");
				for (int i = 0; i < list.size(); i++) {
					System.out.println("购买充值卡的账号"+list.get(i).getPrepaidCardId());
					System.out.println("购买充值卡的密码"+list.get(i).getPrepaidCardPassword());
					prepaidCardState="已售";
					System.out.println(prepaidCardState);
					//修改卡状态
					prepaidCardIdAndPsw.setPrepaidCardId(list.get(i).getPrepaidCardId());
					prepaidCardIdAndPsw.setPrepaidCardState(prepaidCardState);
					System.out.println("1111111s");
					prepaidCardService.updatePrepaidCardStateByPrepaidCardId(prepaidCardIdAndPsw);
					//修改出售时间
					prepaidCardService.updateSallTimeByPrepaidCardId(list.get(i).getPrepaidCardId());
					System.out.println("xiugaishijian");
				}	

				return SUCCESS;
			}
			tip="充值卡数量不足,"+"充值卡剩余数量:"+unsellPrepaidCardNumber;
		} catch (Exception e) {

		}
		return ERROR;
	}
	
	public String returnBuyCard(){
		return SUCCESS;
	}
	
	public Integer getFacevalue() {
		return facevalue;
	}
	public void setFacevalue(Integer facevalue) {
		this.facevalue = facevalue;
	}
	public Integer getCardNumber() {
		return cardNumber;
	}
	public void setCardNumber(Integer cardNumber) {
		this.cardNumber = cardNumber;
	}
	public Long getPhone() {
		return phone;
	}
	public void setPhone(Long phone) {
		this.phone = phone;
	}
	public Integer getMoney() {
		return money;
	}
	public void setMoney(Integer money) {
		this.money = money;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}


	public Integer getUnsellPrepaidCardNumber() {
		return unsellPrepaidCardNumber;
	}


	public void setUnsellPrepaidCardNumber(Integer unsellPrepaidCardNumber) {
		this.unsellPrepaidCardNumber = unsellPrepaidCardNumber;
	}


	public IPrepaidCardService getPrepaidCardService() {
		return prepaidCardService;
	}


	public void setPrepaidCardService(IPrepaidCardService prepaidCardService) {
		this.prepaidCardService = prepaidCardService;
	}


	public List<PrepaidCardIdAndPsw> getList() {
		return list;
	}


	public void setList(List<PrepaidCardIdAndPsw> list) {
		this.list = list;
	}


	public String getTip() {
		return tip;
	}


	public void setTip(String tip) {
		this.tip = tip;
	}


	public String getPrepaidCardState() {
		return prepaidCardState;
	}


	public void setPrepaidCardState(String prepaidCardState) {
		this.prepaidCardState = prepaidCardState;
	}


	public PrepaidCard getPrepaidCard() {
		return PrepaidCard;
	}


	public void setPrepaidCard(PrepaidCard prepaidCard) {
		PrepaidCard = prepaidCard;
	}


	public PrepaidCardIdAndPsw getPrepaidCardIdAndPsw() {
		return prepaidCardIdAndPsw;
	}


	public void setPrepaidCardIdAndPsw(PrepaidCardIdAndPsw prepaidCardIdAndPsw) {
		this.prepaidCardIdAndPsw = prepaidCardIdAndPsw;
	}


	
	
}
