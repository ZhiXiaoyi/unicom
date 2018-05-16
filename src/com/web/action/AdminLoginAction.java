package com.web.action;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;

import com.model.pojo.Admin;
import com.service.ILoginService;

@SuppressWarnings("serial")
@Controller
public class AdminLoginAction extends BaseAction {

	private Admin admin;
	private String tips;
	private String verifyCode;

	// 这里的file要和log4j.properties里的配置一致，否则写不到文件中
	private static Logger log = Logger.getLogger("file");

	// 注入
	@Resource
	private ILoginService loginService;

	@Override
	public String execute() {
		try {
			// 验证码是需要有优先验证的故放在最前面
			// 从session中取出生成的验证码
			String imageCode = (String) session.get("imageCode");
			// 验证用户输入的验证码是否与生成验证码一致
			if (imageCode == null || !imageCode.equalsIgnoreCase(verifyCode)) {
				// 如果不一致，提示错误
				tips = "输入的验证码有误";
				// return ERROR;
			}
			Admin user = null;
			user = loginService.findAdminByName(admin.getAdminName());
			if (user == null) {
				tips = "输入的姓名不存在";
				return ERROR;
			} else {
				if (admin.getAdminPassword().equals(user.getAdminPassword())) {
					// 如果密码一致，校验成功
					session.put("admin", user);
					return SUCCESS;
				} else {
					tips = "输入的密码有误.";
					return ERROR;
				}
			}
		} catch (Exception e) {
			log.error(e);
		}
		return ERROR;
	}
	public String outLogin(){
		session.remove("admin");
		return "success";
	}
	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	public String getTips() {
		return tips;
	}

	public void setTips(String tips) {
		this.tips = tips;
	}

	public ILoginService getLoginService() {
		return loginService;
	}

	public void setLoginService(ILoginService loginService) {
		this.loginService = loginService;
	}

	public String getVerifyCode() {
		return verifyCode;
	}

	public void setVerifyCode(String verifyCode) {
		this.verifyCode = verifyCode;
	}

}
