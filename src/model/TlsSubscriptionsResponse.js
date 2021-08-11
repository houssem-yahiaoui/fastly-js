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

import ApiClient from '../ApiClient';
import Data from './Data';
import Pagination from './Pagination';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';
import TlsSubscriptionsResponseAllOf from './TlsSubscriptionsResponseAllOf';


class TlsSubscriptionsResponse {
    
    constructor() { 
        Pagination.initialize(this);TlsSubscriptionsResponseAllOf.initialize(this);
        TlsSubscriptionsResponse.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
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


TlsSubscriptionsResponse.prototype['links'] = undefined;


TlsSubscriptionsResponse.prototype['meta'] = undefined;


TlsSubscriptionsResponse.prototype['data'] = undefined;


// Implement Pagination interface:

Pagination.prototype['links'] = undefined;

Pagination.prototype['meta'] = undefined;
// Implement TlsSubscriptionsResponseAllOf interface:

TlsSubscriptionsResponseAllOf.prototype['data'] = undefined;




export default TlsSubscriptionsResponse;

