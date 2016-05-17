'use strict';

angular.module('bitcoinApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('transaction-stream', {
        url: '/transaction-stream',
        // controller: (websocket) => {},
        template: '<transactions-card></transactions-card>'
      });
  });
