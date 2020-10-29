---
id: cli
title: CLI Setup
sidebar_label: CLI
---

### Installing LiveBundle CLI

We recommend keeping the CLI local to your React Native application project, and not installing it globally.

To add a dependency on the CLI your can run the following command from your application directory:

```bash npm2yarn
npm install --save livebundle
```

If you are using `npm` as your package manager, you will also need to add the following in the `scripts` section of your application `package.json` :

```
"livebundle": "livebundle"
```

### Creating a LiveBundle configuration file

To create an initial LiveBundle configuration file for your application, just run the `init` command from your application project directory

```bash npm2yarn
npm run livebundle init
```

The `init` command will generate a new `livebundle.yml` configuration file in your React Native application directory.
This configuration file will work out of the box, but is configured to use the [livebundle-storage-fs][1] storage plugin to store the bundles. This means that the bundles will be stored in a local directory (`[HOME]/.livebundle/storage`).<br/>

### Trying the CLI

To try out LiveBundle upload, just run the following command:

```bash npm2yarn
npm run livebundle upload
```

The default configuration file will inform LiveBundle to generate two dev bundle *(android/ios)* and store them in `[HOME]/.livebundle/storage`, along with generating QR Code and Deep Link representations. It will then surface these representations in the terminal and in an image viewer _(for the QR Code)_.

Now that we're done with the CLI, it is time to add and initialize the native module.

[1]: https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-fs
