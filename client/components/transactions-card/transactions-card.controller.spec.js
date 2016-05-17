'use strict';

describe('Controller: TransactionsCardCtrl', function () {

  // load the controller's module
  beforeEach(module('bitcoinApp'));

  var TransactionsCardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransactionsCardCtrl = $controller('TransactionsCardCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
