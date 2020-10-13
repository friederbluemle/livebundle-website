---
id: native-module
title: Native Module Setup
sidebar_label: Native Module Setup
---

## Installing LiveBundle native module

Add a dependency on `react-native-livebundle`

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

## Initializing LiveBundle

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

Your should replace `[AZURE-ACCOUNT]` and `[AZURE_CONTAINER]` with values specific to your Azure account. If you don't have an Azure account yet available, just use a fake url. LiveBundle will not make any requests to the storage unless you are scanning a QR Code or navigating a Deep Link. At least this way you'll be able to validate that you can launch LiveBundle from your application.

:::info
The `initialize` method also accepts a third optional parameter, being an Azure SAS token to use to download the bundles *(In case your Azure Blob Storage container do not allow public blob reads, you can use such a token for blob reads)*
:::

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

## Trying it

To try out LiveBundle in your React Native application, just launch your application and bring up the React Native developer menu. If LiveBundle was succesfully installed and initialized, you should see a new `LiveBundle` menu item at the bottom of the React Native developer menu.

Tapping `LiveBundle` should bring up the LiveBundle menu on screen with its `Scan` button.

You can also try to launch LiveBundle menu by navigating a Deep Link, which can be of use in case your application build does not give access to the React Native developer menu.

`livebundle://menu`

TODO : `adb` command, and mention Slack

