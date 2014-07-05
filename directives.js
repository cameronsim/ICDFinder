'use strict';

define([],function(){

    var directives = {} ;

    directives.ngEnter = function() {
        return {

            link: function (scope, element, attrs) {

                element.bind("keydown keypress", function (event) {
                    if(event.which === 13) {
                        scope.$apply(function (){
                            scope.$eval(attrs.ngEnter);
                        });

                        event.preventDefault();
                    }
                });
            }
        }
    };

    directives.mydirective = function() {
        return {
            restrict : "EA",
            template : "<strong>myAmazingDirective</strong>",
            replace : true
        };
    };

    directives.appVersion = function(version){
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    };



    directives.csfooter = function() {
        return {
            restrict : "EA",
            template : "<strong>Crewspark Inc. 2013</strong>",
            replace : true
        };

    };


    directives.distortthatdiv = function() {

        return {
            //restrict: 'A',
            link: function ($scope, element, attrs) {
                element.on('click', function () {
                    // do something
                    //console.log(attrs);
                    $scope.verifyTest(attrs);
                });
            }
        };
    };


return directives;
});




