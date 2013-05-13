'use strict';

angular.module('demo').controller('myController3', function($scope, users) {
    $scope.users = users.getUsers();
});