'use strict';
angular.module('docbay.services')
  .factory('Documents', ['$resource', '$http', ($resource, $http) => {
    var resource = $resource('/api/documents/:id', {
      id: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    }, {
      stripTrailingSlashes: false
    });
    return resource;
  }]);
