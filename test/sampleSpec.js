'use strict';
describe('Testing the controller SampleController', function() {

	beforeEach(module('sampleApp'));

	var sampleController, scope;

	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope;
		sampleController = $controller('SampleController', {
			$scope: scope
		});
	}));

	it('Should say hello', function(){
		expect(scope.hello).toBe('Hello Carlos.');
	});
});