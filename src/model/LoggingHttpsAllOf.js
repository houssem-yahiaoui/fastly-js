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
import LoggingMessageType from './LoggingMessageType';

/**
 * The LoggingHttpsAllOf model module.
 * @module model/LoggingHttpsAllOf
 * @version 3.2.0
 */
class LoggingHttpsAllOf {
    /**
     * Constructs a new <code>LoggingHttpsAllOf</code>.
     * @alias module:model/LoggingHttpsAllOf
     */
    constructor() { 
        
        LoggingHttpsAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingHttpsAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingHttpsAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingHttpsAllOf} The populated <code>LoggingHttpsAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingHttpsAllOf();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('request_max_entries')) {
                obj['request_max_entries'] = ApiClient.convertToType(data['request_max_entries'], 'Number');
            }
            if (data.hasOwnProperty('request_max_bytes')) {
                obj['request_max_bytes'] = ApiClient.convertToType(data['request_max_bytes'], 'Number');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('header_name')) {
                obj['header_name'] = ApiClient.convertToType(data['header_name'], 'String');
            }
            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = LoggingMessageType.constructFromObject(data['message_type']);
            }
            if (data.hasOwnProperty('header_value')) {
                obj['header_value'] = ApiClient.convertToType(data['header_value'], 'String');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('json_format')) {
                obj['json_format'] = ApiClient.convertToType(data['json_format'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The URL to send logs to. Must use HTTPS. Required.
 * @member {String} url
 */
LoggingHttpsAllOf.prototype['url'] = undefined;

/**
 * The maximum number of logs sent in one request. Defaults `0` (10k).
 * @member {Number} request_max_entries
 * @default 0
 */
LoggingHttpsAllOf.prototype['request_max_entries'] = 0;

/**
 * The maximum number of bytes sent in one request. Defaults `0` (100MB).
 * @member {Number} request_max_bytes
 * @default 0
 */
LoggingHttpsAllOf.prototype['request_max_bytes'] = 0;

/**
 * Content type of the header sent with the request.
 * @member {String} content_type
 * @default 'null'
 */
LoggingHttpsAllOf.prototype['content_type'] = 'null';

/**
 * Name of the custom header sent with the request.
 * @member {String} header_name
 * @default 'null'
 */
LoggingHttpsAllOf.prototype['header_name'] = 'null';

/**
 * @member {module:model/LoggingMessageType} message_type
 */
LoggingHttpsAllOf.prototype['message_type'] = undefined;

/**
 * Value of the custom header sent with the request.
 * @member {String} header_value
 * @default 'null'
 */
LoggingHttpsAllOf.prototype['header_value'] = 'null';

/**
 * HTTP method used for request.
 * @member {module:model/LoggingHttpsAllOf.MethodEnum} method
 * @default 'POST'
 */
LoggingHttpsAllOf.prototype['method'] = undefined;

/**
 * Enforces valid JSON formatting for log entries.
 * @member {module:model/LoggingHttpsAllOf.JsonFormatEnum} json_format
 */
LoggingHttpsAllOf.prototype['json_format'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingHttpsAllOf.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';





/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
LoggingHttpsAllOf['MethodEnum'] = {

    /**
     * value: "POST"
     * @const
     */
    "POST": "POST",

    /**
     * value: "PUT"
     * @const
     */
    "PUT": "PUT"
};


/**
 * Allowed values for the <code>json_format</code> property.
 * @enum {String}
 * @readonly
 */
LoggingHttpsAllOf['JsonFormatEnum'] = {

    /**
     * value: "0"
     * @const
     */
    "disabled": "0",

    /**
     * value: "1"
     * @const
     */
    "json_array": "1",

    /**
     * value: "2"
     * @const
     */
    "newline_delimited_json": "2"
};



export default LoggingHttpsAllOf;

