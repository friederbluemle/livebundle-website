---
id: storage
title: Storage Setup
sidebar_label: Storage
---

Now that we have completed the [CLI setup](./cli) and the [Native Module setup](./native-module) we can try LiveBundle end to end. We will try LiveBundle locally by spinning up an HTTP server to serve the bundles from the default storage local directory. This is mostly for demo purposes, and you should switch to Azure Blob Storage _(or other storage provider using a new plugin)_ for real team use.

## Starting an HTTP server

:::note
If you've already configured the native module to use an Azure Blob Storage account, you should  skip this section and instead directly go through `Switching to Azure storage` at the bottom of this page.
:::

We will use [http-server](https://github.com/http-party/http-server), a simple Node HTTP server that can be started very easily.

From a terminal, we will `cd` into the directory where LiveBundle store the bundles. If you haven't altered the default location _(in livebundle.yml config)_ it will be in `[HOME]/.livebundle/storage` _(where `[HOME]` is the home directory of your workstation)_. We will then just start the HTTP server from this directory.

```
$ cd [HOME]/.livebundle/storage
$ npx http-server
```

The server will by default listen on `127.0.0.1:8080` _(localhost)_ as well your network IP. If you want to try LiveBundle with a real device not connected to your workstation, you can instead use the network IP. The only thing to update is the call to `LiveBundle.initialize` in your application, where you should replace `127.0.0.1` with your workstation network IP.

:::warning
If you want to use `127.0.0.1` with a connected device or emulator, make sure to run `adb reverse tcp:8080 tcp:8080` so that requests from the device are redirected to your workstation.
:::

:::warning
If you are using your workstation network IP, make sure that your mobile device is connected to the same network.
:::

## Trying it end to end

With that being done, let's now try the setup end to end !

### Upload an application update

Update something in your React Native application *(ideally some kind of visual change so that you can easily see it when installed)* and run the `livebundle upload` command from the root directory of your React Native application.<br/>
When the upload is complete, a QR Code and Deep Link will be generated.

### Install the update

Launch your React Native application and bring up the React Native developer menu on screen, then tap on `LiveBundle` to launch the LiveBundle menu and finally tap the `Scan` button to bring up the QR Code scanner. Then just scan the QR Code that was generated during the previous step. LiveBundle will retrieve the update and should reload your application with it.

If you want to try out installing the update using the Deep Link, you can send the link to yourself on Slack, and clicking the link from your phone _(or use `adb` as covered in the [native module setup](./native-module.md) page)_.

### Roll it back

To roll back the update, just launch LiveBundle menu and tap the `Reset` button.<br/>
LiveBundle will "roll back" to use the bundle that was loaded prior to installing the update, and will reload the application with it.

## Switching to Azure storage

Using LiveBundle `fs-storage` alongside with an HTTP sever works well for demo and testing purposes, but will not work for real use, where multiple developers and potentially CI with GitHub integration will need to upload bundles to the storage. Indeed the `fs-storage` is only local to a specific workstation and cannot be shared for uploads.

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
