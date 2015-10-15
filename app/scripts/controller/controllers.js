"use strict";

var app = angular.module('competitionApp.retrieveCompetitions', [
    "ui.router", "ngDialog", "ngSanitize", "angularSpinner"
]);

app.controller("retrieveCompetitions", function ($scope, $http, resourceFactory, usSpinnerService) {

    var resourceUrls = {
                        teams: "http://footballbet.com.ua/api/teams/",
                        champs:"http://footballbet.com.ua/api/championships/"
                        };

    var resourcePromise = resourceFactory.getDataByUrl(resourceUrls);

    usSpinnerService.spin('load-spinner');
    resourcePromise.then(
        function (resources) {
            $scope.competitions = resources.champs.data.result;
            $scope.teams = resources.teams.data.result;
            usSpinnerService.stop('load-spinner');
        },
        function errorCallback(data, status){
            // suspend spinner as it van freeze page
            // in case error of resourceFactory
            usSpinnerService.stop('load-spinner');
            console.error('Error fetching resource!', status);
        });

});



