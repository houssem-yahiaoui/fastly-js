/**
 * Loggly
 * Fastly will stream log messages to the Loggly account in the format specified in the Loggly logging object.
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


class InlineObject {
    
    constructor() { 
        
        InlineObject.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject();

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
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}


InlineObject.prototype['created_at'] = undefined;


InlineObject.prototype['deleted_at'] = undefined;


InlineObject.prototype['updated_at'] = undefined;


InlineObject.prototype['service_id'] = undefined;


InlineObject.prototype['version'] = undefined;


InlineObject.prototype['name'] = undefined;


InlineObject.prototype['placement'] = undefined;


InlineObject.prototype['format_version'] = FormatVersionEnum.2;


InlineObject.prototype['response_condition'] = undefined;


InlineObject.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';


InlineObject.prototype['token'] = undefined;






InlineObject['PlacementEnum'] = {

    
    "none": "none",

    
    "waf_debug": "waf_debug",

    
    "null": "null"
};



InlineObject['FormatVersionEnum'] = {

    
    "1": 1,

    
    "2": 2
};



export default InlineObject;

