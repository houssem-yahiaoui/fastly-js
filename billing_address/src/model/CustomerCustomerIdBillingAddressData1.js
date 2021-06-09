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


class CustomerCustomerIdBillingAddressData1 {
    
    constructor() { 
        
        CustomerCustomerIdBillingAddressData1.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerCustomerIdBillingAddressData1();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = InlineResponse200DataAttributes.constructFromObject(data['attributes']);
            }
        }
        return obj;
    }


}


CustomerCustomerIdBillingAddressData1.prototype['type'] = undefined;


CustomerCustomerIdBillingAddressData1.prototype['id'] = undefined;


CustomerCustomerIdBillingAddressData1.prototype['attributes'] = undefined;






export default CustomerCustomerIdBillingAddressData1;

