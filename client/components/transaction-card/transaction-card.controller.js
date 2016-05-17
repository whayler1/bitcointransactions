'use strict';

angular.module('bitcoinApp')
  .controller('TransactionCardCtrl', function (
    $scope,
    $log
  ) {
    $log.log('%ctransaction!', 'background:yellow', $scope.transaction);
  });
