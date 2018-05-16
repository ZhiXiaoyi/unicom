package com.web.action;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.model.pojo.RechargeRecord;
import com.model.pojo.User;
import com.model.vo.PhoneNumberAndCostblance;
import com.model.vo.PrepaidCardIdAndPsw;
import com.service.IMobileCardService;
import com.service.IPrepaidCardService;
import com.service.IRechargeRecordService;
import com.service.IRechargeService;

@SuppressWarnings("serial")
@Controller
public class RechargeAction extends BaseAction {

	private Integer oldCostBalance;// 未充值账户余额
	private Integer costBalance;// 充值账户余额
	private Integer charge;// 充值金额
	private Long phoneNumber;// 充值的号码
	private String tip;// 提示
	private String realName;// 当前登录用户昵称
	private Integer pay;// 选择的支付方式（1为在线支付2为充值卡支付）
	private Integer otherCharge;// 其他金额
	private Integer prepaidCardId;// 充值卡账号
	private Integer prepaidCardPassword;// 充值卡密码
	private String prepaidCardState;// 卡状态
	private Date rechargeTime;// 充值时间
	private String cardTip;// 充值卡提示
	private RechargeRecord rechargeRecord=new RechargeRecord();// 充值记录表
	private User user;// 用户表
	private Integer areaId;//区域id
	private PrepaidCardIdAndPsw PrepaidCardIdAndPsw =new PrepaidCardIdAndPsw();//账号密码状态
	// 注入
	@Resource
	private IRechargeService rechargeService;

	@Resource
	private IPrepaidCardService prepaidCardService;

	@Resource
	private IRechargeRecordService rechargeRecordService;
	
	@Resource
	private IMobileCardService mobileCardService;

