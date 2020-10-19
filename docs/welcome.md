---
id: welcome
title: Welcome
sidebar_label: Welcome
slug: /
---

## Disclaimer

In order to use LiveBundle you will need to provide your own storage for the bundles.

As of its initial release, LiveBundle ships with support for [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/).

LiveBundle core team has no plan to implement other storage providers plugins *(unless driven by internal needs)*, but will welcome external contributions of such new plugins.

Thus in order to use LiveBundle, if you do not have an Azure account yet, you will need to create one.

If you are already using *(or are more familiar with)* a different cloud storage provider, we recommend contributing a new plugin for this specific provider. Even though authoring a new plugin is an advanced topic, documented in our [plugin authoring](./plugin-authoring.md) documentation, it shouldn't be too difficult to implement a new one *(for example the [Azure Blob Storage plugin implementation](https://github.com/electrode-io/livebundle/blob/master/packages/livebundle-storage-azure/src/AzureStorageImpl.ts) fits under a hundred LOC)*.

## Features

## Comparison with related tools

### Expo

TODO

### Code Push

TODO

## Setup overview

LiveBundle is composed of two top level packages:
- [`livebundle`](https://github.com/electrode-io/livebundle) *(the command line CLI)*
- [`react-native-livebundle`](https://github.com/electrode-io/react-native-livebunde) *(the native module)*.

Adding LiveBundle to a React Native application will be detailed through the next sections and consist of the following high level steps :

1. First we will walk through the installation of the LiveBundle CLI, and creating the initial configuration ([CLI setup](./cli.md))
2. Then we will tackle the setup and initialization the native module ([Native Module setup](./native-module.md))
3. Finally we will setup Azure Storage and test our setup end to end ([Azure Storage setup](./azure-storage))

Let's get started !
