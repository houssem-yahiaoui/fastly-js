/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineResponse200 from '../model/InlineResponse200';
import SnippetResponse from '../model/SnippetResponse';

/**
* Snippet service.
* @module api/SnippetApi
* @version 3.2.0
*/
export default class SnippetApi {

    /**
    * Constructs a new SnippetApi. 
    * @alias module:api/SnippetApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;

        if (typeof window === 'undefined' && Boolean(process.env.FASTLY_API_TOKEN)) {
            this.apiClient.authenticate(process.env.FASTLY_API_TOKEN);
        }
    }


    /**
     * Create a snippet for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - The name for the snippet.
     * @param {module:model/Number} [options.dynamic] - Sets the snippet version.
     * @param {module:model/String} [options.type] - The location in generated VCL where the snippet should be placed.
     * @param {String} [options.content] - The VCL code that specifies exactly what the snippet does.
     * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SnippetResponse} and HTTP response
     */
    createSnippetWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': options['name'],
        'dynamic': options['dynamic'],
        'type': options['type'],
        'content': options['content'],
        'priority': options['priority']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = SnippetResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/snippet', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a snippet for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} [options.name] - The name for the snippet.
     * @param {module:model/Number} [options.dynamic] - Sets the snippet version.
     * @param {module:model/String} [options.type] - The location in generated VCL where the snippet should be placed.
     * @param {String} [options.content] - The VCL code that specifies exactly what the snippet does.
     * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SnippetResponse}
     */
    createSnippet(options = {}) {
      return this.createSnippetWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Delete a specific snippet for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.snippet_name - The name for the snippet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    deleteSnippetWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'snippet_name' is set.
      if (options['snippet_name'] === undefined || options['snippet_name'] === null) {
        throw new Error("Missing the required parameter 'snippet_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'snippet_name': options['snippet_name']
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
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/snippet/{snippet_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a specific snippet for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.snippet_name - The name for the snippet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    deleteSnippet(options = {}) {
      return this.deleteSnippetWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a single snippet for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.snippet_name - The name for the snippet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SnippetResponse} and HTTP response
     */
    getSnippetWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }
      // Verify the required parameter 'snippet_name' is set.
      if (options['snippet_name'] === undefined || options['snippet_name'] === null) {
        throw new Error("Missing the required parameter 'snippet_name'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id'],
        'snippet_name': options['snippet_name']
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
      let returnType = SnippetResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/snippet/{snippet_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a single snippet for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @param {String} options.snippet_name - The name for the snippet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SnippetResponse}
     */
    getSnippet(options = {}) {
      return this.getSnippetWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get a single dynamic snippet for a particular service.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.snippet_id - Alphanumeric string identifying a VCL Snippet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SnippetResponse} and HTTP response
     */
    getSnippetDynamicWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'snippet_id' is set.
      if (options['snippet_id'] === undefined || options['snippet_id'] === null) {
        throw new Error("Missing the required parameter 'snippet_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'snippet_id': options['snippet_id']
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
      let returnType = SnippetResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/snippet/{snippet_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a single dynamic snippet for a particular service.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.snippet_id - Alphanumeric string identifying a VCL Snippet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SnippetResponse}
     */
    getSnippetDynamic(options = {}) {
      return this.getSnippetDynamicWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all snippets for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SnippetResponse>} and HTTP response
     */
    listSnippetsWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'version_id' is set.
      if (options['version_id'] === undefined || options['version_id'] === null) {
        throw new Error("Missing the required parameter 'version_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'version_id': options['version_id']
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
      let returnType = [SnippetResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/snippet', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all snippets for a particular service and version.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {Number} options.version_id - Integer identifying a service version.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SnippetResponse>}
     */
    listSnippets(options = {}) {
      return this.listSnippetsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Update a dynamic snippet for a particular service.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.snippet_id - Alphanumeric string identifying a VCL Snippet.
     * @param {String} [options.name] - The name for the snippet.
     * @param {module:model/Number} [options.dynamic] - Sets the snippet version.
     * @param {module:model/String} [options.type] - The location in generated VCL where the snippet should be placed.
     * @param {String} [options.content] - The VCL code that specifies exactly what the snippet does.
     * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SnippetResponse} and HTTP response
     */
    updateSnippetDynamicWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'service_id' is set.
      if (options['service_id'] === undefined || options['service_id'] === null) {
        throw new Error("Missing the required parameter 'service_id'.");
      }
      // Verify the required parameter 'snippet_id' is set.
      if (options['snippet_id'] === undefined || options['snippet_id'] === null) {
        throw new Error("Missing the required parameter 'snippet_id'.");
      }

      let pathParams = {
        'service_id': options['service_id'],
        'snippet_id': options['snippet_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': options['name'],
        'dynamic': options['dynamic'],
        'type': options['type'],
        'content': options['content'],
        'priority': options['priority']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = SnippetResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/snippet/{snippet_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a dynamic snippet for a particular service.
     * @param {Object} options
     * @param {String} options.service_id - Alphanumeric string identifying the service.
     * @param {String} options.snippet_id - Alphanumeric string identifying a VCL Snippet.
     * @param {String} [options.name] - The name for the snippet.
     * @param {module:model/Number} [options.dynamic] - Sets the snippet version.
     * @param {module:model/String} [options.type] - The location in generated VCL where the snippet should be placed.
     * @param {String} [options.content] - The VCL code that specifies exactly what the snippet does.
     * @param {Number} [options.priority=100] - Priority determines execution order. Lower numbers execute first.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SnippetResponse}
     */
    updateSnippetDynamic(options = {}) {
      return this.updateSnippetDynamicWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
