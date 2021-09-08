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
import LoggingCompressionCodec from './LoggingCompressionCodec.js';
import LoggingFormatVersion from './LoggingFormatVersion.js';
import LoggingMessageType from './LoggingMessageType.js';
import LoggingPlacement from './LoggingPlacement.js';
import LoggingSftp from './LoggingSftp.js';
import ServiceIdAndVersion from './ServiceIdAndVersion.js';
import Timestamps from './Timestamps.js';

/**
 * The LoggingSftpResponse model module.
 * @module model/LoggingSftpResponse
 * @version 3.0.0-alpha1
 */
class LoggingSftpResponse {
    /**
     * Constructs a new <code>LoggingSftpResponse</code>.
     * @alias module:model/LoggingSftpResponse
     * @implements module:model/LoggingSftp
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersion
     */
    constructor() { 
        LoggingSftp.initialize(this);Timestamps.initialize(this);ServiceIdAndVersion.initialize(this);
        LoggingSftpResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingSftpResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingSftpResponse} obj Optional instance to populate.
     * @return {module:model/LoggingSftpResponse} The populated <code>LoggingSftpResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingSftpResponse();
            LoggingSftp.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersion.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], Object);
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('ssh_known_hosts')) {
                obj['ssh_known_hosts'] = ApiClient.convertToType(data['ssh_known_hosts'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
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
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingSftpResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * @member {module:model/LoggingFormatVersion} format_version
 */
LoggingSftpResponse.prototype['format_version'] = undefined;

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingSftpResponse.prototype['name'] = undefined;

/**
 * @member {module:model/LoggingPlacement} placement
 */
LoggingSftpResponse.prototype['placement'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingSftpResponse.prototype['response_condition'] = undefined;

/**
 * @member {module:model/LoggingCompressionCodec} compression_codec
 */
LoggingSftpResponse.prototype['compression_codec'] = undefined;

/**
 * What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \"gzip.\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */
LoggingSftpResponse.prototype['gzip_level'] = 0;

/**
 * @member {module:model/LoggingMessageType} message_type
 */
LoggingSftpResponse.prototype['message_type'] = undefined;

/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */
LoggingSftpResponse.prototype['period'] = 3600;

/**
 * Date and time in ISO 8601 format.
 * @member {String} timestamp_format
 */
LoggingSftpResponse.prototype['timestamp_format'] = undefined;

/**
 * A hostname or IPv4 address.
 * @member {String} address
 */
LoggingSftpResponse.prototype['address'] = undefined;

/**
 * The port number.
 * @member {Object} port
 */
LoggingSftpResponse.prototype['port'] = undefined;

/**
 * The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
 * @member {String} password
 */
LoggingSftpResponse.prototype['password'] = undefined;

/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */
LoggingSftpResponse.prototype['path'] = 'null';

/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingSftpResponse.prototype['public_key'] = 'null';

/**
 * The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
 * @member {String} secret_key
 * @default 'null'
 */
LoggingSftpResponse.prototype['secret_key'] = 'null';

/**
 * A list of host keys for all hosts we can connect to over SFTP.
 * @member {String} ssh_known_hosts
 */
LoggingSftpResponse.prototype['ssh_known_hosts'] = undefined;

/**
 * The username for the server.
 * @member {String} user
 */
LoggingSftpResponse.prototype['user'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */
LoggingSftpResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */
LoggingSftpResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */
LoggingSftpResponse.prototype['updated_at'] = undefined;

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
LoggingSftpResponse.prototype['service_id'] = undefined;

/**
 * Integer identifying a service version.
 * @member {Number} version
 */
LoggingSftpResponse.prototype['version'] = undefined;


// Implement LoggingSftp interface:
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingSftp.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * @member {module:model/LoggingFormatVersion} format_version
 */
LoggingSftp.prototype['format_version'] = undefined;
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingSftp.prototype['name'] = undefined;
/**
 * @member {module:model/LoggingPlacement} placement
 */
LoggingSftp.prototype['placement'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingSftp.prototype['response_condition'] = undefined;
/**
 * @member {module:model/LoggingCompressionCodec} compression_codec
 */
LoggingSftp.prototype['compression_codec'] = undefined;
/**
 * What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \"gzip.\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */
LoggingSftp.prototype['gzip_level'] = 0;
/**
 * @member {module:model/LoggingMessageType} message_type
 */
LoggingSftp.prototype['message_type'] = undefined;
/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */
LoggingSftp.prototype['period'] = 3600;
/**
 * Date and time in ISO 8601 format.
 * @member {String} timestamp_format
 */
LoggingSftp.prototype['timestamp_format'] = undefined;
/**
 * A hostname or IPv4 address.
 * @member {String} address
 */
LoggingSftp.prototype['address'] = undefined;
/**
 * The port number.
 * @member {Object} port
 */
LoggingSftp.prototype['port'] = undefined;
/**
 * The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
 * @member {String} password
 */
LoggingSftp.prototype['password'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */
LoggingSftp.prototype['path'] = 'null';
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingSftp.prototype['public_key'] = 'null';
/**
 * The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
 * @member {String} secret_key
 * @default 'null'
 */
LoggingSftp.prototype['secret_key'] = 'null';
/**
 * A list of host keys for all hosts we can connect to over SFTP.
 * @member {String} ssh_known_hosts
 */
LoggingSftp.prototype['ssh_known_hosts'] = undefined;
/**
 * The username for the server.
 * @member {String} user
 */
LoggingSftp.prototype['user'] = undefined;
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement ServiceIdAndVersion interface:
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
ServiceIdAndVersion.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */
ServiceIdAndVersion.prototype['version'] = undefined;




export default LoggingSftpResponse;

