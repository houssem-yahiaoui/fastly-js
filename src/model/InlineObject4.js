/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit developer.fastly.com/reference/api/ 
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
import WafFirewallsFirewallIdVersionsFirewallVersionNumberExclusionsData from './WafFirewallsFirewallIdVersionsFirewallVersionNumberExclusionsData';


class InlineObject4 {
    
    constructor() { 
        
        InlineObject4.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject4();

            if (data.hasOwnProperty('data')) {
                obj['data'] = WafFirewallsFirewallIdVersionsFirewallVersionNumberExclusionsData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}


InlineObject4.prototype['data'] = undefined;






export default InlineObject4;

