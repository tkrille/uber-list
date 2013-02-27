'use strict';

angular.module('uber-list.directives').directive('uberListEntry',
        [ '$log', 'EntryManager', function($log, EntryTypeManager) {
            var directiveDefinitionObject = {
                template:   '<a ng-href="#/lists/{{ entry.uuid }}">' +
                                '<small>{{ entry.type }}</small> {{ entry.name }}' +
                                '<span class="pull-right"><i class="icon-chevron-right"></i></span>' +
                            '</a>',
                replace : true,
                restrict : 'E',
                scope : {
                    entry: '=entry'
                },
            };
            return directiveDefinitionObject;
        } ]);