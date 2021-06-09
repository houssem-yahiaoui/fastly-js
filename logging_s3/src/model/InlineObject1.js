/**
 * S3
 * Fastly will upload log messages to the S3 bucket in the format specified in the S3 object.
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


class InlineObject1 {
    
    constructor() { 
        
        InlineObject1.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject1();

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
            if (data.hasOwnProperty('message_type')) {
                obj['message_type'] = ApiClient.convertToType(data['message_type'], 'String');
            }
            if (data.hasOwnProperty('timestamp_format')) {
                obj['timestamp_format'] = ApiClient.convertToType(data['timestamp_format'], 'String');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Number');
            }
            if (data.hasOwnProperty('gzip_level')) {
                obj['gzip_level'] = ApiClient.convertToType(data['gzip_level'], 'Number');
            }
            if (data.hasOwnProperty('compression_codec')) {
                obj['compression_codec'] = ApiClient.convertToType(data['compression_codec'], 'String');
            }
            if (data.hasOwnProperty('access_key')) {
                obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
            }
            if (data.hasOwnProperty('acl')) {
                obj['acl'] = ApiClient.convertToType(data['acl'], 'String');
            }
            if (data.hasOwnProperty('bucket_name')) {
                obj['bucket_name'] = ApiClient.convertToType(data['bucket_name'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('iam_role')) {
                obj['iam_role'] = ApiClient.convertToType(data['iam_role'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('redundancy')) {
                obj['redundancy'] = ApiClient.convertToType(data['redundancy'], 'String');
            }
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('server_side_encryption_kms_key_id')) {
                obj['server_side_encryption_kms_key_id'] = ApiClient.convertToType(data['server_side_encryption_kms_key_id'], 'String');
            }
            if (data.hasOwnProperty('server_side_encryption')) {
                obj['server_side_encryption'] = ApiClient.convertToType(data['server_side_encryption'], 'String');
            }
        }
        return obj;
    }


}


InlineObject1.prototype['created_at'] = undefined;


InlineObject1.prototype['deleted_at'] = undefined;


InlineObject1.prototype['updated_at'] = undefined;


InlineObject1.prototype['service_id'] = undefined;


InlineObject1.prototype['version'] = undefined;


InlineObject1.prototype['name'] = undefined;


InlineObject1.prototype['placement'] = undefined;


InlineObject1.prototype['format_version'] = FormatVersionEnum.2;


InlineObject1.prototype['response_condition'] = undefined;


InlineObject1.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';


InlineObject1.prototype['message_type'] = 'classic';


InlineObject1.prototype['timestamp_format'] = undefined;


InlineObject1.prototype['period'] = 3600;


InlineObject1.prototype['gzip_level'] = 0;


InlineObject1.prototype['compression_codec'] = undefined;


InlineObject1.prototype['access_key'] = undefined;


InlineObject1.prototype['acl'] = undefined;


InlineObject1.prototype['bucket_name'] = undefined;


InlineObject1.prototype['domain'] = undefined;


InlineObject1.prototype['iam_role'] = undefined;


InlineObject1.prototype['path'] = 'null';


InlineObject1.prototype['public_key'] = 'null';


InlineObject1.prototype['redundancy'] = 'null';


InlineObject1.prototype['secret_key'] = undefined;


InlineObject1.prototype['server_side_encryption_kms_key_id'] = 'null';


InlineObject1.prototype['server_side_encryption'] = 'null';






InlineObject1['PlacementEnum'] = {

    
    "none": "none",

    
    "waf_debug": "waf_debug",

    
    "null": "null"
};



InlineObject1['FormatVersionEnum'] = {

    
    "1": 1,

    
    "2": 2
};



InlineObject1['MessageTypeEnum'] = {

    
    "classic": "classic",

    
    "loggly": "loggly",

    
    "logplex": "logplex",

    
    "blank": "blank"
};



InlineObject1['CompressionCodecEnum'] = {

    
    "zstd": "zstd",

    
    "snappy": "snappy",

    
    "gzip": "gzip"
};



export default InlineObject1;

