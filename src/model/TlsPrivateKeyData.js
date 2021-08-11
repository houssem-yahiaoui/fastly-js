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

import ApiClient from '../ApiClient';
import AnyOfrelationshipTlsActivationsobject from './AnyOfrelationshipTlsActivationsobject';
import TlsPrivateKeyDataAttributes from './TlsPrivateKeyDataAttributes';
import TypeTlsPrivateKey from './TypeTlsPrivateKey';


class TlsPrivateKeyData {
    
    constructor() { 
        
        TlsPrivateKeyData.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TlsPrivateKeyData();

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeTlsPrivateKey.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = TlsPrivateKeyDataAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = ApiClient.convertToType(data['relationships'], AnyOfrelationshipTlsActivationsobject);
            }
        }
        return obj;
    }


}


TlsPrivateKeyData.prototype['type'] = undefined;


TlsPrivateKeyData.prototype['attributes'] = undefined;


TlsPrivateKeyData.prototype['relationships'] = undefined;






export default TlsPrivateKeyData;