	public String recharge() {
		try {

			Date date = new Date();// 创建一个时间对象，获取到当前的时间
//			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");// 设置时间显示格式
//			String rechargeTime = sdf.format(date);// 将当前时间格式化为需要的类型
//			System.out.println(rechargeTime);// 输出当前时间

			PhoneNumberAndCostblance phoneNumberAndCostblance = new PhoneNumberAndCostblance();
			System.out.println("区域id"+areaId);
			if (mobileCardService.findMobileCardByPhoneNumber(phoneNumber)!=null) {
				oldCostBalance = rechargeService.selectCostBalance(phoneNumber);
				System.out.println("未充值的手机余额" + oldCostBalance);
				// 判断支付方式 1在线
					if (pay == 1) {
						if (charge == 20 || charge == 30 || charge == 50|| charge == 100) {
							// System.out.println(rechargeTime.getTime());
							// 通过电话查询出余额
							System.out.println("未充值的余额" + oldCostBalance);
							// 余额和充值金额想加为新的余额
							costBalance = oldCostBalance + charge;
							System.out.println("充值后的余额" + costBalance);
							realName=mobileCardService.findMobileCardByPhoneNumber(phoneNumber).getRealName();
							// 将值传给vo，调用数据库修改
							phoneNumberAndCostblance.setCostBalance(costBalance);
							phoneNumberAndCostblance.setPhoneNumber(phoneNumber);
							rechargeService.updateCostBalance(phoneNumberAndCostblance);
							System.out.println("zhun准备插入记录表");
							// 插入充值记录表
							rechargeRecord.setAddIntegral(charge);// 增加的积分
							rechargeRecord.setRechargeMoney(charge);// 充值的金额
							rechargeRecord.setRechargePhoneNumber(phoneNumber);// 充值的手机号码
						
							rechargeRecord.setUserId(rechargeRecordService.findUserIdByPhoneNumber(phoneNumber).getUserId());// 用户id

							rechargeRecord.setAreaId(areaId);// 充值的区域
							rechargeRecord.setRechargeTime(date);// 充值的时间
					
							rechargeRecordService.insertRecord(rechargeRecord);
							System.out.println("c插入成功");
							System.out.println("修改余额成功准备跳转支付界面11111");
							return SUCCESS;
						} else if (charge == 0) {
							if (otherCharge != null) {
								charge = otherCharge;
								System.out.println("自助未充值的余额" + oldCostBalance);
								// 余额和充值金额想加为新的余额
								costBalance = oldCostBalance + otherCharge;
								System.out.println("自助充值后的余额" + costBalance);
								//用户姓名
								realName=mobileCardService.findMobileCardByPhoneNumber(phoneNumber).getRealName();
								System.out.println(realName);
								// 调用数据库修改
								phoneNumberAndCostblance.setCostBalance(costBalance);
								phoneNumberAndCostblance.setPhoneNumber(phoneNumber);
								rechargeService.updateCostBalance(phoneNumberAndCostblance);
								System.out.println("自助修改余额成功准备跳转支付界面22222");
								// 插入充值记录表
								rechargeRecord.setAddIntegral(charge);// 增加的积分
								rechargeRecord.setRechargeMoney(charge);// 充值的金额
								rechargeRecord.setRechargePhoneNumber(phoneNumber);// 充值的手机号码
								rechargeRecord.setUserId(rechargeRecordService
										.findUserIdByPhoneNumber(phoneNumber).getUserId());// 用户id
								rechargeRecord.setRechargeTime(date);// 充值的时间
								rechargeRecord.setAreaId(areaId);
								rechargeRecordService.insertRecord(rechargeRecord);
								session.put("charge", otherCharge);
								
								return SUCCESS;
							} else {
								tip = "充值金额不能为0";
								return ERROR;
							}

						}
					} else if (pay == 2) {
						// 判断充值卡是否存在
						System.out.println("充值卡账号"+ prepaidCardService
								.findPrepaidCardByPrepaidCardId(prepaidCardId));
						if (prepaidCardService.findPrepaidCardByPrepaidCardId(prepaidCardId) != null) {
							System.out.println("账号正确"+ prepaidCardService.findPrepaidCardByPrepaidCardId(prepaidCardId));
							// 如果存在查询充值卡状态
							prepaidCardState = prepaidCardService.findPrepaidCardByPrepaidCardId(prepaidCardId)
									.getPrepaidCardState();
							System.out.println(prepaidCardState);
							if (prepaidCardState.equals("已售")) {
								// 充值卡未被使用，判断充值密码
								if (prepaidCardService.findPrepaidCardByPrepaidCardId(prepaidCardId)
										.getPrepaidCardPassword().equals(prepaidCardPassword)) {
									System.out.println("密码正确");
									tip = "账号密码正确";
									// 查询面值
									charge = prepaidCardService.findPrepaidCardByPrepaidCardId(prepaidCardId).getFaceValue();
									System.out.println("充值的面额aaaaa" + charge);
									// 余额为充值金额+手机余额
									costBalance = oldCostBalance + charge;
									System.out.println("充值卡充值后的余额aaaaa"+ costBalance);
									realName=mobileCardService.findMobileCardByPhoneNumber(phoneNumber).getRealName();
									phoneNumberAndCostblance.setCostBalance(costBalance);
									phoneNumberAndCostblance.setPhoneNumber(phoneNumber);
									// 修改手机的余额
									rechargeService.updateCostBalance(phoneNumberAndCostblance);
									// 修改充值的状态为已使用
									prepaidCardState = "已使用";
									prepaidCardService.updatePrepaidCardStateByPrepaidCardId(PrepaidCardIdAndPsw);
									// 插入充值记录表
									rechargeRecord.setAddIntegral(charge);// 增加的积分
									rechargeRecord.setRechargeMoney(charge);// 充值的金额
									rechargeRecord.setRechargePhoneNumber(phoneNumber);// 充值的手机号码
									rechargeRecord.setUserId(rechargeRecordService.findUserIdByPhoneNumber(phoneNumber).getUserId());// 用户id
									rechargeRecord.setRechargeTime(date);// 充值的时间
									rechargeRecord.setAreaId(areaId);
									rechargeRecordService.insertRecord(rechargeRecord);
									
									session.put("charge", charge);
									session.put("costBalance", costBalance);
									System.out.println("充值后的余额bbbbb"+ rechargeService.selectCostBalance(phoneNumber));
									System.out.println("账号密码正确");
									return SUCCESS;
								} else {
									tip = "充值卡密码有误";
									System.out.println("充值卡密码有误");
									return ERROR;
								}
							} else {
								tip = "充值卡已被使用";
								System.out.println("充值卡已被使用");
								return ERROR;
							}

						} else {
							tip = "充值卡账号有误";
							System.out.println("充值卡账号有误");
							return ERROR;
						}
					}
				} else {
					tip = "电话号码有误";
					return ERROR;
				}
			
		} catch (Exception e) {
		}
		return SUCCESS;
	}

