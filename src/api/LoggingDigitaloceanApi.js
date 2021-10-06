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
import LoggingCompressionCodec from '../model/LoggingCompressionCodec';
import LoggingDigitaloceanResponse from '../model/LoggingDigitaloceanResponse';
import LoggingFormatVersion from '../model/LoggingFormatVersion';
import LoggingMessageType from '../model/LoggingMessageType';
import LoggingPlacement from '../model/LoggingPlacement';

/**
* LoggingDigitalocean service.
* @module api/LoggingDigitaloceanApi
* @version 3.0.0-alpha1
*/
export default class LoggingDigitaloceanApi {

    /**
    * Constructs a new LoggingDigitaloceanApi. 
    * @alias module:api/LoggingDigitaloceanApi
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
     * Create a DigitalOcean Space for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {String} [options.access_key] - Your DigitalOcean Spaces account access key.
     * @param {String} [options.bucket_name] - The name of the DigitalOcean Space.
     * @param {String} [options.domain='nyc3.digitaloceanspaces.com'] - The domain of the DigitalOcean Spaces endpoint.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.secret_key] - Your DigitalOcean Spaces account secret key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingDigitaloceanResponse} and HTTP response
     */
    createLogDigoceanWithHttpInfo(options = {}) {
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
        'format': options['format'],
        'format_version': options['format_version'],
        'name': options['name'],
        'placement': options['placement'],
        'response_condition': options['response_condition'],
        'compression_codec': options['compression_codec'],
        'gzip_level': options['gzip_level'],
        'message_type': options['message_type'],
        'period': options['period'],
        'timestamp_format': options['timestamp_format'],
        'access_key': options['access_key'],
        'bucket_name': options['bucket_name'],
        'domain': options['domain'],
        'path': options['path'],
        'public_key': options['public_key'],
        'secret_key': options['secret_key']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingDigitaloceanResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/digitalocean', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a DigitalOcean Space for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {String} [options.access_key] - Your DigitalOcean Spaces account access key.
     * @param {String} [options.bucket_name] - The name of the DigitalOcean Space.
     * @param {String} [options.domain='nyc3.digitaloceanspaces.com'] - The domain of the DigitalOcean Spaces endpoint.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.secret_key] - Your DigitalOcean Spaces account secret key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingDigitaloceanResponse}
     */
    createLogDigocean(options = {}) {
      return this.createLogDigoceanWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete the DigitalOcean Space for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_digitalocean_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteLogDigoceanWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_digitalocean_name' is set.
      if (options['logging_digitalocean_name'] === undefined || options['logging_digitalocean_name'] === null) {
        throw new Error("Missing the required parameter 'logging_digitalocean_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_digitalocean_name': options['logging_digitalocean_name']
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
        '/service/{service_id}/version/{version_id}/logging/digitalocean/{logging_digitalocean_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete the DigitalOcean Space for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_digitalocean_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteLogDigocean(options = {}) {
      return this.deleteLogDigoceanWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get the DigitalOcean Space for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_digitalocean_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingDigitaloceanResponse} and HTTP response
     */
    getLogDigoceanWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_digitalocean_name' is set.
      if (options['logging_digitalocean_name'] === undefined || options['logging_digitalocean_name'] === null) {
        throw new Error("Missing the required parameter 'logging_digitalocean_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_digitalocean_name': options['logging_digitalocean_name']
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
      let returnType = LoggingDigitaloceanResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/digitalocean/{logging_digitalocean_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the DigitalOcean Space for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_digitalocean_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingDigitaloceanResponse}
     */
    getLogDigocean(options = {}) {
      return this.getLogDigoceanWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all of the DigitalOcean Spaces for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoggingDigitaloceanResponse>} and HTTP response
     */
    listLogDigoceanWithHttpInfo(options = {}) {
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
      let returnType = [LoggingDigitaloceanResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/digitalocean', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all of the DigitalOcean Spaces for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoggingDigitaloceanResponse>}
     */
    listLogDigocean(options = {}) {
      return this.listLogDigoceanWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update the DigitalOcean Space for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_digitalocean_name
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {String} [options.access_key] - Your DigitalOcean Spaces account access key.
     * @param {String} [options.bucket_name] - The name of the DigitalOcean Space.
     * @param {String} [options.domain='nyc3.digitaloceanspaces.com'] - The domain of the DigitalOcean Spaces endpoint.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.secret_key] - Your DigitalOcean Spaces account secret key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingDigitaloceanResponse} and HTTP response
     */
    updateLogDigoceanWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'logging_digitalocean_name' is set.
      if (options['logging_digitalocean_name'] === undefined || options['logging_digitalocean_name'] === null) {
        throw new Error("Missing the required parameter 'logging_digitalocean_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_digitalocean_name': options['logging_digitalocean_name']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'format': options['format'],
        'format_version': options['format_version'],
        'name': options['name'],
        'placement': options['placement'],
        'response_condition': options['response_condition'],
        'compression_codec': options['compression_codec'],
        'gzip_level': options['gzip_level'],
        'message_type': options['message_type'],
        'period': options['period'],
        'timestamp_format': options['timestamp_format'],
        'access_key': options['access_key'],
        'bucket_name': options['bucket_name'],
        'domain': options['domain'],
        'path': options['path'],
        'public_key': options['public_key'],
        'secret_key': options['secret_key']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingDigitaloceanResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/digitalocean/{logging_digitalocean_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update the DigitalOcean Space for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_digitalocean_name
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {String} [options.access_key] - Your DigitalOcean Spaces account access key.
     * @param {String} [options.bucket_name] - The name of the DigitalOcean Space.
     * @param {String} [options.domain='nyc3.digitaloceanspaces.com'] - The domain of the DigitalOcean Spaces endpoint.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.secret_key] - Your DigitalOcean Spaces account secret key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingDigitaloceanResponse}
     */
    updateLogDigocean(options = {}) {
      return this.updateLogDigoceanWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
