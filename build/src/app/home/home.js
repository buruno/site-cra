angular.module('site-cra.home', [
  'ui.router',
  'plusOne'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      views: {
        'main': {
          controller: 'homeCtrl',
          templateUrl: 'home/home.tpl.html'
        }
      },
      data: { pageTitle: 'Home' }
    });
  }
]).controller('homeCtrl', [
  '$scope',
  '$http',
  function HomeController($scope, $http) {
    $http.get('assets/json/programas.json').success(function (data, status, headers, config) {
      $scope.programas = data.programas;
    }).error(function (data, status, headers, config) {
    });
  }
]);
;