# bitcoin transactions

A bitcoin transaction viewer built with [Angular](https://angularjs.org/), [Toshi API](https://toshi.io/docs/#introduction) and [reconnecting websocket](https://github.com/joewalnes/reconnecting-websocket).

This project was generated with the [Yeoman](http://yeoman.io/) [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.6.1.

![bitcoin transactions screengrab](https://github.com/whayler1/bitcointransactions/blob/master/client/assets/images/Screen%20Shot%202016-05-17%20at%206.41.27%20PM.png)

### Highlights

- [transactions-stream.js](https://github.com/whayler1/bitcointransactions/blob/master/client/app/transaction-stream/transaction-stream.js) is where all of the routing is configured. I use angulars ui-router resolve attribute to get individual transaction data before rendering the `transactions-stream.transaction` route.
- All of the components are in the [/client/components/](https://github.com/whayler1/bitcointransactions/tree/master/client/components) folder.
  + [transactions-card](https://github.com/whayler1/bitcointransactions/tree/master/client/components/transactions-card) is where the asyncronously updated list of transactions are generated.
  + [transaction-card](https://github.com/whayler1/bitcointransactions/tree/master/client/components/transaction-card) is the single transaction view.
  + The [transactions service](https://github.com/whayler1/bitcointransactions/blob/master/client/components/transactions/transactions.service.js) is where the socket connection is made and the list of transactions is stored on the client.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.
