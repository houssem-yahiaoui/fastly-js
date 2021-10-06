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
import LoggingFormatVersion from './LoggingFormatVersion';
import LoggingLoggly from './LoggingLoggly';
import LoggingPlacement from './LoggingPlacement';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The LoggingLogglyResponse model module.
 * @module model/LoggingLogglyResponse
 * @version 3.0.0-alpha1
 */
class LoggingLogglyResponse {
    /**
     * Constructs a new <code>LoggingLogglyResponse</code>.
     * @alias module:model/LoggingLogglyResponse
     */
    constructor() { 
        LoggingLogglyResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingLogglyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingLogglyResponse} obj Optional instance to populate.
     * @return {module:model/LoggingLogglyResponse} The populated <code>LoggingLogglyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingLogglyResponse();

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
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
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
LoggingLogglyResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * @member {module:model/LoggingFormatVersion} format_version
 */
LoggingLogglyResponse.prototype['format_version'] = undefined;

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingLogglyResponse.prototype['name'] = undefined;

/**
 * @member {module:model/LoggingPlacement} placement
 */
LoggingLogglyResponse.prototype['placement'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingLogglyResponse.prototype['response_condition'] = undefined;

/**
 * The token to use for authentication ([https://www.loggly.com/docs/customer-token-authentication-token/](https://www.loggly.com/docs/customer-token-authentication-token/)).
 * @member {String} token
 */
LoggingLogglyResponse.prototype['token'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */
LoggingLogglyResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */
LoggingLogglyResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */
LoggingLogglyResponse.prototype['updated_at'] = undefined;

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
LoggingLogglyResponse.prototype['service_id'] = undefined;

/**
 * Integer identifying a service version.
 * @member {Number} version
 */
LoggingLogglyResponse.prototype['version'] = undefined;






export default LoggingLogglyResponse;

