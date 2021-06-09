/**
 * Billing address
 * A billing address is used to calculate your bill correctly.
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
import InlineResponse200DataAttributes from './InlineResponse200DataAttributes';
import InlineResponse200DataRelationships from './InlineResponse200DataRelationships';


class InlineResponse200Data {
    
    constructor() { 
        
        InlineResponse200Data.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200Data();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = InlineResponse200DataAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = InlineResponse200DataRelationships.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}


InlineResponse200Data.prototype['type'] = undefined;


InlineResponse200Data.prototype['id'] = undefined;


InlineResponse200Data.prototype['attributes'] = undefined;


InlineResponse200Data.prototype['relationships'] = undefined;






export default InlineResponse200Data;

