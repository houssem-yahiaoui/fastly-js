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
import PoolResponse from '../model/PoolResponse';


export default class PoolApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createServerPoolWithHttpInfo(service_id, version_id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling createServerPool");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling createServerPool");
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
        'tls_ca_cert': opts['tls_ca_cert'],
        'tls_client_cert': opts['tls_client_cert'],
        'tls_client_key': opts['tls_client_key'],
        'tls_cert_hostname': opts['tls_cert_hostname'],
        'use_tls': opts['use_tls'],
        'name': opts['name'],
        'shield': opts['shield'],
        'request_condition': opts['request_condition'],
        'max_conn_default': opts['max_conn_default'],
        'connect_timeout': opts['connect_timeout'],
        'first_byte_timeout': opts['first_byte_timeout'],
        'quorum': opts['quorum'],
        'tls_ciphers': opts['tls_ciphers'],
        'tls_sni_hostname': opts['tls_sni_hostname'],
        'tls_check_cert': opts['tls_check_cert'],
        'min_tls_version': opts['min_tls_version'],
        'max_tls_version': opts['max_tls_version'],
        'healthcheck': opts['healthcheck'],
        'comment': opts['comment'],
        'type': opts['type'],
        'override_host': opts['override_host']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = PoolResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/pool', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createServerPool(service_id, version_id, opts) {
      return this.createServerPoolWithHttpInfo(service_id, version_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteServerPoolWithHttpInfo(service_id, version_id, pool_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling deleteServerPool");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling deleteServerPool");
      }
      // verify the required parameter 'pool_name' is set
      if (pool_name === undefined || pool_name === null) {
        throw new Error("Missing the required parameter 'pool_name' when calling deleteServerPool");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'pool_name': pool_name
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
        '/service/{service_id}/version/{version_id}/pool/{pool_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteServerPool(service_id, version_id, pool_name) {
      return this.deleteServerPoolWithHttpInfo(service_id, version_id, pool_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getServerPoolWithHttpInfo(service_id, version_id, pool_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling getServerPool");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling getServerPool");
      }
      // verify the required parameter 'pool_name' is set
      if (pool_name === undefined || pool_name === null) {
        throw new Error("Missing the required parameter 'pool_name' when calling getServerPool");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'pool_name': pool_name
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
      let returnType = PoolResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/pool/{pool_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getServerPool(service_id, version_id, pool_name) {
      return this.getServerPoolWithHttpInfo(service_id, version_id, pool_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listServerPoolsWithHttpInfo(service_id, version_id) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling listServerPools");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling listServerPools");
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
      let returnType = [PoolResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/pool', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listServerPools(service_id, version_id) {
      return this.listServerPoolsWithHttpInfo(service_id, version_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateServerPoolWithHttpInfo(service_id, version_id, pool_name, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling updateServerPool");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling updateServerPool");
      }
      // verify the required parameter 'pool_name' is set
      if (pool_name === undefined || pool_name === null) {
        throw new Error("Missing the required parameter 'pool_name' when calling updateServerPool");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'pool_name': pool_name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'tls_ca_cert': opts['tls_ca_cert'],
        'tls_client_cert': opts['tls_client_cert'],
        'tls_client_key': opts['tls_client_key'],
        'tls_cert_hostname': opts['tls_cert_hostname'],
        'use_tls': opts['use_tls'],
        'name': opts['name'],
        'shield': opts['shield'],
        'request_condition': opts['request_condition'],
        'max_conn_default': opts['max_conn_default'],
        'connect_timeout': opts['connect_timeout'],
        'first_byte_timeout': opts['first_byte_timeout'],
        'quorum': opts['quorum'],
        'tls_ciphers': opts['tls_ciphers'],
        'tls_sni_hostname': opts['tls_sni_hostname'],
        'tls_check_cert': opts['tls_check_cert'],
        'min_tls_version': opts['min_tls_version'],
        'max_tls_version': opts['max_tls_version'],
        'healthcheck': opts['healthcheck'],
        'comment': opts['comment'],
        'type': opts['type'],
        'override_host': opts['override_host']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = PoolResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/pool/{pool_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateServerPool(service_id, version_id, pool_name, opts) {
      return this.updateServerPoolWithHttpInfo(service_id, version_id, pool_name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
