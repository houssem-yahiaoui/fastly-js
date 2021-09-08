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
import RelationshipCommonNameCommonName from './RelationshipCommonNameCommonName.js';

/**
 * The RelationshipCommonName model module.
 * @module model/RelationshipCommonName
 * @version 3.0.0-alpha1
 */
class RelationshipCommonName {
    /**
     * Constructs a new <code>RelationshipCommonName</code>.
     * @alias module:model/RelationshipCommonName
     */
    constructor() { 
        
        RelationshipCommonName.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipCommonName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipCommonName} obj Optional instance to populate.
     * @return {module:model/RelationshipCommonName} The populated <code>RelationshipCommonName</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipCommonName();

            if (data.hasOwnProperty('common_name')) {
                obj['common_name'] = RelationshipCommonNameCommonName.constructFromObject(data['common_name']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipCommonNameCommonName} common_name
 */
RelationshipCommonName.prototype['common_name'] = undefined;






export default RelationshipCommonName;

