'use strict';

angular.module('uber-list').

controller(
        'UberListCtrl',
        [ '$scope', '$log', 'los4ng', 'EntryManager', 'testData',
                function($scope, $log, los4ng, entryManager, testData) {
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

                } ]).

controller('ListsCtrl', [ '$scope', '$log', 'los4ng', 'EntryManager', function($scope, $log, los4ng, entryManager) {
    $scope.entry = entryManager.getRootEntry();
    $scope.childEntries = entryManager.getEntries($scope.entry.children);
    
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
} ]).

controller('SettingsCtrl', [ '$scope', function($scope) {

} ]).

controller('TemplatesCtrl', [ '$scope', function($scope) {

} ]);