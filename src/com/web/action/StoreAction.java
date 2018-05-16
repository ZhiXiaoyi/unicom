package com.web.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import com.model.Page;
import com.model.pojo.Commodity;
import com.model.pojo.HarvestAddressInfo;
import com.model.pojo.MobileCard;
import com.model.pojo.Order;
import com.service.ICommodityService;
import com.service.IMobileCardService;
import com.service.IOrderService;

@SuppressWarnings("serial")
@Controller
public class StoreAction extends BaseAction {

	private Commodity commodity;// 商品对象
	private Order order;//订单对象
	private HarvestAddressInfo harvestAddressInfo;//收货信息对象
	private Integer commodityNumber;//商品Id
	private Integer userId;//用户ID
	private MobileCard mobileCard;//手机卡对象
	private Page page;// 分页类
	private Integer pageIndex;// 当前页
	private Integer pageSize = 15;// 每页大小
	private List<Commodity> commodityList;// 商品集合
	
	private List<Order> orderList;//订单信息集合
	
	private Map<String, Object> map = new HashMap<String, Object>();//json对象

	@Resource
	private ICommodityService commodityService;
	
	@Resource
	private IMobileCardService mobileCardService;
	
	@Resource
	private IOrderService orderService;

	// 跳转积分商城界面
	public String toStorePage() {
	  try{
		if(pageIndex==null){
			pageIndex = 1;
		}
		page = new Page(pageIndex, pageSize, commodityService.getCount(commodity));	
		commodityList = commodityService.getList(commodity, page);
	  }catch(Exception e){
		  
	  }
		return SUCCESS;	
	}
	
	//跳转商品信息页面
	public String toMsgPage(){	
		try{
		commodity = commodityService.findCommodityById(commodityNumber);
		  }catch(Exception e){
			  
		  }
		return SUCCESS;
	}
	
	//JSON查询用户的积分
	public String selectJiFen(){
		try{
		mobileCard = mobileCardService.findMobileCardByUserId(userId);
		map.put("mobileCard", mobileCard);
		  }catch(Exception e){
			  
		  }
		return SUCCESS;
	}
	
	//用户下订单以及收货信息的填写
	public String markOrder(){	
		try {
			orderService.addOrder(order,harvestAddressInfo,commodity);
			order = orderService.findOrderById(order.getOrderId());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	//查询我的全部订单
	public String toMyOrder(){
		try {
			if(pageIndex==null){
				pageIndex = 1;
			}
			page = new Page(pageIndex, pageSize, orderService.getCount(order));	
			orderList = orderService.getList(order, page);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return SUCCESS;			
	}
	
	public Commodity getCommodity() {
		return commodity;
	}

	public void setCommodity(Commodity commodity) {
		this.commodity = commodity;
	}

	public Page getPage() {
		return page;
	}

	public void setPage(Page page) {
		this.page = page;
	}

	public Integer getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(Integer pageIndex) {
		this.pageIndex = pageIndex;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	public List<Commodity> getCommodityList() {
		return commodityList;
	}

	public void setCommodityList(List<Commodity> commodityList) {
		this.commodityList = commodityList;
	}

	public ICommodityService getCommodityService() {
		return commodityService;
	}

	public void setCommodityService(ICommodityService commodityService) {
		this.commodityService = commodityService;
	}

	public Integer getCommodityNumber() {
		return commodityNumber;
	}

	public void setCommodityNumber(Integer commodityNumber) {
		this.commodityNumber = commodityNumber;
	}

	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public MobileCard getMobileCard() {
		return mobileCard;
	}

	public void setMobileCard(MobileCard mobileCard) {
		this.mobileCard = mobileCard;
	}

	public Map<String, Object> getMap() {
		return map;
	}

	public void setMap(Map<String, Object> map) {
		this.map = map;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public HarvestAddressInfo getHarvestAddressInfo() {
		return harvestAddressInfo;
	}

	public void setHarvestAddressInfo(HarvestAddressInfo harvestAddressInfo) {
		this.harvestAddressInfo = harvestAddressInfo;
	}

	public List<Order> getOrderList() {
		return orderList;
	}

	public void setOrderList(List<Order> orderList) {
		this.orderList = orderList;
	}


}
