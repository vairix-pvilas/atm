'use strict';

var app = angular.module('atmApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])

.config(function ( $routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/atms',
      controller: 'AtmCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});

