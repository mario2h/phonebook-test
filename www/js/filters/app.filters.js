(function() {
  'use strict';

  angular
    .module('starter.filters', [])
    .filter('rut', rut)
    .filter('phone', phone);

    //------- [filtros] -------------//

    /* Recibe el rut en formato string en cualquiera de los siguientes formatos
     * '11111111'
     * '11.111.111-1'
     * '001111111' con ceros a la izquierda*/

    function rut() {
      return formatRut;
    }

    function formatRut(rut) {

        var _rut = cleanRut(rut);

        if (!_rut)
            return rut;

        if (_rut.length <= 1)
            return rut;

        var result = _rut.slice(-4, -1) + '-' + _rut.substr(_rut.length - 1);

        for (var i = 4; i < _rut.length; i += 3)
            result = _rut.slice(-3 - i, -i) + '.' + result;

        return result;

    }

    function cleanRut(_value) {
        return typeof _value === 'string'
                ? _value.replace(/[^0-9kK]+/g, '').replace(/^0+/, '').toUpperCase() : '';
    }

    // formatea telefono de acuerdo a formato internacional
    function phone(){
      return formatPhone;
    }

    function formatPhone(value){
      value = "" + value;

      if( value.length >= 11 ){
        var pais = value.substr(0, 2);
        var codigo = value.substr(2, 1);
        var phone = value.substr(3);

      return "+" + pais + " " + codigo + " " + phone;

    }else{

      return value;
    }
  }

})();
