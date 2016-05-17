'use strict';

angular.module('bitcoinApp')
  .controller('TransactionsCardCtrl', function (
    $scope,
    transactions
  ) {

    const onUpdate = (transactionsList) => {

      _.defer(() => $scope.$digest());
    };
    const debounceOnUpdate = _.debounce(onUpdate, 250, {maxWait:1000})

    transactions.addTransactionsListener(debounceOnUpdate);

    $scope.transactions = transactions.getTransactions();
  });
