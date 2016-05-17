'use strict';

describe('Controller: TransactionCardCtrl', function () {

  // load the controller's module
  beforeEach(module('bitcoinApp'));

  var TransactionCardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransactionCardCtrl = $controller('TransactionCardCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
