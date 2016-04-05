'use strict';

const angular = require('angular');

angular.module('weatherApp')
.service('weatherService', function($http) {
  this.getWeather = function (cb) {
    $http.get('https://api.forecast.io/forecast/e7fa01d3a0f5e43c11977172fdc5b6e5/38.9070,-77.0252').then(cb);
  };

});
