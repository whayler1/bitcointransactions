'use strict';

angular.module('bitcoinApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('transaction-stream', {
        url: '/transaction-stream',
        template: '<transactions-card></transactions-card><p class="tranactions-instructions">Click a transaction on the left to view details.</p><ui-view></ui-view>'
      })
      .state('transaction-stream.transaction', {
        url: '/:hash',
        resolve: {
          transaction: ($http, $stateParams, $q, $log) => {

            return $http.get(`/api/transactions?transactionHash=${$stateParams.hash}`).then(
              res => {
                // $log.log('SUCCESS!', res);
                return $q.when(res.data);
              },
              res => {
                $log.error('error retrieving transaction');
              }
            );
          }
        },
        controller: ($scope, transaction) => {
          $scope.transaction = transaction;
        },
        template: '<transaction-card transaction="transaction"></transaction-card>'
      });
  });
