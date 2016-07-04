'use strict'

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'config',
    'myApp.view_by_group_search',
    'myApp.version'
]).

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view_by_group_search'});
}]);


/* EXAMPLES

app.controller('createController', function ($scope, $http, $location) {
    $scope.key = "";
    $scope.value = "";

    $scope.submit = function() {
        return $http({
            method: 'POST',
            url: '/KeyValue/Set',
            data: { key: $scope.key, value: $scope.value },
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        }).success(function(data) {
            $location.path('/');
        });
    }
});

app.controller('editController', function ($scope, $http, $location, $routeParams) {
    $scope.disabled = true;
    $scope.key = "";
    $scope.value = "";

    $http.get('KeyValue/Get/'+$routeParams.key).then(
       function (result) {
           $scope.key = result.data.key;
           $scope.value = result.data.value;
           $scope.disabled = false;
       }, function (error) {
           alert(error.message);
       }
    );
    $scope.submit = function () {
        return $http({
            method: 'POST',
            url: '/KeyValue/Set',
            data: { key: $scope.key, value: $scope.value },
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        }).success(function (data) {
            $location.path('/');
        });
    }
});

app.controller('deleteController', function ($scope, $http, $location, $routeParams) {
    $scope.key = "";
    $scope.value = "";

    $http.get('KeyValue/Get/' + $routeParams.key).then(
       function (result) {
           $scope.key = result.data.key;
           $scope.value = result.data.value;
       }, function (error) {
           alert(error.message);
       }
    );
    $scope.submit = function () {
        return $http.delete('/KeyValue/Remove/' + $routeParams.key)
        .then(function (res) {
            $location.path('/');
        }, function (error) {
            console.log(error);
        });
    }
});
*/
