(function() {
  'use strict';

  angular.module('starter.config', [])
    .config(configStates)
    .run(initCoreComponents);

  // configuración de estados
  function configStates($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app', {
      url:'/app',
      abstract: true,
      templateUrl: 'js/home/home.html'
    })

    .state('app.contacts', {
      url:'/contacts',
      views: {
        'content': {
          'templateUrl': 'js/contacts/contacts.html',
          'controller': 'ContactsController as ctrl'
        }
      }
    })

    .state('app.details', {
      url:'/details/:idPersona',
      views: {
        'content': {
          'templateUrl': 'js/details/contactDetails.html',
          'controller': 'ContactsDetailsCtrl as ctrl'
        }
      }
    })

    .state('app.about', {
      url:'/about',
      views: {
        'content': {
          'templateUrl': 'js/about/about.html'
        }
      }
    });

    // Si una dirección no está vinculada con ningún estado, que vaya a la dirección /contacts
    $urlRouterProvider.otherwise('/app/contacts');
  }

  // inicializar configuración de la app
  function initCoreComponents($ionicPlatform) {
      $ionicPlatform.ready(function(){});
      console.info('app init!');
  }
})();
