<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<base href="<%=basePath%>">
	<title>后台管理</title>
	<meta charset="UTF-8">
	<meta
		content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
		name='viewport'>

	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="webadmin/dist/css/font-awesome.min.css" rel="stylesheet"
		type="text/css" />
	<link href="webadmin/dist/css/ionicons.min.css" rel="stylesheet"
		type="text/css" />
	<link href="webadmin/dist/css/AdminLTE.min.css" rel="stylesheet"
		type="text/css" />
	<link href="webadmin/dist/css/skins/_all-skins.min.css" rel="stylesheet"
		type="text/css" />
	<link href="webadmin/plugins/iCheck/flat/blue.css" rel="stylesheet"
		type="text/css" />
	<link href="webadmin/plugins/morris/morris.css" rel="stylesheet"
		type="text/css" />
	<link href="webadmin/plugins/jvectormap/jquery-jvectormap-1.2.2.css"
		rel="stylesheet" type="text/css" />
	<link href="webadmin/plugins/datepicker/datepicker3.css"
		rel="stylesheet" type="text/css" />
	<link href="webadmin/plugins/daterangepicker/daterangepicker-bs3.css"
		rel="stylesheet" type="text/css" />
	<link
		href="webadmin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css"
		rel="stylesheet" type="text/css" />

</head>
<script>
	
