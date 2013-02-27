'use strict';

angular.module('uber-list.controllers').

controller('ListsCtrl', ['$scope', '$routeParams', '$log', 'los4ng', 'EntryManager', function($scope, $routeParams, $log, los4ng, entryManager) {
    if ($routeParams.uuid) {
        $scope.entry = entryManager.getEntry($routeParams.uuid);
    } else {
        $scope.entry = entryManager.getRootEntry();
    }

    $scope.childEntries = entryManager.getEntries($scope.entry.children);
    
    $scope.setCurrentUuId($scope.entry.uuid);
}]);