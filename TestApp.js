var app = angular.module('TestApp', []);
app.controller('Test', function($scope, $http) { //$scope is used to bind data between view and controller, $http is used for reading data from remote server
    $scope.user = ""; 
	$scope.getname = function() { //defined function getname(), when getname() is called, HTTP get request is used to get data from the server
	$http.get("http://dev.addictiveadsnetwork.com/api/v1/test/hello/" + $scope.user) //passing parameter Your_Name using variable "user"
    .then(function(response) {$scope.name = response.data;}); //save returned data to variable "name"
	};
});
