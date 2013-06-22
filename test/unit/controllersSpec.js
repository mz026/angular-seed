'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));

  var scope, controller, http
    , mockResponse = {
      musicians: [
        { name: "musician1", style: "style1" }
        , { name: "musician2", style: "style2" }
        , { name: "musician3", style: "style3" }
      ]
    };

  
  beforeEach(inject(function($controller, $rootScope, _$httpBackend_){
    http = _$httpBackend_;
    scope = $rootScope.$new();
  }));

  afterEach(function() {
    http.verifyNoOutstandingExpectation();
    http.verifyNoOutstandingRequest();
  })
  
  it("should fetch musicians from server", inject(function($controller){
    http.expectGET("mocks/musicians.json").respond(mockResponse);

    controller = $controller("MusiciansController", {
      $scope: scope
    });
    http.flush();
  }));

  it("should set $scope.musicians to response.musicians"
    , inject(function($controller){

    http.whenGET("mocks/musicians.json").respond(mockResponse);
    controller = $controller("MusiciansController", {
      $scope: scope
    });
    http.flush();

    expect(scope.musicians).toBe(mockResponse.musicians);
  }));
  
  
  
  
  // it('should fetch musicians from server'
  //   , inject(function($controller, $rootScope, _$httpBackend_) {

  //   var scope, controller;

  //   _$httpBackend_.expectGET("mocks/musicians.json")
  //     .respond(mockResponse);
  //   scope = $rootScope.$new();

  //   controller = $controller("MusiciansController", { $scope: scope });
  //   _$httpBackend_.flush();
  //   
  //   expect(scope.musicians).toEqual(mockResponse.musicians);
  // }));

});
