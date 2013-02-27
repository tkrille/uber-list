'use strict';

angular.module('uber-list.directives', []).

directive('typeahead', function($document) {
	return function(scope, element, attr) {
		element.context.autocomplete = "off";
		element.typeahead({
			source: scope.typeaheadValues
		});
	}
});
