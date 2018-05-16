package com.model.pojo;

/**
 * 用户
 * 
 * @author CHIN
 *
 */
public class User {

	private Integer userId;// 用户Id
	private String userNickname;// 昵称
	private String userRealname;// 真实姓名
	private String userSex;// 用户性别
	private Integer userAge;// 用户年龄
	private String userPwd;// 密码
	private String userPhotoPath;// 头像路径
	private String userAddress;// 用户地址
	private String userIdCard;// 身份证
	private String userEmail;// 邮箱

	public User() {
	}

	public User(Integer userId, String userNickname, String userRealname,
			String userSex, Integer userAge, String userPwd,
			String userPhotoPath, String userAddress, String userIdCard,
			String userEmail) {
		super();
		this.userId = userId;
		this.userNickname = userNickname;
		this.userRealname = userRealname;
		this.userSex = userSex;
		this.userAge = userAge;
		this.userPwd = userPwd;
		this.userPhotoPath = userPhotoPath;
		this.userAddress = userAddress;
		this.userIdCard = userIdCard;
		this.userEmail = userEmail;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserNickname() {
		return userNickname;
	}

	public void setUserNickname(String userNickname) {
		this.userNickname = userNickname;
	}

	public String getUserRealname() {
		return userRealname;
	}

	public void setUserRealname(String userRealname) {
		this.userRealname = userRealname;
	}

	public String getUserSex() {
		return userSex;
	}

	public void setUserSex(String userSex) {
		this.userSex = userSex;
	}

	public Integer getUserAge() {
		return userAge;
	}

	public void setUserAge(Integer userAge) {
		this.userAge = userAge;
	}

	public String getUserPwd() {
		return userPwd;
	}

	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}

	public String getUserPhotoPath() {
		return userPhotoPath;
	}

	public void setUserPhotoPath(String userPhotoPath) {
		this.userPhotoPath = userPhotoPath;
	}

	public String getUserAddress() {
		return userAddress;
	}

	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}

	public String getUserIdCard() {
		return userIdCard;
	}

	public void setUserIdCard(String userIdCard) {
		this.userIdCard = userIdCard;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

}
