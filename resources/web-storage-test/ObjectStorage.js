window.ul = window.ul || {};

var module = window.ul.objectStorage = window.ul.objectStorage || {};

(function(module) {

    var st = window.localStorage;

    /**
     * clears the whole storage
     * 
     */
    module.clear = function() {
	st.clear();
	return this;
    };

    module.debug = function () {
	for ( var index = 0; index < st.length; index++) {
	    var key = st.key(index);
	    var value = st.getItem(key);

	    console.log(key + " = " + value);

	}
    };

    /**
     * Fetches an object from the storage
     * 
     * @returns The stored object or the empty object ({}) if there is none
     */
    module.getObject = function (key) {
	var result = st.getItem(key);

	if (result === null) {
	    return {};
	}

	result = JSON.parse(result);

	if (result === null) {
	    return {};
	}

	return result;
    };

    /**
     * Puts the object into the storage under the given key. Overwrites any
     * previously stored object.
     * 
     * @returns The storage object for chaining calls
     */
    module.putObject = function (key, object) {
	st.setItem(key, JSON.stringify(object));
	return this;
    };

    /**
     * Removes the object stored under the given key. Does nothing if there is
     * none.
     * 
     * @returns The object that has been removed
     * @see getObject(key)
     */
    module.removeObject = function (key) {
	var result = module.getObject(key);

	st.removeItem(key);

	return result;
    };
})(module);