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

/**
 * The BillingAddressDataAttributes model module.
 * @module model/BillingAddressDataAttributes
 * @version 3.0.0-alpha1
 */
class BillingAddressDataAttributes {
    /**
     * Constructs a new <code>BillingAddressDataAttributes</code>.
     * @alias module:model/BillingAddressDataAttributes
     */
    constructor() { 
        
        BillingAddressDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingAddressDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingAddressDataAttributes} obj Optional instance to populate.
     * @return {module:model/BillingAddressDataAttributes} The populated <code>BillingAddressDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingAddressDataAttributes();

            if (data.hasOwnProperty('address_1')) {
                obj['address_1'] = ApiClient.convertToType(data['address_1'], 'String');
            }
            if (data.hasOwnProperty('address_2')) {
                obj['address_2'] = ApiClient.convertToType(data['address_2'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('locality')) {
                obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The first address line.
 * @member {String} address_1
 */
BillingAddressDataAttributes.prototype['address_1'] = undefined;

/**
 * The second address line.
 * @member {String} address_2
 */
BillingAddressDataAttributes.prototype['address_2'] = undefined;

/**
 * The city name.
 * @member {String} city
 */
BillingAddressDataAttributes.prototype['city'] = undefined;

/**
 * ISO 3166-1 two-letter country code.
 * @member {String} country
 */
BillingAddressDataAttributes.prototype['country'] = undefined;

/**
 * Other locality.
 * @member {String} locality
 */
BillingAddressDataAttributes.prototype['locality'] = undefined;

/**
 * Postal code (ZIP code for US addresses).
 * @member {String} postal_code
 */
BillingAddressDataAttributes.prototype['postal_code'] = undefined;

/**
 * The state or province name.
 * @member {String} state
 */
BillingAddressDataAttributes.prototype['state'] = undefined;






export default BillingAddressDataAttributes;
