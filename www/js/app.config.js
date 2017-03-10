(function() {
  'use strict';

  angular.module('starter.config', [])
  .config(configStates);

  function configStates($stateProvider, $urlRouterProvider) {

    // Declarar estado abstracto.
    $stateProvider.state('app', {
      url:'/app',
      abstract: true,
      templateUrl: 'templates/home.html'
    });

    $stateProvider.state('app.list', {
      url:'/list',
      views: {
        'content': {
          'templateUrl': 'templates/list.html',
          'controller': 'ListController as ctrl'
        }
      }
    });
  }
})();
