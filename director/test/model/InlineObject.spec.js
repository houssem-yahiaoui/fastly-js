/**
 * Director
 * A Director is responsible for balancing requests among a group of Backends. In addition to simply balancing, Directors can be configured to attempt retrying failed requests. Additionally, Directors have a quorum setting which can be used to determine when the Director as a whole is considered \"up\", in order to prevent \"server whack-a-mole\" following an outage as servers come back up. Only directors created via the API can be modified via the API. Directors known as \"autodirectors\" that are created automatically when load balancing groups of servers together cannot be modified or retrieved via the API.
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
    factory(root.expect, root.Director);
  }
}(this, function(expect, Director) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Director.InlineObject();
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

  describe('InlineObject', function() {
    it('should create an instance of InlineObject', function() {
      // uncomment below and update the code to test InlineObject
      //var instane = new Director.InlineObject();
      //expect(instance).to.be.a(Director.InlineObject);
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new Director.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new Director.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new Director.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property serviceId (base name: "service_id")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instance = new Director.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Director.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property backends (base name: "backends")', function() {
      // uncomment below and update the code to test the property backends
      //var instance = new Director.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property capacity (base name: "capacity")', function() {
      // uncomment below and update the code to test the property capacity
      //var instance = new Director.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new Director.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Director.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property quorum (base name: "quorum")', function() {
      // uncomment below and update the code to test the property quorum
      //var instance = new Director.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property shield (base name: "shield")', function() {
      // uncomment below and update the code to test the property shield
      //var instance = new Director.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Director.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property retries (base name: "retries")', function() {
      // uncomment below and update the code to test the property retries
      //var instance = new Director.InlineObject();
      //expect(instance).to.be();
    });

  });

}));
