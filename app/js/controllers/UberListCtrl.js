'use strict';

angular.module('uber-list.controllers').

controller('UberListCtrl', ['$scope', '$log', 'los4ng', 'EntryManager', 'testData', function($scope, $log, los4ng, entryManager, testData) {
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

    $scope.setCurrentUuId = function(uuid) {
        $scope.currentUuid = uuid;
    };
    
    $scope.test = function() {
        
    };

    $scope.debug = function() {
        los4ng.debug();
    };

    $scope.reset = function() {
        $scope.initialize();
    };

    $scope.clear = function() {
        los4ng.clear();
    };
    
    if (los4ng.length() === 0) {
        $scope.initialize();
    }
}]);