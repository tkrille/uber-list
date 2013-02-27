'use strict';

angular.module('uber-list.controllers', []).

controller('ListAddCtrl', ['$scope', function($scope) {
	$scope.semantics = [];
	$scope.entry = {
		name: '',
		options: {},
		type: 'list',
		semantic: '',
		parent: $scope.currentUuid,
	};
}]).

controller('TextAddCtrl', ['$scope', function($scope) {
	$scope.storeEntry = function( entry ) {
		console.log(entry);
	};

	$scope.semantics = ['headline'];
	$scope.entry = {
		name: '',
		options: {
			type: 'single'
		},
		type: 'text',
		semantic: '',
		parent: $scope.currentUuid,
	};
}]);
