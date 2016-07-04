'use strict';

describe('myApp.view_by_group_search module', function() {

    var controller, $scope;

    beforeEach(module('myApp.view_by_group_search'));

    beforeEach(inject(function ($controller) {
        $scope = {};
        controller = $controller('GroupSearchCtrl', {$scope: $scope});
    }));


    describe('view_by_group_search controller', function () {

        it('should load GroupSearchCtrl', inject(function () {
            expect(controller).toBeDefined();
        }));

        it('initially has groups empty array', inject(function () {
            expect($scope.groups).toBeDefined();
        }));

    });

});