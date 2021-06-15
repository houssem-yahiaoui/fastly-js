/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit developer.fastly.com/reference/api/ 
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
import InlineObject2 from '../model/InlineObject2';
import InlineObject3 from '../model/InlineObject3';
import ResourceBillingAddress from '../model/ResourceBillingAddress';


export default class BillingAddressApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    addBillingAddrWithHttpInfo(customer_id, opts) {
      opts = opts || {};
      let postBody = opts['inline_object2'];
      // verify the required parameter 'customer_id' is set
      if (customer_id === undefined || customer_id === null) {
        throw new Error("Missing the required parameter 'customer_id' when calling addBillingAddr");
      }

      let pathParams = {
        'customer_id': customer_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
      let accepts = ['application/vnd.api+json'];
      let returnType = ResourceBillingAddress;
      return this.apiClient.callApi(
        '/customer/{customer_id}/billing_address', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    addBillingAddr(customer_id, opts) {
      return this.addBillingAddrWithHttpInfo(customer_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteBillingAddrWithHttpInfo(customer_id) {
      let postBody = null;
      // verify the required parameter 'customer_id' is set
      if (customer_id === undefined || customer_id === null) {
        throw new Error("Missing the required parameter 'customer_id' when calling deleteBillingAddr");
      }

      let pathParams = {
        'customer_id': customer_id
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
        '/customer/{customer_id}/billing_address', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteBillingAddr(customer_id) {
      return this.deleteBillingAddrWithHttpInfo(customer_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getBillingAddrWithHttpInfo(customer_id) {
      let postBody = null;
      // verify the required parameter 'customer_id' is set
      if (customer_id === undefined || customer_id === null) {
        throw new Error("Missing the required parameter 'customer_id' when calling getBillingAddr");
      }

      let pathParams = {
        'customer_id': customer_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = ResourceBillingAddress;
      return this.apiClient.callApi(
        '/customer/{customer_id}/billing_address', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getBillingAddr(customer_id) {
      return this.getBillingAddrWithHttpInfo(customer_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateBillingAddrWithHttpInfo(customer_id, opts) {
      opts = opts || {};
      let postBody = opts['inline_object3'];
      // verify the required parameter 'customer_id' is set
      if (customer_id === undefined || customer_id === null) {
        throw new Error("Missing the required parameter 'customer_id' when calling updateBillingAddr");
      }

      let pathParams = {
        'customer_id': customer_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/vnd.api+json'];
      let accepts = ['application/vnd.api+json'];
      let returnType = ResourceBillingAddress;
      return this.apiClient.callApi(
        '/customer/{customer_id}/billing_address', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateBillingAddr(customer_id, opts) {
      return this.updateBillingAddrWithHttpInfo(customer_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
