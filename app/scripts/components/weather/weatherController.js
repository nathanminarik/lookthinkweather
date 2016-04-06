'use strict';

const angular = require('angular');

angular.module('weatherApp').controller('weatherCtrl', function($scope, weatherService){
  
  $scope.hello = "Nathan";
  
  $scope.alerts = [];
  $scope.todo = ["1", "2"];
  

  weatherService.getWeather(function (weather){
    $scope.weather = weather.data;
    $scope.alerts = weather.data.alerts;
    console.log(weather);    
  });
});