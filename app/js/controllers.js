'use strict';

angular.module('uber-list.controllers', []).

controller('BooleanAddCtrl', ['$scope', function($scope) {
	$scope.storeEntry = function(entry) {
		console.log(entry);
	};
	
	// @TODO get from semanticsmanager
	// $scope.typeaheadValues = ;
	$scope.entry = {
		name: '',
		options: {
		},
		type: 'boolean',
		semantic: '',
		parent: $scope.currentUuid,
	};
}]).

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

controller('MediaAddCtrl', ['$scope', function($scope) {
}]).

controller('NumberAddCtrl', ['$scope', function($scope) {
}]).

controller('PersonAddCtrl', ['$scope', function($scope) {
}]).

controller('PlaceAddCtrl', ['$scope', function($scope) {
}]).

controller('TextAddCtrl', ['$scope', function($scope) {
	$scope.storeEntry = function(entry) {
		console.log(entry);
	};
	
	// @TODO get from SemanticsManager
	// $scope.typeaheadValues = ;
	console.log($scope);
	$scope.entry = {
		name: '',
		options: {
			type: 'single'
		},
		type: 'text',
		semantic: '',
		parent: $scope.currentUuid,
	};
}]).

controller('TimeAddCtrl', ['$scope', function($scope) {
	$scope.storeEntry = function(entry) {
		console.log(entry);
	};
	
	// @TODO get from semanticsmanager
	// $scope.typeaheadValues = ;
	$scope.entry = {
		name: '',
		options: {
			type: 'date'
		},
		type: 'time',
		semantic: '',
		parent: $scope.currentUuid,
	};
}]);
