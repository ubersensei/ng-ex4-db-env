app.controller('fetchController',  function($scope, ioServices) {
    ioServices.retrieve().then( function(data) {
            $scope.users = data;
        }, function(reason) {
            $scope.users = reason;
        }
    );
});