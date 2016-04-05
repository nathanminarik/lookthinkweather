'use strict';

const angular = require('angular');

angular.module('weatherApp').controller('weatherCtrl', function($scope, weatherService){
  
  $scope.hello = "Nathan";
  
  $scope.four = 2+2;
  
  weatherService.getWeather(function (weather){
    $scope.weather = weather;      
  });
});