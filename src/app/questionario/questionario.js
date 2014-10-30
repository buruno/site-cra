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

.controller( 'QuestionarioCtrl', function AboutCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
