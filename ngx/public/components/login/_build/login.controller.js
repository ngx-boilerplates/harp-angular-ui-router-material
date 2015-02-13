(function () {

  /**
   * LoginCtrl controller
   *
   * @param $scope
   * @constructor
   */
  function LoginCtrl($scope, $timeout){

    // ADD CUSTOM LOGIC HERE
    // BELOW IS JUST SAMPLE CODE

    // Default credentials
    $scope.credentials = {
      username: '',
      password: ''
    };

    // Placeholder for status
    $scope.loginFailed = false;
    $scope.loginSuccess = false;
    $scope.isBusy = false;


    $scope.doLogIn = function(credentials){

      $scope.loginFailed = false;
      $scope.loginSuccess = false;
      $scope.isBusy = true;

      // Use artificial timer to display loader
      // You should not do this in production
      // Instead query some API here

      $timeout(function(){
        if(!credentials && !credentials.username && !credentials.password){
          $scope.loginFailed = true;
          return;
        }
        $scope.loginSuccess = true;
        $scope.isBusy = false;
      }, 2000);

    };

  }

  // Inject dependencies
  LoginCtrl.$inject = ['$scope', '$timeout'];

  // Assign
  angular.module('app')
    .controller('LoginCtrl', LoginCtrl);

})();
