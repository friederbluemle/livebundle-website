---
id: welcome
title: Welcome
sidebar_label: Welcome
slug: /
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Disclaimer

In order to use LiveBundle you will need to provide your own storage for the bundles.
As of its initial release, LiveBundle only supports [Azure Blob Storage][1] support.

We havve no plan of implementing other cloud storage providers plugins *(unless driven by internal needs)*, but will welcome external contributions of such new plugins.

Therefore, at this point, if you wish to use LiveBundle for your application, you will either need to provision and use an Azure Blob Storage account, or implement a new storage provider plugin to use another cloud storage provider.

## Features

### Distribute updates as a QR Code / Deep Link

LiveBundle allows to distribute application updates as a QR Code and/or Deep Link.<br/>
During development, from the comfort of a terminal, any application developer can swiftly publish any work in progress and share the resulting QR Code / Deep Link with any other user of the application.<br/>
Installing the changes is as easy as scanning the QR Code from the application or navigating the Deep Link.

<img alt="LiveBundle CLI" src={useBaseUrl('img/lbupload.png')} width="400"/>

### GitHub Integration

LiveBundle comes with a GitHub integration, to automatically package and publish changes associated to every opened PR. It will then post the resulting QR Code and Deep Link as a PR comment. Supercharge your reviews by trying the changes directly within the application.

<img alt="LiveBundle GitHub PR" src={useBaseUrl('img/githubpr.png')} width="600"/>

### Live Session

Additionally, LiveBundle expose a command to generate a QR Code / Deep Link for other users to directly connect to your local React Native bundler *(metro server)*.

### Plugin Based Architecture

LiveBundle can be easilly extended with new functionallity thanks to its plugin based architecture. Need a different storage provider ? A different bundler or new notifiers ? Just write a new plugin !

## Comparison with other React Native tools

### [Expo][2]

While Expo is much more than just application delivery, it uses QRCode and DeepLink to deliver complete React Native applications or application updates to anyone. It is also possible to setup a GitHub integration with Expo to automatically attach a QRCode and DeepLink to every Pull Request.<br/>
That being said, this Expo feature will only work with React Native applications built with Expo, and is not usable as is for non Expo based React Native applications.

### [CodePush][3]

CodePush allows pushing React Native application updates to users. Under the hood it is quite similar to LiveBundle in the sense that updated JS bundles are pushed to a remote storage and then retrieved from the storage and installed on a mobile device. Though CodePush automatically, silently and transparenlty downloads update if an update is available and does not come with QRCode / DeepLink on demand update support.<br/>
CodePush is geared to rolling updates to your end users in production, while LiveBundle is geared to distributing updates to your team, on demannd, during development. To vulgarize this, we could say that LiveBundle, from the user perspective is a "pull" model, while CodePush is a "push" model.

## Setup overview

LiveBundle is composed of two top level packages:
- [`livebundle`][4] *(the command line CLI)*
- [`react-native-livebundle`][5] *(the native module)*.

Adding LiveBundle to a React Native application is detailed in the [Getting Started section](./cli.md) and consist of the following high level steps :

1. Installing the LiveBundle CLI, and creating its initial configuration _([CLI setup](./cli.md))_
2. Setting up and initializing the native module _([Native Module setup](./native-module.md))_
3. Finally, setting up the storage and testing LiveBundle end to end _([Azure Storage setup](./storage))_

## Quick Start

If you'd first like to try out LiveBundle very quickly before integrating it with your application, you can try the LiveBundle demo application. Just follow instructions from [its README][6].

Otherwise, if you want to jump straight ahead, adding LiveBundle to your application, then without further due, [let's get started !](./cli.md)

[1]: https://azure.microsoft.com/en-us/services/storage/blobs/
[2]: https://expo.io/
[3]: https://microsoft.github.io/code-push/
[4]: https://github.com/electrode-io/livebundle
[5]: https://github.com/electrode-io/react-native-livebunde
[6]: https://github.com/electrode-io/react-native-livebundle/blob/master/example/README.md
