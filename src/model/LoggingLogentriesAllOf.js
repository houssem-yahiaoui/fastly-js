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

import ApiClient from '../ApiClient';
import LoggingUseTls from './LoggingUseTls';

/**
 * The LoggingLogentriesAllOf model module.
 * @module model/LoggingLogentriesAllOf
 * @version 4.1.1
 */
class LoggingLogentriesAllOf {
    /**
     * Constructs a new <code>LoggingLogentriesAllOf</code>.
     * @alias module:model/LoggingLogentriesAllOf
     */
    constructor() { 
        
        LoggingLogentriesAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingLogentriesAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingLogentriesAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingLogentriesAllOf} The populated <code>LoggingLogentriesAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingLogentriesAllOf();

            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('use_tls')) {
                obj['use_tls'] = LoggingUseTls.constructFromObject(data['use_tls']);
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The port number.
 * @member {Number} port
 * @default 20000
 */
LoggingLogentriesAllOf.prototype['port'] = 20000;

/**
 * Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)).
 * @member {String} token
 */
LoggingLogentriesAllOf.prototype['token'] = undefined;

/**
 * @member {module:model/LoggingUseTls} use_tls
 */
LoggingLogentriesAllOf.prototype['use_tls'] = undefined;

/**
 * The region to which to stream logs.
 * @member {module:model/LoggingLogentriesAllOf.RegionEnum} region
 */
LoggingLogentriesAllOf.prototype['region'] = undefined;





/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
LoggingLogentriesAllOf['RegionEnum'] = {

    /**
     * value: "US"
     * @const
     */
    "US": "US",

    /**
     * value: "US-2"
     * @const
     */
    "US-2": "US-2",

    /**
     * value: "US-3"
     * @const
     */
    "US-3": "US-3",

    /**
     * value: "EU"
     * @const
     */
    "EU": "EU",

    /**
     * value: "CA"
     * @const
     */
    "CA": "CA",

    /**
     * value: "AU"
     * @const
     */
    "AU": "AU",

    /**
     * value: "AP"
     * @const
     */
    "AP": "AP"
};



export default LoggingLogentriesAllOf;

