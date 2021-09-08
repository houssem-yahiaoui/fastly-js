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

/**
 * The SchemasWafActiveRuleDataAttributes model module.
 * @module model/SchemasWafActiveRuleDataAttributes
 * @version 3.0.0-alpha1
 */
class SchemasWafActiveRuleDataAttributes {
    /**
     * Constructs a new <code>SchemasWafActiveRuleDataAttributes</code>.
     * @alias module:model/SchemasWafActiveRuleDataAttributes
     */
    constructor() { 
        
        SchemasWafActiveRuleDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchemasWafActiveRuleDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasWafActiveRuleDataAttributes} obj Optional instance to populate.
     * @return {module:model/SchemasWafActiveRuleDataAttributes} The populated <code>SchemasWafActiveRuleDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemasWafActiveRuleDataAttributes();

            if (data.hasOwnProperty('modsec_rule_id')) {
                obj['modsec_rule_id'] = ApiClient.convertToType(data['modsec_rule_id'], 'Number');
            }
            if (data.hasOwnProperty('revision')) {
                obj['revision'] = ApiClient.convertToType(data['revision'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ModSecurity rule ID of the associated rule revision.
 * @member {Number} modsec_rule_id
 */
SchemasWafActiveRuleDataAttributes.prototype['modsec_rule_id'] = undefined;

/**
 * Revision number.
 * @member {Number} revision
 */
SchemasWafActiveRuleDataAttributes.prototype['revision'] = undefined;

/**
 * Describes the behavior for the particular rule revision within this firewall version.
 * @member {module:model/SchemasWafActiveRuleDataAttributes.StatusEnum} status
 */
SchemasWafActiveRuleDataAttributes.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
SchemasWafActiveRuleDataAttributes['StatusEnum'] = {

    /**
     * value: "log"
     * @const
     */
    "log": "log",

    /**
     * value: "block"
     * @const
     */
    "block": "block",

    /**
     * value: "score"
     * @const
     */
    "score": "score"
};



export default SchemasWafActiveRuleDataAttributes;

