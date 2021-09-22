"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingCompressionCodec = _interopRequireDefault(require("../model/LoggingCompressionCodec"));

var _LoggingFormatVersion = _interopRequireDefault(require("../model/LoggingFormatVersion"));

var _LoggingMessageType = _interopRequireDefault(require("../model/LoggingMessageType"));

var _LoggingPlacement = _interopRequireDefault(require("../model/LoggingPlacement"));

var _LoggingSftpResponse = _interopRequireDefault(require("../model/LoggingSftpResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LoggingSftp service.
* @module api/LoggingSftpApi
* @version 3.0.0-alpha1
*/
var LoggingSftpApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LoggingSftpApi. 
  * @alias module:api/LoggingSftpApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoggingSftpApi(apiClient) {
    _classCallCheck(this, LoggingSftpApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a SFTP for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {Number} options.version_id
   * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
   * @param {module:model/LoggingFormatVersion} [options.format_version]
   * @param {String} [options.name] - The name for the real-time logging configuration.
   * @param {module:model/LoggingPlacement} [options.placement]
   * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
   * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
   * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
   * @param {module:model/LoggingMessageType} [options.message_type]
   * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
   * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
   * @param {String} [options.address] - A hostname or IPv4 address.
   * @param {Object} [options.port] - The port number.
   * @param {String} [options.password] - The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
   * @param {String} [options.path='null'] - The path to upload logs to.
   * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
   * @param {String} [options.secret_key='null'] - The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
   * @param {String} [options.ssh_known_hosts] - A list of host keys for all hosts we can connect to over SFTP.
   * @param {String} [options.user] - The username for the server.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingSftpResponse} and HTTP response
   */


  _createClass(LoggingSftpApi, [{
    key: "createLogSftpWithHttpInfo",
    value: function createLogSftpWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'format': options['format'],
        'format_version': options['format_version'],
        'name': options['name'],
        'placement': options['placement'],
        'response_condition': options['response_condition'],
        'compression_codec': options['compression_codec'],
        'gzip_level': options['gzip_level'],
        'message_type': options['message_type'],
        'period': options['period'],
        'timestamp_format': options['timestamp_format'],
        'address': options['address'],
        'port': options['port'],
        'password': options['password'],
        'path': options['path'],
        'public_key': options['public_key'],
        'secret_key': options['secret_key'],
        'ssh_known_hosts': options['ssh_known_hosts'],
        'user': options['user']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingSftpResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/sftp', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a SFTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {String} [options.address] - A hostname or IPv4 address.
     * @param {Object} [options.port] - The port number.
     * @param {String} [options.password] - The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.secret_key='null'] - The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     * @param {String} [options.ssh_known_hosts] - A list of host keys for all hosts we can connect to over SFTP.
     * @param {String} [options.user] - The username for the server.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingSftpResponse}
     */

  }, {
    key: "createLogSftp",
    value: function createLogSftp() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createLogSftpWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete the SFTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_sftp_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteLogSftpWithHttpInfo",
    value: function deleteLogSftpWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_sftp_name' is set.


      if (options['logging_sftp_name'] === undefined || options['logging_sftp_name'] === null) {
        throw new Error("Missing the required parameter 'logging_sftp_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_sftp_name': options['logging_sftp_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete the SFTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_sftp_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteLogSftp",
    value: function deleteLogSftp() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteLogSftpWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the SFTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_sftp_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingSftpResponse} and HTTP response
     */

  }, {
    key: "getLogSftpWithHttpInfo",
    value: function getLogSftpWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_sftp_name' is set.


      if (options['logging_sftp_name'] === undefined || options['logging_sftp_name'] === null) {
        throw new Error("Missing the required parameter 'logging_sftp_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_sftp_name': options['logging_sftp_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoggingSftpResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the SFTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_sftp_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingSftpResponse}
     */

  }, {
    key: "getLogSftp",
    value: function getLogSftp() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getLogSftpWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all of the SFTPs for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoggingSftpResponse>} and HTTP response
     */

  }, {
    key: "listLogSftpWithHttpInfo",
    value: function listLogSftpWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_LoggingSftpResponse["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/sftp', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all of the SFTPs for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoggingSftpResponse>}
     */

  }, {
    key: "listLogSftp",
    value: function listLogSftp() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listLogSftpWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update the SFTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_sftp_name
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {String} [options.address] - A hostname or IPv4 address.
     * @param {Object} [options.port] - The port number.
     * @param {String} [options.password] - The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.secret_key='null'] - The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     * @param {String} [options.ssh_known_hosts] - A list of host keys for all hosts we can connect to over SFTP.
     * @param {String} [options.user] - The username for the server.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingSftpResponse} and HTTP response
     */

  }, {
    key: "updateLogSftpWithHttpInfo",
    value: function updateLogSftpWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_sftp_name' is set.


      if (options['logging_sftp_name'] === undefined || options['logging_sftp_name'] === null) {
        throw new Error("Missing the required parameter 'logging_sftp_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_sftp_name': options['logging_sftp_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'format': options['format'],
        'format_version': options['format_version'],
        'name': options['name'],
        'placement': options['placement'],
        'response_condition': options['response_condition'],
        'compression_codec': options['compression_codec'],
        'gzip_level': options['gzip_level'],
        'message_type': options['message_type'],
        'period': options['period'],
        'timestamp_format': options['timestamp_format'],
        'address': options['address'],
        'port': options['port'],
        'password': options['password'],
        'path': options['path'],
        'public_key': options['public_key'],
        'secret_key': options['secret_key'],
        'ssh_known_hosts': options['ssh_known_hosts'],
        'user': options['user']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingSftpResponse["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the SFTP for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_sftp_name
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @param {module:model/LoggingCompressionCodec} [options.compression_codec]
     * @param {Number} [options.gzip_level=0] - What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
     * @param {module:model/LoggingMessageType} [options.message_type]
     * @param {Number} [options.period=3600] - How frequently log files are finalized so they can be available for reading (in seconds).
     * @param {String} [options.timestamp_format] - Date and time in ISO 8601 format.
     * @param {String} [options.address] - A hostname or IPv4 address.
     * @param {Object} [options.port] - The port number.
     * @param {String} [options.password] - The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     * @param {String} [options.path='null'] - The path to upload logs to.
     * @param {String} [options.public_key='null'] - A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
     * @param {String} [options.secret_key='null'] - The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
     * @param {String} [options.ssh_known_hosts] - A list of host keys for all hosts we can connect to over SFTP.
     * @param {String} [options.user] - The username for the server.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingSftpResponse}
     */

  }, {
    key: "updateLogSftp",
    value: function updateLogSftp() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateLogSftpWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoggingSftpApi;
}();

exports["default"] = LoggingSftpApi;