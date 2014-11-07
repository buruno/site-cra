<!DOCTYPE html>
<html ng-app="site-cra" ng-controller="AppCtrl">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>CRA &ndash; Centro de Referência Audiovisual</title>
	<base href="http://localhost/site-cra/build/">
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="robots" content="noindex">
	<meta name="googlebot" content="noindex">

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- google webfonts -->
	<link href='http://fonts.googleapis.com/css?family=Lato:400,300,400italic,700,700italic,900' rel='stylesheet' type='text/css'>
	<!-- compiled CSS -->
	<link rel="stylesheet" type="text/css" href="assets/site-cra-0.3.2.css" />
	<!-- compiled JavaScript -->
	<script type="text/javascript" src="vendor/angular/angular.js"></script>
	<script type="text/javascript" src="vendor/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
	<script type="text/javascript" src="vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js"></script>
	<script type="text/javascript" src="vendor/angular-ui-router/release/angular-ui-router.js"></script>
	<script type="text/javascript" src="vendor/angular-ui-utils/modules/route/route.js"></script>
	<script type="text/javascript" src="src/app/about/about.js"></script>
	<script type="text/javascript" src="src/app/app.js"></script>
	<script type="text/javascript" src="src/app/cadastro/cadastro.js"></script>
	<script type="text/javascript" src="src/app/fichatecnica/fichatecnica.js"></script>
	<script type="text/javascript" src="src/app/home/home.js"></script>
	<script type="text/javascript" src="src/app/leiamais/leiamais.js"></script>
	<script type="text/javascript" src="src/app/questionario/questionario.js"></script>
	<script type="text/javascript" src="src/common/plusOne/plusOne.js"></script>
	<script type="text/javascript" src="templates-common.js"></script>
	<script type="text/javascript" src="templates-app.js"></script>
 	<script type="text/javascript" charset="ISO-8859-1" src="assets/js/cidades-estados-1.0.js"></script>

	</script>
</head>
<body id="4">
<div class="container" id="1" >
	<div class="col-md-2 col-sm-12" id="2">
	<div class="navbar main " role="navigation" id="3">
		<a class="navbar-logo" href="home"><img src="assets/img/logo-cra.png"  style="width: 12em" title="CRA"/></a>
		<div class="navbar-menu">
			<ul class="list-unstyled nav-menu">
				<li class=""><a class="btn btn-default btn-block" href="leiamais">Leia mais</a></li>
				<li><a class="btn btn-default btn-block" href="cadastro">Cadastre-se</a></li>
				<li><a class="btn btn-default btn-block" href="questionario">Questionário</a></li>
				<li><a class="btn btn-default btn-block" href="fichatecnica">Ficha Técnica</a></li>
			</ul>
		</div><!--/.navbar-collapse -->
		<a href="http://cinemateca.org.br" target="_blank"><img src="assets/img/logo_cine.png" class="img-responsive pull-right" style="width: 8em" /></a>
	</div>
</div>
<section ui-view="main" id="main" class="container main col-md-8 col-sm-12 col-md-offset-4">
</section>
</body>
</html>
