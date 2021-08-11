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
import DirectorBackend from '../model/DirectorBackend';


export default class DirectorBackendApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createDirectorBackendWithHttpInfo(director_name, service_id, version_id, backend_name) {
      let postBody = null;
      // verify the required parameter 'director_name' is set
      if (director_name === undefined || director_name === null) {
        throw new Error("Missing the required parameter 'director_name' when calling createDirectorBackend");
      }
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling createDirectorBackend");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling createDirectorBackend");
      }
      // verify the required parameter 'backend_name' is set
      if (backend_name === undefined || backend_name === null) {
        throw new Error("Missing the required parameter 'backend_name' when calling createDirectorBackend");
      }

      let pathParams = {
        'director_name': director_name,
        'service_id': service_id,
        'version_id': version_id,
        'backend_name': backend_name
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
      let returnType = DirectorBackend;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createDirectorBackend(director_name, service_id, version_id, backend_name) {
      return this.createDirectorBackendWithHttpInfo(director_name, service_id, version_id, backend_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteDirectorBackendWithHttpInfo(director_name, service_id, version_id, backend_name) {
      let postBody = null;
      // verify the required parameter 'director_name' is set
      if (director_name === undefined || director_name === null) {
        throw new Error("Missing the required parameter 'director_name' when calling deleteDirectorBackend");
      }
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling deleteDirectorBackend");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling deleteDirectorBackend");
      }
      // verify the required parameter 'backend_name' is set
      if (backend_name === undefined || backend_name === null) {
        throw new Error("Missing the required parameter 'backend_name' when calling deleteDirectorBackend");
      }

      let pathParams = {
        'director_name': director_name,
        'service_id': service_id,
        'version_id': version_id,
        'backend_name': backend_name
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
        '/service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteDirectorBackend(director_name, service_id, version_id, backend_name) {
      return this.deleteDirectorBackendWithHttpInfo(director_name, service_id, version_id, backend_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getDirectorBackendWithHttpInfo(director_name, service_id, version_id, backend_name) {
      let postBody = null;
      // verify the required parameter 'director_name' is set
      if (director_name === undefined || director_name === null) {
        throw new Error("Missing the required parameter 'director_name' when calling getDirectorBackend");
      }
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling getDirectorBackend");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling getDirectorBackend");
      }
      // verify the required parameter 'backend_name' is set
      if (backend_name === undefined || backend_name === null) {
        throw new Error("Missing the required parameter 'backend_name' when calling getDirectorBackend");
      }

      let pathParams = {
        'director_name': director_name,
        'service_id': service_id,
        'version_id': version_id,
        'backend_name': backend_name
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
      let returnType = DirectorBackend;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getDirectorBackend(director_name, service_id, version_id, backend_name) {
      return this.getDirectorBackendWithHttpInfo(director_name, service_id, version_id, backend_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
