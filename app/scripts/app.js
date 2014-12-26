'use strict';

/**
 * @ngdoc overview
 * @name thermostatApp
 * @description
 * # thermostatApp
 *
 * Main module of the application.
 */
angular
  .module('thermostatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/thermostat', {
        templateUrl: 'views/thermostat.html',
        controller: 'SystemStatusCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
