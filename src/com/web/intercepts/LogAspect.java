package com.web.intercepts;

import java.util.Map;
import javax.annotation.Resource;
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import com.model.pojo.Log;
import com.model.pojo.User;
import com.opensymphony.xwork2.ActionContext;
import com.service.ILogService;

@Aspect
@Component
public class LogAspect {

	private User user = null;

	private Log log = new Log();
	@Resource
	private ILogService logService;

	/**
	 * 环绕通知需要携带 ProceedingJoinPoint 类型的参数. 环绕通知类似于动态代理的全过程: ProceedingJoinPoint
	 * 类型的参数可以决定是否执行目标方法. 且环绕通知必须有返回值, 返回值即为目标方法的返回值 用户登录的环绕通知
	 */
	@Around("execution(* com.web.action.UserLoginAction.userLogin())")
	public Object aroundUserLogin(ProceedingJoinPoint pjd) {

		Map<String, Object> session = ActionContext.getContext().getSession();

		user = (User) session.get("user");
		// MobileCard mobileCard = (MobileCard)session.get("mobileCard");

		Object result = null;
		// 得到执行的actionName
		String className = pjd.getSignature().getDeclaringTypeName();
		// String methodName = pjd.getSignature().getName();

		try {
			// // 前置通知
			// String beforeStr="The class" + className + "The method "+
			// methodName + " begins with "+ Arrays.asList(pjd.getArgs());
			// this.writeLog(user, beforeStr);

			// 执行目标方法
			result = pjd.proceed();

		} catch (Throwable e) {
			// 异常通知
			String exception = "登录失败";
			this.writeLog(user, exception);
			// String ee=(new RuntimeException(e)).toString();
			LogFactory.getLog(className).error("发生异常错误");

		}
		// 后置通知
		String resultStr = null;
		// 方法执行结束的session里面含有用户
		Map<String, Object> session2 = ActionContext.getContext().getSession();

		user = (User) session2.get("user");
		if (result.toString().equals("login")) {
			// 返回通知
			resultStr = "登录成功";

		} else {
			resultStr = "登录失败";
		}
		this.writeLog(user, resultStr);
		return result;
	}

	/**
	 * 用户充值通知
	 * 
	 * @param pjd
	 * @return
	 */
	@Around("execution(* com.web.action.RechargeAction.recharge*())")
	public Object aroundRecharge(ProceedingJoinPoint pjd) {

		Map<String, Object> session = ActionContext.getContext().getSession();
		user = (User) session.get("user");
		Object result = null;
		// 得到执行的actionName
		String className = pjd.getSignature().getDeclaringTypeName();
		try {
			// 执行目标方法
			result = pjd.proceed();
			String resultStr = null;
			if (result.toString().equals("success")) {
				// 返回通知
				resultStr = "手机缴费充值成功";

			} else {
				resultStr = "手机缴费充值失败";
			}
			this.writeLog(user, resultStr);
		} catch (Throwable e) {
			// 异常通知
			String exception = "手机缴费充值失败";
			this.writeLog(user, exception);
			LogFactory.getLog(className).error("发生异常错误");
		}
		return result;
	}

	/**
	 * 用户充值通知
	 * 
	 * @param pjd
	 * @return
	 */
	@Around("execution(* com.web.action.RechargeAction.rechargeByCard*())")
	public Object aroundRechargeByCard(ProceedingJoinPoint pjd) {

		Map<String, Object> session = ActionContext.getContext().getSession();
		user = (User) session.get("user");
		Object result = null;
		// 得到执行的actionName
		String className = pjd.getSignature().getDeclaringTypeName();
		try {
			// 执行目标方法
			result = pjd.proceed();
			String resultStr = null;
			if (result.toString().equals("success")) {
				// 返回通知
				resultStr = "电子卡缴费充值成功";

			} else {
				resultStr = "电子卡缴费充值失败";
			}
			this.writeLog(user, resultStr);
		} catch (Throwable e) {
			// 异常通知
			String exception = "电子卡缴费充值失败";
			this.writeLog(user, exception);
			LogFactory.getLog(className).error("发生异常错误");
		}
		return result;
	}

