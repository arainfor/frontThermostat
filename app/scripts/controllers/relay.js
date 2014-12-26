angular.module('thermostatApp')
  .controller('RelayCtrl', function Ctrl($scope, $http) {

    'use strict';

    var relay = {'id':0,'name':'System On','path':'/var/thermronstat/relay/0','value':'0.0'};
    $scope.read = function() {
          console.log('Fetching initial value');
          $http.get('/api/relay/0')
            .success(function(response) {
              console.log('returning:', response);
              relay = response;
              return response;
            });

    };

    $scope.read();

    $scope.relay = function() {
       return { 'checked' : relay.value === '1.0' };
    };

    $scope.toggle = function() {
      console.log('relay.value:', JSON.stringify(relay.value));
      if (relay.value === '0.0') {
        console.log('turn On!');
        relay.value = '1.0';
      } else {
        console.log('turn Off!');
        relay.value = '0.0';
      }

      console.log('Do put:', relay);

      $http.put('/api/relay/0', relay)
        .then(function(response) {
          console.log('Put response:', response);
          return response;
        });
    };
  }
);
