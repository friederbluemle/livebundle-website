---
id: introduction
title: Introduction
sidebar_label: Introduction
---

### Disclaimer

LiveBundle needs a remote storage for storing the bundles.

As of its initial release, LiveBundle only comes with support for [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/) *(via [livebundle-storage-azure](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-azure) plugin)*.

LiveBundle core team has no plan to implement other storage providers plugins *(unless driven by internal needs)*, but welcomes external contributions of such new plugins.

This means that to use LiveBundle, if you do not have an Azure account yet, you will need to create one, along with setting up an Azure Blob Storage container.

If you already have a cloud storage account through a different provider, you can either create an Azure account just for LiveBundle, or contribute a new storage provider plugin to add support for this provider to LiveBundle.

### Setup overview

LiveBundle is composed of two top level packages:
- [`livebundle`](https://github.com/electrode-io/livebundle) *(the command line CLI)*
- [`react-native-livebundle`](https://github.com/electrode-io/react-native-livebunde) *(the native module)*.

Adding LiveBundle to a React Native application will be detailed through the next sections and consist of the following high level steps :

1. First we will walk through the installation of the LiveBundle CLI, and creating the initial configuration ([CLI setup](./cli.md))
2. Then we will tackle the setup and initialization the native module ([Native Module setup](./native-module.md))
3. Finally we will setup Azure Storage and test our setup end to end ([Azure Storage setup](./azure-storage))

Let's get started !
