/**
 * Condition
 * Conditions are used to control whether logic defined in configured VCL objects is applied for a particular client request. A condition contains a VCL conditional expression that evaluates to either true or false and is used to determine whether the condition is met. The type of the condition determines where it is executed and the VCL variables that can be evaluated as part of the conditional logic.
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
import InlineObject from '../model/InlineObject';
import InlineObject1 from '../model/InlineObject1';
import InlineResponse200 from '../model/InlineResponse200';


export default class VclServicesConditionApi {

    
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    createConditionWithHttpInfo(serviceId, versionId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling createCondition");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling createCondition");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'service_id': opts['serviceId2'],
        'version': opts['version'],
        'comment': opts['comment'],
        'name': opts['name'],
        'priority': opts['priority'],
        'statement': opts['statement'],
        'type': opts['type']
      };

      let authNames = ['token_engineer'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineObject;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/condition', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    createCondition(serviceId, versionId, opts) {
      return this.createConditionWithHttpInfo(serviceId, versionId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    deleteConditionWithHttpInfo(serviceId, versionId, conditionName) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling deleteCondition");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling deleteCondition");
      }
      // verify the required parameter 'conditionName' is set
      if (conditionName === undefined || conditionName === null) {
        throw new Error("Missing the required parameter 'conditionName' when calling deleteCondition");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId,
        'condition_name': conditionName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token_engineer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/condition/{condition_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    deleteCondition(serviceId, versionId, conditionName) {
      return this.deleteConditionWithHttpInfo(serviceId, versionId, conditionName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    getConditionWithHttpInfo(serviceId, versionId, conditionName) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling getCondition");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling getCondition");
      }
      // verify the required parameter 'conditionName' is set
      if (conditionName === undefined || conditionName === null) {
        throw new Error("Missing the required parameter 'conditionName' when calling getCondition");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId,
        'condition_name': conditionName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token_engineer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineObject;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/condition/{condition_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    getCondition(serviceId, versionId, conditionName) {
      return this.getConditionWithHttpInfo(serviceId, versionId, conditionName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    listConditionsWithHttpInfo(serviceId, versionId) {
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling listConditions");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling listConditions");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token_engineer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/condition', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    listConditions(serviceId, versionId) {
      return this.listConditionsWithHttpInfo(serviceId, versionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
    updateConditionWithHttpInfo(serviceId, versionId, conditionName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'serviceId' is set
      if (serviceId === undefined || serviceId === null) {
        throw new Error("Missing the required parameter 'serviceId' when calling updateCondition");
      }
      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw new Error("Missing the required parameter 'versionId' when calling updateCondition");
      }
      // verify the required parameter 'conditionName' is set
      if (conditionName === undefined || conditionName === null) {
        throw new Error("Missing the required parameter 'conditionName' when calling updateCondition");
      }

      let pathParams = {
        'service_id': serviceId,
        'version_id': versionId,
        'condition_name': conditionName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'service_id': opts['serviceId2'],
        'version': opts['version'],
        'comment': opts['comment'],
        'name': opts['name'],
        'priority': opts['priority'],
        'statement': opts['statement'],
        'type': opts['type']
      };

      let authNames = ['token_engineer'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineObject1;
      return this.apiClient.callApi(
        '/service/{service_id}/version/{version_id}/condition/{condition_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }
    updateCondition(serviceId, versionId, conditionName, opts) {
      return this.updateConditionWithHttpInfo(serviceId, versionId, conditionName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
