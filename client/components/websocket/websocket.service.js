'use strict';

angular.module('bitcoinApp')
  .factory('websocket', function (
    $window,
    $log
  ) {

    const websocket = {};

    if(!_.hasIn($window, 'WebSocket') || !_.hasIn($window, 'ReconnectingWebSocket')) {
      $log.error('WebSocket not in $window');
      return websocket;
    }

    const connection = new ReconnectingWebSocket('wss://bitcoin.toshi.io');

    connection.onopen = function() {
      $log.log('Toshi.io: Connection open!');

      var newTransactions = {
        "subscribe" : "transactions"
      };
      var newBlocks = {
        "subscribe" : "blocks"
      };
      connection.send(JSON.stringify(newTransactions));
      // connection.send(JSON.stringify(newBlocks));
      // connection.send(JSON.stringify({
      //   "fetch" : "latest_transaction"
      // }));

    };

    connection.onclose = function() {
      $log.log('Toshi.io: Connection closed');
    };

    connection.onerror = function(error) {
      $log.log('Toshi.io: Connection Error: ' + error);
    };

    connection.onmessage = function(e) {
      $log.log('%cnew message', 'background:grey')
      var response = JSON.parse(e.data);

      // New Transaction
      if (response.subscription == "transactions" || response.fetched == "latest_transaction") {

        $log.log('%ctransactions:', 'background:pink', response);

      } else if (response.subscription == "blocks" || response.fetched == "latest_block") {
        $log.log('%cblocks:', 'background:aqua', response);
      }

    };

    return websocket;
  });
