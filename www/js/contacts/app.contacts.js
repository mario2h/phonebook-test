(function() {
  'use strict';

  angular
    .module('starter.contacts', [])
    .controller('ContactsController', ContactsController);

    //------- [injeccion de dependencias] --------//
    ContactsController.$inject = ['ContactsServices', 'GetterAndSetter', '$ionicModal', '$scope'];

    //------- [controller] -------------//
    function ContactsController(service, getAndSet, $ionicModal, $scope) {
      var vm = this;

      //variables
      vm.listPersonas = [];
      vm.listRegiones = [];
      vm.nombrePerso = '';
      vm.apellidoPerso = '';
      vm.regionName = '';
      vm.comunaName = '';
      vm.filterName = '';
      vm.filterLName = '';
      vm.filterComuna = '';
      vm.filterRegion = '';
      vm.filtros = false;

      //functions
      vm.validaRut = validaRut;
      vm.openModal = openModal;
      vm.closeModal = closeModal;
      vm.filtrar = filtrar;
      vm.LimpiaFiltro = LimpiaFiltro;

      activate();

      function activate () {
        service.getPersonas()
                .then(function (data) {
                  getAndSet.setPersonas(data);
                  vm.listPersonas = data;
                });

        service.getRegiones()
                .then(function (data) {
                  getAndSet.setRegiones(data);
                  vm.listRegiones = data;
                })
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

      //Configuramos el modal
      $ionicModal.fromTemplateUrl('modalfilter.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      function openModal(){
        $scope.modal.show();
      }

      function closeModal(){
        resetModal();
        $scope.modal.hide();
      }

      function filtrar(){
        angular.forEach(vm.listPersonas, function(persona){
          if( persona.comunaId === undefined ){
              persona.comunaId = persona.direccion.comuna.id;
              angular.forEach(vm.listRegiones, function(region) {
                angular.forEach(region.comunas, function(comunas) {
                  if( comunas.id === persona.comunaId ) {
                    persona.regionId = region.id;
                  }
                });
            });
          }
        });

        vm.filtros = true;
        vm.filterName = vm.nombrePerso;
        vm.filterLName = vm.apellidoPerso;
        vm.filterComuna = vm.comunaName;
        vm.filterRegion = vm.regionName;
        closeModal();
      }

      function LimpiaFiltro(){
        vm.filtros = false;
        resetModal();
        resetAll();
        closeModal();
      }

      function resetModal(){
        vm.nombrePerso = '';
        vm.apellidoPerso = '';
        vm.regionName = '';
        vm.comunaName = '';
      }

      function resetAll(){
        vm.filterName = '';
        vm.filterLName = '';
        vm.filterComuna = '';
        vm.filterRegion = '';
      }
    }
})();
