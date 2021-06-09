/**
 * Settings
 * Handles default settings for a particular version of a service.
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
    factory(root.expect, root.Settings);
  }
}(this, function(expect, Settings) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Settings.InlineResponse200();
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
      //var instane = new Settings.InlineResponse200();
      //expect(instance).to.be.a(Settings.InlineResponse200);
    });

    it('should have the property serviceId (base name: "service_id")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instance = new Settings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Settings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property generalDefaultHost (base name: "general.default_host")', function() {
      // uncomment below and update the code to test the property generalDefaultHost
      //var instance = new Settings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property generalDefaultTtl (base name: "general.default_ttl")', function() {
      // uncomment below and update the code to test the property generalDefaultTtl
      //var instance = new Settings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property generalStaleIfError (base name: "general.stale_if_error")', function() {
      // uncomment below and update the code to test the property generalStaleIfError
      //var instance = new Settings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property generalStaleIfErrorTtl (base name: "general.stale_if_error_ttl")', function() {
      // uncomment below and update the code to test the property generalStaleIfErrorTtl
      //var instance = new Settings.InlineResponse200();
      //expect(instance).to.be();
    });

  });

}));
