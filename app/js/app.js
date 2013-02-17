'use strict';

angular.module('uber-list', [ 'ng', 'los4ng' ]);

angular.module('uber-list').run([ 'los4ng', function(los4ng) {
    function initialize() {
	$log.log("initialize");
	los4ng.clear();

	los4ng.putObject('ul.settings', {});

	window.ul.testData.forEach(function(entry) {
	    los4ng.putObject('ul.entries.' + entry.uuid, entry);

	    if (entry.parent === null) {
		los4ng.putObject('ul.entries.root', entry.uuid);
	    }
	});

	los4ng.putObject('ul.templates', []);
    }

    if (los4ng.length() === 0) {
	initialize();
    }
} ]);