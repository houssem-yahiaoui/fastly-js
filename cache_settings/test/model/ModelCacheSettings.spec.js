/**
 * Cache settings
 * Configures cache lifetime for objects stored in the Fastly cache, overriding cache freshness information that would otherwise be determined from cache-related headers on the HTTP response. When used in conjunction with conditions, cache settings objects provide detailed control over how long content persists in the cache.
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
    factory(root.expect, root.CacheSettings);
  }
}(this, function(expect, CacheSettings) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CacheSettings.ModelCacheSettings();
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

  describe('ModelCacheSettings', function() {
    it('should create an instance of ModelCacheSettings', function() {
      // uncomment below and update the code to test ModelCacheSettings
      //var instane = new CacheSettings.ModelCacheSettings();
      //expect(instance).to.be.a(CacheSettings.ModelCacheSettings);
    });

    it('should have the property serviceId (base name: "service_id")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instance = new CacheSettings.ModelCacheSettings();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new CacheSettings.ModelCacheSettings();
      //expect(instance).to.be();
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instance = new CacheSettings.ModelCacheSettings();
      //expect(instance).to.be();
    });

    it('should have the property cacheCondition (base name: "cache_condition")', function() {
      // uncomment below and update the code to test the property cacheCondition
      //var instance = new CacheSettings.ModelCacheSettings();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CacheSettings.ModelCacheSettings();
      //expect(instance).to.be();
    });

    it('should have the property staleTtl (base name: "stale_ttl")', function() {
      // uncomment below and update the code to test the property staleTtl
      //var instance = new CacheSettings.ModelCacheSettings();
      //expect(instance).to.be();
    });

    it('should have the property ttl (base name: "ttl")', function() {
      // uncomment below and update the code to test the property ttl
      //var instance = new CacheSettings.ModelCacheSettings();
      //expect(instance).to.be();
    });

  });

}));
