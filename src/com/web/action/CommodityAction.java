package com.web.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.model.Page;
import com.model.pojo.Commodity;
import com.service.ICommodityService;

@Controller
public class CommodityAction extends BaseAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Commodity commodity;// 商品对象
	private Integer commodityNumber;// 商品编号
	private Page page;// 分页类
	private Integer pageIndex;// 当前页
	private Integer pageSize = 6;// 每页大小

	private List<Commodity> commodityList;// 管理员集合

	@Resource
	private ICommodityService commodityService;

	// 跳转积分商品界面
	public String toPage() {

		try {
			if (pageIndex == null) {
				pageIndex = 1;
			}
			page = new Page(pageIndex, pageSize,
					commodityService.getCount(commodity));
			commodityList = commodityService.getList(commodity, page);
		} catch (Exception e) {

		}

		return SUCCESS;
	}

	// 跳转上传积分商品界面
	public String toUploadPage() {
		return SUCCESS;
	}

	// 跳转修改商品信息界面
	public String toEditPage() {

		try {
			commodity = commodityService.findCommodityById(commodityNumber);
		} catch (Exception e) {

		}

		return SUCCESS;
	}

	// 删除商品信息
	public String delCommodity() {

		try {
			commodityService.delCommodity(commodityNumber);
		} catch (Exception e) {

		}

		return SUCCESS;
	}

	// 修改商品信息
	public String editCommodity() {

		try {
			commodityService.updateCommodity(commodity);
		} catch (Exception e) {

		}

		return SUCCESS;
	}

	public Commodity getCommodity() {
		return commodity;
	}

	public void setCommodity(Commodity commodity) {
		this.commodity = commodity;
	}

	public Integer getCommodityNumber() {
		return commodityNumber;
	}

	public void setCommodityNumber(Integer commodityNumber) {
		this.commodityNumber = commodityNumber;
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

}
