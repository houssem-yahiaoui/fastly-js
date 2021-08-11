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
import LoggingFormatVersion from '../model/LoggingFormatVersion';
import LoggingLogshuttleResponse from '../model/LoggingLogshuttleResponse';
import LoggingPlacement from '../model/LoggingPlacement';


export default class LoggingLogshuttleApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createLogLogshuttleWithHttpInfo(service_id, version_id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling createLogLogshuttle");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling createLogLogshuttle");
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
        'name': opts['name'],
        'placement': opts['placement'],
        'format_version': opts['format_version'],
        'response_condition': opts['response_condition'],
        'format': opts['format'],
        'token': opts['token'],
        'url': opts['url']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingLogshuttleResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/logshuttle', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createLogLogshuttle(service_id, version_id, opts) {
      return this.createLogLogshuttleWithHttpInfo(service_id, version_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteLogLogshuttleWithHttpInfo(service_id, version_id, logging_logshuttle_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling deleteLogLogshuttle");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling deleteLogLogshuttle");
      }
      // verify the required parameter 'logging_logshuttle_name' is set
      if (logging_logshuttle_name === undefined || logging_logshuttle_name === null) {
        throw new Error("Missing the required parameter 'logging_logshuttle_name' when calling deleteLogLogshuttle");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'logging_logshuttle_name': logging_logshuttle_name
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
        '/service/{service_id}/version/{version_id}/logging/logshuttle/{logging_logshuttle_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteLogLogshuttle(service_id, version_id, logging_logshuttle_name) {
      return this.deleteLogLogshuttleWithHttpInfo(service_id, version_id, logging_logshuttle_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getLogLogshuttleWithHttpInfo(service_id, version_id, logging_logshuttle_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling getLogLogshuttle");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling getLogLogshuttle");
      }
      // verify the required parameter 'logging_logshuttle_name' is set
      if (logging_logshuttle_name === undefined || logging_logshuttle_name === null) {
        throw new Error("Missing the required parameter 'logging_logshuttle_name' when calling getLogLogshuttle");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'logging_logshuttle_name': logging_logshuttle_name
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
      let returnType = LoggingLogshuttleResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/logshuttle/{logging_logshuttle_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getLogLogshuttle(service_id, version_id, logging_logshuttle_name) {
      return this.getLogLogshuttleWithHttpInfo(service_id, version_id, logging_logshuttle_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listLogLogshuttleWithHttpInfo(service_id, version_id) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling listLogLogshuttle");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling listLogLogshuttle");
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
      let returnType = [LoggingLogshuttleResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/logshuttle', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listLogLogshuttle(service_id, version_id) {
      return this.listLogLogshuttleWithHttpInfo(service_id, version_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateLogLogshuttleWithHttpInfo(service_id, version_id, logging_logshuttle_name, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling updateLogLogshuttle");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling updateLogLogshuttle");
      }
      // verify the required parameter 'logging_logshuttle_name' is set
      if (logging_logshuttle_name === undefined || logging_logshuttle_name === null) {
        throw new Error("Missing the required parameter 'logging_logshuttle_name' when calling updateLogLogshuttle");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'logging_logshuttle_name': logging_logshuttle_name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': opts['name'],
        'placement': opts['placement'],
        'format_version': opts['format_version'],
        'response_condition': opts['response_condition'],
        'format': opts['format'],
        'token': opts['token'],
        'url': opts['url']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingLogshuttleResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/logshuttle/{logging_logshuttle_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateLogLogshuttle(service_id, version_id, logging_logshuttle_name, opts) {
      return this.updateLogLogshuttleWithHttpInfo(service_id, version_id, logging_logshuttle_name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
