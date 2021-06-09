/**
 * Papertrail
 * Fastly will stream log messages to the Papertrail account in the format specified in the Papertrail object.
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
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
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


InlineObject1.prototype['address'] = undefined;


InlineObject1.prototype['port'] = 514;






InlineObject1['PlacementEnum'] = {

    
    "none": "none",

    
    "waf_debug": "waf_debug",

    
    "null": "null"
};



InlineObject1['FormatVersionEnum'] = {

    
    "1": 1,

    
    "2": 2
};



export default InlineObject1;

