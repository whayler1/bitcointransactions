'use strict';

describe('Service: websocket', function () {

  // load the service's module
  beforeEach(module('bitcoinApp'));

  // instantiate service
  var websocket;
  beforeEach(inject(function (_websocket_) {
    websocket = _websocket_;
  }));

  it('should do something', function () {
    expect(!!websocket).to.be.true;
  });

});
