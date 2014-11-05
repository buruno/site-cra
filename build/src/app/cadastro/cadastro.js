angular.module('site-cra.cadastro', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('cadastro', {
      url: '/cadastro',
      views: {
        'main': {
          controller: 'CadastroCtrl',
          templateUrl: 'cadastro/cadastro.tpl.html'
        }
      },
      data: { pageTitle: 'Cadastro' }
    });
  }
]).controller('CadastroCtrl', [
  '$scope',
  '$http',
  function AboutCtrl($scope, $http) {
    $scope.cadastrar = function () {
      $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      $http.post('ajax.php', $scope.cadastro).success(function (response) {
        alert('Cadastro realizado com sucesso!');
        $scope.cadastro.sucesso = true;
      });
    };
  }
]);
;