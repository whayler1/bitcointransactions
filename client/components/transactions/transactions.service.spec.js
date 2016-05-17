'use strict';

describe('Service: transactions', function () {

  // load the service's module
  beforeEach(module('bitcoinApp'));

  // instantiate service
  var transactions;
  beforeEach(inject(function (_transactions_) {
    transactions = _transactions_;
  }));

  it('should do something', function () {
    expect(!!transactions).to.be.true;
  });

});
