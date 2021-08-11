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
import DictionaryItemResponse from '../model/DictionaryItemResponse';
import InlineObject from '../model/InlineObject';


export default class DictionaryItemApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    bulkUpdateDictionaryItemWithHttpInfo(service_id, dictionary_id, opts) {
      opts = opts || {};
      let postBody = opts['inline_object'];
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling bulkUpdateDictionaryItem");
      }
      // verify the required parameter 'dictionary_id' is set
      if (dictionary_id === undefined || dictionary_id === null) {
        throw new Error("Missing the required parameter 'dictionary_id' when calling bulkUpdateDictionaryItem");
      }

      let pathParams = {
        'service_id': service_id,
        'dictionary_id': dictionary_id
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/service/{service_id}/dictionary/{dictionary_id}/items', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    bulkUpdateDictionaryItem(service_id, dictionary_id, opts) {
      return this.bulkUpdateDictionaryItemWithHttpInfo(service_id, dictionary_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    createDictionaryItemWithHttpInfo(service_id, dictionary_id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling createDictionaryItem");
      }
      // verify the required parameter 'dictionary_id' is set
      if (dictionary_id === undefined || dictionary_id === null) {
        throw new Error("Missing the required parameter 'dictionary_id' when calling createDictionaryItem");
      }

      let pathParams = {
        'service_id': service_id,
        'dictionary_id': dictionary_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'item_key': opts['item_key'],
        'item_value': opts['item_value']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = DictionaryItemResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/dictionary/{dictionary_id}/item', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createDictionaryItem(service_id, dictionary_id, opts) {
      return this.createDictionaryItemWithHttpInfo(service_id, dictionary_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteDictionaryItemWithHttpInfo(service_id, dictionary_id, dictionary_item_key) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling deleteDictionaryItem");
      }
      // verify the required parameter 'dictionary_id' is set
      if (dictionary_id === undefined || dictionary_id === null) {
        throw new Error("Missing the required parameter 'dictionary_id' when calling deleteDictionaryItem");
      }
      // verify the required parameter 'dictionary_item_key' is set
      if (dictionary_item_key === undefined || dictionary_item_key === null) {
        throw new Error("Missing the required parameter 'dictionary_item_key' when calling deleteDictionaryItem");
      }

      let pathParams = {
        'service_id': service_id,
        'dictionary_id': dictionary_id,
        'dictionary_item_key': dictionary_item_key
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
        '/service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteDictionaryItem(service_id, dictionary_id, dictionary_item_key) {
      return this.deleteDictionaryItemWithHttpInfo(service_id, dictionary_id, dictionary_item_key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getDictionaryItemWithHttpInfo(service_id, dictionary_id, dictionary_item_key) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling getDictionaryItem");
      }
      // verify the required parameter 'dictionary_id' is set
      if (dictionary_id === undefined || dictionary_id === null) {
        throw new Error("Missing the required parameter 'dictionary_id' when calling getDictionaryItem");
      }
      // verify the required parameter 'dictionary_item_key' is set
      if (dictionary_item_key === undefined || dictionary_item_key === null) {
        throw new Error("Missing the required parameter 'dictionary_item_key' when calling getDictionaryItem");
      }

      let pathParams = {
        'service_id': service_id,
        'dictionary_id': dictionary_id,
        'dictionary_item_key': dictionary_item_key
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
      let returnType = DictionaryItemResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getDictionaryItem(service_id, dictionary_id, dictionary_item_key) {
      return this.getDictionaryItemWithHttpInfo(service_id, dictionary_id, dictionary_item_key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listDictionaryItemsWithHttpInfo(service_id, dictionary_id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling listDictionaryItems");
      }
      // verify the required parameter 'dictionary_id' is set
      if (dictionary_id === undefined || dictionary_id === null) {
        throw new Error("Missing the required parameter 'dictionary_id' when calling listDictionaryItems");
      }

      let pathParams = {
        'service_id': service_id,
        'dictionary_id': dictionary_id
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['per_page'],
        'sort': opts['sort'],
        'direction': opts['direction']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DictionaryItemResponse];
      return this.apiClient.callApi(
        '/service/{service_id}/dictionary/{dictionary_id}/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listDictionaryItems(service_id, dictionary_id, opts) {
      return this.listDictionaryItemsWithHttpInfo(service_id, dictionary_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateDictionaryItemWithHttpInfo(service_id, dictionary_id, dictionary_item_key, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling updateDictionaryItem");
      }
      // verify the required parameter 'dictionary_id' is set
      if (dictionary_id === undefined || dictionary_id === null) {
        throw new Error("Missing the required parameter 'dictionary_id' when calling updateDictionaryItem");
      }
      // verify the required parameter 'dictionary_item_key' is set
      if (dictionary_item_key === undefined || dictionary_item_key === null) {
        throw new Error("Missing the required parameter 'dictionary_item_key' when calling updateDictionaryItem");
      }

      let pathParams = {
        'service_id': service_id,
        'dictionary_id': dictionary_id,
        'dictionary_item_key': dictionary_item_key
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'item_key': opts['item_key'],
        'item_value': opts['item_value']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = DictionaryItemResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateDictionaryItem(service_id, dictionary_id, dictionary_item_key, opts) {
      return this.updateDictionaryItemWithHttpInfo(service_id, dictionary_id, dictionary_item_key, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    upsertDictionaryItemWithHttpInfo(service_id, dictionary_id, dictionary_item_key, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling upsertDictionaryItem");
      }
      // verify the required parameter 'dictionary_id' is set
      if (dictionary_id === undefined || dictionary_id === null) {
        throw new Error("Missing the required parameter 'dictionary_id' when calling upsertDictionaryItem");
      }
      // verify the required parameter 'dictionary_item_key' is set
      if (dictionary_item_key === undefined || dictionary_item_key === null) {
        throw new Error("Missing the required parameter 'dictionary_item_key' when calling upsertDictionaryItem");
      }

      let pathParams = {
        'service_id': service_id,
        'dictionary_id': dictionary_id,
        'dictionary_item_key': dictionary_item_key
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'item_key': opts['item_key'],
        'item_value': opts['item_value']
      };

      let authNames = ['token'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = DictionaryItemResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    upsertDictionaryItem(service_id, dictionary_id, dictionary_item_key, opts) {
      return this.upsertDictionaryItemWithHttpInfo(service_id, dictionary_id, dictionary_item_key, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
