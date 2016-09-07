LanguageApp.factory('service', function($http,$q, $log, $rootScope, $ionicPopup) {
    // Might use a resource here that returns a JSON array
    return {
        getall: function () {
            var deferred = $q.defer(); //promise
            $http({
                method: 'GET',
                url: 'data/english.json',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
            }).success(function (data, status, headers, config) {
                deferred.resolve(data);
            }).error(function (data, status, header, config) {
                deferred.reject(status);
            });
            return deferred.promise;
        }
    }
});
