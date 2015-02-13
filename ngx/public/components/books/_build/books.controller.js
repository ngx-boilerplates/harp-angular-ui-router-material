(function () {

  /**
   * BooksCtrl controller
   *
   * @param $scope
   * @constructor
   */
  function BooksCtrl($scope){

    // ADD CUSTOM LOGIC HERE

    $scope.books = [
      { title: 'Book one', author: 'Jurgen Van de Moere'},
      { title: 'Book two', author: 'Jurgen Van de Moere'},
      { title: 'Book three', author: 'Jurgen Van de Moere'},
      { title: 'Book four', author: 'Jurgen Van de Moere'},
      { title: 'Book five', author: 'Jurgen Van de Moere'}
    ];

    $scope.addBook = function(book){
      $scope.books.push(book);
    };

    $scope.removeBook = function(book){
      $scope.books = $scope.books.filter(function(b){
        return b !== book;
      });
    };

  }

  // Inject dependencies
  BooksCtrl.$inject = ['$scope'];

  // Assign
  angular.module('app')
    .controller('BooksCtrl', BooksCtrl);

})();
