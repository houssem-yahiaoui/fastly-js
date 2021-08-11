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
import WafFirewall from '../model/WafFirewall';
import WafFirewallResponse from '../model/WafFirewallResponse';
import WafFirewallsResponse from '../model/WafFirewallsResponse';


export default class WafFirewallsApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createWafFirewallWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['waf_firewall'];

      let pathParams = {
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
      let returnType = WafFirewallResponse;
      return this.apiClient.callApi(
        '/waf/firewalls', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createWafFirewall(opts) {
      return this.createWafFirewallWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteWafFirewallWithHttpInfo(firewall_id, opts) {
      opts = opts || {};
      let postBody = opts['waf_firewall'];
      // verify the required parameter 'firewall_id' is set
      if (firewall_id === undefined || firewall_id === null) {
        throw new Error("Missing the required parameter 'firewall_id' when calling deleteWafFirewall");
      }

      let pathParams = {
        'firewall_id': firewall_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteWafFirewall(firewall_id, opts) {
      return this.deleteWafFirewallWithHttpInfo(firewall_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getWafFirewallWithHttpInfo(firewall_id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'firewall_id' is set
      if (firewall_id === undefined || firewall_id === null) {
        throw new Error("Missing the required parameter 'firewall_id' when calling getWafFirewall");
      }

      let pathParams = {
        'firewall_id': firewall_id
      };
      let queryParams = {
        'filter[service_version_number]': opts['filter_service_version_number'],
        'include': opts['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = WafFirewallResponse;
      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getWafFirewall(firewall_id, opts) {
      return this.getWafFirewallWithHttpInfo(firewall_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listWafFirewallsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page[number]': opts['page_number'],
        'page[size]': opts['page_size'],
        'filter[service_id]': opts['filter_service_id'],
        'filter[service_version_number]': opts['filter_service_version_number'],
        'include': opts['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = WafFirewallsResponse;
      return this.apiClient.callApi(
        '/waf/firewalls', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listWafFirewalls(opts) {
      return this.listWafFirewallsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateWafFirewallWithHttpInfo(firewall_id, opts) {
      opts = opts || {};
      let postBody = opts['waf_firewall'];
      // verify the required parameter 'firewall_id' is set
      if (firewall_id === undefined || firewall_id === null) {
        throw new Error("Missing the required parameter 'firewall_id' when calling updateWafFirewall");
      }

      let pathParams = {
        'firewall_id': firewall_id
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
      let returnType = WafFirewallResponse;
      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateWafFirewall(firewall_id, opts) {
      return this.updateWafFirewallWithHttpInfo(firewall_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
