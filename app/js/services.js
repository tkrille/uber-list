'use strict';

angular.module('uber-list.services', [ 'los4ng' ]);

angular.module('uber-list.services').factory('EntryManager', [ '$log', 'los4ng', function($log, los4ng) {
    return {
	getRootEntry : function() {
	    var result = los4ng.getObject('uber-list.entries.' + getRootUUID());

	    if (!result) {
		return {};
	    }

	    return result;
	},
	getEntry : function(uuid) {
	    var result = los4ng.getObject('uber-list.entries.' + uuid);

	    if (!result) {
		return {};
	    }

	    return result;
	},
	getEntries : function(uuids) {
	    var result = [];

	    if (!_.isArray(uuids)) {
		uuids = [ uuids ];
	    }

	    result = _.map(uuids, function(uuid) {
		return this.getEntry(uuid);
	    }, this);
	    
	    result = _.reject(result, function (entry) {
		return _.isEmpty(entry);
	    });

	    return result;
	},
    };

    function getRootUUID() {
	return los4ng.getObject('uber-list.entries.root');
    }

} ]);