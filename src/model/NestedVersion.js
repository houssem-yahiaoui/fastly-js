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
import BackendResponse from './BackendResponse';
import CacheSettingResponse from './CacheSettingResponse';
import ConditionResponse from './ConditionResponse';
import Director from './Director';
import DomainResponse from './DomainResponse';
import GzipResponse from './GzipResponse';
import HeaderResponse from './HeaderResponse';
import HealthcheckResponse from './HealthcheckResponse';
import ResponseObjectResponse from './ResponseObjectResponse';
import SchemasRequestSettingsResponse from './SchemasRequestSettingsResponse';
import SchemasSnippetResponse from './SchemasSnippetResponse';
import SchemasVclResponse from './SchemasVclResponse';
import SchemasVersionResponse from './SchemasVersionResponse';
import Settings from './Settings';
import VersionDetail from './VersionDetail';

/**
 * The NestedVersion model module.
 * @module model/NestedVersion
 * @version 3.0.0-alpha1
 */
class NestedVersion {
    /**
     * Constructs a new <code>NestedVersion</code>.
     * @alias module:model/NestedVersion
     * @implements module:model/SchemasVersionResponse
     * @implements module:model/VersionDetail
     */
    constructor() { 
        SchemasVersionResponse.initialize(this);VersionDetail.initialize(this);
        NestedVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NestedVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NestedVersion} obj Optional instance to populate.
     * @return {module:model/NestedVersion} The populated <code>NestedVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NestedVersion();
            SchemasVersionResponse.constructFromObject(data, obj);
            VersionDetail.constructFromObject(data, obj);

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('deployed')) {
                obj['deployed'] = ApiClient.convertToType(data['deployed'], 'Boolean');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('staging')) {
                obj['staging'] = ApiClient.convertToType(data['staging'], 'Boolean');
            }
            if (data.hasOwnProperty('testing')) {
                obj['testing'] = ApiClient.convertToType(data['testing'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('backends')) {
                obj['backends'] = ApiClient.convertToType(data['backends'], [BackendResponse]);
            }
            if (data.hasOwnProperty('cache_settings')) {
                obj['cache_settings'] = ApiClient.convertToType(data['cache_settings'], [CacheSettingResponse]);
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [ConditionResponse]);
            }
            if (data.hasOwnProperty('directors')) {
                obj['directors'] = ApiClient.convertToType(data['directors'], [Director]);
            }
            if (data.hasOwnProperty('domains')) {
                obj['domains'] = ApiClient.convertToType(data['domains'], [DomainResponse]);
            }
            if (data.hasOwnProperty('gzips')) {
                obj['gzips'] = ApiClient.convertToType(data['gzips'], [GzipResponse]);
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], [HeaderResponse]);
            }
            if (data.hasOwnProperty('healthchecks')) {
                obj['healthchecks'] = ApiClient.convertToType(data['healthchecks'], [HealthcheckResponse]);
            }
            if (data.hasOwnProperty('request_settings')) {
                obj['request_settings'] = ApiClient.convertToType(data['request_settings'], [SchemasRequestSettingsResponse]);
            }
            if (data.hasOwnProperty('response_objects')) {
                obj['response_objects'] = ApiClient.convertToType(data['response_objects'], [ResponseObjectResponse]);
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = ApiClient.convertToType(data['settings'], Settings);
            }
            if (data.hasOwnProperty('snippets')) {
                obj['snippets'] = ApiClient.convertToType(data['snippets'], [SchemasSnippetResponse]);
            }
            if (data.hasOwnProperty('vcls')) {
                obj['vcls'] = ApiClient.convertToType(data['vcls'], [SchemasVclResponse]);
            }
            if (data.hasOwnProperty('wordpress')) {
                obj['wordpress'] = ApiClient.convertToType(data['wordpress'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * Whether this is the active version or not.
 * @member {Boolean} active
 * @default false
 */
NestedVersion.prototype['active'] = false;

/**
 * A freeform descriptive note.
 * @member {String} comment
 */
NestedVersion.prototype['comment'] = undefined;

/**
 * Unused at this time.
 * @member {Boolean} deployed
 */
NestedVersion.prototype['deployed'] = undefined;

/**
 * Whether this version is locked or not. Objects can not be added or edited on locked versions.
 * @member {Boolean} locked
 * @default false
 */
NestedVersion.prototype['locked'] = false;

/**
 * The number of this version.
 * @member {Number} number
 */
NestedVersion.prototype['number'] = undefined;

/**
 * Unused at this time.
 * @member {Boolean} staging
 * @default false
 */
NestedVersion.prototype['staging'] = false;

/**
 * Unused at this time.
 * @member {Boolean} testing
 * @default false
 */
NestedVersion.prototype['testing'] = false;

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */
NestedVersion.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */
NestedVersion.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */
NestedVersion.prototype['updated_at'] = undefined;

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
NestedVersion.prototype['service_id'] = undefined;

/**
 * List of backends associated to this service.
 * @member {Array.<module:model/BackendResponse>} backends
 */
NestedVersion.prototype['backends'] = undefined;

/**
 * List of cache settings associated to this service.
 * @member {Array.<module:model/CacheSettingResponse>} cache_settings
 */
NestedVersion.prototype['cache_settings'] = undefined;

/**
 * List of conditions associated to this service.
 * @member {Array.<module:model/ConditionResponse>} conditions
 */
NestedVersion.prototype['conditions'] = undefined;

/**
 * List of directors associated to this service.
 * @member {Array.<module:model/Director>} directors
 */
NestedVersion.prototype['directors'] = undefined;

/**
 * List of domains associated to this service.
 * @member {Array.<module:model/DomainResponse>} domains
 */
NestedVersion.prototype['domains'] = undefined;

/**
 * List of gzip rules associated to this service.
 * @member {Array.<module:model/GzipResponse>} gzips
 */
NestedVersion.prototype['gzips'] = undefined;

/**
 * List of headers associated to this service.
 * @member {Array.<module:model/HeaderResponse>} headers
 */
NestedVersion.prototype['headers'] = undefined;

/**
 * List of healthchecks associated to this service.
 * @member {Array.<module:model/HealthcheckResponse>} healthchecks
 */
NestedVersion.prototype['healthchecks'] = undefined;

/**
 * List of request settings for this service.
 * @member {Array.<module:model/SchemasRequestSettingsResponse>} request_settings
 */
NestedVersion.prototype['request_settings'] = undefined;

/**
 * List of response objects for this service.
 * @member {Array.<module:model/ResponseObjectResponse>} response_objects
 */
NestedVersion.prototype['response_objects'] = undefined;

/**
 * @member {module:model/Settings} settings
 */
NestedVersion.prototype['settings'] = undefined;

/**
 * List of VCL snippets for this service.
 * @member {Array.<module:model/SchemasSnippetResponse>} snippets
 */
NestedVersion.prototype['snippets'] = undefined;

/**
 * List of VCL files for this service.
 * @member {Array.<module:model/SchemasVclResponse>} vcls
 */
NestedVersion.prototype['vcls'] = undefined;

/**
 * A list of Wordpress rules with this service.
 * @member {Array.<Object>} wordpress
 */
NestedVersion.prototype['wordpress'] = undefined;


// Implement SchemasVersionResponse interface:
/**
 * Whether this is the active version or not.
 * @member {Boolean} active
 * @default false
 */
SchemasVersionResponse.prototype['active'] = false;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */
SchemasVersionResponse.prototype['comment'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} deployed
 */
SchemasVersionResponse.prototype['deployed'] = undefined;
/**
 * Whether this version is locked or not. Objects can not be added or edited on locked versions.
 * @member {Boolean} locked
 * @default false
 */
SchemasVersionResponse.prototype['locked'] = false;
/**
 * The number of this version.
 * @member {Number} number
 */
SchemasVersionResponse.prototype['number'] = undefined;
/**
 * Unused at this time.
 * @member {Boolean} staging
 * @default false
 */
SchemasVersionResponse.prototype['staging'] = false;
/**
 * Unused at this time.
 * @member {Boolean} testing
 * @default false
 */
SchemasVersionResponse.prototype['testing'] = false;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */
SchemasVersionResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */
SchemasVersionResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */
SchemasVersionResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
SchemasVersionResponse.prototype['service_id'] = undefined;
// Implement VersionDetail interface:
/**
 * List of backends associated to this service.
 * @member {Array.<module:model/BackendResponse>} backends
 */
VersionDetail.prototype['backends'] = undefined;
/**
 * List of cache settings associated to this service.
 * @member {Array.<module:model/CacheSettingResponse>} cache_settings
 */
VersionDetail.prototype['cache_settings'] = undefined;
/**
 * List of conditions associated to this service.
 * @member {Array.<module:model/ConditionResponse>} conditions
 */
VersionDetail.prototype['conditions'] = undefined;
/**
 * List of directors associated to this service.
 * @member {Array.<module:model/Director>} directors
 */
VersionDetail.prototype['directors'] = undefined;
/**
 * List of domains associated to this service.
 * @member {Array.<module:model/DomainResponse>} domains
 */
VersionDetail.prototype['domains'] = undefined;
/**
 * List of gzip rules associated to this service.
 * @member {Array.<module:model/GzipResponse>} gzips
 */
VersionDetail.prototype['gzips'] = undefined;
/**
 * List of headers associated to this service.
 * @member {Array.<module:model/HeaderResponse>} headers
 */
VersionDetail.prototype['headers'] = undefined;
/**
 * List of healthchecks associated to this service.
 * @member {Array.<module:model/HealthcheckResponse>} healthchecks
 */
VersionDetail.prototype['healthchecks'] = undefined;
/**
 * List of request settings for this service.
 * @member {Array.<module:model/SchemasRequestSettingsResponse>} request_settings
 */
VersionDetail.prototype['request_settings'] = undefined;
/**
 * List of response objects for this service.
 * @member {Array.<module:model/ResponseObjectResponse>} response_objects
 */
VersionDetail.prototype['response_objects'] = undefined;
/**
 * @member {module:model/Settings} settings
 */
VersionDetail.prototype['settings'] = undefined;
/**
 * List of VCL snippets for this service.
 * @member {Array.<module:model/SchemasSnippetResponse>} snippets
 */
VersionDetail.prototype['snippets'] = undefined;
/**
 * List of VCL files for this service.
 * @member {Array.<module:model/SchemasVclResponse>} vcls
 */
VersionDetail.prototype['vcls'] = undefined;
/**
 * A list of Wordpress rules with this service.
 * @member {Array.<Object>} wordpress
 */
VersionDetail.prototype['wordpress'] = undefined;




export default NestedVersion;

