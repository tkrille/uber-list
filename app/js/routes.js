'use strict';

angular.module('uber-list').

config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/add', {
		templateUrl: 'partials/add.html',
		controller: 'AddCtrl'
	});
	
	$routeProvider.when('/add/boolean', {
		templateUrl: 'partials/boolean/add.html',
		controller: 'BooleanAddCtrl'
	});
	
	$routeProvider.when('/add/list', {
		templateUrl: 'partials/list/add.html',
		controller: 'ListAddCtrl'
	});
	
	$routeProvider.when('/add/media', {
		templateUrl: 'partials/media/add.html',
		controller: 'MediaAddCtrl'
	});
	
	$routeProvider.when('/add/number', {
		templateUrl: 'partials/number/add.html',
		controller: 'NumberAddCtrl'
	});
	
	$routeProvider.when('/add/person', {
		templateUrl: 'partials/person/add.html',
		controller: 'PersonAddCtrl'
	});
	
	$routeProvider.when('/add/place', {
		templateUrl: 'partials/place/add.html',
		controller: 'PlaceAddCtrl'
	});
	
	$routeProvider.when('/add/text', {
		templateUrl: 'partials/text/add.html',
		controller: 'TextAddCtrl'
	});
	
	$routeProvider.when('/add/time', {
		templateUrl: 'partials/time/add.html',
		controller: 'TimeAddCtrl'
	});
	
	$routeProvider.when('/lists', {
		templateUrl: 'partials/view.html',
		controller: 'ListsCtrl'
	});
	
	$routeProvider.when('/lists/:uuid', {
		templateUrl: 'partials/view.html',
		controller: 'ListsCtrl'
	});
	
	$routeProvider.otherwise({
		redirectTo: '/lists'
	});
}]);
