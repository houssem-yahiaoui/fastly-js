/**
 * Elasticsearch
 * Fastly will upload log messages periodically to the server in the format specified in the Elasticsearch object.
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


export default class LoggingElasticsearchApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createLogElasticsearchWithHttpInfo(serviceId, versionId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling createLogElasticsearch");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling createLogElasticsearch");
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
        'tls_ca_cert': opts['tlsCaCert'],
        'tls_client_cert': opts['tlsClientCert'],
        'tls_client_key': opts['tlsClientKey'],
        'tls_hostname': opts['tlsHostname'],
        'request_max_entries': opts['requestMaxEntries'],
        'request_max_bytes': opts['requestMaxBytes'],
        'index': opts['index'],
        'url': opts['url'],
        'pipeline': opts['pipeline'],
        'user': opts['user'],
        'password': opts['password']
      };

      let authNames = ['token_engineer'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineObject;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/elasticsearch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createLogElasticsearch(serviceId, versionId, opts) {
      return this.createLogElasticsearchWithHttpInfo(serviceId, versionId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteLogElasticsearchWithHttpInfo(serviceId, versionId, loggingElasticsearchName) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling deleteLogElasticsearch");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling deleteLogElasticsearch");
      }
      // verify the required parameter 'loggingElasticsearchName' is set
      if (loggingElasticsearchName === undefined || loggingElasticsearchName === null) {
        throw new Error("Missing the required parameter 'loggingElasticsearchName' when calling deleteLogElasticsearch");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId,
        'logging_elasticsearch_name': loggingElasticsearchName
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
        '/service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteLogElasticsearch(serviceId, versionId, loggingElasticsearchName) {
      return this.deleteLogElasticsearchWithHttpInfo(serviceId, versionId, loggingElasticsearchName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getLogElasticsearchWithHttpInfo(serviceId, versionId, loggingElasticsearchName) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling getLogElasticsearch");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling getLogElasticsearch");
      }
      // verify the required parameter 'loggingElasticsearchName' is set
      if (loggingElasticsearchName === undefined || loggingElasticsearchName === null) {
        throw new Error("Missing the required parameter 'loggingElasticsearchName' when calling getLogElasticsearch");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId,
        'logging_elasticsearch_name': loggingElasticsearchName
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
        '/service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getLogElasticsearch(serviceId, versionId, loggingElasticsearchName) {
      return this.getLogElasticsearchWithHttpInfo(serviceId, versionId, loggingElasticsearchName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listLogElasticsearchWithHttpInfo(serviceId, versionId) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling listLogElasticsearch");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling listLogElasticsearch");
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
        '/service/{service_id}/version/{version_id}/logging/elasticsearch', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listLogElasticsearch(serviceId, versionId) {
      return this.listLogElasticsearchWithHttpInfo(serviceId, versionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateLogElasticsearchWithHttpInfo(serviceId, versionId, loggingElasticsearchName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling updateLogElasticsearch");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling updateLogElasticsearch");
      }
      // verify the required parameter 'loggingElasticsearchName' is set
      if (loggingElasticsearchName === undefined || loggingElasticsearchName === null) {
        throw new Error("Missing the required parameter 'loggingElasticsearchName' when calling updateLogElasticsearch");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId,
        'logging_elasticsearch_name': loggingElasticsearchName
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
        'tls_ca_cert': opts['tlsCaCert'],
        'tls_client_cert': opts['tlsClientCert'],
        'tls_client_key': opts['tlsClientKey'],
        'tls_hostname': opts['tlsHostname'],
        'request_max_entries': opts['requestMaxEntries'],
        'request_max_bytes': opts['requestMaxBytes'],
        'index': opts['index'],
        'url': opts['url'],
        'pipeline': opts['pipeline'],
        'user': opts['user'],
        'password': opts['password']
      };

      let authNames = ['token_engineer'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineObject1;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateLogElasticsearch(serviceId, versionId, loggingElasticsearchName, opts) {
      return this.updateLogElasticsearchWithHttpInfo(serviceId, versionId, loggingElasticsearchName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
