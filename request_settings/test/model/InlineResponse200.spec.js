/**
 * Request settings
 * Settings used to customize Fastly's request handling. When used with [Conditions](#condition) the Request Settings object allows you to fine tune how specific types of requests are handled.
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
    factory(root.expect, root.RequestSettings);
  }
}(this, function(expect, RequestSettings) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RequestSettings.InlineResponse200();
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
      //var instane = new RequestSettings.InlineResponse200();
      //expect(instance).to.be.a(RequestSettings.InlineResponse200);
    });

    it('should have the property serviceId (base name: "service_id")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instance = new RequestSettings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new RequestSettings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instance = new RequestSettings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property bypassBusyWait (base name: "bypass_busy_wait")', function() {
      // uncomment below and update the code to test the property bypassBusyWait
      //var instance = new RequestSettings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property defaultHost (base name: "default_host")', function() {
      // uncomment below and update the code to test the property defaultHost
      //var instance = new RequestSettings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property forceMiss (base name: "force_miss")', function() {
      // uncomment below and update the code to test the property forceMiss
      //var instance = new RequestSettings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property forceSsl (base name: "force_ssl")', function() {
      // uncomment below and update the code to test the property forceSsl
      //var instance = new RequestSettings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property geoHeaders (base name: "geo_headers")', function() {
      // uncomment below and update the code to test the property geoHeaders
      //var instance = new RequestSettings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property hashKeys (base name: "hash_keys")', function() {
      // uncomment below and update the code to test the property hashKeys
      //var instance = new RequestSettings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property maxStaleAge (base name: "max_stale_age")', function() {
      // uncomment below and update the code to test the property maxStaleAge
      //var instance = new RequestSettings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new RequestSettings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property requestCondition (base name: "request_condition")', function() {
      // uncomment below and update the code to test the property requestCondition
      //var instance = new RequestSettings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property timerSupport (base name: "timer_support")', function() {
      // uncomment below and update the code to test the property timerSupport
      //var instance = new RequestSettings.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property xff (base name: "xff")', function() {
      // uncomment below and update the code to test the property xff
      //var instance = new RequestSettings.InlineResponse200();
      //expect(instance).to.be();
    });

  });

}));
