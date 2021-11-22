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
import LoggingKinesis from './LoggingKinesis';
import LoggingPlacement from './LoggingPlacement';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The LoggingKinesisResponse model module.
 * @module model/LoggingKinesisResponse
 * @version 3.0.0-alpha1
 */
class LoggingKinesisResponse {
    /**
     * Constructs a new <code>LoggingKinesisResponse</code>.
     * @alias module:model/LoggingKinesisResponse
     * @implements module:model/LoggingKinesis
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersion
     */
    constructor() { 
        LoggingKinesis.initialize(this);Timestamps.initialize(this);ServiceIdAndVersion.initialize(this);
        LoggingKinesisResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingKinesisResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingKinesisResponse} obj Optional instance to populate.
     * @return {module:model/LoggingKinesisResponse} The populated <code>LoggingKinesisResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingKinesisResponse();
            LoggingKinesis.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersion.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = LoggingPlacement.constructFromObject(data['placement']);
            }
            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = LoggingFormatVersion.constructFromObject(data['format_version']);
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('topic')) {
                obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('access_key')) {
                obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
            }
            if (data.hasOwnProperty('iam_role')) {
                obj['iam_role'] = ApiClient.convertToType(data['iam_role'], 'String');
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
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingKinesisResponse.prototype['name'] = undefined;

/**
 * @member {module:model/LoggingPlacement} placement
 */
LoggingKinesisResponse.prototype['placement'] = undefined;

/**
 * @member {module:model/LoggingFormatVersion} format_version
 */
LoggingKinesisResponse.prototype['format_version'] = undefined;

/**
 * @member {String} format
 */
LoggingKinesisResponse.prototype['format'] = undefined;

/**
 * The Amazon Kinesis stream to send logs to. Required.
 * @member {String} topic
 */
LoggingKinesisResponse.prototype['topic'] = undefined;

/**
 * The [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints) to stream logs to.
 * @member {module:model/LoggingKinesisResponse.RegionEnum} region
 */
LoggingKinesisResponse.prototype['region'] = undefined;

/**
 * The secret key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified.
 * @member {String} secret_key
 */
LoggingKinesisResponse.prototype['secret_key'] = undefined;

/**
 * The access key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified.
 * @member {String} access_key
 */
LoggingKinesisResponse.prototype['access_key'] = undefined;

/**
 * The ARN for an IAM role granting Fastly access to the target Amazon Kinesis stream. Not required if `access_key` and `secret_key` are provided.
 * @member {String} iam_role
 */
LoggingKinesisResponse.prototype['iam_role'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */
LoggingKinesisResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */
LoggingKinesisResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */
LoggingKinesisResponse.prototype['updated_at'] = undefined;

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
LoggingKinesisResponse.prototype['service_id'] = undefined;

/**
 * Integer identifying a service version.
 * @member {Number} version
 */
LoggingKinesisResponse.prototype['version'] = undefined;


// Implement LoggingKinesis interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingKinesis.prototype['name'] = undefined;
/**
 * @member {module:model/LoggingPlacement} placement
 */
LoggingKinesis.prototype['placement'] = undefined;
/**
 * @member {module:model/LoggingFormatVersion} format_version
 */
LoggingKinesis.prototype['format_version'] = undefined;
/**
 * @member {String} format
 */
LoggingKinesis.prototype['format'] = undefined;
/**
 * The Amazon Kinesis stream to send logs to. Required.
 * @member {String} topic
 */
LoggingKinesis.prototype['topic'] = undefined;
/**
 * The [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints) to stream logs to.
 * @member {module:model/LoggingKinesis.RegionEnum} region
 */
LoggingKinesis.prototype['region'] = undefined;
/**
 * The secret key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified.
 * @member {String} secret_key
 */
LoggingKinesis.prototype['secret_key'] = undefined;
/**
 * The access key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified.
 * @member {String} access_key
 */
LoggingKinesis.prototype['access_key'] = undefined;
/**
 * The ARN for an IAM role granting Fastly access to the target Amazon Kinesis stream. Not required if `access_key` and `secret_key` are provided.
 * @member {String} iam_role
 */
LoggingKinesis.prototype['iam_role'] = undefined;
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



/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
LoggingKinesisResponse['RegionEnum'] = {

    /**
     * value: "us-east-1"
     * @const
     */
    "us-east-1": "us-east-1",

    /**
     * value: "us-east-2"
     * @const
     */
    "us-east-2": "us-east-2",

    /**
     * value: "us-west-1"
     * @const
     */
    "us-west-1": "us-west-1",

    /**
     * value: "us-west-2"
     * @const
     */
    "us-west-2": "us-west-2",

    /**
     * value: "af-south-1"
     * @const
     */
    "af-south-1": "af-south-1",

    /**
     * value: "ap-east-1"
     * @const
     */
    "ap-east-1": "ap-east-1",

    /**
     * value: "ap-south-1"
     * @const
     */
    "ap-south-1": "ap-south-1",

    /**
     * value: "ap-northeast-3"
     * @const
     */
    "ap-northeast-3": "ap-northeast-3",

    /**
     * value: "ap-northeast-2"
     * @const
     */
    "ap-northeast-2": "ap-northeast-2",

    /**
     * value: "ap-southeast-1"
     * @const
     */
    "ap-southeast-1": "ap-southeast-1",

    /**
     * value: "ap-southeast-2"
     * @const
     */
    "ap-southeast-2": "ap-southeast-2",

    /**
     * value: "ap-northeast-1"
     * @const
     */
    "ap-northeast-1": "ap-northeast-1",

    /**
     * value: "ca-central-1"
     * @const
     */
    "ca-central-1": "ca-central-1",

    /**
     * value: "cn-north-1"
     * @const
     */
    "cn-north-1": "cn-north-1",

    /**
     * value: "cn-northwest-1"
     * @const
     */
    "cn-northwest-1": "cn-northwest-1",

    /**
     * value: "eu-central-1"
     * @const
     */
    "eu-central-1": "eu-central-1",

    /**
     * value: "eu-west-1"
     * @const
     */
    "eu-west-1": "eu-west-1",

    /**
     * value: "eu-west-2"
     * @const
     */
    "eu-west-2": "eu-west-2",

    /**
     * value: "eu-south-1"
     * @const
     */
    "eu-south-1": "eu-south-1",

    /**
     * value: "eu-west-3"
     * @const
     */
    "eu-west-3": "eu-west-3",

    /**
     * value: "eu-north-1"
     * @const
     */
    "eu-north-1": "eu-north-1",

    /**
     * value: "me-south-1"
     * @const
     */
    "me-south-1": "me-south-1",

    /**
     * value: "sa-east-1"
     * @const
     */
    "sa-east-1": "sa-east-1"
};



export default LoggingKinesisResponse;
