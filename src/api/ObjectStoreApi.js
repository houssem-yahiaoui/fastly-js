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
import InlineResponse2002 from '../model/InlineResponse2002';
import Store from '../model/Store';
import StoreResponse from '../model/StoreResponse';

/**
* ObjectStore service.
* @module api/ObjectStoreApi
* @version 3.2.0
*/
export default class ObjectStoreApi {

    /**
    * Constructs a new ObjectStoreApi. 
    * @alias module:api/ObjectStoreApi
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
     * Create a new object store.
     * @param {Object} options
     * @param {module:model/Store} [options.store]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StoreResponse} and HTTP response
     */
    createStoreWithHttpInfo(options = {}) {
      let postBody = options['store'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StoreResponse;
      return this.apiClient.callApi(
        '/resources/stores/object', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new object store.
     * @param {Object} options
     * @param {module:model/Store} [options.store]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StoreResponse}
     */
    createStore(options = {}) {
      return this.createStoreWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * An object store must be empty before it can be deleted.  Deleting an object store that still contains keys will result in a `409` (Conflict).
     * @param {Object} options
     * @param {String} options.store_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteStoreWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'store_id' is set.
      if (options['store_id'] === undefined || options['store_id'] === null) {
        throw new Error("Missing the required parameter 'store_id'.");
      }

      let pathParams = {
        'store_id': options['store_id']
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/resources/stores/object/{store_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * An object store must be empty before it can be deleted.  Deleting an object store that still contains keys will result in a `409` (Conflict).
     * @param {Object} options
     * @param {String} options.store_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteStore(options = {}) {
      return this.deleteStoreWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get an object store by ID.
     * @param {Object} options
     * @param {String} options.store_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StoreResponse} and HTTP response
     */
    getStoreWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'store_id' is set.
      if (options['store_id'] === undefined || options['store_id'] === null) {
        throw new Error("Missing the required parameter 'store_id'.");
      }

      let pathParams = {
        'store_id': options['store_id']
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
      let returnType = StoreResponse;
      return this.apiClient.callApi(
        '/resources/stores/object/{store_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get an object store by ID.
     * @param {Object} options
     * @param {String} options.store_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StoreResponse}
     */
    getStore(options = {}) {
      return this.getStoreWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Get all stores for a given customer.
     * @param {Object} options
     * @param {String} [options.cursor]
     * @param {Number} [options.limit=100]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    getStoresWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'cursor': options['cursor'],
        'limit': options['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/resources/stores/object', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all stores for a given customer.
     * @param {Object} options
     * @param {String} [options.cursor]
     * @param {Number} [options.limit=100]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    getStores(options = {}) {
      return this.getStoresWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
