"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingCommon = _interopRequireDefault(require("../model/LoggingCommon"));

var _LoggingFormatVersion = _interopRequireDefault(require("../model/LoggingFormatVersion"));

var _LoggingPlacement = _interopRequireDefault(require("../model/LoggingPlacement"));

var _ServiceIdAndVersion = _interopRequireDefault(require("../model/ServiceIdAndVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LoggingHoneycomb service.
* @module api/LoggingHoneycombApi
* @version 3.0.0-alpha1
*/
var LoggingHoneycombApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LoggingHoneycombApi. 
  * @alias module:api/LoggingHoneycombApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LoggingHoneycombApi(apiClient) {
    _classCallCheck(this, LoggingHoneycombApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;

    if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
      this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
    }
  }
  /**
   * Create a Honeycomb logging object for a particular service and version.
   * @param {Object} options
   * @param {String} options.service_id
   * @param {Number} options.version_id
   * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
   * @param {module:model/LoggingFormatVersion} [options.format_version]
   * @param {String} [options.name] - The name for the real-time logging configuration.
   * @param {module:model/LoggingPlacement} [options.placement]
   * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingCommon} and HTTP response
   */


  _createClass(LoggingHoneycombApi, [{
    key: "createLogHoneycombWithHttpInfo",
    value: function createLogHoneycombWithHttpInfo() {
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
        'response_condition': options['response_condition']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _LoggingCommon["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/honeycomb', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a Honeycomb logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingCommon}
     */

  }, {
    key: "createLogHoneycomb",
    value: function createLogHoneycomb() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.createLogHoneycombWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete the Honeycomb logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_honeycomb_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteLogHoneycombWithHttpInfo",
    value: function deleteLogHoneycombWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_honeycomb_name' is set.


      if (options['logging_honeycomb_name'] === undefined || options['logging_honeycomb_name'] === null) {
        throw new Error("Missing the required parameter 'logging_honeycomb_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_honeycomb_name': options['logging_honeycomb_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete the Honeycomb logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_honeycomb_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteLogHoneycomb",
    value: function deleteLogHoneycomb() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.deleteLogHoneycombWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the details of a Honeycomb logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_honeycomb_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LoggingCommon} and HTTP response
     */

  }, {
    key: "getLogHoneycombWithHttpInfo",
    value: function getLogHoneycombWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_honeycomb_name' is set.


      if (options['logging_honeycomb_name'] === undefined || options['logging_honeycomb_name'] === null) {
        throw new Error("Missing the required parameter 'logging_honeycomb_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_honeycomb_name': options['logging_honeycomb_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LoggingCommon["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the details of a Honeycomb logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_honeycomb_name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LoggingCommon}
     */

  }, {
    key: "getLogHoneycomb",
    value: function getLogHoneycomb() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.getLogHoneycombWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all of the Honeycomb logging objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ServiceIdAndVersion>} and HTTP response
     */

  }, {
    key: "listLogHoneycombWithHttpInfo",
    value: function listLogHoneycombWithHttpInfo() {
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
      var returnType = [_ServiceIdAndVersion["default"]];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/honeycomb', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all of the Honeycomb logging objects for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ServiceIdAndVersion>}
     */

  }, {
    key: "listLogHoneycomb",
    value: function listLogHoneycomb() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.listLogHoneycombWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a Honeycomb logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_honeycomb_name
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ServiceIdAndVersion} and HTTP response
     */

  }, {
    key: "updateLogHoneycombWithHttpInfo",
    value: function updateLogHoneycombWithHttpInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postBody = null; // Verify the required parameter 'service_id' is set.

      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      } // Verify the required parameter 'version_id' is set.


      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      } // Verify the required parameter 'logging_honeycomb_name' is set.


      if (options['logging_honeycomb_name'] === undefined || options['logging_honeycomb_name'] === null) {
        throw new Error("Missing the required parameter 'logging_honeycomb_name'.");
      }

      var pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'logging_honeycomb_name': options['logging_honeycomb_name']
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'format': options['format'],
        'format_version': options['format_version'],
        'name': options['name'],
        'placement': options['placement'],
        'response_condition': options['response_condition']
      };
      var authNames = ['token'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _ServiceIdAndVersion["default"];
      return this.apiClient.callApi('/service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a Honeycomb logging object for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id
     * @param {Number} options.version_id
     * @param {String} options.logging_honeycomb_name
     * @param {String} [options.format='%h %l %u %t "%r" %&gt;s %b'] - A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
     * @param {module:model/LoggingFormatVersion} [options.format_version]
     * @param {String} [options.name] - The name for the real-time logging configuration.
     * @param {module:model/LoggingPlacement} [options.placement]
     * @param {String} [options.response_condition] - The name of an existing condition in the configured endpoint, or leave blank to always execute.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceIdAndVersion}
     */

  }, {
    key: "updateLogHoneycomb",
    value: function updateLogHoneycomb() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.updateLogHoneycombWithHttpInfo(options).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LoggingHoneycombApi;
}();

exports["default"] = LoggingHoneycombApi;