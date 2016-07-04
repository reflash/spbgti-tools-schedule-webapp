'use strict'

angular.module('myApp.view_by_group_search', ['ngRoute', 'config'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view_by_group_search', {
    templateUrl: 'view_by_group_search/view_by_group_search.html',
    controller: 'GroupSearchCtrl'
  });
}])

.controller('GroupSearchCtrl', ['$scope', '$http', 'ENV', function($scope, $http, ENV) {
    $scope.groups = [];
    $scope.groupModel = {group_id: 1, number: ''};
    $scope.schedule = [];

    $http.get(ENV.apiEndpoint + '/get_all_groups').then(
        function (result) {
            $scope.groups = result.data;
        }, function (error) {
            alert(error.message);
        }
    );
    
    $scope.updateSchedule = function (group) {
        $http.get(ENV.apiEndpoint + '/get_schedule_by_group/' + group.number).then(
        function (result) {
            alert(JSON.stringify(result.data));
            $scope.schedule = result.data;
        }, function (error) {
            alert(error.message);
        }
    );
    }
}]);