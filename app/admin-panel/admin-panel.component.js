'use strict';

angular.
  module('adminPanel').
  component('adminPanel', {
    templateUrl: 'admin-panel/admin-panel.template.html',
    controller: ['Category', '$http', function AdminPanelController(Category, $http) {
      var self = this;
      self.categories = Category.query(function() {
        self.setCategory(self.categories[0].id);
      });

      self.setCategory = function(id) {
        for (var i = 0; i < self.categories.length; i++) {
          if (self.categories[i].id == id) {
            self.currentCategory = self.categories[i];
            break;
          }
        }
        if (self.currentCategory != null) {
          self.getData(self.currentCategory.dataUrl);
        }
      }

      self.setDocument = function(id) {
        var documents = self.aDocument.documentModel;
        for (var i = 0; i < documents.length; i++) {
          if (documents[i]._id == id) {
            self.currentDocument = documents[i];
            break;
          }
        }
      };

      self.formatDuration = function(duration) {
        if (duration == null) return "00:00";
        var st = duration.days != "" ? ":" + duration.days : "";
        st += duration.hours != ""? duration.hours + ":" : "00:";
        st += duration.minutes != "" ? duration.minutes : "00";
        return st;
      };

      self.getData = function(url) {
        self.aDocument = null;
        self.currentDocument = null;

        if (url != "") {
          $http.get(url).then(
              function(response) {
                self.aDocument = response.data;
                self.currentDocument = self.aDocument.documentModel[0];
              });
        }
      }
    }]
  });
