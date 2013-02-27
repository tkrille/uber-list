'use strict';

angular.module('uber-list.services', ['los4ng']);

angular.module('uber-list.services').factory('EntryManager', ['$log', 'los4ng', function($log, los4ng) {
	return {
		getRootEntry: function() {
			var result = los4ng.getObject('uber-list.entries.' + getRootUUID());

			if (!result) {
				return {};
			}

			return result;
		},
		getEntry: function(uuid) {
			var result = los4ng.getObject('uber-list.entries.' + uuid);

			if (!result) {
				return {};
			}

			return result;
		},
		getEntries: function(uuids) {
			var result = [];

			if (!_.isArray(uuids)) {
				uuids = [uuids];
			}

			result = _.map(uuids, function(uuid) {
				return this.getEntry(uuid);
			}, this);

			result = _.reject(result, function(entry) {
				return _.isEmpty(entry);
			});

			return result;
		},
	};

	function getRootUUID() {
		return los4ng.getObject('uber-list.entries.root');
	}

}]);

angular.module('uber-list.services').factory('SemanticsManager', [ function() {
// angular.module('SemanticsManager', [], function($provide) {
		var semantics = {
			'boolean': {
				'default': ['sticky', 'priority', 'inactive', 'done']
			},
			'list': {},
			'media': {},
			'number': {},
			'person': {},
			'place': {},
			'text': {
				'default': ['headline', 'name', 'description']
			},
			'time': {
				'default': ['birthday', 'deadline', 'alarm', 'start', 'end']
			},
		}
		return {
			getSemanticsForType: function(type) {
				console.log(semantics[type]['default']);
				return semantics[type]['default'];
			}
		};
}]);
