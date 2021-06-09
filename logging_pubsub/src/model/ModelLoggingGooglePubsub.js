/**
 * Google Cloud Pub/Sub Logging
 * Fastly will publish log messages to a Google Cloud Pub/Sub topic in the format specified in the Pub/Sub logging object.
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


class ModelLoggingGooglePubsub {
    
    constructor() { 
        
        ModelLoggingGooglePubsub.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelLoggingGooglePubsub();

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
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('topic')) {
                obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
        }
        return obj;
    }


}


ModelLoggingGooglePubsub.prototype['created_at'] = undefined;


ModelLoggingGooglePubsub.prototype['deleted_at'] = undefined;


ModelLoggingGooglePubsub.prototype['updated_at'] = undefined;


ModelLoggingGooglePubsub.prototype['service_id'] = undefined;


ModelLoggingGooglePubsub.prototype['version'] = undefined;


ModelLoggingGooglePubsub.prototype['name'] = undefined;


ModelLoggingGooglePubsub.prototype['placement'] = undefined;


ModelLoggingGooglePubsub.prototype['format_version'] = FormatVersionEnum.2;


ModelLoggingGooglePubsub.prototype['response_condition'] = undefined;


ModelLoggingGooglePubsub.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';


ModelLoggingGooglePubsub.prototype['user'] = undefined;


ModelLoggingGooglePubsub.prototype['secret_key'] = undefined;


ModelLoggingGooglePubsub.prototype['topic'] = undefined;


ModelLoggingGooglePubsub.prototype['project_id'] = undefined;






ModelLoggingGooglePubsub['PlacementEnum'] = {

    
    "none": "none",

    
    "waf_debug": "waf_debug",

    
    "null": "null"
};



ModelLoggingGooglePubsub['FormatVersionEnum'] = {

    
    "1": 1,

    
    "2": 2
};



export default ModelLoggingGooglePubsub;

