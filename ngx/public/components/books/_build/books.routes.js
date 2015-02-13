(function () {

  angular.module('app')
    .config(['$stateProvider', function ($stateProvider) {

      $stateProvider
        .state('books', {
          url: '/books',
          views: {
            'content@': {
              templateUrl: '/components/books/books.html',
              controller: 'BooksCtrl',
              controllerAs: 'BooksCtrl'
            }
          }
        });

    }]);

})();
