var ROOT="";


define(
    [
        "angular",
        "controllers"
    ],

    function BaseManager(angular){
        var initialize = function () {

            var app = angular.module("myApp", ['ngRoute'],
                function($routeProvider,$locationProvider) {

                    $routeProvider.when('/', {

                        templateUrl: 'index.html'
                    });

//                    $routeProvider.otherwise( { redirectTo: '/'} );

//                    $httpProvider.responseInterceptors.push(Services.authInterceptor);

                    $locationProvider.html5Mode(true);
                });

//            Filters.initialize(app);

//            app.factory(Services);
//            app.directive(Directives);

            angular.bootstrap(document,["myApp"]);

        };
        return {
            initialize : initialize
        };
    });

