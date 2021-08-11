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
import DictionaryInfoResponse from '../model/DictionaryInfoResponse';


export default class DictionaryInfoApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    getDictionaryInfoWithHttpInfo(service_id, version_id, dictionary_id) {
      let postBody = null;
      // verify the required parameter 'service_id' is set
      if (service_id === undefined || service_id === null) {
        throw new Error("Missing the required parameter 'service_id' when calling getDictionaryInfo");
      }
      // verify the required parameter 'version_id' is set
      if (version_id === undefined || version_id === null) {
        throw new Error("Missing the required parameter 'version_id' when calling getDictionaryInfo");
      }
      // verify the required parameter 'dictionary_id' is set
      if (dictionary_id === undefined || dictionary_id === null) {
        throw new Error("Missing the required parameter 'dictionary_id' when calling getDictionaryInfo");
      }

      let pathParams = {
        'service_id': service_id,
        'version_id': version_id,
        'dictionary_id': dictionary_id
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
      let returnType = DictionaryInfoResponse;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/dictionary/{dictionary_id}/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getDictionaryInfo(service_id, version_id, dictionary_id) {
      return this.getDictionaryInfoWithHttpInfo(service_id, version_id, dictionary_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
