(function () {

  angular.module('app')
    .config(['$stateProvider', function ($stateProvider) {

      $stateProvider
        .state('login', {
          url: '/login',
          views: {
            'content@': {
              templateUrl: '/components/login/login.html',
              controller: 'LoginCtrl',
              controllerAs: 'LoginCtrl'
            }
          }
        });

    }]);

})();
