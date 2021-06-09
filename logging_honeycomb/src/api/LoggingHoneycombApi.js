/**
 * Honeycomb Logging
 * Fastly will upload log messages to Honeycomb.io in the format specified in the Honeycomb object.
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
import InlineObject from '../model/InlineObject';
import InlineObject1 from '../model/InlineObject1';
import InlineResponse200 from '../model/InlineResponse200';


export default class LoggingHoneycombApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createLogHoneycombWithHttpInfo(serviceId, versionId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling createLogHoneycomb");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling createLogHoneycomb");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'created_at': opts['createdAt'],
        'deleted_at': opts['deletedAt'],
        'updated_at': opts['updatedAt'],
        'service_id': opts['serviceId2'],
        'version': opts['version'],
        'name': opts['name'],
        'placement': opts['placement'],
        'format_version': opts['formatVersion'],
        'response_condition': opts['responseCondition'],
        'format': opts['format'],
        'dataset': opts['dataset'],
        'token': opts['token']
      };

      let authNames = ['token_engineer'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineObject;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/honeycomb', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createLogHoneycomb(serviceId, versionId, opts) {
      return this.createLogHoneycombWithHttpInfo(serviceId, versionId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteLogHoneycombWithHttpInfo(serviceId, versionId, loggingHoneycombName) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling deleteLogHoneycomb");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling deleteLogHoneycomb");
      }
      // verify the required parameter 'loggingHoneycombName' is set
      if (loggingHoneycombName === undefined || loggingHoneycombName === null) {
        throw new Error("Missing the required parameter 'loggingHoneycombName' when calling deleteLogHoneycomb");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId,
        'logging_honeycomb_name': loggingHoneycombName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token_engineer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteLogHoneycomb(serviceId, versionId, loggingHoneycombName) {
      return this.deleteLogHoneycombWithHttpInfo(serviceId, versionId, loggingHoneycombName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getLogHoneycombWithHttpInfo(serviceId, versionId, loggingHoneycombName) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling getLogHoneycomb");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling getLogHoneycomb");
      }
      // verify the required parameter 'loggingHoneycombName' is set
      if (loggingHoneycombName === undefined || loggingHoneycombName === null) {
        throw new Error("Missing the required parameter 'loggingHoneycombName' when calling getLogHoneycomb");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId,
        'logging_honeycomb_name': loggingHoneycombName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token_engineer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineObject;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getLogHoneycomb(serviceId, versionId, loggingHoneycombName) {
      return this.getLogHoneycombWithHttpInfo(serviceId, versionId, loggingHoneycombName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listLogHoneycombWithHttpInfo(serviceId, versionId) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling listLogHoneycomb");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling listLogHoneycomb");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token_engineer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [InlineResponse200];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/honeycomb', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listLogHoneycomb(serviceId, versionId) {
      return this.listLogHoneycombWithHttpInfo(serviceId, versionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateLogHoneycombWithHttpInfo(serviceId, versionId, loggingHoneycombName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling updateLogHoneycomb");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling updateLogHoneycomb");
      }
      // verify the required parameter 'loggingHoneycombName' is set
      if (loggingHoneycombName === undefined || loggingHoneycombName === null) {
        throw new Error("Missing the required parameter 'loggingHoneycombName' when calling updateLogHoneycomb");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId,
        'logging_honeycomb_name': loggingHoneycombName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'created_at': opts['createdAt'],
        'deleted_at': opts['deletedAt'],
        'updated_at': opts['updatedAt'],
        'service_id': opts['serviceId2'],
        'version': opts['version'],
        'name': opts['name'],
        'placement': opts['placement'],
        'format_version': opts['formatVersion'],
        'response_condition': opts['responseCondition'],
        'format': opts['format'],
        'dataset': opts['dataset'],
        'token': opts['token']
      };

      let authNames = ['token_engineer'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineObject1;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateLogHoneycomb(serviceId, versionId, loggingHoneycombName, opts) {
      return this.updateLogHoneycombWithHttpInfo(serviceId, versionId, loggingHoneycombName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
