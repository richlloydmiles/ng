angular.module('myApp', [])
.controller('myController', function ($scope, $http) {
  $scope.bowlOfFruit = [
    {name: 'Apple'},
    {name: 'Pear'},
    {name: 'Orange'}
  ];
});
