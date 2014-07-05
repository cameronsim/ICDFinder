'use strict';

/* Services */


//var serviceModule = angular.module('myApp.services',[]);



define([],function($http,$scope){

    var services = {};

//    services.icdSearchService = function($resource){
//
//        var service = $resource("http://ec2-54-85-4-114.compute-1.amazonaws.com:9200/icd/_search");
//
//        return {
//            save : function(data, onSuccess, onFail){
//                service.save(data, onSuccess, onFail);
//            }
//        }
//    };

    services.icdSearchService = function($resource){

        var url = $resource("http://ec2-54-85-4-114.compute-1.amazonaws.com:9200/icd/_search");

        return {
            search : function(data){
                $http.post(url, data, null);
            }
        };

    };

        services.httpPostService = function($http){

        return function(url, payload){

            //payload.source="WEB";

            var headers={
//                'Content-Type':'application/json;charset=utf-8',
//                'clientKey':'SDFSDFGADFGSD345345345',
//                'Accept': 'application/json'
            };

            var config={"headers":headers};

           // delete $http.defaults.headers.common['X-Requested-With'];

            return $http.post(url, payload, config);
        }
    };

    return services;

});
