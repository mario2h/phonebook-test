(function() {
  'use strict';

  angular
    .module('starter.contacts', [])
    .controller('ContactsController', ContactsController);

    // injeccion de dependencias
    ContactsController.$inject = [];

    // controller
    function ContactsController() {
      var vm = this;


    }
})();
