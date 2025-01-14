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


import ApiClient from './ApiClient';
import Acl from './model/Acl';
import AclEntry from './model/AclEntry';
import AclEntryResponse from './model/AclEntryResponse';
import AclEntryResponseAllOf from './model/AclEntryResponseAllOf';
import AclResponse from './model/AclResponse';
import AclResponseAllOf from './model/AclResponseAllOf';
import ApexRedirect from './model/ApexRedirect';
import ApexRedirectAllOf from './model/ApexRedirectAllOf';
import AutomationToken from './model/AutomationToken';
import AutomationTokenCreateRequest from './model/AutomationTokenCreateRequest';
import AutomationTokenCreateRequestAttributes from './model/AutomationTokenCreateRequestAttributes';
import AutomationTokenCreateResponse from './model/AutomationTokenCreateResponse';
import AutomationTokenCreateResponseAllOf from './model/AutomationTokenCreateResponseAllOf';
import AutomationTokenResponse from './model/AutomationTokenResponse';
import AutomationTokenResponseAllOf from './model/AutomationTokenResponseAllOf';
import AwsRegion from './model/AwsRegion';
import Backend from './model/Backend';
import BackendResponse from './model/BackendResponse';
import BackendResponseAllOf from './model/BackendResponseAllOf';
import Billing from './model/Billing';
import BillingAddressAttributes from './model/BillingAddressAttributes';
import BillingAddressRequest from './model/BillingAddressRequest';
import BillingAddressRequestData from './model/BillingAddressRequestData';
import BillingAddressResponse from './model/BillingAddressResponse';
import BillingAddressResponseData from './model/BillingAddressResponseData';
import BillingAddressVerificationErrorResponse from './model/BillingAddressVerificationErrorResponse';
import BillingAddressVerificationErrorResponseErrors from './model/BillingAddressVerificationErrorResponseErrors';
import BillingEstimateResponse from './model/BillingEstimateResponse';
import BillingEstimateResponseAllOf from './model/BillingEstimateResponseAllOf';
import BillingEstimateResponseAllOfLine from './model/BillingEstimateResponseAllOfLine';
import BillingEstimateResponseAllOfLines from './model/BillingEstimateResponseAllOfLines';
import BillingResponse from './model/BillingResponse';
import BillingResponseAllOf from './model/BillingResponseAllOf';
import BillingResponseLineItem from './model/BillingResponseLineItem';
import BillingResponseLineItemAllOf from './model/BillingResponseLineItemAllOf';
import BillingStatus from './model/BillingStatus';
import BillingTotal from './model/BillingTotal';
import BillingTotalExtras from './model/BillingTotalExtras';
import BulkUpdateAclEntriesRequest from './model/BulkUpdateAclEntriesRequest';
import BulkUpdateAclEntry from './model/BulkUpdateAclEntry';
import BulkUpdateAclEntryAllOf from './model/BulkUpdateAclEntryAllOf';
import BulkUpdateConfigStoreItem from './model/BulkUpdateConfigStoreItem';
import BulkUpdateConfigStoreItemAllOf from './model/BulkUpdateConfigStoreItemAllOf';
import BulkUpdateConfigStoreListRequest from './model/BulkUpdateConfigStoreListRequest';
import BulkUpdateDictionaryItem from './model/BulkUpdateDictionaryItem';
import BulkUpdateDictionaryListRequest from './model/BulkUpdateDictionaryListRequest';
import BulkWafActiveRules from './model/BulkWafActiveRules';
import CacheSetting from './model/CacheSetting';
import CacheSettingResponse from './model/CacheSettingResponse';
import Condition from './model/Condition';
import ConditionResponse from './model/ConditionResponse';
import ConfigStore from './model/ConfigStore';
import ConfigStoreInfoResponse from './model/ConfigStoreInfoResponse';
import ConfigStoreItem from './model/ConfigStoreItem';
import ConfigStoreItemResponse from './model/ConfigStoreItemResponse';
import ConfigStoreItemResponseAllOf from './model/ConfigStoreItemResponseAllOf';
import ConfigStoreResponse from './model/ConfigStoreResponse';
import ConfigStoreResponseAllOf from './model/ConfigStoreResponseAllOf';
import Contact from './model/Contact';
import ContactResponse from './model/ContactResponse';
import ContactResponseAllOf from './model/ContactResponseAllOf';
import Content from './model/Content';
import Customer from './model/Customer';
import CustomerResponse from './model/CustomerResponse';
import CustomerResponseAllOf from './model/CustomerResponseAllOf';
import Dictionary from './model/Dictionary';
import DictionaryInfoResponse from './model/DictionaryInfoResponse';
import DictionaryItem from './model/DictionaryItem';
import DictionaryItemResponse from './model/DictionaryItemResponse';
import DictionaryItemResponseAllOf from './model/DictionaryItemResponseAllOf';
import DictionaryResponse from './model/DictionaryResponse';
import DictionaryResponseAllOf from './model/DictionaryResponseAllOf';
import DiffResponse from './model/DiffResponse';
import Director from './model/Director';
import DirectorBackend from './model/DirectorBackend';
import DirectorBackendAllOf from './model/DirectorBackendAllOf';
import DirectorResponse from './model/DirectorResponse';
import Domain from './model/Domain';
import DomainCheckItem from './model/DomainCheckItem';
import DomainResponse from './model/DomainResponse';
import EnabledProductResponse from './model/EnabledProductResponse';
import EnabledProductResponseLinks from './model/EnabledProductResponseLinks';
import EnabledProductResponseProduct from './model/EnabledProductResponseProduct';
import EnabledProductResponseService from './model/EnabledProductResponseService';
import Event from './model/Event';
import EventAttributes from './model/EventAttributes';
import EventResponse from './model/EventResponse';
import EventsResponse from './model/EventsResponse';
import EventsResponseAllOf from './model/EventsResponseAllOf';
import GenericTokenError from './model/GenericTokenError';
import Gzip from './model/Gzip';
import GzipResponse from './model/GzipResponse';
import Header from './model/Header';
import HeaderResponse from './model/HeaderResponse';
import Healthcheck from './model/Healthcheck';
import HealthcheckResponse from './model/HealthcheckResponse';
import Historical from './model/Historical';
import HistoricalAggregateResponse from './model/HistoricalAggregateResponse';
import HistoricalAggregateResponseAllOf from './model/HistoricalAggregateResponseAllOf';
import HistoricalFieldAggregateResponse from './model/HistoricalFieldAggregateResponse';
import HistoricalFieldAggregateResponseAllOf from './model/HistoricalFieldAggregateResponseAllOf';
import HistoricalFieldResponse from './model/HistoricalFieldResponse';
import HistoricalFieldResponseAllOf from './model/HistoricalFieldResponseAllOf';
import HistoricalMeta from './model/HistoricalMeta';
import HistoricalRegionsResponse from './model/HistoricalRegionsResponse';
import HistoricalRegionsResponseAllOf from './model/HistoricalRegionsResponseAllOf';
import HistoricalResponse from './model/HistoricalResponse';
import HistoricalResponseAllOf from './model/HistoricalResponseAllOf';
import HistoricalUsageAggregateResponse from './model/HistoricalUsageAggregateResponse';
import HistoricalUsageMonthResponse from './model/HistoricalUsageMonthResponse';
import HistoricalUsageMonthResponseAllOf from './model/HistoricalUsageMonthResponseAllOf';
import HistoricalUsageMonthResponseAllOfData from './model/HistoricalUsageMonthResponseAllOfData';
import HistoricalUsageResults from './model/HistoricalUsageResults';
import HistoricalUsageServiceResponse from './model/HistoricalUsageServiceResponse';
import HistoricalUsageServiceResponseAllOf from './model/HistoricalUsageServiceResponseAllOf';
import Http3 from './model/Http3';
import Http3AllOf from './model/Http3AllOf';
import HttpResponseFormat from './model/HttpResponseFormat';
import HttpStreamFormat from './model/HttpStreamFormat';
import IamPermission from './model/IamPermission';
import IamRole from './model/IamRole';
import IamRoleAllOf from './model/IamRoleAllOf';
import IamServiceGroup from './model/IamServiceGroup';
import IamServiceGroupAllOf from './model/IamServiceGroupAllOf';
import IamUserGroup from './model/IamUserGroup';
import IamUserGroupAllOf from './model/IamUserGroupAllOf';
import IncludedWithWafActiveRuleItem from './model/IncludedWithWafActiveRuleItem';
import IncludedWithWafExclusionItem from './model/IncludedWithWafExclusionItem';
import IncludedWithWafFirewallVersionItem from './model/IncludedWithWafFirewallVersionItem';
import IncludedWithWafRuleItem from './model/IncludedWithWafRuleItem';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2003Meta from './model/InlineResponse2003Meta';
import InlineResponse2004 from './model/InlineResponse2004';
import InlineResponse2004Meta from './model/InlineResponse2004Meta';
import Invitation from './model/Invitation';
import InvitationData from './model/InvitationData';
import InvitationDataAttributes from './model/InvitationDataAttributes';
import InvitationResponse from './model/InvitationResponse';
import InvitationResponseAllOf from './model/InvitationResponseAllOf';
import InvitationResponseData from './model/InvitationResponseData';
import InvitationResponseDataAllOf from './model/InvitationResponseDataAllOf';
import InvitationsResponse from './model/InvitationsResponse';
import InvitationsResponseAllOf from './model/InvitationsResponseAllOf';
import LoggingAddressAndPort from './model/LoggingAddressAndPort';
import LoggingAzureblob from './model/LoggingAzureblob';
import LoggingAzureblobAllOf from './model/LoggingAzureblobAllOf';
import LoggingAzureblobResponse from './model/LoggingAzureblobResponse';
import LoggingBigquery from './model/LoggingBigquery';
import LoggingBigqueryAllOf from './model/LoggingBigqueryAllOf';
import LoggingBigqueryResponse from './model/LoggingBigqueryResponse';
import LoggingCloudfiles from './model/LoggingCloudfiles';
import LoggingCloudfilesAllOf from './model/LoggingCloudfilesAllOf';
import LoggingCloudfilesResponse from './model/LoggingCloudfilesResponse';
import LoggingCommon from './model/LoggingCommon';
import LoggingDatadog from './model/LoggingDatadog';
import LoggingDatadogAllOf from './model/LoggingDatadogAllOf';
import LoggingDatadogResponse from './model/LoggingDatadogResponse';
import LoggingDigitalocean from './model/LoggingDigitalocean';
import LoggingDigitaloceanAllOf from './model/LoggingDigitaloceanAllOf';
import LoggingDigitaloceanResponse from './model/LoggingDigitaloceanResponse';
import LoggingElasticsearch from './model/LoggingElasticsearch';
import LoggingElasticsearchAllOf from './model/LoggingElasticsearchAllOf';
import LoggingElasticsearchResponse from './model/LoggingElasticsearchResponse';
import LoggingFormatVersion from './model/LoggingFormatVersion';
import LoggingFtp from './model/LoggingFtp';
import LoggingFtpAllOf from './model/LoggingFtpAllOf';
import LoggingFtpResponse from './model/LoggingFtpResponse';
import LoggingGcs from './model/LoggingGcs';
import LoggingGcsAllOf from './model/LoggingGcsAllOf';
import LoggingGcsCommon from './model/LoggingGcsCommon';
import LoggingGcsResponse from './model/LoggingGcsResponse';
import LoggingGenericCommon from './model/LoggingGenericCommon';
import LoggingGooglePubsub from './model/LoggingGooglePubsub';
import LoggingGooglePubsubAllOf from './model/LoggingGooglePubsubAllOf';
import LoggingGooglePubsubResponse from './model/LoggingGooglePubsubResponse';
import LoggingHeroku from './model/LoggingHeroku';
import LoggingHerokuAllOf from './model/LoggingHerokuAllOf';
import LoggingHerokuResponse from './model/LoggingHerokuResponse';
import LoggingHoneycomb from './model/LoggingHoneycomb';
import LoggingHoneycombAllOf from './model/LoggingHoneycombAllOf';
import LoggingHoneycombResponse from './model/LoggingHoneycombResponse';
import LoggingHttps from './model/LoggingHttps';
import LoggingHttpsAllOf from './model/LoggingHttpsAllOf';
import LoggingHttpsResponse from './model/LoggingHttpsResponse';
import LoggingKafka from './model/LoggingKafka';
import LoggingKafkaAllOf from './model/LoggingKafkaAllOf';
import LoggingKafkaResponse from './model/LoggingKafkaResponse';
import LoggingKinesis from './model/LoggingKinesis';
import LoggingKinesisResponse from './model/LoggingKinesisResponse';
import LoggingLogentries from './model/LoggingLogentries';
import LoggingLogentriesAllOf from './model/LoggingLogentriesAllOf';
import LoggingLogentriesResponse from './model/LoggingLogentriesResponse';
import LoggingLoggly from './model/LoggingLoggly';
import LoggingLogglyAllOf from './model/LoggingLogglyAllOf';
import LoggingLogglyResponse from './model/LoggingLogglyResponse';
import LoggingLogshuttle from './model/LoggingLogshuttle';
import LoggingLogshuttleAllOf from './model/LoggingLogshuttleAllOf';
import LoggingLogshuttleResponse from './model/LoggingLogshuttleResponse';
import LoggingMessageType from './model/LoggingMessageType';
import LoggingNewrelic from './model/LoggingNewrelic';
import LoggingNewrelicAllOf from './model/LoggingNewrelicAllOf';
import LoggingNewrelicResponse from './model/LoggingNewrelicResponse';
import LoggingOpenstack from './model/LoggingOpenstack';
import LoggingOpenstackAllOf from './model/LoggingOpenstackAllOf';
import LoggingOpenstackResponse from './model/LoggingOpenstackResponse';
import LoggingPapertrail from './model/LoggingPapertrail';
import LoggingPapertrailResponse from './model/LoggingPapertrailResponse';
import LoggingPlacement from './model/LoggingPlacement';
import LoggingRequestCapsCommon from './model/LoggingRequestCapsCommon';
import LoggingS3 from './model/LoggingS3';
import LoggingS3AllOf from './model/LoggingS3AllOf';
import LoggingS3Response from './model/LoggingS3Response';
import LoggingScalyr from './model/LoggingScalyr';
import LoggingScalyrAllOf from './model/LoggingScalyrAllOf';
import LoggingScalyrResponse from './model/LoggingScalyrResponse';
import LoggingSftp from './model/LoggingSftp';
import LoggingSftpAllOf from './model/LoggingSftpAllOf';
import LoggingSftpResponse from './model/LoggingSftpResponse';
import LoggingSplunk from './model/LoggingSplunk';
import LoggingSplunkAllOf from './model/LoggingSplunkAllOf';
import LoggingSplunkResponse from './model/LoggingSplunkResponse';
import LoggingSumologic from './model/LoggingSumologic';
import LoggingSumologicAllOf from './model/LoggingSumologicAllOf';
import LoggingSumologicResponse from './model/LoggingSumologicResponse';
import LoggingSyslog from './model/LoggingSyslog';
import LoggingSyslogAllOf from './model/LoggingSyslogAllOf';
import LoggingSyslogResponse from './model/LoggingSyslogResponse';
import LoggingTlsCommon from './model/LoggingTlsCommon';
import LoggingUseTls from './model/LoggingUseTls';
import MutualAuthentication from './model/MutualAuthentication';
import MutualAuthenticationData from './model/MutualAuthenticationData';
import MutualAuthenticationDataAttributes from './model/MutualAuthenticationDataAttributes';
import MutualAuthenticationResponse from './model/MutualAuthenticationResponse';
import MutualAuthenticationResponseAttributes from './model/MutualAuthenticationResponseAttributes';
import MutualAuthenticationResponseAttributesAllOf from './model/MutualAuthenticationResponseAttributesAllOf';
import MutualAuthenticationResponseData from './model/MutualAuthenticationResponseData';
import MutualAuthenticationResponseDataAllOf from './model/MutualAuthenticationResponseDataAllOf';
import MutualAuthenticationsResponse from './model/MutualAuthenticationsResponse';
import MutualAuthenticationsResponseAllOf from './model/MutualAuthenticationsResponseAllOf';
import Package from './model/Package';
import PackageMetadata from './model/PackageMetadata';
import PackageResponse from './model/PackageResponse';
import PackageResponseAllOf from './model/PackageResponseAllOf';
import Pagination from './model/Pagination';
import PaginationLinks from './model/PaginationLinks';
import PaginationMeta from './model/PaginationMeta';
import Permission from './model/Permission';
import Pool from './model/Pool';
import PoolAllOf from './model/PoolAllOf';
import PoolResponse from './model/PoolResponse';
import PoolResponseAllOf from './model/PoolResponseAllOf';
import Pop from './model/Pop';
import PopCoordinates from './model/PopCoordinates';
import PublicIpList from './model/PublicIpList';
import PublishItem from './model/PublishItem';
import PublishItemFormats from './model/PublishItemFormats';
import PublishRequest from './model/PublishRequest';
import PurgeKeys from './model/PurgeKeys';
import PurgeResponse from './model/PurgeResponse';
import RateLimiter from './model/RateLimiter';
import RateLimiterResponse from './model/RateLimiterResponse';
import RateLimiterResponse1 from './model/RateLimiterResponse1';
import RateLimiterResponseAllOf from './model/RateLimiterResponseAllOf';
import Realtime from './model/Realtime';
import RealtimeEntry from './model/RealtimeEntry';
import RealtimeMeasurements from './model/RealtimeMeasurements';
import RelationshipCommonName from './model/RelationshipCommonName';
import RelationshipCustomer from './model/RelationshipCustomer';
import RelationshipCustomerCustomer from './model/RelationshipCustomerCustomer';
import RelationshipMemberCustomer from './model/RelationshipMemberCustomer';
import RelationshipMemberMutualAuthentication from './model/RelationshipMemberMutualAuthentication';
import RelationshipMemberService from './model/RelationshipMemberService';
import RelationshipMemberServiceInvitation from './model/RelationshipMemberServiceInvitation';
import RelationshipMemberTlsActivation from './model/RelationshipMemberTlsActivation';
import RelationshipMemberTlsBulkCertificate from './model/RelationshipMemberTlsBulkCertificate';
import RelationshipMemberTlsCertificate from './model/RelationshipMemberTlsCertificate';
import RelationshipMemberTlsConfiguration from './model/RelationshipMemberTlsConfiguration';
import RelationshipMemberTlsDnsRecord from './model/RelationshipMemberTlsDnsRecord';
import RelationshipMemberTlsDomain from './model/RelationshipMemberTlsDomain';
import RelationshipMemberTlsPrivateKey from './model/RelationshipMemberTlsPrivateKey';
import RelationshipMemberTlsSubscription from './model/RelationshipMemberTlsSubscription';
import RelationshipMemberWafActiveRule from './model/RelationshipMemberWafActiveRule';
import RelationshipMemberWafFirewall from './model/RelationshipMemberWafFirewall';
import RelationshipMemberWafFirewallVersion from './model/RelationshipMemberWafFirewallVersion';
import RelationshipMemberWafRule from './model/RelationshipMemberWafRule';
import RelationshipMemberWafRuleRevision from './model/RelationshipMemberWafRuleRevision';
import RelationshipMemberWafTag from './model/RelationshipMemberWafTag';
import RelationshipMutualAuthentication from './model/RelationshipMutualAuthentication';
import RelationshipMutualAuthenticationMutualAuthentication from './model/RelationshipMutualAuthenticationMutualAuthentication';
import RelationshipMutualAuthentications from './model/RelationshipMutualAuthentications';
import RelationshipMutualAuthenticationsMutualAuthentications from './model/RelationshipMutualAuthenticationsMutualAuthentications';
import RelationshipService from './model/RelationshipService';
import RelationshipServiceInvitations from './model/RelationshipServiceInvitations';
import RelationshipServiceInvitationsCreate from './model/RelationshipServiceInvitationsCreate';
import RelationshipServiceInvitationsCreateServiceInvitations from './model/RelationshipServiceInvitationsCreateServiceInvitations';
import RelationshipServiceInvitationsServiceInvitations from './model/RelationshipServiceInvitationsServiceInvitations';
import RelationshipServices from './model/RelationshipServices';
import RelationshipServicesServices from './model/RelationshipServicesServices';
import RelationshipTlsActivation from './model/RelationshipTlsActivation';
import RelationshipTlsActivationTlsActivation from './model/RelationshipTlsActivationTlsActivation';
import RelationshipTlsActivations from './model/RelationshipTlsActivations';
import RelationshipTlsBulkCertificate from './model/RelationshipTlsBulkCertificate';
import RelationshipTlsBulkCertificateTlsBulkCertificate from './model/RelationshipTlsBulkCertificateTlsBulkCertificate';
import RelationshipTlsBulkCertificates from './model/RelationshipTlsBulkCertificates';
import RelationshipTlsCertificate from './model/RelationshipTlsCertificate';
import RelationshipTlsCertificateTlsCertificate from './model/RelationshipTlsCertificateTlsCertificate';
import RelationshipTlsCertificates from './model/RelationshipTlsCertificates';
import RelationshipTlsCertificatesTlsCertificates from './model/RelationshipTlsCertificatesTlsCertificates';
import RelationshipTlsConfiguration from './model/RelationshipTlsConfiguration';
import RelationshipTlsConfigurationTlsConfiguration from './model/RelationshipTlsConfigurationTlsConfiguration';
import RelationshipTlsConfigurations from './model/RelationshipTlsConfigurations';
import RelationshipTlsConfigurationsTlsConfigurations from './model/RelationshipTlsConfigurationsTlsConfigurations';
import RelationshipTlsDnsRecord from './model/RelationshipTlsDnsRecord';
import RelationshipTlsDnsRecordDnsRecord from './model/RelationshipTlsDnsRecordDnsRecord';
import RelationshipTlsDnsRecords from './model/RelationshipTlsDnsRecords';
import RelationshipTlsDomain from './model/RelationshipTlsDomain';
import RelationshipTlsDomainTlsDomain from './model/RelationshipTlsDomainTlsDomain';
import RelationshipTlsDomains from './model/RelationshipTlsDomains';
import RelationshipTlsDomainsTlsDomains from './model/RelationshipTlsDomainsTlsDomains';
import RelationshipTlsPrivateKey from './model/RelationshipTlsPrivateKey';
import RelationshipTlsPrivateKeyTlsPrivateKey from './model/RelationshipTlsPrivateKeyTlsPrivateKey';
import RelationshipTlsPrivateKeys from './model/RelationshipTlsPrivateKeys';
import RelationshipTlsPrivateKeysTlsPrivateKeys from './model/RelationshipTlsPrivateKeysTlsPrivateKeys';
import RelationshipTlsSubscription from './model/RelationshipTlsSubscription';
import RelationshipTlsSubscriptionTlsSubscription from './model/RelationshipTlsSubscriptionTlsSubscription';
import RelationshipTlsSubscriptions from './model/RelationshipTlsSubscriptions';
import RelationshipUser from './model/RelationshipUser';
import RelationshipUserUser from './model/RelationshipUserUser';
import RelationshipWafActiveRules from './model/RelationshipWafActiveRules';
import RelationshipWafActiveRulesWafActiveRules from './model/RelationshipWafActiveRulesWafActiveRules';
import RelationshipWafFirewall from './model/RelationshipWafFirewall';
import RelationshipWafFirewallVersion from './model/RelationshipWafFirewallVersion';
import RelationshipWafFirewallVersionWafFirewallVersion from './model/RelationshipWafFirewallVersionWafFirewallVersion';
import RelationshipWafFirewallVersions from './model/RelationshipWafFirewallVersions';
import RelationshipWafFirewallWafFirewall from './model/RelationshipWafFirewallWafFirewall';
import RelationshipWafRule from './model/RelationshipWafRule';
import RelationshipWafRuleRevision from './model/RelationshipWafRuleRevision';
import RelationshipWafRuleRevisionWafRuleRevisions from './model/RelationshipWafRuleRevisionWafRuleRevisions';
import RelationshipWafRuleRevisions from './model/RelationshipWafRuleRevisions';
import RelationshipWafRuleWafRule from './model/RelationshipWafRuleWafRule';
import RelationshipWafRules from './model/RelationshipWafRules';
import RelationshipWafTags from './model/RelationshipWafTags';
import RelationshipWafTagsWafTags from './model/RelationshipWafTagsWafTags';
import RelationshipsForInvitation from './model/RelationshipsForInvitation';
import RelationshipsForMutualAuthentication from './model/RelationshipsForMutualAuthentication';
import RelationshipsForStar from './model/RelationshipsForStar';
import RelationshipsForTlsActivation from './model/RelationshipsForTlsActivation';
import RelationshipsForTlsBulkCertificate from './model/RelationshipsForTlsBulkCertificate';
import RelationshipsForTlsConfiguration from './model/RelationshipsForTlsConfiguration';
import RelationshipsForTlsDomain from './model/RelationshipsForTlsDomain';
import RelationshipsForTlsPrivateKey from './model/RelationshipsForTlsPrivateKey';
import RelationshipsForTlsSubscription from './model/RelationshipsForTlsSubscription';
import RelationshipsForWafActiveRule from './model/RelationshipsForWafActiveRule';
import RelationshipsForWafExclusion from './model/RelationshipsForWafExclusion';
import RelationshipsForWafFirewallVersion from './model/RelationshipsForWafFirewallVersion';
import RelationshipsForWafRule from './model/RelationshipsForWafRule';
import RequestSettings from './model/RequestSettings';
import RequestSettingsResponse from './model/RequestSettingsResponse';
import Resource from './model/Resource';
import ResourceResponse from './model/ResourceResponse';
import ResourceResponseAllOf from './model/ResourceResponseAllOf';
import ResponseObject from './model/ResponseObject';
import ResponseObjectResponse from './model/ResponseObjectResponse';
import Results from './model/Results';
import RoleUser from './model/RoleUser';
import SchemasContactResponse from './model/SchemasContactResponse';
import SchemasSnippetResponse from './model/SchemasSnippetResponse';
import SchemasUserResponse from './model/SchemasUserResponse';
import SchemasVersion from './model/SchemasVersion';
import SchemasVersionResponse from './model/SchemasVersionResponse';
import SchemasWafFirewallVersion from './model/SchemasWafFirewallVersion';
import SchemasWafFirewallVersionData from './model/SchemasWafFirewallVersionData';
import Server from './model/Server';
import ServerResponse from './model/ServerResponse';
import ServerResponseAllOf from './model/ServerResponseAllOf';
import Service from './model/Service';
import ServiceAuthorization from './model/ServiceAuthorization';
import ServiceAuthorizationData from './model/ServiceAuthorizationData';
import ServiceAuthorizationDataAttributes from './model/ServiceAuthorizationDataAttributes';
import ServiceAuthorizationDataRelationships from './model/ServiceAuthorizationDataRelationships';
import ServiceAuthorizationDataRelationshipsUser from './model/ServiceAuthorizationDataRelationshipsUser';
import ServiceAuthorizationDataRelationshipsUserData from './model/ServiceAuthorizationDataRelationshipsUserData';
import ServiceAuthorizationResponse from './model/ServiceAuthorizationResponse';
import ServiceAuthorizationResponseData from './model/ServiceAuthorizationResponseData';
import ServiceAuthorizationResponseDataAllOf from './model/ServiceAuthorizationResponseDataAllOf';
import ServiceAuthorizationsResponse from './model/ServiceAuthorizationsResponse';
import ServiceAuthorizationsResponseAllOf from './model/ServiceAuthorizationsResponseAllOf';
import ServiceCreate from './model/ServiceCreate';
import ServiceCreateAllOf from './model/ServiceCreateAllOf';
import ServiceDetail from './model/ServiceDetail';
import ServiceDetailAllOf from './model/ServiceDetailAllOf';
import ServiceIdAndVersion from './model/ServiceIdAndVersion';
import ServiceInvitation from './model/ServiceInvitation';
import ServiceInvitationData from './model/ServiceInvitationData';
import ServiceInvitationDataAttributes from './model/ServiceInvitationDataAttributes';
import ServiceInvitationDataRelationships from './model/ServiceInvitationDataRelationships';
import ServiceInvitationResponse from './model/ServiceInvitationResponse';
import ServiceInvitationResponseAllOf from './model/ServiceInvitationResponseAllOf';
import ServiceInvitationResponseAllOfData from './model/ServiceInvitationResponseAllOfData';
import ServiceListResponse from './model/ServiceListResponse';
import ServiceListResponseAllOf from './model/ServiceListResponseAllOf';
import ServiceResponse from './model/ServiceResponse';
import ServiceResponseAllOf from './model/ServiceResponseAllOf';
import ServiceVersionDetail from './model/ServiceVersionDetail';
import ServiceVersionDetailOrNull from './model/ServiceVersionDetailOrNull';
import Settings from './model/Settings';
import SettingsResponse from './model/SettingsResponse';
import Snippet from './model/Snippet';
import SnippetResponse from './model/SnippetResponse';
import SnippetResponseAllOf from './model/SnippetResponseAllOf';
import Star from './model/Star';
import StarData from './model/StarData';
import StarResponse from './model/StarResponse';
import StarResponseAllOf from './model/StarResponseAllOf';
import Stats from './model/Stats';
import Store from './model/Store';
import StoreResponse from './model/StoreResponse';
import Timestamps from './model/Timestamps';
import TimestampsNoDelete from './model/TimestampsNoDelete';
import TlsActivation from './model/TlsActivation';
import TlsActivationData from './model/TlsActivationData';
import TlsActivationResponse from './model/TlsActivationResponse';
import TlsActivationResponseData from './model/TlsActivationResponseData';
import TlsActivationResponseDataAllOf from './model/TlsActivationResponseDataAllOf';
import TlsActivationsResponse from './model/TlsActivationsResponse';
import TlsActivationsResponseAllOf from './model/TlsActivationsResponseAllOf';
import TlsBulkCertificate from './model/TlsBulkCertificate';
import TlsBulkCertificateData from './model/TlsBulkCertificateData';
import TlsBulkCertificateDataAttributes from './model/TlsBulkCertificateDataAttributes';
import TlsBulkCertificateResponse from './model/TlsBulkCertificateResponse';
import TlsBulkCertificateResponseAttributes from './model/TlsBulkCertificateResponseAttributes';
import TlsBulkCertificateResponseAttributesAllOf from './model/TlsBulkCertificateResponseAttributesAllOf';
import TlsBulkCertificateResponseData from './model/TlsBulkCertificateResponseData';
import TlsBulkCertificateResponseDataAllOf from './model/TlsBulkCertificateResponseDataAllOf';
import TlsBulkCertificatesResponse from './model/TlsBulkCertificatesResponse';
import TlsBulkCertificatesResponseAllOf from './model/TlsBulkCertificatesResponseAllOf';
import TlsCertificate from './model/TlsCertificate';
import TlsCertificateData from './model/TlsCertificateData';
import TlsCertificateDataAttributes from './model/TlsCertificateDataAttributes';
import TlsCertificateResponse from './model/TlsCertificateResponse';
import TlsCertificateResponseAttributes from './model/TlsCertificateResponseAttributes';
import TlsCertificateResponseAttributesAllOf from './model/TlsCertificateResponseAttributesAllOf';
import TlsCertificateResponseData from './model/TlsCertificateResponseData';
import TlsCertificateResponseDataAllOf from './model/TlsCertificateResponseDataAllOf';
import TlsCertificatesResponse from './model/TlsCertificatesResponse';
import TlsCertificatesResponseAllOf from './model/TlsCertificatesResponseAllOf';
import TlsCommon from './model/TlsCommon';
import TlsConfiguration from './model/TlsConfiguration';
import TlsConfigurationData from './model/TlsConfigurationData';
import TlsConfigurationDataAttributes from './model/TlsConfigurationDataAttributes';
import TlsConfigurationResponse from './model/TlsConfigurationResponse';
import TlsConfigurationResponseAttributes from './model/TlsConfigurationResponseAttributes';
import TlsConfigurationResponseAttributesAllOf from './model/TlsConfigurationResponseAttributesAllOf';
import TlsConfigurationResponseData from './model/TlsConfigurationResponseData';
import TlsConfigurationResponseDataAllOf from './model/TlsConfigurationResponseDataAllOf';
import TlsConfigurationsResponse from './model/TlsConfigurationsResponse';
import TlsConfigurationsResponseAllOf from './model/TlsConfigurationsResponseAllOf';
import TlsDnsRecord from './model/TlsDnsRecord';
import TlsDomainData from './model/TlsDomainData';
import TlsDomainsResponse from './model/TlsDomainsResponse';
import TlsDomainsResponseAllOf from './model/TlsDomainsResponseAllOf';
import TlsPrivateKey from './model/TlsPrivateKey';
import TlsPrivateKeyData from './model/TlsPrivateKeyData';
import TlsPrivateKeyDataAttributes from './model/TlsPrivateKeyDataAttributes';
import TlsPrivateKeyResponse from './model/TlsPrivateKeyResponse';
import TlsPrivateKeyResponseAttributes from './model/TlsPrivateKeyResponseAttributes';
import TlsPrivateKeyResponseAttributesAllOf from './model/TlsPrivateKeyResponseAttributesAllOf';
import TlsPrivateKeyResponseData from './model/TlsPrivateKeyResponseData';
import TlsPrivateKeysResponse from './model/TlsPrivateKeysResponse';
import TlsPrivateKeysResponseAllOf from './model/TlsPrivateKeysResponseAllOf';
import TlsSubscription from './model/TlsSubscription';
import TlsSubscriptionData from './model/TlsSubscriptionData';
import TlsSubscriptionDataAttributes from './model/TlsSubscriptionDataAttributes';
import TlsSubscriptionResponse from './model/TlsSubscriptionResponse';
import TlsSubscriptionResponseAttributes from './model/TlsSubscriptionResponseAttributes';
import TlsSubscriptionResponseAttributesAllOf from './model/TlsSubscriptionResponseAttributesAllOf';
import TlsSubscriptionResponseData from './model/TlsSubscriptionResponseData';
import TlsSubscriptionResponseDataAllOf from './model/TlsSubscriptionResponseDataAllOf';
import TlsSubscriptionsResponse from './model/TlsSubscriptionsResponse';
import TlsSubscriptionsResponseAllOf from './model/TlsSubscriptionsResponseAllOf';
import Token from './model/Token';
import TokenCreatedResponse from './model/TokenCreatedResponse';
import TokenCreatedResponseAllOf from './model/TokenCreatedResponseAllOf';
import TokenResponse from './model/TokenResponse';
import TokenResponseAllOf from './model/TokenResponseAllOf';
import TypeBillingAddress from './model/TypeBillingAddress';
import TypeContact from './model/TypeContact';
import TypeCustomer from './model/TypeCustomer';
import TypeEvent from './model/TypeEvent';
import TypeInvitation from './model/TypeInvitation';
import TypeMutualAuthentication from './model/TypeMutualAuthentication';
import TypeResource from './model/TypeResource';
import TypeService from './model/TypeService';
import TypeServiceAuthorization from './model/TypeServiceAuthorization';
import TypeServiceInvitation from './model/TypeServiceInvitation';
import TypeStar from './model/TypeStar';
import TypeTlsActivation from './model/TypeTlsActivation';
import TypeTlsBulkCertificate from './model/TypeTlsBulkCertificate';
import TypeTlsCertificate from './model/TypeTlsCertificate';
import TypeTlsConfiguration from './model/TypeTlsConfiguration';
import TypeTlsDnsRecord from './model/TypeTlsDnsRecord';
import TypeTlsDomain from './model/TypeTlsDomain';
import TypeTlsPrivateKey from './model/TypeTlsPrivateKey';
import TypeTlsSubscription from './model/TypeTlsSubscription';
import TypeUser from './model/TypeUser';
import TypeWafActiveRule from './model/TypeWafActiveRule';
import TypeWafExclusion from './model/TypeWafExclusion';
import TypeWafFirewall from './model/TypeWafFirewall';
import TypeWafFirewallVersion from './model/TypeWafFirewallVersion';
import TypeWafRule from './model/TypeWafRule';
import TypeWafRuleRevision from './model/TypeWafRuleRevision';
import TypeWafTag from './model/TypeWafTag';
import UpdateBillingAddressRequest from './model/UpdateBillingAddressRequest';
import UpdateBillingAddressRequestData from './model/UpdateBillingAddressRequestData';
import User from './model/User';
import UserResponse from './model/UserResponse';
import UserResponseAllOf from './model/UserResponseAllOf';
import Vcl from './model/Vcl';
import VclDiff from './model/VclDiff';
import VclResponse from './model/VclResponse';
import Version from './model/Version';
import VersionCreateResponse from './model/VersionCreateResponse';
import VersionDetail from './model/VersionDetail';
import VersionDetailSettings from './model/VersionDetailSettings';
import VersionResponse from './model/VersionResponse';
import VersionResponseAllOf from './model/VersionResponseAllOf';
import WafActiveRule from './model/WafActiveRule';
import WafActiveRuleCreationResponse from './model/WafActiveRuleCreationResponse';
import WafActiveRuleData from './model/WafActiveRuleData';
import WafActiveRuleDataAttributes from './model/WafActiveRuleDataAttributes';
import WafActiveRuleResponse from './model/WafActiveRuleResponse';
import WafActiveRuleResponseData from './model/WafActiveRuleResponseData';
import WafActiveRuleResponseDataAllOf from './model/WafActiveRuleResponseDataAllOf';
import WafActiveRuleResponseDataAttributes from './model/WafActiveRuleResponseDataAttributes';
import WafActiveRuleResponseDataAttributesAllOf from './model/WafActiveRuleResponseDataAttributesAllOf';
import WafActiveRuleResponseDataRelationships from './model/WafActiveRuleResponseDataRelationships';
import WafActiveRulesResponse from './model/WafActiveRulesResponse';
import WafActiveRulesResponseAllOf from './model/WafActiveRulesResponseAllOf';
import WafExclusion from './model/WafExclusion';
import WafExclusionData from './model/WafExclusionData';
import WafExclusionDataAttributes from './model/WafExclusionDataAttributes';
import WafExclusionResponse from './model/WafExclusionResponse';
import WafExclusionResponseData from './model/WafExclusionResponseData';
import WafExclusionResponseDataAllOf from './model/WafExclusionResponseDataAllOf';
import WafExclusionResponseDataAttributes from './model/WafExclusionResponseDataAttributes';
import WafExclusionResponseDataAttributesAllOf from './model/WafExclusionResponseDataAttributesAllOf';
import WafExclusionResponseDataRelationships from './model/WafExclusionResponseDataRelationships';
import WafExclusionsResponse from './model/WafExclusionsResponse';
import WafExclusionsResponseAllOf from './model/WafExclusionsResponseAllOf';
import WafFirewall from './model/WafFirewall';
import WafFirewallData from './model/WafFirewallData';
import WafFirewallDataAttributes from './model/WafFirewallDataAttributes';
import WafFirewallResponse from './model/WafFirewallResponse';
import WafFirewallResponseData from './model/WafFirewallResponseData';
import WafFirewallResponseDataAllOf from './model/WafFirewallResponseDataAllOf';
import WafFirewallResponseDataAttributes from './model/WafFirewallResponseDataAttributes';
import WafFirewallResponseDataAttributesAllOf from './model/WafFirewallResponseDataAttributesAllOf';
import WafFirewallVersion from './model/WafFirewallVersion';
import WafFirewallVersionData from './model/WafFirewallVersionData';
import WafFirewallVersionDataAttributes from './model/WafFirewallVersionDataAttributes';
import WafFirewallVersionResponse from './model/WafFirewallVersionResponse';
import WafFirewallVersionResponseData from './model/WafFirewallVersionResponseData';
import WafFirewallVersionResponseDataAllOf from './model/WafFirewallVersionResponseDataAllOf';
import WafFirewallVersionResponseDataAttributes from './model/WafFirewallVersionResponseDataAttributes';
import WafFirewallVersionResponseDataAttributesAllOf from './model/WafFirewallVersionResponseDataAttributesAllOf';
import WafFirewallVersionsResponse from './model/WafFirewallVersionsResponse';
import WafFirewallVersionsResponseAllOf from './model/WafFirewallVersionsResponseAllOf';
import WafFirewallsResponse from './model/WafFirewallsResponse';
import WafFirewallsResponseAllOf from './model/WafFirewallsResponseAllOf';
import WafRule from './model/WafRule';
import WafRuleAttributes from './model/WafRuleAttributes';
import WafRuleResponse from './model/WafRuleResponse';
import WafRuleResponseData from './model/WafRuleResponseData';
import WafRuleResponseDataAllOf from './model/WafRuleResponseDataAllOf';
import WafRuleRevision from './model/WafRuleRevision';
import WafRuleRevisionAttributes from './model/WafRuleRevisionAttributes';
import WafRuleRevisionOrLatest from './model/WafRuleRevisionOrLatest';
import WafRuleRevisionResponse from './model/WafRuleRevisionResponse';
import WafRuleRevisionResponseData from './model/WafRuleRevisionResponseData';
import WafRuleRevisionResponseDataAllOf from './model/WafRuleRevisionResponseDataAllOf';
import WafRuleRevisionsResponse from './model/WafRuleRevisionsResponse';
import WafRuleRevisionsResponseAllOf from './model/WafRuleRevisionsResponseAllOf';
import WafRulesResponse from './model/WafRulesResponse';
import WafRulesResponseAllOf from './model/WafRulesResponseAllOf';
import WafTag from './model/WafTag';
import WafTagAttributes from './model/WafTagAttributes';
import WafTagsResponse from './model/WafTagsResponse';
import WafTagsResponseAllOf from './model/WafTagsResponseAllOf';
import WafTagsResponseDataItem from './model/WafTagsResponseDataItem';
import WsMessageFormat from './model/WsMessageFormat';
import AclApi from './api/AclApi';
import AclEntryApi from './api/AclEntryApi';
import ApexRedirectApi from './api/ApexRedirectApi';
import AutomationTokensApi from './api/AutomationTokensApi';
import BackendApi from './api/BackendApi';
import BillingApi from './api/BillingApi';
import BillingAddressApi from './api/BillingAddressApi';
import CacheSettingsApi from './api/CacheSettingsApi';
import ConditionApi from './api/ConditionApi';
import ConfigStoreApi from './api/ConfigStoreApi';
import ConfigStoreItemApi from './api/ConfigStoreItemApi';
import ContactApi from './api/ContactApi';
import ContentApi from './api/ContentApi';
import CustomerApi from './api/CustomerApi';
import DictionaryApi from './api/DictionaryApi';
import DictionaryInfoApi from './api/DictionaryInfoApi';
import DictionaryItemApi from './api/DictionaryItemApi';
import DiffApi from './api/DiffApi';
import DirectorApi from './api/DirectorApi';
import DirectorBackendApi from './api/DirectorBackendApi';
import DomainApi from './api/DomainApi';
import DomainOwnershipsApi from './api/DomainOwnershipsApi';
import EnabledProductsApi from './api/EnabledProductsApi';
import EventsApi from './api/EventsApi';
import GzipApi from './api/GzipApi';
import HeaderApi from './api/HeaderApi';
import HealthcheckApi from './api/HealthcheckApi';
import HistoricalApi from './api/HistoricalApi';
import Http3Api from './api/Http3Api';
import IamPermissionsApi from './api/IamPermissionsApi';
import IamRolesApi from './api/IamRolesApi';
import IamServiceGroupsApi from './api/IamServiceGroupsApi';
import IamUserGroupsApi from './api/IamUserGroupsApi';
import InvitationsApi from './api/InvitationsApi';
import KvStoreApi from './api/KvStoreApi';
import KvStoreItemApi from './api/KvStoreItemApi';
import LoggingAzureblobApi from './api/LoggingAzureblobApi';
import LoggingBigqueryApi from './api/LoggingBigqueryApi';
import LoggingCloudfilesApi from './api/LoggingCloudfilesApi';
import LoggingDatadogApi from './api/LoggingDatadogApi';
import LoggingDigitaloceanApi from './api/LoggingDigitaloceanApi';
import LoggingElasticsearchApi from './api/LoggingElasticsearchApi';
import LoggingFtpApi from './api/LoggingFtpApi';
import LoggingGcsApi from './api/LoggingGcsApi';
import LoggingHerokuApi from './api/LoggingHerokuApi';
import LoggingHoneycombApi from './api/LoggingHoneycombApi';
import LoggingHttpsApi from './api/LoggingHttpsApi';
import LoggingKafkaApi from './api/LoggingKafkaApi';
import LoggingKinesisApi from './api/LoggingKinesisApi';
import LoggingLogentriesApi from './api/LoggingLogentriesApi';
import LoggingLogglyApi from './api/LoggingLogglyApi';
import LoggingLogshuttleApi from './api/LoggingLogshuttleApi';
import LoggingNewrelicApi from './api/LoggingNewrelicApi';
import LoggingOpenstackApi from './api/LoggingOpenstackApi';
import LoggingPapertrailApi from './api/LoggingPapertrailApi';
import LoggingPubsubApi from './api/LoggingPubsubApi';
import LoggingS3Api from './api/LoggingS3Api';
import LoggingScalyrApi from './api/LoggingScalyrApi';
import LoggingSftpApi from './api/LoggingSftpApi';
import LoggingSplunkApi from './api/LoggingSplunkApi';
import LoggingSumologicApi from './api/LoggingSumologicApi';
import LoggingSyslogApi from './api/LoggingSyslogApi';
import MutualAuthenticationApi from './api/MutualAuthenticationApi';
import PackageApi from './api/PackageApi';
import PoolApi from './api/PoolApi';
import PopApi from './api/PopApi';
import PublicIpListApi from './api/PublicIpListApi';
import PublishApi from './api/PublishApi';
import PurgeApi from './api/PurgeApi';
import RateLimiterApi from './api/RateLimiterApi';
import RealtimeApi from './api/RealtimeApi';
import RequestSettingsApi from './api/RequestSettingsApi';
import ResourceApi from './api/ResourceApi';
import ResponseObjectApi from './api/ResponseObjectApi';
import ServerApi from './api/ServerApi';
import ServiceApi from './api/ServiceApi';
import ServiceAuthorizationsApi from './api/ServiceAuthorizationsApi';
import SettingsApi from './api/SettingsApi';
import SnippetApi from './api/SnippetApi';
import StarApi from './api/StarApi';
import StatsApi from './api/StatsApi';
import TlsActivationsApi from './api/TlsActivationsApi';
import TlsBulkCertificatesApi from './api/TlsBulkCertificatesApi';
import TlsCertificatesApi from './api/TlsCertificatesApi';
import TlsConfigurationsApi from './api/TlsConfigurationsApi';
import TlsDomainsApi from './api/TlsDomainsApi';
import TlsPrivateKeysApi from './api/TlsPrivateKeysApi';
import TlsSubscriptionsApi from './api/TlsSubscriptionsApi';
import TokensApi from './api/TokensApi';
import UserApi from './api/UserApi';
import VclDiffApi from './api/VclDiffApi';
import VersionApi from './api/VersionApi';
import WafActiveRulesApi from './api/WafActiveRulesApi';
import WafExclusionsApi from './api/WafExclusionsApi';
import WafFirewallVersionsApi from './api/WafFirewallVersionsApi';
import WafFirewallsApi from './api/WafFirewallsApi';
import WafRuleRevisionsApi from './api/WafRuleRevisionsApi';
import WafRulesApi from './api/WafRulesApi';
import WafTagsApi from './api/WafTagsApi';


