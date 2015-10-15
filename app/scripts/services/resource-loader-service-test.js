describe('resourceFactory', function() {

    // setup test module
    beforeEach(module('competitionApp.resource'));

    var url = 'http://footballbet.com.ua/api/teams/';

    it('should return http response 200', inject(function (resourceFactory, $rootScope, $httpBackend) {
            $httpBackend.expect('GET', url).respond(200);
            var status = false;
            browser.executeScript(function() {
                console.log(angular.element(document).injector().get('resourceFactory'));
                console.log(angular.element(document).injector().get('resourceFactory').getDataByUrl);
              return angular.element(document).injector().get('resourceFactory').getDataByUrl({'teams': url}).success(function(){
                status = true;
                });
            });

            $rootScope.$digest();
            $httpBackend.flush();
            expect(status).toBe(true);
            $httpBackend.verifyNoOutstandingRequest();
        })
    )
});