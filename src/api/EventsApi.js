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
import EventResponse from '../model/EventResponse';
import EventsResponse from '../model/EventsResponse';

/**
* Events service.
* @module api/EventsApi
* @version 4.1.1
*/
export default class EventsApi {

    /**
    * Constructs a new EventsApi. 
    * @alias module:api/EventsApi
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
     * Get a specific event.
     * @param {Object} options
     * @param {String} options.event_id - Alphanumeric string identifying an event.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EventResponse} and HTTP response
     */
    getEventWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'event_id' is set.
      if (options['event_id'] === undefined || options['event_id'] === null) {
        throw new Error("Missing the required parameter 'event_id'.");
      }

      let pathParams = {
        'event_id': options['event_id']
      };
      let pathParamsAllowReserved = {
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
      let returnType = EventResponse;
      return this.apiClient.callApi(
        '/events/{event_id}', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a specific event.
     * @param {Object} options
     * @param {String} options.event_id - Alphanumeric string identifying an event.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EventResponse}
     */
    getEvent(options = {}) {
      return this.getEventWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all events for a particular customer. Events can be filtered by user, customer and event type. Events can be sorted by date.
     * @param {Object} options
     * @param {String} [options.filter_customer_id] - Limit the results returned to a specific customer.
     * @param {String} [options.filter_event_type] - Limit the returned events to a specific `event_type`.
     * @param {String} [options.filter_service_id] - Limit the results returned to a specific service.
     * @param {String} [options.filter_user_id] - Limit the results returned to a specific user.
     * @param {String} [options.filter_token_id] - Limit the returned events to a specific token.
     * @param {String} [options.filter_created_at] - Limit the returned events to a specific time frame. Accepts sub-parameters: lt, lte, gt, gte (e.g., filter[created_at][gt]=2022-01-12). 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EventsResponse} and HTTP response
     */
    listEventsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let pathParamsAllowReserved = {
      };
      let queryParams = {
        'filter[customer_id]': options['filter_customer_id'],
        'filter[event_type]': options['filter_event_type'],
        'filter[service_id]': options['filter_service_id'],
        'filter[user_id]': options['filter_user_id'],
        'filter[token_id]': options['filter_token_id'],
        'filter[created_at]': options['filter_created_at'],
        'page[number]': options['page_number'],
        'page[size]': options['page_size'],
        'sort': options['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['token'];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = EventsResponse;
      return this.apiClient.callApi(
        '/events', 'GET',
        pathParams, pathParamsAllowReserved, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all events for a particular customer. Events can be filtered by user, customer and event type. Events can be sorted by date.
     * @param {Object} options
     * @param {String} [options.filter_customer_id] - Limit the results returned to a specific customer.
     * @param {String} [options.filter_event_type] - Limit the returned events to a specific `event_type`.
     * @param {String} [options.filter_service_id] - Limit the results returned to a specific service.
     * @param {String} [options.filter_user_id] - Limit the results returned to a specific user.
     * @param {String} [options.filter_token_id] - Limit the returned events to a specific token.
     * @param {String} [options.filter_created_at] - Limit the returned events to a specific time frame. Accepts sub-parameters: lt, lte, gt, gte (e.g., filter[created_at][gt]=2022-01-12). 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EventsResponse}
     */
    listEvents(options = {}) {
      return this.listEventsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
