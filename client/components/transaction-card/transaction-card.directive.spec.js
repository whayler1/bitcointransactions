'use strict';

describe('Directive: transactionCard', function () {

  // load the directive's module and view
  beforeEach(module('bitcoinApp'));
  beforeEach(module('components/transaction-card/transaction-card.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<transaction-card></transaction-card>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the transactionCard directive');
  }));
});
