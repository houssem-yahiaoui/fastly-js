/**
 * Response object
 * Allows you to create synthetic responses that exist entirely on the varnish machine. Useful for creating error or maintenance pages that exists outside the scope of your datacenter. Best when used with [Condition](#condition) objects.
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
    factory(root.expect, root.ResponseObject);
  }
}(this, function(expect, ResponseObject) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ResponseObject.VclServicesResponseObjectApi();
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

  describe('VclServicesResponseObjectApi', function() {
    describe('createResponseObject', function() {
      it('should call createResponseObject successfully', function(done) {
        //uncomment below and update the code to test createResponseObject
        //instance.createResponseObject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteResponseObject', function() {
      it('should call deleteResponseObject successfully', function(done) {
        //uncomment below and update the code to test deleteResponseObject
        //instance.deleteResponseObject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getResponseObject', function() {
      it('should call getResponseObject successfully', function(done) {
        //uncomment below and update the code to test getResponseObject
        //instance.getResponseObject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listResponseObjects', function() {
      it('should call listResponseObjects successfully', function(done) {
        //uncomment below and update the code to test listResponseObjects
        //instance.listResponseObjects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateResponseObject', function() {
      it('should call updateResponseObject successfully', function(done) {
        //uncomment below and update the code to test updateResponseObject
        //instance.updateResponseObject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
