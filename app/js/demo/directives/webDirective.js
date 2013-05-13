'use strict';

/* Directives */


angular.module('demo').directive('web', function(web) {
    return function(scope, elm, attrs) {
      elm.text(web);
    };
});