---
id: architecture
title: Architecture
sidebar_label: Architecture
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Overview

<h1 align="center">
  <img alt="LiveBundle Architecture Overview" src={useBaseUrl('img/lbarch.svg')} />
</h1>

This architecture diagram depicts the inner workings of LiveBundle from an high level perspective, and is based on a specific composition of plugins. But no matter which composition of plugins is used, the high level orchestration logic will remain similar.

LiveBundle is composed of two top level packages:
- [`livebundle`][1] *(the command line CLI)*
- [`react-native-livebundle`][2] *(the native module)*.

The `command line CLI` is in charge of assembling LiveBundle packages _(containing one or more JS bundle along with some metadata)_ and uploading them to the storage. It is also responsible for generating package representations in the form of QR Codes and DeepLinks and ultimately surfacing these representations for consumption. The CLI exposes different commands, which can be invoked directly by a developer from a terminal, or by a CI job.<br/>
Most of the CLI logic is coming from [LiveBundle plugins](./plugins.md). The CLI is mostly only orchestrating the plugins in a specific order.

The `native module` is the library used by the mobile application. It contains the LiveBundle UI _(LiveBundle menu)_ to interact with LiveBundle from the mobile application, and also contains some logic to retrieve and install downloaded bundles, by scanning a QR Code or navigating a DeepLink.

[1]: https://github.com/electrode-io/livebundle
[2]: https://github.com/electrode-io/react-native-livebunde
