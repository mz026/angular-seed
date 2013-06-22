'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MusiciansController', function($scope, $http) {
    $http.get("mocks/musicians.json")
      .success(function(response) {
        $scope.musicians = response.musicians;
      });
  });
