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
import LoggingCommon from './LoggingCommon';
import LoggingElasticsearchAllOf from './LoggingElasticsearchAllOf';
import LoggingFormatVersion from './LoggingFormatVersion';
import LoggingPlacement from './LoggingPlacement';
import LoggingRequestCapsCommon from './LoggingRequestCapsCommon';
import LoggingTlsCommon from './LoggingTlsCommon';

/**
 * The LoggingElasticsearch model module.
 * @module model/LoggingElasticsearch
 * @version 3.0.0-alpha1
 */
class LoggingElasticsearch {
    /**
     * Constructs a new <code>LoggingElasticsearch</code>.
     * @alias module:model/LoggingElasticsearch
     */
    constructor() { 
        LoggingElasticsearch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingElasticsearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingElasticsearch} obj Optional instance to populate.
     * @return {module:model/LoggingElasticsearch} The populated <code>LoggingElasticsearch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingElasticsearch();

            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], Object);
            }
            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = LoggingFormatVersion.constructFromObject(data['format_version']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = LoggingPlacement.constructFromObject(data['placement']);
            }
            if (data.hasOwnProperty('response_condition')) {
                obj['response_condition'] = ApiClient.convertToType(data['response_condition'], 'String');
            }
            if (data.hasOwnProperty('tls_ca_cert')) {
                obj['tls_ca_cert'] = ApiClient.convertToType(data['tls_ca_cert'], 'String');
            }
            if (data.hasOwnProperty('tls_client_cert')) {
                obj['tls_client_cert'] = ApiClient.convertToType(data['tls_client_cert'], 'String');
            }
            if (data.hasOwnProperty('tls_client_key')) {
                obj['tls_client_key'] = ApiClient.convertToType(data['tls_client_key'], 'String');
            }
            if (data.hasOwnProperty('tls_hostname')) {
                obj['tls_hostname'] = ApiClient.convertToType(data['tls_hostname'], 'String');
            }
            if (data.hasOwnProperty('request_max_bytes')) {
                obj['request_max_bytes'] = ApiClient.convertToType(data['request_max_bytes'], 'Number');
            }
            if (data.hasOwnProperty('request_max_entries')) {
                obj['request_max_entries'] = ApiClient.convertToType(data['request_max_entries'], 'Number');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('pipeline')) {
                obj['pipeline'] = ApiClient.convertToType(data['pipeline'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest.
 * @member {Object} format
 */
LoggingElasticsearch.prototype['format'] = undefined;

/**
 * @member {module:model/LoggingFormatVersion} format_version
 */
LoggingElasticsearch.prototype['format_version'] = undefined;

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingElasticsearch.prototype['name'] = undefined;

/**
 * @member {module:model/LoggingPlacement} placement
 */
LoggingElasticsearch.prototype['placement'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingElasticsearch.prototype['response_condition'] = undefined;

/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */
LoggingElasticsearch.prototype['tls_ca_cert'] = 'null';

/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */
LoggingElasticsearch.prototype['tls_client_cert'] = 'null';

/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */
LoggingElasticsearch.prototype['tls_client_key'] = 'null';

/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */
LoggingElasticsearch.prototype['tls_hostname'] = 'null';

/**
 * The maximum number of bytes sent in one request. Defaults `0` for unbounded.
 * @member {Number} request_max_bytes
 * @default 0
 */
LoggingElasticsearch.prototype['request_max_bytes'] = 0;

/**
 * The maximum number of logs sent in one request. Defaults `0` for unbounded.
 * @member {Number} request_max_entries
 * @default 0
 */
LoggingElasticsearch.prototype['request_max_entries'] = 0;

/**
 * The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, `#{%F}` will interpolate as `YYYY-MM-DD` with today's date.
 * @member {String} index
 */
LoggingElasticsearch.prototype['index'] = undefined;

/**
 * Basic Auth password.
 * @member {String} password
 */
LoggingElasticsearch.prototype['password'] = undefined;

/**
 * The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html).
 * @member {String} pipeline
 */
LoggingElasticsearch.prototype['pipeline'] = undefined;

/**
 * The URL to stream logs to. Must use HTTPS.
 * @member {String} url
 */
LoggingElasticsearch.prototype['url'] = undefined;

/**
 * Basic Auth username.
 * @member {String} user
 */
LoggingElasticsearch.prototype['user'] = undefined;






export default LoggingElasticsearch;

