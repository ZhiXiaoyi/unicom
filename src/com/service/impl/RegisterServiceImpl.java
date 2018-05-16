package com.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dao.MobileCardMapper;
import com.dao.UserMapper;
import com.model.pojo.MobileCard;
import com.model.pojo.User;
import com.service.IRegisterService;

@Service
@Transactional(readOnly = true)
// 事务
public class RegisterServiceImpl implements IRegisterService {

	@Resource
	private UserMapper userMapper;// 用户Mapper
	@Resource
	private MobileCardMapper mobileCardMapper;// 手机Mapper

	@Override
	public boolean addUser(User user) {
		// try{
		userMapper.addUser(user);
		// }catch(Exception e){
		// return false;
		// }
		return true;
	}

	@Override
	public User findUserByEmail(String userEmail) {
		return userMapper.findUserByEmail(userEmail);
	}

	@Override
	public boolean updateUserAndMobileCardUserId(User user, Long phoneNumber) {
		// 先通过身份证和手机号码查询手机号是否已经绑定用户
		try {
			MobileCard mobileCard = mobileCardMapper
					.findMobileCardByPhoneNumberAndIdCard(phoneNumber,
							user.getUserIdCard());
			if (mobileCard != null) {
				// 更新手机卡的用户id
				if (mobileCardMapper.updateMobileCardUserId(user.getUserId(),phoneNumber)) {
					// 更新用户的信息
					userMapper.updateUser(user);
					return true;
				}
			}

		} catch (Exception e) {

		}
		return false;
	}

	@Override
	public boolean updateUser(User user) {
		try{
		userMapper.updateUser(user);
		}catch(Exception e){
			return false;
		}
		return true;
	}

}
