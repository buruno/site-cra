angular.module( 'site-cra.cadastro', [
  'ui.router',
  'placeholders',
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

.controller( 'CadastroCtrl', function AboutCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
