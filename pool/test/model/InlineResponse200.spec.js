/**
 * Pool
 * A pool is responsible for balancing requests among a group of servers. In addition to balancing, pools can be configured to attempt retrying failed requests. Pools have a quorum setting that can be used to determine when the pool as a whole is considered up, in order to prevent problems following an outage as servers come back up.
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
    factory(root.expect, root.Pool);
  }
}(this, function(expect, Pool) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Pool.InlineResponse200();
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
      //var instane = new Pool.InlineResponse200();
      //expect(instance).to.be.a(Pool.InlineResponse200);
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property serviceId (base name: "service_id")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property tlsCaCert (base name: "tls_ca_cert")', function() {
      // uncomment below and update the code to test the property tlsCaCert
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property tlsClientCert (base name: "tls_client_cert")', function() {
      // uncomment below and update the code to test the property tlsClientCert
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property tlsClientKey (base name: "tls_client_key")', function() {
      // uncomment below and update the code to test the property tlsClientKey
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property tlsCertHostname (base name: "tls_cert_hostname")', function() {
      // uncomment below and update the code to test the property tlsCertHostname
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property useTls (base name: "use_tls")', function() {
      // uncomment below and update the code to test the property useTls
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property shield (base name: "shield")', function() {
      // uncomment below and update the code to test the property shield
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property requestCondition (base name: "request_condition")', function() {
      // uncomment below and update the code to test the property requestCondition
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property maxConnDefault (base name: "max_conn_default")', function() {
      // uncomment below and update the code to test the property maxConnDefault
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property connectTimeout (base name: "connect_timeout")', function() {
      // uncomment below and update the code to test the property connectTimeout
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property firstByteTimeout (base name: "first_byte_timeout")', function() {
      // uncomment below and update the code to test the property firstByteTimeout
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property quorum (base name: "quorum")', function() {
      // uncomment below and update the code to test the property quorum
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property tlsCiphers (base name: "tls_ciphers")', function() {
      // uncomment below and update the code to test the property tlsCiphers
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property tlsSniHostname (base name: "tls_sni_hostname")', function() {
      // uncomment below and update the code to test the property tlsSniHostname
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property tlsCheckCert (base name: "tls_check_cert")', function() {
      // uncomment below and update the code to test the property tlsCheckCert
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property minTlsVersion (base name: "min_tls_version")', function() {
      // uncomment below and update the code to test the property minTlsVersion
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property maxTlsVersion (base name: "max_tls_version")', function() {
      // uncomment below and update the code to test the property maxTlsVersion
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property healthcheck (base name: "healthcheck")', function() {
      // uncomment below and update the code to test the property healthcheck
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property overrideHost (base name: "override_host")', function() {
      // uncomment below and update the code to test the property overrideHost
      //var instance = new Pool.InlineResponse200();
      //expect(instance).to.be();
    });

  });

}));
