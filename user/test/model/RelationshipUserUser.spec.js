/**
 * User
 * A user of the Fastly API and web interface. A user is always associated with a customer.
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
    factory(root.expect, root.User);
  }
}(this, function(expect, User) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new User.RelationshipUserUser();
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

  describe('RelationshipUserUser', function() {
    it('should create an instance of RelationshipUserUser', function() {
      // uncomment below and update the code to test RelationshipUserUser
      //var instane = new User.RelationshipUserUser();
      //expect(instance).to.be.a(User.RelationshipUserUser);
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new User.RelationshipUserUser();
      //expect(instance).to.be();
    });

  });

}));
