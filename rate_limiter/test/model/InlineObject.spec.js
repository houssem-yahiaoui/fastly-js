/**
 * Rate Limiter
 * Rate limiters add configurable origin request rate limiting to a service. Use of this feature is by invite only and subject to the terms set forth in the invitation you were emailed. To create a rate limiting policy, you must have a [paid account with a contract](https://docs.fastly.com/en/guides/accounts-and-pricing-plans#paid-accounts-with-contractual-commitments) for Fastly’s services.
 *
 * The version of the OpenAPI document: 1.0.0-beta
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
    factory(root.expect, root.RateLimiter);
  }
}(this, function(expect, RateLimiter) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RateLimiter.InlineObject();
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
      //var instane = new RateLimiter.InlineObject();
      //expect(instance).to.be.a(RateLimiter.InlineObject);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property httpMethods (base name: "http_methods")', function() {
      // uncomment below and update the code to test the property httpMethods
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property rpsLimit (base name: "rps_limit")', function() {
      // uncomment below and update the code to test the property rpsLimit
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property windowSize (base name: "window_size")', function() {
      // uncomment below and update the code to test the property windowSize
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property clientKey (base name: "client_key")', function() {
      // uncomment below and update the code to test the property clientKey
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property penaltyBoxDuration (base name: "penalty_box_duration")', function() {
      // uncomment below and update the code to test the property penaltyBoxDuration
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property serviceId (base name: "service_id")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property uriDictionaryName (base name: "uri_dictionary_name")', function() {
      // uncomment below and update the code to test the property uriDictionaryName
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property response (base name: "response")', function() {
      // uncomment below and update the code to test the property response
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property responseObjectName (base name: "response_object_name")', function() {
      // uncomment below and update the code to test the property responseObjectName
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property loggerType (base name: "logger_type")', function() {
      // uncomment below and update the code to test the property loggerType
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

    it('should have the property featureRevision (base name: "feature_revision")', function() {
      // uncomment below and update the code to test the property featureRevision
      //var instance = new RateLimiter.InlineObject();
      //expect(instance).to.be();
    });

  });

}));
