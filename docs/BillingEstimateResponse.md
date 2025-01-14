# Fastly.BillingEstimateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **Date** | Date and time in ISO 8601 format. | [optional] [readonly] 
**start_time** | **Date** | Date and time in ISO 8601 format. | [optional] [readonly] 
**invoice_id** | **String** |  | [optional] [readonly] 
**customer_id** | **String** |  | [optional] [readonly] 
**vendor_state** | **String** | The current state of our third-party billing vendor. One of `up` or `down`. | [optional] [readonly] 
**status** | [**BillingStatus**](BillingStatus.md) |  | [optional] 
**total** | [**BillingTotal**](BillingTotal.md) |  | [optional] 
**regions** | **{String: {String: Object}}** | Breakdown of regional data for products that are region based. | [optional] 
**lines** | [**[BillingEstimateResponseAllOfLines]**](BillingEstimateResponseAllOfLines.md) |  | [optional] 


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
