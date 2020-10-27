---
id: welcome
title: Welcome
sidebar_label: Welcome
slug: /
---

## Disclaimer

We do not host your JavaScript bundles. In order to use LiveBundle you will need to provide your own storage for the bundles.

As of its initial release, LiveBundle ships with [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/) support.

Our core team has no plan to implement other cloud storage providers plugins *(unless driven by internal needs)*, but will welcome external contributions of such new plugins !

Therefore, at this point, if you wish to use LiveBundle for your application, you will either need to use to provision and use an Azure Blob Storage account, or implement a new storage provider plugin to use another cloud storage provider or some other storage setup.

## Features

### Distribute updates as a QR Code / Deep Link

LiveBundle allows to distribute application updates as a QR Code and/or Deep Link.<br/>
From the comfort of a terminal, any application developer can quickly publish any work in progress and share the resulting QR Code / Deep Link with anyone. Installing the changes is as easy as scanning the QR Code from the application or navigating the Deep Link.

### GitHub Integration

LiveBundle comes with a GitHub integration, to automatically package and publish changes associated to every opened PR. It will then post the resulting QR Code and Deep Link as a PR comment. Supercharge your reviews by trying the changes directly within the application !

### Live Session

Additionally, LiveBundle expose a command to generate a QR Code / Deep Link for other users to directly connect to your local React Native bundler *(metro server)*.

### Plugin Based Architecture

LiveBundle can be easilly extended with new functionallity thanks to its plugin based architecture. Need a different storage provider ? A different bundler or new notifiers ? Just write a new plugin !

## Comparison with related React Native tools

### [Expo](https://expo.io/)

Expo also uses QRCode and DeepLink to deliver complete React Native applications or application updates to anyone. It is possible to setup a GitHub integration with Expo to automatically attach a QRCode and DeepLink to every Pull Request.<br/>
That being said, this Expo feature will only work with React Native applications built with Expo, and is not usable as is for non Expo based React Native applications.

### [CodePush](https://microsoft.github.io/code-push/)

CodePush allows pushing React Native application updates to users. Under the hood it is quite similar to LiveBundle in the sense that updated JS bundles are pushed to a remote storage and then retrieved from the storage and installed on a mobile device. Though CodePush automatically, silently and transparenlty downloads update if an update is available and does not come with QRCode / DeepLink on demand update support. CodePush is geared to rolling updates to your end users in production, while LiveBundle is geared to distributing updates to your team, on demannd, during development. To vulgarize this, we could say that LiveBundle, from the user perspective is a "pull" model, while CodePush is a "push" model.

## Setup overview

LiveBundle is composed of two top level packages:
- [`livebundle`](https://github.com/electrode-io/livebundle) *(the command line CLI)*
- [`react-native-livebundle`](https://github.com/electrode-io/react-native-livebunde) *(the native module)*.

Adding LiveBundle to a React Native application is detailed in the [Getting Started section](./cli.md) and consist of the following high level steps :

1. Installing the LiveBundle CLI, and creating its initial configuration _([CLI setup](./cli.md))_
2. Setting up and initializing the native module _([Native Module setup](./native-module.md))_
3. Finally, setting up the storage and testing LiveBundle end to end _([Azure Storage setup](./azure-storage))_

[Let's get started !](./cli.md)
