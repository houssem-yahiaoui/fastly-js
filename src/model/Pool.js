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
import PoolAllOf from './PoolAllOf';
import TlsCommon from './TlsCommon';


class Pool {
    
    constructor() { 
        TlsCommon.initialize(this);PoolAllOf.initialize(this);
        Pool.initialize(this);
    }

    
    static initialize(obj) { 
    }

    
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pool();
            TlsCommon.constructFromObject(data, obj);
            PoolAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('tls_ca_cert')) {
                obj['tls_ca_cert'] = ApiClient.convertToType(data['tls_ca_cert'], 'String');
            }
            if (data.hasOwnProperty('tls_client_cert')) {
                obj['tls_client_cert'] = ApiClient.convertToType(data['tls_client_cert'], 'String');
            }
            if (data.hasOwnProperty('tls_client_key')) {
                obj['tls_client_key'] = ApiClient.convertToType(data['tls_client_key'], 'String');
            }
            if (data.hasOwnProperty('tls_cert_hostname')) {
                obj['tls_cert_hostname'] = ApiClient.convertToType(data['tls_cert_hostname'], 'String');
            }
            if (data.hasOwnProperty('use_tls')) {
                obj['use_tls'] = ApiClient.convertToType(data['use_tls'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shield')) {
                obj['shield'] = ApiClient.convertToType(data['shield'], 'String');
            }
            if (data.hasOwnProperty('request_condition')) {
                obj['request_condition'] = ApiClient.convertToType(data['request_condition'], 'String');
            }
            if (data.hasOwnProperty('max_conn_default')) {
                obj['max_conn_default'] = ApiClient.convertToType(data['max_conn_default'], 'Number');
            }
            if (data.hasOwnProperty('connect_timeout')) {
                obj['connect_timeout'] = ApiClient.convertToType(data['connect_timeout'], 'Number');
            }
            if (data.hasOwnProperty('first_byte_timeout')) {
                obj['first_byte_timeout'] = ApiClient.convertToType(data['first_byte_timeout'], 'Number');
            }
            if (data.hasOwnProperty('quorum')) {
                obj['quorum'] = ApiClient.convertToType(data['quorum'], 'Number');
            }
            if (data.hasOwnProperty('tls_ciphers')) {
                obj['tls_ciphers'] = ApiClient.convertToType(data['tls_ciphers'], 'String');
            }
            if (data.hasOwnProperty('tls_sni_hostname')) {
                obj['tls_sni_hostname'] = ApiClient.convertToType(data['tls_sni_hostname'], 'String');
            }
            if (data.hasOwnProperty('tls_check_cert')) {
                obj['tls_check_cert'] = ApiClient.convertToType(data['tls_check_cert'], 'Number');
            }
            if (data.hasOwnProperty('min_tls_version')) {
                obj['min_tls_version'] = ApiClient.convertToType(data['min_tls_version'], 'Number');
            }
            if (data.hasOwnProperty('max_tls_version')) {
                obj['max_tls_version'] = ApiClient.convertToType(data['max_tls_version'], 'Number');
            }
            if (data.hasOwnProperty('healthcheck')) {
                obj['healthcheck'] = ApiClient.convertToType(data['healthcheck'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('override_host')) {
                obj['override_host'] = ApiClient.convertToType(data['override_host'], 'String');
            }
        }
        return obj;
    }


}


Pool.prototype['tls_ca_cert'] = 'null';


Pool.prototype['tls_client_cert'] = 'null';


Pool.prototype['tls_client_key'] = 'null';


Pool.prototype['tls_cert_hostname'] = 'null';


Pool.prototype['use_tls'] = UseTlsEnum.no_tls;


Pool.prototype['name'] = undefined;


Pool.prototype['shield'] = 'null';


Pool.prototype['request_condition'] = undefined;


Pool.prototype['max_conn_default'] = undefined;


Pool.prototype['connect_timeout'] = undefined;


Pool.prototype['first_byte_timeout'] = undefined;


Pool.prototype['quorum'] = 75;


Pool.prototype['tls_ciphers'] = undefined;


Pool.prototype['tls_sni_hostname'] = undefined;


Pool.prototype['tls_check_cert'] = undefined;


Pool.prototype['min_tls_version'] = undefined;


Pool.prototype['max_tls_version'] = undefined;


Pool.prototype['healthcheck'] = undefined;


Pool.prototype['comment'] = undefined;


Pool.prototype['type'] = undefined;


Pool.prototype['override_host'] = 'null';


// Implement TlsCommon interface:

TlsCommon.prototype['tls_ca_cert'] = 'null';

TlsCommon.prototype['tls_client_cert'] = 'null';

TlsCommon.prototype['tls_client_key'] = 'null';

TlsCommon.prototype['tls_cert_hostname'] = 'null';

TlsCommon.prototype['use_tls'] = UseTlsEnum.no_tls;
// Implement PoolAllOf interface:

PoolAllOf.prototype['name'] = undefined;

PoolAllOf.prototype['shield'] = 'null';

PoolAllOf.prototype['request_condition'] = undefined;

PoolAllOf.prototype['max_conn_default'] = undefined;

PoolAllOf.prototype['connect_timeout'] = undefined;

PoolAllOf.prototype['first_byte_timeout'] = undefined;

PoolAllOf.prototype['quorum'] = 75;

PoolAllOf.prototype['tls_ciphers'] = undefined;

PoolAllOf.prototype['tls_sni_hostname'] = undefined;

PoolAllOf.prototype['tls_check_cert'] = undefined;

PoolAllOf.prototype['min_tls_version'] = undefined;

PoolAllOf.prototype['max_tls_version'] = undefined;

PoolAllOf.prototype['healthcheck'] = undefined;

PoolAllOf.prototype['comment'] = undefined;

PoolAllOf.prototype['type'] = undefined;

PoolAllOf.prototype['override_host'] = 'null';




Pool['UseTlsEnum'] = {

    
    "no_tls": 0,

    
    "use_tls": 1
};



Pool['TypeEnum'] = {

    
    "random": "random",

    
    "hash": "hash",

    
    "client": "client"
};



export default Pool;

