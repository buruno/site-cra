angular.module( 'site-cra', [
  'templates-app',
  'templates-common',
  'site-cra.home',
  'site-cra.leiamais',
  'site-cra.fichatecnica',
  'site-cra.cadastro',
  'site-cra.questionario',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise( 'home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, $state ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})

;

