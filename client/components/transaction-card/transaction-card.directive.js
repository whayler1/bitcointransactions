'use strict';

angular.module('bitcoinApp')
  .directive('transactionCard', function () {
    return {
      templateUrl: 'components/transaction-card/transaction-card.html',
      restrict: 'E',
      scope: {
        transaction: '='
      },
      controller: 'TransactionCardCtrl'
    };
  });
