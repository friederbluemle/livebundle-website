---
id: plugins
title: Plugins
sidebar_label: Plugins
---

LiveBundle will first generate and package JS bundle(s), using a `Bundler` plugin. It will then generate one or more representations *(QR Code, Deep Link ...)* for the package using one or more `Generator(s)`. Then it will store the bundles somewhere, using a `Storage` plugin and finally notify the user(s) by surfacing the respresentation(s), using one or more `Notifier(s)`.


## Bundlers

### Metro
[livebundle-bundler-metro](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-bundler-metro)

The `metro` bundler plugin is using Metro *(default React Native bundler)* to generate one or more JS bundle(s).

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

## Generators

### QR Code
[livebundle-generator-qrcode](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-generator-qrcode)

***Default configuration***

```yaml
generator:
  image:
    path: .livebundle/qrcode.png
    margin: 1
    width: 250
```

### Deep Link
[livebundle-generator-deeplink](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-generator-deeplink)

## Storage

### Azure
[livebundle-storage-azure](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-azure)

### Local File System
[livebundle-storage-fs](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-fs)

***Default configuration***

```yaml
fs:
  # Path to local directory to use for storage
  # Leave empty to use a temporary directory
  storageDir:
```

## Notifiers

### Terminal
[livebundle-notifier-terminal](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-notifier-terminal)

### GitHub
[livebundle-notifier-github](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-notifier-github)

### Viewer
[livebundle-notifier-viewer](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-notifier-viewer)
