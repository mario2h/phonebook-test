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

    $stateProvider.state('app.contacts', {
      url:'/contacts',
      views: {
        'content': {
          'templateUrl': 'templates/contacts.html',
          'controller': 'ContactsController as ctrl'
        }
      }
    });
  }
})();
