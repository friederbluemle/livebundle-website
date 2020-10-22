---
id: cli
title: CLI setup
sidebar_label: CLI setup
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
This configuration file will work out of the box, but is configured to use the [livebundle-storage-fs](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-fs) storage plugin to store the bundles. This means that the bundles will be stored local to the machine that is running the `livebundle upload` command. This is great for testing LiveBundle upload, but is very limited as it will not work to download bundles from the phone.

### Trying the CLI

Because the default configuration file is set to use the [livebundle-storage-fs](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-fs) storage provider to store the bundles in a local temporary directory, it is possible to try out the `livebundle upload` command out of the box before having an Azure Blob Storage available.

To try out LiveBundle upload, just run the following command:

```bash npm2yarn
npm run livebundle upload
```

The default configuration file will inform LiveBundle to generate a single bundle *(android / dev)* and upload it to ephemeral storage *(local temporrary directory)* along with generating a QR Code and a Deep Link.
