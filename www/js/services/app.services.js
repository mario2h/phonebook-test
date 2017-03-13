(function() {
  'use strict';

  angular
    .module('starter.services', [])
    .factory('ContactsServices', ContactsServices)
    .factory('GetterAndSetter', GetterAndSetter);

    //--------- [injeccion de dependencias] ---------//
    ContactsServices.$inject = ['$http', '$log', '$q'];

    //--------- [controller] -----------//
    function ContactsServices($http, $log, $q) {
      var vm = this;

      var service = {
        getPersonas: getPersonas,
        getRegiones: getRegiones
      };

      return service;

      // consulta API para obtener el listado de personas.
      function getPersonas() {
        var apiUrl = 'https://private-ba0c20-phonebooktest.apiary-mock.com/persona';
        var d = $q.defer();

        $http
            .get(apiUrl)
            .then(displayPersonas)
            .catch(displayError)

        function displayPersonas (response) {
          console.info(response);
          d.resolve(response.data);
        }

        function displayError (error) {
          var error = error.data;
          $log.error('Error API:', error);
          d.reject();
        }
        return d.promise;
      }

      //consulta la API para obtener el listado de regiones.
      function getRegiones() {
        var apiUrl = 'https://private-ba0c20-phonebooktest.apiary-mock.com/region';
        var d = $q.defer();

        $http
            .get(apiUrl)
            .then(displayRegiones)
            .catch(displayError)

        function displayRegiones (response) {
          console.info(response);
          d.resolve(response.data);
        }

        function displayError (error) {
          var error = error.data;
          $log.error('Error API:', error);
          d.reject();
        }
        return d.promise;
      }
    }

    function GetterAndSetter(){

    	var persData = '';
    	var regData = '';

    	var service = {
    		getPersonas: getPersonas,
    		getRegiones: getRegiones,
    		setPersonas: setPersonas,
    		setRegiones: setRegiones
    	};

    	return service;

    	function getPersonas(){
    		return persData;
    	}

    	function getRegiones(){
			  return regData;
    	}

    	function setPersonas(data){
    		persData = data;
    	}

    	function setRegiones(data){
    		regData = data;
    	}


    }
})();
