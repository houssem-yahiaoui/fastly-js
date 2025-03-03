# Fastly.LoggingSftpAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **String** | The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference. | [optional] 
**path** | **String** | The path to upload logs to. | [optional]  [defaults to 'null']
**port** | **Number** | The port number. | [optional]  [defaults to 22]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional]  [defaults to 'null']
**secret_key** | **String** | The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference. | [optional]  [defaults to 'null']
**ssh_known_hosts** | **String** | A list of host keys for all hosts we can connect to over SFTP. | [optional] 
**user** | **String** | The username for the server. | [optional] 


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
