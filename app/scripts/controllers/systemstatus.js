angular.module('thermostatApp')
  .controller('SystemStatusCtrl', function Ctrl($scope, $http) {

    'use strict';

    var status = {'id':0,'name':'System On','path':'/var/thermronstat/status/0','value':'0.0'};
    $scope.read = function() {
          console.log('Fetching System Status initial value');
          $http.get('/api/status/0')
            .success(function(response) {
              console.log('System Status returning:', response);
              status = response;
              return response;
            });

    };

    $scope.read();

    $scope.status = function() {
       return { 'checked' : status.value === '1.0' };
    };

    $scope.toggle = function() {
      console.log('status.value:', JSON.stringify(status.value));
      if (status.value === '0.0') {
        console.log('turn On!');
        status.value = '1.0';
      } else {
        console.log('turn Off!');
        status.value = '0.0';
      }

      console.log('Do put:', status);

      $http.put('/api/status/0', status)
        .then(function(response) {
          console.log('Put response:', response);
          return response;
        });
    };
  }
);
