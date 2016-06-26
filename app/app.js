'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

var app = angular.module('app',[]);

app.controller('GroupController', ['$scope', '$http', function($scope, $http) {
    $scope.groups = [];
    $http.get('/api/get_all_groups')
}]);

var app = angular.module('appModule', ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/', {
            templateUrl: 'templates/list.html',
            controller: 'listController'
        }).
        when('/create', {
            templateUrl: 'templates/create.html',
            controller: 'createController'
        }).
        when('/edit/:key', {
            templateUrl: 'templates/edit.html',
            controller: 'editController'
        }).
        when('/delete/:key', {
            templateUrl: 'templates/delete.html',
            controller: 'deleteController'
        }).
        otherwise({
            redirectTo: '/'
        });
  }]);

app.controller('listController', function ($scope, $http) {
    $scope.keys = [];
    $http.get('KeyValue/GetAll').then(
       function (result) {
           $scope.keys = result.data;
       }, function (error) {
           alert(error.message);
       }
    );
});

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
