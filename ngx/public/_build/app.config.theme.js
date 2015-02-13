(function () {

  angular.module('app')
    .config(configureTheme);

  /**
   * Enable HTML5 routing mode
   */
  function configureTheme($mdThemingProvider) {

      // You can change the palette right here
      // to any color you like from
      // https://material.angularjs.org/#/Theming/03_configuring_a_theme
      $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('pink');
  }

  // Inject dependencies;
  configureTheme.$inject = ['$mdThemingProvider'];

})();
