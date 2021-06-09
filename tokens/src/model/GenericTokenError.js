/**
 * Tokens
 * An API Token is used to identify who the API call is made on behalf of. It can also be used to restrict what an app can do through authorization scope. Users can create multiple tokens to suit their needs.
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


class GenericTokenError {
    
    constructor() { 
        
        GenericTokenError.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenericTokenError();

            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
        }
        return obj;
    }


}


GenericTokenError.prototype['msg'] = undefined;






export default GenericTokenError;

