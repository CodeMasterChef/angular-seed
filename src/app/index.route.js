(function() {
  'use strict';

  angular
    .module('angularGulp')
    .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/pages/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
       .state('about', {
        url: '/about',
        templateUrl: 'app/pages/about/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      })
      .state('about.sub-about', {
        url: '/sub-about',
        templateUrl: 'app/pages/about/sub-about/sub-about.html',
        controller: 'SubAboutController',
        controllerAs: 'vm'
      });
      
    $urlRouterProvider.otherwise('/');
  }

})();
