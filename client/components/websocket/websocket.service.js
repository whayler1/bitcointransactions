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

    const connection = new $window.ReconnectingWebSocket('wss://bitcoin.toshi.io');

    connection.onopen = function() {
      $log.log('Toshi.io: Connection open!');

      const newTransactions = {
        "subscribe" : "transactions"
      };

      connection.send(JSON.stringify(newTransactions));
    };

    connection.onclose = function() {
      $log.log('Toshi.io: Connection closed');
    };

    connection.onerror = function(error) {
      $log.log('Toshi.io: Connection Error: ' + error);
    };

    connection.onmessage = function(e) {
      $log.log('%cnew message', 'background:grey')
      const response = JSON.parse(e.data);

      if (response.subscription == "transactions" || response.fetched == "latest_transaction") {

        $log.log('%ctransactions:', 'background:pink', response);
      }
    };

    websocket.connection = connection;


    return websocket;
  });
