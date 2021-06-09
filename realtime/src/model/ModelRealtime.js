/**
 * Real-time analytics
 * The real-time analytics API offers a standardized set of data about traffic received by a specified service in one-second time periods up to the last complete second.
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
import RecordDataModel from './RecordDataModel';


class ModelRealtime {
    
    constructor() { 
        
        ModelRealtime.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelRealtime();

            if (data.hasOwnProperty('Timestamp')) {
                obj['Timestamp'] = ApiClient.convertToType(data['Timestamp'], 'Number');
            }
            if (data.hasOwnProperty('AggregateDelay')) {
                obj['AggregateDelay'] = ApiClient.convertToType(data['AggregateDelay'], 'Number');
            }
            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], [RecordDataModel]);
            }
        }
        return obj;
    }


}


ModelRealtime.prototype['Timestamp'] = undefined;


ModelRealtime.prototype['AggregateDelay'] = undefined;


ModelRealtime.prototype['Data'] = undefined;






export default ModelRealtime;

