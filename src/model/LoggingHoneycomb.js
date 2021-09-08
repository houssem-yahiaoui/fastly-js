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
import LoggingCommon from './LoggingCommon.js';
import LoggingFormatVersion from './LoggingFormatVersion.js';
import LoggingHoneycombAllOf from './LoggingHoneycombAllOf.js';
import LoggingPlacement from './LoggingPlacement.js';

/**
 * The LoggingHoneycomb model module.
 * @module model/LoggingHoneycomb
 * @version 3.0.0-alpha1
 */
class LoggingHoneycomb {
    /**
     * Constructs a new <code>LoggingHoneycomb</code>.
     * @alias module:model/LoggingHoneycomb
     * @implements module:model/LoggingCommon
     * @implements module:model/LoggingHoneycombAllOf
     */
    constructor() { 
        LoggingCommon.initialize(this);LoggingHoneycombAllOf.initialize(this);
        LoggingHoneycomb.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingHoneycomb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingHoneycomb} obj Optional instance to populate.
     * @return {module:model/LoggingHoneycomb} The populated <code>LoggingHoneycomb</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingHoneycomb();
            LoggingCommon.constructFromObject(data, obj);
            LoggingHoneycombAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], Object);
            }
            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = LoggingFormatVersion.constructFromObject(data['format_version']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = LoggingPlacement.constructFromObject(data['placement']);
            }
            if (data.hasOwnProperty('response_condition')) {
                obj['response_condition'] = ApiClient.convertToType(data['response_condition'], 'String');
            }
            if (data.hasOwnProperty('dataset')) {
                obj['dataset'] = ApiClient.convertToType(data['dataset'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest.
 * @member {Object} format
 */
LoggingHoneycomb.prototype['format'] = undefined;

/**
 * @member {module:model/LoggingFormatVersion} format_version
 */
LoggingHoneycomb.prototype['format_version'] = undefined;

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingHoneycomb.prototype['name'] = undefined;

/**
 * @member {module:model/LoggingPlacement} placement
 */
LoggingHoneycomb.prototype['placement'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingHoneycomb.prototype['response_condition'] = undefined;

/**
 * The Honeycomb Dataset you want to log to.
 * @member {String} dataset
 */
LoggingHoneycomb.prototype['dataset'] = undefined;

/**
 * The Write Key from the Account page of your Honeycomb account.
 * @member {String} token
 */
LoggingHoneycomb.prototype['token'] = undefined;


// Implement LoggingCommon interface:
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingCommon.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * @member {module:model/LoggingFormatVersion} format_version
 */
LoggingCommon.prototype['format_version'] = undefined;
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingCommon.prototype['name'] = undefined;
/**
 * @member {module:model/LoggingPlacement} placement
 */
LoggingCommon.prototype['placement'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingCommon.prototype['response_condition'] = undefined;
// Implement LoggingHoneycombAllOf interface:
/**
 * The Honeycomb Dataset you want to log to.
 * @member {String} dataset
 */
LoggingHoneycombAllOf.prototype['dataset'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest.
 * @member {Object} format
 */
LoggingHoneycombAllOf.prototype['format'] = undefined;
/**
 * The Write Key from the Account page of your Honeycomb account.
 * @member {String} token
 */
LoggingHoneycombAllOf.prototype['token'] = undefined;




export default LoggingHoneycomb;

