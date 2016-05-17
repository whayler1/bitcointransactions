'use strict';

angular.module('bitcoinApp')
  .directive('transactionsCard', function () {
    return {
      templateUrl: 'components/transactions-card/transactions-card.html',
      restrict: 'E',
      scope: {},
      controller: 'TransactionsCardCtrl'
    };
  });
