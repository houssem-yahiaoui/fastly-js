# Fastly JS

A JavaScript client library for the [Fastly API](https://developer.fastly.com/reference/api).

## Usage

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const FastlyApi = require('fastly_api');


FastlyApi.ApiClient.instance.authenticate("YOUR FASTLY API KEY");

var api = new FastlyApi.AclApi()
var service_id = "service_id_example"; // {String} 
var version_id = 56; // {Number} 
var opts = {
  'created_at': "created_at_example", // {String} Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // {String} Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // {String} Date and time in ISO 8601 format.
  'service_id2': "service_id_example", // {String} Alphanumeric string identifying the service.
  'version': 56, // {Number} Integer identifying a service version.
  'name': "name_example", // {String} Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace. Required.
  'id': "id_example" // {String} Alphanumeric string identifying a ACL.
};
api.createAcl(service_id, version_id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Endpoints

The main documentation for the Fastly API can be found on our [Developer Hub](https://developer.fastly.com/reference/api).

All URIs are relative to *https://api.fastly.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*FastlyApi.AclApi* | [**createAcl**](docs/AclApi.md#createAcl) | **POST** /service/{service_id}/version/{version_id}/acl | Create a new ACL
*FastlyApi.AclApi* | [**deleteAcl**](docs/AclApi.md#deleteAcl) | **DELETE** /service/{service_id}/version/{version_id}/acl/{acl_name} | Delete an ACL
*FastlyApi.AclApi* | [**getAcl**](docs/AclApi.md#getAcl) | **GET** /service/{service_id}/version/{version_id}/acl/{acl_name} | Describe an ACL
*FastlyApi.AclApi* | [**listAcls**](docs/AclApi.md#listAcls) | **GET** /service/{service_id}/version/{version_id}/acl | List ACLs
*FastlyApi.AclApi* | [**updateAcl**](docs/AclApi.md#updateAcl) | **PUT** /service/{service_id}/version/{version_id}/acl/{acl_name} | Update an ACL
*FastlyApi.AclEntryApi* | [**bulkUpdateAclEntries**](docs/AclEntryApi.md#bulkUpdateAclEntries) | **PATCH** /service/{service_id}/acl/{acl_id}/entries | Update multiple ACL entries
*FastlyApi.AclEntryApi* | [**createAclEntry**](docs/AclEntryApi.md#createAclEntry) | **POST** /service/{service_id}/acl/{acl_id}/entry | Create an ACL entry
*FastlyApi.AclEntryApi* | [**deleteAclEntry**](docs/AclEntryApi.md#deleteAclEntry) | **DELETE** /service/{service_id}/acl/{acl_id}/entry/{acl_entry_id} | Delete an ACL entry
*FastlyApi.AclEntryApi* | [**getAclEntry**](docs/AclEntryApi.md#getAclEntry) | **GET** /service/{service_id}/acl/{acl_id}/entry/{acl_entry_id} | Describe an ACL entry
*FastlyApi.AclEntryApi* | [**listAclEntries**](docs/AclEntryApi.md#listAclEntries) | **GET** /service/{service_id}/acl/{acl_id}/entries | List ACL entries
*FastlyApi.AclEntryApi* | [**updateAclEntry**](docs/AclEntryApi.md#updateAclEntry) | **PATCH** /service/{service_id}/acl/{acl_id}/entry/{acl_entry_id} | Update an ACL entry
*FastlyApi.BackendApi* | [**createBackend**](docs/BackendApi.md#createBackend) | **POST** /service/{service_id}/version/{version_id}/backend | Create a backend
*FastlyApi.BackendApi* | [**deleteBackend**](docs/BackendApi.md#deleteBackend) | **DELETE** /service/{service_id}/version/{version_id}/backend/{backend_name} | Delete a backend
*FastlyApi.BackendApi* | [**getBackend**](docs/BackendApi.md#getBackend) | **GET** /service/{service_id}/version/{version_id}/backend/{backend_name} | Describe a backend
*FastlyApi.BackendApi* | [**listBackends**](docs/BackendApi.md#listBackends) | **GET** /service/{service_id}/version/{version_id}/backend | List backends
*FastlyApi.BackendApi* | [**updateBackend**](docs/BackendApi.md#updateBackend) | **PUT** /service/{service_id}/version/{version_id}/backend/{backend_name} | Update a backend
*FastlyApi.BillingApi* | [**getInvoice**](docs/BillingApi.md#getInvoice) | **GET** /billing/v2/year/{year}/month/{month} | Get an invoice
*FastlyApi.BillingApi* | [**getInvoiceMtd**](docs/BillingApi.md#getInvoiceMtd) | **GET** /billing/v2/account_customers/{customer_id}/mtd_invoice | Get month-to-date billing estimate
*FastlyApi.BillingAddressApi* | [**addBillingAddr**](docs/BillingAddressApi.md#addBillingAddr) | **POST** /customer/{customer_id}/billing_address | Add a billing address to a customer
*FastlyApi.BillingAddressApi* | [**deleteBillingAddr**](docs/BillingAddressApi.md#deleteBillingAddr) | **DELETE** /customer/{customer_id}/billing_address | Delete a billing address
*FastlyApi.BillingAddressApi* | [**getBillingAddr**](docs/BillingAddressApi.md#getBillingAddr) | **GET** /customer/{customer_id}/billing_address | Get a billing address
*FastlyApi.BillingAddressApi* | [**updateBillingAddr**](docs/BillingAddressApi.md#updateBillingAddr) | **PATCH** /customer/{customer_id}/billing_address | Update a billing address
*FastlyApi.CacheSettingsApi* | [**createCacheSettings**](docs/CacheSettingsApi.md#createCacheSettings) | **POST** /service/{service_id}/version/{version_id}/cache_settings | Create a cache settings object
*FastlyApi.CacheSettingsApi* | [**deleteCacheSettings**](docs/CacheSettingsApi.md#deleteCacheSettings) | **DELETE** /service/{service_id}/version/{version_id}/cache_settings/{cache_settings_name} | Delete a cache settings object
*FastlyApi.CacheSettingsApi* | [**getCacheSettings**](docs/CacheSettingsApi.md#getCacheSettings) | **GET** /service/{service_id}/version/{version_id}/cache_settings/{cache_settings_name} | Get a cache settings object
*FastlyApi.CacheSettingsApi* | [**listCacheSettings**](docs/CacheSettingsApi.md#listCacheSettings) | **GET** /service/{service_id}/version/{version_id}/cache_settings | List cache settings objects
*FastlyApi.CacheSettingsApi* | [**updateCacheSettings**](docs/CacheSettingsApi.md#updateCacheSettings) | **PUT** /service/{service_id}/version/{version_id}/cache_settings/{cache_settings_name} | Update a cache settings object
*FastlyApi.ConditionApi* | [**createCondition**](docs/ConditionApi.md#createCondition) | **POST** /service/{service_id}/version/{version_id}/condition | Create a condition
*FastlyApi.ConditionApi* | [**deleteCondition**](docs/ConditionApi.md#deleteCondition) | **DELETE** /service/{service_id}/version/{version_id}/condition/{condition_name} | Delete a condition
*FastlyApi.ConditionApi* | [**getCondition**](docs/ConditionApi.md#getCondition) | **GET** /service/{service_id}/version/{version_id}/condition/{condition_name} | Describe a condition
*FastlyApi.ConditionApi* | [**listConditions**](docs/ConditionApi.md#listConditions) | **GET** /service/{service_id}/version/{version_id}/condition | List conditions
*FastlyApi.ConditionApi* | [**updateCondition**](docs/ConditionApi.md#updateCondition) | **PUT** /service/{service_id}/version/{version_id}/condition/{condition_name} | Update a condition
*FastlyApi.ContentApi* | [**contentCheck**](docs/ContentApi.md#contentCheck) | **GET** /content/edge_check | Check status of content in each data center cache
*FastlyApi.CustomerApi* | [**deleteCustomer**](docs/CustomerApi.md#deleteCustomer) | **DELETE** /customer/{customer_id} | Delete a customer
*FastlyApi.CustomerApi* | [**getCustomer**](docs/CustomerApi.md#getCustomer) | **GET** /customer/{customer_id} | Get a customer
*FastlyApi.CustomerApi* | [**getLoggedInCustomer**](docs/CustomerApi.md#getLoggedInCustomer) | **GET** /current_customer | Get the logged in customer
*FastlyApi.CustomerApi* | [**listUsers**](docs/CustomerApi.md#listUsers) | **GET** /customer/{customer_id}/users | List users
*FastlyApi.CustomerApi* | [**updateCustomer**](docs/CustomerApi.md#updateCustomer) | **PUT** /customer/{customer_id} | Update a customer
*FastlyApi.DatacenterApi* | [**listDatacenters**](docs/DatacenterApi.md#listDatacenters) | **GET** /datacenters | List Fastly datacenters
*FastlyApi.DictionaryApi* | [**createDictionary**](docs/DictionaryApi.md#createDictionary) | **POST** /service/{service_id}/version/{version_id}/dictionary | Create an edge dictionary
*FastlyApi.DictionaryApi* | [**deleteDictionary**](docs/DictionaryApi.md#deleteDictionary) | **DELETE** /service/{service_id}/version/{version_id}/dictionary/{dictionary_name} | Delete an edge dictionary
*FastlyApi.DictionaryApi* | [**getDictionary**](docs/DictionaryApi.md#getDictionary) | **GET** /service/{service_id}/version/{version_id}/dictionary/{dictionary_name} | Get an edge dictionary
*FastlyApi.DictionaryApi* | [**listDictionaries**](docs/DictionaryApi.md#listDictionaries) | **GET** /service/{service_id}/version/{version_id}/dictionary | List edge dictionaries
*FastlyApi.DictionaryApi* | [**updateDictionary**](docs/DictionaryApi.md#updateDictionary) | **PUT** /service/{service_id}/version/{version_id}/dictionary/{dictionary_name} | Update an edge dictionary
*FastlyApi.DictionaryInfoApi* | [**getDictionaryInfo**](docs/DictionaryInfoApi.md#getDictionaryInfo) | **GET** /service/{service_id}/version/{version_id}/dictionary/{dictionary_id}/info | Get edge dictionary metadata
*FastlyApi.DictionaryItemApi* | [**bulkUpdateDictionaryItem**](docs/DictionaryItemApi.md#bulkUpdateDictionaryItem) | **PATCH** /service/{service_id}/dictionary/{dictionary_id}/items | Update multiple entries in an edge dictionary
*FastlyApi.DictionaryItemApi* | [**createDictionaryItem**](docs/DictionaryItemApi.md#createDictionaryItem) | **POST** /service/{service_id}/dictionary/{dictionary_id}/item | Create an entry in an edge dictionary
*FastlyApi.DictionaryItemApi* | [**deleteDictionaryItem**](docs/DictionaryItemApi.md#deleteDictionaryItem) | **DELETE** /service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key} | Delete an item from an edge dictionary
*FastlyApi.DictionaryItemApi* | [**getDictionaryItem**](docs/DictionaryItemApi.md#getDictionaryItem) | **GET** /service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key} | Get an item from an edge dictionary
*FastlyApi.DictionaryItemApi* | [**listDictionaryItems**](docs/DictionaryItemApi.md#listDictionaryItems) | **GET** /service/{service_id}/dictionary/{dictionary_id}/items | List items in an edge dictionary
*FastlyApi.DictionaryItemApi* | [**updateDictionaryItem**](docs/DictionaryItemApi.md#updateDictionaryItem) | **PATCH** /service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key} | Update an entry in an edge dictionary
*FastlyApi.DictionaryItemApi* | [**upsertDictionaryItem**](docs/DictionaryItemApi.md#upsertDictionaryItem) | **PUT** /service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key} | Insert or update an entry in an edge dictionary
*FastlyApi.DiffApi* | [**diffServiceVersions**](docs/DiffApi.md#diffServiceVersions) | **GET** /service/{service_id}/diff/from/{from_version_id}/to/{to_version_id} | Diff two service versions
*FastlyApi.DirectorApi* | [**createDirector**](docs/DirectorApi.md#createDirector) | **POST** /service/{service_id}/version/{version_id}/director | Create a director
*FastlyApi.DirectorApi* | [**deleteDirector**](docs/DirectorApi.md#deleteDirector) | **DELETE** /service/{service_id}/version/{version_id}/director/{director_name} | Delete a director
*FastlyApi.DirectorApi* | [**getDirector**](docs/DirectorApi.md#getDirector) | **GET** /service/{service_id}/version/{version_id}/director/{director_name} | Get a director
*FastlyApi.DirectorApi* | [**listDirectors**](docs/DirectorApi.md#listDirectors) | **GET** /service/{service_id}/version/{version_id}/director | List directors
*FastlyApi.DirectorApi* | [**updateDirector**](docs/DirectorApi.md#updateDirector) | **PUT** /service/{service_id}/version/{version_id}/director/{director_name} | Update a director
*FastlyApi.DirectorBackendApi* | [**createDirectorBackend**](docs/DirectorBackendApi.md#createDirectorBackend) | **POST** /service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name} | Create a director-backend relationship
*FastlyApi.DirectorBackendApi* | [**deleteDirectorBackend**](docs/DirectorBackendApi.md#deleteDirectorBackend) | **DELETE** /service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name} | Delete a director-backend relationship
*FastlyApi.DirectorBackendApi* | [**getDirectorBackend**](docs/DirectorBackendApi.md#getDirectorBackend) | **GET** /service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name} | Get a director-backend relationship
*FastlyApi.DomainApi* | [**checkDomain**](docs/DomainApi.md#checkDomain) | **GET** /service/{service_id}/version/{version_id}/domain/{domain_name}/check | Validate DNS configuration for a single domain on a service
*FastlyApi.DomainApi* | [**checkDomains**](docs/DomainApi.md#checkDomains) | **GET** /service/{service_id}/version/{version_id}/domain/check_all | Validate DNS configuration for all domains on a service
*FastlyApi.DomainApi* | [**createDomain**](docs/DomainApi.md#createDomain) | **POST** /service/{service_id}/version/{version_id}/domain | Add a domain name to a service
*FastlyApi.DomainApi* | [**deleteDomain**](docs/DomainApi.md#deleteDomain) | **DELETE** /service/{service_id}/version/{version_id}/domain/{domain_name} | Remove a domain from a service
*FastlyApi.DomainApi* | [**getDomain**](docs/DomainApi.md#getDomain) | **GET** /service/{service_id}/version/{version_id}/domain/{domain_name} | Describe a domain
*FastlyApi.DomainApi* | [**listDomains**](docs/DomainApi.md#listDomains) | **GET** /service/{service_id}/version/{version_id}/domain | List domains
*FastlyApi.DomainApi* | [**updateDomain**](docs/DomainApi.md#updateDomain) | **PUT** /service/{service_id}/version/{version_id}/domain/{domain_name} | Update a domain
*FastlyApi.EventsApi* | [**getEvent**](docs/EventsApi.md#getEvent) | **GET** /events/{event_id} | Get an event
*FastlyApi.EventsApi* | [**listEvents**](docs/EventsApi.md#listEvents) | **GET** /events | List events
*FastlyApi.GzipApi* | [**createGzipConfig**](docs/GzipApi.md#createGzipConfig) | **POST** /service/{service_id}/version/{version_id}/gzip | Create a gzip configuration
*FastlyApi.GzipApi* | [**deleteGzipConfig**](docs/GzipApi.md#deleteGzipConfig) | **DELETE** /service/{service_id}/version/{version_id}/gzip/{gzip_name} | Delete a gzip configuration
*FastlyApi.GzipApi* | [**getGzipConfigs**](docs/GzipApi.md#getGzipConfigs) | **GET** /service/{service_id}/version/{version_id}/gzip/{gzip_name} | Get a gzip configuration
*FastlyApi.GzipApi* | [**listGzipConfigs**](docs/GzipApi.md#listGzipConfigs) | **GET** /service/{service_id}/version/{version_id}/gzip | List gzip configurations
*FastlyApi.GzipApi* | [**updateGzipConfig**](docs/GzipApi.md#updateGzipConfig) | **PUT** /service/{service_id}/version/{version_id}/gzip/{gzip_name} | Update a gzip configuration
*FastlyApi.HeaderApi* | [**createHeaderObject**](docs/HeaderApi.md#createHeaderObject) | **POST** /service/{service_id}/version/{version_id}/header | Create a Header object
*FastlyApi.HeaderApi* | [**deleteHeaderObject**](docs/HeaderApi.md#deleteHeaderObject) | **DELETE** /service/{service_id}/version/{version_id}/header/{header_name} | Delete a Header object
*FastlyApi.HeaderApi* | [**getHeaderObject**](docs/HeaderApi.md#getHeaderObject) | **GET** /service/{service_id}/version/{version_id}/header/{header_name} | Get a Header object
*FastlyApi.HeaderApi* | [**listHeaderObjects**](docs/HeaderApi.md#listHeaderObjects) | **GET** /service/{service_id}/version/{version_id}/header | List Header objects
*FastlyApi.HeaderApi* | [**updateHeaderObject**](docs/HeaderApi.md#updateHeaderObject) | **PUT** /service/{service_id}/version/{version_id}/header/{header_name} | Update a Header object
*FastlyApi.HealthcheckApi* | [**createHealthcheck**](docs/HealthcheckApi.md#createHealthcheck) | **POST** /service/{service_id}/version/{version_id}/healthcheck | Create a healthcheck
*FastlyApi.HealthcheckApi* | [**deleteHealthcheck**](docs/HealthcheckApi.md#deleteHealthcheck) | **DELETE** /service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name} | Delete a healthcheck
*FastlyApi.HealthcheckApi* | [**getHealthcheck**](docs/HealthcheckApi.md#getHealthcheck) | **GET** /service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name} | Get a healthcheck
*FastlyApi.HealthcheckApi* | [**listHealthchecks**](docs/HealthcheckApi.md#listHealthchecks) | **GET** /service/{service_id}/version/{version_id}/healthcheck | List healthchecks
*FastlyApi.HealthcheckApi* | [**updateHealthcheck**](docs/HealthcheckApi.md#updateHealthcheck) | **PUT** /service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name} | Update a healthcheck
*FastlyApi.InvitationsApi* | [**createInvitation**](docs/InvitationsApi.md#createInvitation) | **POST** /invitations | Create an invitation
*FastlyApi.InvitationsApi* | [**deleteInvitation**](docs/InvitationsApi.md#deleteInvitation) | **DELETE** /invitations/{invitation_id} | Delete an invitation
*FastlyApi.InvitationsApi* | [**listInvitations**](docs/InvitationsApi.md#listInvitations) | **GET** /invitations | List invitations
*FastlyApi.LoggingAzureblobApi* | [**createLogAzure**](docs/LoggingAzureblobApi.md#createLogAzure) | **POST** /service/{service_id}/version/{version_id}/logging/azureblob | Create an Azure Blob Storage log endpoint
*FastlyApi.LoggingAzureblobApi* | [**deleteLogAzure**](docs/LoggingAzureblobApi.md#deleteLogAzure) | **DELETE** /service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name} | Delete the Azure Blob Storage log endpoint
*FastlyApi.LoggingAzureblobApi* | [**getLogAzure**](docs/LoggingAzureblobApi.md#getLogAzure) | **GET** /service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name} | Get an Azure Blob Storage log endpoint
*FastlyApi.LoggingAzureblobApi* | [**listLogAzure**](docs/LoggingAzureblobApi.md#listLogAzure) | **GET** /service/{service_id}/version/{version_id}/logging/azureblob | List Azure Blob Storage log endpoints
*FastlyApi.LoggingAzureblobApi* | [**updateLogAzure**](docs/LoggingAzureblobApi.md#updateLogAzure) | **PUT** /service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name} | Update an Azure Blob Storage log endpoint
*FastlyApi.LoggingBigqueryApi* | [**createLogBigquery**](docs/LoggingBigqueryApi.md#createLogBigquery) | **POST** /service/{service_id}/version/{version_id}/logging/bigquery | Create a BigQuery log endpoint
*FastlyApi.LoggingBigqueryApi* | [**deleteLogBigquery**](docs/LoggingBigqueryApi.md#deleteLogBigquery) | **DELETE** /service/{service_id}/version/{version_id}/logging/bigquery/{logging_bigquery_name} | Delete a BigQuery log endpoint
*FastlyApi.LoggingBigqueryApi* | [**getLogBigquery**](docs/LoggingBigqueryApi.md#getLogBigquery) | **GET** /service/{service_id}/version/{version_id}/logging/bigquery/{logging_bigquery_name} | Get a BigQuery log endpoint
*FastlyApi.LoggingBigqueryApi* | [**listLogBigquery**](docs/LoggingBigqueryApi.md#listLogBigquery) | **GET** /service/{service_id}/version/{version_id}/logging/bigquery | List BigQuery log endpoints
*FastlyApi.LoggingBigqueryApi* | [**updateLogBigquery**](docs/LoggingBigqueryApi.md#updateLogBigquery) | **PUT** /service/{service_id}/version/{version_id}/logging/bigquery/{logging_bigquery_name} | Update a BigQuery log endpoint
*FastlyApi.LoggingCloudfilesApi* | [**createLogCloudfiles**](docs/LoggingCloudfilesApi.md#createLogCloudfiles) | **POST** /service/{service_id}/version/{version_id}/logging/cloudfiles | Create a Cloud Files log endpoint
*FastlyApi.LoggingCloudfilesApi* | [**deleteLogCloudfiles**](docs/LoggingCloudfilesApi.md#deleteLogCloudfiles) | **DELETE** /service/{service_id}/version/{version_id}/logging/cloudfiles/{logging_cloudfiles_name} | Delete the Cloud Files log endpoint
*FastlyApi.LoggingCloudfilesApi* | [**getLogCloudfiles**](docs/LoggingCloudfilesApi.md#getLogCloudfiles) | **GET** /service/{service_id}/version/{version_id}/logging/cloudfiles/{logging_cloudfiles_name} | Get a Cloud Files log endpoint
*FastlyApi.LoggingCloudfilesApi* | [**listLogCloudfiles**](docs/LoggingCloudfilesApi.md#listLogCloudfiles) | **GET** /service/{service_id}/version/{version_id}/logging/cloudfiles | List Cloud Files log endpoints
*FastlyApi.LoggingCloudfilesApi* | [**updateLogCloudfiles**](docs/LoggingCloudfilesApi.md#updateLogCloudfiles) | **PUT** /service/{service_id}/version/{version_id}/logging/cloudfiles/{logging_cloudfiles_name} | Update the Cloud Files log endpoint
*FastlyApi.LoggingDatadogApi* | [**createLogDatadog**](docs/LoggingDatadogApi.md#createLogDatadog) | **POST** /service/{service_id}/version/{version_id}/logging/datadog | Create a Datadog log endpoint
*FastlyApi.LoggingDatadogApi* | [**deleteLogDatadog**](docs/LoggingDatadogApi.md#deleteLogDatadog) | **DELETE** /service/{service_id}/version/{version_id}/logging/datadog/{logging_datadog_name} | Delete a Datadog log endpoint
*FastlyApi.LoggingDatadogApi* | [**getLogDatadog**](docs/LoggingDatadogApi.md#getLogDatadog) | **GET** /service/{service_id}/version/{version_id}/logging/datadog/{logging_datadog_name} | Get a Datadog log endpoint
*FastlyApi.LoggingDatadogApi* | [**listLogDatadog**](docs/LoggingDatadogApi.md#listLogDatadog) | **GET** /service/{service_id}/version/{version_id}/logging/datadog | List Datadog log endpoints
*FastlyApi.LoggingDatadogApi* | [**updateLogDatadog**](docs/LoggingDatadogApi.md#updateLogDatadog) | **PUT** /service/{service_id}/version/{version_id}/logging/datadog/{logging_datadog_name} | Update a Datadog log endpoint
*FastlyApi.LoggingDigitaloceanApi* | [**createLogDigocean**](docs/LoggingDigitaloceanApi.md#createLogDigocean) | **POST** /service/{service_id}/version/{version_id}/logging/digitalocean | Create a DigitalOcean Spaces log endpoint
*FastlyApi.LoggingDigitaloceanApi* | [**deleteLogDigocean**](docs/LoggingDigitaloceanApi.md#deleteLogDigocean) | **DELETE** /service/{service_id}/version/{version_id}/logging/digitalocean/{logging_digitalocean_name} | Delete a DigitalOcean Spaces log endpoint
*FastlyApi.LoggingDigitaloceanApi* | [**getLogDigocean**](docs/LoggingDigitaloceanApi.md#getLogDigocean) | **GET** /service/{service_id}/version/{version_id}/logging/digitalocean/{logging_digitalocean_name} | Get a DigitalOcean Spaces log endpoint
*FastlyApi.LoggingDigitaloceanApi* | [**listLogDigocean**](docs/LoggingDigitaloceanApi.md#listLogDigocean) | **GET** /service/{service_id}/version/{version_id}/logging/digitalocean | List DigitalOcean Spaces log endpoints
*FastlyApi.LoggingDigitaloceanApi* | [**updateLogDigocean**](docs/LoggingDigitaloceanApi.md#updateLogDigocean) | **PUT** /service/{service_id}/version/{version_id}/logging/digitalocean/{logging_digitalocean_name} | Update a DigitalOcean Spaces log endpoint
*FastlyApi.LoggingElasticsearchApi* | [**createLogElasticsearch**](docs/LoggingElasticsearchApi.md#createLogElasticsearch) | **POST** /service/{service_id}/version/{version_id}/logging/elasticsearch | Create an Elasticsearch log endpoint
*FastlyApi.LoggingElasticsearchApi* | [**deleteLogElasticsearch**](docs/LoggingElasticsearchApi.md#deleteLogElasticsearch) | **DELETE** /service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name} | Delete an Elasticsearch log endpoint
*FastlyApi.LoggingElasticsearchApi* | [**getLogElasticsearch**](docs/LoggingElasticsearchApi.md#getLogElasticsearch) | **GET** /service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name} | Get an Elasticsearch log endpoint
*FastlyApi.LoggingElasticsearchApi* | [**listLogElasticsearch**](docs/LoggingElasticsearchApi.md#listLogElasticsearch) | **GET** /service/{service_id}/version/{version_id}/logging/elasticsearch | List Elasticsearch log endpoints
*FastlyApi.LoggingElasticsearchApi* | [**updateLogElasticsearch**](docs/LoggingElasticsearchApi.md#updateLogElasticsearch) | **PUT** /service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name} | Update an Elasticsearch log endpoint
*FastlyApi.LoggingFtpApi* | [**createLogFtp**](docs/LoggingFtpApi.md#createLogFtp) | **POST** /service/{service_id}/version/{version_id}/logging/ftp | Create an FTP log endpoint
*FastlyApi.LoggingFtpApi* | [**deleteLogFtp**](docs/LoggingFtpApi.md#deleteLogFtp) | **DELETE** /service/{service_id}/version/{version_id}/logging/ftp/{logging_ftp_name} | Delete an FTP log endpoint
*FastlyApi.LoggingFtpApi* | [**getLogFtp**](docs/LoggingFtpApi.md#getLogFtp) | **GET** /service/{service_id}/version/{version_id}/logging/ftp/{logging_ftp_name} | Get an FTP log endpoint
*FastlyApi.LoggingFtpApi* | [**listLogFtp**](docs/LoggingFtpApi.md#listLogFtp) | **GET** /service/{service_id}/version/{version_id}/logging/ftp | List FTP log endpoints
*FastlyApi.LoggingFtpApi* | [**updateLogFtp**](docs/LoggingFtpApi.md#updateLogFtp) | **PUT** /service/{service_id}/version/{version_id}/logging/ftp/{logging_ftp_name} | Update an FTP log endpoint
*FastlyApi.LoggingGcsApi* | [**createLogGcs**](docs/LoggingGcsApi.md#createLogGcs) | **POST** /service/{service_id}/version/{version_id}/logging/gcs | Create a GCS log endpoint
*FastlyApi.LoggingGcsApi* | [**deleteLogGcs**](docs/LoggingGcsApi.md#deleteLogGcs) | **DELETE** /service/{service_id}/version/{version_id}/logging/gcs/{logging_gcs_name} | Delete a GCS log endpoint
*FastlyApi.LoggingGcsApi* | [**getLogGcs**](docs/LoggingGcsApi.md#getLogGcs) | **GET** /service/{service_id}/version/{version_id}/logging/gcs/{logging_gcs_name} | Get a GCS log endpoint
*FastlyApi.LoggingGcsApi* | [**listLogGcs**](docs/LoggingGcsApi.md#listLogGcs) | **GET** /service/{service_id}/version/{version_id}/logging/gcs | List GCS log endpoints
*FastlyApi.LoggingGcsApi* | [**updateLogGcs**](docs/LoggingGcsApi.md#updateLogGcs) | **PUT** /service/{service_id}/version/{version_id}/logging/gcs/{logging_gcs_name} | Update a GCS log endpoint
*FastlyApi.LoggingHerokuApi* | [**createLogHeroku**](docs/LoggingHerokuApi.md#createLogHeroku) | **POST** /service/{service_id}/version/{version_id}/logging/heroku | Create a Heroku log endpoint
*FastlyApi.LoggingHerokuApi* | [**deleteLogHeroku**](docs/LoggingHerokuApi.md#deleteLogHeroku) | **DELETE** /service/{service_id}/version/{version_id}/logging/heroku/{logging_heroku_name} | Delete the Heroku log endpoint
*FastlyApi.LoggingHerokuApi* | [**getLogHeroku**](docs/LoggingHerokuApi.md#getLogHeroku) | **GET** /service/{service_id}/version/{version_id}/logging/heroku/{logging_heroku_name} | Get a Heroku log endpoint
*FastlyApi.LoggingHerokuApi* | [**listLogHeroku**](docs/LoggingHerokuApi.md#listLogHeroku) | **GET** /service/{service_id}/version/{version_id}/logging/heroku | List Heroku log endpoints
*FastlyApi.LoggingHerokuApi* | [**updateLogHeroku**](docs/LoggingHerokuApi.md#updateLogHeroku) | **PUT** /service/{service_id}/version/{version_id}/logging/heroku/{logging_heroku_name} | Update the Heroku log endpoint
*FastlyApi.LoggingHoneycombApi* | [**createLogHoneycomb**](docs/LoggingHoneycombApi.md#createLogHoneycomb) | **POST** /service/{service_id}/version/{version_id}/logging/honeycomb | Create a Honeycomb log endpoint
*FastlyApi.LoggingHoneycombApi* | [**deleteLogHoneycomb**](docs/LoggingHoneycombApi.md#deleteLogHoneycomb) | **DELETE** /service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name} | Delete the Honeycomb log endpoint
*FastlyApi.LoggingHoneycombApi* | [**getLogHoneycomb**](docs/LoggingHoneycombApi.md#getLogHoneycomb) | **GET** /service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name} | Get a Honeycomb log endpoint
*FastlyApi.LoggingHoneycombApi* | [**listLogHoneycomb**](docs/LoggingHoneycombApi.md#listLogHoneycomb) | **GET** /service/{service_id}/version/{version_id}/logging/honeycomb | List Honeycomb log endpoints
*FastlyApi.LoggingHoneycombApi* | [**updateLogHoneycomb**](docs/LoggingHoneycombApi.md#updateLogHoneycomb) | **PUT** /service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name} | Update a Honeycomb log endpoint
*FastlyApi.LoggingHttpsApi* | [**createLogHttps**](docs/LoggingHttpsApi.md#createLogHttps) | **POST** /service/{service_id}/version/{version_id}/logging/https | Create an HTTPS log endpoint
*FastlyApi.LoggingHttpsApi* | [**deleteLogHttps**](docs/LoggingHttpsApi.md#deleteLogHttps) | **DELETE** /service/{service_id}/version/{version_id}/logging/https/{logging_https_name} | Delete an HTTPS log endpoint
*FastlyApi.LoggingHttpsApi* | [**getLogHttps**](docs/LoggingHttpsApi.md#getLogHttps) | **GET** /service/{service_id}/version/{version_id}/logging/https/{logging_https_name} | Get an HTTPS log endpoint
*FastlyApi.LoggingHttpsApi* | [**listLogHttps**](docs/LoggingHttpsApi.md#listLogHttps) | **GET** /service/{service_id}/version/{version_id}/logging/https | List HTTPS log endpoints
*FastlyApi.LoggingHttpsApi* | [**updateLogHttps**](docs/LoggingHttpsApi.md#updateLogHttps) | **PUT** /service/{service_id}/version/{version_id}/logging/https/{logging_https_name} | Update an HTTPS log endpoint
*FastlyApi.LoggingKafkaApi* | [**createLogKafka**](docs/LoggingKafkaApi.md#createLogKafka) | **POST** /service/{service_id}/version/{version_id}/logging/kafka | Create a Kafka log endpoint
*FastlyApi.LoggingKafkaApi* | [**deleteLogKafka**](docs/LoggingKafkaApi.md#deleteLogKafka) | **DELETE** /service/{service_id}/version/{version_id}/logging/kafka/{logging_kafka_name} | Delete the Kafka log endpoint
*FastlyApi.LoggingKafkaApi* | [**getLogKafka**](docs/LoggingKafkaApi.md#getLogKafka) | **GET** /service/{service_id}/version/{version_id}/logging/kafka/{logging_kafka_name} | Get a Kafka log endpoint
*FastlyApi.LoggingKafkaApi* | [**listLogKafka**](docs/LoggingKafkaApi.md#listLogKafka) | **GET** /service/{service_id}/version/{version_id}/logging/kafka | List Kafka log endpoints
*FastlyApi.LoggingKafkaApi* | [**updateLogKafka**](docs/LoggingKafkaApi.md#updateLogKafka) | **PUT** /service/{service_id}/version/{version_id}/logging/kafka/{logging_kafka_name} | Update the Kafka log endpoint
*FastlyApi.LoggingKinesisApi* | [**createLogKinesis**](docs/LoggingKinesisApi.md#createLogKinesis) | **POST** /service/{service_id}/version/{version_id}/logging/kinesis | Create  an Amazon Kinesis log endpoint
*FastlyApi.LoggingKinesisApi* | [**deleteLogKinesis**](docs/LoggingKinesisApi.md#deleteLogKinesis) | **DELETE** /service/{service_id}/version/{version_id}/logging/kinesis/{logging_kinesis_name} | Delete the Amazon Kinesis log endpoint
*FastlyApi.LoggingKinesisApi* | [**getLogKinesis**](docs/LoggingKinesisApi.md#getLogKinesis) | **GET** /service/{service_id}/version/{version_id}/logging/kinesis/{logging_kinesis_name} | Get an Amazon Kinesis log endpoint
*FastlyApi.LoggingKinesisApi* | [**listLogKinesis**](docs/LoggingKinesisApi.md#listLogKinesis) | **GET** /service/{service_id}/version/{version_id}/logging/kinesis | List Amazon Kinesis log endpoints
*FastlyApi.LoggingKinesisApi* | [**updateLogKinesis**](docs/LoggingKinesisApi.md#updateLogKinesis) | **PUT** /service/{service_id}/version/{version_id}/logging/kinesis/{logging_kinesis_name} | Update the Amazon Kinesis log endpoint
*FastlyApi.LoggingLogentriesApi* | [**createLogLogentries**](docs/LoggingLogentriesApi.md#createLogLogentries) | **POST** /service/{service_id}/version/{version_id}/logging/logentries | Create a Logentries log endpoint
*FastlyApi.LoggingLogentriesApi* | [**deleteLogLogentries**](docs/LoggingLogentriesApi.md#deleteLogLogentries) | **DELETE** /service/{service_id}/version/{version_id}/logging/logentries/{logging_logentries_name} | Delete a Logentries log endpoint
*FastlyApi.LoggingLogentriesApi* | [**getLogLogentries**](docs/LoggingLogentriesApi.md#getLogLogentries) | **GET** /service/{service_id}/version/{version_id}/logging/logentries/{logging_logentries_name} | Get a Logentries log endpoint
*FastlyApi.LoggingLogentriesApi* | [**listLogLogentries**](docs/LoggingLogentriesApi.md#listLogLogentries) | **GET** /service/{service_id}/version/{version_id}/logging/logentries | List Logentries log endpoints
*FastlyApi.LoggingLogentriesApi* | [**updateLogLogentries**](docs/LoggingLogentriesApi.md#updateLogLogentries) | **PUT** /service/{service_id}/version/{version_id}/logging/logentries/{logging_logentries_name} | Update a Logentries log endpoint
*FastlyApi.LoggingLogglyApi* | [**createLogLoggly**](docs/LoggingLogglyApi.md#createLogLoggly) | **POST** /service/{service_id}/version/{version_id}/logging/loggly | Create a Loggly log endpoint
*FastlyApi.LoggingLogglyApi* | [**deleteLogLoggly**](docs/LoggingLogglyApi.md#deleteLogLoggly) | **DELETE** /service/{service_id}/version/{version_id}/logging/loggly/{logging_loggly_name} | Delete a Loggly log endpoint
*FastlyApi.LoggingLogglyApi* | [**getLogLoggly**](docs/LoggingLogglyApi.md#getLogLoggly) | **GET** /service/{service_id}/version/{version_id}/logging/loggly/{logging_loggly_name} | Get a Loggly log endpoint
*FastlyApi.LoggingLogglyApi* | [**listLogLoggly**](docs/LoggingLogglyApi.md#listLogLoggly) | **GET** /service/{service_id}/version/{version_id}/logging/loggly | List Loggly log endpoints
*FastlyApi.LoggingLogglyApi* | [**updateLogLoggly**](docs/LoggingLogglyApi.md#updateLogLoggly) | **PUT** /service/{service_id}/version/{version_id}/logging/loggly/{logging_loggly_name} | Update a Loggly log endpoint
*FastlyApi.LoggingLogshuttleApi* | [**createLogLogshuttle**](docs/LoggingLogshuttleApi.md#createLogLogshuttle) | **POST** /service/{service_id}/version/{version_id}/logging/logshuttle | Create a Log Shuttle log endpoint
*FastlyApi.LoggingLogshuttleApi* | [**deleteLogLogshuttle**](docs/LoggingLogshuttleApi.md#deleteLogLogshuttle) | **DELETE** /service/{service_id}/version/{version_id}/logging/logshuttle/{logging_logshuttle_name} | Delete a Log Shuttle log endpoint
*FastlyApi.LoggingLogshuttleApi* | [**getLogLogshuttle**](docs/LoggingLogshuttleApi.md#getLogLogshuttle) | **GET** /service/{service_id}/version/{version_id}/logging/logshuttle/{logging_logshuttle_name} | Get a Log Shuttle log endpoint
*FastlyApi.LoggingLogshuttleApi* | [**listLogLogshuttle**](docs/LoggingLogshuttleApi.md#listLogLogshuttle) | **GET** /service/{service_id}/version/{version_id}/logging/logshuttle | List Log Shuttle log endpoints
*FastlyApi.LoggingLogshuttleApi* | [**updateLogLogshuttle**](docs/LoggingLogshuttleApi.md#updateLogLogshuttle) | **PUT** /service/{service_id}/version/{version_id}/logging/logshuttle/{logging_logshuttle_name} | Update a Log Shuttle log endpoint
*FastlyApi.LoggingNewrelicApi* | [**createLogNewrelic**](docs/LoggingNewrelicApi.md#createLogNewrelic) | **POST** /service/{service_id}/version/{version_id}/logging/newrelic | Create a New Relic log endpoint
*FastlyApi.LoggingNewrelicApi* | [**deleteLogNewrelic**](docs/LoggingNewrelicApi.md#deleteLogNewrelic) | **DELETE** /service/{service_id}/version/{version_id}/logging/newrelic/{logging_newrelic_name} | Delete a New Relic log endpoint
*FastlyApi.LoggingNewrelicApi* | [**getLogNewrelic**](docs/LoggingNewrelicApi.md#getLogNewrelic) | **GET** /service/{service_id}/version/{version_id}/logging/newrelic/{logging_newrelic_name} | Get a New Relic log endpoint
*FastlyApi.LoggingNewrelicApi* | [**listLogNewrelic**](docs/LoggingNewrelicApi.md#listLogNewrelic) | **GET** /service/{service_id}/version/{version_id}/logging/newrelic | List New Relic log endpoints
*FastlyApi.LoggingNewrelicApi* | [**updateLogNewrelic**](docs/LoggingNewrelicApi.md#updateLogNewrelic) | **PUT** /service/{service_id}/version/{version_id}/logging/newrelic/{logging_newrelic_name} | Update a New Relic log endpoint
*FastlyApi.LoggingOpenstackApi* | [**createLogOpenstack**](docs/LoggingOpenstackApi.md#createLogOpenstack) | **POST** /service/{service_id}/version/{version_id}/logging/openstack | Create an OpenStack log endpoint
*FastlyApi.LoggingOpenstackApi* | [**deleteLogOpenstack**](docs/LoggingOpenstackApi.md#deleteLogOpenstack) | **DELETE** /service/{service_id}/version/{version_id}/logging/openstack/{logging_openstack_name} | Delete an OpenStack log endpoint
*FastlyApi.LoggingOpenstackApi* | [**getLogOpenstack**](docs/LoggingOpenstackApi.md#getLogOpenstack) | **GET** /service/{service_id}/version/{version_id}/logging/openstack/{logging_openstack_name} | Get an OpenStack log endpoint
*FastlyApi.LoggingOpenstackApi* | [**listLogOpenstack**](docs/LoggingOpenstackApi.md#listLogOpenstack) | **GET** /service/{service_id}/version/{version_id}/logging/openstack | List OpenStack log endpoints
*FastlyApi.LoggingOpenstackApi* | [**updateLogOpenstack**](docs/LoggingOpenstackApi.md#updateLogOpenstack) | **PUT** /service/{service_id}/version/{version_id}/logging/openstack/{logging_openstack_name} | Update an OpenStack log endpoint
*FastlyApi.LoggingPapertrailApi* | [**createLogPapertrail**](docs/LoggingPapertrailApi.md#createLogPapertrail) | **POST** /service/{service_id}/version/{version_id}/logging/papertrail | Create a Papertrail log endpoint
*FastlyApi.LoggingPapertrailApi* | [**deleteLogPapertrail**](docs/LoggingPapertrailApi.md#deleteLogPapertrail) | **DELETE** /service/{service_id}/version/{version_id}/logging/papertrail/{logging_papertrail_name} | Delete a Papertrail log endpoint
*FastlyApi.LoggingPapertrailApi* | [**getLogPapertrail**](docs/LoggingPapertrailApi.md#getLogPapertrail) | **GET** /service/{service_id}/version/{version_id}/logging/papertrail/{logging_papertrail_name} | Get a Papertrail log endpoint
*FastlyApi.LoggingPapertrailApi* | [**listLogPapertrail**](docs/LoggingPapertrailApi.md#listLogPapertrail) | **GET** /service/{service_id}/version/{version_id}/logging/papertrail | List Papertrail log endpoints
*FastlyApi.LoggingPapertrailApi* | [**updateLogPapertrail**](docs/LoggingPapertrailApi.md#updateLogPapertrail) | **PUT** /service/{service_id}/version/{version_id}/logging/papertrail/{logging_papertrail_name} | Update a Papertrail log endpoint
*FastlyApi.LoggingPubsubApi* | [**createLogGcpPubsub**](docs/LoggingPubsubApi.md#createLogGcpPubsub) | **POST** /service/{service_id}/version/{version_id}/logging/pubsub | Create a GCP Cloud Pub/Sub log endpoint
*FastlyApi.LoggingPubsubApi* | [**deleteLogGcpPubsub**](docs/LoggingPubsubApi.md#deleteLogGcpPubsub) | **DELETE** /service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name} | Delete a GCP Cloud Pub/Sub log endpoint
*FastlyApi.LoggingPubsubApi* | [**getLogGcpPubsub**](docs/LoggingPubsubApi.md#getLogGcpPubsub) | **GET** /service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name} | Get a GCP Cloud Pub/Sub log endpoint
*FastlyApi.LoggingPubsubApi* | [**listLogGcpPubsub**](docs/LoggingPubsubApi.md#listLogGcpPubsub) | **GET** /service/{service_id}/version/{version_id}/logging/pubsub | List GCP Cloud Pub/Sub log endpoints
*FastlyApi.LoggingPubsubApi* | [**updateLogGcpPubsub**](docs/LoggingPubsubApi.md#updateLogGcpPubsub) | **PUT** /service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name} | Update a GCP Cloud Pub/Sub log endpoint
*FastlyApi.LoggingS3Api* | [**createLogAwsS3**](docs/LoggingS3Api.md#createLogAwsS3) | **POST** /service/{service_id}/version/{version_id}/logging/s3 | Create an AWS S3 log endpoint
*FastlyApi.LoggingS3Api* | [**deleteLogAwsS3**](docs/LoggingS3Api.md#deleteLogAwsS3) | **DELETE** /service/{service_id}/version/{version_id}/logging/s3/{logging_s3_name} | Delete an AWS S3 log endpoint
*FastlyApi.LoggingS3Api* | [**getLogAwsS3**](docs/LoggingS3Api.md#getLogAwsS3) | **GET** /service/{service_id}/version/{version_id}/logging/s3/{logging_s3_name} | Get an AWS S3 log endpoint
*FastlyApi.LoggingS3Api* | [**listLogAwsS3**](docs/LoggingS3Api.md#listLogAwsS3) | **GET** /service/{service_id}/version/{version_id}/logging/s3 | List AWS S3 log endpoints
*FastlyApi.LoggingS3Api* | [**updateLogAwsS3**](docs/LoggingS3Api.md#updateLogAwsS3) | **PUT** /service/{service_id}/version/{version_id}/logging/s3/{logging_s3_name} | Update an AWS S3 log endpoint
*FastlyApi.LoggingScalyrApi* | [**createLogScalyr**](docs/LoggingScalyrApi.md#createLogScalyr) | **POST** /service/{service_id}/version/{version_id}/logging/scalyr | Create a Scalyr log endpoint
*FastlyApi.LoggingScalyrApi* | [**deleteLogScalyr**](docs/LoggingScalyrApi.md#deleteLogScalyr) | **DELETE** /service/{service_id}/version/{version_id}/logging/scalyr/{logging_scalyr_name} | Delete the Scalyr log endpoint
*FastlyApi.LoggingScalyrApi* | [**getLogScalyr**](docs/LoggingScalyrApi.md#getLogScalyr) | **GET** /service/{service_id}/version/{version_id}/logging/scalyr/{logging_scalyr_name} | Get a Scalyr log endpoint
*FastlyApi.LoggingScalyrApi* | [**listLogScalyr**](docs/LoggingScalyrApi.md#listLogScalyr) | **GET** /service/{service_id}/version/{version_id}/logging/scalyr | List Scalyr log endpoints
*FastlyApi.LoggingScalyrApi* | [**updateLogScalyr**](docs/LoggingScalyrApi.md#updateLogScalyr) | **PUT** /service/{service_id}/version/{version_id}/logging/scalyr/{logging_scalyr_name} | Update the Scalyr log endpoint
*FastlyApi.LoggingSftpApi* | [**createLogSftp**](docs/LoggingSftpApi.md#createLogSftp) | **POST** /service/{service_id}/version/{version_id}/logging/sftp | Create an SFTP log endpoint
*FastlyApi.LoggingSftpApi* | [**deleteLogSftp**](docs/LoggingSftpApi.md#deleteLogSftp) | **DELETE** /service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name} | Delete an SFTP log endpoint
*FastlyApi.LoggingSftpApi* | [**getLogSftp**](docs/LoggingSftpApi.md#getLogSftp) | **GET** /service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name} | Get an SFTP log endpoint
*FastlyApi.LoggingSftpApi* | [**listLogSftp**](docs/LoggingSftpApi.md#listLogSftp) | **GET** /service/{service_id}/version/{version_id}/logging/sftp | List SFTP log endpoints
*FastlyApi.LoggingSftpApi* | [**updateLogSftp**](docs/LoggingSftpApi.md#updateLogSftp) | **PUT** /service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name} | Update an SFTP log endpoint
*FastlyApi.LoggingSplunkApi* | [**createLogSplunk**](docs/LoggingSplunkApi.md#createLogSplunk) | **POST** /service/{service_id}/version/{version_id}/logging/splunk | Create a Splunk log endpoint
*FastlyApi.LoggingSplunkApi* | [**deleteLogSplunk**](docs/LoggingSplunkApi.md#deleteLogSplunk) | **DELETE** /service/{service_id}/version/{version_id}/logging/splunk/{logging_splunk_name} | Delete a Splunk log endpoint
*FastlyApi.LoggingSplunkApi* | [**getLogSplunk**](docs/LoggingSplunkApi.md#getLogSplunk) | **GET** /service/{service_id}/version/{version_id}/logging/splunk/{logging_splunk_name} | Get a Splunk log endpoint
*FastlyApi.LoggingSplunkApi* | [**listLogSplunk**](docs/LoggingSplunkApi.md#listLogSplunk) | **GET** /service/{service_id}/version/{version_id}/logging/splunk | List Splunk log endpoints
*FastlyApi.LoggingSplunkApi* | [**updateLogSplunk**](docs/LoggingSplunkApi.md#updateLogSplunk) | **PUT** /service/{service_id}/version/{version_id}/logging/splunk/{logging_splunk_name} | Update a Splunk log endpoint
*FastlyApi.LoggingSumologicApi* | [**createLogSumologic**](docs/LoggingSumologicApi.md#createLogSumologic) | **POST** /service/{service_id}/version/{version_id}/logging/sumologic | Create a Sumologic log endpoint
*FastlyApi.LoggingSumologicApi* | [**deleteLogSumologic**](docs/LoggingSumologicApi.md#deleteLogSumologic) | **DELETE** /service/{service_id}/version/{version_id}/logging/sumologic/{logging_sumologic_name} | Delete a Sumologic log endpoint
*FastlyApi.LoggingSumologicApi* | [**getLogSumologic**](docs/LoggingSumologicApi.md#getLogSumologic) | **GET** /service/{service_id}/version/{version_id}/logging/sumologic/{logging_sumologic_name} | Get a Sumologic log endpoint
*FastlyApi.LoggingSumologicApi* | [**listLogSumologic**](docs/LoggingSumologicApi.md#listLogSumologic) | **GET** /service/{service_id}/version/{version_id}/logging/sumologic | List Sumologic log endpoints
*FastlyApi.LoggingSumologicApi* | [**updateLogSumologic**](docs/LoggingSumologicApi.md#updateLogSumologic) | **PUT** /service/{service_id}/version/{version_id}/logging/sumologic/{logging_sumologic_name} | Update a Sumologic log endpoint
*FastlyApi.LoggingSyslogApi* | [**createLogSyslog**](docs/LoggingSyslogApi.md#createLogSyslog) | **POST** /service/{service_id}/version/{version_id}/logging/syslog | Create a syslog log endpoint
*FastlyApi.LoggingSyslogApi* | [**deleteLogSyslog**](docs/LoggingSyslogApi.md#deleteLogSyslog) | **DELETE** /service/{service_id}/version/{version_id}/logging/syslog/{logging_syslog_name} | Delete a syslog log endpoint
*FastlyApi.LoggingSyslogApi* | [**getLogSyslog**](docs/LoggingSyslogApi.md#getLogSyslog) | **GET** /service/{service_id}/version/{version_id}/logging/syslog/{logging_syslog_name} | Get a syslog log endpoint
*FastlyApi.LoggingSyslogApi* | [**listLogSyslog**](docs/LoggingSyslogApi.md#listLogSyslog) | **GET** /service/{service_id}/version/{version_id}/logging/syslog | List Syslog log endpoints
*FastlyApi.LoggingSyslogApi* | [**updateLogSyslog**](docs/LoggingSyslogApi.md#updateLogSyslog) | **PUT** /service/{service_id}/version/{version_id}/logging/syslog/{logging_syslog_name} | Update a syslog log endpoint
*FastlyApi.OriginInsightsApi* | [**getOriginInsightsLast120Seconds**](docs/OriginInsightsApi.md#getOriginInsightsLast120Seconds) | **GET** /v1/channel/{service_id}/ts/h?kind&#x3D;origin_insights | Get real-time origin data for the last 120 seconds
*FastlyApi.OriginInsightsApi* | [**getOriginInsightsLastMaxEntries**](docs/OriginInsightsApi.md#getOriginInsightsLastMaxEntries) | **GET** /v1/channel/{service_id}/ts/h/limit/{max_entries}?kind&#x3D;origin_insights | Get a limited number of real-time origin data entries
*FastlyApi.OriginInsightsApi* | [**getOriginInsightsLastSecond**](docs/OriginInsightsApi.md#getOriginInsightsLastSecond) | **GET** /v1/channel/{service_id}/ts/{start_timestamp}?kind&#x3D;origin_insights | Get real-time origin data for the last second
*FastlyApi.PackageApi* | [**getPackage**](docs/PackageApi.md#getPackage) | **GET** /service/{service_id}/version/{version_id}/package | Get details of the service&#39;s Compute@Edge package.
*FastlyApi.PackageApi* | [**putPackage**](docs/PackageApi.md#putPackage) | **PUT** /service/{service_id}/version/{version_id}/package | Upload a Compute@Edge package.
*FastlyApi.PoolApi* | [**createServerPool**](docs/PoolApi.md#createServerPool) | **POST** /service/{service_id}/version/{version_id}/pool | Create a server pool
*FastlyApi.PoolApi* | [**deleteServerPool**](docs/PoolApi.md#deleteServerPool) | **DELETE** /service/{service_id}/version/{version_id}/pool/{pool_name} | Delete a server pool
*FastlyApi.PoolApi* | [**getServerPool**](docs/PoolApi.md#getServerPool) | **GET** /service/{service_id}/version/{version_id}/pool/{pool_name} | Get a server pool
*FastlyApi.PoolApi* | [**listServerPools**](docs/PoolApi.md#listServerPools) | **GET** /service/{service_id}/version/{version_id}/pool | List server pools
*FastlyApi.PoolApi* | [**updateServerPool**](docs/PoolApi.md#updateServerPool) | **PUT** /service/{service_id}/version/{version_id}/pool/{pool_name} | Update a server pool
*FastlyApi.PublicIpListApi* | [**listFastlyIps**](docs/PublicIpListApi.md#listFastlyIps) | **GET** /public-ip-list | List Fastly&#39;s public IPs
*FastlyApi.RateLimiterApi* | [**createRateLimiter**](docs/RateLimiterApi.md#createRateLimiter) | **POST** /service/{service_id}/version/{version_id}/rate-limiters | Create a rate limiter
*FastlyApi.RateLimiterApi* | [**deleteRateLimiter**](docs/RateLimiterApi.md#deleteRateLimiter) | **DELETE** /rate-limiters/{rate_limiter_id} | Delete a rate limiter
*FastlyApi.RateLimiterApi* | [**getRateLimiter**](docs/RateLimiterApi.md#getRateLimiter) | **GET** /rate-limiters/{rate_limiter_id} | Get a rate limiter
*FastlyApi.RateLimiterApi* | [**listRateLimiters**](docs/RateLimiterApi.md#listRateLimiters) | **GET** /service/{service_id}/version/{version_id}/rate-limiters | List rate limiters
*FastlyApi.RateLimiterApi* | [**updateRateLimiter**](docs/RateLimiterApi.md#updateRateLimiter) | **PUT** /rate-limiters/{rate_limiter_id} | Update a rate limiter
*FastlyApi.RealtimeApi* | [**getStatsLast120Seconds**](docs/RealtimeApi.md#getStatsLast120Seconds) | **GET** /v1/channel/{service_id}/ts/h | Get real-time data for the last 120 seconds
*FastlyApi.RealtimeApi* | [**getStatsLast120SecondsLimitEntries**](docs/RealtimeApi.md#getStatsLast120SecondsLimitEntries) | **GET** /v1/channel/{service_id}/ts/h/limit/{max_entries} | Get a limited number of real-time data entries
*FastlyApi.RealtimeApi* | [**getStatsLastSecond**](docs/RealtimeApi.md#getStatsLastSecond) | **GET** /v1/channel/{service_id}/ts/{timestamp_in_seconds} | Get real-time data for the last second
*FastlyApi.RequestSettingsApi* | [**createRequestSettings**](docs/RequestSettingsApi.md#createRequestSettings) | **POST** /service/{service_id}/version/{version_id}/request_settings | Create a Request Settings object
*FastlyApi.RequestSettingsApi* | [**deleteRequestSettings**](docs/RequestSettingsApi.md#deleteRequestSettings) | **DELETE** /service/{service_id}/version/{version_id}/request_settings/{request_settings_name} | Delete a Request Settings object
*FastlyApi.RequestSettingsApi* | [**getRequestSettings**](docs/RequestSettingsApi.md#getRequestSettings) | **GET** /service/{service_id}/version/{version_id}/request_settings/{request_settings_name} | Get a Request Settings object
*FastlyApi.RequestSettingsApi* | [**listRequestSettings**](docs/RequestSettingsApi.md#listRequestSettings) | **GET** /service/{service_id}/version/{version_id}/request_settings | List Request Settings objects
*FastlyApi.RequestSettingsApi* | [**updateRequestSettings**](docs/RequestSettingsApi.md#updateRequestSettings) | **PUT** /service/{service_id}/version/{version_id}/request_settings/{request_settings_name} | Update a Request Settings object
*FastlyApi.ResponseObjectApi* | [**createResponseObject**](docs/ResponseObjectApi.md#createResponseObject) | **POST** /service/{service_id}/version/{version_id}/response_object | Create a Response object
*FastlyApi.ResponseObjectApi* | [**deleteResponseObject**](docs/ResponseObjectApi.md#deleteResponseObject) | **DELETE** /service/{service_id}/version/{version_id}/response_object/{response_object_name} | Delete a Response Object
*FastlyApi.ResponseObjectApi* | [**getResponseObject**](docs/ResponseObjectApi.md#getResponseObject) | **GET** /service/{service_id}/version/{version_id}/response_object/{response_object_name} | Get a Response object
*FastlyApi.ResponseObjectApi* | [**listResponseObjects**](docs/ResponseObjectApi.md#listResponseObjects) | **GET** /service/{service_id}/version/{version_id}/response_object | List Response objects
*FastlyApi.ResponseObjectApi* | [**updateResponseObject**](docs/ResponseObjectApi.md#updateResponseObject) | **PUT** /service/{service_id}/version/{version_id}/response_object/{response_object_name} | Update a Response object
*FastlyApi.ServerApi* | [**createPoolServer**](docs/ServerApi.md#createPoolServer) | **POST** /service/{service_id}/pool/{pool_id}/server | Add a server to a pool
*FastlyApi.ServerApi* | [**deletePoolServer**](docs/ServerApi.md#deletePoolServer) | **DELETE** /service/{service_id}/pool/{pool_id}/server/{server_id} | Delete a server from a pool
*FastlyApi.ServerApi* | [**getPoolServer**](docs/ServerApi.md#getPoolServer) | **GET** /service/{service_id}/pool/{pool_id}/server/{server_id} | Get a pool server
*FastlyApi.ServerApi* | [**listPoolServers**](docs/ServerApi.md#listPoolServers) | **GET** /service/{service_id}/pool/{pool_id}/servers | List servers in a pool
*FastlyApi.ServerApi* | [**updatePoolServer**](docs/ServerApi.md#updatePoolServer) | **PUT** /service/{service_id}/pool/{pool_id}/server/{server_id} | Update a server
*FastlyApi.ServiceApi* | [**createService**](docs/ServiceApi.md#createService) | **POST** /service | Create a service
*FastlyApi.ServiceApi* | [**deleteService**](docs/ServiceApi.md#deleteService) | **DELETE** /service/{service_id} | Delete a service
*FastlyApi.ServiceApi* | [**getService**](docs/ServiceApi.md#getService) | **GET** /service/{service_id} | Get a service
*FastlyApi.ServiceApi* | [**getServiceDetail**](docs/ServiceApi.md#getServiceDetail) | **GET** /service/{service_id}/details | Get service details
*FastlyApi.ServiceApi* | [**listServiceDomains**](docs/ServiceApi.md#listServiceDomains) | **GET** /service/{service_id}/domain | List the domains within a service
*FastlyApi.ServiceApi* | [**listServices**](docs/ServiceApi.md#listServices) | **GET** /service | List services
*FastlyApi.ServiceApi* | [**searchService**](docs/ServiceApi.md#searchService) | **GET** /service/search | Search for a service by name
*FastlyApi.ServiceApi* | [**updateService**](docs/ServiceApi.md#updateService) | **PUT** /service/{service_id} | Update a service
*FastlyApi.ServiceAuthorizationsApi* | [**createServiceAuthorization**](docs/ServiceAuthorizationsApi.md#createServiceAuthorization) | **POST** /service-authorizations | Create service authorization
*FastlyApi.ServiceAuthorizationsApi* | [**deleteServiceAuthorization**](docs/ServiceAuthorizationsApi.md#deleteServiceAuthorization) | **DELETE** /service-authorizations/{service_authorization_id} | Delete service authorization
*FastlyApi.ServiceAuthorizationsApi* | [**deleteServiceAuthorization2**](docs/ServiceAuthorizationsApi.md#deleteServiceAuthorization2) | **DELETE** /service-authorizations | Delete service authorizations
*FastlyApi.ServiceAuthorizationsApi* | [**listServiceAuthorization**](docs/ServiceAuthorizationsApi.md#listServiceAuthorization) | **GET** /service-authorizations | List service authorizations
*FastlyApi.ServiceAuthorizationsApi* | [**showServiceAuthorization**](docs/ServiceAuthorizationsApi.md#showServiceAuthorization) | **GET** /service-authorizations/{service_authorization_id} | Show service authorization
*FastlyApi.ServiceAuthorizationsApi* | [**updateServiceAuthorization**](docs/ServiceAuthorizationsApi.md#updateServiceAuthorization) | **PATCH** /service-authorizations/{service_authorization_id} | Update service authorization
*FastlyApi.ServiceAuthorizationsApi* | [**updateServiceAuthorization2**](docs/ServiceAuthorizationsApi.md#updateServiceAuthorization2) | **PATCH** /service-authorizations | Update service authorizations
*FastlyApi.SettingsApi* | [**getServiceSettings**](docs/SettingsApi.md#getServiceSettings) | **GET** /service/{service_id}/version/{version_id}/settings | Get service settings
*FastlyApi.SettingsApi* | [**updateServiceSettings**](docs/SettingsApi.md#updateServiceSettings) | **PUT** /service/{service_id}/version/{version_id}/settings | Update service settings
*FastlyApi.SnippetApi* | [**createSnippet**](docs/SnippetApi.md#createSnippet) | **POST** /service/{service_id}/version/{version_id}/snippet | Create a snippet
*FastlyApi.SnippetApi* | [**deleteSnippet**](docs/SnippetApi.md#deleteSnippet) | **DELETE** /service/{service_id}/version/{version_id}/snippet/{snippet_name} | Delete a snippet
*FastlyApi.SnippetApi* | [**getSnippet**](docs/SnippetApi.md#getSnippet) | **GET** /service/{service_id}/version/{version_id}/snippet/{snippet_name} | Get a versioned snippet
*FastlyApi.SnippetApi* | [**getSnippetDynamic**](docs/SnippetApi.md#getSnippetDynamic) | **GET** /service/{service_id}/snippet/{snippet_id} | Get a dynamic snippet
*FastlyApi.SnippetApi* | [**listSnippets**](docs/SnippetApi.md#listSnippets) | **GET** /service/{service_id}/version/{version_id}/snippet | List snippets
*FastlyApi.SnippetApi* | [**updateSnippet**](docs/SnippetApi.md#updateSnippet) | **PUT** /service/{service_id}/version/{version_id}/snippet/{snippet_name} | Update a versioned snippet
*FastlyApi.SnippetApi* | [**updateSnippetDynamic**](docs/SnippetApi.md#updateSnippetDynamic) | **PUT** /service/{service_id}/snippet/{snippet_id} | Update a dynamic snippet
*FastlyApi.StarApi* | [**createServiceStar**](docs/StarApi.md#createServiceStar) | **POST** /stars | Create a star
*FastlyApi.StarApi* | [**deleteServiceStar**](docs/StarApi.md#deleteServiceStar) | **DELETE** /stars/{star_id} | Delete a star
*FastlyApi.StarApi* | [**getServiceStar**](docs/StarApi.md#getServiceStar) | **GET** /stars/{star_id} | Get a star
*FastlyApi.StarApi* | [**listServiceStars**](docs/StarApi.md#listServiceStars) | **GET** /stars | List stars
*FastlyApi.StatsApi* | [**getServiceStats**](docs/StatsApi.md#getServiceStats) | **GET** /service/{service_id}/stats/summary | Get stats for a service
*FastlyApi.TlsActivationsApi* | [**createTlsActivation**](docs/TlsActivationsApi.md#createTlsActivation) | **POST** /tls/activations | Enable TLS for a domain using a custom certificate
*FastlyApi.TlsActivationsApi* | [**deleteTlsActivation**](docs/TlsActivationsApi.md#deleteTlsActivation) | **DELETE** /tls/activations/{tls_activation_id} | Disable TLS on a domain
*FastlyApi.TlsActivationsApi* | [**getTlsActivation**](docs/TlsActivationsApi.md#getTlsActivation) | **GET** /tls/activations/{tls_activation_id} | Get a TLS activation
*FastlyApi.TlsActivationsApi* | [**listTlsActivations**](docs/TlsActivationsApi.md#listTlsActivations) | **GET** /tls/activations | List TLS activations
*FastlyApi.TlsActivationsApi* | [**updateTlsActivation**](docs/TlsActivationsApi.md#updateTlsActivation) | **PATCH** /tls/activations/{tls_activation_id} | Update a certificate
*FastlyApi.TlsBulkCertificatesApi* | [**deleteBulkTlsCert**](docs/TlsBulkCertificatesApi.md#deleteBulkTlsCert) | **DELETE** /tls/bulk/certificates/{certificate_id} | Delete a certificate
*FastlyApi.TlsBulkCertificatesApi* | [**getTlsBulkCert**](docs/TlsBulkCertificatesApi.md#getTlsBulkCert) | **GET** /tls/bulk/certificates/{certificate_id} | Get a certificate
*FastlyApi.TlsBulkCertificatesApi* | [**listTlsBulkCerts**](docs/TlsBulkCertificatesApi.md#listTlsBulkCerts) | **GET** /tls/bulk/certificates | List certificates
*FastlyApi.TlsBulkCertificatesApi* | [**updateBulkTlsCert**](docs/TlsBulkCertificatesApi.md#updateBulkTlsCert) | **PATCH** /tls/bulk/certificates/{certificate_id} | Update a certificate
*FastlyApi.TlsBulkCertificatesApi* | [**uploadTlsBulkCert**](docs/TlsBulkCertificatesApi.md#uploadTlsBulkCert) | **POST** /tls/bulk/certificates | Upload a certificate
*FastlyApi.TlsCertificatesApi* | [**createTlsCert**](docs/TlsCertificatesApi.md#createTlsCert) | **POST** /tls/certificates | Create a TLS certificate
*FastlyApi.TlsCertificatesApi* | [**deleteTlsCert**](docs/TlsCertificatesApi.md#deleteTlsCert) | **DELETE** /tls/certificates/{tls_certificate_id} | Delete a TLS certificate
*FastlyApi.TlsCertificatesApi* | [**getTlsCert**](docs/TlsCertificatesApi.md#getTlsCert) | **GET** /tls/certificates/{tls_certificate_id} | Get a TLS certificate
*FastlyApi.TlsCertificatesApi* | [**listTlsCerts**](docs/TlsCertificatesApi.md#listTlsCerts) | **GET** /tls/certificates | List TLS certificates
*FastlyApi.TlsCertificatesApi* | [**updateTlsCert**](docs/TlsCertificatesApi.md#updateTlsCert) | **PATCH** /tls/certificates/{tls_certificate_id} | Update a TLS certificate
*FastlyApi.TlsConfigurationsApi* | [**getTlsConfig**](docs/TlsConfigurationsApi.md#getTlsConfig) | **GET** /tls/configurations/{tls_configuration_id} | Get a TLS configuration
*FastlyApi.TlsConfigurationsApi* | [**listTlsConfigs**](docs/TlsConfigurationsApi.md#listTlsConfigs) | **GET** /tls/configurations | List TLS configurations
*FastlyApi.TlsConfigurationsApi* | [**updateTlsConfig**](docs/TlsConfigurationsApi.md#updateTlsConfig) | **PATCH** /tls/configurations/{tls_configuration_id} | Update a TLS configuration
*FastlyApi.TlsDomainsApi* | [**listTlsDomains**](docs/TlsDomainsApi.md#listTlsDomains) | **GET** /tls/domains | List TLS domains
*FastlyApi.TlsPrivateKeysApi* | [**createTlsKey**](docs/TlsPrivateKeysApi.md#createTlsKey) | **POST** /tls/private_keys | Create a TLS private key
*FastlyApi.TlsPrivateKeysApi* | [**deleteTlsKey**](docs/TlsPrivateKeysApi.md#deleteTlsKey) | **DELETE** /tls/private_keys/{tls_private_key_id} | Delete a TLS private key
*FastlyApi.TlsPrivateKeysApi* | [**getTlsKey**](docs/TlsPrivateKeysApi.md#getTlsKey) | **GET** /tls/private_keys/{tls_private_key_id} | Get a TLS private key
*FastlyApi.TlsPrivateKeysApi* | [**listTlsKeys**](docs/TlsPrivateKeysApi.md#listTlsKeys) | **GET** /tls/private_keys | List TLS private keys
*FastlyApi.TlsSubscriptionsApi* | [**createTlsSub**](docs/TlsSubscriptionsApi.md#createTlsSub) | **POST** /tls/subscriptions | Create a TLS subscription
*FastlyApi.TlsSubscriptionsApi* | [**deleteTlsSub**](docs/TlsSubscriptionsApi.md#deleteTlsSub) | **DELETE** /tls/subscriptions/{tls_subscription_id} | Delete a TLS subscription
*FastlyApi.TlsSubscriptionsApi* | [**getTlsSub**](docs/TlsSubscriptionsApi.md#getTlsSub) | **GET** /tls/subscriptions/{tls_subscription_id} | Get a TLS subscription
*FastlyApi.TlsSubscriptionsApi* | [**listTlsSubs**](docs/TlsSubscriptionsApi.md#listTlsSubs) | **GET** /tls/subscriptions | List TLS subscriptions
*FastlyApi.TlsSubscriptionsApi* | [**patchTlsSub**](docs/TlsSubscriptionsApi.md#patchTlsSub) | **PATCH** /tls/subscriptions/{tls_subscription_id} | Update a TLS subscription
*FastlyApi.TokensApi* | [**bulkRevokeTokens**](docs/TokensApi.md#bulkRevokeTokens) | **DELETE** /tokens | Revoke multiple tokens
*FastlyApi.TokensApi* | [**createToken**](docs/TokensApi.md#createToken) | **POST** /tokens | Create a token
*FastlyApi.TokensApi* | [**getTokenCurrent**](docs/TokensApi.md#getTokenCurrent) | **GET** /tokens/self | Get the current token
*FastlyApi.TokensApi* | [**listTokensCustomer**](docs/TokensApi.md#listTokensCustomer) | **GET** /customer/{customer_id}/tokens | List tokens for a customer
*FastlyApi.TokensApi* | [**listTokensUser**](docs/TokensApi.md#listTokensUser) | **GET** /tokens | List tokens for the authenticated user
*FastlyApi.TokensApi* | [**revokeToken**](docs/TokensApi.md#revokeToken) | **DELETE** /tokens/{token_id} | Revoke a token
*FastlyApi.TokensApi* | [**revokeTokenCurrent**](docs/TokensApi.md#revokeTokenCurrent) | **DELETE** /tokens/self | Revoke the current token
*FastlyApi.UserApi* | [**createUser**](docs/UserApi.md#createUser) | **POST** /user | Create a user
*FastlyApi.UserApi* | [**deleteUser**](docs/UserApi.md#deleteUser) | **DELETE** /user/{user_id} | Delete a user
*FastlyApi.UserApi* | [**getCurrentUser**](docs/UserApi.md#getCurrentUser) | **GET** /current_user | Get the current user
*FastlyApi.UserApi* | [**getUser**](docs/UserApi.md#getUser) | **GET** /user/{user_id} | Get a user
*FastlyApi.UserApi* | [**requestPasswordReset**](docs/UserApi.md#requestPasswordReset) | **POST** /user/{user_login}/password/request_reset | Request a password reset
*FastlyApi.UserApi* | [**updateUser**](docs/UserApi.md#updateUser) | **PUT** /user/{user_id} | Update a user
*FastlyApi.UserApi* | [**updateUserPassword**](docs/UserApi.md#updateUserPassword) | **POST** /current_user/password | Update the user&#39;s password
*FastlyApi.VclApi* | [**createCustomVcl**](docs/VclApi.md#createCustomVcl) | **POST** /service/{service_id}/version/{version_id}/vcl | Create a custom VCL file
*FastlyApi.VclApi* | [**deleteCustomVcl**](docs/VclApi.md#deleteCustomVcl) | **DELETE** /service/{service_id}/version/{version_id}/vcl/{vcl_name} | Delete a custom VCL file
*FastlyApi.VclApi* | [**getCustomVcl**](docs/VclApi.md#getCustomVcl) | **GET** /service/{service_id}/version/{version_id}/vcl/{vcl_name} | Get a custom VCL file
*FastlyApi.VclApi* | [**getCustomVclBoilerplate**](docs/VclApi.md#getCustomVclBoilerplate) | **GET** /service/{service_id}/version/{version_id}/boilerplate | Get boilerplate VCL
*FastlyApi.VclApi* | [**getCustomVclGenerated**](docs/VclApi.md#getCustomVclGenerated) | **GET** /service/{service_id}/version/{version_id}/generated_vcl | Get the generated VCL for a service
*FastlyApi.VclApi* | [**getCustomVclGeneratedHighlighted**](docs/VclApi.md#getCustomVclGeneratedHighlighted) | **GET** /service/{service_id}/version/{version_id}/generated_vcl/content | Get the generated VCL with syntax highlighting
*FastlyApi.VclApi* | [**getCustomVclHighlighted**](docs/VclApi.md#getCustomVclHighlighted) | **GET** /service/{service_id}/version/{version_id}/vcl/{vcl_name}/content | Get a custom VCL file with syntax highlighting
*FastlyApi.VclApi* | [**getCustomVclRaw**](docs/VclApi.md#getCustomVclRaw) | **GET** /service/{service_id}/version/{version_id}/vcl/{vcl_name}/download | Download a custom VCL file
*FastlyApi.VclApi* | [**listCustomVcl**](docs/VclApi.md#listCustomVcl) | **GET** /service/{service_id}/version/{version_id}/vcl | List custom VCL files
*FastlyApi.VclApi* | [**setCustomVclMain**](docs/VclApi.md#setCustomVclMain) | **PUT** /service/{service_id}/version/{version_id}/vcl/{vcl_name}/main | Set a custom VCL file as main
*FastlyApi.VclApi* | [**updateCustomVcl**](docs/VclApi.md#updateCustomVcl) | **PUT** /service/{service_id}/version/{version_id}/vcl/{vcl_name} | Update a custom VCL file
*FastlyApi.VclDiffApi* | [**vclDiffServiceVersions**](docs/VclDiffApi.md#vclDiffServiceVersions) | **GET** /service/{service_id}/vcl/diff/from/{from_version_id}/to/{to_version_id} | Get a comparison of the VCL changes between two service versions
*FastlyApi.VersionApi* | [**activateServiceVersion**](docs/VersionApi.md#activateServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/activate | Activate a service version
*FastlyApi.VersionApi* | [**cloneServiceVersion**](docs/VersionApi.md#cloneServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/clone | Clone a service version
*FastlyApi.VersionApi* | [**createServiceVersion**](docs/VersionApi.md#createServiceVersion) | **POST** /service/{service_id}/version | Create a service version
*FastlyApi.VersionApi* | [**deactivateServiceVersion**](docs/VersionApi.md#deactivateServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/deactivate | Deactivate a service version
*FastlyApi.VersionApi* | [**getServiceVersion**](docs/VersionApi.md#getServiceVersion) | **GET** /service/{service_id}/version/{version_id} | Get a version of a service
*FastlyApi.VersionApi* | [**listServiceVersions**](docs/VersionApi.md#listServiceVersions) | **GET** /service/{service_id}/version | List versions of a service
*FastlyApi.VersionApi* | [**lockServiceVersion**](docs/VersionApi.md#lockServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/lock | Lock a service version
*FastlyApi.VersionApi* | [**updateServiceVersion**](docs/VersionApi.md#updateServiceVersion) | **PUT** /service/{service_id}/version/{version_id} | Update a service version
*FastlyApi.VersionApi* | [**validateServiceVersion**](docs/VersionApi.md#validateServiceVersion) | **GET** /service/{service_id}/version/{version_id}/validate | Validate a service version
*FastlyApi.WafActiveRulesApi* | [**bulkDeleteWafActiveRules**](docs/WafActiveRulesApi.md#bulkDeleteWafActiveRules) | **DELETE** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules | Delete multiple active rules from a WAF
*FastlyApi.WafActiveRulesApi* | [**bulkUpdateWafActiveRules**](docs/WafActiveRulesApi.md#bulkUpdateWafActiveRules) | **PATCH** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/bulk | Update multiple active rules
*FastlyApi.WafActiveRulesApi* | [**createWafActiveRule**](docs/WafActiveRulesApi.md#createWafActiveRule) | **POST** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules | Add a rule to a WAF as an active rule
*FastlyApi.WafActiveRulesApi* | [**createWafActiveRulesTag**](docs/WafActiveRulesApi.md#createWafActiveRulesTag) | **POST** /waf/firewalls/{firewall_id}/versions/{version_id}/tags/{waf_tag_name}/active-rules | Create active rules by tag
*FastlyApi.WafActiveRulesApi* | [**deleteWafActiveRule**](docs/WafActiveRulesApi.md#deleteWafActiveRule) | **DELETE** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/{waf_rule_id} | Delete an active rule
*FastlyApi.WafActiveRulesApi* | [**getWafActiveRule**](docs/WafActiveRulesApi.md#getWafActiveRule) | **GET** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/{waf_rule_id} | Get an active WAF rule object
*FastlyApi.WafActiveRulesApi* | [**listWafActiveRules**](docs/WafActiveRulesApi.md#listWafActiveRules) | **GET** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules | List active rules on a WAF
*FastlyApi.WafActiveRulesApi* | [**updateWafActiveRule**](docs/WafActiveRulesApi.md#updateWafActiveRule) | **PATCH** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/{waf_rule_id} | Update an active rule
*FastlyApi.WafExclusionsApi* | [**createWafRuleExclusion**](docs/WafExclusionsApi.md#createWafRuleExclusion) | **POST** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions | Create a WAF rule exclusion
*FastlyApi.WafExclusionsApi* | [**deleteWafRuleExclusion**](docs/WafExclusionsApi.md#deleteWafRuleExclusion) | **DELETE** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number} | Delete a WAF rule exclusion
*FastlyApi.WafExclusionsApi* | [**getWafRuleExclusion**](docs/WafExclusionsApi.md#getWafRuleExclusion) | **GET** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number} | Get a WAF rule exclusion
*FastlyApi.WafExclusionsApi* | [**listWafRuleExclusions**](docs/WafExclusionsApi.md#listWafRuleExclusions) | **GET** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions | List WAF rule exclusions
*FastlyApi.WafExclusionsApi* | [**updateWafRuleExclusion**](docs/WafExclusionsApi.md#updateWafRuleExclusion) | **PATCH** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number} | Update a WAF rule exclusion
*FastlyApi.WafFirewallVersionsApi* | [**cloneWafFirewallVersion**](docs/WafFirewallVersionsApi.md#cloneWafFirewallVersion) | **PUT** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/clone | Clone a firewall version
*FastlyApi.WafFirewallVersionsApi* | [**createWafFirewallVersion**](docs/WafFirewallVersionsApi.md#createWafFirewallVersion) | **POST** /waf/firewalls/{firewall_id}/versions | Create a firewall version
*FastlyApi.WafFirewallVersionsApi* | [**deployActivateWafFirewallVersion**](docs/WafFirewallVersionsApi.md#deployActivateWafFirewallVersion) | **PUT** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/activate | Deploy or activate a firewall version
*FastlyApi.WafFirewallVersionsApi* | [**getWafFirewallVersion**](docs/WafFirewallVersionsApi.md#getWafFirewallVersion) | **GET** /waf/firewalls/{firewall_id}/versions/{firewall_version_number} | Get a firewall version
*FastlyApi.WafFirewallVersionsApi* | [**listWafFirewallVersions**](docs/WafFirewallVersionsApi.md#listWafFirewallVersions) | **GET** /waf/firewalls/{firewall_id}/versions | List firewall versions
*FastlyApi.WafFirewallVersionsApi* | [**updateWafFirewallVersion**](docs/WafFirewallVersionsApi.md#updateWafFirewallVersion) | **PATCH** /waf/firewalls/{firewall_id}/versions/{firewall_version_number} | Update a firewall version
*FastlyApi.WafFirewallsApi* | [**createWafFirewall**](docs/WafFirewallsApi.md#createWafFirewall) | **POST** /waf/firewalls | Create a firewall
*FastlyApi.WafFirewallsApi* | [**deleteWafFirewall**](docs/WafFirewallsApi.md#deleteWafFirewall) | **DELETE** /waf/firewalls/{firewall_id} | Delete a firewall
*FastlyApi.WafFirewallsApi* | [**getWafFirewall**](docs/WafFirewallsApi.md#getWafFirewall) | **GET** /waf/firewalls/{firewall_id} | Get a firewall
*FastlyApi.WafFirewallsApi* | [**listWafFirewalls**](docs/WafFirewallsApi.md#listWafFirewalls) | **GET** /waf/firewalls | List firewalls
*FastlyApi.WafFirewallsApi* | [**updateWafFirewall**](docs/WafFirewallsApi.md#updateWafFirewall) | **PATCH** /waf/firewalls/{firewall_id} | Update a firewall
*FastlyApi.WafRuleRevisionsApi* | [**getWafRuleRevision**](docs/WafRuleRevisionsApi.md#getWafRuleRevision) | **GET** /waf/rules/{waf_rule_id}/revisions/{waf_rule_revision_number} | Get a revision of a rule
*FastlyApi.WafRuleRevisionsApi* | [**listWafRuleRevisions**](docs/WafRuleRevisionsApi.md#listWafRuleRevisions) | **GET** /waf/rules/{waf_rule_id}/revisions | List revisions for a rule
*FastlyApi.WafRulesApi* | [**getWafRule**](docs/WafRulesApi.md#getWafRule) | **GET** /waf/rules/{waf_rule_id} | Get a rule
*FastlyApi.WafRulesApi* | [**listWafRules**](docs/WafRulesApi.md#listWafRules) | **GET** /waf/rules | List available WAF rules
*FastlyApi.WafTagsApi* | [**listWafTags**](docs/WafTagsApi.md#listWafTags) | **GET** /waf/tags | List tags


## Documentation for Models

 - [FastlyApi.CustomerCustomerIdBillingAddressData](docs/CustomerCustomerIdBillingAddressData.md)
 - [FastlyApi.CustomerCustomerIdBillingAddressData1](docs/CustomerCustomerIdBillingAddressData1.md)
 - [FastlyApi.Direction](docs/Direction.md)
 - [FastlyApi.GenericTokenError](docs/GenericTokenError.md)
 - [FastlyApi.InlineObject](docs/InlineObject.md)
 - [FastlyApi.InlineObject1](docs/InlineObject1.md)
 - [FastlyApi.InlineObject2](docs/InlineObject2.md)
 - [FastlyApi.InlineObject3](docs/InlineObject3.md)
 - [FastlyApi.InlineObject4](docs/InlineObject4.md)
 - [FastlyApi.InlineObject5](docs/InlineObject5.md)
 - [FastlyApi.InlineObject6](docs/InlineObject6.md)
 - [FastlyApi.InlineObject8](docs/InlineObject8.md)
 - [FastlyApi.InlineObject9](docs/InlineObject9.md)
 - [FastlyApi.InlineResponse200](docs/InlineResponse200.md)
 - [FastlyApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [FastlyApi.InlineResponse204](docs/InlineResponse204.md)
 - [FastlyApi.InlineResponse400](docs/InlineResponse400.md)
 - [FastlyApi.InvitationsData](docs/InvitationsData.md)
 - [FastlyApi.LoggingAddressAndPort](docs/LoggingAddressAndPort.md)
 - [FastlyApi.LoggingCommon](docs/LoggingCommon.md)
 - [FastlyApi.LoggingCompressionCodec](docs/LoggingCompressionCodec.md)
 - [FastlyApi.LoggingFormatVersion](docs/LoggingFormatVersion.md)
 - [FastlyApi.LoggingGcsCommon](docs/LoggingGcsCommon.md)
 - [FastlyApi.LoggingGenericCommon](docs/LoggingGenericCommon.md)
 - [FastlyApi.LoggingMessageType](docs/LoggingMessageType.md)
 - [FastlyApi.LoggingPlacement](docs/LoggingPlacement.md)
 - [FastlyApi.LoggingRequestCapsCommon](docs/LoggingRequestCapsCommon.md)
 - [FastlyApi.LoggingTlsCommon](docs/LoggingTlsCommon.md)
 - [FastlyApi.LoggingUseTls](docs/LoggingUseTls.md)
 - [FastlyApi.ModelAcl](docs/ModelAcl.md)
 - [FastlyApi.ModelAclAllOf](docs/ModelAclAllOf.md)
 - [FastlyApi.ModelAclEntry](docs/ModelAclEntry.md)
 - [FastlyApi.ModelAclEntryAllOf](docs/ModelAclEntryAllOf.md)
 - [FastlyApi.ModelBackend](docs/ModelBackend.md)
 - [FastlyApi.ModelBackendAllOf](docs/ModelBackendAllOf.md)
 - [FastlyApi.ModelBilling](docs/ModelBilling.md)
 - [FastlyApi.ModelBillingAddress](docs/ModelBillingAddress.md)
 - [FastlyApi.ModelBillingStatus](docs/ModelBillingStatus.md)
 - [FastlyApi.ModelBillingTotal](docs/ModelBillingTotal.md)
 - [FastlyApi.ModelBillingTotalExtras](docs/ModelBillingTotalExtras.md)
 - [FastlyApi.ModelCacheSettings](docs/ModelCacheSettings.md)
 - [FastlyApi.ModelCacheSettingsAllOf](docs/ModelCacheSettingsAllOf.md)
 - [FastlyApi.ModelCompatInvitation](docs/ModelCompatInvitation.md)
 - [FastlyApi.ModelCompatService](docs/ModelCompatService.md)
 - [FastlyApi.ModelCompatServiceAllOf](docs/ModelCompatServiceAllOf.md)
 - [FastlyApi.ModelCompatServiceAuthorization](docs/ModelCompatServiceAuthorization.md)
 - [FastlyApi.ModelCompatStar](docs/ModelCompatStar.md)
 - [FastlyApi.ModelCompatTlsConfiguration](docs/ModelCompatTlsConfiguration.md)
 - [FastlyApi.ModelCompatTlsSubscriptions](docs/ModelCompatTlsSubscriptions.md)
 - [FastlyApi.ModelCompatWafExclusions](docs/ModelCompatWafExclusions.md)
 - [FastlyApi.ModelCompatWafExclusionsData](docs/ModelCompatWafExclusionsData.md)
 - [FastlyApi.ModelCompatWafExclusionsDataRelationships](docs/ModelCompatWafExclusionsDataRelationships.md)
 - [FastlyApi.ModelCompatWafExclusionsDataRelationshipsWafRules](docs/ModelCompatWafExclusionsDataRelationshipsWafRules.md)
 - [FastlyApi.ModelCompatWafExclusionsDataRelationshipsWafRulesData](docs/ModelCompatWafExclusionsDataRelationshipsWafRulesData.md)
 - [FastlyApi.ModelCondition](docs/ModelCondition.md)
 - [FastlyApi.ModelConditionAllOf](docs/ModelConditionAllOf.md)
 - [FastlyApi.ModelCustomer](docs/ModelCustomer.md)
 - [FastlyApi.ModelCustomerAllOf](docs/ModelCustomerAllOf.md)
 - [FastlyApi.ModelDictionary](docs/ModelDictionary.md)
 - [FastlyApi.ModelDictionaryAllOf](docs/ModelDictionaryAllOf.md)
 - [FastlyApi.ModelDictionaryInfo](docs/ModelDictionaryInfo.md)
 - [FastlyApi.ModelDictionaryItem](docs/ModelDictionaryItem.md)
 - [FastlyApi.ModelDictionaryItemAllOf](docs/ModelDictionaryItemAllOf.md)
 - [FastlyApi.ModelDiff](docs/ModelDiff.md)
 - [FastlyApi.ModelDirector](docs/ModelDirector.md)
 - [FastlyApi.ModelDirectorAllOf](docs/ModelDirectorAllOf.md)
 - [FastlyApi.ModelDirectorBackend](docs/ModelDirectorBackend.md)
 - [FastlyApi.ModelDirectorBackendAllOf](docs/ModelDirectorBackendAllOf.md)
 - [FastlyApi.ModelDomain](docs/ModelDomain.md)
 - [FastlyApi.ModelDomainAllOf](docs/ModelDomainAllOf.md)
 - [FastlyApi.ModelEvent](docs/ModelEvent.md)
 - [FastlyApi.ModelGzip](docs/ModelGzip.md)
 - [FastlyApi.ModelGzipAllOf](docs/ModelGzipAllOf.md)
 - [FastlyApi.ModelHeader](docs/ModelHeader.md)
 - [FastlyApi.ModelHeaderAllOf](docs/ModelHeaderAllOf.md)
 - [FastlyApi.ModelHealthcheck](docs/ModelHealthcheck.md)
 - [FastlyApi.ModelHealthcheckAllOf](docs/ModelHealthcheckAllOf.md)
 - [FastlyApi.ModelHistorical](docs/ModelHistorical.md)
 - [FastlyApi.ModelInvitation](docs/ModelInvitation.md)
 - [FastlyApi.ModelInvitationAllOf](docs/ModelInvitationAllOf.md)
 - [FastlyApi.ModelLoggingAzureblob](docs/ModelLoggingAzureblob.md)
 - [FastlyApi.ModelLoggingAzureblobAllOf](docs/ModelLoggingAzureblobAllOf.md)
 - [FastlyApi.ModelLoggingBigquery](docs/ModelLoggingBigquery.md)
 - [FastlyApi.ModelLoggingBigqueryAllOf](docs/ModelLoggingBigqueryAllOf.md)
 - [FastlyApi.ModelLoggingCloudfiles](docs/ModelLoggingCloudfiles.md)
 - [FastlyApi.ModelLoggingCloudfilesAllOf](docs/ModelLoggingCloudfilesAllOf.md)
 - [FastlyApi.ModelLoggingDatadog](docs/ModelLoggingDatadog.md)
 - [FastlyApi.ModelLoggingDatadogAllOf](docs/ModelLoggingDatadogAllOf.md)
 - [FastlyApi.ModelLoggingDigitalocean](docs/ModelLoggingDigitalocean.md)
 - [FastlyApi.ModelLoggingDigitaloceanAllOf](docs/ModelLoggingDigitaloceanAllOf.md)
 - [FastlyApi.ModelLoggingElasticsearch](docs/ModelLoggingElasticsearch.md)
 - [FastlyApi.ModelLoggingElasticsearchAllOf](docs/ModelLoggingElasticsearchAllOf.md)
 - [FastlyApi.ModelLoggingFtp](docs/ModelLoggingFtp.md)
 - [FastlyApi.ModelLoggingFtpAllOf](docs/ModelLoggingFtpAllOf.md)
 - [FastlyApi.ModelLoggingGcs](docs/ModelLoggingGcs.md)
 - [FastlyApi.ModelLoggingGcsAllOf](docs/ModelLoggingGcsAllOf.md)
 - [FastlyApi.ModelLoggingGooglePubsub](docs/ModelLoggingGooglePubsub.md)
 - [FastlyApi.ModelLoggingGooglePubsubAllOf](docs/ModelLoggingGooglePubsubAllOf.md)
 - [FastlyApi.ModelLoggingHeroku](docs/ModelLoggingHeroku.md)
 - [FastlyApi.ModelLoggingHerokuAllOf](docs/ModelLoggingHerokuAllOf.md)
 - [FastlyApi.ModelLoggingHoneycomb](docs/ModelLoggingHoneycomb.md)
 - [FastlyApi.ModelLoggingHoneycombAllOf](docs/ModelLoggingHoneycombAllOf.md)
 - [FastlyApi.ModelLoggingHttps](docs/ModelLoggingHttps.md)
 - [FastlyApi.ModelLoggingHttpsAllOf](docs/ModelLoggingHttpsAllOf.md)
 - [FastlyApi.ModelLoggingKafka](docs/ModelLoggingKafka.md)
 - [FastlyApi.ModelLoggingKafkaAllOf](docs/ModelLoggingKafkaAllOf.md)
 - [FastlyApi.ModelLoggingKinesis](docs/ModelLoggingKinesis.md)
 - [FastlyApi.ModelLoggingKinesisAllOf](docs/ModelLoggingKinesisAllOf.md)
 - [FastlyApi.ModelLoggingLogentries](docs/ModelLoggingLogentries.md)
 - [FastlyApi.ModelLoggingLogentriesAllOf](docs/ModelLoggingLogentriesAllOf.md)
 - [FastlyApi.ModelLoggingLoggly](docs/ModelLoggingLoggly.md)
 - [FastlyApi.ModelLoggingLogglyAllOf](docs/ModelLoggingLogglyAllOf.md)
 - [FastlyApi.ModelLoggingLogshuttle](docs/ModelLoggingLogshuttle.md)
 - [FastlyApi.ModelLoggingLogshuttleAllOf](docs/ModelLoggingLogshuttleAllOf.md)
 - [FastlyApi.ModelLoggingNewrelic](docs/ModelLoggingNewrelic.md)
 - [FastlyApi.ModelLoggingNewrelicAllOf](docs/ModelLoggingNewrelicAllOf.md)
 - [FastlyApi.ModelLoggingOpenstack](docs/ModelLoggingOpenstack.md)
 - [FastlyApi.ModelLoggingOpenstackAllOf](docs/ModelLoggingOpenstackAllOf.md)
 - [FastlyApi.ModelLoggingPapertrail](docs/ModelLoggingPapertrail.md)
 - [FastlyApi.ModelLoggingS3](docs/ModelLoggingS3.md)
 - [FastlyApi.ModelLoggingS3AllOf](docs/ModelLoggingS3AllOf.md)
 - [FastlyApi.ModelLoggingScalyr](docs/ModelLoggingScalyr.md)
 - [FastlyApi.ModelLoggingScalyrAllOf](docs/ModelLoggingScalyrAllOf.md)
 - [FastlyApi.ModelLoggingSftp](docs/ModelLoggingSftp.md)
 - [FastlyApi.ModelLoggingSftpAllOf](docs/ModelLoggingSftpAllOf.md)
 - [FastlyApi.ModelLoggingSplunk](docs/ModelLoggingSplunk.md)
 - [FastlyApi.ModelLoggingSplunkAllOf](docs/ModelLoggingSplunkAllOf.md)
 - [FastlyApi.ModelLoggingSumologic](docs/ModelLoggingSumologic.md)
 - [FastlyApi.ModelLoggingSumologicAllOf](docs/ModelLoggingSumologicAllOf.md)
 - [FastlyApi.ModelLoggingSyslog](docs/ModelLoggingSyslog.md)
 - [FastlyApi.ModelLoggingSyslogAllOf](docs/ModelLoggingSyslogAllOf.md)
 - [FastlyApi.ModelOriginInsights](docs/ModelOriginInsights.md)
 - [FastlyApi.ModelOriginInsightsEntry](docs/ModelOriginInsightsEntry.md)
 - [FastlyApi.ModelOriginInsightsMeasurements](docs/ModelOriginInsightsMeasurements.md)
 - [FastlyApi.ModelPackage](docs/ModelPackage.md)
 - [FastlyApi.ModelPackageAllOf](docs/ModelPackageAllOf.md)
 - [FastlyApi.ModelPackageMetadata](docs/ModelPackageMetadata.md)
 - [FastlyApi.ModelPool](docs/ModelPool.md)
 - [FastlyApi.ModelPoolAllOf](docs/ModelPoolAllOf.md)
 - [FastlyApi.ModelRateLimiter](docs/ModelRateLimiter.md)
 - [FastlyApi.ModelRateLimiterAllOf](docs/ModelRateLimiterAllOf.md)
 - [FastlyApi.ModelRateLimiterAllOfResponse](docs/ModelRateLimiterAllOfResponse.md)
 - [FastlyApi.ModelRealtime](docs/ModelRealtime.md)
 - [FastlyApi.ModelRealtimeEntry](docs/ModelRealtimeEntry.md)
 - [FastlyApi.ModelRealtimeMeasurements](docs/ModelRealtimeMeasurements.md)
 - [FastlyApi.ModelRequestSettings](docs/ModelRequestSettings.md)
 - [FastlyApi.ModelRequestSettingsAllOf](docs/ModelRequestSettingsAllOf.md)
 - [FastlyApi.ModelResponseObject](docs/ModelResponseObject.md)
 - [FastlyApi.ModelResponseObjectAllOf](docs/ModelResponseObjectAllOf.md)
 - [FastlyApi.ModelServer](docs/ModelServer.md)
 - [FastlyApi.ModelServerAllOf](docs/ModelServerAllOf.md)
 - [FastlyApi.ModelService](docs/ModelService.md)
 - [FastlyApi.ModelServiceAllOf](docs/ModelServiceAllOf.md)
 - [FastlyApi.ModelServiceAuthorization](docs/ModelServiceAuthorization.md)
 - [FastlyApi.ModelServiceAuthorizationAllOf](docs/ModelServiceAuthorizationAllOf.md)
 - [FastlyApi.ModelServiceDetail](docs/ModelServiceDetail.md)
 - [FastlyApi.ModelServiceDetailAllOf](docs/ModelServiceDetailAllOf.md)
 - [FastlyApi.ModelSettings](docs/ModelSettings.md)
 - [FastlyApi.ModelSettingsAllOf](docs/ModelSettingsAllOf.md)
 - [FastlyApi.ModelSnippet](docs/ModelSnippet.md)
 - [FastlyApi.ModelSnippetAllOf](docs/ModelSnippetAllOf.md)
 - [FastlyApi.ModelStar](docs/ModelStar.md)
 - [FastlyApi.ModelStarAllOf](docs/ModelStarAllOf.md)
 - [FastlyApi.ModelTlsActivation](docs/ModelTlsActivation.md)
 - [FastlyApi.ModelTlsBulkCertificate](docs/ModelTlsBulkCertificate.md)
 - [FastlyApi.ModelTlsCertificate](docs/ModelTlsCertificate.md)
 - [FastlyApi.ModelTlsConfiguration](docs/ModelTlsConfiguration.md)
 - [FastlyApi.ModelTlsConfigurationRelationships](docs/ModelTlsConfigurationRelationships.md)
 - [FastlyApi.ModelTlsDnsRecord](docs/ModelTlsDnsRecord.md)
 - [FastlyApi.ModelTlsDomain](docs/ModelTlsDomain.md)
 - [FastlyApi.ModelTlsPrivateKey](docs/ModelTlsPrivateKey.md)
 - [FastlyApi.ModelTlsSubscription](docs/ModelTlsSubscription.md)
 - [FastlyApi.ModelToken](docs/ModelToken.md)
 - [FastlyApi.ModelTokenCreated](docs/ModelTokenCreated.md)
 - [FastlyApi.ModelTokenCreatedAllOf](docs/ModelTokenCreatedAllOf.md)
 - [FastlyApi.ModelUser](docs/ModelUser.md)
 - [FastlyApi.ModelUserAllOf](docs/ModelUserAllOf.md)
 - [FastlyApi.ModelVcl](docs/ModelVcl.md)
 - [FastlyApi.ModelVclAllOf](docs/ModelVclAllOf.md)
 - [FastlyApi.ModelVclDiff](docs/ModelVclDiff.md)
 - [FastlyApi.ModelVersion](docs/ModelVersion.md)
 - [FastlyApi.ModelVersionAllOf](docs/ModelVersionAllOf.md)
 - [FastlyApi.ModelVersionDetail](docs/ModelVersionDetail.md)
 - [FastlyApi.ModelWafActiveRule](docs/ModelWafActiveRule.md)
 - [FastlyApi.ModelWafActiveRuleAllOf](docs/ModelWafActiveRuleAllOf.md)
 - [FastlyApi.ModelWafExclusions](docs/ModelWafExclusions.md)
 - [FastlyApi.ModelWafExclusionsAllOf](docs/ModelWafExclusionsAllOf.md)
 - [FastlyApi.ModelWafFirewall](docs/ModelWafFirewall.md)
 - [FastlyApi.ModelWafFirewallVersions](docs/ModelWafFirewallVersions.md)
 - [FastlyApi.ModelWafRule](docs/ModelWafRule.md)
 - [FastlyApi.ModelWafRuleRevision](docs/ModelWafRuleRevision.md)
 - [FastlyApi.ModelWafTag](docs/ModelWafTag.md)
 - [FastlyApi.NestedModelVersion](docs/NestedModelVersion.md)
 - [FastlyApi.Pagination](docs/Pagination.md)
 - [FastlyApi.PaginationLinks](docs/PaginationLinks.md)
 - [FastlyApi.PaginationMeta](docs/PaginationMeta.md)
 - [FastlyApi.Permission](docs/Permission.md)
 - [FastlyApi.RelationshipCustomer](docs/RelationshipCustomer.md)
 - [FastlyApi.RelationshipCustomerCustomer](docs/RelationshipCustomerCustomer.md)
 - [FastlyApi.RelationshipCustomerCustomerData](docs/RelationshipCustomerCustomerData.md)
 - [FastlyApi.RelationshipService](docs/RelationshipService.md)
 - [FastlyApi.RelationshipServiceInvitation](docs/RelationshipServiceInvitation.md)
 - [FastlyApi.RelationshipServiceInvitationServiceInvitation](docs/RelationshipServiceInvitationServiceInvitation.md)
 - [FastlyApi.RelationshipServiceInvitationServiceInvitationData](docs/RelationshipServiceInvitationServiceInvitationData.md)
 - [FastlyApi.RelationshipServiceService](docs/RelationshipServiceService.md)
 - [FastlyApi.RelationshipServiceServiceData](docs/RelationshipServiceServiceData.md)
 - [FastlyApi.RelationshipUser](docs/RelationshipUser.md)
 - [FastlyApi.RelationshipUserUser](docs/RelationshipUserUser.md)
 - [FastlyApi.RelationshipUserUserData](docs/RelationshipUserUserData.md)
 - [FastlyApi.ResourceBillingAddress](docs/ResourceBillingAddress.md)
 - [FastlyApi.ResourceBillingAddressData](docs/ResourceBillingAddressData.md)
 - [FastlyApi.ResourceEvent](docs/ResourceEvent.md)
 - [FastlyApi.ResourceEventData](docs/ResourceEventData.md)
 - [FastlyApi.ResourceInvitation](docs/ResourceInvitation.md)
 - [FastlyApi.ResourceInvitationData](docs/ResourceInvitationData.md)
 - [FastlyApi.ResourceServiceAuthorization](docs/ResourceServiceAuthorization.md)
 - [FastlyApi.ResourceServiceAuthorizationData](docs/ResourceServiceAuthorizationData.md)
 - [FastlyApi.ResourceServiceInvitation](docs/ResourceServiceInvitation.md)
 - [FastlyApi.ResourceServiceInvitationData](docs/ResourceServiceInvitationData.md)
 - [FastlyApi.ResourceStar](docs/ResourceStar.md)
 - [FastlyApi.ResourceStarData](docs/ResourceStarData.md)
 - [FastlyApi.ResourceWafTag](docs/ResourceWafTag.md)
 - [FastlyApi.ResourceWafTagAllOf](docs/ResourceWafTagAllOf.md)
 - [FastlyApi.RoleUser](docs/RoleUser.md)
 - [FastlyApi.SchemasModelBackend](docs/SchemasModelBackend.md)
 - [FastlyApi.SchemasModelGzip](docs/SchemasModelGzip.md)
 - [FastlyApi.SchemasModelHeader](docs/SchemasModelHeader.md)
 - [FastlyApi.SchemasModelSettings](docs/SchemasModelSettings.md)
 - [FastlyApi.SchemasModelSnippet](docs/SchemasModelSnippet.md)
 - [FastlyApi.SchemasModelUser](docs/SchemasModelUser.md)
 - [FastlyApi.SchemasModelVcl](docs/SchemasModelVcl.md)
 - [FastlyApi.SchemasModelVersion](docs/SchemasModelVersion.md)
 - [FastlyApi.Service](docs/Service.md)
 - [FastlyApi.ServiceAuthorizationsData](docs/ServiceAuthorizationsData.md)
 - [FastlyApi.ServiceIdAndVersion](docs/ServiceIdAndVersion.md)
 - [FastlyApi.Timestamps](docs/Timestamps.md)
 - [FastlyApi.TimestampsNoDelete](docs/TimestampsNoDelete.md)
 - [FastlyApi.TlsCommon](docs/TlsCommon.md)
 - [FastlyApi.WafFirewallsFirewallIdVersionsFirewallVersionNumberExclusionsData](docs/WafFirewallsFirewallIdVersionsFirewallVersionNumberExclusionsData.md)
 - [FastlyApi.WafFirewallsFirewallIdVersionsFirewallVersionNumberExclusionsDataRelationships](docs/WafFirewallsFirewallIdVersionsFirewallVersionNumberExclusionsDataRelationships.md)
 - [FastlyApi.WafFirewallsFirewallIdVersionsFirewallVersionNumberExclusionsDataRelationshipsWafRules](docs/WafFirewallsFirewallIdVersionsFirewallVersionNumberExclusionsDataRelationshipsWafRules.md)
 - [FastlyApi.WafFirewallsFirewallIdVersionsFirewallVersionNumberExclusionsDataRelationshipsWafRulesData](docs/WafFirewallsFirewallIdVersionsFirewallVersionNumberExclusionsDataRelationshipsWafRulesData.md)
 - [FastlyApi.WafFirewallsFirewallIdVersionsFirewallVersionNumberExclusionsExclusionNumberData](docs/WafFirewallsFirewallIdVersionsFirewallVersionNumberExclusionsExclusionNumberData.md)


## Documentation for Authorization



### token


- **Type**: API key
- **API key parameter name**: Fastly-Key
- **Location**: HTTP header




## Development

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install fastly_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your fastly_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```


This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
