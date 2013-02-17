(function(window, angular, undefined) {
    'use strict';

    /**
     * Local Object Storage for AngularJS
     * 
     * This module provides a service that extends the Local Storage to store
     * arbitrary JavaScript objects (int, String, Array, Object, etc.). For this
     * purpose the service converts objects into a JSON string and optionally
     * compresses this string. It does not extend the base functions of the
     * Local Storage, it is still a key-value store!
     */
    angular.module('los4ng', [ 'ng' ]).factory('los4ng', [ '$log', '$cacheFactory', '$window', function($log, $cacheFactory, $window) {
	var st = $window.localStorage;

	return {

	    /**
	     * Clears the whole storage. Warning: Clears the whole localStorage!
	     */
	    clear : function() {
		st.clear();
		return this;
	    },

	    length : function() {
		return st.length();
	    },

	    debug : function() {
		for ( var index = 0; index < st.length; index++) {
		    var key = st.key(index);
		    var value = st.getItem(key);

		    $log.debug(key + " = " + value);

		}
	    },

	    /**
	     * Fetches an object from the storage.
	     * 
	     * @returns The stored object or null if there is none
	     */
	    getObject : function(key) {
		var result = st.getItem(key);

		if (result === null) {
		    return null;
		}

		result = fromJson(result);

		return result;
	    },

	    /**
	     * Puts the object into the storage under the given key. Overwrites
	     * any previously stored object.
	     * 
	     * @returns The storage object for chaining calls
	     */
	    putObject : function(key, object) {
		var json = toJson(object);

		st.setItem(key, json);

		return this;
	    },

	    /**
	     * Removes the object stored under the given key. Does nothing if
	     * there is none.
	     * 
	     * @returns The object that has been removed
	     * @see getObject(key)
	     */
	    removeObject : function(key) {
		var result = getObject(key);

		st.removeItem(key);

		return result;
	    },
	};

	function toJson(object) {
	    return angular.toJson(object, true);
	}

	function fromJson(json) {
	    return angular.fromJson(result);
	}
    } ]);

})(window, window.angular);