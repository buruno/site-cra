angular.module( 'site-cra.fichatecnica', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'fichatecnica', {
    url: '/fichatecnica',
    views: {
      "main": {
        controller: 'FichaCtrl',
        templateUrl: 'fichatecnica/fichatecnica.tpl.html'
      }
    },
    data:{ pageTitle: 'CRA' }
  });
})

.controller( 'FichaCtrl', function ( $scope ) {
})

;
