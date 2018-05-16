<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<style type="text/css">
		body, html {width: 100%;height: 100%;margin:0;font-family:"微软雅黑";}
		#allmap{width:100%;height:500px;}
		p{margin-left:5px; font-size:14px;}
	</style>
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=ICikHnHYeeNdKluFmxVCjvGMtmsKVl4z"></script>
	<title>营业厅查询</title>
</head>
<body>
		<div id="allmap"></div>
		<div id="r-result">
		城市名: <input id="cityName" type="text" style="width:100px; margin-right:10px;" />
		<input type="button" value="查询" onclick="theLocation()" />
	</div>
</body>
</html>
<script type="text/javascript">
	// 百度地图API功能
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(116.331398,39.897445);
	map.centerAndZoom(point,12);

	function theLocation(){
		var city = document.getElementById("cityName").value;
		if(city != ""){
			map.centerAndZoom(city,12);      // 用城市名设置地图中心点
		}
		setTimeout(function(){
		
			var local = new BMap.LocalSearch(map, {renderOptions:{map: map}});
			local.search("联通营业厅");	
		}, 1000);  
		
	}
	map.enableScrollWheelZoom(true);
	
	var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
	var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
	//添加工具栏
	function add_control(){
		map.addControl(top_left_control);        
		map.addControl(top_left_navigation);     
		map.addControl(top_right_navigation);    
	}
	//添加工具栏
	add_control();
</script>




