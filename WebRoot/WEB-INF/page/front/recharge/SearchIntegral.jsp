<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>查询用户积分界面</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	
	<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css"/>
		<link rel="stylesheet" href="css/jquery-ui.min.css" />
		<link rel="stylesheet" href="css/jquery-ui.structure.min.css" />
		<link rel="stylesheet" href="css/jquery-ui.theme.min.css" />
		<script src="js/jquery.js"></script>
		<script src="js/jquery-ui.min.js"></script>
	<script src="js/bootstrap.min.js" type="text/javascript"></script>
	

    <link href="webadmin/dist/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="webadmin/dist/css/ionicons.min.css" rel="stylesheet" type="text/css" />
    <link href="webadmin/dist/css/AdminLTE.min.css" rel="stylesheet" type="text/css" />
    <link href="webadmin/dist/css/skins/_all-skins.min.css" rel="stylesheet" type="text/css" />
   
    <script src="webadmin/plugins/chartjs/Chart.min.js" type="text/javascript"></script>
    <script src='webadmin/plugins/fastclick/fastclick.min.js'></script>
    <script src="webadmin/dist/js/app.min.js" type="text/javascript"></script>
    <script src="webadmin/dist/js/demo.js" type="text/javascript"></script>	
    <script src="webadmin/plugins/flot/jquery.flot.min.js" type="text/javascript"></script>
    <script src="webadmin/plugins/flot/jquery.flot.pie.min.js" type="text/javascript"></script>
    <script src="webadmin/plugins/flot/jquery.flot.categories.min.js" type="text/javascript"></script>
  </head>
  
  <body>
  <input type="hidden" id="areaId" name="areaId" value="1">
  	<div>
	   <form class="form-inline" role="form" action="search/tosearch?phoneNumber=${mobileCard.phoneNumber}" method="post">
		  <!-- <div class="form-group">
		    <select class="form-control" name="area">
		  			  <option>全部区</option>
		  			  <option>厦门</option>
		  			  <option>泉州</option>
		  			  <option>福州</option>
		  			</select>
		  </div>	 -->	  
		  <div class="form-group">
		    <div class="input-group">
		   	  <div class="input-group-addon">请输入起始日期</div>
		      <input class="form-control" type="text" name="startdate">
		    </div>
		  </div>
		  
		  <div class="form-group">
		  	<div class="input-group">
			    <div class="input-group-addon">请输入截至日期</div>
			    <input type="text" class="form-control" name="lastdate">
		    </div>
		  </div>
		  
		  <div class="checkbox">
		    <label class="checkbox-inline">
			 	 <input type="checkbox" id="inlineCheckbox1" name="Checkbox1"  >表格
			</label>
			<label class="checkbox-inline">
			  	<input type="checkbox" id="inlineCheckbox2" name="Checkbox2" >饼图
			</label>
			<label class="checkbox-inline">
			  	<input type="checkbox" id="inlineCheckbox3" name="Checkbox3" >柱状图
			 </label>
		  </div>
		  <button type="submit" class="btn btn-danger">统计</button>
			<span  style="margin-left:5%;margin-top:3%;"> 当前用户号码：<s:property value="#session.mobileCard.phoneNumber"/> 
			</span>
		</form>
	</div>
		
		<c:choose>
		        <c:when test="${!Checkbox1.equals(\"on\") && !Checkbox2.equals(\"on\") && !Checkbox3.equals(\"on\") }">
		        	<c:set var="Checkbox1" value="on"></c:set>
		        	<c:set var="Checkbox2" value="on"></c:set>
		        	<c:set var="Checkbox3" value="on"></c:set>
		        </c:when>
        </c:choose>
	
       <!-- Main content -->
        <section class="content">
          <div class="row">
          	 <c:choose>
             <c:when test="${Checkbox1.equals(\"on\") }">
          	  <div class="box box-success">
          	  	<table class="table">
					<tr>
						<td>时间</td><td>所有积分</td><td>当前积分</td><td>已使用的积分</td>
					</tr>
					<tr>
						<td>${startdate}~${lastdate}</td><td>${score.allIntegeral}</td><td>${score.remainingScore}</td><td>${score.usedIntegeral}</td>
					</tr>
				</table>
          	  </div>
          	  </c:when>
          	  </c:choose>
          	  
             <c:choose>
             <c:when test="${Checkbox3.equals(\"on\") }">
	              <div class="box box-success">
	                <div class="box-header with-border">
	                  <h3 class="box-title">条形图</h3>
	                  <div class="box-tools pull-right">
	                    <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
	                    <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
	                  </div>
	                </div>
	                <div class="box-body">
	                  <div class="chart">
	                    <canvas id="barChart" height="230"></canvas>
	                  </div>
	                </div><!-- /.box-body -->
	              </div><!-- /.box -->
              </c:when>
              </c:choose>
              
              <c:choose>
			  <c:when test="${Checkbox2.equals(\"on\") }">
				  <div class="box box-primary">
	                <div class="box-header with-border">
	                  <i class="fa fa-bar-chart-o"></i>
	                  <h3 class="box-title">饼状图2</h3>
	                  <div class="box-tools pull-right">
	                    <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
	                    <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
	                  </div>
	                </div>
	                <div class="box-body">
	                  <div id="donut-chart" style="height: 300px;"></div>
	                </div><!-- /.box-body-->
	              </div><!-- /.box -->
			  </c:when>
			  </c:choose>
            </div><!-- /.col (RIGHT) -->
     

        </section><!-- /.content -->


  </body>
  
  <script>
  	  $(function(){

  	  	  $(".form-control").datepicker({
  	  	  	 dateFormat:'yy-mm-dd'
  	  	  });
  	  	          /* ChartJS
         * -------
         * Here we will create a few charts using ChartJS
         */

        //--------------
        //- AREA CHART -
        //--------------

		
		
		/****
		*****
		*****
		****
		条形图
		*****
		*****		  
		***/
        var areaChartData = {
          labels: ["总积分","当前积分", "已使用的积分"],
          datasets: [
            {
              data: []
            },
            {
              label: "Electronics",
              fillColor: "rgba(210, 14, 222, 1)",
              strokeColor: "rgba(210, 1, 112, 1)",
              pointColor: "rgba(210, 214, 222, 1)",
              pointStrokeColor: "#c1c7d1",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: ["${score.allIntegeral}","${score.remainingScore}","${score.usedIntegeral}"]
            },
            {
              data: []
            }
          ]
        };




		

        //-------------
        //- BAR CHART -
        //-------------
        if("${Checkbox3}"=='on'){
	        var barChartCanvas = $("#barChart").get(0).getContext("2d");
	        var barChart = new Chart(barChartCanvas);
	        var barChartData = areaChartData;
	        barChartData.datasets[1].fillColor = "#00a65a";
	        barChartData.datasets[1].strokeColor = "#00a65a";
	        barChartData.datasets[1].pointColor = "#00a65a";
	        var barChartOptions = {
	          //Boolean -规模是否应该从零开始，或从最低值降到一个数量级
	          scaleBeginAtZero: true,
	          //Boolean - 图中是否显示网格线
	          scaleShowGridLines: true,
	          //String - 网格线颜色
	          scaleGridLineColor: "rgba(0,0,0,.05)",
	          //Number - 网格线宽度
	          scaleGridLineWidth: 1,
	          //Boolean - 是否显示水平线（X轴除外）
	          scaleShowHorizontalLines: true,
	          //Boolean - 是否显示垂直线（Y轴除外）
	          scaleShowVerticalLines: true,
	          //Boolean -如果每个酒吧都有一杆
	          barShowStroke: true,
	          //Number - 杆行程的像素宽度
	          barStrokeWidth: 2,
	          //Number - 每个x值集之间的间距
	          barValueSpacing: 5,
	          //Number - Spacing between data sets within X values
	          barDatasetSpacing: 1,
	          
	          //Boolean - whether to make the chart responsive
	          responsive: true,
	          maintainAspectRatio: false
	        };		
	        barChartOptions.datasetFill = false;
	        barChart.Bar(barChartData, barChartOptions);
		} 
		 
		 /*******
		 *******
		 饼状图2数值调整
		 *******
         ********/

        var donutData = [
          {label: "总积分", data: "${score.allIntegeral}", color: "#3c8dbc"},
          {label: "当前积分", data:"${score.remainingScore}", color: "#0073b7"},
          {label: "已使用的积分", data:"${score.usedIntegeral}", color: "#00c0ef"},       
        ];
        $.plot("#donut-chart", donutData, {
          series: {
            pie: {
              show: true,
              radius: 1,
              innerRadius: 0.5,
              label: {
                show: true,
                radius: 2/3,
                formatter: labelFormatter,
                threshold: 0.1
              }

            }
          },
          legend: {
            show: true
          }
        });
        /*
         * END DONUT CHART
         */
  	  });
  	  	 function labelFormatter(label, series) {
        return "<div style='font-size:13px; text-align:center; padding:2px; color: #fff; font-weight: 600;'>"
                + label
                + "<br/>"
                + Math.round(series.percent) + "%</div>";
      }
  </script>
</html>

