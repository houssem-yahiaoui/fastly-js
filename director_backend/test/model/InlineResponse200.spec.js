/**
 * Director backend
 * Maps and relates backends as belonging to directors. Backends can belong to any number of directors but directors can only hold one reference to a specific backend.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DirectorBackend);
  }
}(this, function(expect, DirectorBackend) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DirectorBackend.InlineResponse200();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse200', function() {
    it('should create an instance of InlineResponse200', function() {
      // uncomment below and update the code to test InlineResponse200
      //var instane = new DirectorBackend.InlineResponse200();
      //expect(instance).to.be.a(DirectorBackend.InlineResponse200);
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new DirectorBackend.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new DirectorBackend.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new DirectorBackend.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property serviceId (base name: "service_id")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instance = new DirectorBackend.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new DirectorBackend.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property backendName (base name: "backend_name")', function() {
      // uncomment below and update the code to test the property backendName
      //var instance = new DirectorBackend.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property director (base name: "director")', function() {
      // uncomment below and update the code to test the property director
      //var instance = new DirectorBackend.InlineResponse200();
      //expect(instance).to.be();
    });

  });

}));
