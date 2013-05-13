'use strict';

/* Service */


// Demonstrate how to serve model-based entities
// In this case it is a simple service factory.
// This could be used as a traditional model-service

angular.module('demo').service('UserService', function($http, $q, User) {
    this.getById = function(id) {
        return $http.get('/mockApi/user/' + id).then(
            function(response) {
                //this is where the Element model is used
                return new User(response.data);
            },
            function(response) {
                return $q.reject(response.data.error);
            }
        );
    };
    this.getAll = function() {
        return $http.get('/mockApi/user/all').then(
            function(response) {
                //this is where the Element model is used
                var users = [];
                for (var i = 0; i<response.data.users.length; i++) {
                    users.push(new User(response.data.users[i]));
                }
                return users;
            },
            function(response) {
                return $q.reject(response.data.error);
            }
        );
    };
});