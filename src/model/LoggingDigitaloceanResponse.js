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
import LoggingCompressionCodec from './LoggingCompressionCodec';
import LoggingDigitalocean from './LoggingDigitalocean';
import LoggingFormatVersion from './LoggingFormatVersion';
import LoggingMessageType from './LoggingMessageType';
import LoggingPlacement from './LoggingPlacement';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The LoggingDigitaloceanResponse model module.
 * @module model/LoggingDigitaloceanResponse
 * @version 3.0.0-alpha1
 */
class LoggingDigitaloceanResponse {
    /**
     * Constructs a new <code>LoggingDigitaloceanResponse</code>.
     * @alias module:model/LoggingDigitaloceanResponse
     * @implements module:model/LoggingDigitalocean
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersion
     */
    constructor() { 
        LoggingDigitalocean.initialize(this);Timestamps.initialize(this);ServiceIdAndVersion.initialize(this);
        LoggingDigitaloceanResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingDigitaloceanResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingDigitaloceanResponse} obj Optional instance to populate.
     * @return {module:model/LoggingDigitaloceanResponse} The populated <code>LoggingDigitaloceanResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingDigitaloceanResponse();
            LoggingDigitalocean.constructFromObject(data, obj);
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
            if (data.hasOwnProperty('access_key')) {
                obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
            }
            if (data.hasOwnProperty('bucket_name')) {
                obj['bucket_name'] = ApiClient.convertToType(data['bucket_name'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
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
LoggingDigitaloceanResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * @member {module:model/LoggingFormatVersion} format_version
 */
LoggingDigitaloceanResponse.prototype['format_version'] = undefined;

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingDigitaloceanResponse.prototype['name'] = undefined;

/**
 * @member {module:model/LoggingPlacement} placement
 */
LoggingDigitaloceanResponse.prototype['placement'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingDigitaloceanResponse.prototype['response_condition'] = undefined;

/**
 * @member {module:model/LoggingCompressionCodec} compression_codec
 */
LoggingDigitaloceanResponse.prototype['compression_codec'] = undefined;

/**
 * What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \"gzip.\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */
LoggingDigitaloceanResponse.prototype['gzip_level'] = 0;

/**
 * @member {module:model/LoggingMessageType} message_type
 */
LoggingDigitaloceanResponse.prototype['message_type'] = undefined;

/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */
LoggingDigitaloceanResponse.prototype['period'] = 3600;

/**
 * Date and time in ISO 8601 format.
 * @member {String} timestamp_format
 */
LoggingDigitaloceanResponse.prototype['timestamp_format'] = undefined;

/**
 * Your DigitalOcean Spaces account access key.
 * @member {String} access_key
 */
LoggingDigitaloceanResponse.prototype['access_key'] = undefined;

/**
 * The name of the DigitalOcean Space.
 * @member {String} bucket_name
 */
LoggingDigitaloceanResponse.prototype['bucket_name'] = undefined;

/**
 * The domain of the DigitalOcean Spaces endpoint.
 * @member {String} domain
 * @default 'nyc3.digitaloceanspaces.com'
 */
LoggingDigitaloceanResponse.prototype['domain'] = 'nyc3.digitaloceanspaces.com';

/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */
LoggingDigitaloceanResponse.prototype['path'] = 'null';

/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingDigitaloceanResponse.prototype['public_key'] = 'null';

/**
 * Your DigitalOcean Spaces account secret key.
 * @member {String} secret_key
 */
LoggingDigitaloceanResponse.prototype['secret_key'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */
LoggingDigitaloceanResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */
LoggingDigitaloceanResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */
LoggingDigitaloceanResponse.prototype['updated_at'] = undefined;

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
LoggingDigitaloceanResponse.prototype['service_id'] = undefined;

/**
 * Integer identifying a service version.
 * @member {Number} version
 */
LoggingDigitaloceanResponse.prototype['version'] = undefined;


// Implement LoggingDigitalocean interface:
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingDigitalocean.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * @member {module:model/LoggingFormatVersion} format_version
 */
LoggingDigitalocean.prototype['format_version'] = undefined;
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingDigitalocean.prototype['name'] = undefined;
/**
 * @member {module:model/LoggingPlacement} placement
 */
LoggingDigitalocean.prototype['placement'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingDigitalocean.prototype['response_condition'] = undefined;
/**
 * @member {module:model/LoggingCompressionCodec} compression_codec
 */
LoggingDigitalocean.prototype['compression_codec'] = undefined;
/**
 * What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \"gzip.\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */
LoggingDigitalocean.prototype['gzip_level'] = 0;
/**
 * @member {module:model/LoggingMessageType} message_type
 */
LoggingDigitalocean.prototype['message_type'] = undefined;
/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */
LoggingDigitalocean.prototype['period'] = 3600;
/**
 * Date and time in ISO 8601 format.
 * @member {String} timestamp_format
 */
LoggingDigitalocean.prototype['timestamp_format'] = undefined;
/**
 * Your DigitalOcean Spaces account access key.
 * @member {String} access_key
 */
LoggingDigitalocean.prototype['access_key'] = undefined;
/**
 * The name of the DigitalOcean Space.
 * @member {String} bucket_name
 */
LoggingDigitalocean.prototype['bucket_name'] = undefined;
/**
 * The domain of the DigitalOcean Spaces endpoint.
 * @member {String} domain
 * @default 'nyc3.digitaloceanspaces.com'
 */
LoggingDigitalocean.prototype['domain'] = 'nyc3.digitaloceanspaces.com';
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */
LoggingDigitalocean.prototype['path'] = 'null';
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingDigitalocean.prototype['public_key'] = 'null';
/**
 * Your DigitalOcean Spaces account secret key.
 * @member {String} secret_key
 */
LoggingDigitalocean.prototype['secret_key'] = undefined;
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




export default LoggingDigitaloceanResponse;

