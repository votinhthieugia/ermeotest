'use strict';

angular.
  module('ermeoTestApp').
  config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
          when('/admin', {
            template: '<admin-panel></admin-panel>'
          }).
          when('/things', {
            template: '<thing-list></thing-list>'
          }).
          otherwise('/admin')
      }
  ]);
