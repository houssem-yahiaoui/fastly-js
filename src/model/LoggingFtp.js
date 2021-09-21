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
import LoggingCompressionCodec from './LoggingCompressionCodec';
import LoggingFormatVersion from './LoggingFormatVersion';
import LoggingFtpAllOf from './LoggingFtpAllOf';
import LoggingGenericCommon from './LoggingGenericCommon';
import LoggingMessageType from './LoggingMessageType';
import LoggingPlacement from './LoggingPlacement';

/**
 * The LoggingFtp model module.
 * @module model/LoggingFtp
 * @version 3.0.0-alpha1
 */
class LoggingFtp {
    /**
     * Constructs a new <code>LoggingFtp</code>.
     * @alias module:model/LoggingFtp
     */
    constructor() { 
        LoggingFtp.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingFtp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingFtp} obj Optional instance to populate.
     * @return {module:model/LoggingFtp} The populated <code>LoggingFtp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingFtp();

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
            if (data.hasOwnProperty('compression_codec')) {
                obj['compression_codec'] = LoggingCompressionCodec.constructFromObject(data['compression_codec']);
            }
            if (data.hasOwnProperty('gzip_level')) {
                obj['gzip_level'] = ApiClient.convertToType(data['gzip_level'], 'Number');
            }
            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = LoggingMessageType.constructFromObject(data['message_type']);
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Number');
            }
            if (data.hasOwnProperty('timestamp_format')) {
                obj['timestamp_format'] = ApiClient.convertToType(data['timestamp_format'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('ipv4')) {
                obj['ipv4'] = ApiClient.convertToType(data['ipv4'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
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
LoggingFtp.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * @member {module:model/LoggingFormatVersion} format_version
 */
LoggingFtp.prototype['format_version'] = undefined;

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingFtp.prototype['name'] = undefined;

/**
 * @member {module:model/LoggingPlacement} placement
 */
LoggingFtp.prototype['placement'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingFtp.prototype['response_condition'] = undefined;

/**
 * @member {module:model/LoggingCompressionCodec} compression_codec
 */
LoggingFtp.prototype['compression_codec'] = undefined;

/**
 * What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \"gzip.\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */
LoggingFtp.prototype['gzip_level'] = 0;

/**
 * @member {module:model/LoggingMessageType} message_type
 */
LoggingFtp.prototype['message_type'] = undefined;

/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */
LoggingFtp.prototype['period'] = 3600;

/**
 * Date and time in ISO 8601 format.
 * @member {String} timestamp_format
 */
LoggingFtp.prototype['timestamp_format'] = undefined;

/**
 * An hostname or IPv4 address.
 * @member {String} address
 */
LoggingFtp.prototype['address'] = undefined;

/**
 * Hostname used.
 * @member {String} hostname
 */
LoggingFtp.prototype['hostname'] = undefined;

/**
 * IPv4 address of the host.
 * @member {String} ipv4
 */
LoggingFtp.prototype['ipv4'] = undefined;

/**
 * The password for the server. For anonymous use an email address.
 * @member {String} password
 */
LoggingFtp.prototype['password'] = undefined;

/**
 * The path to upload log files to. If the path ends in `/` then it is treated as a directory.
 * @member {String} path
 */
LoggingFtp.prototype['path'] = undefined;

/**
 * The port number.
 * @member {Number} port
 * @default 21
 */
LoggingFtp.prototype['port'] = 21;

/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingFtp.prototype['public_key'] = 'null';

/**
 * The username for the server. Can be anonymous.
 * @member {String} user
 */
LoggingFtp.prototype['user'] = undefined;






export default LoggingFtp;

