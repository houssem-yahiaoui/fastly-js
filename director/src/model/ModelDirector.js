/**
 * Director
 * A Director is responsible for balancing requests among a group of Backends. In addition to simply balancing, Directors can be configured to attempt retrying failed requests. Additionally, Directors have a quorum setting which can be used to determine when the Director as a whole is considered \"up\", in order to prevent \"server whack-a-mole\" following an outage as servers come back up. Only directors created via the API can be modified via the API. Directors known as \"autodirectors\" that are created automatically when load balancing groups of servers together cannot be modified or retrieved via the API.
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
import ServiceServiceIdVersionVersionIdDirectorBackends from './ServiceServiceIdVersionVersionIdDirectorBackends';


class ModelDirector {
    
    constructor() { 
        
        ModelDirector.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelDirector();

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
            if (data.hasOwnProperty('backends')) {
                obj['backends'] = ApiClient.convertToType(data['backends'], [ServiceServiceIdVersionVersionIdDirectorBackends]);
            }
            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('quorum')) {
                obj['quorum'] = ApiClient.convertToType(data['quorum'], 'Number');
            }
            if (data.hasOwnProperty('shield')) {
                obj['shield'] = ApiClient.convertToType(data['shield'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('retries')) {
                obj['retries'] = ApiClient.convertToType(data['retries'], 'Number');
            }
        }
        return obj;
    }


}


ModelDirector.prototype['created_at'] = undefined;


ModelDirector.prototype['deleted_at'] = undefined;


ModelDirector.prototype['updated_at'] = undefined;


ModelDirector.prototype['service_id'] = undefined;


ModelDirector.prototype['version'] = undefined;


ModelDirector.prototype['backends'] = undefined;


ModelDirector.prototype['capacity'] = undefined;


ModelDirector.prototype['comment'] = '';


ModelDirector.prototype['name'] = undefined;


ModelDirector.prototype['quorum'] = 75;


ModelDirector.prototype['shield'] = 'null';


ModelDirector.prototype['type'] = TypeEnum.1;


ModelDirector.prototype['retries'] = 5;






ModelDirector['TypeEnum'] = {

    
    "1": 1,

    
    "3": 3,

    
    "4": 4
};



export default ModelDirector;

