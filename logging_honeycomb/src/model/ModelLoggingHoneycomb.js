/**
 * Honeycomb Logging
 * Fastly will upload log messages to Honeycomb.io in the format specified in the Honeycomb object.
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


class ModelLoggingHoneycomb {
    
    constructor() { 
        
        ModelLoggingHoneycomb.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelLoggingHoneycomb();

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
            if (data.hasOwnProperty('dataset')) {
                obj['dataset'] = ApiClient.convertToType(data['dataset'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}


ModelLoggingHoneycomb.prototype['created_at'] = undefined;


ModelLoggingHoneycomb.prototype['deleted_at'] = undefined;


ModelLoggingHoneycomb.prototype['updated_at'] = undefined;


ModelLoggingHoneycomb.prototype['service_id'] = undefined;


ModelLoggingHoneycomb.prototype['version'] = undefined;


ModelLoggingHoneycomb.prototype['name'] = undefined;


ModelLoggingHoneycomb.prototype['placement'] = undefined;


ModelLoggingHoneycomb.prototype['format_version'] = FormatVersionEnum.2;


ModelLoggingHoneycomb.prototype['response_condition'] = undefined;


ModelLoggingHoneycomb.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';


ModelLoggingHoneycomb.prototype['dataset'] = undefined;


ModelLoggingHoneycomb.prototype['token'] = undefined;






ModelLoggingHoneycomb['PlacementEnum'] = {

    
    "none": "none",

    
    "waf_debug": "waf_debug",

    
    "null": "null"
};



ModelLoggingHoneycomb['FormatVersionEnum'] = {

    
    "1": 1,

    
    "2": 2
};



export default ModelLoggingHoneycomb;

