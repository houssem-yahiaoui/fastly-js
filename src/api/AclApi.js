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
import Acl from '../model/Acl';
import AclResponse from '../model/AclResponse';


export default class AclApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createAclWithHttpInfo(service_id, version_id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling createAcl");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling createAcl");
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
        'name': opts['name']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = AclResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/acl', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createAcl(service_id, version_id, opts) {
      return this.createAclWithHttpInfo(service_id, version_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteAclWithHttpInfo(service_id, version_id, acl_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling deleteAcl");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling deleteAcl");
      }
      // verify the required parameter 'acl_name' is set
      if (acl_name === undefined || acl_name === null) {
        throw new Error("Missing the required parameter 'acl_name' when calling deleteAcl");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'acl_name': acl_name
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
        '/service/{service_id}/version/{version_id}/acl/{acl_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteAcl(service_id, version_id, acl_name) {
      return this.deleteAclWithHttpInfo(service_id, version_id, acl_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getAclWithHttpInfo(service_id, version_id, acl_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling getAcl");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling getAcl");
      }
      // verify the required parameter 'acl_name' is set
      if (acl_name === undefined || acl_name === null) {
        throw new Error("Missing the required parameter 'acl_name' when calling getAcl");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'acl_name': acl_name
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
      let returnType = AclResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/acl/{acl_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getAcl(service_id, version_id, acl_name) {
      return this.getAclWithHttpInfo(service_id, version_id, acl_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listAclsWithHttpInfo(service_id, version_id) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling listAcls");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling listAcls");
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
      let returnType = [AclResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/acl', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listAcls(service_id, version_id) {
      return this.listAclsWithHttpInfo(service_id, version_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateAclWithHttpInfo(service_id, version_id, acl_name, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling updateAcl");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling updateAcl");
      }
      // verify the required parameter 'acl_name' is set
      if (acl_name === undefined || acl_name === null) {
        throw new Error("Missing the required parameter 'acl_name' when calling updateAcl");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'acl_name': acl_name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': opts['name']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = Acl;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/acl/{acl_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateAcl(service_id, version_id, acl_name, opts) {
      return this.updateAclWithHttpInfo(service_id, version_id, acl_name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
