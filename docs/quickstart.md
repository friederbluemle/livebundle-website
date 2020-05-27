---
id: quickstart
title: Quick Start
sidebar_label: Quick Start
---

### Prerequisites

On top of a properly setup [React Native](https://reactnative.dev/) development environment, the following tools will have to be installed

- [Docker](https://www.docker.com) 
- [Yarn](https://yarnpkg.com/)

### Getting the sample application

To get you started quickly, we've created a [sample application](https://github.com/electrode-io/livebundle-sample) that we will use throughout this guide.  
Go ahead and clone this repository on your machine.

Then just run

```bash
yarn install
```

Finally let's make sure that you are able to build and launch the application

```
npx react-native run-android --no-packager
```

The application should launch and ask for permission to use the Camera *(for scanning QR Codes)*, just tap `Allow`.

### Starting a LiveBundle Store server

Run the following command to start a LiveBundle store server in a Docker container on your machine

```
docker run -it --rm -p 3000:3000 belemaire/livebundle-store
```

The server will listen on `localhost:3000`  
To ensure that it is properly running, just open `http://localhost:3000/status` in your browser, you should see `packager-status:running`

### Pushing your first bundle

We will now make some changes to the application, and push our first LiveBundle !

- Open `App.js` and update the `Change Me` text with whatever you'd like. 
- Run `yarn livebundle upload`

LiveBundle will then create all the different bundle variants to include in the LiveBundle package.  
The configuration included with the sample application will instruct LiveBundle to generate four different bundles (Android dev/prod and iOS dev/prod).

Once bundles generation is complete, the resulting LiveBundle package will be uploaded to the store, and a QR Code will be displayed in the terminal as well as an image.  
Keep the QR Code handy, we will need it for the next step.

### Installing the bundle   

Let's now launch the application and install the bundle we just pushed.

:::tip
If you are running the application on a device and would like to connect on wifi, you can update the `LiveBundleStoreUrl` string in `android/app/src/main/res/values/strings.xml`.  
Just replace `localhost` with your computer IP address
:::

:::tip
 If you are running the application on an emulator, you should set it up so that the camera uses your webcam (external) in order to scan the QR Code. Refer to [this StackOverflow answer](https://stackoverflow.com/a/30792615/13243718) for instructions
:::

- If the application is not already running, just launch it by running `npx react-native run-android --no-packager`
- If you haved launched the application on a connected device, or an emulator, make sure to run  
```
adb reverse tcp:3000 tcp:3000
```
- Bring up the React Native developer menu and tap on `LiveBundle - Scan`
- Scan the QR Code

LiveBundle will retrieve the bundle associated to this QR Code, matching the current platform and environment *(dev or prod)*, and will immediately install it.  
You should now see your updated text.

To uninstall the bundle and go back to the initial state of the application, just tap `LiveBundle - Reset` from React Native developer menu.

:::note
In addition to the QR Code, a deep link url is always generated. You can install a LiveBundle either by scanning its QR Code or opening its deep link.
:::

That's it, you've just seen how easy it is to push and install bundles with LiveBundle !