	/**
	 * 用户查询话费通知
	 * 
	 * @param pjd
	 * @return
	 */
	@Around("execution(* com.web.action.SearchCostbalanceAction.searchCostbalance())")
	public Object aroundSearchCostbalance(ProceedingJoinPoint pjd) {

		Map<String, Object> session = ActionContext.getContext().getSession();
		user = (User) session.get("user");
		Object result = null;
		// 得到执行的actionName
		String className = pjd.getSignature().getDeclaringTypeName();
		try {
			// 执行目标方法
			result = pjd.proceed();
			String resultStr = null;
			if (result.toString().equals("success")) {
				// 返回通知
				resultStr = "查询话费成功";

			} else {
				resultStr = "查询话费失败";
			}
			this.writeLog(user, resultStr);
		} catch (Throwable e) {
			// 异常通知
			String exception = "查询话费失败";
			this.writeLog(user, exception);
			LogFactory.getLog(className).error("发生异常错误");
		}
		return result;
	}

	/**
	 * 用户查询积分通知
	 * 
	 * @param pjd
	 * @return
	 */
	@Around("execution(* com.web.action.SearchRemainingScoreAction.search())")
	public Object aroundSearchRemainingScore(ProceedingJoinPoint pjd) {

		Map<String, Object> session = ActionContext.getContext().getSession();
		user = (User) session.get("user");
		Object result = null;
		// 得到执行的actionName
		String className = pjd.getSignature().getDeclaringTypeName();
		try {
			// 执行目标方法
			result = pjd.proceed();
			String resultStr = null;
			if (result.toString().equals("success")) {
				// 返回通知
				resultStr = "查询积分成功";

			} else {
				resultStr = "查询积分失败";
			}
			this.writeLog(user, resultStr);
		} catch (Throwable e) {
			// 异常通知
			String exception = "查询积分失败";
			this.writeLog(user, exception);
			LogFactory.getLog(className).error("发生异常错误");
		}
		return result;
	}

	/**
	 * 用户购买电子卡通知
	 * 
	 * @param pjd
	 * @return
	 */
	@Around("execution(* com.web.action.PrepaidCardAction.buyPrepadiCard())")
	public Object aroundPrepaidCard(ProceedingJoinPoint pjd) {

		Map<String, Object> session = ActionContext.getContext().getSession();
		user = (User) session.get("user");
		Object result = null;
		// 得到执行的actionName
		String className = pjd.getSignature().getDeclaringTypeName();
		try {
			// 执行目标方法
			result = pjd.proceed();
			String resultStr = null;
			if (result.toString().equals("success")) {
				// 返回通知
				resultStr = "购买电子卡成功";

			} else {
				resultStr = "购买电子卡失败";
			}
			this.writeLog(user, resultStr);
		} catch (Throwable e) {
			// 异常通知
			String exception = "购买电子卡失败";
			this.writeLog(user, exception);
			LogFactory.getLog(className).error("发生异常错误");
		}
		return result;
	}

	/**
	 * 用户积分购买商品通知
	 * 
	 * @param pjd
	 * @return
	 */
	@Around("execution(* com.web.action.StoreAction.markOrder())")
	public Object aroundMarkOrder(ProceedingJoinPoint pjd) {

		Map<String, Object> session = ActionContext.getContext().getSession();
		user = (User) session.get("user");
		Object result = null;
		// 得到执行的actionName
		String className = pjd.getSignature().getDeclaringTypeName();
		try {
			// 执行目标方法
			result = pjd.proceed();
			String resultStr = null;
			if (result.toString().equals("success")) {
				// 返回通知
				resultStr = "积分购买商品成功";

			} else {
				resultStr = "积分购买商品失败";
			}
			this.writeLog(user, resultStr);
		} catch (Throwable e) {
			// 异常通知
			String exception = "积分购买商品失败";
			this.writeLog(user, exception);
			LogFactory.getLog(className).error("发生异常错误");
		}
		return result;
	}

	/**
	 * 写日志
	 * 
	 * @param user
	 * @param logStr
	 */
	private void writeLog(User user, String logStr) {

		if (user != null) {
			log.setUserId(user.getUserId());
		}
		log.setLogOperation(logStr);
		logService.insertLog(log);
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Log getLog() {
		return log;
	}

	public void setLog(Log log) {
		this.log = log;
	}

	public ILogService getLogService() {
		return logService;
	}

	public void setLogService(ILogService logService) {
		this.logService = logService;
	}

}
