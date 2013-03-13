/*
 * UberListEntry.js
 */
'use strict';

(function(){
    
    /**
     * 
     */
    angular.module('uber-list.directives').directive('uberListEntry', ['$log', 'EntryTypeManager', function($log, entryTypeManager) {
        return {
            templateUrl: 'partials/entry.html',
            replace : true,
            restrict : 'E',
            scope : {
                entry : '=entry',
            },
            link: function ($scope, elem, attrs, controller) {
                $scope.entryData = entryTypeManager.getEntryData($scope.entry);
            	
                //$log.info("[uber-list.directives.uberListEntry#link()]");
                //$log.info($scope);
            },
        };
    }]);

})();