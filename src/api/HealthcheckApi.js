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
import HealthcheckResponse from '../model/HealthcheckResponse';


export default class HealthcheckApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createHealthcheckWithHttpInfo(service_id, version_id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling createHealthcheck");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling createHealthcheck");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'check_interval': opts['check_interval'],
        'comment': opts['comment'],
        'expected_response': opts['expected_response'],
        'host': opts['host'],
        'http_version': opts['http_version'],
        'initial': opts['initial'],
        'method': opts['method'],
        'name': opts['name'],
        'path': opts['path'],
        'threshold': opts['threshold'],
        'timeout': opts['timeout'],
        'window': opts['window']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = HealthcheckResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/healthcheck', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createHealthcheck(service_id, version_id, opts) {
      return this.createHealthcheckWithHttpInfo(service_id, version_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteHealthcheckWithHttpInfo(service_id, version_id, healthcheck_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling deleteHealthcheck");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling deleteHealthcheck");
      }
      // verify the required parameter 'healthcheck_name' is set
      if (healthcheck_name === undefined || healthcheck_name === null) {
        throw new Error("Missing the required parameter 'healthcheck_name' when calling deleteHealthcheck");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'healthcheck_name': healthcheck_name
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
        '/service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteHealthcheck(service_id, version_id, healthcheck_name) {
      return this.deleteHealthcheckWithHttpInfo(service_id, version_id, healthcheck_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getHealthcheckWithHttpInfo(service_id, version_id, healthcheck_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling getHealthcheck");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling getHealthcheck");
      }
      // verify the required parameter 'healthcheck_name' is set
      if (healthcheck_name === undefined || healthcheck_name === null) {
        throw new Error("Missing the required parameter 'healthcheck_name' when calling getHealthcheck");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'healthcheck_name': healthcheck_name
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
      let returnType = HealthcheckResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getHealthcheck(service_id, version_id, healthcheck_name) {
      return this.getHealthcheckWithHttpInfo(service_id, version_id, healthcheck_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listHealthchecksWithHttpInfo(service_id, version_id) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling listHealthchecks");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling listHealthchecks");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id
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
      let returnType = [HealthcheckResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/healthcheck', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listHealthchecks(service_id, version_id) {
      return this.listHealthchecksWithHttpInfo(service_id, version_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateHealthcheckWithHttpInfo(service_id, version_id, healthcheck_name, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling updateHealthcheck");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling updateHealthcheck");
      }
      // verify the required parameter 'healthcheck_name' is set
      if (healthcheck_name === undefined || healthcheck_name === null) {
        throw new Error("Missing the required parameter 'healthcheck_name' when calling updateHealthcheck");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'healthcheck_name': healthcheck_name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'check_interval': opts['check_interval'],
        'comment': opts['comment'],
        'expected_response': opts['expected_response'],
        'host': opts['host'],
        'http_version': opts['http_version'],
        'initial': opts['initial'],
        'method': opts['method'],
        'name': opts['name'],
        'path': opts['path'],
        'threshold': opts['threshold'],
        'timeout': opts['timeout'],
        'window': opts['window']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = HealthcheckResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateHealthcheck(service_id, version_id, healthcheck_name, opts) {
      return this.updateHealthcheckWithHttpInfo(service_id, version_id, healthcheck_name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
