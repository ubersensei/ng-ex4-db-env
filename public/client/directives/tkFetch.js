app.directive('tkFetch',  function() {
    return {
        restrict: 'AE',
        controller: 'fetchController',
//        templateUrl: 'client/views/retrieve.html'
        template: '<div ng-repeat="user in users">{{user.userId}} + {{user.userName}}</div>'
    };
});