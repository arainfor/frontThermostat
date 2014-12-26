'use strict';

/**
 * @ngdoc function
 * @name thermostatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the thermostatApp
 */
angular.module('thermostatApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
