'use strict';

/* Filters */

angular.module('demo').filter('interpolate', function(web) {
    return function(text) {
      return String(text).replace(/\%WEB\%/mg, web);
    }
});