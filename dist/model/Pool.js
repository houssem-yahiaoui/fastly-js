"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PoolAllOf = _interopRequireDefault(require("./PoolAllOf"));

var _TlsCommon = _interopRequireDefault(require("./TlsCommon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Pool model module.
 * @module model/Pool
 * @version 3.0.0-alpha1
 */
var Pool = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Pool</code>.
   * @alias module:model/Pool
   * @implements module:model/TlsCommon
   * @implements module:model/PoolAllOf
   */
  function Pool() {
    _classCallCheck(this, Pool);

    _TlsCommon["default"].initialize(this);

    _PoolAllOf["default"].initialize(this);

    Pool.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Pool, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Pool</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pool} obj Optional instance to populate.
     * @return {module:model/Pool} The populated <code>Pool</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Pool();

        _TlsCommon["default"].constructFromObject(data, obj);

        _PoolAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('tls_ca_cert')) {
          obj['tls_ca_cert'] = _ApiClient["default"].convertToType(data['tls_ca_cert'], 'String');
        }

        if (data.hasOwnProperty('tls_client_cert')) {
          obj['tls_client_cert'] = _ApiClient["default"].convertToType(data['tls_client_cert'], 'String');
        }

        if (data.hasOwnProperty('tls_client_key')) {
          obj['tls_client_key'] = _ApiClient["default"].convertToType(data['tls_client_key'], 'String');
        }

        if (data.hasOwnProperty('tls_cert_hostname')) {
          obj['tls_cert_hostname'] = _ApiClient["default"].convertToType(data['tls_cert_hostname'], 'String');
        }

        if (data.hasOwnProperty('use_tls')) {
          obj['use_tls'] = _ApiClient["default"].convertToType(data['use_tls'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('shield')) {
          obj['shield'] = _ApiClient["default"].convertToType(data['shield'], 'String');
        }

        if (data.hasOwnProperty('request_condition')) {
          obj['request_condition'] = _ApiClient["default"].convertToType(data['request_condition'], 'String');
        }

        if (data.hasOwnProperty('max_conn_default')) {
          obj['max_conn_default'] = _ApiClient["default"].convertToType(data['max_conn_default'], 'Number');
        }

        if (data.hasOwnProperty('connect_timeout')) {
          obj['connect_timeout'] = _ApiClient["default"].convertToType(data['connect_timeout'], 'Number');
        }

        if (data.hasOwnProperty('first_byte_timeout')) {
          obj['first_byte_timeout'] = _ApiClient["default"].convertToType(data['first_byte_timeout'], 'Number');
        }

        if (data.hasOwnProperty('quorum')) {
          obj['quorum'] = _ApiClient["default"].convertToType(data['quorum'], 'Number');
        }

        if (data.hasOwnProperty('tls_ciphers')) {
          obj['tls_ciphers'] = _ApiClient["default"].convertToType(data['tls_ciphers'], 'String');
        }

        if (data.hasOwnProperty('tls_sni_hostname')) {
          obj['tls_sni_hostname'] = _ApiClient["default"].convertToType(data['tls_sni_hostname'], 'String');
        }

        if (data.hasOwnProperty('tls_check_cert')) {
          obj['tls_check_cert'] = _ApiClient["default"].convertToType(data['tls_check_cert'], 'Number');
        }

        if (data.hasOwnProperty('min_tls_version')) {
          obj['min_tls_version'] = _ApiClient["default"].convertToType(data['min_tls_version'], 'Number');
        }

        if (data.hasOwnProperty('max_tls_version')) {
          obj['max_tls_version'] = _ApiClient["default"].convertToType(data['max_tls_version'], 'Number');
        }

        if (data.hasOwnProperty('healthcheck')) {
          obj['healthcheck'] = _ApiClient["default"].convertToType(data['healthcheck'], 'String');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('override_host')) {
          obj['override_host'] = _ApiClient["default"].convertToType(data['override_host'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Pool;
}();
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
 * List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.0.2/man1/ciphers) for details). Optional.
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

Pool.prototype['override_host'] = 'null'; // Implement TlsCommon interface:

/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */

_TlsCommon["default"].prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */

_TlsCommon["default"].prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */

_TlsCommon["default"].prototype['tls_client_key'] = 'null';
/**
 * The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
 * @member {String} tls_cert_hostname
 * @default 'null'
 */

_TlsCommon["default"].prototype['tls_cert_hostname'] = 'null';
/**
 * Whether to use TLS.
 * @member {module:model/TlsCommon.UseTlsEnum} use_tls
 * @default UseTlsEnum.no_tls
 */

_TlsCommon["default"].prototype['use_tls'] = undefined; // Implement PoolAllOf interface:

/**
 * Name for the Pool.
 * @member {String} name
 */

_PoolAllOf["default"].prototype['name'] = undefined;
/**
 * Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
 * @member {String} shield
 * @default 'null'
 */

_PoolAllOf["default"].prototype['shield'] = 'null';
/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */

_PoolAllOf["default"].prototype['request_condition'] = undefined;
/**
 * Maximum number of connections. Optional.
 * @member {Number} max_conn_default
 * @default 200
 */

_PoolAllOf["default"].prototype['max_conn_default'] = 200;
/**
 * How long to wait for a timeout in milliseconds. Optional.
 * @member {Number} connect_timeout
 */

_PoolAllOf["default"].prototype['connect_timeout'] = undefined;
/**
 * How long to wait for the first byte in milliseconds. Optional.
 * @member {Number} first_byte_timeout
 */

_PoolAllOf["default"].prototype['first_byte_timeout'] = undefined;
/**
 * Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
 * @member {Number} quorum
 * @default 75
 */

_PoolAllOf["default"].prototype['quorum'] = 75;
/**
 * List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.0.2/man1/ciphers) for details). Optional.
 * @member {String} tls_ciphers
 */

_PoolAllOf["default"].prototype['tls_ciphers'] = undefined;
/**
 * SNI hostname. Optional.
 * @member {String} tls_sni_hostname
 */

_PoolAllOf["default"].prototype['tls_sni_hostname'] = undefined;
/**
 * Be strict on checking TLS certs. Optional.
 * @member {Number} tls_check_cert
 */

_PoolAllOf["default"].prototype['tls_check_cert'] = undefined;
/**
 * Minimum allowed TLS version on connections to this server. Optional.
 * @member {Number} min_tls_version
 */

_PoolAllOf["default"].prototype['min_tls_version'] = undefined;
/**
 * Maximum allowed TLS version on connections to this server. Optional.
 * @member {Number} max_tls_version
 */

_PoolAllOf["default"].prototype['max_tls_version'] = undefined;
/**
 * Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
 * @member {String} healthcheck
 */

_PoolAllOf["default"].prototype['healthcheck'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

_PoolAllOf["default"].prototype['comment'] = undefined;
/**
 * What type of load balance group to use.
 * @member {module:model/PoolAllOf.TypeEnum} type
 */

_PoolAllOf["default"].prototype['type'] = undefined;
/**
 * The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
 * @member {String} override_host
 * @default 'null'
 */

_PoolAllOf["default"].prototype['override_host'] = 'null';
/**
 * Allowed values for the <code>use_tls</code> property.
 * @enum {Number}
 * @readonly
 */

Pool['UseTlsEnum'] = {
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

Pool['TypeEnum'] = {
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
var _default = Pool;
exports["default"] = _default;