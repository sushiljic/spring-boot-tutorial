'use strict';

angular.module('appDoCFD')

.factory('flightConditionDataAPI', ['$q', '$http', 'flightConditionDataURL', function($q, $http, flightConditionDataURL) {
    return new function() {

        this.getData = function() {
            var deferred = $q.defer();

            $http.get( flightConditionDataURL ).
                success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject([data,status,headers,config]);
                });

            return deferred.promise;
        }

    };
}]);