	public String rechargeByCard() {
		try {
			Date date = new Date();// 创建一个时间对象，获取到当前的时间
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");// 设置时间显示格式
			String rechargeTime = sdf.format(date);// 将当前时间格式化为需要的类型
			System.out.println(rechargeTime + "carpay");// 输出结果
			//查询充值的手机卡是否存在
			if (mobileCardService.findMobileCardByPhoneNumber(phoneNumber) != null) {
				//判断充值卡是否存在
				if (prepaidCardService.findPrepaidCardByPrepaidCardId(prepaidCardId)!=null) {
					// 判断充值卡状态
					prepaidCardState = prepaidCardService.findPrepaidCardByPrepaidCardId(prepaidCardId).getPrepaidCardState();
					if (prepaidCardState.equals("已售")) {
						// 判断充值卡的密码是否正确
						if (prepaidCardService.findPrepaidCardByPrepaidCardId(
								prepaidCardId).getPrepaidCardPassword() == prepaidCardPassword) {
							System.out.println("账号密码正确pppp");
							// 面值即为充值金额
							charge = prepaidCardService.findPrepaidCardByPrepaidCardId(prepaidCardId).getFaceValue();
							System.out.println(charge + 1111111);
							// 修改账户余额
							oldCostBalance = rechargeService.selectCostBalance(phoneNumber);
							costBalance = charge + oldCostBalance;
							System.out.println(costBalance + 222222222);
							//电话卡用户姓名
							realName=mobileCardService.findMobileCardByPhoneNumber(phoneNumber).getRealName();
							// 修改充值卡状态
							prepaidCardState = "已使用";
							PrepaidCardIdAndPsw.setPrepaidCardState(prepaidCardState);
							System.out.println(PrepaidCardIdAndPsw.getPrepaidCardState()+"状态");
							PrepaidCardIdAndPsw.setPrepaidCardId(prepaidCardId);
							System.out.println(PrepaidCardIdAndPsw.getPrepaidCardId()+"卡号");
							prepaidCardService.updatePrepaidCardStateByPrepaidCardId(PrepaidCardIdAndPsw);
							// 插入充值记录表
							rechargeRecord.setAddIntegral(charge);// 增加的积分
							rechargeRecord.setRechargeMoney(charge);// 充值的金额
							rechargeRecord.setRechargePhoneNumber(phoneNumber);// 充值的手机号码
							rechargeRecord.setUserId(rechargeRecordService.findUserIdByPhoneNumber(phoneNumber).getUserId());// 用户id
							rechargeRecord.setRechargeTime(date);// 充值的时间
							rechargeRecord.setAreaId(areaId);
							rechargeRecordService.insertRecord(rechargeRecord);
							return SUCCESS;
						} else {
							cardTip="充值卡密码错误";
							System.out.println("充值卡密码错误pppp");
							return ERROR;
						}
					} else {
						cardTip = "充值卡不存在";
						System.out.println("充值卡不存在");
						return ERROR;
					}
				}else {
					cardTip = "充值卡不存在";
					System.out.println("充值卡不存在");
					return ERROR;
				}				

			} else {
				System.out.println("电话号码不存在");
				cardTip = "电话号码不存在";
				return ERROR;
			}
		} catch (Exception e) {
		}
		return SUCCESS;
	}

	// 返回在线充值界面
	public String toreturn1() {
		return SUCCESS;
	}

	// 返回卡充值界面
	public String toreturn2() {
		return SUCCESS;
	}

	// 跳转在线充值界面
	public String onlineRecharge() {
		return SUCCESS;
	}

	// 跳转卡充值界面界面
	public String prepaidCardRecharge() {
		return SUCCESS;
	}

	// 跳转购买充值卡界面
	public String buyPrepaidCard() {
		return SUCCESS;
	}

	// 跳转充值查询记录界面
	public String rechargeRecord() {
		return SUCCESS;
	}

