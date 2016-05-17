'use strict';

angular.module('bitcoinApp')
  .controller('TransactionsCardCtrl', function (
    $scope,
    $log
  ) {

    // $log.log('%ctransaction card', 'background:aqua', $scope.transactions.length);
    $scope.onTransactionClick = (transaction) => {
      $log.log('transaction:', transaction);
    };
  });
