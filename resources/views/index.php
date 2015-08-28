<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="main" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="main" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="main" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" ng-app="main" class="no-js"> <!--<![endif]-->

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Skeleton App</title>
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="/css/app.css">
</head>
<body>
	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" ng-init="isCollapsed=false" ng-click="isCollapsed = !isCollapsed">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#"><img src="/img/logo.png" alt=""></a>
			</div>

			<ul class="nav navbar-nav navbar-right" collapse="isCollapsed">
				<li><a ui-sref="home" du-smooth-scroll ng-click="isCollapsed=true">Principal</a></li>
 				<li><a ui-sref="nosotros" du-smooth-scroll ng-click="isCollapsed=true">Nosotros</a></li>
				<li><a ui-sref="productos" du-smooth-scroll ng-click="isCollapsed=true">Productos</a></li>
				<li><a ui-sref="recaudos" du-smooth-scroll ng-click="isCollapsed=true">Recaudos</a></li>
				<li><a ui-sref="enlaces" du-smooth-scroll ng-click="isCollapsed=true">Enlaces</a></li>
				<li><a ui-sref="contacto" du-smooth-scroll ng-click="isCollapsed=true">Contacto</a></li>
			</ul>
		</div>
	</nav>
	<!-- <div class="section-container" ng-include="'assets/js/content.html'"></div> -->
	
	<!-- dependencies:js -->
  	<script src="/assets/vendor/angular/angular.js"></script>
  	<script src="/assets/vendor/angular-bootstrap/ui-bootstrap-tpls.js"></script>
  	<script src="/assets/vendor/sweetalert/dist/sweetalert-dev.js"></script>
  	<script src="/assets/vendor/angular-scroll/angular-scroll.js"></script>
  	<script src="/assets/vendor/angular-ui-router/release/angular-ui-router.js"></script>
  	<script src="/assets/vendor/api-check/dist/api-check.js"></script>
  	<script src="/assets/vendor/angular-formly/dist/formly.js"></script>
  	<script src="/assets/vendor/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.js"></script>
  	<!-- endinject -->
	<!-- inject:js -->
	
  	<script src="/assets/js/main.module.js"></script>
	
  	<!-- endinject -->
  	<script>
		new WOW().init();
	</script>
</body>