function authenticate (key) {
    ApiClient.instance.authenticate(key);
}

/**
* A JavaScript client library for interacting with most facets of the Fastly API..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Fastly = require('index'); // See note below*.
* var xxxSvc = new Fastly.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Fastly.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Fastly.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Fastly.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 4.1.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Acl model constructor.
     * @property {module:model/Acl}
     */
    Acl,

    /**
     * The AclEntry model constructor.
     * @property {module:model/AclEntry}
     */
    AclEntry,

    /**
     * The AclEntryResponse model constructor.
     * @property {module:model/AclEntryResponse}
     */
    AclEntryResponse,

    /**
     * The AclEntryResponseAllOf model constructor.
     * @property {module:model/AclEntryResponseAllOf}
     */
    AclEntryResponseAllOf,

    /**
     * The AclResponse model constructor.
     * @property {module:model/AclResponse}
     */
    AclResponse,

    /**
     * The AclResponseAllOf model constructor.
     * @property {module:model/AclResponseAllOf}
     */
    AclResponseAllOf,

    /**
     * The ApexRedirect model constructor.
     * @property {module:model/ApexRedirect}
     */
    ApexRedirect,

    /**
     * The ApexRedirectAllOf model constructor.
     * @property {module:model/ApexRedirectAllOf}
     */
    ApexRedirectAllOf,

    /**
     * The AutomationToken model constructor.
     * @property {module:model/AutomationToken}
     */
    AutomationToken,

    /**
     * The AutomationTokenCreateRequest model constructor.
     * @property {module:model/AutomationTokenCreateRequest}
     */
    AutomationTokenCreateRequest,

    /**
     * The AutomationTokenCreateRequestAttributes model constructor.
     * @property {module:model/AutomationTokenCreateRequestAttributes}
     */
    AutomationTokenCreateRequestAttributes,

    /**
     * The AutomationTokenCreateResponse model constructor.
     * @property {module:model/AutomationTokenCreateResponse}
     */
    AutomationTokenCreateResponse,

    /**
     * The AutomationTokenCreateResponseAllOf model constructor.
     * @property {module:model/AutomationTokenCreateResponseAllOf}
     */
    AutomationTokenCreateResponseAllOf,

    /**
     * The AutomationTokenResponse model constructor.
     * @property {module:model/AutomationTokenResponse}
     */
    AutomationTokenResponse,

    /**
     * The AutomationTokenResponseAllOf model constructor.
     * @property {module:model/AutomationTokenResponseAllOf}
     */
    AutomationTokenResponseAllOf,

    /**
     * The AwsRegion model constructor.
     * @property {module:model/AwsRegion}
     */
    AwsRegion,

    /**
     * The Backend model constructor.
     * @property {module:model/Backend}
     */
    Backend,

    /**
     * The BackendResponse model constructor.
     * @property {module:model/BackendResponse}
     */
    BackendResponse,

    /**
     * The BackendResponseAllOf model constructor.
     * @property {module:model/BackendResponseAllOf}
     */
    BackendResponseAllOf,

    /**
     * The Billing model constructor.
     * @property {module:model/Billing}
     */
    Billing,

    /**
     * The BillingAddressAttributes model constructor.
     * @property {module:model/BillingAddressAttributes}
     */
    BillingAddressAttributes,

    /**
     * The BillingAddressRequest model constructor.
     * @property {module:model/BillingAddressRequest}
     */
    BillingAddressRequest,

    /**
     * The BillingAddressRequestData model constructor.
     * @property {module:model/BillingAddressRequestData}
     */
    BillingAddressRequestData,

    /**
     * The BillingAddressResponse model constructor.
     * @property {module:model/BillingAddressResponse}
     */
    BillingAddressResponse,

    /**
     * The BillingAddressResponseData model constructor.
     * @property {module:model/BillingAddressResponseData}
     */
    BillingAddressResponseData,

    /**
     * The BillingAddressVerificationErrorResponse model constructor.
     * @property {module:model/BillingAddressVerificationErrorResponse}
     */
    BillingAddressVerificationErrorResponse,

    /**
     * The BillingAddressVerificationErrorResponseErrors model constructor.
     * @property {module:model/BillingAddressVerificationErrorResponseErrors}
     */
    BillingAddressVerificationErrorResponseErrors,

    /**
     * The BillingEstimateResponse model constructor.
     * @property {module:model/BillingEstimateResponse}
     */
    BillingEstimateResponse,

    /**
     * The BillingEstimateResponseAllOf model constructor.
     * @property {module:model/BillingEstimateResponseAllOf}
     */
    BillingEstimateResponseAllOf,

    /**
     * The BillingEstimateResponseAllOfLine model constructor.
     * @property {module:model/BillingEstimateResponseAllOfLine}
     */
    BillingEstimateResponseAllOfLine,

    /**
     * The BillingEstimateResponseAllOfLines model constructor.
     * @property {module:model/BillingEstimateResponseAllOfLines}
     */
    BillingEstimateResponseAllOfLines,

    /**
     * The BillingResponse model constructor.
     * @property {module:model/BillingResponse}
     */
    BillingResponse,

    /**
     * The BillingResponseAllOf model constructor.
     * @property {module:model/BillingResponseAllOf}
     */
    BillingResponseAllOf,

    /**
     * The BillingResponseLineItem model constructor.
     * @property {module:model/BillingResponseLineItem}
     */
    BillingResponseLineItem,

    /**
     * The BillingResponseLineItemAllOf model constructor.
     * @property {module:model/BillingResponseLineItemAllOf}
     */
    BillingResponseLineItemAllOf,

    /**
     * The BillingStatus model constructor.
     * @property {module:model/BillingStatus}
     */
    BillingStatus,

    /**
     * The BillingTotal model constructor.
     * @property {module:model/BillingTotal}
     */
    BillingTotal,

    /**
     * The BillingTotalExtras model constructor.
     * @property {module:model/BillingTotalExtras}
     */
    BillingTotalExtras,

    /**
     * The BulkUpdateAclEntriesRequest model constructor.
     * @property {module:model/BulkUpdateAclEntriesRequest}
     */
    BulkUpdateAclEntriesRequest,

    /**
     * The BulkUpdateAclEntry model constructor.
     * @property {module:model/BulkUpdateAclEntry}
     */
    BulkUpdateAclEntry,

    /**
     * The BulkUpdateAclEntryAllOf model constructor.
     * @property {module:model/BulkUpdateAclEntryAllOf}
     */
    BulkUpdateAclEntryAllOf,

    /**
     * The BulkUpdateConfigStoreItem model constructor.
     * @property {module:model/BulkUpdateConfigStoreItem}
     */
    BulkUpdateConfigStoreItem,

    /**
     * The BulkUpdateConfigStoreItemAllOf model constructor.
     * @property {module:model/BulkUpdateConfigStoreItemAllOf}
     */
    BulkUpdateConfigStoreItemAllOf,

    /**
     * The BulkUpdateConfigStoreListRequest model constructor.
     * @property {module:model/BulkUpdateConfigStoreListRequest}
     */
    BulkUpdateConfigStoreListRequest,

    /**
     * The BulkUpdateDictionaryItem model constructor.
     * @property {module:model/BulkUpdateDictionaryItem}
     */
    BulkUpdateDictionaryItem,

    /**
     * The BulkUpdateDictionaryListRequest model constructor.
     * @property {module:model/BulkUpdateDictionaryListRequest}
     */
    BulkUpdateDictionaryListRequest,

    /**
     * The BulkWafActiveRules model constructor.
     * @property {module:model/BulkWafActiveRules}
     */
    BulkWafActiveRules,

    /**
     * The CacheSetting model constructor.
     * @property {module:model/CacheSetting}
     */
    CacheSetting,

    /**
     * The CacheSettingResponse model constructor.
     * @property {module:model/CacheSettingResponse}
     */
    CacheSettingResponse,

    /**
     * The Condition model constructor.
     * @property {module:model/Condition}
     */
    Condition,

    /**
     * The ConditionResponse model constructor.
     * @property {module:model/ConditionResponse}
     */
    ConditionResponse,

    /**
     * The ConfigStore model constructor.
     * @property {module:model/ConfigStore}
     */
    ConfigStore,

    /**
     * The ConfigStoreInfoResponse model constructor.
     * @property {module:model/ConfigStoreInfoResponse}
     */
    ConfigStoreInfoResponse,

    /**
     * The ConfigStoreItem model constructor.
     * @property {module:model/ConfigStoreItem}
     */
    ConfigStoreItem,

    /**
     * The ConfigStoreItemResponse model constructor.
     * @property {module:model/ConfigStoreItemResponse}
     */
    ConfigStoreItemResponse,

    /**
     * The ConfigStoreItemResponseAllOf model constructor.
     * @property {module:model/ConfigStoreItemResponseAllOf}
     */
    ConfigStoreItemResponseAllOf,

    /**
     * The ConfigStoreResponse model constructor.
     * @property {module:model/ConfigStoreResponse}
     */
    ConfigStoreResponse,

    /**
     * The ConfigStoreResponseAllOf model constructor.
     * @property {module:model/ConfigStoreResponseAllOf}
     */
    ConfigStoreResponseAllOf,

    /**
     * The Contact model constructor.
     * @property {module:model/Contact}
     */
    Contact,

    /**
     * The ContactResponse model constructor.
     * @property {module:model/ContactResponse}
     */
    ContactResponse,

    /**
     * The ContactResponseAllOf model constructor.
     * @property {module:model/ContactResponseAllOf}
     */
    ContactResponseAllOf,

    /**
     * The Content model constructor.
     * @property {module:model/Content}
     */
    Content,

    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer,

    /**
     * The CustomerResponse model constructor.
     * @property {module:model/CustomerResponse}
     */
    CustomerResponse,

    /**
     * The CustomerResponseAllOf model constructor.
     * @property {module:model/CustomerResponseAllOf}
     */
    CustomerResponseAllOf,

    /**
     * The Dictionary model constructor.
     * @property {module:model/Dictionary}
     */
    Dictionary,

    /**
     * The DictionaryInfoResponse model constructor.
     * @property {module:model/DictionaryInfoResponse}
     */
    DictionaryInfoResponse,

    /**
     * The DictionaryItem model constructor.
     * @property {module:model/DictionaryItem}
     */
    DictionaryItem,

    /**
     * The DictionaryItemResponse model constructor.
     * @property {module:model/DictionaryItemResponse}
     */
    DictionaryItemResponse,

    /**
     * The DictionaryItemResponseAllOf model constructor.
     * @property {module:model/DictionaryItemResponseAllOf}
     */
    DictionaryItemResponseAllOf,

    /**
     * The DictionaryResponse model constructor.
     * @property {module:model/DictionaryResponse}
     */
    DictionaryResponse,

    /**
     * The DictionaryResponseAllOf model constructor.
     * @property {module:model/DictionaryResponseAllOf}
     */
    DictionaryResponseAllOf,

    /**
     * The DiffResponse model constructor.
     * @property {module:model/DiffResponse}
     */
    DiffResponse,

    /**
     * The Director model constructor.
     * @property {module:model/Director}
     */
    Director,

    /**
     * The DirectorBackend model constructor.
     * @property {module:model/DirectorBackend}
     */
    DirectorBackend,

    /**
     * The DirectorBackendAllOf model constructor.
     * @property {module:model/DirectorBackendAllOf}
     */
    DirectorBackendAllOf,

    /**
     * The DirectorResponse model constructor.
     * @property {module:model/DirectorResponse}
     */
    DirectorResponse,

    /**
     * The Domain model constructor.
     * @property {module:model/Domain}
     */
    Domain,

    /**
     * The DomainCheckItem model constructor.
     * @property {module:model/DomainCheckItem}
     */
    DomainCheckItem,

    /**
     * The DomainResponse model constructor.
     * @property {module:model/DomainResponse}
     */
    DomainResponse,

    /**
     * The EnabledProductResponse model constructor.
     * @property {module:model/EnabledProductResponse}
     */
    EnabledProductResponse,

    /**
     * The EnabledProductResponseLinks model constructor.
     * @property {module:model/EnabledProductResponseLinks}
     */
    EnabledProductResponseLinks,

    /**
     * The EnabledProductResponseProduct model constructor.
     * @property {module:model/EnabledProductResponseProduct}
     */
    EnabledProductResponseProduct,

    /**
     * The EnabledProductResponseService model constructor.
     * @property {module:model/EnabledProductResponseService}
     */
    EnabledProductResponseService,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The EventAttributes model constructor.
     * @property {module:model/EventAttributes}
     */
    EventAttributes,

    /**
     * The EventResponse model constructor.
     * @property {module:model/EventResponse}
     */
    EventResponse,

    /**
     * The EventsResponse model constructor.
     * @property {module:model/EventsResponse}
     */
    EventsResponse,

    /**
     * The EventsResponseAllOf model constructor.
     * @property {module:model/EventsResponseAllOf}
     */
    EventsResponseAllOf,

    /**
     * The GenericTokenError model constructor.
     * @property {module:model/GenericTokenError}
     */
    GenericTokenError,

    /**
     * The Gzip model constructor.
     * @property {module:model/Gzip}
     */
    Gzip,

    /**
     * The GzipResponse model constructor.
     * @property {module:model/GzipResponse}
     */
    GzipResponse,

    /**
     * The Header model constructor.
     * @property {module:model/Header}
     */
    Header,

    /**
     * The HeaderResponse model constructor.
     * @property {module:model/HeaderResponse}
     */
    HeaderResponse,

    /**
     * The Healthcheck model constructor.
     * @property {module:model/Healthcheck}
     */
    Healthcheck,

    /**
     * The HealthcheckResponse model constructor.
     * @property {module:model/HealthcheckResponse}
     */
    HealthcheckResponse,

    /**
     * The Historical model constructor.
     * @property {module:model/Historical}
     */
    Historical,

    /**
     * The HistoricalAggregateResponse model constructor.
     * @property {module:model/HistoricalAggregateResponse}
     */
    HistoricalAggregateResponse,

    /**
     * The HistoricalAggregateResponseAllOf model constructor.
     * @property {module:model/HistoricalAggregateResponseAllOf}
     */
    HistoricalAggregateResponseAllOf,

    /**
     * The HistoricalFieldAggregateResponse model constructor.
     * @property {module:model/HistoricalFieldAggregateResponse}
     */
    HistoricalFieldAggregateResponse,

    /**
     * The HistoricalFieldAggregateResponseAllOf model constructor.
     * @property {module:model/HistoricalFieldAggregateResponseAllOf}
     */
    HistoricalFieldAggregateResponseAllOf,

    /**
     * The HistoricalFieldResponse model constructor.
     * @property {module:model/HistoricalFieldResponse}
     */
    HistoricalFieldResponse,

    /**
     * The HistoricalFieldResponseAllOf model constructor.
     * @property {module:model/HistoricalFieldResponseAllOf}
     */
    HistoricalFieldResponseAllOf,

    /**
     * The HistoricalMeta model constructor.
     * @property {module:model/HistoricalMeta}
     */
    HistoricalMeta,

    /**
     * The HistoricalRegionsResponse model constructor.
     * @property {module:model/HistoricalRegionsResponse}
     */
    HistoricalRegionsResponse,

    /**
     * The HistoricalRegionsResponseAllOf model constructor.
     * @property {module:model/HistoricalRegionsResponseAllOf}
     */
    HistoricalRegionsResponseAllOf,

    /**
     * The HistoricalResponse model constructor.
     * @property {module:model/HistoricalResponse}
     */
    HistoricalResponse,

    /**
     * The HistoricalResponseAllOf model constructor.
     * @property {module:model/HistoricalResponseAllOf}
     */
    HistoricalResponseAllOf,

    /**
     * The HistoricalUsageAggregateResponse model constructor.
     * @property {module:model/HistoricalUsageAggregateResponse}
     */
    HistoricalUsageAggregateResponse,

    /**
     * The HistoricalUsageMonthResponse model constructor.
     * @property {module:model/HistoricalUsageMonthResponse}
     */
    HistoricalUsageMonthResponse,

    /**
     * The HistoricalUsageMonthResponseAllOf model constructor.
     * @property {module:model/HistoricalUsageMonthResponseAllOf}
     */
    HistoricalUsageMonthResponseAllOf,

    /**
     * The HistoricalUsageMonthResponseAllOfData model constructor.
     * @property {module:model/HistoricalUsageMonthResponseAllOfData}
     */
    HistoricalUsageMonthResponseAllOfData,

    /**
     * The HistoricalUsageResults model constructor.
     * @property {module:model/HistoricalUsageResults}
     */
    HistoricalUsageResults,

    /**
     * The HistoricalUsageServiceResponse model constructor.
     * @property {module:model/HistoricalUsageServiceResponse}
     */
    HistoricalUsageServiceResponse,

    /**
     * The HistoricalUsageServiceResponseAllOf model constructor.
     * @property {module:model/HistoricalUsageServiceResponseAllOf}
     */
    HistoricalUsageServiceResponseAllOf,

    /**
     * The Http3 model constructor.
     * @property {module:model/Http3}
     */
    Http3,

    /**
     * The Http3AllOf model constructor.
     * @property {module:model/Http3AllOf}
     */
    Http3AllOf,

    /**
     * The HttpResponseFormat model constructor.
     * @property {module:model/HttpResponseFormat}
     */
    HttpResponseFormat,

    /**
     * The HttpStreamFormat model constructor.
     * @property {module:model/HttpStreamFormat}
     */
    HttpStreamFormat,

    /**
     * The IamPermission model constructor.
     * @property {module:model/IamPermission}
     */
    IamPermission,

    /**
     * The IamRole model constructor.
     * @property {module:model/IamRole}
     */
    IamRole,

    /**
     * The IamRoleAllOf model constructor.
     * @property {module:model/IamRoleAllOf}
     */
    IamRoleAllOf,

    /**
     * The IamServiceGroup model constructor.
     * @property {module:model/IamServiceGroup}
     */
    IamServiceGroup,

    /**
     * The IamServiceGroupAllOf model constructor.
     * @property {module:model/IamServiceGroupAllOf}
     */
    IamServiceGroupAllOf,

    /**
     * The IamUserGroup model constructor.
     * @property {module:model/IamUserGroup}
     */
    IamUserGroup,

    /**
     * The IamUserGroupAllOf model constructor.
     * @property {module:model/IamUserGroupAllOf}
     */
    IamUserGroupAllOf,

    /**
     * The IncludedWithWafActiveRuleItem model constructor.
     * @property {module:model/IncludedWithWafActiveRuleItem}
     */
    IncludedWithWafActiveRuleItem,

    /**
     * The IncludedWithWafExclusionItem model constructor.
     * @property {module:model/IncludedWithWafExclusionItem}
     */
    IncludedWithWafExclusionItem,

    /**
     * The IncludedWithWafFirewallVersionItem model constructor.
     * @property {module:model/IncludedWithWafFirewallVersionItem}
     */
    IncludedWithWafFirewallVersionItem,

    /**
     * The IncludedWithWafRuleItem model constructor.
     * @property {module:model/IncludedWithWafRuleItem}
     */
    IncludedWithWafRuleItem,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2003Meta model constructor.
     * @property {module:model/InlineResponse2003Meta}
     */
    InlineResponse2003Meta,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2004Meta model constructor.
     * @property {module:model/InlineResponse2004Meta}
     */
    InlineResponse2004Meta,

    /**
     * The Invitation model constructor.
     * @property {module:model/Invitation}
     */
    Invitation,

    /**
     * The InvitationData model constructor.
     * @property {module:model/InvitationData}
     */
    InvitationData,

    /**
     * The InvitationDataAttributes model constructor.
     * @property {module:model/InvitationDataAttributes}
     */
    InvitationDataAttributes,

    /**
     * The InvitationResponse model constructor.
     * @property {module:model/InvitationResponse}
     */
    InvitationResponse,

    /**
     * The InvitationResponseAllOf model constructor.
     * @property {module:model/InvitationResponseAllOf}
     */
    InvitationResponseAllOf,

    /**
     * The InvitationResponseData model constructor.
     * @property {module:model/InvitationResponseData}
     */
    InvitationResponseData,

    /**
     * The InvitationResponseDataAllOf model constructor.
     * @property {module:model/InvitationResponseDataAllOf}
     */
    InvitationResponseDataAllOf,

    /**
     * The InvitationsResponse model constructor.
     * @property {module:model/InvitationsResponse}
     */
    InvitationsResponse,

    /**
     * The InvitationsResponseAllOf model constructor.
     * @property {module:model/InvitationsResponseAllOf}
     */
    InvitationsResponseAllOf,

    /**
     * The LoggingAddressAndPort model constructor.
     * @property {module:model/LoggingAddressAndPort}
     */
    LoggingAddressAndPort,

    /**
     * The LoggingAzureblob model constructor.
     * @property {module:model/LoggingAzureblob}
     */
    LoggingAzureblob,

    /**
     * The LoggingAzureblobAllOf model constructor.
     * @property {module:model/LoggingAzureblobAllOf}
     */
    LoggingAzureblobAllOf,

    /**
     * The LoggingAzureblobResponse model constructor.
     * @property {module:model/LoggingAzureblobResponse}
     */
    LoggingAzureblobResponse,

    /**
     * The LoggingBigquery model constructor.
     * @property {module:model/LoggingBigquery}
     */
    LoggingBigquery,

    /**
     * The LoggingBigqueryAllOf model constructor.
     * @property {module:model/LoggingBigqueryAllOf}
     */
    LoggingBigqueryAllOf,

    /**
     * The LoggingBigqueryResponse model constructor.
     * @property {module:model/LoggingBigqueryResponse}
     */
    LoggingBigqueryResponse,

    /**
     * The LoggingCloudfiles model constructor.
     * @property {module:model/LoggingCloudfiles}
     */
    LoggingCloudfiles,

    /**
     * The LoggingCloudfilesAllOf model constructor.
     * @property {module:model/LoggingCloudfilesAllOf}
     */
    LoggingCloudfilesAllOf,

    /**
     * The LoggingCloudfilesResponse model constructor.
     * @property {module:model/LoggingCloudfilesResponse}
     */
    LoggingCloudfilesResponse,

    /**
     * The LoggingCommon model constructor.
     * @property {module:model/LoggingCommon}
     */
    LoggingCommon,

    /**
     * The LoggingDatadog model constructor.
     * @property {module:model/LoggingDatadog}
     */
    LoggingDatadog,

    /**
     * The LoggingDatadogAllOf model constructor.
     * @property {module:model/LoggingDatadogAllOf}
     */
    LoggingDatadogAllOf,

    /**
     * The LoggingDatadogResponse model constructor.
     * @property {module:model/LoggingDatadogResponse}
     */
    LoggingDatadogResponse,

    /**
     * The LoggingDigitalocean model constructor.
     * @property {module:model/LoggingDigitalocean}
     */
    LoggingDigitalocean,

    /**
     * The LoggingDigitaloceanAllOf model constructor.
     * @property {module:model/LoggingDigitaloceanAllOf}
     */
    LoggingDigitaloceanAllOf,

    /**
     * The LoggingDigitaloceanResponse model constructor.
     * @property {module:model/LoggingDigitaloceanResponse}
     */
    LoggingDigitaloceanResponse,

    /**
     * The LoggingElasticsearch model constructor.
     * @property {module:model/LoggingElasticsearch}
     */
    LoggingElasticsearch,

    /**
     * The LoggingElasticsearchAllOf model constructor.
     * @property {module:model/LoggingElasticsearchAllOf}
     */
    LoggingElasticsearchAllOf,

    /**
     * The LoggingElasticsearchResponse model constructor.
     * @property {module:model/LoggingElasticsearchResponse}
     */
    LoggingElasticsearchResponse,

    /**
     * The LoggingFormatVersion model constructor.
     * @property {module:model/LoggingFormatVersion}
     */
    LoggingFormatVersion,

    /**
     * The LoggingFtp model constructor.
     * @property {module:model/LoggingFtp}
     */
    LoggingFtp,

    /**
     * The LoggingFtpAllOf model constructor.
     * @property {module:model/LoggingFtpAllOf}
     */
    LoggingFtpAllOf,

    /**
     * The LoggingFtpResponse model constructor.
     * @property {module:model/LoggingFtpResponse}
     */
    LoggingFtpResponse,

    /**
     * The LoggingGcs model constructor.
     * @property {module:model/LoggingGcs}
     */
    LoggingGcs,

    /**
     * The LoggingGcsAllOf model constructor.
     * @property {module:model/LoggingGcsAllOf}
     */
    LoggingGcsAllOf,

    /**
     * The LoggingGcsCommon model constructor.
     * @property {module:model/LoggingGcsCommon}
     */
    LoggingGcsCommon,

    /**
     * The LoggingGcsResponse model constructor.
     * @property {module:model/LoggingGcsResponse}
     */
    LoggingGcsResponse,

    /**
     * The LoggingGenericCommon model constructor.
     * @property {module:model/LoggingGenericCommon}
     */
    LoggingGenericCommon,

    /**
     * The LoggingGooglePubsub model constructor.
     * @property {module:model/LoggingGooglePubsub}
     */
    LoggingGooglePubsub,

    /**
     * The LoggingGooglePubsubAllOf model constructor.
     * @property {module:model/LoggingGooglePubsubAllOf}
     */
    LoggingGooglePubsubAllOf,

    /**
     * The LoggingGooglePubsubResponse model constructor.
     * @property {module:model/LoggingGooglePubsubResponse}
     */
    LoggingGooglePubsubResponse,

    /**
     * The LoggingHeroku model constructor.
     * @property {module:model/LoggingHeroku}
     */
    LoggingHeroku,

    /**
     * The LoggingHerokuAllOf model constructor.
     * @property {module:model/LoggingHerokuAllOf}
     */
    LoggingHerokuAllOf,

    /**
     * The LoggingHerokuResponse model constructor.
     * @property {module:model/LoggingHerokuResponse}
     */
    LoggingHerokuResponse,

    /**
     * The LoggingHoneycomb model constructor.
     * @property {module:model/LoggingHoneycomb}
     */
    LoggingHoneycomb,

    /**
     * The LoggingHoneycombAllOf model constructor.
     * @property {module:model/LoggingHoneycombAllOf}
     */
    LoggingHoneycombAllOf,

    /**
     * The LoggingHoneycombResponse model constructor.
     * @property {module:model/LoggingHoneycombResponse}
     */
    LoggingHoneycombResponse,

    /**
     * The LoggingHttps model constructor.
     * @property {module:model/LoggingHttps}
     */
    LoggingHttps,

    /**
     * The LoggingHttpsAllOf model constructor.
     * @property {module:model/LoggingHttpsAllOf}
     */
    LoggingHttpsAllOf,

    /**
     * The LoggingHttpsResponse model constructor.
     * @property {module:model/LoggingHttpsResponse}
     */
    LoggingHttpsResponse,

    /**
     * The LoggingKafka model constructor.
     * @property {module:model/LoggingKafka}
     */
    LoggingKafka,

    /**
     * The LoggingKafkaAllOf model constructor.
     * @property {module:model/LoggingKafkaAllOf}
     */
    LoggingKafkaAllOf,

    /**
     * The LoggingKafkaResponse model constructor.
     * @property {module:model/LoggingKafkaResponse}
     */
    LoggingKafkaResponse,

    /**
     * The LoggingKinesis model constructor.
     * @property {module:model/LoggingKinesis}
     */
    LoggingKinesis,

    /**
     * The LoggingKinesisResponse model constructor.
     * @property {module:model/LoggingKinesisResponse}
     */
    LoggingKinesisResponse,

    /**
     * The LoggingLogentries model constructor.
     * @property {module:model/LoggingLogentries}
     */
    LoggingLogentries,

    /**
     * The LoggingLogentriesAllOf model constructor.
     * @property {module:model/LoggingLogentriesAllOf}
     */
    LoggingLogentriesAllOf,

    /**
     * The LoggingLogentriesResponse model constructor.
     * @property {module:model/LoggingLogentriesResponse}
     */
    LoggingLogentriesResponse,

    /**
     * The LoggingLoggly model constructor.
     * @property {module:model/LoggingLoggly}
     */
    LoggingLoggly,

    /**
     * The LoggingLogglyAllOf model constructor.
     * @property {module:model/LoggingLogglyAllOf}
     */
    LoggingLogglyAllOf,

    /**
     * The LoggingLogglyResponse model constructor.
     * @property {module:model/LoggingLogglyResponse}
     */
    LoggingLogglyResponse,

    /**
     * The LoggingLogshuttle model constructor.
     * @property {module:model/LoggingLogshuttle}
     */
    LoggingLogshuttle,

    /**
     * The LoggingLogshuttleAllOf model constructor.
     * @property {module:model/LoggingLogshuttleAllOf}
     */
    LoggingLogshuttleAllOf,

    /**
     * The LoggingLogshuttleResponse model constructor.
     * @property {module:model/LoggingLogshuttleResponse}
     */
    LoggingLogshuttleResponse,

    /**
     * The LoggingMessageType model constructor.
     * @property {module:model/LoggingMessageType}
     */
    LoggingMessageType,

    /**
     * The LoggingNewrelic model constructor.
     * @property {module:model/LoggingNewrelic}
     */
    LoggingNewrelic,

    /**
     * The LoggingNewrelicAllOf model constructor.
     * @property {module:model/LoggingNewrelicAllOf}
     */
    LoggingNewrelicAllOf,

    /**
     * The LoggingNewrelicResponse model constructor.
     * @property {module:model/LoggingNewrelicResponse}
     */
    LoggingNewrelicResponse,

    /**
     * The LoggingOpenstack model constructor.
     * @property {module:model/LoggingOpenstack}
     */
    LoggingOpenstack,

    /**
     * The LoggingOpenstackAllOf model constructor.
     * @property {module:model/LoggingOpenstackAllOf}
     */
    LoggingOpenstackAllOf,

    /**
     * The LoggingOpenstackResponse model constructor.
     * @property {module:model/LoggingOpenstackResponse}
     */
    LoggingOpenstackResponse,

    /**
     * The LoggingPapertrail model constructor.
     * @property {module:model/LoggingPapertrail}
     */
    LoggingPapertrail,

    /**
     * The LoggingPapertrailResponse model constructor.
     * @property {module:model/LoggingPapertrailResponse}
     */
    LoggingPapertrailResponse,

    /**
     * The LoggingPlacement model constructor.
     * @property {module:model/LoggingPlacement}
     */
    LoggingPlacement,

    /**
     * The LoggingRequestCapsCommon model constructor.
     * @property {module:model/LoggingRequestCapsCommon}
     */
    LoggingRequestCapsCommon,

    /**
     * The LoggingS3 model constructor.
     * @property {module:model/LoggingS3}
     */
    LoggingS3,

    /**
     * The LoggingS3AllOf model constructor.
     * @property {module:model/LoggingS3AllOf}
     */
    LoggingS3AllOf,

    /**
     * The LoggingS3Response model constructor.
     * @property {module:model/LoggingS3Response}
     */
    LoggingS3Response,

    /**
     * The LoggingScalyr model constructor.
     * @property {module:model/LoggingScalyr}
     */
    LoggingScalyr,

    /**
     * The LoggingScalyrAllOf model constructor.
     * @property {module:model/LoggingScalyrAllOf}
     */
    LoggingScalyrAllOf,

    /**
     * The LoggingScalyrResponse model constructor.
     * @property {module:model/LoggingScalyrResponse}
     */
    LoggingScalyrResponse,

    /**
     * The LoggingSftp model constructor.
     * @property {module:model/LoggingSftp}
     */
    LoggingSftp,

    /**
     * The LoggingSftpAllOf model constructor.
     * @property {module:model/LoggingSftpAllOf}
     */
    LoggingSftpAllOf,

    /**
     * The LoggingSftpResponse model constructor.
     * @property {module:model/LoggingSftpResponse}
     */
    LoggingSftpResponse,

    /**
     * The LoggingSplunk model constructor.
     * @property {module:model/LoggingSplunk}
     */
    LoggingSplunk,

    /**
     * The LoggingSplunkAllOf model constructor.
     * @property {module:model/LoggingSplunkAllOf}
     */
    LoggingSplunkAllOf,

    /**
     * The LoggingSplunkResponse model constructor.
     * @property {module:model/LoggingSplunkResponse}
     */
    LoggingSplunkResponse,

    /**
     * The LoggingSumologic model constructor.
     * @property {module:model/LoggingSumologic}
     */
    LoggingSumologic,

    /**
     * The LoggingSumologicAllOf model constructor.
     * @property {module:model/LoggingSumologicAllOf}
     */
    LoggingSumologicAllOf,

    /**
     * The LoggingSumologicResponse model constructor.
     * @property {module:model/LoggingSumologicResponse}
     */
    LoggingSumologicResponse,

    /**
     * The LoggingSyslog model constructor.
     * @property {module:model/LoggingSyslog}
     */
    LoggingSyslog,

    /**
     * The LoggingSyslogAllOf model constructor.
     * @property {module:model/LoggingSyslogAllOf}
     */
    LoggingSyslogAllOf,

    /**
     * The LoggingSyslogResponse model constructor.
     * @property {module:model/LoggingSyslogResponse}
     */
    LoggingSyslogResponse,

    /**
     * The LoggingTlsCommon model constructor.
     * @property {module:model/LoggingTlsCommon}
     */
    LoggingTlsCommon,

    /**
     * The LoggingUseTls model constructor.
     * @property {module:model/LoggingUseTls}
     */
    LoggingUseTls,

    /**
     * The MutualAuthentication model constructor.
     * @property {module:model/MutualAuthentication}
     */
    MutualAuthentication,

    /**
     * The MutualAuthenticationData model constructor.
     * @property {module:model/MutualAuthenticationData}
     */
    MutualAuthenticationData,

    /**
     * The MutualAuthenticationDataAttributes model constructor.
     * @property {module:model/MutualAuthenticationDataAttributes}
     */
    MutualAuthenticationDataAttributes,

    /**
     * The MutualAuthenticationResponse model constructor.
     * @property {module:model/MutualAuthenticationResponse}
     */
    MutualAuthenticationResponse,

    /**
     * The MutualAuthenticationResponseAttributes model constructor.
     * @property {module:model/MutualAuthenticationResponseAttributes}
     */
    MutualAuthenticationResponseAttributes,

    /**
     * The MutualAuthenticationResponseAttributesAllOf model constructor.
     * @property {module:model/MutualAuthenticationResponseAttributesAllOf}
     */
    MutualAuthenticationResponseAttributesAllOf,

    /**
     * The MutualAuthenticationResponseData model constructor.
     * @property {module:model/MutualAuthenticationResponseData}
     */
    MutualAuthenticationResponseData,

    /**
     * The MutualAuthenticationResponseDataAllOf model constructor.
     * @property {module:model/MutualAuthenticationResponseDataAllOf}
     */
    MutualAuthenticationResponseDataAllOf,

    /**
     * The MutualAuthenticationsResponse model constructor.
     * @property {module:model/MutualAuthenticationsResponse}
     */
    MutualAuthenticationsResponse,

    /**
     * The MutualAuthenticationsResponseAllOf model constructor.
     * @property {module:model/MutualAuthenticationsResponseAllOf}
     */
    MutualAuthenticationsResponseAllOf,

    /**
     * The Package model constructor.
     * @property {module:model/Package}
     */
    Package,

    /**
     * The PackageMetadata model constructor.
     * @property {module:model/PackageMetadata}
     */
    PackageMetadata,

    /**
     * The PackageResponse model constructor.
     * @property {module:model/PackageResponse}
     */
    PackageResponse,

    /**
     * The PackageResponseAllOf model constructor.
     * @property {module:model/PackageResponseAllOf}
     */
    PackageResponseAllOf,

    /**
     * The Pagination model constructor.
     * @property {module:model/Pagination}
     */
    Pagination,

    /**
     * The PaginationLinks model constructor.
     * @property {module:model/PaginationLinks}
     */
    PaginationLinks,

    /**
     * The PaginationMeta model constructor.
     * @property {module:model/PaginationMeta}
     */
    PaginationMeta,

    /**
     * The Permission model constructor.
     * @property {module:model/Permission}
     */
    Permission,

    /**
     * The Pool model constructor.
     * @property {module:model/Pool}
     */
    Pool,

    /**
     * The PoolAllOf model constructor.
     * @property {module:model/PoolAllOf}
     */
    PoolAllOf,

    /**
     * The PoolResponse model constructor.
     * @property {module:model/PoolResponse}
     */
    PoolResponse,

    /**
     * The PoolResponseAllOf model constructor.
     * @property {module:model/PoolResponseAllOf}
     */
    PoolResponseAllOf,

    /**
     * The Pop model constructor.
     * @property {module:model/Pop}
     */
    Pop,

    /**
     * The PopCoordinates model constructor.
     * @property {module:model/PopCoordinates}
     */
    PopCoordinates,

    /**
     * The PublicIpList model constructor.
     * @property {module:model/PublicIpList}
     */
    PublicIpList,

    /**
     * The PublishItem model constructor.
     * @property {module:model/PublishItem}
     */
    PublishItem,

    /**
     * The PublishItemFormats model constructor.
     * @property {module:model/PublishItemFormats}
     */
    PublishItemFormats,

    /**
     * The PublishRequest model constructor.
     * @property {module:model/PublishRequest}
     */
    PublishRequest,

    /**
     * The PurgeKeys model constructor.
     * @property {module:model/PurgeKeys}
     */
    PurgeKeys,

    /**
     * The PurgeResponse model constructor.
     * @property {module:model/PurgeResponse}
     */
    PurgeResponse,

    /**
     * The RateLimiter model constructor.
     * @property {module:model/RateLimiter}
     */
    RateLimiter,

    /**
     * The RateLimiterResponse model constructor.
     * @property {module:model/RateLimiterResponse}
     */
    RateLimiterResponse,

    /**
     * The RateLimiterResponse1 model constructor.
     * @property {module:model/RateLimiterResponse1}
     */
    RateLimiterResponse1,

    /**
     * The RateLimiterResponseAllOf model constructor.
     * @property {module:model/RateLimiterResponseAllOf}
     */
    RateLimiterResponseAllOf,

    /**
     * The Realtime model constructor.
     * @property {module:model/Realtime}
     */
    Realtime,

    /**
     * The RealtimeEntry model constructor.
     * @property {module:model/RealtimeEntry}
     */
    RealtimeEntry,

    /**
     * The RealtimeMeasurements model constructor.
     * @property {module:model/RealtimeMeasurements}
     */
    RealtimeMeasurements,

    /**
     * The RelationshipCommonName model constructor.
     * @property {module:model/RelationshipCommonName}
     */
    RelationshipCommonName,

    /**
     * The RelationshipCustomer model constructor.
     * @property {module:model/RelationshipCustomer}
     */
    RelationshipCustomer,

    /**
     * The RelationshipCustomerCustomer model constructor.
     * @property {module:model/RelationshipCustomerCustomer}
     */
    RelationshipCustomerCustomer,

    /**
     * The RelationshipMemberCustomer model constructor.
     * @property {module:model/RelationshipMemberCustomer}
     */
    RelationshipMemberCustomer,

    /**
     * The RelationshipMemberMutualAuthentication model constructor.
     * @property {module:model/RelationshipMemberMutualAuthentication}
     */
    RelationshipMemberMutualAuthentication,

    /**
     * The RelationshipMemberService model constructor.
     * @property {module:model/RelationshipMemberService}
     */
    RelationshipMemberService,

    /**
     * The RelationshipMemberServiceInvitation model constructor.
     * @property {module:model/RelationshipMemberServiceInvitation}
     */
    RelationshipMemberServiceInvitation,

    /**
     * The RelationshipMemberTlsActivation model constructor.
     * @property {module:model/RelationshipMemberTlsActivation}
     */
    RelationshipMemberTlsActivation,

    /**
     * The RelationshipMemberTlsBulkCertificate model constructor.
     * @property {module:model/RelationshipMemberTlsBulkCertificate}
     */
    RelationshipMemberTlsBulkCertificate,

    /**
     * The RelationshipMemberTlsCertificate model constructor.
     * @property {module:model/RelationshipMemberTlsCertificate}
     */
    RelationshipMemberTlsCertificate,

    /**
     * The RelationshipMemberTlsConfiguration model constructor.
     * @property {module:model/RelationshipMemberTlsConfiguration}
     */
    RelationshipMemberTlsConfiguration,

    /**
     * The RelationshipMemberTlsDnsRecord model constructor.
     * @property {module:model/RelationshipMemberTlsDnsRecord}
     */
    RelationshipMemberTlsDnsRecord,

    /**
     * The RelationshipMemberTlsDomain model constructor.
     * @property {module:model/RelationshipMemberTlsDomain}
     */
    RelationshipMemberTlsDomain,

    /**
     * The RelationshipMemberTlsPrivateKey model constructor.
     * @property {module:model/RelationshipMemberTlsPrivateKey}
     */
    RelationshipMemberTlsPrivateKey,

    /**
     * The RelationshipMemberTlsSubscription model constructor.
     * @property {module:model/RelationshipMemberTlsSubscription}
     */
    RelationshipMemberTlsSubscription,

    /**
     * The RelationshipMemberWafActiveRule model constructor.
     * @property {module:model/RelationshipMemberWafActiveRule}
     */
    RelationshipMemberWafActiveRule,

    /**
     * The RelationshipMemberWafFirewall model constructor.
     * @property {module:model/RelationshipMemberWafFirewall}
     */
    RelationshipMemberWafFirewall,

    /**
     * The RelationshipMemberWafFirewallVersion model constructor.
     * @property {module:model/RelationshipMemberWafFirewallVersion}
     */
    RelationshipMemberWafFirewallVersion,

    /**
     * The RelationshipMemberWafRule model constructor.
     * @property {module:model/RelationshipMemberWafRule}
     */
    RelationshipMemberWafRule,

    /**
     * The RelationshipMemberWafRuleRevision model constructor.
     * @property {module:model/RelationshipMemberWafRuleRevision}
     */
    RelationshipMemberWafRuleRevision,

    /**
     * The RelationshipMemberWafTag model constructor.
     * @property {module:model/RelationshipMemberWafTag}
     */
    RelationshipMemberWafTag,

    /**
     * The RelationshipMutualAuthentication model constructor.
     * @property {module:model/RelationshipMutualAuthentication}
     */
    RelationshipMutualAuthentication,

    /**
     * The RelationshipMutualAuthenticationMutualAuthentication model constructor.
     * @property {module:model/RelationshipMutualAuthenticationMutualAuthentication}
     */
    RelationshipMutualAuthenticationMutualAuthentication,

    /**
     * The RelationshipMutualAuthentications model constructor.
     * @property {module:model/RelationshipMutualAuthentications}
     */
    RelationshipMutualAuthentications,

    /**
     * The RelationshipMutualAuthenticationsMutualAuthentications model constructor.
     * @property {module:model/RelationshipMutualAuthenticationsMutualAuthentications}
     */
    RelationshipMutualAuthenticationsMutualAuthentications,

    /**
     * The RelationshipService model constructor.
     * @property {module:model/RelationshipService}
     */
    RelationshipService,

    /**
     * The RelationshipServiceInvitations model constructor.
     * @property {module:model/RelationshipServiceInvitations}
     */
    RelationshipServiceInvitations,

    /**
     * The RelationshipServiceInvitationsCreate model constructor.
     * @property {module:model/RelationshipServiceInvitationsCreate}
     */
    RelationshipServiceInvitationsCreate,

    /**
     * The RelationshipServiceInvitationsCreateServiceInvitations model constructor.
     * @property {module:model/RelationshipServiceInvitationsCreateServiceInvitations}
     */
    RelationshipServiceInvitationsCreateServiceInvitations,

    /**
     * The RelationshipServiceInvitationsServiceInvitations model constructor.
     * @property {module:model/RelationshipServiceInvitationsServiceInvitations}
     */
    RelationshipServiceInvitationsServiceInvitations,

    /**
     * The RelationshipServices model constructor.
     * @property {module:model/RelationshipServices}
     */
    RelationshipServices,

    /**
     * The RelationshipServicesServices model constructor.
     * @property {module:model/RelationshipServicesServices}
     */
    RelationshipServicesServices,

    /**
     * The RelationshipTlsActivation model constructor.
     * @property {module:model/RelationshipTlsActivation}
     */
    RelationshipTlsActivation,

    /**
     * The RelationshipTlsActivationTlsActivation model constructor.
     * @property {module:model/RelationshipTlsActivationTlsActivation}
     */
    RelationshipTlsActivationTlsActivation,

    /**
     * The RelationshipTlsActivations model constructor.
     * @property {module:model/RelationshipTlsActivations}
     */
    RelationshipTlsActivations,

    /**
     * The RelationshipTlsBulkCertificate model constructor.
     * @property {module:model/RelationshipTlsBulkCertificate}
     */
    RelationshipTlsBulkCertificate,

    /**
     * The RelationshipTlsBulkCertificateTlsBulkCertificate model constructor.
     * @property {module:model/RelationshipTlsBulkCertificateTlsBulkCertificate}
     */
    RelationshipTlsBulkCertificateTlsBulkCertificate,

    /**
     * The RelationshipTlsBulkCertificates model constructor.
     * @property {module:model/RelationshipTlsBulkCertificates}
     */
    RelationshipTlsBulkCertificates,

    /**
     * The RelationshipTlsCertificate model constructor.
     * @property {module:model/RelationshipTlsCertificate}
     */
    RelationshipTlsCertificate,

    /**
     * The RelationshipTlsCertificateTlsCertificate model constructor.
     * @property {module:model/RelationshipTlsCertificateTlsCertificate}
     */
    RelationshipTlsCertificateTlsCertificate,

    /**
     * The RelationshipTlsCertificates model constructor.
     * @property {module:model/RelationshipTlsCertificates}
     */
    RelationshipTlsCertificates,

    /**
     * The RelationshipTlsCertificatesTlsCertificates model constructor.
     * @property {module:model/RelationshipTlsCertificatesTlsCertificates}
     */
    RelationshipTlsCertificatesTlsCertificates,

    /**
     * The RelationshipTlsConfiguration model constructor.
     * @property {module:model/RelationshipTlsConfiguration}
     */
    RelationshipTlsConfiguration,

    /**
     * The RelationshipTlsConfigurationTlsConfiguration model constructor.
     * @property {module:model/RelationshipTlsConfigurationTlsConfiguration}
     */
    RelationshipTlsConfigurationTlsConfiguration,

    /**
     * The RelationshipTlsConfigurations model constructor.
     * @property {module:model/RelationshipTlsConfigurations}
     */
    RelationshipTlsConfigurations,

    /**
     * The RelationshipTlsConfigurationsTlsConfigurations model constructor.
     * @property {module:model/RelationshipTlsConfigurationsTlsConfigurations}
     */
    RelationshipTlsConfigurationsTlsConfigurations,

    /**
     * The RelationshipTlsDnsRecord model constructor.
     * @property {module:model/RelationshipTlsDnsRecord}
     */
    RelationshipTlsDnsRecord,

    /**
     * The RelationshipTlsDnsRecordDnsRecord model constructor.
     * @property {module:model/RelationshipTlsDnsRecordDnsRecord}
     */
    RelationshipTlsDnsRecordDnsRecord,

    /**
     * The RelationshipTlsDnsRecords model constructor.
     * @property {module:model/RelationshipTlsDnsRecords}
     */
    RelationshipTlsDnsRecords,

    /**
     * The RelationshipTlsDomain model constructor.
     * @property {module:model/RelationshipTlsDomain}
     */
    RelationshipTlsDomain,

    /**
     * The RelationshipTlsDomainTlsDomain model constructor.
     * @property {module:model/RelationshipTlsDomainTlsDomain}
     */
    RelationshipTlsDomainTlsDomain,

    /**
     * The RelationshipTlsDomains model constructor.
     * @property {module:model/RelationshipTlsDomains}
     */
    RelationshipTlsDomains,

    /**
     * The RelationshipTlsDomainsTlsDomains model constructor.
     * @property {module:model/RelationshipTlsDomainsTlsDomains}
     */
    RelationshipTlsDomainsTlsDomains,

    /**
     * The RelationshipTlsPrivateKey model constructor.
     * @property {module:model/RelationshipTlsPrivateKey}
     */
    RelationshipTlsPrivateKey,

    /**
     * The RelationshipTlsPrivateKeyTlsPrivateKey model constructor.
     * @property {module:model/RelationshipTlsPrivateKeyTlsPrivateKey}
     */
    RelationshipTlsPrivateKeyTlsPrivateKey,

    /**
     * The RelationshipTlsPrivateKeys model constructor.
     * @property {module:model/RelationshipTlsPrivateKeys}
     */
    RelationshipTlsPrivateKeys,

    /**
     * The RelationshipTlsPrivateKeysTlsPrivateKeys model constructor.
     * @property {module:model/RelationshipTlsPrivateKeysTlsPrivateKeys}
     */
    RelationshipTlsPrivateKeysTlsPrivateKeys,

    /**
     * The RelationshipTlsSubscription model constructor.
     * @property {module:model/RelationshipTlsSubscription}
     */
    RelationshipTlsSubscription,

    /**
     * The RelationshipTlsSubscriptionTlsSubscription model constructor.
     * @property {module:model/RelationshipTlsSubscriptionTlsSubscription}
     */
    RelationshipTlsSubscriptionTlsSubscription,

    /**
     * The RelationshipTlsSubscriptions model constructor.
     * @property {module:model/RelationshipTlsSubscriptions}
     */
    RelationshipTlsSubscriptions,

    /**
     * The RelationshipUser model constructor.
     * @property {module:model/RelationshipUser}
     */
    RelationshipUser,

    /**
     * The RelationshipUserUser model constructor.
     * @property {module:model/RelationshipUserUser}
     */
    RelationshipUserUser,

    /**
     * The RelationshipWafActiveRules model constructor.
     * @property {module:model/RelationshipWafActiveRules}
     */
    RelationshipWafActiveRules,

    /**
     * The RelationshipWafActiveRulesWafActiveRules model constructor.
     * @property {module:model/RelationshipWafActiveRulesWafActiveRules}
     */
    RelationshipWafActiveRulesWafActiveRules,

    /**
     * The RelationshipWafFirewall model constructor.
     * @property {module:model/RelationshipWafFirewall}
     */
    RelationshipWafFirewall,

    /**
     * The RelationshipWafFirewallVersion model constructor.
     * @property {module:model/RelationshipWafFirewallVersion}
     */
    RelationshipWafFirewallVersion,

    /**
     * The RelationshipWafFirewallVersionWafFirewallVersion model constructor.
     * @property {module:model/RelationshipWafFirewallVersionWafFirewallVersion}
     */
    RelationshipWafFirewallVersionWafFirewallVersion,

    /**
     * The RelationshipWafFirewallVersions model constructor.
     * @property {module:model/RelationshipWafFirewallVersions}
     */
    RelationshipWafFirewallVersions,

    /**
     * The RelationshipWafFirewallWafFirewall model constructor.
     * @property {module:model/RelationshipWafFirewallWafFirewall}
     */
    RelationshipWafFirewallWafFirewall,

    /**
     * The RelationshipWafRule model constructor.
     * @property {module:model/RelationshipWafRule}
     */
    RelationshipWafRule,

    /**
     * The RelationshipWafRuleRevision model constructor.
     * @property {module:model/RelationshipWafRuleRevision}
     */
    RelationshipWafRuleRevision,

    /**
     * The RelationshipWafRuleRevisionWafRuleRevisions model constructor.
     * @property {module:model/RelationshipWafRuleRevisionWafRuleRevisions}
     */
    RelationshipWafRuleRevisionWafRuleRevisions,

    /**
     * The RelationshipWafRuleRevisions model constructor.
     * @property {module:model/RelationshipWafRuleRevisions}
     */
    RelationshipWafRuleRevisions,

    /**
     * The RelationshipWafRuleWafRule model constructor.
     * @property {module:model/RelationshipWafRuleWafRule}
     */
    RelationshipWafRuleWafRule,

    /**
     * The RelationshipWafRules model constructor.
     * @property {module:model/RelationshipWafRules}
     */
    RelationshipWafRules,

    /**
     * The RelationshipWafTags model constructor.
     * @property {module:model/RelationshipWafTags}
     */
    RelationshipWafTags,

    /**
     * The RelationshipWafTagsWafTags model constructor.
     * @property {module:model/RelationshipWafTagsWafTags}
     */
    RelationshipWafTagsWafTags,

    /**
     * The RelationshipsForInvitation model constructor.
     * @property {module:model/RelationshipsForInvitation}
     */
    RelationshipsForInvitation,

    /**
     * The RelationshipsForMutualAuthentication model constructor.
     * @property {module:model/RelationshipsForMutualAuthentication}
     */
    RelationshipsForMutualAuthentication,

    /**
     * The RelationshipsForStar model constructor.
     * @property {module:model/RelationshipsForStar}
     */
    RelationshipsForStar,

    /**
     * The RelationshipsForTlsActivation model constructor.
     * @property {module:model/RelationshipsForTlsActivation}
     */
    RelationshipsForTlsActivation,

    /**
     * The RelationshipsForTlsBulkCertificate model constructor.
     * @property {module:model/RelationshipsForTlsBulkCertificate}
     */
    RelationshipsForTlsBulkCertificate,

    /**
     * The RelationshipsForTlsConfiguration model constructor.
     * @property {module:model/RelationshipsForTlsConfiguration}
     */
    RelationshipsForTlsConfiguration,

    /**
     * The RelationshipsForTlsDomain model constructor.
     * @property {module:model/RelationshipsForTlsDomain}
     */
    RelationshipsForTlsDomain,

    /**
     * The RelationshipsForTlsPrivateKey model constructor.
     * @property {module:model/RelationshipsForTlsPrivateKey}
     */
    RelationshipsForTlsPrivateKey,

    /**
     * The RelationshipsForTlsSubscription model constructor.
     * @property {module:model/RelationshipsForTlsSubscription}
     */
    RelationshipsForTlsSubscription,

    /**
     * The RelationshipsForWafActiveRule model constructor.
     * @property {module:model/RelationshipsForWafActiveRule}
     */
    RelationshipsForWafActiveRule,

    /**
     * The RelationshipsForWafExclusion model constructor.
     * @property {module:model/RelationshipsForWafExclusion}
     */
    RelationshipsForWafExclusion,

    /**
     * The RelationshipsForWafFirewallVersion model constructor.
     * @property {module:model/RelationshipsForWafFirewallVersion}
     */
    RelationshipsForWafFirewallVersion,

    /**
     * The RelationshipsForWafRule model constructor.
     * @property {module:model/RelationshipsForWafRule}
     */
    RelationshipsForWafRule,

    /**
     * The RequestSettings model constructor.
     * @property {module:model/RequestSettings}
     */
    RequestSettings,

    /**
     * The RequestSettingsResponse model constructor.
     * @property {module:model/RequestSettingsResponse}
     */
    RequestSettingsResponse,

    /**
     * The Resource model constructor.
     * @property {module:model/Resource}
     */
    Resource,

    /**
     * The ResourceResponse model constructor.
     * @property {module:model/ResourceResponse}
     */
    ResourceResponse,

    /**
     * The ResourceResponseAllOf model constructor.
     * @property {module:model/ResourceResponseAllOf}
     */
    ResourceResponseAllOf,

    /**
     * The ResponseObject model constructor.
     * @property {module:model/ResponseObject}
     */
    ResponseObject,

    /**
     * The ResponseObjectResponse model constructor.
     * @property {module:model/ResponseObjectResponse}
     */
    ResponseObjectResponse,

    /**
     * The Results model constructor.
     * @property {module:model/Results}
     */
    Results,

    /**
     * The RoleUser model constructor.
     * @property {module:model/RoleUser}
     */
    RoleUser,

    /**
     * The SchemasContactResponse model constructor.
     * @property {module:model/SchemasContactResponse}
     */
    SchemasContactResponse,

    /**
     * The SchemasSnippetResponse model constructor.
     * @property {module:model/SchemasSnippetResponse}
     */
    SchemasSnippetResponse,

    /**
     * The SchemasUserResponse model constructor.
     * @property {module:model/SchemasUserResponse}
     */
    SchemasUserResponse,

    /**
     * The SchemasVersion model constructor.
     * @property {module:model/SchemasVersion}
     */
    SchemasVersion,

    /**
     * The SchemasVersionResponse model constructor.
     * @property {module:model/SchemasVersionResponse}
     */
    SchemasVersionResponse,

    /**
     * The SchemasWafFirewallVersion model constructor.
     * @property {module:model/SchemasWafFirewallVersion}
     */
    SchemasWafFirewallVersion,

    /**
     * The SchemasWafFirewallVersionData model constructor.
     * @property {module:model/SchemasWafFirewallVersionData}
     */
    SchemasWafFirewallVersionData,

    /**
     * The Server model constructor.
     * @property {module:model/Server}
     */
    Server,

    /**
     * The ServerResponse model constructor.
     * @property {module:model/ServerResponse}
     */
    ServerResponse,

    /**
     * The ServerResponseAllOf model constructor.
     * @property {module:model/ServerResponseAllOf}
     */
    ServerResponseAllOf,

    /**
     * The Service model constructor.
     * @property {module:model/Service}
     */
    Service,

    /**
     * The ServiceAuthorization model constructor.
     * @property {module:model/ServiceAuthorization}
     */
    ServiceAuthorization,

    /**
     * The ServiceAuthorizationData model constructor.
     * @property {module:model/ServiceAuthorizationData}
     */
    ServiceAuthorizationData,

    /**
     * The ServiceAuthorizationDataAttributes model constructor.
     * @property {module:model/ServiceAuthorizationDataAttributes}
     */
    ServiceAuthorizationDataAttributes,

    /**
     * The ServiceAuthorizationDataRelationships model constructor.
     * @property {module:model/ServiceAuthorizationDataRelationships}
     */
    ServiceAuthorizationDataRelationships,

    /**
     * The ServiceAuthorizationDataRelationshipsUser model constructor.
     * @property {module:model/ServiceAuthorizationDataRelationshipsUser}
     */
    ServiceAuthorizationDataRelationshipsUser,

    /**
     * The ServiceAuthorizationDataRelationshipsUserData model constructor.
     * @property {module:model/ServiceAuthorizationDataRelationshipsUserData}
     */
    ServiceAuthorizationDataRelationshipsUserData,

    /**
     * The ServiceAuthorizationResponse model constructor.
     * @property {module:model/ServiceAuthorizationResponse}
     */
    ServiceAuthorizationResponse,

    /**
     * The ServiceAuthorizationResponseData model constructor.
     * @property {module:model/ServiceAuthorizationResponseData}
     */
    ServiceAuthorizationResponseData,

    /**
     * The ServiceAuthorizationResponseDataAllOf model constructor.
     * @property {module:model/ServiceAuthorizationResponseDataAllOf}
     */
    ServiceAuthorizationResponseDataAllOf,

    /**
     * The ServiceAuthorizationsResponse model constructor.
     * @property {module:model/ServiceAuthorizationsResponse}
     */
    ServiceAuthorizationsResponse,

    /**
     * The ServiceAuthorizationsResponseAllOf model constructor.
     * @property {module:model/ServiceAuthorizationsResponseAllOf}
     */
    ServiceAuthorizationsResponseAllOf,

    /**
     * The ServiceCreate model constructor.
     * @property {module:model/ServiceCreate}
     */
    ServiceCreate,

    /**
     * The ServiceCreateAllOf model constructor.
     * @property {module:model/ServiceCreateAllOf}
     */
    ServiceCreateAllOf,

    /**
     * The ServiceDetail model constructor.
     * @property {module:model/ServiceDetail}
     */
    ServiceDetail,

    /**
     * The ServiceDetailAllOf model constructor.
     * @property {module:model/ServiceDetailAllOf}
     */
    ServiceDetailAllOf,

    /**
     * The ServiceIdAndVersion model constructor.
     * @property {module:model/ServiceIdAndVersion}
     */
    ServiceIdAndVersion,

    /**
     * The ServiceInvitation model constructor.
     * @property {module:model/ServiceInvitation}
     */
    ServiceInvitation,

    /**
     * The ServiceInvitationData model constructor.
     * @property {module:model/ServiceInvitationData}
     */
    ServiceInvitationData,

    /**
     * The ServiceInvitationDataAttributes model constructor.
     * @property {module:model/ServiceInvitationDataAttributes}
     */
    ServiceInvitationDataAttributes,

    /**
     * The ServiceInvitationDataRelationships model constructor.
     * @property {module:model/ServiceInvitationDataRelationships}
     */
    ServiceInvitationDataRelationships,

    /**
     * The ServiceInvitationResponse model constructor.
     * @property {module:model/ServiceInvitationResponse}
     */
    ServiceInvitationResponse,

    /**
     * The ServiceInvitationResponseAllOf model constructor.
     * @property {module:model/ServiceInvitationResponseAllOf}
     */
    ServiceInvitationResponseAllOf,

    /**
     * The ServiceInvitationResponseAllOfData model constructor.
     * @property {module:model/ServiceInvitationResponseAllOfData}
     */
    ServiceInvitationResponseAllOfData,

    /**
     * The ServiceListResponse model constructor.
     * @property {module:model/ServiceListResponse}
     */
    ServiceListResponse,

    /**
     * The ServiceListResponseAllOf model constructor.
     * @property {module:model/ServiceListResponseAllOf}
     */
    ServiceListResponseAllOf,

    /**
     * The ServiceResponse model constructor.
     * @property {module:model/ServiceResponse}
     */
    ServiceResponse,

    /**
     * The ServiceResponseAllOf model constructor.
     * @property {module:model/ServiceResponseAllOf}
     */
    ServiceResponseAllOf,

    /**
     * The ServiceVersionDetail model constructor.
     * @property {module:model/ServiceVersionDetail}
     */
    ServiceVersionDetail,

    /**
     * The ServiceVersionDetailOrNull model constructor.
     * @property {module:model/ServiceVersionDetailOrNull}
     */
    ServiceVersionDetailOrNull,

    /**
     * The Settings model constructor.
     * @property {module:model/Settings}
     */
    Settings,

    /**
     * The SettingsResponse model constructor.
     * @property {module:model/SettingsResponse}
     */
    SettingsResponse,

    /**
     * The Snippet model constructor.
     * @property {module:model/Snippet}
     */
    Snippet,

    /**
     * The SnippetResponse model constructor.
     * @property {module:model/SnippetResponse}
     */
    SnippetResponse,

    /**
     * The SnippetResponseAllOf model constructor.
     * @property {module:model/SnippetResponseAllOf}
     */
    SnippetResponseAllOf,

    /**
     * The Star model constructor.
     * @property {module:model/Star}
     */
    Star,

    /**
     * The StarData model constructor.
     * @property {module:model/StarData}
     */
    StarData,

    /**
     * The StarResponse model constructor.
     * @property {module:model/StarResponse}
     */
    StarResponse,

    /**
     * The StarResponseAllOf model constructor.
     * @property {module:model/StarResponseAllOf}
     */
    StarResponseAllOf,

    /**
     * The Stats model constructor.
     * @property {module:model/Stats}
     */
    Stats,

    /**
     * The Store model constructor.
     * @property {module:model/Store}
     */
    Store,

    /**
     * The StoreResponse model constructor.
     * @property {module:model/StoreResponse}
     */
    StoreResponse,

    /**
     * The Timestamps model constructor.
     * @property {module:model/Timestamps}
     */
    Timestamps,

    /**
     * The TimestampsNoDelete model constructor.
     * @property {module:model/TimestampsNoDelete}
     */
    TimestampsNoDelete,

    /**
     * The TlsActivation model constructor.
     * @property {module:model/TlsActivation}
     */
    TlsActivation,

    /**
     * The TlsActivationData model constructor.
     * @property {module:model/TlsActivationData}
     */
    TlsActivationData,

    /**
     * The TlsActivationResponse model constructor.
     * @property {module:model/TlsActivationResponse}
     */
    TlsActivationResponse,

    /**
     * The TlsActivationResponseData model constructor.
     * @property {module:model/TlsActivationResponseData}
     */
    TlsActivationResponseData,

    /**
     * The TlsActivationResponseDataAllOf model constructor.
     * @property {module:model/TlsActivationResponseDataAllOf}
     */
    TlsActivationResponseDataAllOf,

    /**
     * The TlsActivationsResponse model constructor.
     * @property {module:model/TlsActivationsResponse}
     */
    TlsActivationsResponse,

    /**
     * The TlsActivationsResponseAllOf model constructor.
     * @property {module:model/TlsActivationsResponseAllOf}
     */
    TlsActivationsResponseAllOf,

    /**
     * The TlsBulkCertificate model constructor.
     * @property {module:model/TlsBulkCertificate}
     */
    TlsBulkCertificate,

    /**
     * The TlsBulkCertificateData model constructor.
     * @property {module:model/TlsBulkCertificateData}
     */
    TlsBulkCertificateData,

    /**
     * The TlsBulkCertificateDataAttributes model constructor.
     * @property {module:model/TlsBulkCertificateDataAttributes}
     */
    TlsBulkCertificateDataAttributes,

    /**
     * The TlsBulkCertificateResponse model constructor.
     * @property {module:model/TlsBulkCertificateResponse}
     */
    TlsBulkCertificateResponse,

    /**
     * The TlsBulkCertificateResponseAttributes model constructor.
     * @property {module:model/TlsBulkCertificateResponseAttributes}
     */
    TlsBulkCertificateResponseAttributes,

    /**
     * The TlsBulkCertificateResponseAttributesAllOf model constructor.
     * @property {module:model/TlsBulkCertificateResponseAttributesAllOf}
     */
    TlsBulkCertificateResponseAttributesAllOf,

    /**
     * The TlsBulkCertificateResponseData model constructor.
     * @property {module:model/TlsBulkCertificateResponseData}
     */
    TlsBulkCertificateResponseData,

    /**
     * The TlsBulkCertificateResponseDataAllOf model constructor.
     * @property {module:model/TlsBulkCertificateResponseDataAllOf}
     */
    TlsBulkCertificateResponseDataAllOf,

    /**
     * The TlsBulkCertificatesResponse model constructor.
     * @property {module:model/TlsBulkCertificatesResponse}
     */
    TlsBulkCertificatesResponse,

    /**
     * The TlsBulkCertificatesResponseAllOf model constructor.
     * @property {module:model/TlsBulkCertificatesResponseAllOf}
     */
    TlsBulkCertificatesResponseAllOf,

    /**
     * The TlsCertificate model constructor.
     * @property {module:model/TlsCertificate}
     */
    TlsCertificate,

    /**
     * The TlsCertificateData model constructor.
     * @property {module:model/TlsCertificateData}
     */
    TlsCertificateData,

    /**
     * The TlsCertificateDataAttributes model constructor.
     * @property {module:model/TlsCertificateDataAttributes}
     */
    TlsCertificateDataAttributes,

    /**
     * The TlsCertificateResponse model constructor.
     * @property {module:model/TlsCertificateResponse}
     */
    TlsCertificateResponse,

    /**
     * The TlsCertificateResponseAttributes model constructor.
     * @property {module:model/TlsCertificateResponseAttributes}
     */
    TlsCertificateResponseAttributes,

    /**
     * The TlsCertificateResponseAttributesAllOf model constructor.
     * @property {module:model/TlsCertificateResponseAttributesAllOf}
     */
    TlsCertificateResponseAttributesAllOf,

    /**
     * The TlsCertificateResponseData model constructor.
     * @property {module:model/TlsCertificateResponseData}
     */
    TlsCertificateResponseData,

    /**
     * The TlsCertificateResponseDataAllOf model constructor.
     * @property {module:model/TlsCertificateResponseDataAllOf}
     */
    TlsCertificateResponseDataAllOf,

    /**
     * The TlsCertificatesResponse model constructor.
     * @property {module:model/TlsCertificatesResponse}
     */
    TlsCertificatesResponse,

    /**
     * The TlsCertificatesResponseAllOf model constructor.
     * @property {module:model/TlsCertificatesResponseAllOf}
     */
    TlsCertificatesResponseAllOf,

    /**
     * The TlsCommon model constructor.
     * @property {module:model/TlsCommon}
     */
    TlsCommon,

    /**
     * The TlsConfiguration model constructor.
     * @property {module:model/TlsConfiguration}
     */
    TlsConfiguration,

    /**
     * The TlsConfigurationData model constructor.
     * @property {module:model/TlsConfigurationData}
     */
    TlsConfigurationData,

    /**
     * The TlsConfigurationDataAttributes model constructor.
     * @property {module:model/TlsConfigurationDataAttributes}
     */
    TlsConfigurationDataAttributes,

    /**
     * The TlsConfigurationResponse model constructor.
     * @property {module:model/TlsConfigurationResponse}
     */
    TlsConfigurationResponse,

    /**
     * The TlsConfigurationResponseAttributes model constructor.
     * @property {module:model/TlsConfigurationResponseAttributes}
     */
    TlsConfigurationResponseAttributes,

    /**
     * The TlsConfigurationResponseAttributesAllOf model constructor.
     * @property {module:model/TlsConfigurationResponseAttributesAllOf}
     */
    TlsConfigurationResponseAttributesAllOf,

    /**
     * The TlsConfigurationResponseData model constructor.
     * @property {module:model/TlsConfigurationResponseData}
     */
    TlsConfigurationResponseData,

    /**
     * The TlsConfigurationResponseDataAllOf model constructor.
     * @property {module:model/TlsConfigurationResponseDataAllOf}
     */
    TlsConfigurationResponseDataAllOf,

    /**
     * The TlsConfigurationsResponse model constructor.
     * @property {module:model/TlsConfigurationsResponse}
     */
    TlsConfigurationsResponse,

    /**
     * The TlsConfigurationsResponseAllOf model constructor.
     * @property {module:model/TlsConfigurationsResponseAllOf}
     */
    TlsConfigurationsResponseAllOf,

    /**
     * The TlsDnsRecord model constructor.
     * @property {module:model/TlsDnsRecord}
     */
    TlsDnsRecord,

    /**
     * The TlsDomainData model constructor.
     * @property {module:model/TlsDomainData}
     */
    TlsDomainData,

    /**
     * The TlsDomainsResponse model constructor.
     * @property {module:model/TlsDomainsResponse}
     */
    TlsDomainsResponse,

    /**
     * The TlsDomainsResponseAllOf model constructor.
     * @property {module:model/TlsDomainsResponseAllOf}
     */
    TlsDomainsResponseAllOf,

    /**
     * The TlsPrivateKey model constructor.
     * @property {module:model/TlsPrivateKey}
     */
    TlsPrivateKey,

    /**
     * The TlsPrivateKeyData model constructor.
     * @property {module:model/TlsPrivateKeyData}
     */
    TlsPrivateKeyData,

    /**
     * The TlsPrivateKeyDataAttributes model constructor.
     * @property {module:model/TlsPrivateKeyDataAttributes}
     */
    TlsPrivateKeyDataAttributes,

    /**
     * The TlsPrivateKeyResponse model constructor.
     * @property {module:model/TlsPrivateKeyResponse}
     */
    TlsPrivateKeyResponse,

    /**
     * The TlsPrivateKeyResponseAttributes model constructor.
     * @property {module:model/TlsPrivateKeyResponseAttributes}
     */
    TlsPrivateKeyResponseAttributes,

    /**
     * The TlsPrivateKeyResponseAttributesAllOf model constructor.
     * @property {module:model/TlsPrivateKeyResponseAttributesAllOf}
     */
    TlsPrivateKeyResponseAttributesAllOf,

    /**
     * The TlsPrivateKeyResponseData model constructor.
     * @property {module:model/TlsPrivateKeyResponseData}
     */
    TlsPrivateKeyResponseData,

    /**
     * The TlsPrivateKeysResponse model constructor.
     * @property {module:model/TlsPrivateKeysResponse}
     */
    TlsPrivateKeysResponse,

    /**
     * The TlsPrivateKeysResponseAllOf model constructor.
     * @property {module:model/TlsPrivateKeysResponseAllOf}
     */
    TlsPrivateKeysResponseAllOf,

    /**
     * The TlsSubscription model constructor.
     * @property {module:model/TlsSubscription}
     */
    TlsSubscription,

    /**
     * The TlsSubscriptionData model constructor.
     * @property {module:model/TlsSubscriptionData}
     */
    TlsSubscriptionData,

    /**
     * The TlsSubscriptionDataAttributes model constructor.
     * @property {module:model/TlsSubscriptionDataAttributes}
     */
    TlsSubscriptionDataAttributes,

    /**
     * The TlsSubscriptionResponse model constructor.
     * @property {module:model/TlsSubscriptionResponse}
     */
    TlsSubscriptionResponse,

    /**
     * The TlsSubscriptionResponseAttributes model constructor.
     * @property {module:model/TlsSubscriptionResponseAttributes}
     */
    TlsSubscriptionResponseAttributes,

    /**
     * The TlsSubscriptionResponseAttributesAllOf model constructor.
     * @property {module:model/TlsSubscriptionResponseAttributesAllOf}
     */
    TlsSubscriptionResponseAttributesAllOf,

    /**
     * The TlsSubscriptionResponseData model constructor.
     * @property {module:model/TlsSubscriptionResponseData}
     */
    TlsSubscriptionResponseData,

    /**
     * The TlsSubscriptionResponseDataAllOf model constructor.
     * @property {module:model/TlsSubscriptionResponseDataAllOf}
     */
    TlsSubscriptionResponseDataAllOf,

    /**
     * The TlsSubscriptionsResponse model constructor.
     * @property {module:model/TlsSubscriptionsResponse}
     */
    TlsSubscriptionsResponse,

    /**
     * The TlsSubscriptionsResponseAllOf model constructor.
     * @property {module:model/TlsSubscriptionsResponseAllOf}
     */
    TlsSubscriptionsResponseAllOf,

    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token,

    /**
     * The TokenCreatedResponse model constructor.
     * @property {module:model/TokenCreatedResponse}
     */
    TokenCreatedResponse,

    /**
     * The TokenCreatedResponseAllOf model constructor.
     * @property {module:model/TokenCreatedResponseAllOf}
     */
    TokenCreatedResponseAllOf,

    /**
     * The TokenResponse model constructor.
     * @property {module:model/TokenResponse}
     */
    TokenResponse,

    /**
     * The TokenResponseAllOf model constructor.
     * @property {module:model/TokenResponseAllOf}
     */
    TokenResponseAllOf,

    /**
     * The TypeBillingAddress model constructor.
     * @property {module:model/TypeBillingAddress}
     */
    TypeBillingAddress,

    /**
     * The TypeContact model constructor.
     * @property {module:model/TypeContact}
     */
    TypeContact,

    /**
     * The TypeCustomer model constructor.
     * @property {module:model/TypeCustomer}
     */
    TypeCustomer,

    /**
     * The TypeEvent model constructor.
     * @property {module:model/TypeEvent}
     */
    TypeEvent,

    /**
     * The TypeInvitation model constructor.
     * @property {module:model/TypeInvitation}
     */
    TypeInvitation,

    /**
     * The TypeMutualAuthentication model constructor.
     * @property {module:model/TypeMutualAuthentication}
     */
    TypeMutualAuthentication,

    /**
     * The TypeResource model constructor.
     * @property {module:model/TypeResource}
     */
    TypeResource,

    /**
     * The TypeService model constructor.
     * @property {module:model/TypeService}
     */
    TypeService,

    /**
     * The TypeServiceAuthorization model constructor.
     * @property {module:model/TypeServiceAuthorization}
     */
    TypeServiceAuthorization,

    /**
     * The TypeServiceInvitation model constructor.
     * @property {module:model/TypeServiceInvitation}
     */
    TypeServiceInvitation,

    /**
     * The TypeStar model constructor.
     * @property {module:model/TypeStar}
     */
    TypeStar,

    /**
     * The TypeTlsActivation model constructor.
     * @property {module:model/TypeTlsActivation}
     */
    TypeTlsActivation,

    /**
     * The TypeTlsBulkCertificate model constructor.
     * @property {module:model/TypeTlsBulkCertificate}
     */
    TypeTlsBulkCertificate,

    /**
     * The TypeTlsCertificate model constructor.
     * @property {module:model/TypeTlsCertificate}
     */
    TypeTlsCertificate,

    /**
     * The TypeTlsConfiguration model constructor.
     * @property {module:model/TypeTlsConfiguration}
     */
    TypeTlsConfiguration,

    /**
     * The TypeTlsDnsRecord model constructor.
     * @property {module:model/TypeTlsDnsRecord}
     */
    TypeTlsDnsRecord,

    /**
     * The TypeTlsDomain model constructor.
     * @property {module:model/TypeTlsDomain}
     */
    TypeTlsDomain,

    /**
     * The TypeTlsPrivateKey model constructor.
     * @property {module:model/TypeTlsPrivateKey}
     */
    TypeTlsPrivateKey,

    /**
     * The TypeTlsSubscription model constructor.
     * @property {module:model/TypeTlsSubscription}
     */
    TypeTlsSubscription,

    /**
     * The TypeUser model constructor.
     * @property {module:model/TypeUser}
     */
    TypeUser,

    /**
     * The TypeWafActiveRule model constructor.
     * @property {module:model/TypeWafActiveRule}
     */
    TypeWafActiveRule,

    /**
     * The TypeWafExclusion model constructor.
     * @property {module:model/TypeWafExclusion}
     */
    TypeWafExclusion,

    /**
     * The TypeWafFirewall model constructor.
     * @property {module:model/TypeWafFirewall}
     */
    TypeWafFirewall,

    /**
     * The TypeWafFirewallVersion model constructor.
     * @property {module:model/TypeWafFirewallVersion}
     */
    TypeWafFirewallVersion,

    /**
     * The TypeWafRule model constructor.
     * @property {module:model/TypeWafRule}
     */
    TypeWafRule,

    /**
     * The TypeWafRuleRevision model constructor.
     * @property {module:model/TypeWafRuleRevision}
     */
    TypeWafRuleRevision,

    /**
     * The TypeWafTag model constructor.
     * @property {module:model/TypeWafTag}
     */
    TypeWafTag,

    /**
     * The UpdateBillingAddressRequest model constructor.
     * @property {module:model/UpdateBillingAddressRequest}
     */
    UpdateBillingAddressRequest,

    /**
     * The UpdateBillingAddressRequestData model constructor.
     * @property {module:model/UpdateBillingAddressRequestData}
     */
    UpdateBillingAddressRequestData,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserResponse model constructor.
     * @property {module:model/UserResponse}
     */
    UserResponse,

    /**
     * The UserResponseAllOf model constructor.
     * @property {module:model/UserResponseAllOf}
     */
    UserResponseAllOf,

    /**
     * The Vcl model constructor.
     * @property {module:model/Vcl}
     */
    Vcl,

    /**
     * The VclDiff model constructor.
     * @property {module:model/VclDiff}
     */
    VclDiff,

    /**
     * The VclResponse model constructor.
     * @property {module:model/VclResponse}
     */
    VclResponse,

    /**
     * The Version model constructor.
     * @property {module:model/Version}
     */
    Version,

    /**
     * The VersionCreateResponse model constructor.
     * @property {module:model/VersionCreateResponse}
     */
    VersionCreateResponse,

    /**
     * The VersionDetail model constructor.
     * @property {module:model/VersionDetail}
     */
    VersionDetail,

    /**
     * The VersionDetailSettings model constructor.
     * @property {module:model/VersionDetailSettings}
     */
    VersionDetailSettings,

    /**
     * The VersionResponse model constructor.
     * @property {module:model/VersionResponse}
     */
    VersionResponse,

    /**
     * The VersionResponseAllOf model constructor.
     * @property {module:model/VersionResponseAllOf}
     */
    VersionResponseAllOf,

    /**
     * The WafActiveRule model constructor.
     * @property {module:model/WafActiveRule}
     */
    WafActiveRule,

    /**
     * The WafActiveRuleCreationResponse model constructor.
     * @property {module:model/WafActiveRuleCreationResponse}
     */
    WafActiveRuleCreationResponse,

    /**
     * The WafActiveRuleData model constructor.
     * @property {module:model/WafActiveRuleData}
     */
    WafActiveRuleData,

    /**
     * The WafActiveRuleDataAttributes model constructor.
     * @property {module:model/WafActiveRuleDataAttributes}
     */
    WafActiveRuleDataAttributes,

    /**
     * The WafActiveRuleResponse model constructor.
     * @property {module:model/WafActiveRuleResponse}
     */
    WafActiveRuleResponse,

    /**
     * The WafActiveRuleResponseData model constructor.
     * @property {module:model/WafActiveRuleResponseData}
     */
    WafActiveRuleResponseData,

    /**
     * The WafActiveRuleResponseDataAllOf model constructor.
     * @property {module:model/WafActiveRuleResponseDataAllOf}
     */
    WafActiveRuleResponseDataAllOf,

    /**
     * The WafActiveRuleResponseDataAttributes model constructor.
     * @property {module:model/WafActiveRuleResponseDataAttributes}
     */
    WafActiveRuleResponseDataAttributes,

    /**
     * The WafActiveRuleResponseDataAttributesAllOf model constructor.
     * @property {module:model/WafActiveRuleResponseDataAttributesAllOf}
     */
    WafActiveRuleResponseDataAttributesAllOf,

    /**
     * The WafActiveRuleResponseDataRelationships model constructor.
     * @property {module:model/WafActiveRuleResponseDataRelationships}
     */
    WafActiveRuleResponseDataRelationships,

    /**
     * The WafActiveRulesResponse model constructor.
     * @property {module:model/WafActiveRulesResponse}
     */
    WafActiveRulesResponse,

    /**
     * The WafActiveRulesResponseAllOf model constructor.
     * @property {module:model/WafActiveRulesResponseAllOf}
     */
    WafActiveRulesResponseAllOf,

    /**
     * The WafExclusion model constructor.
     * @property {module:model/WafExclusion}
     */
    WafExclusion,

    /**
     * The WafExclusionData model constructor.
     * @property {module:model/WafExclusionData}
     */
    WafExclusionData,

    /**
     * The WafExclusionDataAttributes model constructor.
     * @property {module:model/WafExclusionDataAttributes}
     */
    WafExclusionDataAttributes,

    /**
     * The WafExclusionResponse model constructor.
     * @property {module:model/WafExclusionResponse}
     */
    WafExclusionResponse,

    /**
     * The WafExclusionResponseData model constructor.
     * @property {module:model/WafExclusionResponseData}
     */
    WafExclusionResponseData,

    /**
     * The WafExclusionResponseDataAllOf model constructor.
     * @property {module:model/WafExclusionResponseDataAllOf}
     */
    WafExclusionResponseDataAllOf,

    /**
     * The WafExclusionResponseDataAttributes model constructor.
     * @property {module:model/WafExclusionResponseDataAttributes}
     */
    WafExclusionResponseDataAttributes,

    /**
     * The WafExclusionResponseDataAttributesAllOf model constructor.
     * @property {module:model/WafExclusionResponseDataAttributesAllOf}
     */
    WafExclusionResponseDataAttributesAllOf,

    /**
     * The WafExclusionResponseDataRelationships model constructor.
     * @property {module:model/WafExclusionResponseDataRelationships}
     */
    WafExclusionResponseDataRelationships,

    /**
     * The WafExclusionsResponse model constructor.
     * @property {module:model/WafExclusionsResponse}
     */
    WafExclusionsResponse,

    /**
     * The WafExclusionsResponseAllOf model constructor.
     * @property {module:model/WafExclusionsResponseAllOf}
     */
    WafExclusionsResponseAllOf,

    /**
     * The WafFirewall model constructor.
     * @property {module:model/WafFirewall}
     */
    WafFirewall,

    /**
     * The WafFirewallData model constructor.
     * @property {module:model/WafFirewallData}
     */
    WafFirewallData,

    /**
     * The WafFirewallDataAttributes model constructor.
     * @property {module:model/WafFirewallDataAttributes}
     */
    WafFirewallDataAttributes,

    /**
     * The WafFirewallResponse model constructor.
     * @property {module:model/WafFirewallResponse}
     */
    WafFirewallResponse,

    /**
     * The WafFirewallResponseData model constructor.
     * @property {module:model/WafFirewallResponseData}
     */
    WafFirewallResponseData,

    /**
     * The WafFirewallResponseDataAllOf model constructor.
     * @property {module:model/WafFirewallResponseDataAllOf}
     */
    WafFirewallResponseDataAllOf,

    /**
     * The WafFirewallResponseDataAttributes model constructor.
     * @property {module:model/WafFirewallResponseDataAttributes}
     */
    WafFirewallResponseDataAttributes,

    /**
     * The WafFirewallResponseDataAttributesAllOf model constructor.
     * @property {module:model/WafFirewallResponseDataAttributesAllOf}
     */
    WafFirewallResponseDataAttributesAllOf,

    /**
     * The WafFirewallVersion model constructor.
     * @property {module:model/WafFirewallVersion}
     */
    WafFirewallVersion,

    /**
     * The WafFirewallVersionData model constructor.
     * @property {module:model/WafFirewallVersionData}
     */
    WafFirewallVersionData,

    /**
     * The WafFirewallVersionDataAttributes model constructor.
     * @property {module:model/WafFirewallVersionDataAttributes}
     */
    WafFirewallVersionDataAttributes,

    /**
     * The WafFirewallVersionResponse model constructor.
     * @property {module:model/WafFirewallVersionResponse}
     */
    WafFirewallVersionResponse,

    /**
     * The WafFirewallVersionResponseData model constructor.
     * @property {module:model/WafFirewallVersionResponseData}
     */
    WafFirewallVersionResponseData,

    /**
     * The WafFirewallVersionResponseDataAllOf model constructor.
     * @property {module:model/WafFirewallVersionResponseDataAllOf}
     */
    WafFirewallVersionResponseDataAllOf,

    /**
     * The WafFirewallVersionResponseDataAttributes model constructor.
     * @property {module:model/WafFirewallVersionResponseDataAttributes}
     */
    WafFirewallVersionResponseDataAttributes,

    /**
     * The WafFirewallVersionResponseDataAttributesAllOf model constructor.
     * @property {module:model/WafFirewallVersionResponseDataAttributesAllOf}
     */
    WafFirewallVersionResponseDataAttributesAllOf,

    /**
     * The WafFirewallVersionsResponse model constructor.
     * @property {module:model/WafFirewallVersionsResponse}
     */
    WafFirewallVersionsResponse,

    /**
     * The WafFirewallVersionsResponseAllOf model constructor.
     * @property {module:model/WafFirewallVersionsResponseAllOf}
     */
    WafFirewallVersionsResponseAllOf,

    /**
     * The WafFirewallsResponse model constructor.
     * @property {module:model/WafFirewallsResponse}
     */
    WafFirewallsResponse,

    /**
     * The WafFirewallsResponseAllOf model constructor.
     * @property {module:model/WafFirewallsResponseAllOf}
     */
    WafFirewallsResponseAllOf,

    /**
     * The WafRule model constructor.
     * @property {module:model/WafRule}
     */
    WafRule,

    /**
     * The WafRuleAttributes model constructor.
     * @property {module:model/WafRuleAttributes}
     */
    WafRuleAttributes,

    /**
     * The WafRuleResponse model constructor.
     * @property {module:model/WafRuleResponse}
     */
    WafRuleResponse,

    /**
     * The WafRuleResponseData model constructor.
     * @property {module:model/WafRuleResponseData}
     */
    WafRuleResponseData,

    /**
     * The WafRuleResponseDataAllOf model constructor.
     * @property {module:model/WafRuleResponseDataAllOf}
     */
    WafRuleResponseDataAllOf,

    /**
     * The WafRuleRevision model constructor.
     * @property {module:model/WafRuleRevision}
     */
    WafRuleRevision,

    /**
     * The WafRuleRevisionAttributes model constructor.
     * @property {module:model/WafRuleRevisionAttributes}
     */
    WafRuleRevisionAttributes,

    /**
     * The WafRuleRevisionOrLatest model constructor.
     * @property {module:model/WafRuleRevisionOrLatest}
     */
    WafRuleRevisionOrLatest,

    /**
     * The WafRuleRevisionResponse model constructor.
     * @property {module:model/WafRuleRevisionResponse}
     */
    WafRuleRevisionResponse,

    /**
     * The WafRuleRevisionResponseData model constructor.
     * @property {module:model/WafRuleRevisionResponseData}
     */
    WafRuleRevisionResponseData,

    /**
     * The WafRuleRevisionResponseDataAllOf model constructor.
     * @property {module:model/WafRuleRevisionResponseDataAllOf}
     */
    WafRuleRevisionResponseDataAllOf,

    /**
     * The WafRuleRevisionsResponse model constructor.
     * @property {module:model/WafRuleRevisionsResponse}
     */
    WafRuleRevisionsResponse,

    /**
     * The WafRuleRevisionsResponseAllOf model constructor.
     * @property {module:model/WafRuleRevisionsResponseAllOf}
     */
    WafRuleRevisionsResponseAllOf,

    /**
     * The WafRulesResponse model constructor.
     * @property {module:model/WafRulesResponse}
     */
    WafRulesResponse,

    /**
     * The WafRulesResponseAllOf model constructor.
     * @property {module:model/WafRulesResponseAllOf}
     */
    WafRulesResponseAllOf,

    /**
     * The WafTag model constructor.
     * @property {module:model/WafTag}
     */
    WafTag,

    /**
     * The WafTagAttributes model constructor.
     * @property {module:model/WafTagAttributes}
     */
    WafTagAttributes,

    /**
     * The WafTagsResponse model constructor.
     * @property {module:model/WafTagsResponse}
     */
    WafTagsResponse,

    /**
     * The WafTagsResponseAllOf model constructor.
     * @property {module:model/WafTagsResponseAllOf}
     */
    WafTagsResponseAllOf,

    /**
     * The WafTagsResponseDataItem model constructor.
     * @property {module:model/WafTagsResponseDataItem}
     */
    WafTagsResponseDataItem,

    /**
     * The WsMessageFormat model constructor.
     * @property {module:model/WsMessageFormat}
     */
    WsMessageFormat,

    /**
    * The AclApi service constructor.
    * @property {module:api/AclApi}
    */
    AclApi,

    /**
    * The AclEntryApi service constructor.
    * @property {module:api/AclEntryApi}
    */
    AclEntryApi,

    /**
    * The ApexRedirectApi service constructor.
    * @property {module:api/ApexRedirectApi}
    */
    ApexRedirectApi,

    /**
    * The AutomationTokensApi service constructor.
    * @property {module:api/AutomationTokensApi}
    */
    AutomationTokensApi,

    /**
    * The BackendApi service constructor.
    * @property {module:api/BackendApi}
    */
    BackendApi,

    /**
    * The BillingApi service constructor.
    * @property {module:api/BillingApi}
    */
    BillingApi,

    /**
    * The BillingAddressApi service constructor.
    * @property {module:api/BillingAddressApi}
    */
    BillingAddressApi,

    /**
    * The CacheSettingsApi service constructor.
    * @property {module:api/CacheSettingsApi}
    */
    CacheSettingsApi,

    /**
    * The ConditionApi service constructor.
    * @property {module:api/ConditionApi}
    */
    ConditionApi,

    /**
    * The ConfigStoreApi service constructor.
    * @property {module:api/ConfigStoreApi}
    */
    ConfigStoreApi,

    /**
    * The ConfigStoreItemApi service constructor.
    * @property {module:api/ConfigStoreItemApi}
    */
    ConfigStoreItemApi,

    /**
    * The ContactApi service constructor.
    * @property {module:api/ContactApi}
    */
    ContactApi,

    /**
    * The ContentApi service constructor.
    * @property {module:api/ContentApi}
    */
    ContentApi,

    /**
    * The CustomerApi service constructor.
    * @property {module:api/CustomerApi}
    */
    CustomerApi,

    /**
    * The DictionaryApi service constructor.
    * @property {module:api/DictionaryApi}
    */
    DictionaryApi,

    /**
    * The DictionaryInfoApi service constructor.
    * @property {module:api/DictionaryInfoApi}
    */
    DictionaryInfoApi,

    /**
    * The DictionaryItemApi service constructor.
    * @property {module:api/DictionaryItemApi}
    */
    DictionaryItemApi,

    /**
    * The DiffApi service constructor.
    * @property {module:api/DiffApi}
    */
    DiffApi,

    /**
    * The DirectorApi service constructor.
    * @property {module:api/DirectorApi}
    */
    DirectorApi,

    /**
    * The DirectorBackendApi service constructor.
    * @property {module:api/DirectorBackendApi}
    */
    DirectorBackendApi,

    /**
    * The DomainApi service constructor.
    * @property {module:api/DomainApi}
    */
    DomainApi,

    /**
    * The DomainOwnershipsApi service constructor.
    * @property {module:api/DomainOwnershipsApi}
    */
    DomainOwnershipsApi,

    /**
    * The EnabledProductsApi service constructor.
    * @property {module:api/EnabledProductsApi}
    */
    EnabledProductsApi,

    /**
    * The EventsApi service constructor.
    * @property {module:api/EventsApi}
    */
    EventsApi,

    /**
    * The GzipApi service constructor.
    * @property {module:api/GzipApi}
    */
    GzipApi,

    /**
    * The HeaderApi service constructor.
    * @property {module:api/HeaderApi}
    */
    HeaderApi,

    /**
    * The HealthcheckApi service constructor.
    * @property {module:api/HealthcheckApi}
    */
    HealthcheckApi,

    /**
    * The HistoricalApi service constructor.
    * @property {module:api/HistoricalApi}
    */
    HistoricalApi,

    /**
    * The Http3Api service constructor.
    * @property {module:api/Http3Api}
    */
    Http3Api,

    /**
    * The IamPermissionsApi service constructor.
    * @property {module:api/IamPermissionsApi}
    */
    IamPermissionsApi,

    /**
    * The IamRolesApi service constructor.
    * @property {module:api/IamRolesApi}
    */
    IamRolesApi,

    /**
    * The IamServiceGroupsApi service constructor.
    * @property {module:api/IamServiceGroupsApi}
    */
    IamServiceGroupsApi,

    /**
    * The IamUserGroupsApi service constructor.
    * @property {module:api/IamUserGroupsApi}
    */
    IamUserGroupsApi,

    /**
    * The InvitationsApi service constructor.
    * @property {module:api/InvitationsApi}
    */
    InvitationsApi,

    /**
    * The KvStoreApi service constructor.
    * @property {module:api/KvStoreApi}
    */
    KvStoreApi,

    /**
    * The KvStoreItemApi service constructor.
    * @property {module:api/KvStoreItemApi}
    */
    KvStoreItemApi,

    /**
    * The LoggingAzureblobApi service constructor.
    * @property {module:api/LoggingAzureblobApi}
    */
    LoggingAzureblobApi,

    /**
    * The LoggingBigqueryApi service constructor.
    * @property {module:api/LoggingBigqueryApi}
    */
    LoggingBigqueryApi,

    /**
    * The LoggingCloudfilesApi service constructor.
    * @property {module:api/LoggingCloudfilesApi}
    */
    LoggingCloudfilesApi,

    /**
    * The LoggingDatadogApi service constructor.
    * @property {module:api/LoggingDatadogApi}
    */
    LoggingDatadogApi,

    /**
    * The LoggingDigitaloceanApi service constructor.
    * @property {module:api/LoggingDigitaloceanApi}
    */
    LoggingDigitaloceanApi,

    /**
    * The LoggingElasticsearchApi service constructor.
    * @property {module:api/LoggingElasticsearchApi}
    */
    LoggingElasticsearchApi,

    /**
    * The LoggingFtpApi service constructor.
    * @property {module:api/LoggingFtpApi}
    */
    LoggingFtpApi,

    /**
    * The LoggingGcsApi service constructor.
    * @property {module:api/LoggingGcsApi}
    */
    LoggingGcsApi,

    /**
    * The LoggingHerokuApi service constructor.
    * @property {module:api/LoggingHerokuApi}
    */
    LoggingHerokuApi,

    /**
    * The LoggingHoneycombApi service constructor.
    * @property {module:api/LoggingHoneycombApi}
    */
    LoggingHoneycombApi,

    /**
    * The LoggingHttpsApi service constructor.
    * @property {module:api/LoggingHttpsApi}
    */
    LoggingHttpsApi,

    /**
    * The LoggingKafkaApi service constructor.
    * @property {module:api/LoggingKafkaApi}
    */
    LoggingKafkaApi,

    /**
    * The LoggingKinesisApi service constructor.
    * @property {module:api/LoggingKinesisApi}
    */
    LoggingKinesisApi,

    /**
    * The LoggingLogentriesApi service constructor.
    * @property {module:api/LoggingLogentriesApi}
    */
    LoggingLogentriesApi,

    /**
    * The LoggingLogglyApi service constructor.
    * @property {module:api/LoggingLogglyApi}
    */
    LoggingLogglyApi,

    /**
    * The LoggingLogshuttleApi service constructor.
    * @property {module:api/LoggingLogshuttleApi}
    */
    LoggingLogshuttleApi,

    /**
    * The LoggingNewrelicApi service constructor.
    * @property {module:api/LoggingNewrelicApi}
    */
    LoggingNewrelicApi,

    /**
    * The LoggingOpenstackApi service constructor.
    * @property {module:api/LoggingOpenstackApi}
    */
    LoggingOpenstackApi,

    /**
    * The LoggingPapertrailApi service constructor.
    * @property {module:api/LoggingPapertrailApi}
    */
    LoggingPapertrailApi,

    /**
    * The LoggingPubsubApi service constructor.
    * @property {module:api/LoggingPubsubApi}
    */
    LoggingPubsubApi,

    /**
    * The LoggingS3Api service constructor.
    * @property {module:api/LoggingS3Api}
    */
    LoggingS3Api,

    /**
    * The LoggingScalyrApi service constructor.
    * @property {module:api/LoggingScalyrApi}
    */
    LoggingScalyrApi,

    /**
    * The LoggingSftpApi service constructor.
    * @property {module:api/LoggingSftpApi}
    */
    LoggingSftpApi,

    /**
    * The LoggingSplunkApi service constructor.
    * @property {module:api/LoggingSplunkApi}
    */
    LoggingSplunkApi,

    /**
    * The LoggingSumologicApi service constructor.
    * @property {module:api/LoggingSumologicApi}
    */
    LoggingSumologicApi,

    /**
    * The LoggingSyslogApi service constructor.
    * @property {module:api/LoggingSyslogApi}
    */
    LoggingSyslogApi,

    /**
    * The MutualAuthenticationApi service constructor.
    * @property {module:api/MutualAuthenticationApi}
    */
    MutualAuthenticationApi,

    /**
    * The PackageApi service constructor.
    * @property {module:api/PackageApi}
    */
    PackageApi,

    /**
    * The PoolApi service constructor.
    * @property {module:api/PoolApi}
    */
    PoolApi,

    /**
    * The PopApi service constructor.
    * @property {module:api/PopApi}
    */
    PopApi,

    /**
    * The PublicIpListApi service constructor.
    * @property {module:api/PublicIpListApi}
    */
    PublicIpListApi,

    /**
    * The PublishApi service constructor.
    * @property {module:api/PublishApi}
    */
    PublishApi,

    /**
    * The PurgeApi service constructor.
    * @property {module:api/PurgeApi}
    */
    PurgeApi,

    /**
    * The RateLimiterApi service constructor.
    * @property {module:api/RateLimiterApi}
    */
    RateLimiterApi,

    /**
    * The RealtimeApi service constructor.
    * @property {module:api/RealtimeApi}
    */
    RealtimeApi,

    /**
    * The RequestSettingsApi service constructor.
    * @property {module:api/RequestSettingsApi}
    */
    RequestSettingsApi,

    /**
    * The ResourceApi service constructor.
    * @property {module:api/ResourceApi}
    */
    ResourceApi,

    /**
    * The ResponseObjectApi service constructor.
    * @property {module:api/ResponseObjectApi}
    */
    ResponseObjectApi,

    /**
    * The ServerApi service constructor.
    * @property {module:api/ServerApi}
    */
    ServerApi,

    /**
    * The ServiceApi service constructor.
    * @property {module:api/ServiceApi}
    */
    ServiceApi,

    /**
    * The ServiceAuthorizationsApi service constructor.
    * @property {module:api/ServiceAuthorizationsApi}
    */
    ServiceAuthorizationsApi,

    /**
    * The SettingsApi service constructor.
    * @property {module:api/SettingsApi}
    */
    SettingsApi,

    /**
    * The SnippetApi service constructor.
    * @property {module:api/SnippetApi}
    */
    SnippetApi,

    /**
    * The StarApi service constructor.
    * @property {module:api/StarApi}
    */
    StarApi,

    /**
    * The StatsApi service constructor.
    * @property {module:api/StatsApi}
    */
    StatsApi,

    /**
    * The TlsActivationsApi service constructor.
    * @property {module:api/TlsActivationsApi}
    */
    TlsActivationsApi,

    /**
    * The TlsBulkCertificatesApi service constructor.
    * @property {module:api/TlsBulkCertificatesApi}
    */
    TlsBulkCertificatesApi,

    /**
    * The TlsCertificatesApi service constructor.
    * @property {module:api/TlsCertificatesApi}
    */
    TlsCertificatesApi,

    /**
    * The TlsConfigurationsApi service constructor.
    * @property {module:api/TlsConfigurationsApi}
    */
    TlsConfigurationsApi,

    /**
    * The TlsDomainsApi service constructor.
    * @property {module:api/TlsDomainsApi}
    */
    TlsDomainsApi,

    /**
    * The TlsPrivateKeysApi service constructor.
    * @property {module:api/TlsPrivateKeysApi}
    */
    TlsPrivateKeysApi,

    /**
    * The TlsSubscriptionsApi service constructor.
    * @property {module:api/TlsSubscriptionsApi}
    */
    TlsSubscriptionsApi,

    /**
    * The TokensApi service constructor.
    * @property {module:api/TokensApi}
    */
    TokensApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi,

    /**
    * The VclDiffApi service constructor.
    * @property {module:api/VclDiffApi}
    */
    VclDiffApi,

    /**
    * The VersionApi service constructor.
    * @property {module:api/VersionApi}
    */
    VersionApi,

    /**
    * The WafActiveRulesApi service constructor.
    * @property {module:api/WafActiveRulesApi}
    */
    WafActiveRulesApi,

    /**
    * The WafExclusionsApi service constructor.
    * @property {module:api/WafExclusionsApi}
    */
    WafExclusionsApi,

    /**
    * The WafFirewallVersionsApi service constructor.
    * @property {module:api/WafFirewallVersionsApi}
    */
    WafFirewallVersionsApi,

    /**
    * The WafFirewallsApi service constructor.
    * @property {module:api/WafFirewallsApi}
    */
    WafFirewallsApi,

    /**
    * The WafRuleRevisionsApi service constructor.
    * @property {module:api/WafRuleRevisionsApi}
    */
    WafRuleRevisionsApi,

    /**
    * The WafRulesApi service constructor.
    * @property {module:api/WafRulesApi}
    */
    WafRulesApi,

    /**
    * The WafTagsApi service constructor.
    * @property {module:api/WafTagsApi}
    */
    WafTagsApi,

    authenticate
};
