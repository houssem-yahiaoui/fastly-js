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
import LoggingFormatVersion from '../model/LoggingFormatVersion';
import LoggingMessageType from '../model/LoggingMessageType';
import LoggingPlacement from '../model/LoggingPlacement';
import LoggingSftpResponse from '../model/LoggingSftpResponse';


export default class LoggingSftpApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createLogSftpWithHttpInfo(service_id, version_id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling createLogSftp");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling createLogSftp");
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
        'message_type': opts['message_type'],
        'timestamp_format': opts['timestamp_format'],
        'period': opts['period'],
        'gzip_level': opts['gzip_level'],
        'compression_codec': opts['compression_codec'],
        'address': opts['address'],
        'port': opts['port'],
        'password': opts['password'],
        'path': opts['path'],
        'public_key': opts['public_key'],
        'secret_key': opts['secret_key'],
        'ssh_known_hosts': opts['ssh_known_hosts'],
        'user': opts['user']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingSftpResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/sftp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createLogSftp(service_id, version_id, opts) {
      return this.createLogSftpWithHttpInfo(service_id, version_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteLogSftpWithHttpInfo(service_id, version_id, logging_sftp_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling deleteLogSftp");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling deleteLogSftp");
      }
      // verify the required parameter 'logging_sftp_name' is set
      if (logging_sftp_name === undefined || logging_sftp_name === null) {
        throw new Error("Missing the required parameter 'logging_sftp_name' when calling deleteLogSftp");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'logging_sftp_name': logging_sftp_name
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
        '/service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteLogSftp(service_id, version_id, logging_sftp_name) {
      return this.deleteLogSftpWithHttpInfo(service_id, version_id, logging_sftp_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getLogSftpWithHttpInfo(service_id, version_id, logging_sftp_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling getLogSftp");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling getLogSftp");
      }
      // verify the required parameter 'logging_sftp_name' is set
      if (logging_sftp_name === undefined || logging_sftp_name === null) {
        throw new Error("Missing the required parameter 'logging_sftp_name' when calling getLogSftp");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'logging_sftp_name': logging_sftp_name
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
      let returnType = LoggingSftpResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getLogSftp(service_id, version_id, logging_sftp_name) {
      return this.getLogSftpWithHttpInfo(service_id, version_id, logging_sftp_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listLogSftpWithHttpInfo(service_id, version_id) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling listLogSftp");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling listLogSftp");
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
      let returnType = [LoggingSftpResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/sftp', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listLogSftp(service_id, version_id) {
      return this.listLogSftpWithHttpInfo(service_id, version_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateLogSftpWithHttpInfo(service_id, version_id, logging_sftp_name, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling updateLogSftp");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling updateLogSftp");
      }
      // verify the required parameter 'logging_sftp_name' is set
      if (logging_sftp_name === undefined || logging_sftp_name === null) {
        throw new Error("Missing the required parameter 'logging_sftp_name' when calling updateLogSftp");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'logging_sftp_name': logging_sftp_name
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
        'message_type': opts['message_type'],
        'timestamp_format': opts['timestamp_format'],
        'period': opts['period'],
        'gzip_level': opts['gzip_level'],
        'compression_codec': opts['compression_codec'],
        'address': opts['address'],
        'port': opts['port'],
        'password': opts['password'],
        'path': opts['path'],
        'public_key': opts['public_key'],
        'secret_key': opts['secret_key'],
        'ssh_known_hosts': opts['ssh_known_hosts'],
        'user': opts['user']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingSftpResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateLogSftp(service_id, version_id, logging_sftp_name, opts) {
      return this.updateLogSftpWithHttpInfo(service_id, version_id, logging_sftp_name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
