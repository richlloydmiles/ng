angular.module('myApp', [])
.controller('myController', function ($scope, $http) {
$scope.people = [];

$http.get('people.json').success(function(data) {
	console.log(data)
});
});
