# Fastly.CacheSettingResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule.  | [optional]  [one of: "pass", "cache", "restart"]
**cache_condition** | **String** | Name of the cache condition controlling when this configuration applies. | [optional] 
**name** | **String** | Name for the cache settings object. | [optional] 
**stale_ttl** | **Number** | Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as &#39;stale if error&#39;). | [optional] 
**ttl** | **Number** | Maximum time to consider the object fresh in the cache (the cache &#39;time to live&#39;). | [optional] 
**service_id** | **String** |  | [optional] [readonly] 
**version** | **Number** |  | [optional] [readonly] 
**created_at** | **Date** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **Date** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **Date** | Date and time in ISO 8601 format. | [optional] [readonly] 


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
