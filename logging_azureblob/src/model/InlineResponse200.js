/**
 * Microsoft Azure Blob Storage
 * Fastly will upload log messages to the Azure Blob Storage container in the format specified in the Azure Blob object.
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


class InlineResponse200 {
    
    constructor() { 
        
        InlineResponse200.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200();

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


InlineResponse200.prototype['created_at'] = undefined;


InlineResponse200.prototype['deleted_at'] = undefined;


InlineResponse200.prototype['updated_at'] = undefined;


InlineResponse200.prototype['service_id'] = undefined;


InlineResponse200.prototype['version'] = undefined;


InlineResponse200.prototype['name'] = undefined;


InlineResponse200.prototype['placement'] = undefined;


InlineResponse200.prototype['format_version'] = FormatVersionEnum.2;


InlineResponse200.prototype['response_condition'] = undefined;


InlineResponse200.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';


InlineResponse200.prototype['message_type'] = 'classic';


InlineResponse200.prototype['timestamp_format'] = undefined;


InlineResponse200.prototype['period'] = 3600;


InlineResponse200.prototype['gzip_level'] = 0;


InlineResponse200.prototype['compression_codec'] = undefined;


InlineResponse200.prototype['path'] = 'null';


InlineResponse200.prototype['account_name'] = undefined;


InlineResponse200.prototype['container'] = undefined;


InlineResponse200.prototype['sas_token'] = undefined;


InlineResponse200.prototype['public_key'] = 'null';


InlineResponse200.prototype['file_max_bytes'] = undefined;






InlineResponse200['PlacementEnum'] = {

    
    "none": "none",

    
    "waf_debug": "waf_debug",

    
    "null": "null"
};



InlineResponse200['FormatVersionEnum'] = {

    
    "1": 1,

    
    "2": 2
};



InlineResponse200['MessageTypeEnum'] = {

    
    "classic": "classic",

    
    "loggly": "loggly",

    
    "logplex": "logplex",

    
    "blank": "blank"
};



InlineResponse200['CompressionCodecEnum'] = {

    
    "zstd": "zstd",

    
    "snappy": "snappy",

    
    "gzip": "gzip"
};



export default InlineResponse200;

