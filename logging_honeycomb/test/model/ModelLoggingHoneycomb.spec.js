/**
 * Honeycomb Logging
 * Fastly will upload log messages to Honeycomb.io in the format specified in the Honeycomb object.
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
    factory(root.expect, root.HoneycombLogging);
  }
}(this, function(expect, HoneycombLogging) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HoneycombLogging.ModelLoggingHoneycomb();
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

  describe('ModelLoggingHoneycomb', function() {
    it('should create an instance of ModelLoggingHoneycomb', function() {
      // uncomment below and update the code to test ModelLoggingHoneycomb
      //var instane = new HoneycombLogging.ModelLoggingHoneycomb();
      //expect(instance).to.be.a(HoneycombLogging.ModelLoggingHoneycomb);
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new HoneycombLogging.ModelLoggingHoneycomb();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new HoneycombLogging.ModelLoggingHoneycomb();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new HoneycombLogging.ModelLoggingHoneycomb();
      //expect(instance).to.be();
    });

    it('should have the property serviceId (base name: "service_id")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instance = new HoneycombLogging.ModelLoggingHoneycomb();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new HoneycombLogging.ModelLoggingHoneycomb();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new HoneycombLogging.ModelLoggingHoneycomb();
      //expect(instance).to.be();
    });

    it('should have the property placement (base name: "placement")', function() {
      // uncomment below and update the code to test the property placement
      //var instance = new HoneycombLogging.ModelLoggingHoneycomb();
      //expect(instance).to.be();
    });

    it('should have the property formatVersion (base name: "format_version")', function() {
      // uncomment below and update the code to test the property formatVersion
      //var instance = new HoneycombLogging.ModelLoggingHoneycomb();
      //expect(instance).to.be();
    });

    it('should have the property responseCondition (base name: "response_condition")', function() {
      // uncomment below and update the code to test the property responseCondition
      //var instance = new HoneycombLogging.ModelLoggingHoneycomb();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instance = new HoneycombLogging.ModelLoggingHoneycomb();
      //expect(instance).to.be();
    });

    it('should have the property dataset (base name: "dataset")', function() {
      // uncomment below and update the code to test the property dataset
      //var instance = new HoneycombLogging.ModelLoggingHoneycomb();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new HoneycombLogging.ModelLoggingHoneycomb();
      //expect(instance).to.be();
    });

  });

}));
