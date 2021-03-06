angular.module( 'site-cra.cadastro', [
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'cadastro', {
    url: '/cadastro',
    views: {
      "main": {
        controller: 'CadastroCtrl',
        templateUrl: 'cadastro/cadastro.tpl.html'
      }
    },
    data:{ pageTitle: 'Cadastro' }
  });
})

.controller( 'CadastroCtrl', function ( $scope, $http ) {
  $scope.cadastrar = function() {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $scope.cadastro.telefone = "("+$scope.cadastro.ddd+") "+$scope.cadastro.telefone;
    $scope.cadastro.ddd = null;
    $http.post('ajax.php', $scope.cadastro).success(function(response) {
      alert('Cadastro realizado com sucesso!');
      $scope.cadastro.sucesso = true;
      console.log(response);
    }).error(function(response){
        alert('Houve um erro');
        console.log(response);      
    });
  };
})

;
