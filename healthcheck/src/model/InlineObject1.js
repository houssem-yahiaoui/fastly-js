/**
 * Healthcheck
 * Healthchecks are used to customize the way Fastly checks on your Backends. If an origin server is marked unhealthy due to health checks, Fastly will stop attempting to send requests to it. If all origin servers are marked unhealthy, Fastly will attempt to serve stale. If no stale object is available, a 503 will be returned to the client.
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

            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('check_interval')) {
                obj['check_interval'] = ApiClient.convertToType(data['check_interval'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('expected_response')) {
                obj['expected_response'] = ApiClient.convertToType(data['expected_response'], 'Number');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('http_version')) {
                obj['http_version'] = ApiClient.convertToType(data['http_version'], 'String');
            }
            if (data.hasOwnProperty('initial')) {
                obj['initial'] = ApiClient.convertToType(data['initial'], 'Number');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('threshold')) {
                obj['threshold'] = ApiClient.convertToType(data['threshold'], 'Number');
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
            }
            if (data.hasOwnProperty('window')) {
                obj['window'] = ApiClient.convertToType(data['window'], 'Number');
            }
        }
        return obj;
    }


}


InlineObject1.prototype['service_id'] = undefined;


InlineObject1.prototype['version'] = undefined;


InlineObject1.prototype['check_interval'] = undefined;


InlineObject1.prototype['comment'] = '';


InlineObject1.prototype['expected_response'] = undefined;


InlineObject1.prototype['host'] = undefined;


InlineObject1.prototype['http_version'] = undefined;


InlineObject1.prototype['initial'] = undefined;


InlineObject1.prototype['method'] = undefined;


InlineObject1.prototype['name'] = undefined;


InlineObject1.prototype['path'] = undefined;


InlineObject1.prototype['threshold'] = undefined;


InlineObject1.prototype['timeout'] = undefined;


InlineObject1.prototype['window'] = undefined;






export default InlineObject1;

