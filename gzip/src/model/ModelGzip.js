/**
 * Gzip
 * Gzip configuration allows you to choose resources to automatically compress.
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


class ModelGzip {
    
    constructor() { 
        
        ModelGzip.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelGzip();

            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('cache_condition')) {
                obj['cache_condition'] = ApiClient.convertToType(data['cache_condition'], 'String');
            }
            if (data.hasOwnProperty('content_types')) {
                obj['content_types'] = ApiClient.convertToType(data['content_types'], 'String');
            }
            if (data.hasOwnProperty('extensions')) {
                obj['extensions'] = ApiClient.convertToType(data['extensions'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}


ModelGzip.prototype['service_id'] = undefined;


ModelGzip.prototype['version'] = undefined;


ModelGzip.prototype['cache_condition'] = undefined;


ModelGzip.prototype['content_types'] = undefined;


ModelGzip.prototype['extensions'] = undefined;


ModelGzip.prototype['name'] = undefined;






export default ModelGzip;

