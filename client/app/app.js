'use strict';

angular.module('bitcoinApp', [
  'bitcoinApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/transaction-stream');

    $locationProvider.html5Mode(true);
  });
