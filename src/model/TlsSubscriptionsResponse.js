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

import ApiClient from '../ApiClient.js';
import Data from './Data.js';
import Pagination from './Pagination.js';
import PaginationLinks from './PaginationLinks.js';
import PaginationMeta from './PaginationMeta.js';
import TlsSubscriptionsResponseAllOf from './TlsSubscriptionsResponseAllOf.js';

/**
 * The TlsSubscriptionsResponse model module.
 * @module model/TlsSubscriptionsResponse
 * @version 3.0.0-alpha1
 */
class TlsSubscriptionsResponse {
    /**
     * Constructs a new <code>TlsSubscriptionsResponse</code>.
     * @alias module:model/TlsSubscriptionsResponse
     * @implements module:model/Pagination
     * @implements module:model/TlsSubscriptionsResponseAllOf
     */
    constructor() { 
        Pagination.initialize(this);TlsSubscriptionsResponseAllOf.initialize(this);
        TlsSubscriptionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TlsSubscriptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsSubscriptionsResponse} obj Optional instance to populate.
     * @return {module:model/TlsSubscriptionsResponse} The populated <code>TlsSubscriptionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsSubscriptionsResponse();
            Pagination.constructFromObject(data, obj);
            TlsSubscriptionsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Data]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PaginationLinks} links
 */
TlsSubscriptionsResponse.prototype['links'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
TlsSubscriptionsResponse.prototype['meta'] = undefined;

/**
 * @member {Array.<module:model/Data>} data
 */
TlsSubscriptionsResponse.prototype['data'] = undefined;


// Implement Pagination interface:
/**
 * @member {module:model/PaginationLinks} links
 */
Pagination.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */
Pagination.prototype['meta'] = undefined;
// Implement TlsSubscriptionsResponseAllOf interface:
/**
 * @member {Array.<module:model/Data>} data
 */
TlsSubscriptionsResponseAllOf.prototype['data'] = undefined;




export default TlsSubscriptionsResponse;

