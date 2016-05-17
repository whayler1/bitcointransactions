'use strict';

describe('Directive: transactionsCard', function () {

  // load the directive's module and view
  beforeEach(module('bitcoinApp'));
  beforeEach(module('components/transactions-card/transactions-card.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<transactions-card></transactions-card>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the transactionsCard directive');
  }));
});
