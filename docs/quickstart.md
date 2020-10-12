---
id: quickstart
title: Quick Start
sidebar_label: Quick Start
---

### Disclaimer

LiveBundle requires some kind of remote storage to store the bundles, and serve them from your mobile application.
It currently ships with [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/) support, via the s[livebundle-storage-azure](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-azure) provider plugin.

LiveBundle core team is not planning to implement other storage providers plugins, but will welcome external contributions of such new plugins.

This means that if you do not have an Azure account, you will need to create one to use LiveBundle out of the box.
On the other hand, if you already have a cloud storage account through a different provider, you can either create an Azure account just for LiveBundle *(probably overkill)*, or contribute a new storage provider plugin.

### Adding LiveBundle dependencies

LiveBundle is composed of two top level packages, [`livebundle`](https://github.com/electrode-io/livebundle) *(the command line CLI)*, and [`react-native-livebundle`](https://github.com/electrode-io/react-native-livebunde) *(the native module)*.

You should add both to your React Native application project.

Using `yarn`

```bash
yarn add livebundle react-native-livebundle
```

Using `npm`

```bash
npm instal livebundle react-native-livebundle --save
```

LiveBundle also have a peer dependency on [`react-native-camera`](https://github.com/react-native-community/react-native-camera).
It relies on this native module for its QR Code scanning functionality. If your React Native application is already using this native module, then you don't have anything to do. Otherwise, please make sure to add it to your application and configure the necessary permissions on Android and iOS *(LiveBundle only need permission to access the camera)*.

If you are using `npm` as your package manager, you will also need to add the following in the `scripts` section of your application `package.json` :

```
"livebundle": "livebundle"
```

### Creating a LiveBundle configuration file

To create an initial LiveBundle configuration file for your application, just run the `init` command from your application project directory

Using `yarn`

```bash
yarn livebundle init
```

Using `npm`

```bash
npm run livebundle init
```

The `init` command will generate a new `livebundle.yml` configuration file in your React Native application directory.
This configuration file will work out of the box, but is configured to use the [livebundle-storage-fs](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-fs) storage plugin to store the bundles. This means that the bundles will be stored local to the machine that is running the `livebundle upload` command. This is great for testing LiveBundle upload, but is very limited as it will not work to download bundles from the phone.

### Trying out the `upload` command

Given that the default configuration file is using the [livebundle-storage-fs](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-fs) storage provider to store the bundles to a local temporary directory, it is possible to try out the `livebundle upload` command out of the box before having an Azure Blob Storage available.

To try out LiveBundle upload, just run the following command:

```bash
yarn livebundle upload
```

Using `npm`

```bash
npm run livebundle upload
```

The default configuration file is setup to generate a single bundle *(android / dev)* and upload it to the storage *(local temporrary directory)* along with generating a QR Code and a Deep Link.
