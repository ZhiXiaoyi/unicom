package com.web.action;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;

import com.model.pojo.MobileCard;
import com.model.pojo.User;
import com.service.ILoginService;

@SuppressWarnings("serial")
@Controller
public class UserLoginAction extends BaseAction {

	/**
	 * 返回的登录结果信息 100：验证码输入错误 101：邮箱不存在 102：邮箱密码输入有误 103：手机号不存在 104：请重新输入登录信息
	 * 105：手机号密码输入有误
	 */
	private String errorMsg;
	private String userLoginAccount;// 登录框的信息
	private String userLoginPwd;// 密码框的信息
	private String verifyCode;// 验证码信息

	private User user;// 当前登录用户
	private MobileCard mobileCard;// 当前登录电话卡

	// 这里的file要和log4j.properties里的配置一致，否则写不到文件中
	private static Logger log = Logger.getLogger(UserLoginAction.class);

	// 注入
	@Resource
	private ILoginService loginService;

	@Override
	public String execute() throws Exception {
		errorMsg = "";
		return super.execute();
	}

	/**
	 * 用户登录
	 * 
	 * @return 结果信息
	 */
	public String userLogin() {
		try {
			// 验证码是需要有优先验证的故放在最前面
			// 从session中取出生成的验证码
			String imageCode = (String) session.get("imageCode");
			if (!imageCode.equalsIgnoreCase(verifyCode)) {
				errorMsg = "100";
				// return ERROR;
			}
			// 判断是邮箱登录还是手机号登录
			if(userLoginAccount!=null){
				if (userLoginAccount.contains("@")) {
					// 邮箱登录
					return this.emailLogin();
				} else {
					// 手机号登录
					return this.phoneNumberLogin();
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		return ERROR;

	}

	/**
	 * 用户退出登录
	 * 
	 * @return
	 */
	public String userLogout() {
		try {
			session.remove("user");
			try {
				session.remove("mobileCard");
			} catch (Exception e) {
			}
		} catch (Exception e) {
		}
		return SUCCESS;
	}

	/**
	 * 判断是否登录的方法
	 * 
	 * @return
	 */
	public String isUserLogin() {
		String result = "";
		try {
			User loginUser = (User) session.get("user");
			if(loginUser==null){
				result=ERROR;
			}else{
				result=SUCCESS;
			}
		} catch (Exception e) {
			result=ERROR;
		}
		return result;
	}
	
	/**
	 * 更新当前用户
	 * @return
	 */
	public String newMyInformation(){
		
		try {
			User oldUser =(User)session.get("user");
			User newUser=loginService.findUserByUserId(oldUser.getUserId());
			session.put("user", newUser);
		} catch (Exception e) {

		}
		return SUCCESS;
	}

	/**
	 * 邮箱登录验证方法
	 * 
	 * @return
	 */
	private String emailLogin() {
		try {
			user = loginService.findUserByEmail(userLoginAccount);
			if (user == null) {
				errorMsg = "101";
				return ERROR;
			}
			// 验证邮箱用户密码
			if (user.getUserPwd().endsWith(userLoginPwd)) {
				// 如果密码一致，校验成功
				session.put("user", user);
				mobileCard=loginService.findMobileCardByUserId(user.getUserId());
				if(mobileCard!=null){
					session.put("mobileCard", mobileCard);
				}
				errorMsg = "";
				return LOGIN;
			}
			errorMsg = "102";
			return ERROR;
		} catch (Exception e) {
			errorMsg = "104";
			e.printStackTrace();
			return ERROR;
		}
	}

	/**
	 * 手机号登录的方法
	 * 
	 * @return
	 */
	private String phoneNumberLogin() {
		try {
			Long phoneNumber = Long.parseLong(userLoginAccount);
			mobileCard = loginService.findMobileCardByPhoneNumber(phoneNumber);
			if (mobileCard == null) {
				errorMsg = "103";
				return ERROR;
			}
			// 验证手机号用户密码
			if (mobileCard.getServicePwd().equals(new Integer(userLoginPwd))) {
				// 如果密码一致，校验成功
				try {
					Integer userId = mobileCard.getUserId();
					// 通过userId得到user对象
					user = loginService.findUserByUserId(userId);
					session.put("user", user);
				} catch (Exception e) {
					errorMsg = "104";
					return ERROR;
				}
				session.put("mobileCard", mobileCard);
				errorMsg = "";
				return LOGIN;
			}
			errorMsg = "105";
			return ERROR;
		} catch (Exception e) {
			errorMsg = "104";
			return ERROR;
		}
	}

	public String getUserLoginAccount() {
		return userLoginAccount;
	}

	public void setUserLoginAccount(String userLoginAccount) {
		this.userLoginAccount = userLoginAccount;
	}

	public String getUserLoginPwd() {
		return userLoginPwd;
	}

	public void setUserLoginPwd(String userLoginPwd) {
		this.userLoginPwd = userLoginPwd;
	}

	public String getVerifyCode() {
		return verifyCode;
	}

	public void setVerifyCode(String verifyCode) {
		this.verifyCode = verifyCode;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public static Logger getLog() {
		return log;
	}

	public static void setLog(Logger log) {
		UserLoginAction.log = log;
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}

	public MobileCard getMobileCard() {
		return mobileCard;
	}

	public void setMobileCard(MobileCard mobileCard) {
		this.mobileCard = mobileCard;
	}

	public ILoginService getLoginService() {
		return loginService;
	}

	public void setLoginService(ILoginService loginService) {
		this.loginService = loginService;
	}

}
