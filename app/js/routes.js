'use strict';

angular.module('uber-list').

config([ '$routeProvider', function($routeProvider) {
    $routeProvider.when('/lists', {
	templateUrl : 'partials/lists.html',
	controller : 'ListsCtrl'
    });
    $routeProvider.when('/settings', {
	templateUrl : 'partials/partial2.html',
	controller : 'SettingsCtrl'
    });
    $routeProvider.when('/templates', {
	templateUrl : 'partials/partial2.html',
	controller : 'TemplatesCtrl'
    });
    $routeProvider.otherwise({
	redirectTo : '/lists'
    });
} ]);