/**
 * Request settings
 * Settings used to customize Fastly's request handling. When used with [Conditions](#condition) the Request Settings object allows you to fine tune how specific types of requests are handled.
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
import InlineResponse200 from '../model/InlineResponse200';


export default class VclServicesRequestSettingsApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createRequestSettingsWithHttpInfo(serviceId, versionId) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling createRequestSettings");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling createRequestSettings");
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
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/request_settings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createRequestSettings(serviceId, versionId) {
      return this.createRequestSettingsWithHttpInfo(serviceId, versionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteRequestSettingsWithHttpInfo(serviceId, versionId, requestSettingsName) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling deleteRequestSettings");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling deleteRequestSettings");
      }
      // verify the required parameter 'requestSettingsName' is set
      if (requestSettingsName === undefined || requestSettingsName === null) {
        throw new Error("Missing the required parameter 'requestSettingsName' when calling deleteRequestSettings");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId,
        'request_settings_name': requestSettingsName
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
        '/service/{service_id}/version/{version_id}/request_settings/{request_settings_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteRequestSettings(serviceId, versionId, requestSettingsName) {
      return this.deleteRequestSettingsWithHttpInfo(serviceId, versionId, requestSettingsName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getRequestSettingsWithHttpInfo(serviceId, versionId, requestSettingsName) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling getRequestSettings");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling getRequestSettings");
      }
      // verify the required parameter 'requestSettingsName' is set
      if (requestSettingsName === undefined || requestSettingsName === null) {
        throw new Error("Missing the required parameter 'requestSettingsName' when calling getRequestSettings");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId,
        'request_settings_name': requestSettingsName
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
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/request_settings/{request_settings_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getRequestSettings(serviceId, versionId, requestSettingsName) {
      return this.getRequestSettingsWithHttpInfo(serviceId, versionId, requestSettingsName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listRequestSettingsWithHttpInfo(serviceId, versionId) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling listRequestSettings");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling listRequestSettings");
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
        '/service/{service_id}/version/{version_id}/request_settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listRequestSettings(serviceId, versionId) {
      return this.listRequestSettingsWithHttpInfo(serviceId, versionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateRequestSettingsWithHttpInfo(serviceId, versionId, requestSettingsName) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling updateRequestSettings");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling updateRequestSettings");
      }
      // verify the required parameter 'requestSettingsName' is set
      if (requestSettingsName === undefined || requestSettingsName === null) {
        throw new Error("Missing the required parameter 'requestSettingsName' when calling updateRequestSettings");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId,
        'request_settings_name': requestSettingsName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token_engineer'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/request_settings/{request_settings_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateRequestSettings(serviceId, versionId, requestSettingsName) {
      return this.updateRequestSettingsWithHttpInfo(serviceId, versionId, requestSettingsName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
