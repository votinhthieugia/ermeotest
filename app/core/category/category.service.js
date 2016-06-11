'use strict';

angular.
  module('core.category').
  factory('Category', ['$resource',
    function($resource) {
      return $resource('categories/categories.json', {}, {
        query: {
                 method: 'GET',
                 isArray: true
               }
      });
    }
  ]);

