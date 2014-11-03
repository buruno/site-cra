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

.controller( 'QuestionarioCtrl', function ( $scope, $rootScope, $location, $state  ) {
  $scope.passo = 1;
  location.hash = 1;
 $scope.acervo = {};
  $scope.formTotal = 0;
  $scope.mudapasso = function(n){
    if($scope.passo == 1) {
      console.log($scope.dados);
      if ($scope.dados.$invalid) {
        alert('dados não preenchidos');
        return;
      }
    }
    $scope.passo = $scope.passo + n;
    location.hash = $scope.passo;
    $state.go('questionario');
  };

  $scope.enviar = function() {
    $scope.submit = function() {   
        console.log(this.acervo);
    };
  };
  $scope.formTotal = Object.keys($scope.acervo).length;
  $scope.$watch(function(){
    $scope.formTotal = Object.keys($scope.acervo).length;
  });
  $scope.$on('$locationChangeStart', function(event, toState, toParams, fromState, fromParams){
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
.directive('comboEstado',function(){
  return {
    restrict: 'A',
    link: function() {
        new DgCidadesEstados({
          estado: document.getElementById('dados_estado'),
          cidade: document.getElementById('dados_cidade')
        });
    }
  };
})
;
