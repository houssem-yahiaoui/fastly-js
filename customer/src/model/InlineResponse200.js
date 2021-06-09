/**
 * Customer
 * A Customer is the base object that owns your Users and Services.
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


class InlineResponse200 {
    
    constructor() { 
        
        InlineResponse200.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('email_hash')) {
                obj['email_hash'] = ApiClient.convertToType(data['email_hash'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('limit_services')) {
                obj['limit_services'] = ApiClient.convertToType(data['limit_services'], 'Boolean');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('require_new_password')) {
                obj['require_new_password'] = ApiClient.convertToType(data['require_new_password'], 'Boolean');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('two_factor_auth_enabled')) {
                obj['two_factor_auth_enabled'] = ApiClient.convertToType(data['two_factor_auth_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('two_factor_setup_required')) {
                obj['two_factor_setup_required'] = ApiClient.convertToType(data['two_factor_setup_required'], 'Boolean');
            }
        }
        return obj;
    }


}


InlineResponse200.prototype['created_at'] = undefined;


InlineResponse200.prototype['deleted_at'] = undefined;


InlineResponse200.prototype['updated_at'] = undefined;


InlineResponse200.prototype['login'] = undefined;


InlineResponse200.prototype['name'] = undefined;


InlineResponse200.prototype['customer_id'] = undefined;


InlineResponse200.prototype['email_hash'] = undefined;


InlineResponse200.prototype['id'] = undefined;


InlineResponse200.prototype['limit_services'] = undefined;


InlineResponse200.prototype['locked'] = undefined;


InlineResponse200.prototype['require_new_password'] = undefined;


InlineResponse200.prototype['role'] = undefined;


InlineResponse200.prototype['two_factor_auth_enabled'] = undefined;


InlineResponse200.prototype['two_factor_setup_required'] = undefined;






InlineResponse200['RoleEnum'] = {

    
    "user": "user",

    
    "billing": "billing",

    
    "engineer": "engineer",

    
    "superuser": "superuser"
};



export default InlineResponse200;

