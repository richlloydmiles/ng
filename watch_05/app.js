angular.module('myApp', [])
.controller('myController', function ($scope, $http) {



	$scope.$watch('fruit', function(newVal , oldVal){
console.log(newVal);
	});



});
