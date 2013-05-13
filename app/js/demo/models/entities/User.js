'use strict';

/* Model (actually Factory) */


// Demonstrate how to register models
// In this case it is a simple model factory.
// This could be used as a traditional model

angular.module('demo').factory('User', function()
{
    var User = function(data) {
        //set defaults properties and functions
        angular.extend(this, {
            id:null,
            name: '',
            wants: [],
            //... other properties

            constructor:function() {
                // define constructor method
            },
            //dummy hasWants function
            hasWants:function(){
                return (this.wants.length > 0);
            }
        });

        // copies properties from data onto this
        angular.extend(this, data);
    };
    return User;
});