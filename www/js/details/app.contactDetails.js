(function() {
  'use strict';

  angular
    .module('starter.contactsDetails', [])
    .controller('ContactsDetailsCtrl', ContactsDetailsCtrl);

    // injeccion de dependencias
    ContactsDetailsCtrl.$inject = ['$stateParams', 'ContactsServices'];

    // controller
    function ContactsDetailsCtrl(parametros, service) {
      var vm = this;

      //variables
      vm.idPersona = parseInt(parametros.idPersona);
      vm.listPersonas = service.getPersonas();

      //functions

      personaSelect();

      function personaSelect() {
        angular.forEach(vm.listPersonas, function(persona){
          if (persona.id === vm.idPersona) {
            vm.personaSelect = persona;
          }
        });
      }
    }
})();
