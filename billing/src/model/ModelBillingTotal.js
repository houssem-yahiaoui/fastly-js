/**
 * Billing
 * Get information on current and past bills.
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ModelBillingTotalExtras from './ModelBillingTotalExtras';


class ModelBillingTotal {
    
    constructor() { 
        
        ModelBillingTotal.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelBillingTotal();

            if (data.hasOwnProperty('bandwidth')) {
                obj['bandwidth'] = ApiClient.convertToType(data['bandwidth'], 'Number');
            }
            if (data.hasOwnProperty('bandwidth_cost')) {
                obj['bandwidth_cost'] = ApiClient.convertToType(data['bandwidth_cost'], 'Number');
            }
            if (data.hasOwnProperty('bandwidth_units')) {
                obj['bandwidth_units'] = ApiClient.convertToType(data['bandwidth_units'], 'String');
            }
            if (data.hasOwnProperty('cost')) {
                obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
            }
            if (data.hasOwnProperty('cost_before_discount')) {
                obj['cost_before_discount'] = ApiClient.convertToType(data['cost_before_discount'], 'Number');
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = ApiClient.convertToType(data['discount'], 'Number');
            }
            if (data.hasOwnProperty('extras')) {
                obj['extras'] = ApiClient.convertToType(data['extras'], [ModelBillingTotalExtras]);
            }
            if (data.hasOwnProperty('extras_cost')) {
                obj['extras_cost'] = ApiClient.convertToType(data['extras_cost'], 'Number');
            }
            if (data.hasOwnProperty('incurred_cost')) {
                obj['incurred_cost'] = ApiClient.convertToType(data['incurred_cost'], 'Number');
            }
            if (data.hasOwnProperty('overage')) {
                obj['overage'] = ApiClient.convertToType(data['overage'], 'Number');
            }
            if (data.hasOwnProperty('plan_code')) {
                obj['plan_code'] = ApiClient.convertToType(data['plan_code'], 'String');
            }
            if (data.hasOwnProperty('plan_minimum')) {
                obj['plan_minimum'] = ApiClient.convertToType(data['plan_minimum'], 'Number');
            }
            if (data.hasOwnProperty('plan_name')) {
                obj['plan_name'] = ApiClient.convertToType(data['plan_name'], 'String');
            }
            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ApiClient.convertToType(data['requests'], 'Number');
            }
            if (data.hasOwnProperty('requests_cost')) {
                obj['requests_cost'] = ApiClient.convertToType(data['requests_cost'], 'Number');
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = ApiClient.convertToType(data['terms'], 'String');
            }
        }
        return obj;
    }


}


ModelBillingTotal.prototype['bandwidth'] = undefined;


ModelBillingTotal.prototype['bandwidth_cost'] = undefined;


ModelBillingTotal.prototype['bandwidth_units'] = undefined;


ModelBillingTotal.prototype['cost'] = undefined;


ModelBillingTotal.prototype['cost_before_discount'] = undefined;


ModelBillingTotal.prototype['discount'] = undefined;


ModelBillingTotal.prototype['extras'] = undefined;


ModelBillingTotal.prototype['extras_cost'] = undefined;


ModelBillingTotal.prototype['incurred_cost'] = undefined;


ModelBillingTotal.prototype['overage'] = undefined;


ModelBillingTotal.prototype['plan_code'] = undefined;


ModelBillingTotal.prototype['plan_minimum'] = undefined;


ModelBillingTotal.prototype['plan_name'] = undefined;


ModelBillingTotal.prototype['requests'] = undefined;


ModelBillingTotal.prototype['requests_cost'] = undefined;


ModelBillingTotal.prototype['terms'] = undefined;






export default ModelBillingTotal;

