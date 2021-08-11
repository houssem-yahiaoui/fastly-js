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
import LoggingS3Response from '../model/LoggingS3Response';


export default class LoggingS3Api {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createLogAwsS3WithHttpInfo(service_id, version_id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling createLogAwsS3");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling createLogAwsS3");
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
        'access_key': opts['access_key'],
        'acl': opts['acl'],
        'bucket_name': opts['bucket_name'],
        'domain': opts['domain'],
        'iam_role': opts['iam_role'],
        'path': opts['path'],
        'public_key': opts['public_key'],
        'redundancy': opts['redundancy'],
        'secret_key': opts['secret_key'],
        'server_side_encryption_kms_key_id': opts['server_side_encryption_kms_key_id'],
        'server_side_encryption': opts['server_side_encryption']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingS3Response;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/s3', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createLogAwsS3(service_id, version_id, opts) {
      return this.createLogAwsS3WithHttpInfo(service_id, version_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteLogAwsS3WithHttpInfo(service_id, version_id, logging_s3_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling deleteLogAwsS3");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling deleteLogAwsS3");
      }
      // verify the required parameter 'logging_s3_name' is set
      if (logging_s3_name === undefined || logging_s3_name === null) {
        throw new Error("Missing the required parameter 'logging_s3_name' when calling deleteLogAwsS3");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'logging_s3_name': logging_s3_name
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
        '/service/{service_id}/version/{version_id}/logging/s3/{logging_s3_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteLogAwsS3(service_id, version_id, logging_s3_name) {
      return this.deleteLogAwsS3WithHttpInfo(service_id, version_id, logging_s3_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getLogAwsS3WithHttpInfo(service_id, version_id, logging_s3_name) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling getLogAwsS3");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling getLogAwsS3");
      }
      // verify the required parameter 'logging_s3_name' is set
      if (logging_s3_name === undefined || logging_s3_name === null) {
        throw new Error("Missing the required parameter 'logging_s3_name' when calling getLogAwsS3");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'logging_s3_name': logging_s3_name
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
      let returnType = LoggingS3Response;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/s3/{logging_s3_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getLogAwsS3(service_id, version_id, logging_s3_name) {
      return this.getLogAwsS3WithHttpInfo(service_id, version_id, logging_s3_name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listLogAwsS3WithHttpInfo(service_id, version_id) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling listLogAwsS3");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling listLogAwsS3");
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
      let returnType = [LoggingS3Response];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/s3', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listLogAwsS3(service_id, version_id) {
      return this.listLogAwsS3WithHttpInfo(service_id, version_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateLogAwsS3WithHttpInfo(service_id, version_id, logging_s3_name, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling updateLogAwsS3");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling updateLogAwsS3");
      }
      // verify the required parameter 'logging_s3_name' is set
      if (logging_s3_name === undefined || logging_s3_name === null) {
        throw new Error("Missing the required parameter 'logging_s3_name' when calling updateLogAwsS3");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'logging_s3_name': logging_s3_name
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
        'access_key': opts['access_key'],
        'acl': opts['acl'],
        'bucket_name': opts['bucket_name'],
        'domain': opts['domain'],
        'iam_role': opts['iam_role'],
        'path': opts['path'],
        'public_key': opts['public_key'],
        'redundancy': opts['redundancy'],
        'secret_key': opts['secret_key'],
        'server_side_encryption_kms_key_id': opts['server_side_encryption_kms_key_id'],
        'server_side_encryption': opts['server_side_encryption']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = LoggingS3Response;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/logging/s3/{logging_s3_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateLogAwsS3(service_id, version_id, logging_s3_name, opts) {
      return this.updateLogAwsS3WithHttpInfo(service_id, version_id, logging_s3_name, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
