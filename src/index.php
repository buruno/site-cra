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
	<!-- compiled CSS --><% styles.forEach( function ( file ) { %>
	<link rel="stylesheet" type="text/css" href="<%= file %>" /><% }); %>
	<!-- compiled JavaScript --><% scripts.forEach( function ( file ) { %>
	<script type="text/javascript" src="<%= file %>"></script><% }); %>
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