	// iframe到frameset
	public String iframeToFrameset() {
		return SUCCESS;
	}

	// 右侧跳转到在线支付
	public String toOnline() {
		return SUCCESS;
	}

	// 右侧跳转购买充值卡
	public String toBuyPrepaid() {
		return SUCCESS;
	}

	// frameset顶部
	public String toup() {
		return SUCCESS;
	}

	// frameset左部
	public String toleft() {
		return SUCCESS;
	}

	// frameset右部
	public String toright() {
		return SUCCESS;
	}

	// frameset底部
	public String todown() {
		return SUCCESS;
	}

	// 跳转话费查询界面
	public String tosearchCostbalance() {
		return SUCCESS;
	}

	public String mainTorecharge() {
		return SUCCESS;
	}

	public Integer getOldCostBalance() {
		return oldCostBalance;
	}

	public void setOldCostBalance(Integer oldCostBalance) {
		this.oldCostBalance = oldCostBalance;
	}

	public Integer getCostBalance() {
		return costBalance;
	}

	public void setCostBalance(Integer costBalance) {
		this.costBalance = costBalance;
	}

	public Integer getCharge() {
		return charge;
	}

	public void setCharge(Integer charge) {
		this.charge = charge;
		System.out.println(charge);
	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
		System.out.println(phoneNumber);
	}

	public String getTip() {
		return tip;
	}

	public void setTip(String tip) {
		this.tip = tip;
	}

	public Integer getPay() {
		return pay;
	}

	public void setPay(Integer pay) {
		this.pay = pay;
		System.out.println(pay);
	}

	public Integer getOtherCharge() {
		return otherCharge;
	}

	public void setOtherCharge(Integer otherCharge) {
		this.otherCharge = otherCharge;
	}

	public Integer getPrepaidCardId() {
		return prepaidCardId;
	}

	public void setPrepaidCardId(Integer prepaidCardId) {
		this.prepaidCardId = prepaidCardId;
	}

	public Integer getPrepaidCardPassword() {
		return prepaidCardPassword;
	}

	public void setPrepaidCardPassword(Integer prepaidCardPassword) {
		this.prepaidCardPassword = prepaidCardPassword;
	}

	public IRechargeService getRechargeService() {
		return rechargeService;
	}

	public void setRechargeService(IRechargeService rechargeService) {
		this.rechargeService = rechargeService;
	}

	public IPrepaidCardService getPrepaidCardService() {
		return prepaidCardService;
	}

	public void setPrepaidCardService(IPrepaidCardService prepaidCardService) {
		this.prepaidCardService = prepaidCardService;
	}

	

	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public IMobileCardService getMobileCardService() {
		return mobileCardService;
	}

	public void setMobileCardService(IMobileCardService mobileCardService) {
		this.mobileCardService = mobileCardService;
	}

	public Date getRechargeTime() {
		return rechargeTime;
	}

	public void setRechargeTime(Date rechargeTime) {
		this.rechargeTime = rechargeTime;
	}

	public IRechargeRecordService getRechargeRecordService() {
		return rechargeRecordService;
	}

	public void setRechargeRecordService(
			IRechargeRecordService rechargeRecordService) {
		this.rechargeRecordService = rechargeRecordService;
	}

	public RechargeRecord getRechargeRecord() {
		return rechargeRecord;
	}

	public void setRechargeRecord(RechargeRecord rechargeRecord) {
		this.rechargeRecord = rechargeRecord;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getPrepaidCardState() {
		return prepaidCardState;
	}

	public void setPrepaidCardState(String prepaidCardState) {
		this.prepaidCardState = prepaidCardState;
	}

	public String getCardTip() {
		return cardTip;
	}

	public void setCardTip(String cardTip) {
		this.cardTip = cardTip;
	}

	public PrepaidCardIdAndPsw getPrepaidCardIdAndPsw() {
		return PrepaidCardIdAndPsw;
	}

	public void setPrepaidCardIdAndPsw(PrepaidCardIdAndPsw prepaidCardIdAndPsw) {
		PrepaidCardIdAndPsw = prepaidCardIdAndPsw;
	}

	public Integer getAreaId() {
		return areaId;
	}

	public void setAreaId(Integer areaId) {
		this.areaId = areaId;
	}


}