</script>
<body class="skin-blue sidebar-mini">
	<!--背景黑色-->
	<div class="wrapper">
		<!--header头部标签
	  ****
	  ****
	  ****-->
		<header class="main-header"> <!-- Logo --> <a href="# "
			target="mainframe" class="logo"> <span class="logo-mini"><b>首</b>页</span>
			<span class="logo-lg"><b>后台</b>首页</span>
		</a> <!-- Header Navbar: style can be found in header.less --> <nav
			class="navbar navbar-static-top" role="navigation"> <!-- Sidebar toggle button-->
		<a href="#" class="sidebar-toggle" data-toggle="offcanvas"
			role="button"> </a>
		<div class="navbar-custom-menu">
			<ul class="nav navbar-nav">

				<!-- User Account: 登录者的姓名信息 -->
				<li class="dropdown user user-menu"><a href="#"
					class="dropdown-toggle" data-toggle="dropdown"> <span
						class="hidden-xs">${admin.adminName}</span>
				</a>
					<ul style="width:0px" class="dropdown-menu">
						<li style="width:130px" class="user-footer">
							<div class="pull-right">
								<a href="login/outLogin" class="btn btn-default btn-flat">退出登录</a>
							</div>
						</li>
					</ul></li>
			</ul>
		</div>
		</nav> </header>
		<!--header头部标签结束
	  ****
	  ****
	  ****-->

		<!-- 左边内容. *********
	  **********
	  ***********
	  contains the logo and sidebar -->
		<aside class="main-sidebar"><!--控制菜单大小--> <!-- sidebar: style can be found in sidebar.less -->
		<section class="sidebar"> <!-- search form -->
		<form method="get" class="sidebar-form">
			<div class="input-group">
				<input type="text" name="q" class="form-control"
					placeholder="Search..." /> <span class="input-group-btn">
					<button type='submit' name='search' id='search-btn'
						class="btn btn-flat">
						<i class="fa fa-search"></i>
					</button>
				</span>
			</div>
		</form>
		<!-- /.search form -->
		<ul class="sidebar-menu">
			<li class="header">操作手册</li>
			<c:forEach items="${admin.role.relationList}" var="relation"
				varStatus="status">
				<c:choose>
					<c:when test="${relation.jurisdictionId ==1}">
						<li class="treeview"><a href="#"> <i
								class="fa fa-files-o"></i> <span>基础数据管理</span><i
								class="fa fa-angle-left pull-right"></i>
						</a>
							<ul class="treeview-menu">
					</c:when>
					<c:when test="${relation.jurisdictionId ==2}">
						<li><a href="dictionary/topage.action" target="mainframe"><i
								class="fa fa-circle-o"></i>数据字典</a></li>
					</c:when>
					<c:when test="${relation.jurisdictionId ==3}">
						<li><a href="area/toAreaAdministrate" target="mainframe"><i
								class="fa fa-circle-o"></i>区域管理</a></li>
					</c:when>
					<c:when test="${relation.jurisdictionId ==4}">
						<li><a href="#" target="mainframe"><i
								class="fa fa-circle-o"></i>组织机构管理</a></li>
					</c:when>
					<c:when test="${relation.jurisdictionId ==5}">
						<li><a href="commodity/topage.action" target="mainframe"><i
								class="fa fa-circle-o"></i>积分商品上传</a></li>
					</c:when>

					<c:when test="${relation.jurisdictionId ==6}">
						<c:if test="${status.index!=0}">
							</ul>
						</c:if>

						<li class="treeview"><a href="#"> <i class="fa fa-files-o"></i>
							<span>数据查询统计</span><i class="fa fa-angle-left pull-right"></i>
							</a>
						<ul class="treeview-menu">
							</c:when>
							<c:when test="${relation.jurisdictionId ==7}">
								<li><a href="cartogram/toCartogram" target="mainframe"><i
										class="fa fa-circle-o"></i>营业统计</a></li>
							</c:when>
							<c:when test="${relation.jurisdictionId ==8}">
								<li><a href="cartogram/toAreaExcute" target="mainframe"><i
										class="fa fa-circle-o"></i>区域营业统计</a></li>
							</c:when>
							<c:when test="${relation.jurisdictionId ==9}">
								<li><a href="map/tomap" target="mainframe"><i
										class="fa fa-circle-o"></i>营业厅查询</a></li>
							</c:when>
			
			
							<c:when test="${relation.jurisdictionId ==10}">
								<c:if test="${status.index!=0}">
						</ul> </c:if>
						<li class="treeview"><a href="#"> <i class="fa fa-files-o"></i>
								<span>业务审核管理</span><i class="fa fa-angle-left pull-right"></i>
						</a>
							<ul class="treeview-menu">
								</c:when>
								<c:when test="${relation.jurisdictionId ==11}">
									<li><a href="applicationfrom/toCheck" target="mainframe"><i
											class="fa fa-circle-o"></i>手机套餐审核</a></li>
								</c:when>
								<c:when test="${relation.jurisdictionId ==12}">
									<li><a href="order/topage.action" target="mainframe"><i
											class="fa fa-circle-o"></i>商品购买审核</a></li>
								</c:when>
								<c:when test="${relation.jurisdictionId ==13}">
									<li><a href="log/topage" target="mainframe"><i
											class="fa fa-circle-o"></i>查看操作业务</a></li>
								</c:when>
				
				
								<c:when test="${relation.jurisdictionId ==14}">
				
									<c:if test="${status.index!=0}">
							</ul> </c:if>
						<li class="treeview"><a href="#"> <i class="fa fa-files-o"></i>
								<span>系统管理</span><i class="fa fa-angle-left pull-right"></i>
						</a>
							<ul class="treeview-menu">
								</c:when>
								<c:when test="${relation.jurisdictionId ==15}">
									<li><a href="admin/topage.action" target="mainframe"><i
											class="fa fa-circle-o"></i>用户管理</a></li>
								</c:when>
								<c:when test="${relation.jurisdictionId ==16}">
									<li><a href="role/topage.action" target="mainframe"><i
											class="fa fa-circle-o"></i>角色管理</a></li>
								</c:when>
								</c:choose>
				
								</c:forEach>
				
				
							</ul>
		</section> <!-- /.sidebar --> </aside>

		<!-- Content Wrapper. Contains page content -->
		<div class="content-wrapper">
			<iframe id="Myiframe" src="map/towelcome" width='100%' height='100%'
				name="mainframe"></iframe>
		</div>

		<!-- jQuery 2.1.4 -->
		<script src="webadmin/plugins/jQuery/jQuery-2.1.4.min.js"></script>
		<!-- jQuery UI 1.11.2 -->
		<script src="webadmin/dist/js/jquery-ui.min.js" type="text/javascript"></script>
		<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
		<script>
			$.widget.bridge('uibutton', $.ui.button);
		</script>
		<!-- Bootstrap 3.3.2 JS -->
		<script src="js/bootstrap.min.js" type="text/javascript"></script>
		<!-- Morris.js charts -->
		<script src="webadmin/dist/js/raphael-min.js"></script>
		<script src="webadmin/plugins/morris/morris.min.js"
			type="text/javascript"></script>
		<!-- Sparkline -->
		<script src="webadmin/plugins/sparkline/jquery.sparkline.min.js"
			type="text/javascript"></script>
		<!-- jvectormap -->
		<script
			src="webadmin/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"
			type="text/javascript"></script>
		<script
			src="webadmin/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"
			type="text/javascript"></script>
		<!-- jQuery Knob Chart -->
		<script src="webadmin/plugins/knob/jquery.knob.js"
			type="text/javascript"></script>
		<!-- daterangepicker -->
		<script src="webadmin/dist/js/moment.min.js" type="text/javascript"></script>
		<script src="webadmin/plugins/daterangepicker/daterangepicker.js"
			type="text/javascript"></script>
		<!-- datepicker -->
		<script src="webadmin/plugins/datepicker/bootstrap-datepicker.js"
			type="text/javascript"></script>
		<!-- Bootstrap WYSIHTML5 -->
		<script
			src="webadmin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"
			type="text/javascript"></script>
		<!-- Slimscroll -->
		<script src="webadmin/plugins/slimScroll/jquery.slimscroll.min.js"
			type="text/javascript"></script>
		<!-- FastClick -->
		<script src='webadmin/plugins/fastclick/fastclick.min.js'></script>
		<!-- AdminLTE App -->
		<script src="webadmin/dist/js/app.min.js" type="text/javascript"></script>

		<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
		<script src="webadmin/dist/js/pages/dashboard.js"
			type="text/javascript"></script>

		<!-- AdminLTE for demo purposes -->
		<script src="webadmin/dist/js/demo.js" type="text/javascript"></script>
</body>
</html>