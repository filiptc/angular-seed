'use strict';

/* Filters */
/*
angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
*/
myApp.filter('interpolate', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
});