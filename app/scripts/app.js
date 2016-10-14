'use strict';

/**
 * @ngdoc overview
 * @name cpsClientApp
 * @description
 * # cpsClientApp
 *
 * Main module of the application.
 */
angular
  .module('cpsClientApp', [
    'cpsClientApp.services',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.grid',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('main',{
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
      })
      .state('about',{
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
      })
      .state('contact',{
          url: '/contact',
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl'
      })

      .state('products', {
          url: '/products',
          templateUrl: 'partials/products/list.html',
          controller: 'ProductListController'
      })
      .state('viewProduct', {
          url: '/products/:id/view',
          templateUrl: 'partials/products/view.html',
          controller: 'ProductViewController'
      })
      .state('newProduct', {
          url: '/products/new',
          templateUrl: 'partials/products/add.html',
          controller: 'ProductCreateController'
      })
      .state('editProduct', {
          url: '/products/:id/edit',
          templateUrl: 'partials/products/edit.html',
          controller: 'ProductEditController'
      })

      .state('licenses', {
          url: '/licenses',
          templateUrl: 'partials/licenses/list.html',
          controller: 'LicenseListController'
      })
      .state('viewLicense', {
          url: '/licenses/:id/view',
          templateUrl: 'partials/licenses/view.html',
          controller: 'LicenseViewController'
      })
      .state('newLicense', {
          url: '/licenses/new',
          templateUrl: 'partials/licenses/add.html',
          controller: 'LicenseCreateController'
      })
      .state('editLicense', {
          url: '/licenses/:id/edit',
          templateUrl: 'partials/licenses/edit.html',
          controller: 'LicenseEditController'
      })

      .state('generators', {
          url: '/generators',
          templateUrl: 'partials/generators/list.html',
          controller: 'GeneratorListController'
      })
      .state('viewGenerator', {
          url: '/generators/:id/view',
          templateUrl: 'partials/generators/view.html',
          controller: 'GeneratorViewController'
      })
      .state('newGenerator', {
          url: '/generators/new',
          templateUrl: 'partials/generators/add.html',
          controller: 'GeneratorCreateController'
      })
      .state('editGenerator', {
          url: '/generators/:id/edit',
          templateUrl: 'partials/generators/edit.html',
          controller: 'GeneratorEditController'
      });
    })
    .run(function($state){
          $state.go('main');
  });
      


    
