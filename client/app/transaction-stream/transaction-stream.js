'use strict';

angular.module('bitcoinApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('transaction-stream', {
        url: '/transaction-stream',
        params: {
          mostRecentHash: undefined
        },
        controller: (
          $scope,
          $state,
          $log,
          transactions
        ) => {

          const onUpdate = (transactionsList) => {

            $state.go('transaction-stream', {
              mostRecentHash: transactionsList[0].hash
            });
          };
          const deboundOnUpdate = _.debounce(onUpdate, 250, {maxWait:500})

          transactions.addTransactionsListener(deboundOnUpdate);

          $scope.transactions = transactions.getTransactions();
        },
        template: '<transactions-card transactions="transactions"></transactions-card>'
      });
  });
