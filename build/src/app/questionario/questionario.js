angular.module('site-cra.questionario', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('questionario', {
      url: '/questionario',
      views: {
        'main': {
          controller: 'QuestionarioCtrl',
          templateUrl: 'questionario/questionario.tpl.html'
        }
      },
      data: { pageTitle: 'Question\xe1rio' }
    });
  }
]).controller('QuestionarioCtrl', [
  '$scope',
  '$rootScope',
  '$location',
  '$state',
  function ($scope, $rootScope, $location, $state) {
    $scope.passo = 1;
    location.hash = 1;
    $scope.acervo = {};
    $scope.go = false;
    $scope.formTotal = 0;
    $scope.mudapasso = function (n) {
      $scope.passo = $scope.passo + n;
      location.hash = $scope.passo;
      $state.go('questionario');
    };
    $scope.enviar = function () {
      $scope.submit = function () {
        console.log(this.acervo);
      };
    };
    $scope.bypass = function () {
      $scope.go = true;
    };
    $scope.formTotal = Object.keys($scope.acervo).length;
    $scope.$watch(function () {
      $scope.formTotal = Object.keys($scope.acervo).length;
      if ($scope.formTotal > 0 && $scope.go === false) {
        window.onbeforeunload = function (event) {
          var msg = 'Voc\xea j\xe1 come\xe7ou a pn\xe1rio. Deseja realmente sair?';
          if (msg) {
            event.preventDefault();
            return false;
          }
        };
      } else {
        window.onbeforeunload = null;
      }
    });
    $scope.$on('$locationChangeStart', function (event, toState, toParams, fromState, fromParams) {
      if ($state.current.name == 'questionario') {
        if ($scope.formTotal > 0) {
          if ($location.$$hash || $scope.passo == 2) {
            var desloc = $scope.passo - $location.$$hash;
            $scope.passo = $scope.passo - desloc;
          } else {
            if (!confirm('Voc\xea j\xe1 come\xe7ou a preencher o question\xe1rio. Deseja realmente sair?')) {
              event.preventDefault();
              return false;
            }
          }
        }
      }
    });
  }
]).directive('comboEstado', function () {
  return {
    restrict: 'A',
    link: function () {
      new DgCidadesEstados({
        estado: document.getElementById('dados_estado'),
        cidade: document.getElementById('dados_cidade')
      });
    }
  };
});
;