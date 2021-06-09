/**
 * Dictionary info
 * Dictionary Info is a set of metadata describing properties of a dictionary which change as items are added and removed.
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
    factory(root.expect, root.DictionaryInfo);
  }
}(this, function(expect, DictionaryInfo) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DictionaryInfo.InlineResponse200();
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
      //var instane = new DictionaryInfo.InlineResponse200();
      //expect(instance).to.be.a(DictionaryInfo.InlineResponse200);
    });

    it('should have the property lastUpdated (base name: "last_updated")', function() {
      // uncomment below and update the code to test the property lastUpdated
      //var instance = new DictionaryInfo.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property itemCount (base name: "item_count")', function() {
      // uncomment below and update the code to test the property itemCount
      //var instance = new DictionaryInfo.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property digest (base name: "digest")', function() {
      // uncomment below and update the code to test the property digest
      //var instance = new DictionaryInfo.InlineResponse200();
      //expect(instance).to.be();
    });

  });

}));
