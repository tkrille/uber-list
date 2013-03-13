/*
 * ListEntryManager.js
 */
'use strict';

(function(){

    /**
     * 
     */
    angular.module('uber-list.services').factory('ListEntryManager', [ '$log', function($log) {

	/**
	 * This service manages the available (registered) entry types. It contains
	 * the entry type registry, ...
	 */
	function ListEntryManager() {
	    
	    /**
	     * 
	     */
	    this.getEntryData = function (entry) {
		//$log.info("[uber-list.services.ListEntryManager#getEntryData()]");
		//$log.info(entry);
	    };
	
	};
	
	return new ListEntryManager();

    } ]);
    
    /**
     * 
     */
    angular.module('uber-list.services').run([ '$log', 'EntryTypeManager', function($log, entryTypeManager) {
        entryTypeManager.registerType("List");
    } ]);

})();