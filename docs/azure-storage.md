---
id: azure-storage
title: Azure Storage setup
sidebar_label: Azure Storage setup
---

## Prerequisites

- [CLI setup](./cli) completed
- [Native Module setup](./native-module) completed
- [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/) account available

## Switching to Azure storage

### Updating LiveBundle CLI configuration

To try your setup end-to-end, you will first need to switch from the `fs` storage *(default configured storage)*, to `azure` storage.

Under the `storage` section in `livebundle.yml` default configuration file locate the `fs` storage provider declaration and comment it *(or remove it)*

```yaml
#fs:
#  storageDir:
```

Then, locate the `azure` storage declaration and uncomment it

```yaml
azure:
  accountUrl: <azure-store-account-url>
  container: <azure-container-name>
  sasToken: <azure-shared-access-signature-token-for-upload>
  sasTokenReads: <azure-sastoken-for-reads>
```

Finally, replace `<azure-store-account-url>` and `<azure-container-name>` with values matching your Azure Blob Storage account. *(The account url is typically formatted as `https://[account].blob.core.windows.net`)*.

The `sasToken` should be an Azure Shared Access Signature token, with `read` and `create` permissions for blobs.

:::info
If your repository is public and you do not wish to publicly share this token, you can also set it as `LB_AZURE_STORAGE_SASTOKEN` environment variable instead.
:::

The `sasTokenReads` is optional and can be set in case your Azure blob storage container is not configured to allow public blob reads. In that case, you can use this token. This token should have the `read` permission for blobs. Similarly to the `sasToken`, it can be set via the `LB_AZURE_STORAGE_SASTOKENREADS` rather than setting it directly in the yaml configuration.

### Updating the native module initialize call

In the previous section on [native Module setup](./native-module), we added a call to the `initalize` method in our Android application, using a dummy Azure Blob Storage url.

```java
LiveBundle.initialize(
      getReactNativeHost(),
      "https://[AZURE_ACCOUNT].blob.core.windows.net/[AZURE_CONTAINER]/");
```

If you haven't done it already, now is the time to update this url to the one pointing to the real Azure Blob Storage container. Just replace `[AZURE-ACCOUNT]` and `[AZURE_CONTAINER]` placeholders with values matching your Azure Blob Storage account.

## Trying it end to end

With that being done, let's now try the setup end to end.

### Uploading an update

Update something in your React Native application *(ideally some kind of visual change so that you can easily see it when installed)* and run the `livebundle upload` command from the root directory of your React Native application.<br/>
When the upload is complete, a QR Code and Deep Link will be generated.

### Loading the update

Launch your React Native application and bring up the React Native developer menu on screen, then tap on `LiveBundle` to launch the LiveBundle menu and finally tap the `Scan` button to bring up the QR Code scanner. Then just scan the QR Code that was generated during the previous step. LiveBundle will retrieve the update and should reload your application with it.

If you want to try out loading the update using the Deep Link, you can send the link to yourself on Slack, and clicking the link from your phone.

### Rolling back the update

To roll back the update, just launch LiveBundle menu and tap the `Reset` button.<br/>
LiveBundle will "roll back" to use the bundle that was loaded prior to installing the update, and will reload the application with it.
