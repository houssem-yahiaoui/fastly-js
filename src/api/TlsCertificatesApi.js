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
import TlsCertificate from '../model/TlsCertificate';
import TlsCertificateResponse from '../model/TlsCertificateResponse';
import TlsCertificatesResponse from '../model/TlsCertificatesResponse';

/**
* TlsCertificates service.
* @module api/TlsCertificatesApi
* @version 3.0.0-beta3
*/
export default class TlsCertificatesApi {

    /**
    * Constructs a new TlsCertificatesApi. 
    * @alias module:api/TlsCertificatesApi
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
     * Create a TLS certificate.
     * @param {Object} options
     * @param {module:model/TlsCertificate} [options.tls_certificate]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    createTlsCertWithHttpInfo(options = {}) {
      let postBody = options['tls_certificate'];

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
      let returnType = Object;
      return this.apiClient.callApi(
        '/tls/certificates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a TLS certificate.
     * @param {Object} options
     * @param {module:model/TlsCertificate} [options.tls_certificate]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    createTlsCert(options = {}) {
      return this.createTlsCertWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Destroy a TLS certificate. TLS certificates already enabled for a domain cannot be destroyed.
     * @param {Object} options
     * @param {String} options.tls_certificate_id - Alphanumeric string identifying a TLS certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTlsCertWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'tls_certificate_id' is set.
      if (options['tls_certificate_id'] === undefined || options['tls_certificate_id'] === null) {
        throw new Error("Missing the required parameter 'tls_certificate_id'.");
      }

      let pathParams = {
        'tls_certificate_id': options['tls_certificate_id']
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
        '/tls/certificates/{tls_certificate_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Destroy a TLS certificate. TLS certificates already enabled for a domain cannot be destroyed.
     * @param {Object} options
     * @param {String} options.tls_certificate_id - Alphanumeric string identifying a TLS certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTlsCert(options = {}) {
      return this.deleteTlsCertWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Show a TLS certificate.
     * @param {Object} options
     * @param {String} options.tls_certificate_id - Alphanumeric string identifying a TLS certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsCertificateResponse} and HTTP response
     */
    getTlsCertWithHttpInfo(options = {}) {
      let postBody = null;
      // Verify the required parameter 'tls_certificate_id' is set.
      if (options['tls_certificate_id'] === undefined || options['tls_certificate_id'] === null) {
        throw new Error("Missing the required parameter 'tls_certificate_id'.");
      }

      let pathParams = {
        'tls_certificate_id': options['tls_certificate_id']
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
      let returnType = TlsCertificateResponse;
      return this.apiClient.callApi(
        '/tls/certificates/{tls_certificate_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Show a TLS certificate.
     * @param {Object} options
     * @param {String} options.tls_certificate_id - Alphanumeric string identifying a TLS certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsCertificateResponse}
     */
    getTlsCert(options = {}) {
      return this.getTlsCertWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * List all TLS certificates.
     * @param {Object} options
     * @param {String} [options.filter_not_after] - Limit the returned certificates to those that expire prior to the specified date in UTC. Accepts parameters: lte (e.g., filter[not_after][lte]=2020-05-05). 
     * @param {String} [options.filter_tls_domains_id] - Limit the returned certificates to those that include the specific domain.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_activations`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsCertificatesResponse} and HTTP response
     */
    listTlsCertsWithHttpInfo(options = {}) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter[not_after]': options['filter_not_after'],
        'filter[tls_domains.id]': options['filter_tls_domains_id'],
        'include': options['include'],
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
      let returnType = TlsCertificatesResponse;
      return this.apiClient.callApi(
        '/tls/certificates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all TLS certificates.
     * @param {Object} options
     * @param {String} [options.filter_not_after] - Limit the returned certificates to those that expire prior to the specified date in UTC. Accepts parameters: lte (e.g., filter[not_after][lte]=2020-05-05). 
     * @param {String} [options.filter_tls_domains_id] - Limit the returned certificates to those that include the specific domain.
     * @param {String} [options.include] - Include related objects. Optional, comma-separated values. Permitted values: `tls_activations`. 
     * @param {Number} [options.page_number] - Current page.
     * @param {Number} [options.page_size=20] - Number of records per page.
     * @param {module:model/String} [options.sort='created_at'] - The order in which to list the results by creation date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsCertificatesResponse}
     */
    listTlsCerts(options = {}) {
      return this.listTlsCertsWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

    /**
     * Replace a TLS certificate with a newly reissued TLS certificate, or update a TLS certificate's name. If replacing a TLS certificate, the new TLS certificate must contain all SAN entries as the current TLS certificate. It must either have an exact matching list or contain a superset.
     * @param {Object} options
     * @param {String} options.tls_certificate_id - Alphanumeric string identifying a TLS certificate.
     * @param {module:model/TlsCertificate} [options.tls_certificate]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TlsCertificateResponse} and HTTP response
     */
    updateTlsCertWithHttpInfo(options = {}) {
      let postBody = options['tls_certificate'];
      // Verify the required parameter 'tls_certificate_id' is set.
      if (options['tls_certificate_id'] === undefined || options['tls_certificate_id'] === null) {
        throw new Error("Missing the required parameter 'tls_certificate_id'.");
      }

      let pathParams = {
        'tls_certificate_id': options['tls_certificate_id']
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
      let returnType = TlsCertificateResponse;
      return this.apiClient.callApi(
        '/tls/certificates/{tls_certificate_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Replace a TLS certificate with a newly reissued TLS certificate, or update a TLS certificate's name. If replacing a TLS certificate, the new TLS certificate must contain all SAN entries as the current TLS certificate. It must either have an exact matching list or contain a superset.
     * @param {Object} options
     * @param {String} options.tls_certificate_id - Alphanumeric string identifying a TLS certificate.
     * @param {module:model/TlsCertificate} [options.tls_certificate]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TlsCertificateResponse}
     */
    updateTlsCert(options = {}) {
      return this.updateTlsCertWithHttpInfo(options)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
