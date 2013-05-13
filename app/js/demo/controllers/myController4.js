'use strict';

angular.module('demo').controller('myController4', function($scope, UserService) {
    $scope.users = UserService.getAll();
    $scope.hasWants = UserService.hasWants;
});