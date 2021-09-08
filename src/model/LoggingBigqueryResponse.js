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
import LoggingBigquery from './LoggingBigquery.js';
import LoggingFormatVersion from './LoggingFormatVersion.js';
import LoggingPlacement from './LoggingPlacement.js';
import ServiceIdAndVersion from './ServiceIdAndVersion.js';
import Timestamps from './Timestamps.js';

/**
 * The LoggingBigqueryResponse model module.
 * @module model/LoggingBigqueryResponse
 * @version 3.0.0-alpha1
 */
class LoggingBigqueryResponse {
    /**
     * Constructs a new <code>LoggingBigqueryResponse</code>.
     * @alias module:model/LoggingBigqueryResponse
     * @implements module:model/LoggingBigquery
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersion
     */
    constructor() { 
        LoggingBigquery.initialize(this);Timestamps.initialize(this);ServiceIdAndVersion.initialize(this);
        LoggingBigqueryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingBigqueryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingBigqueryResponse} obj Optional instance to populate.
     * @return {module:model/LoggingBigqueryResponse} The populated <code>LoggingBigqueryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingBigqueryResponse();
            LoggingBigquery.constructFromObject(data, obj);
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
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('dataset')) {
                obj['dataset'] = ApiClient.convertToType(data['dataset'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('table')) {
                obj['table'] = ApiClient.convertToType(data['table'], 'String');
            }
            if (data.hasOwnProperty('template_suffix')) {
                obj['template_suffix'] = ApiClient.convertToType(data['template_suffix'], 'String');
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
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
 * @member {String} format
 */
LoggingBigqueryResponse.prototype['format'] = undefined;

/**
 * @member {module:model/LoggingFormatVersion} format_version
 */
LoggingBigqueryResponse.prototype['format_version'] = undefined;

/**
 * The name of the BigQuery logging object. Used as a primary key for API access.
 * @member {String} name
 */
LoggingBigqueryResponse.prototype['name'] = undefined;

/**
 * @member {module:model/LoggingPlacement} placement
 */
LoggingBigqueryResponse.prototype['placement'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingBigqueryResponse.prototype['response_condition'] = undefined;

/**
 * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
 * @member {String} secret_key
 */
LoggingBigqueryResponse.prototype['secret_key'] = undefined;

/**
 * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
 * @member {String} user
 */
LoggingBigqueryResponse.prototype['user'] = undefined;

/**
 * Your BigQuery dataset.
 * @member {String} dataset
 */
LoggingBigqueryResponse.prototype['dataset'] = undefined;

/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */
LoggingBigqueryResponse.prototype['project_id'] = undefined;

/**
 * Your BigQuery table.
 * @member {String} table
 */
LoggingBigqueryResponse.prototype['table'] = undefined;

/**
 * BigQuery table name suffix template. Optional.
 * @member {String} template_suffix
 */
LoggingBigqueryResponse.prototype['template_suffix'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */
LoggingBigqueryResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */
LoggingBigqueryResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */
LoggingBigqueryResponse.prototype['updated_at'] = undefined;

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
LoggingBigqueryResponse.prototype['service_id'] = undefined;

/**
 * Integer identifying a service version.
 * @member {Number} version
 */
LoggingBigqueryResponse.prototype['version'] = undefined;


// Implement LoggingBigquery interface:
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
 * @member {String} format
 */
LoggingBigquery.prototype['format'] = undefined;
/**
 * @member {module:model/LoggingFormatVersion} format_version
 */
LoggingBigquery.prototype['format_version'] = undefined;
/**
 * The name of the BigQuery logging object. Used as a primary key for API access.
 * @member {String} name
 */
LoggingBigquery.prototype['name'] = undefined;
/**
 * @member {module:model/LoggingPlacement} placement
 */
LoggingBigquery.prototype['placement'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingBigquery.prototype['response_condition'] = undefined;
/**
 * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
 * @member {String} secret_key
 */
LoggingBigquery.prototype['secret_key'] = undefined;
/**
 * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
 * @member {String} user
 */
LoggingBigquery.prototype['user'] = undefined;
/**
 * Your BigQuery dataset.
 * @member {String} dataset
 */
LoggingBigquery.prototype['dataset'] = undefined;
/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */
LoggingBigquery.prototype['project_id'] = undefined;
/**
 * Your BigQuery table.
 * @member {String} table
 */
LoggingBigquery.prototype['table'] = undefined;
/**
 * BigQuery table name suffix template. Optional.
 * @member {String} template_suffix
 */
LoggingBigquery.prototype['template_suffix'] = undefined;
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




export default LoggingBigqueryResponse;

