/**
 * HTTPS
 * Fastly will upload log messages to an HTTPS endpoint in the format specified in the HTTPS object. The HTTPS endpoint requires proof of domain ownership before logs can be received. Learn how to validate your domain in our [HTTPS endpoint documentation](https://docs.fastly.com/en/guides/log-streaming-https).
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
    factory(root.expect, root.Https);
  }
}(this, function(expect, Https) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Https.InlineResponse200();
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
      //var instane = new Https.InlineResponse200();
      //expect(instance).to.be.a(Https.InlineResponse200);
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property serviceId (base name: "service_id")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property placement (base name: "placement")', function() {
      // uncomment below and update the code to test the property placement
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property formatVersion (base name: "format_version")', function() {
      // uncomment below and update the code to test the property formatVersion
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property responseCondition (base name: "response_condition")', function() {
      // uncomment below and update the code to test the property responseCondition
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property tlsCaCert (base name: "tls_ca_cert")', function() {
      // uncomment below and update the code to test the property tlsCaCert
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property tlsClientCert (base name: "tls_client_cert")', function() {
      // uncomment below and update the code to test the property tlsClientCert
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property tlsClientKey (base name: "tls_client_key")', function() {
      // uncomment below and update the code to test the property tlsClientKey
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property tlsHostname (base name: "tls_hostname")', function() {
      // uncomment below and update the code to test the property tlsHostname
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property requestMaxEntries (base name: "request_max_entries")', function() {
      // uncomment below and update the code to test the property requestMaxEntries
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property requestMaxBytes (base name: "request_max_bytes")', function() {
      // uncomment below and update the code to test the property requestMaxBytes
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property contentType (base name: "content_type")', function() {
      // uncomment below and update the code to test the property contentType
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property headerName (base name: "header_name")', function() {
      // uncomment below and update the code to test the property headerName
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property messageType (base name: "message_type")', function() {
      // uncomment below and update the code to test the property messageType
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property headerValue (base name: "header_value")', function() {
      // uncomment below and update the code to test the property headerValue
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property jsonFormat (base name: "json_format")', function() {
      // uncomment below and update the code to test the property jsonFormat
      //var instance = new Https.InlineResponse200();
      //expect(instance).to.be();
    });

  });

}));
