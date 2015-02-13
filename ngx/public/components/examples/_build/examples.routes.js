(function () {

  angular.module('app')
    .config(['$stateProvider', function ($stateProvider) {

      $stateProvider
        .state('examples', {
          url: '/examples',
          views: {
            'content@': {
              templateUrl: '/components/examples/examples.html',
              controller: 'ExamplesCtrl',
              controllerAs: 'ExamplesCtrl'
            }
          }
        });

    }]);

})();
