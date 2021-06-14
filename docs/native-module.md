---
id: native-module
title: Native Module Setup
sidebar_label: Native Module
---

## Installing LiveBundle native module

```bash npm2yarn
npm install --save react-native-livebundle
```

:::caution
LiveBundle also have a peer dependency on [react-native-camera][1].
It relies on this native module for its QR Code scanning functionality. If your React Native application is already using this native module, then you don't have anything to do. Otherwise, please make sure to add it to your application and configure the necessary permissions on Android and iOS *(LiveBundle only need permission to access the camera)*.
:::

## Configuring DeepLink support

### Android

You should add the following intent filter in your application `AndroidManifest.xml` file, inside the activity that should be launched when a LiveBundle Deep Link url is navigated to _(typicially your main activity)_.<br/>
You should replace the `android:host` value with your application reverse domain _(you can find it on top of `AndroidManifest.xml` file as the `package` attribute of `manifest` tag)_

```XML
<intent-filter>
    <action android:name="android.intent.action.VIEW"/>
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="livebundle" android:host="io.livebundle.example" />
</intent-filter>
```

## Initializing LiveBundle native module

LiveBundle native module should be initialized from both the native side, and the JS side.

### Android

To initialize LiveBundle on Android, you should update the `MainApplication.java` file of your React Native application.

First, add the following import statement

```java
import io.livebundle.LiveBundle;
```

Then, in the `onCreate` method, you should make a call to the `initialize` method of `LiveBundle` as follow:

**HTTP Server Storage**

To quickly locally try out LiveBundle end to end with your application, we recommend using a local HTTP server storage at first _(we will cover spinning up an HTTP server with one command in the next section)_. The bundles will be served from your `localhost` so you can initialize LiveBundle as follow

```java
LiveBundle.initialize(
  getReactNativeHost(),
  "http://127.0.0.1:8080");
```

**Azure Blob Storage**

Here is how to initialize LiveBundle with an Azure Blob Storage account if you have such an account.

```java
LiveBundle.initialize(
  getReactNativeHost(),
  "https://[AZURE_ACCOUNT].blob.core.windows.net/[AZURE_CONTAINER]");
```

Your should replace `[AZURE_ACCOUNT]` and `[AZURE_CONTAINER]` with values specific to your Azure account.

:::info
The `initialize` method also accepts a third optional parameter, respectively an Azure SAS token to use to download the bundles *(In case your Azure Blob Storage container does not allow public blob reads, you can use such a token for blob reads)*
:::

:::note
This initialization setup assumes an "out of the box" React Native application structure. If your application is more complex and diverges from this default structure *(for example if your application intialization code is not located in MainApplication.java)* you should invoke `initialize` where you see fit *(Ideally just after initializing React Native)*
:::

### JavaScript

On the JavaScript side, you should import LiveBundle native module and simply make a call to the `initialize` method as follow.

```javascript
import livebundle from 'react-native-livebundle'
livebundle.initialize()
```

This call should be made as early as possible, preferably in the application entry point *(typically `index.js`)*

## Trying the Native Module

To try out LiveBundle in your React Native application, just launch your application and bring up the React Native developer menu. If LiveBundle was succesfully installed and initialized, you should see a new `LiveBundle` menu item at the bottom of the React Native developer menu.
Tapping on it should bring the LiveBundle menu on screen with its `Scan` button.

You can also try to launch LiveBundle menu by navigating a Deep Link, which can be of use in case your application build does not give access to the React Native developer menu.

One way to achieve this on Android is to run an `adb` command _(with an emulator or a connected device)_.

```bash
adb shell am start -W -a android.intent.action.VIEW -d "livebundle://menu" [APP_PACKAGE_NAME]
```

Where `[APP_PACKAGE_NAME]` is your application package name _(which can be found in your AndroidManifest.xml)_

If you have Slack installed on the device running your application, you can also send yourself a message with the `livebundle://menu` Deep Link and tap on it. Not all applications properly convert custom schemes links to browsable links _(clickable)_ but Slack does _(and surely a few other messaging apps as well)_

[1]: https://github.com/react-native-community/react-native-camera
