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
import LoggingPapertrail from './LoggingPapertrail';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The LoggingPapertrailResponse model module.
 * @module model/LoggingPapertrailResponse
 * @version 3.2.0
 */
class LoggingPapertrailResponse {
    /**
     * Constructs a new <code>LoggingPapertrailResponse</code>.
     * @alias module:model/LoggingPapertrailResponse
     * @implements module:model/LoggingPapertrail
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersion
     */
    constructor() { 
        LoggingPapertrail.initialize(this);Timestamps.initialize(this);ServiceIdAndVersion.initialize(this);
        LoggingPapertrailResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingPapertrailResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingPapertrailResponse} obj Optional instance to populate.
     * @return {module:model/LoggingPapertrailResponse} The populated <code>LoggingPapertrailResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingPapertrailResponse();
            LoggingPapertrail.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersion.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = ApiClient.convertToType(data['placement'], 'String');
            }
            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = ApiClient.convertToType(data['format_version'], 'Number');
            }
            if (data.hasOwnProperty('response_condition')) {
                obj['response_condition'] = ApiClient.convertToType(data['response_condition'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingPapertrailResponse.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingPapertrailResponse.PlacementEnum} placement
 */
LoggingPapertrailResponse.prototype['placement'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingPapertrailResponse.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingPapertrailResponse.prototype['format_version'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingPapertrailResponse.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingPapertrailResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * A hostname or IPv4 address.
 * @member {String} address
 */
LoggingPapertrailResponse.prototype['address'] = undefined;

/**
 * The port number.
 * @member {Number} port
 * @default 514
 */
LoggingPapertrailResponse.prototype['port'] = 514;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
LoggingPapertrailResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
LoggingPapertrailResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
LoggingPapertrailResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
LoggingPapertrailResponse.prototype['service_id'] = undefined;

/**
 * @member {Number} version
 */
LoggingPapertrailResponse.prototype['version'] = undefined;


// Implement LoggingPapertrail interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingPapertrail.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingPapertrail.PlacementEnum} placement
 */
LoggingPapertrail.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingPapertrail.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingPapertrail.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingPapertrail.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingPapertrail.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * A hostname or IPv4 address.
 * @member {String} address
 */
LoggingPapertrail.prototype['address'] = undefined;
/**
 * The port number.
 * @member {Number} port
 * @default 514
 */
LoggingPapertrail.prototype['port'] = 514;
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement ServiceIdAndVersion interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersion.prototype['service_id'] = undefined;
/**
 * @member {Number} version
 */
ServiceIdAndVersion.prototype['version'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingPapertrailResponse['PlacementEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "waf_debug"
     * @const
     */
    "waf_debug": "waf_debug",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};


/**
 * Allowed values for the <code>format_version</code> property.
 * @enum {Number}
 * @readonly
 */
LoggingPapertrailResponse['FormatVersionEnum'] = {

    /**
     * value: 1
     * @const
     */
    "v1": 1,

    /**
     * value: 2
     * @const
     */
    "v2": 2
};



export default LoggingPapertrailResponse;

