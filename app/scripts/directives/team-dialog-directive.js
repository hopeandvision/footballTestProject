
var app = angular.module('competitionApp.teamDialog', ['ngDialog']);


app.directive('teamDialog', ['ngDialog', function(ngDialog) {
    // pop-up directive that embed team
    // objects to use them in scope of dialog
    return {
        restrict: 'A',
        scope: { team: '=' },
        templateUrl: "app/scripts/directives/team.html",
        link: function(scope, element){

            element.on('click',function(){

                ngDialog.open({
                    templateUrl: "app/scripts/directives/team-dialog.html",
                    scope: scope
                })

            });
        }
    };
}]);