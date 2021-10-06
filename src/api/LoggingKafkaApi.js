/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ServiceIdAndVersion from '../model/ServiceIdAndVersion';

/**
* LoggingKafka service.
* @module api/LoggingKafkaApi
* @version 3.0.0-alpha1
*/
export default class LoggingKafkaApi {

    /**
    * Constructs a new LoggingKafkaApi. 
    * @alias module:api/LoggingKafkaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;

        if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
            this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
        }
    }


    /**
     * Create a Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceIdAndVersion} and HTTP response
     */
    createLogKafkaWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'tls_ca_cert': options['tls_ca_cert'],
        'tls_client_cert': options['tls_client_cert'],
        'tls_client_key': options['tls_client_key'],
        'tls_hostname': options['tls_hostname']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ServiceIdAndVersion;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/kafka', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.tls_ca_cert='null'] - A secure certificate to authenticate a server with. Must be in PEM format.
     * @param {String} [options.tls_client_cert='null'] - The client certificate used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_client_key='null'] - The client private key used to make authenticated requests. Must be in PEM format.
     * @param {String} [options.tls_hostname='null'] - The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceIdAndVersion}
     */
    createLogKafka(options = {}) {
      return this.createLogKafkaWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete the Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_kafka_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteLogKafkaWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_kafka_name' is set.
      if (options['logging_kafka_name'] === undefined || options['logging_kafka_name'] === null) {
        throw new Error("Missing the required parameter 'logging_kafka_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_kafka_name': options['logging_kafka_name']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/kafka/{logging_kafka_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete the Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_kafka_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteLogKafka(options = {}) {
      return this.deleteLogKafkaWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_kafka_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceIdAndVersion} and HTTP response
     */
    getLogKafkaWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_kafka_name' is set.
      if (options['logging_kafka_name'] === undefined || options['logging_kafka_name'] === null) {
        throw new Error("Missing the required parameter 'logging_kafka_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_kafka_name': options['logging_kafka_name']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceIdAndVersion;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/kafka/{logging_kafka_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_kafka_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceIdAndVersion}
     */
    getLogKafka(options = {}) {
      return this.getLogKafkaWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all of the Kafka logging endpoints for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ServiceIdAndVersion>} and HTTP response
     */
    listLogKafkaWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ServiceIdAndVersion];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/kafka', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all of the Kafka logging endpoints for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ServiceIdAndVersion>}
     */
    listLogKafka(options = {}) {
      return this.listLogKafkaWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update the Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_kafka_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceIdAndVersion} and HTTP response
     */
    updateLogKafkaWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_kafka_name' is set.
      if (options['logging_kafka_name'] === undefined || options['logging_kafka_name'] === null) {
        throw new Error("Missing the required parameter 'logging_kafka_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_kafka_name': options['logging_kafka_name']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ServiceIdAndVersion;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/kafka/{logging_kafka_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update the Kafka logging endpoint for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_kafka_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceIdAndVersion}
     */
    updateLogKafka(options = {}) {
      return this.updateLogKafkaWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
