"use strict";
var app = angular.module('competitionApp.resource', []);


app.factory('resourceFactory', ['$http', '$q', function($http, $q) {
        // factory to load resources from server/API
        // using Angular Q objects
        var resourceFactory = {};

        resourceFactory.getDataByUrl = function (urls) {

            var resources = {};
            Object.keys(urls).map(function (resource, _) {

                return resources[resource] = $http({method: "get", url: urls[resource]});
            });

            return $q.all(resources);
        };

    return resourceFactory;

    }]);