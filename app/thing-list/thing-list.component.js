'use strict';

angular.
  module('thingList').
  component('thingList', {
    templateUrl: 'thing-list/thing-list.template.html',
    controller: ['Thing', function ThingListController(Thing) {
      this.title = 'Ermeo';
      this.things = Thing.query();
    }]
  });
