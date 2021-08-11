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
import WafExclusion from '../model/WafExclusion';
import WafExclusionResponse from '../model/WafExclusionResponse';
import WafExclusionsResponse from '../model/WafExclusionsResponse';


export default class WafExclusionsApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createWafRuleExclusionWithHttpInfo(firewall_id, firewall_version_number, opts) {
      opts = opts || {};
      let postBody = opts['waf_exclusion'];
      // verify the required parameter 'firewall_id' is set
      if (firewall_id === undefined || firewall_id === null) {
        throw new Error("Missing the required parameter 'firewall_id' when calling createWafRuleExclusion");
      }
      // verify the required parameter 'firewall_version_number' is set
      if (firewall_version_number === undefined || firewall_version_number === null) {
        throw new Error("Missing the required parameter 'firewall_version_number' when calling createWafRuleExclusion");
      }

      let pathParams = {
        'firewall_id': firewall_id,
        'firewall_version_number': firewall_version_number
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
      let returnType = WafExclusionResponse;
      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createWafRuleExclusion(firewall_id, firewall_version_number, opts) {
      return this.createWafRuleExclusionWithHttpInfo(firewall_id, firewall_version_number, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteWafRuleExclusionWithHttpInfo(firewall_id, firewall_version_number, exclusion_number) {
      let postBody = null;
      // verify the required parameter 'firewall_id' is set
      if (firewall_id === undefined || firewall_id === null) {
        throw new Error("Missing the required parameter 'firewall_id' when calling deleteWafRuleExclusion");
      }
      // verify the required parameter 'firewall_version_number' is set
      if (firewall_version_number === undefined || firewall_version_number === null) {
        throw new Error("Missing the required parameter 'firewall_version_number' when calling deleteWafRuleExclusion");
      }
      // verify the required parameter 'exclusion_number' is set
      if (exclusion_number === undefined || exclusion_number === null) {
        throw new Error("Missing the required parameter 'exclusion_number' when calling deleteWafRuleExclusion");
      }

      let pathParams = {
        'firewall_id': firewall_id,
        'firewall_version_number': firewall_version_number,
        'exclusion_number': exclusion_number
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
        '/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteWafRuleExclusion(firewall_id, firewall_version_number, exclusion_number) {
      return this.deleteWafRuleExclusionWithHttpInfo(firewall_id, firewall_version_number, exclusion_number)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getWafRuleExclusionWithHttpInfo(firewall_id, firewall_version_number, exclusion_number) {
      let postBody = null;
      // verify the required parameter 'firewall_id' is set
      if (firewall_id === undefined || firewall_id === null) {
        throw new Error("Missing the required parameter 'firewall_id' when calling getWafRuleExclusion");
      }
      // verify the required parameter 'firewall_version_number' is set
      if (firewall_version_number === undefined || firewall_version_number === null) {
        throw new Error("Missing the required parameter 'firewall_version_number' when calling getWafRuleExclusion");
      }
      // verify the required parameter 'exclusion_number' is set
      if (exclusion_number === undefined || exclusion_number === null) {
        throw new Error("Missing the required parameter 'exclusion_number' when calling getWafRuleExclusion");
      }

      let pathParams = {
        'firewall_id': firewall_id,
        'firewall_version_number': firewall_version_number,
        'exclusion_number': exclusion_number
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
      let returnType = WafExclusionResponse;
      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getWafRuleExclusion(firewall_id, firewall_version_number, exclusion_number) {
      return this.getWafRuleExclusionWithHttpInfo(firewall_id, firewall_version_number, exclusion_number)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listWafRuleExclusionsWithHttpInfo(firewall_id, firewall_version_number, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'firewall_id' is set
      if (firewall_id === undefined || firewall_id === null) {
        throw new Error("Missing the required parameter 'firewall_id' when calling listWafRuleExclusions");
      }
      // verify the required parameter 'firewall_version_number' is set
      if (firewall_version_number === undefined || firewall_version_number === null) {
        throw new Error("Missing the required parameter 'firewall_version_number' when calling listWafRuleExclusions");
      }

      let pathParams = {
        'firewall_id': firewall_id,
        'firewall_version_number': firewall_version_number
      };
      let queryParams = {
        'filter[exclusion_type]': opts['filter_exclusion_type'],
        'filter[name]': opts['filter_name'],
        'filter[waf_rules.modsec_rule_id]': opts['filter_waf_rules_modsec_rule_id'],
        'page[number]': opts['page_number'],
        'page[size]': opts['page_size'],
        'include': opts['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = WafExclusionsResponse;
      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listWafRuleExclusions(firewall_id, firewall_version_number, opts) {
      return this.listWafRuleExclusionsWithHttpInfo(firewall_id, firewall_version_number, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateWafRuleExclusionWithHttpInfo(firewall_id, firewall_version_number, exclusion_number, opts) {
      opts = opts || {};
      let postBody = opts['waf_exclusion'];
      // verify the required parameter 'firewall_id' is set
      if (firewall_id === undefined || firewall_id === null) {
        throw new Error("Missing the required parameter 'firewall_id' when calling updateWafRuleExclusion");
      }
      // verify the required parameter 'firewall_version_number' is set
      if (firewall_version_number === undefined || firewall_version_number === null) {
        throw new Error("Missing the required parameter 'firewall_version_number' when calling updateWafRuleExclusion");
      }
      // verify the required parameter 'exclusion_number' is set
      if (exclusion_number === undefined || exclusion_number === null) {
        throw new Error("Missing the required parameter 'exclusion_number' when calling updateWafRuleExclusion");
      }

      let pathParams = {
        'firewall_id': firewall_id,
        'firewall_version_number': firewall_version_number,
        'exclusion_number': exclusion_number
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
      let returnType = WafExclusionResponse;
      return this.apiClient.callApi(
        '/waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateWafRuleExclusion(firewall_id, firewall_version_number, exclusion_number, opts) {
      return this.updateWafRuleExclusionWithHttpInfo(firewall_id, firewall_version_number, exclusion_number, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
