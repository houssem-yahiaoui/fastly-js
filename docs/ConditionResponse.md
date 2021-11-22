# Fastly.ConditionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **String** | A freeform descriptive note. | [optional] 
**name** | **String** | Name of the condition. Required. | [optional] 
**priority** | **Number** | Priority determines execution order. Lower numbers execute first. | [optional]  [defaults to 100]
**statement** | **String** | A conditional expression in VCL used to determine if the condition is met. | [optional] 
**type** | **String** | Type of the condition. Required. | [optional]  [one of: "REQUEST", "CACHE", "RESPONSE", "PREFETCH"]
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)