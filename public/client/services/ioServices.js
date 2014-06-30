app.factory('ioServices', function($http, $q) {

    function retrieve() {
        var deferred = $q.defer();
        $http({method: 'GET', url: '/fetch'})
            .success(function(data, status, headers, config) {
                console.log(data);
                deferred.resolve(data);
            })
            .error(function(data, status, headers, config) {
                deferred.reject("Error in retrieving data: "+status);
            });
        return deferred.promise;
    }

    return {
        retrieve: retrieve
    };
});