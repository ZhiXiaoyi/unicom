package com.web.action;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.InputStream;
import java.util.Map;

import org.springframework.stereotype.Controller;

import com.utils.ImageUtil;

/**
 * 生成验证码图片Action
 */
@SuppressWarnings("serial")
@Controller
public class CreateImageAction extends BaseAction {
	/**
	 * 验证码图片输入流
	 */
	private InputStream imageStream;

	public String execute() {
		// 创建验证码图片
		Map<String, BufferedImage> imageMap = ImageUtil.createImage();
		// 取出验证码，放入session
		String code = imageMap.keySet().iterator().next();
		session.put("imageCode", code);
		// 取出图片
		BufferedImage image = imageMap.get(code);
		try {
			// 将图片转变为输入流
			imageStream = ImageUtil.getInputStream(image);
		} catch (IOException e) {
			e.printStackTrace();
			return "error";
		}
		return "success";
	}

	public InputStream getImageStream() {
		return imageStream;
	}

	public void setImageStream(InputStream imageStream) {
		this.imageStream = imageStream;
	}
}
