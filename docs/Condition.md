# Fastly.Condition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **String** | A freeform descriptive note. | [optional] 
**name** | **String** | Name of the condition. Required. | [optional] 
**priority** | **Number** | Priority determines execution order. Lower numbers execute first. | [optional]  [defaults to 100]
**statement** | **String** | A conditional expression in VCL used to determine if the condition is met. | [optional] 
**type** | **String** | Type of the condition. Required. | [optional]  [one of: "REQUEST", "CACHE", "RESPONSE", "PREFETCH"]


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)