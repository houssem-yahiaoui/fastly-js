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

/**
 * The LoggingAzureblobAllOf model module.
 * @module model/LoggingAzureblobAllOf
 * @version 4.1.1
 */
class LoggingAzureblobAllOf {
    /**
     * Constructs a new <code>LoggingAzureblobAllOf</code>.
     * @alias module:model/LoggingAzureblobAllOf
     */
    constructor() { 
        
        LoggingAzureblobAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingAzureblobAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingAzureblobAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingAzureblobAllOf} The populated <code>LoggingAzureblobAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingAzureblobAllOf();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('account_name')) {
                obj['account_name'] = ApiClient.convertToType(data['account_name'], 'String');
            }
            if (data.hasOwnProperty('container')) {
                obj['container'] = ApiClient.convertToType(data['container'], 'String');
            }
            if (data.hasOwnProperty('sas_token')) {
                obj['sas_token'] = ApiClient.convertToType(data['sas_token'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('file_max_bytes')) {
                obj['file_max_bytes'] = ApiClient.convertToType(data['file_max_bytes'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */
LoggingAzureblobAllOf.prototype['path'] = 'null';

/**
 * The unique Azure Blob Storage namespace in which your data objects are stored. Required.
 * @member {String} account_name
 */
LoggingAzureblobAllOf.prototype['account_name'] = undefined;

/**
 * The name of the Azure Blob Storage container in which to store logs. Required.
 * @member {String} container
 */
LoggingAzureblobAllOf.prototype['container'] = undefined;

/**
 * The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work. Required.
 * @member {String} sas_token
 */
LoggingAzureblobAllOf.prototype['sas_token'] = undefined;

/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingAzureblobAllOf.prototype['public_key'] = 'null';

/**
 * The maximum number of bytes for each uploaded file. A value of 0 can be used to indicate there is no limit on the size of uploaded files, otherwise the minimum value is 1048576 bytes (1 MiB.)
 * @member {Number} file_max_bytes
 */
LoggingAzureblobAllOf.prototype['file_max_bytes'] = undefined;






export default LoggingAzureblobAllOf;

