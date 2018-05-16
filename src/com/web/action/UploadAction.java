package com.web.action;

import java.io.File;  
import java.io.FileInputStream;  
import java.io.FileNotFoundException;
import java.io.FileOutputStream;  
import java.io.InputStream;  
import java.io.OutputStream;  
  





import java.io.UnsupportedEncodingException;

import javax.annotation.Resource;

import org.apache.struts2.ServletActionContext;  
import org.springframework.stereotype.Controller;

import com.model.pojo.Commodity;
import com.service.ICommodityService;
  

  
@SuppressWarnings("serial")
@Controller
public class UploadAction extends BaseAction {  
    
	private Commodity commodity  ;
  
    // myFile属性用来封装上传的文件  
    private File myFile;  
      
    // myFileContentType属性用来封装上传文件的类型  
    private String myFileContentType;  
  
    // myFileFileName属性用来封装上传文件的文件名  
    private String myFileFileName;  
  
    private String path;//照片的绝对路径
    
    private InputStream imageStream;
    
    @Resource
    private ICommodityService commodityService;
      
   
  
    public Commodity getCommodity() {
		return commodity;
	}

	public void setCommodity(Commodity commodity) {
		this.commodity = commodity;
	}

	//获得myFile值  
    public File getMyFile() {  
        return myFile;  
    }  
  
    //设置myFile值  
    public void setMyFile(File myFile) {  
        this.myFile = myFile;  
    }  
  
    //获得myFileContentType值  
    public String getMyFileContentType() {  
        return myFileContentType;  
    }  
  
    //设置myFileContentType值  
    public void setMyFileContentType(String myFileContentType) {  
        this.myFileContentType = myFileContentType;  
    }  
  
    //获得myFileFileName值  
    public String getMyFileFileName() {  
        return myFileFileName;  
    }  
  
    //设置myFileFileName值  
    public void setMyFileFileName(String myFileFileName) {  
        this.myFileFileName = myFileFileName;  
    }  
    
    
    public String getPath() {
		return path;
	}

	public void setPath(String path) throws UnsupportedEncodingException {
		this.path = new String(path.getBytes("iso-8859-1"),"utf-8");
	}

	public InputStream getImageStream() {
		return imageStream;
	}

	public void setImageStream(InputStream imageStream) {
		this.imageStream = imageStream;
	}

	public String execute() throws Exception {  
		
		try {
	        //基于myFile创建一个文件输入流  
	        InputStream is = new FileInputStream(myFile);  
	        // 设置上传文件目录  
	        String uploadPath = ServletActionContext.getServletContext()  
	                .getRealPath("/upload");  
	        // 设置目标文件  
	        File toFile = new File(uploadPath, this.getMyFileFileName());  
	        path = uploadPath+"\\"+this.getMyFileFileName();
	        // 创建一个输出流  
	        OutputStream os = new FileOutputStream(toFile);  
	  
	        //设置缓存  
	        byte[] buffer = new byte[1024];  
	  
	        int length = 0;  
	  
	        //读取myFile文件输出到toFile文件中  
	        while ((length = is.read(buffer)) > 0) {  
	            os.write(buffer, 0, length);  
	        }  
	        //关闭输入流  
	        is.close();       
	        //关闭输出流  
	        os.close();  
	        
	        
	        commodity.setCommodityImgPath(path);
	        commodityService.addCommodity(commodity);
		} catch (Exception e) {
		}
        return SUCCESS;  
    }  
	
	public String photo() {
		try {
			imageStream=new FileInputStream(new File(path));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
    
    
  
}  