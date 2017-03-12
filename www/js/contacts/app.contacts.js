(function() {
  'use strict';

  angular
    .module('starter.contacts', [])
    .controller('ContactsController', ContactsController);

    //------- [injeccion de dependencias] --------//
    ContactsController.$inject = ['ContactsServices'];

    //------- [controller] -------------//
    function ContactsController(service) {
      var vm = this;

      //variables
      vm.listPersonas = [];
      vm.listRegiones = [];

      //functions


      activate();

      function activate () {
        service.getPersonas()
                .then(function (data) {
                  vm.listPersonas = data;
                });

        service.getRegiones()
                .then(function (data) {
                  vm.listRegiones = data;
                })
      }


    }
})();
