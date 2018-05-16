package com.web.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Controller;

import com.model.pojo.User;
import com.service.IRegisterService;

@Controller
@SuppressWarnings("serial")
public class UserRegisterAction extends BaseAction {

	/**
	 * 返回的注册结果信息 100：验证码输入错误 101：邮箱用户已存在 102:两次密码不一致 103：请重新输入注册信息
	 */
	private String errorMsg;
	private String inputUserEmail;// 注册邮箱信息
	private String inputUserPwd;// 注册密码信息
	private String inputUserPwdCfm;// 确认注册密码信息
	private String inputverifyCode;// 验证码信息
	private User user;

	private Integer nowUserId;// 用戶id
	private String nickName;// 昵称
	private String gender;// 性别组
	private Integer age;// 年龄
	private String realName;// 真实姓名
	private Long phoneNumber;// 手机号码
	private String address;// 常住地址
	private String certificateNumber;// 身份证号码
	private String userEmail;// 邮箱
	private String userNewPhotoPath;// 用户头像

	// myFile属性用来封装上传的文件
	private File myFile;
	// myFileContentType属性用来封装上传文件的类型
	private String myFileContentType;
	// myFileFileName属性用来封装上传文件的文件名
	private String myFileFileName;
	private String path;// 照片的绝对路径
	private InputStream imageStream;
	private Map<String, String> dataMap = new HashMap<String, String>();// ajax的返回值


	@Resource
	private IRegisterService registerService;

	@Override
	public String execute() throws Exception {

		errorMsg = "";
		return super.execute();
	}

	/**
	 * 开始注册
	 * 
	 * @return
	 */
	public String starRegister() {
		
		try {
			// 验证码是需要有优先验证的故放在最前面
			// 从session中取出生成的验证码
			String imageCode = (String) session.get("imageCode");
			if (!imageCode.equalsIgnoreCase(inputverifyCode)) {
				errorMsg = "100";
				// return ERROR;
			}
			// 查询用户是否存在
			user = registerService.findUserByEmail(inputUserEmail);
			if (user != null) {
				errorMsg = "101";
				return ERROR;
			} else {
				// 再次检查两次密码是否一致
				if (inputUserPwd.endsWith(inputUserPwdCfm)) {
					user = new User();
					user.setUserEmail(inputUserEmail);
					user.setUserPwd(inputUserPwd);
					// 数据库添加用户并返回结果
					if (registerService.addUser(user)) {
						return SUCCESS;
					}
					;
				} else {
					errorMsg = "102";
					return ERROR;
				}
			}
			errorMsg = "103";
		} catch (Exception e) {
		}
		return ERROR;
	}

	/**
	 * 修改用户信息
	 * 
	 * @return
	 */
	public String updateUserInfo() {
		String result = "";
		try {
		user = (User) session.get("user");
		// 判断输入的邮箱是否有变动
		if (userEmail.endsWith(user.getUserEmail())) {
		} else {
			if (this.isUserExisted(userEmail)) {
				// 修改失败，邮箱重复
				dataMap.put("message", "1");
				return ERROR;
			}
		}
		User updateUser = new User(nowUserId, nickName, realName, gender, age,
				null, null, address, certificateNumber, userEmail);
	
			if (registerService.updateUserAndMobileCardUserId(updateUser,
					phoneNumber)) {
				// 修改成功
				dataMap.put("message", "0");
				result = SUCCESS;
			} else {
				// 修改失败，邮箱或手机号或身份信息有误重复
				dataMap.put("message", "1");
				result = ERROR;
			}
		} catch (Exception e) {
			// e.printStackTrace();
		}
		return result;
	}

	/**
	 * 修改用户头像信息
	 * 
	 * @return
	 */
	public String updateUserPhotoPath() {
		
		// 基于myFile创建一个文件输入流
		try {
			InputStream is = new FileInputStream(myFile);
			// 设置上传文件目录
			String uploadPath = ServletActionContext.getServletContext()
					.getRealPath("/upload");
			// 设置目标文件
			File toFile = new File(uploadPath, this.getMyFileFileName());
			path = uploadPath + "\\" + this.getMyFileFileName();
			// 创建一个输出流
			OutputStream os = new FileOutputStream(toFile);
			// 设置缓存
			byte[] buffer = new byte[1024];
			int length = 0;
			// 读取myFile文件输出到toFile文件中
			while ((length = is.read(buffer)) > 0) {
				os.write(buffer, 0, length);
			}
			System.out.println("上传文件名" + myFileFileName);
			System.out.println("上传文件类型" + myFileContentType);
			System.out.println(path);
			// 关闭输入流
			is.close();
			// 关闭输出流
			os.close();

			// 修改个人信息的头像数据
			userNewPhotoPath=path;
			User nowUser = (User) session.get("user");
			nowUser.setUserPhotoPath(userNewPhotoPath);
			if (registerService.updateUser(nowUser)) {
				session.put("user", nowUser);
				dataMap.put("userPhotoPath", userNewPhotoPath);
				dataMap.put("message", "0");
				return SUCCESS;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		// 请重新选择文件,修改失败
		dataMap.put("message", "2");
		return ERROR;
	}

	/**
	 * 判断邮箱是否已经存在
	 * 
	 * @return
	 */
	private boolean isUserExisted(String nowUserMail) {
		// 查询用户是否存在
		user = registerService.findUserByEmail(nowUserMail);

		if (user != null) {
			return true;
		}
		return false;
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}

	public String getInputUserEmail() {
		return inputUserEmail;
	}

	public void setInputUserEmail(String inputUserEmail) {
		this.inputUserEmail = inputUserEmail;
	}

	public String getInputUserPwd() {
		return inputUserPwd;
	}

	public void setInputUserPwd(String inputUserPwd) {
		this.inputUserPwd = inputUserPwd;
	}

	public String getInputverifyCode() {
		return inputverifyCode;
	}

	public void setInputverifyCode(String inputverifyCode) {
		this.inputverifyCode = inputverifyCode;
	}

	public String getInputUserPwdCfm() {
		return inputUserPwdCfm;
	}

	public void setInputUserPwdCfm(String inputUserPwdCfm) {
		this.inputUserPwdCfm = inputUserPwdCfm;
	}

	public String getNickName() {
		return nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCertificateNumber() {
		return certificateNumber;
	}

	public void setCertificateNumber(String certificateNumber) {
		this.certificateNumber = certificateNumber;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public IRegisterService getRegisterService() {
		return registerService;
	}

	public void setRegisterService(IRegisterService registerService) {
		this.registerService = registerService;
	}

	public Integer getNowUserId() {
		return nowUserId;
	}

	public void setNowUserId(Integer nowUserId) {
		this.nowUserId = nowUserId;
	}

	public Map<String, String> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, String> dataMap) {
		this.dataMap = dataMap;
	}

	public String getUserNewPhotoPath() {
		return userNewPhotoPath;
	}

	public void setUserNewPhotoPath(String userNewPhotoPath) {
		this.userNewPhotoPath = userNewPhotoPath;
	}



	public String getMyFileContentType() {
		return myFileContentType;
	}

	public void setMyFileContentType(String myFileContentType) {
		this.myFileContentType = myFileContentType;
	}

	public String getMyFileFileName() {
		return myFileFileName;
	}

	public void setMyFileFileName(String myFileFileName) {
		this.myFileFileName = myFileFileName;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public InputStream getImageStream() {
		return imageStream;
	}

	public void setImageStream(InputStream imageStream) {
		this.imageStream = imageStream;
	}

	public File getMyFile() {
		return myFile;
	}

	public void setMyFile(File myFile) {
		this.myFile = myFile;
	}
}
