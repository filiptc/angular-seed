'use strict';

// Declare app level module (with no dependencies)

angular.module('demo', [])
  .config(['$routeProvider', function($routeProvider) {
    // regular viewModel demo
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'myController1'});
    // filter demo (uses declared value)
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'myController2'});
    // provider demo
    $routeProvider.when('/view3', {templateUrl: 'partials/partial3.html', controller: 'myController3'});
    // service-model demo (with XHR)
    $routeProvider.when('/view4', {templateUrl: 'partials/partial4.html', controller: 'myController4'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
