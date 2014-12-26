var app = angular.module('thermostatApp')
  .controller('TargetCtrl', function Ctrl($scope, $http) {

    'use strict';

    $scope.target = {'id':0,'name':'Target Temperature','path':'/var/thermronstat/target/0','fahrenheit':0.0};
    $scope.read = function() {
          console.log('Fetching Target initial value');
          $http.get('/api/target/0')
            .success(function(response) {
              console.log('returning:', response);
              $scope.target = response;
              $scope.fahrenheit = response.fahrenheit;
              return response;
            });

    };

    $scope.read();

    $scope.set = function() {
          $scope.target.fahrenheit = $scope.fahrenheit;
          console.log('Put Target value:', $scope.target);

          $http.put('/api/target/0', $scope.target)
            .success(function(response) {
              console.log('returning:', response);
              $scope.target = response;
              $scope.fahrenheit = response.fahrenheit;
              return response;
            });

    }

    $scope.temperature = function() {
      console.log('Target scope.temperature:', $scope.target);
      return $scope.target;
    }
  }
);

