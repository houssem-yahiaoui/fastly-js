/**
 * Scalyr
 * Fastly will stream log messages to the Scalyr account in the format specified in the Scalyr object.
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


export default class LoggingScalyrApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createLogScalyrWithHttpInfo(serviceId, versionId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling createLogScalyr");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling createLogScalyr");
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
        'region': opts['region'],
        'token': opts['token'],
        'project_id': opts['projectId']
      };

      let authNames = ['token_engineer'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineObject;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/scalyr', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createLogScalyr(serviceId, versionId, opts) {
      return this.createLogScalyrWithHttpInfo(serviceId, versionId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteLogScalyrWithHttpInfo(serviceId, versionId, loggingScalyrName) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling deleteLogScalyr");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling deleteLogScalyr");
      }
      // verify the required parameter 'loggingScalyrName' is set
      if (loggingScalyrName === undefined || loggingScalyrName === null) {
        throw new Error("Missing the required parameter 'loggingScalyrName' when calling deleteLogScalyr");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId,
        'logging_scalyr_name': loggingScalyrName
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
        '/service/{service_id}/version/{version_id}/logging/scalyr/{logging_scalyr_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteLogScalyr(serviceId, versionId, loggingScalyrName) {
      return this.deleteLogScalyrWithHttpInfo(serviceId, versionId, loggingScalyrName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getLogScalyrWithHttpInfo(serviceId, versionId, loggingScalyrName) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling getLogScalyr");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling getLogScalyr");
      }
      // verify the required parameter 'loggingScalyrName' is set
      if (loggingScalyrName === undefined || loggingScalyrName === null) {
        throw new Error("Missing the required parameter 'loggingScalyrName' when calling getLogScalyr");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId,
        'logging_scalyr_name': loggingScalyrName
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
        '/service/{service_id}/version/{version_id}/logging/scalyr/{logging_scalyr_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getLogScalyr(serviceId, versionId, loggingScalyrName) {
      return this.getLogScalyrWithHttpInfo(serviceId, versionId, loggingScalyrName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listLogScalyrWithHttpInfo(serviceId, versionId) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling listLogScalyr");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling listLogScalyr");
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
        '/service/{service_id}/version/{version_id}/logging/scalyr', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listLogScalyr(serviceId, versionId) {
      return this.listLogScalyrWithHttpInfo(serviceId, versionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateLogScalyrWithHttpInfo(serviceId, versionId, loggingScalyrName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling updateLogScalyr");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling updateLogScalyr");
      }
      // verify the required parameter 'loggingScalyrName' is set
      if (loggingScalyrName === undefined || loggingScalyrName === null) {
        throw new Error("Missing the required parameter 'loggingScalyrName' when calling updateLogScalyr");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId,
        'logging_scalyr_name': loggingScalyrName
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
        'region': opts['region'],
        'token': opts['token'],
        'project_id': opts['projectId']
      };

      let authNames = ['token_engineer'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineObject1;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/scalyr/{logging_scalyr_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateLogScalyr(serviceId, versionId, loggingScalyrName, opts) {
      return this.updateLogScalyrWithHttpInfo(serviceId, versionId, loggingScalyrName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
