/*
 * EntryTypeManager.js
 */
'use strict';

(function() {
    angular.module('uber-list.services').factory('EntryTypeManager', [ '$log', '$injector', function($log, $injector) {
	/**
	 * This service manages the available (registered) entry types. It contains
	 * the entry type registry, ...
	 */
	function EntryTypeManager() {
	    
	    /**
	     * Stores the available entry types with its meta data
	     */
	    var entryTypeRegistry = [];
	    
	    /**
	     * 
	     */
	    this.getEntryData = function (entry) {
		var type = entry.type;
		
		//$log.info(_.str.sprintf("[uber-list.services.EntryTypeManager#getEntryData()] type=%s", type));
		
		var typeService = $injector.get(_.str.classify(_.str.sprintf('%sEntryManager', type)));
		
		return typeService.getEntryData(entry);
	    };
	
	    /**
	     * Adds a new entry type to the type registry
	     */
	    this.registerType = function(name) {
		if (!name) {
		    return;
		}
		
		//$log.info(_.str.sprintf("[uber-list.services.EntryTypeManager#registerType()] Registering type [%s]", name));
	    
		entryTypeRegistry.push(name);
	    };
	    
	    /**
	     * Returns a copy of all available types
	     */
	    this.listEntryTypes = function() {
		return angular.copy(entryTypeRegistry);
	    };

	};
	
	return new EntryTypeManager();
    } ]);
})();