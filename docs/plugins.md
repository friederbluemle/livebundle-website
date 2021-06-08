---
id: plugins
title: Plugins
sidebar_label: Plugins
---

LiveBundle is highly modular, and thus can be easily extended.

The source of this modularity comes from LiveBundle plugins system.

LiveBundle will first generate and package JS bundle(s), using a `Bundler` plugin. It will then generate one or more representations *(QR Code, Deep Link ...)* for the package using one or more `Generator(s)` plugins. Then it will store the resulting LiveBundle packages, relying on a `Storage` plugin and will finally notify the user(s) by surfacing the packages representation(s), using one or more `Notifier(s)` plugins.
Additionaly, for the `live` command, LiveBundle will rely on a `Server` plugin, used to launch a packager server.

LiveBundle CLI ships with a predefined set of plugins. If you'd like to contribute a new plugin, please refer to our [plugin authoring documentation](./plugin-authoring.md).

This section contains a list of all the plugins that are currently shipped with LiveBundle along with a brief description.

## Bundlers

Bunders plugins are in charge of generating one or more JavaScript bundles.

### Metro
[livebundle-bundler-metro][1]

The `metro` bundler plugin is using the default React Native bundler *(Metro)* to generate the bundle(s).

***Default configuration***

```yaml
metro:
  bundles:
    - dev: true
      entry: index.js
      platform: android
    - dev: true
      entry: index.js
      platform: ios
```

LiveBundle will upload all generated bundles to the storage.

## Generators

Generators plugins are in charge of generating *(and also storing if necessary)* a "representations" of LiveBundle packages *(containing one or more bundles)* that can be used by the mobile application to retrieve associated packages. LiveBundle comes with two generators out of the box.

### QR Code
[livebundle-generator-qrcode][2]

***Default configuration***

```yaml
generator:
  image:
    path: .livebundle/qrcode.png
    margin: 1
    width: 250
```

The `qrcode` generator is in charge of generating a QR Code *(image file and ascii representation)* of a LiveBundle package. It will store the generated QR Code both locally and remotely *(in the configured remote storage)*.

Scanning a generated QR Code with LiveBundle from the mobile application, will load and install the corresponding LiveBundle package.

### Deep Link
[livebundle-generator-deeplink][3]

***Default configuration***

```yaml
generator:
  deeplink:
    host: io.livebundle
```

The `deeplink` generator is in charge of generating a Deep Link url *(textual representation)* of a LiveBundle package.

Navigating to a generated Deep Link, will load and install the corresponding LiveBundle package in the mobile application.

By default, the host part of the deep link url is set to `io.livebundle`. You should instead set it to your application reverse domain name, so that in case multiple applications using LiveBundle are installed on a device, the deep link url will be opened in your application.

## Storage

Storage plugins are in charge of storing the LiveBundle package along with any other files *(QRCode image, package metadata ...)* to a local or remote store. LiveBundle ships with two such plugins.

### Azure
[livebundle-storage-azure][4]

***No default configuration***

The Azure storage plugin can be used to store LiveBundle packages in an [Azure Blob Storage][5] container. It does not come with a default configuration. The following configuration illustrates all available configuration properties.

```yaml
storage:
  azure:
    # Azure blob storage account url
    # For example https://foo.blob.core.windows.net
    # Can alternatively be set via LB_STORAGE_AZURE_ACCOUNTURL env var
    accountUrl: <azure-store-account-url>

    # Azure blob storage container name
    # Can alternatively be set via LB_STORAGE_AZURE_CONTAINER env var
    container: <azure-container-name>

    # Azure SAS token to use for uploading files to the store
    # Can alternatively be set via LB_STORAGE_AZURE_SASTOKEN env var
    sasToken: <azure-shared-access-signature-token>

    # Azure SAS token to use for reading files from the store
    # This token is optional and not needed if your container allows
    # public reads for blobs
    sasTokenReads: <azure-shared-access-signature-token>
```

### Local File System
[livebundle-storage-fs][6]

The `fs` storage plugin can be used to store LiveBundle packages in a local directory.
It has no real use apart from testing/development purposes.

***Default configuration***

```yaml
storage:
  fs:
    # Path to local directory to use for storage
    # Leave empty to use a temporary directory
    storageDir:
```

## Notifiers

Notifiers are in charge of surfacing the different representations *(QR Code, Deep Link ...)* to the users, so that they can be used to load a LiveBundle package in the application.

### Terminal
[livebundle-notifier-terminal][7]

The `terminal` notifier plugin will display the different representations in a terminal. It supports notification of QR Code representation *(will show the ascii generated QR Code)* as well as Deep Link *(will show the deep link itself)*.



### Viewer
[livebundle-notifier-viewer][8]

The `viewer` notifier will only notify QR Code representations. It will open the QR Code image in the default application used for images viewing.



### GitHub
[livebundle-notifier-github][9]

The `github` notifier supports both QR Code and Deep Link representations.
It can be used to automatically post a comment with the LiveBundle QR Code and Deep Link in every opened pull request.

***Default configuration***

```yaml
notifier:
  github:
    baseUrl: https://api.github.com
```

The `github` notifier also requires the `token` configuration property to be set with the GitHub API token to use to issue requests to the GitHub API *(under the hood this plugin uses the GitHub API to post comments on PRs)*. This configuration property can alternatively be set using the `LB_NOTIFIER_GITHUB_TOKEN` environment variable.

In case you are using GitHub actions for your CI, then nothing else is needed to use this plugin. Just run the `livebundle upload` during your CI workflow on every PR trigger, LiveBundle will take care of the rest.

In case you are not using GitHub actions but are instead using a different CI environment, you will need to set the `LB_NOTIFIER_GITHUB_PRURL` environment variable. This variable should contain the full link to the pull request *(for example: https://github.com/foo/bar/pull/6)*. This link is commonly available as an environment variable by any CI tool, for PR triggered flow.

If you are using GitHub enterprise, you should also make sure to update the default `baseUrl` configuration property value, to use your GitHub enterpise base url instead.

## Servers

Servers plugins are in charge of launching the React Native packager server used by the `live` command.

### Metro
[livebundle-server-metro][10]

The `metro` server plugin will launch a metro server _(React Native default)_.




[1]: https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-bundler-metro
[2]: https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-generator-qrcode
[3]: https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-generator-deeplink
[4]: https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-azure
[5]: https://azure.microsoft.com/en-us/services/storage/blobs/
[6]: https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-fs
[7]: https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-notifier-terminal
[8]: https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-notifier-viewer
[9]: https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-notifier-github
[10]: https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-server-metro
