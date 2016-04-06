webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const angular = __webpack_require__(1);


	angular.module('weatherApp', []);

	__webpack_require__(3);
	__webpack_require__(4);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const angular = __webpack_require__(1);

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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const angular = __webpack_require__(1);

	angular.module('weatherApp')
	.service('weatherService', function($http) {
	  this.getWeather = function (cb) {
	    $http.get('https://api.forecast.io/forecast/e7fa01d3a0f5e43c11977172fdc5b6e5/38.9070,-77.0252').then(cb);
	  };

	});


/***/ }
]);