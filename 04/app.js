angular.module('myApp', [])
.controller('myController', function ($scope, $http) {
	$scope.bowlOfFruit = [
	{name: 'Apple'},
	{name: 'Pear'},
	{name: 'Orange'}
	];
	$scope.add = function(data) {
		$scope.bowlOfFruit.remove({name : data});
	};
});

