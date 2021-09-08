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
import LoggingCommon from './LoggingCommon';
import LoggingFormatVersion from './LoggingFormatVersion';
import LoggingPlacement from './LoggingPlacement';
import LoggingScalyrAllOf from './LoggingScalyrAllOf';

/**
 * The LoggingScalyr model module.
 * @module model/LoggingScalyr
 * @version 3.0.0-alpha1
 */
class LoggingScalyr {
    /**
     * Constructs a new <code>LoggingScalyr</code>.
     * @alias module:model/LoggingScalyr
     * @implements module:model/LoggingCommon
     * @implements module:model/LoggingScalyrAllOf
     */
    constructor() { 
        LoggingCommon.initialize(this);LoggingScalyrAllOf.initialize(this);
        LoggingScalyr.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingScalyr</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingScalyr} obj Optional instance to populate.
     * @return {module:model/LoggingScalyr} The populated <code>LoggingScalyr</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingScalyr();
            LoggingCommon.constructFromObject(data, obj);
            LoggingScalyrAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
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
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingScalyr.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * @member {module:model/LoggingFormatVersion} format_version
 */
LoggingScalyr.prototype['format_version'] = undefined;

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingScalyr.prototype['name'] = undefined;

/**
 * @member {module:model/LoggingPlacement} placement
 */
LoggingScalyr.prototype['placement'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingScalyr.prototype['response_condition'] = undefined;

/**
 * The name of the logfile within Scalyr.
 * @member {String} project_id
 * @default 'logplex'
 */
LoggingScalyr.prototype['project_id'] = 'logplex';

/**
 * The region that log data will be sent to.
 * @member {module:model/LoggingScalyr.RegionEnum} region
 * @default 'US'
 */
LoggingScalyr.prototype['region'] = 'US';

/**
 * The token to use for authentication ([https://www.scalyr.com/keys](https://www.scalyr.com/keys)).
 * @member {String} token
 */
LoggingScalyr.prototype['token'] = undefined;


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
// Implement LoggingScalyrAllOf interface:
/**
 * The name of the logfile within Scalyr.
 * @member {String} project_id
 * @default 'logplex'
 */
LoggingScalyrAllOf.prototype['project_id'] = 'logplex';
/**
 * The region that log data will be sent to.
 * @member {module:model/LoggingScalyrAllOf.RegionEnum} region
 * @default 'US'
 */
LoggingScalyrAllOf.prototype['region'] = 'US';
/**
 * The token to use for authentication ([https://www.scalyr.com/keys](https://www.scalyr.com/keys)).
 * @member {String} token
 */
LoggingScalyrAllOf.prototype['token'] = undefined;



/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
LoggingScalyr['RegionEnum'] = {

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



export default LoggingScalyr;

