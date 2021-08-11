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
import TlsSubscription from '../model/TlsSubscription';
import TlsSubscriptionResponse from '../model/TlsSubscriptionResponse';
import TlsSubscriptionsResponse from '../model/TlsSubscriptionsResponse';


export default class TlsSubscriptionsApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createTlsSubWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['tls_subscription'];

      let pathParams = {
      };
      let queryParams = {
        'force': opts['force']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
      let accepts = ['application/vnd.api+json'];
      let returnType = TlsSubscriptionResponse;
      return this.apiClient.callApi(
        '/tls/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createTlsSub(opts) {
      return this.createTlsSubWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteTlsSubWithHttpInfo(tls_subscription_id) {
      let postBody = null;
      // verify the required parameter 'tls_subscription_id' is set
      if (tls_subscription_id === undefined || tls_subscription_id === null) {
        throw new Error("Missing the required parameter 'tls_subscription_id' when calling deleteTlsSub");
      }

      let pathParams = {
        'tls_subscription_id': tls_subscription_id
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
        '/tls/subscriptions/{tls_subscription_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteTlsSub(tls_subscription_id) {
      return this.deleteTlsSubWithHttpInfo(tls_subscription_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getTlsSubWithHttpInfo(tls_subscription_id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'tls_subscription_id' is set
      if (tls_subscription_id === undefined || tls_subscription_id === null) {
        throw new Error("Missing the required parameter 'tls_subscription_id' when calling getTlsSub");
      }

      let pathParams = {
        'tls_subscription_id': tls_subscription_id
      };
      let queryParams = {
        'include': opts['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = TlsSubscriptionResponse;
      return this.apiClient.callApi(
        '/tls/subscriptions/{tls_subscription_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getTlsSub(tls_subscription_id, opts) {
      return this.getTlsSubWithHttpInfo(tls_subscription_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listTlsSubsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter[state]': opts['filter_state'],
        'filter[tls_domains.id]': opts['filter_tls_domains_id'],
        'include': opts['include'],
        'page[number]': opts['page_number'],
        'page[size]': opts['page_size'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = TlsSubscriptionsResponse;
      return this.apiClient.callApi(
        '/tls/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listTlsSubs(opts) {
      return this.listTlsSubsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    patchTlsSubWithHttpInfo(tls_subscription_id, opts) {
      opts = opts || {};
      let postBody = opts['tls_subscription'];
      // verify the required parameter 'tls_subscription_id' is set
      if (tls_subscription_id === undefined || tls_subscription_id === null) {
        throw new Error("Missing the required parameter 'tls_subscription_id' when calling patchTlsSub");
      }

      let pathParams = {
        'tls_subscription_id': tls_subscription_id
      };
      let queryParams = {
        'force': opts['force']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
      let accepts = ['application/vnd.api+json'];
      let returnType = TlsSubscriptionResponse;
      return this.apiClient.callApi(
        '/tls/subscriptions/{tls_subscription_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    patchTlsSub(tls_subscription_id, opts) {
      return this.patchTlsSubWithHttpInfo(tls_subscription_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
