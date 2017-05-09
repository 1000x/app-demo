/**
 * filter
 */
(function() {
    'use strict';
    angular.module('app.filters', []).filter('percent', function() {
        return function(input) {
            if (input === null || input === undefined || input === "") {
                return ""
            }
            input = input + "";
            if (!/\d+/.test(input)) {
                return "";
            }
            return (Number(input) / 100).toFixed(2) + "%";
        };
    });
}).call(this);


