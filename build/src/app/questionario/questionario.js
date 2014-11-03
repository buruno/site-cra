angular.module( 'site-cra.questionario', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'questionario', {
    url: '/questionario',
    views: {
      "main": {
        controller: 'QuestionarioCtrl',
        templateUrl: 'questionario/questionario.tpl.html'
      }
    },
    data:{ pageTitle: 'Questionário' }
  });
})

.controller( 'QuestionarioCtrl', function ( $scope, $rootScope, $location, $state, $scope  ) {
  $scope.passo = 1;
  location.hash = 1;
  $scope.dados = {};
  $scope.material = {};
  $scope.acervo = {};
  $scope.banco = {};
  $scope.deposito ={};
  $scope.formTotal = 0;
  $scope.mudapasso = function(n){
    $scope.passo = $scope.passo + n;
    location.hash = $scope.passo;
    $rootScope.estado = $scope.dados.acervo.estado;
    $rootScope.cidade = $scope.dados.acervo.cidade;

    $state.go('questionario');
  };
  $scope.formTotal = Object.keys($scope.dados).length+Object.keys($scope.material).length+Object.keys($scope.acervo).length+Object.keys($scope.banco).length+Object.keys($scope.deposito).length;
  //Object.keys($scope.dados).length+Object.keys($scope.material).length+Object.keys($scope.acervo).length+Object.keys($scope.banco).length+Object.keys($scope.deposito).length
  $scope.$watch(function(){
    $scope.formTotal = Object.keys($scope.dados).length+Object.keys($scope.material).length+Object.keys($scope.acervo).length+Object.keys($scope.banco).length+Object.keys($scope.deposito).length;
  });
  $rootScope.$on('$locationChangeStart', function(event, toState, toParams, fromState, fromParams){
   if($state.current.name == "questionario") { 
    if($scope.formTotal > 0) {
      window.onbeforeunload = function (event) {
        var msg = "Você já começou a pnário. Deseja realmente sair?";
        if(msg) {
          event.preventDefault();
          return false;
        }
      };
      if($location.$$hash || $scope.passo == 2) {
        var desloc = $scope.passo - $location.$$hash; 
        $scope.passo = $scope.passo - desloc;
      }
      else{
       if(!confirm("Você já começou a preencher o questionário. Deseja realmente sair?")) {
         event.preventDefault();
         return false;
       }
      }
    }
    }  
  });
})
.directive('comboEstado',function($rootScope){
  var estado = $rootScope.estado;
   var cidade = $rootScope.cidade;
  return {
    restrict: 'A',
    link: function(element,scope,estado,cidade) {
      console.log($rootScope);
        new DgCidadesEstados({
          estado: document.getElementById('dados_acervo-estado'),
          cidade: document.getElementById('dados_acervo-cidade'),
          estadoVal: estado,
          cidadeVal: cidade
        });
    }
  };
})
;
