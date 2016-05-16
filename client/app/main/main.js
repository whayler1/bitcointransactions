'use strict';

angular.module('bitcoinApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>',
        controller: (
          websocket
        ) => {

        }
      });
  });
