/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Billing from './Billing';
import BillingResponseAllOf from './BillingResponseAllOf';
import BillingResponseLineItem from './BillingResponseLineItem';
import BillingStatus from './BillingStatus';
import BillingTotal from './BillingTotal';

/**
 * The BillingResponse model module.
 * @module model/BillingResponse
 * @version 4.1.1
 */
class BillingResponse {
    /**
     * Constructs a new <code>BillingResponse</code>.
     * @alias module:model/BillingResponse
     * @implements module:model/Billing
     * @implements module:model/BillingResponseAllOf
     */
    constructor() { 
        Billing.initialize(this);BillingResponseAllOf.initialize(this);
        BillingResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingResponse} obj Optional instance to populate.
     * @return {module:model/BillingResponse} The populated <code>BillingResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingResponse();
            Billing.constructFromObject(data, obj);
            BillingResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('end_time')) {
                obj['end_time'] = ApiClient.convertToType(data['end_time'], 'Date');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
            }
            if (data.hasOwnProperty('invoice_id')) {
                obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('vendor_state')) {
                obj['vendor_state'] = ApiClient.convertToType(data['vendor_state'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = BillingStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = BillingTotal.constructFromObject(data['total']);
            }
            if (data.hasOwnProperty('regions')) {
                obj['regions'] = ApiClient.convertToType(data['regions'], {'String': {'String': Object}});
            }
            if (data.hasOwnProperty('line_items')) {
                obj['line_items'] = ApiClient.convertToType(data['line_items'], [BillingResponseLineItem]);
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} end_time
 */
BillingResponse.prototype['end_time'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} start_time
 */
BillingResponse.prototype['start_time'] = undefined;

/**
 * @member {String} invoice_id
 */
BillingResponse.prototype['invoice_id'] = undefined;

/**
 * @member {String} customer_id
 */
BillingResponse.prototype['customer_id'] = undefined;

/**
 * The current state of our third-party billing vendor. One of `up` or `down`.
 * @member {String} vendor_state
 */
BillingResponse.prototype['vendor_state'] = undefined;

/**
 * @member {module:model/BillingStatus} status
 */
BillingResponse.prototype['status'] = undefined;

/**
 * @member {module:model/BillingTotal} total
 */
BillingResponse.prototype['total'] = undefined;

/**
 * Breakdown of regional data for products that are region based.
 * @member {Object.<String, Object.<String, Object>>} regions
 */
BillingResponse.prototype['regions'] = undefined;

/**
 * @member {Array.<module:model/BillingResponseLineItem>} line_items
 */
BillingResponse.prototype['line_items'] = undefined;


// Implement Billing interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} end_time
 */
Billing.prototype['end_time'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} start_time
 */
Billing.prototype['start_time'] = undefined;
/**
 * @member {String} invoice_id
 */
Billing.prototype['invoice_id'] = undefined;
/**
 * @member {String} customer_id
 */
Billing.prototype['customer_id'] = undefined;
/**
 * The current state of our third-party billing vendor. One of `up` or `down`.
 * @member {String} vendor_state
 */
Billing.prototype['vendor_state'] = undefined;
/**
 * @member {module:model/BillingStatus} status
 */
Billing.prototype['status'] = undefined;
/**
 * @member {module:model/BillingTotal} total
 */
Billing.prototype['total'] = undefined;
/**
 * Breakdown of regional data for products that are region based.
 * @member {Object.<String, Object.<String, Object>>} regions
 */
Billing.prototype['regions'] = undefined;
// Implement BillingResponseAllOf interface:
/**
 * @member {Array.<module:model/BillingResponseLineItem>} line_items
 */
BillingResponseAllOf.prototype['line_items'] = undefined;




export default BillingResponse;

