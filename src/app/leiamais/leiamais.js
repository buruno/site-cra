angular.module( 'site-cra.leiamais', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'leiamais', {
    url: '/leiamais',
    views: {
      "main": {
        controller: 'LeiamaisCtrl',
        templateUrl: 'leiamais/leiamais.tpl.html'
      }
    },
    data:{ pageTitle: 'CRA' }
  });
})

.controller( 'LeiamaisCtrl', function ( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
