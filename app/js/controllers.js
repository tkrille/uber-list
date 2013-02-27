'use strict';

angular.module('uber-list').

controller('UberListCtrl', ['$scope', '$log', 'los4ng', 'EntryManager', 'SemanticsManager', 'testData', function($scope, $log, los4ng, entryManager, testData) {
	$scope.initialize = function() {
		$log.log("initialize");
		los4ng.clear();

		los4ng.putObject('uber-list.settings', {});

		angular.forEach(testData, function(entry, index) {
			los4ng.putObject('uber-list.entries.' + entry.uuid, entry);

			if (entry.parent === null) {
				los4ng.putObject('uber-list.entries.root', entry.uuid);
			}
		});

		los4ng.putObject('uber-list.templates', []);
	};

	if (los4ng.length() === 0) {
		$scope.initialize();
	}

	$scope.setCurrentUuId = function(uuid) {
		$scope.currentUuid = uuid;
	};
}]).

controller('ListsCtrl', ['$scope', '$routeParams', '$log', 'los4ng', 'EntryManager', function($scope, $routeParams, $log, los4ng, entryManager) {
	if ($routeParams.uuid) {
		$scope.entry = entryManager.getEntry($routeParams.uuid);
	} else {
		$scope.entry = entryManager.getRootEntry();
	}
	$scope.childEntries = entryManager.getEntries($scope.entry.children);
	$scope.setCurrentUuId($scope.entry.uuid);

	$scope.test = function() {
		$scope.childEntries = [];
	};

	$scope.debug = function() {
		los4ng.debug();
	};

	$scope.reset = function() {

	};

	$scope.clear = function() {
		los4ng.clear();
	};
}]).

controller('SettingsCtrl', ['$scope', function($scope) {

}]).

controller('TemplatesCtrl', ['$scope', function($scope) {

}]).

controller('AddCtrl', ['$scope', function($scope) {}]).

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
