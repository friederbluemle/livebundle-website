---
id: native-module
title: Native Module Setup
sidebar_label: Native Module Setup
---

## Installation

To add a dependency on `react-native-livebundle` your can run the following command from your application directory:

Using `yarn`

```bash
yarn add react-native-livebundle
```

Using `npm`

```bash
npm instal react-native-livebundle --save
```

:::warning
LiveBundle also have a peer dependency on [react-native-camera](https://github.com/react-native-community/react-native-camera).
It relies on this native module for its QR Code scanning functionality. If your React Native application is already using this native module, then you don't have anything to do. Otherwise, please make sure to add it to your application and configure the necessary permissions on Android and iOS *(LiveBundle only need permission to access the camera)*.
:::

## Initialization

LiveBundle native module should be initialized from both the native side, and the JS side.

### Android

To initialize LiveBundle on Android, you should update the `MainApplication.java` file of your React Native application.

First, add the following import statement

```java
import io.livebundle.LiveBundleModule;
```

Then, in the `onCreate` method, you should make a call to the `initialize` method of `LiveBundleModule` as follow

```java
LiveBundleModule.initialize(
      getReactNativeHost(),
      "https://[AZURE-ACCOUNT].blob.core.windows.net/[AZURE_CONTAINER]/");
```

Your should replace `[AZURE-ACCOUNT]` and `[AZURE_CONTAINER]` with values specific to your Azure account.

The `initialize` method also accepts a third optional parameter, being an Azure SAS token to use to download the bundles *(In case your Azure Blob Storage container do not allow public blob reads, you can use such a token for blob reads)*

:::note
This initialization setup assumes an "out of the box" React Native application structure. If your application is for some reason diverging from this default structure *(for example if your application intialization code is not located in MainApplication.java)* you should invoke `initialize` where you see fit.
:::

### JavaScript

On the JavaScript side, you should import LiveBundle native module and simply make a call to initialize as follow.

```javascript
import livebundle from 'react-native-livebundle'
livebundle.initialize()
```

This call should be made as soon as possible, preferably in the application entry file *(typically `index.js`)*
