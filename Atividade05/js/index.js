(function () {
  'use strict';
  angular
      .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('AppCtrl', function() {
        this.userState = '';
        this.states = ('AC AL' + ' AM AP BA CE DF ES' + ' GO MA MG MS MT PA PB PE PI PR RJ RN RO RR RS SC SE SP TO ').split(' ').map(function (state) { return { abbrev: state }; });
      });
})();

(function () {
  'use strict';
  angular
      .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('AppCtrl', function() {
        this.userState1 = '';
        this.states = ('AC AL' + ' AM AP BA CE DF ES' + ' GO MA MG MS MT PA PB PE PI PR RJ RN RO RR RS SC SE SP TO ').split(' ').map(function (state) { return { abbrev: state }; });
      });
})();
