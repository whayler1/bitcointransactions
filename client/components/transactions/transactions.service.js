'use strict';

angular.module('bitcoinApp')
  .factory('transactions', function (
    $window,
    $log
  ) {

    const transactions = {};

    const transactionsList = [];
    const blocksList = [];
    const latestBlock = {};
    const listeners = [];

    if(!_.hasIn($window, 'WebSocket') || !_.hasIn($window, 'ReconnectingWebSocket')) {
      $log.error('WebSocket not in $window');
      return websocket;
    }

    const connection = new $window.ReconnectingWebSocket('wss://bitcoin.toshi.io');

    connection.onopen = function() {
      $log.log('Toshi.io: Connection open!');

      connection.send(JSON.stringify({subscribe: 'transactions'}));
      connection.send(JSON.stringify({subscribe: 'blocks'}));
      connection.send(JSON.stringify({fetch: 'latest_block'}));
    };

    connection.onclose = function() {
      $log.log('Toshi.io: Connection closed');
    };

    connection.onerror = function(error) {
      $log.log('Toshi.io: Connection Error: ' + error);
    };

    connection.onmessage = function(e) {

      const response = JSON.parse(e.data);
      $log.log('%cnew message', 'background:grey', response)

      if(response.subscription === 'latest_block') {

        angular.copy(response.data, latestBlock);
      }else if (response.subscription === 'transactions') {

        const transaction = response.data;
        transaction.time = new Date();
        // $log.log('%ctransaction:', 'background:pink', response.data);
        transactionsList.splice(0,0,transaction);
        // $log.log('%ctransactionsList:', 'background:lightred', transactionsList);
        if(transactionsList.length > 100) transactionsList.pop();

        listeners.forEach(listener => listener(transactionsList));
      }else if (response.subscription === 'blocks') {
        blocksList.push(response.data);
        if(blocksList.length > 200) blocksList.pop();
        $log.log('%cblocksList!', 'background:mocassin', blocksList);
      }
    };

    // transactions.transactionsList = transactionsList;
    const addTransactionsListener = listener => {
      if(listeners.indexOf(listener) > -1) return;
      listeners.push(listener);
    };
    const clearTransactionsListener = listener => {
      const index = listeners.indexOf(listener);
      if(index > -1) {
        listeners.splice(index, 1);
      }
    };

    transactions.getTransactions = () => transactionsList;

    transactions.addTransactionsListener = addTransactionsListener;

    transactions.latestBlock = latestBlock;

    return transactions;
  });
