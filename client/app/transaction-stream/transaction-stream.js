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

            $state.go($state.current.name, {
              mostRecentHash: transactionsList[0].hash
            });
          };
          const deboundOnUpdate = _.debounce(onUpdate, 250, {maxWait:500})

          transactions.addTransactionsListener(deboundOnUpdate);

          $scope.transactions = transactions.getTransactions();
        },
        template: '<transactions-card transactions="transactions"></transactions-card><ui-view></ui-view>'
      })
      .state('transaction-stream.transaction', {
        url: '/:hash',
        resolve: {

        },
        template: '<h1>Transaction View!</h1>'
      });
  });
