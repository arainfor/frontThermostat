angular.module('thermostatApp')
  .controller('TemperatureCtrl', function Ctrl($scope, $http) {

    'use strict';

    var temperature = [
                        { "id":0,"name":"indoor","source":"28-0000065ce60f","fahrenheit":20.9 },
                        { "id":1,"name":"outdoor","source":"28-0000065ce60f","fahrenheit":12.7 },
                        { "id":2,"name":"plenum","source":"28-0000065ce60f","fahrenheit":30.9 }
                      ];
    $scope.read = function() {
          console.log('Fetching initial value');
          $http.get('/api/temperature')
            .success(function(response) {
              console.log('returning:', response);
              temperature = response;
              return response;
            });

    };

    $scope.read();

    $scope.temperature = function() {
       console.log('Thermometers scope.temperature:', temperature);
       return temperature;
    };
    //$scope.temperature = temperature;
  }
);
