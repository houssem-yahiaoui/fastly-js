/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient.js';
import RoleUser from './RoleUser.js';
import SchemasUserResponseAllOf from './SchemasUserResponseAllOf.js';
import Timestamps from './Timestamps.js';
import User from './User.js';

/**
 * The SchemasUserResponse model module.
 * @module model/SchemasUserResponse
 * @version 3.0.0-alpha1
 */
class SchemasUserResponse {
    /**
     * Constructs a new <code>SchemasUserResponse</code>.
     * @alias module:model/SchemasUserResponse
     * @implements module:model/User
     * @implements module:model/Timestamps
     * @implements module:model/SchemasUserResponseAllOf
     */
    constructor() { 
        User.initialize(this);Timestamps.initialize(this);SchemasUserResponseAllOf.initialize(this);
        SchemasUserResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchemasUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasUserResponse} obj Optional instance to populate.
     * @return {module:model/SchemasUserResponse} The populated <code>SchemasUserResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemasUserResponse();
            User.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            SchemasUserResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('limit_services')) {
                obj['limit_services'] = ApiClient.convertToType(data['limit_services'], 'Boolean');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('require_new_password')) {
                obj['require_new_password'] = ApiClient.convertToType(data['require_new_password'], 'Boolean');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = RoleUser.constructFromObject(data['role']);
            }
            if (data.hasOwnProperty('two_factor_auth_enabled')) {
                obj['two_factor_auth_enabled'] = ApiClient.convertToType(data['two_factor_auth_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('two_factor_setup_required')) {
                obj['two_factor_setup_required'] = ApiClient.convertToType(data['two_factor_setup_required'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
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
        }
        return obj;
    }


}

/**
 * Indicates that the user has limited access to the customer's services.
 * @member {Boolean} limit_services
 */
SchemasUserResponse.prototype['limit_services'] = undefined;

/**
 * Indicates whether the is account is locked for editing or not.
 * @member {Boolean} locked
 */
SchemasUserResponse.prototype['locked'] = undefined;

/**
 * The login associated with the user (typically, an email address).
 * @member {String} login
 */
SchemasUserResponse.prototype['login'] = undefined;

/**
 * The real life name of the user.
 * @member {String} name
 */
SchemasUserResponse.prototype['name'] = undefined;

/**
 * Indicates if a new password is required at next login.
 * @member {Boolean} require_new_password
 */
SchemasUserResponse.prototype['require_new_password'] = undefined;

/**
 * @member {module:model/RoleUser} role
 */
SchemasUserResponse.prototype['role'] = undefined;

/**
 * Indicates if 2FA is enabled on the user.
 * @member {Boolean} two_factor_auth_enabled
 */
SchemasUserResponse.prototype['two_factor_auth_enabled'] = undefined;

/**
 * Indicates if 2FA is required by the user's customer account.
 * @member {Boolean} two_factor_setup_required
 */
SchemasUserResponse.prototype['two_factor_setup_required'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */
SchemasUserResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */
SchemasUserResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */
SchemasUserResponse.prototype['updated_at'] = undefined;

/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */
SchemasUserResponse.prototype['customer_id'] = undefined;

/**
 * The alphanumeric string identifying a email login.
 * @member {String} email_hash
 */
SchemasUserResponse.prototype['email_hash'] = undefined;

/**
 * Alphanumeric string identifying the user.
 * @member {String} id
 */
SchemasUserResponse.prototype['id'] = undefined;


// Implement User interface:
/**
 * Indicates that the user has limited access to the customer's services.
 * @member {Boolean} limit_services
 */
User.prototype['limit_services'] = undefined;
/**
 * Indicates whether the is account is locked for editing or not.
 * @member {Boolean} locked
 */
User.prototype['locked'] = undefined;
/**
 * The login associated with the user (typically, an email address).
 * @member {String} login
 */
User.prototype['login'] = undefined;
/**
 * The real life name of the user.
 * @member {String} name
 */
User.prototype['name'] = undefined;
/**
 * Indicates if a new password is required at next login.
 * @member {Boolean} require_new_password
 */
User.prototype['require_new_password'] = undefined;
/**
 * @member {module:model/RoleUser} role
 */
User.prototype['role'] = undefined;
/**
 * Indicates if 2FA is enabled on the user.
 * @member {Boolean} two_factor_auth_enabled
 */
User.prototype['two_factor_auth_enabled'] = undefined;
/**
 * Indicates if 2FA is required by the user's customer account.
 * @member {Boolean} two_factor_setup_required
 */
User.prototype['two_factor_setup_required'] = undefined;
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement SchemasUserResponseAllOf interface:
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */
SchemasUserResponseAllOf.prototype['customer_id'] = undefined;
/**
 * The alphanumeric string identifying a email login.
 * @member {String} email_hash
 */
SchemasUserResponseAllOf.prototype['email_hash'] = undefined;
/**
 * Alphanumeric string identifying the user.
 * @member {String} id
 */
SchemasUserResponseAllOf.prototype['id'] = undefined;




export default SchemasUserResponse;

