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
/**
* Enum class TypeTlsSubscription.
* @enum {}
* @readonly
*/
export default class TypeTlsSubscription {
    
        /**
         * value: "tls_subscription"
         * @const
         */
        "tls_subscription" = "tls_subscription";

    

    /**
    * Returns a <code>TypeTlsSubscription</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TypeTlsSubscription} The enum <code>TypeTlsSubscription</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

