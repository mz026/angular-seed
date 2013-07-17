'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', "ui.state"]).config(
  function($stateProvider) {

  $stateProvider
    .state("state1", {
      url: "/view1"
      , controller: "MyCtrl1"
      , templateUrl: "partials/partial1.html"
    })
    .state("state2", {
      url: "/view2"
      , controller: "MyCtrl2"
      , templateUrl: "partials/partial2.html"
    });
});
