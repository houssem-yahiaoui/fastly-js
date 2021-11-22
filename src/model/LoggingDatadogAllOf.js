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
 * The LoggingDatadogAllOf model module.
 * @module model/LoggingDatadogAllOf
 * @version 3.0.0-alpha1
 */
class LoggingDatadogAllOf {
    /**
     * Constructs a new <code>LoggingDatadogAllOf</code>.
     * @alias module:model/LoggingDatadogAllOf
     */
    constructor() { 
        
        LoggingDatadogAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingDatadogAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingDatadogAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingDatadogAllOf} The populated <code>LoggingDatadogAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingDatadogAllOf();

            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The region that log data will be sent to.
 * @member {module:model/LoggingDatadogAllOf.RegionEnum} region
 * @default 'US'
 */
LoggingDatadogAllOf.prototype['region'] = undefined;

/**
 * @member {String} format
 */
LoggingDatadogAllOf.prototype['format'] = undefined;

/**
 * The API key from your Datadog account. Required.
 * @member {String} token
 */
LoggingDatadogAllOf.prototype['token'] = undefined;





/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
LoggingDatadogAllOf['RegionEnum'] = {

    /**
     * value: "US"
     * @const
     */
    "US": "US",

    /**
     * value: "EU"
     * @const
     */
    "EU": "EU"
};



export default LoggingDatadogAllOf;
