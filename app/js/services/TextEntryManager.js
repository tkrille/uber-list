/*
 * TextEntryManager.js
 */
'use strict';

(function(){

    /**
     * 
     */
    angular.module('uber-list.services').factory('TextEntryManager', [ '$log', function($log) {
	
	/**
	 * This service manages the available (registered) entry types. It contains
	 * the entry type registry, ...
	 */
	function TextEntryManager() {
	    
	    /**
	     * 
	     */
	    this.getEntryData = function (entry) {
		//$log.info("[uber-list.services.ListEntryManager#getEntryData()]");
		//$log.info(entry);
	    };
	
	};
	
	return new TextEntryManager();
	
    } ]);
    
    /**
     * 
     */
    angular.module('uber-list.services').run([ '$log', 'EntryTypeManager', function($log, entryTypeManager) {
        entryTypeManager.registerType("Text");
    } ]);

})();