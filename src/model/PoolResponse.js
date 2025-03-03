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
import Pool from './Pool';
import PoolResponseAllOf from './PoolResponseAllOf';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The PoolResponse model module.
 * @module model/PoolResponse
 * @version 4.1.1
 */
class PoolResponse {
    /**
     * Constructs a new <code>PoolResponse</code>.
     * @alias module:model/PoolResponse
     * @implements module:model/Pool
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersion
     * @implements module:model/PoolResponseAllOf
     */
    constructor() { 
        Pool.initialize(this);Timestamps.initialize(this);ServiceIdAndVersion.initialize(this);PoolResponseAllOf.initialize(this);
        PoolResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PoolResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PoolResponse} obj Optional instance to populate.
     * @return {module:model/PoolResponse} The populated <code>PoolResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PoolResponse();
            Pool.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersion.constructFromObject(data, obj);
            PoolResponseAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */
PoolResponse.prototype['tls_ca_cert'] = 'null';

/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */
PoolResponse.prototype['tls_client_cert'] = 'null';

/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */
PoolResponse.prototype['tls_client_key'] = 'null';

/**
 * The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
 * @member {String} tls_cert_hostname
 * @default 'null'
 */
PoolResponse.prototype['tls_cert_hostname'] = 'null';

/**
 * Whether to use TLS.
 * @member {module:model/PoolResponse.UseTlsEnum} use_tls
 * @default UseTlsEnum.no_tls
 */
PoolResponse.prototype['use_tls'] = undefined;

/**
 * Name for the Pool.
 * @member {String} name
 */
PoolResponse.prototype['name'] = undefined;

/**
 * Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
 * @member {String} shield
 * @default 'null'
 */
PoolResponse.prototype['shield'] = 'null';

/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */
PoolResponse.prototype['request_condition'] = undefined;

/**
 * Maximum number of connections. Optional.
 * @member {Number} max_conn_default
 * @default 200
 */
PoolResponse.prototype['max_conn_default'] = 200;

/**
 * How long to wait for a timeout in milliseconds. Optional.
 * @member {Number} connect_timeout
 */
PoolResponse.prototype['connect_timeout'] = undefined;

/**
 * How long to wait for the first byte in milliseconds. Optional.
 * @member {Number} first_byte_timeout
 */
PoolResponse.prototype['first_byte_timeout'] = undefined;

/**
 * Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
 * @member {Number} quorum
 * @default 75
 */
PoolResponse.prototype['quorum'] = 75;

/**
 * List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.1.1/man1/ciphers.html) for details). Optional.
 * @member {String} tls_ciphers
 */
PoolResponse.prototype['tls_ciphers'] = undefined;

/**
 * SNI hostname. Optional.
 * @member {String} tls_sni_hostname
 */
PoolResponse.prototype['tls_sni_hostname'] = undefined;

/**
 * Be strict on checking TLS certs. Optional.
 * @member {Number} tls_check_cert
 */
PoolResponse.prototype['tls_check_cert'] = undefined;

/**
 * Minimum allowed TLS version on connections to this server. Optional.
 * @member {Number} min_tls_version
 */
PoolResponse.prototype['min_tls_version'] = undefined;

/**
 * Maximum allowed TLS version on connections to this server. Optional.
 * @member {Number} max_tls_version
 */
PoolResponse.prototype['max_tls_version'] = undefined;

/**
 * Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
 * @member {String} healthcheck
 */
PoolResponse.prototype['healthcheck'] = undefined;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
PoolResponse.prototype['comment'] = undefined;

/**
 * What type of load balance group to use.
 * @member {module:model/PoolResponse.TypeEnum} type
 */
PoolResponse.prototype['type'] = undefined;

/**
 * The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
 * @member {String} override_host
 * @default 'null'
 */
PoolResponse.prototype['override_host'] = 'null';

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
PoolResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
PoolResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
PoolResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
PoolResponse.prototype['service_id'] = undefined;

/**
 * @member {Number} version
 */
PoolResponse.prototype['version'] = undefined;

/**
 * @member {String} id
 */
PoolResponse.prototype['id'] = undefined;


// Implement Pool interface:
/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */
Pool.prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */
Pool.prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */
Pool.prototype['tls_client_key'] = 'null';
/**
 * The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
 * @member {String} tls_cert_hostname
 * @default 'null'
 */
Pool.prototype['tls_cert_hostname'] = 'null';
/**
 * Whether to use TLS.
 * @member {module:model/Pool.UseTlsEnum} use_tls
 * @default UseTlsEnum.no_tls
 */
Pool.prototype['use_tls'] = undefined;
/**
 * Name for the Pool.
 * @member {String} name
 */
Pool.prototype['name'] = undefined;
/**
 * Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
 * @member {String} shield
 * @default 'null'
 */
Pool.prototype['shield'] = 'null';
/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */
Pool.prototype['request_condition'] = undefined;
/**
 * Maximum number of connections. Optional.
 * @member {Number} max_conn_default
 * @default 200
 */
Pool.prototype['max_conn_default'] = 200;
/**
 * How long to wait for a timeout in milliseconds. Optional.
 * @member {Number} connect_timeout
 */
Pool.prototype['connect_timeout'] = undefined;
/**
 * How long to wait for the first byte in milliseconds. Optional.
 * @member {Number} first_byte_timeout
 */
Pool.prototype['first_byte_timeout'] = undefined;
/**
 * Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
 * @member {Number} quorum
 * @default 75
 */
Pool.prototype['quorum'] = 75;
/**
 * List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.1.1/man1/ciphers.html) for details). Optional.
 * @member {String} tls_ciphers
 */
Pool.prototype['tls_ciphers'] = undefined;
/**
 * SNI hostname. Optional.
 * @member {String} tls_sni_hostname
 */
Pool.prototype['tls_sni_hostname'] = undefined;
/**
 * Be strict on checking TLS certs. Optional.
 * @member {Number} tls_check_cert
 */
Pool.prototype['tls_check_cert'] = undefined;
/**
 * Minimum allowed TLS version on connections to this server. Optional.
 * @member {Number} min_tls_version
 */
Pool.prototype['min_tls_version'] = undefined;
/**
 * Maximum allowed TLS version on connections to this server. Optional.
 * @member {Number} max_tls_version
 */
Pool.prototype['max_tls_version'] = undefined;
/**
 * Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
 * @member {String} healthcheck
 */
Pool.prototype['healthcheck'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */
Pool.prototype['comment'] = undefined;
/**
 * What type of load balance group to use.
 * @member {module:model/Pool.TypeEnum} type
 */
Pool.prototype['type'] = undefined;
/**
 * The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
 * @member {String} override_host
 * @default 'null'
 */
Pool.prototype['override_host'] = 'null';
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement ServiceIdAndVersion interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersion.prototype['service_id'] = undefined;
/**
 * @member {Number} version
 */
ServiceIdAndVersion.prototype['version'] = undefined;
// Implement PoolResponseAllOf interface:
/**
 * @member {String} id
 */
PoolResponseAllOf.prototype['id'] = undefined;



/**
 * Allowed values for the <code>use_tls</code> property.
 * @enum {Number}
 * @readonly
 */
PoolResponse['UseTlsEnum'] = {

    /**
     * value: 0
     * @const
     */
    "no_tls": 0,

    /**
     * value: 1
     * @const
     */
    "use_tls": 1
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
PoolResponse['TypeEnum'] = {

    /**
     * value: "random"
     * @const
     */
    "random": "random",

    /**
     * value: "hash"
     * @const
     */
    "hash": "hash",

    /**
     * value: "client"
     * @const
     */
    "client": "client"
};



export default PoolResponse;

