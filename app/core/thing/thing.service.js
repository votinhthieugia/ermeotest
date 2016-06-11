'use strict';

angular.
  module('core.thing').
  factory('Thing', ['$resource',
    function($resource) {
      return $resource('things/things.json', {}, {
        query: {
                 method: 'GET',
                 params: { thingId: 'things' },
                 isArray: true
               }
      });
    }
  ]);

