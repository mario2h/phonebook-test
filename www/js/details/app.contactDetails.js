(function() {
  'use strict';

  angular
    .module('starter.contactsDetails', [])
    .controller('ContactsDetailsCtrl', ContactsDetailsCtrl);

    // injeccion de dependencias
    ContactsDetailsCtrl.$inject = ['$stateParams', 'GetterAndSetter'];

    // controller
    function ContactsDetailsCtrl(parametros, getAndSet) {
      var vm = this;

      //variables
      vm.personaSelect = {};
      vm.direPersona = {};
      vm.idPersona = parseInt(parametros.idPersona);
      vm.listPersonas = getAndSet.getPersonas();

      //functions
      vm.validPhone = validPhone;
      vm.validaRut = validaRut;

      personaSeleccionada();

      function personaSeleccionada() {
        angular.forEach(vm.listPersonas, function(persona) {
          if (persona.id === vm.idPersona) {
            vm.personaSelect = persona;
            vm.direPersona = persona.direccion;
          }
        });
      }

      function validPhone(telefono){
        telefono = ""+ telefono;
        if( telefono.length < 11 ) {
        return false;
        }else {
          return true;
        }
      }

      //Funcion para validar el rut formato "XXXXXXXX-X"
      function validaRut(rutCompleto) {
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
        return false;
        var tmp 	= rutCompleto.split('-');
        var digv	= tmp[1];
        var rut 	= tmp[0];

        if ( digv == 'K' ) digv = 'k' ;
        return (dv(rut) == digv );
      }

      function dv(T){
        var M= 0;
        var S= 1;

        for(;T;T=Math.floor(T/10))
        S = (S+T%10*(9-M++%6))%11;
        return S ? S-1 : 'k';
      }
    }
})();
