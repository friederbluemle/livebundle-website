---
id: faq
title: FAQ
sidebar_label: FAQ
---

### Does LiveBundle supports pushing native code changes

LiveBundle only supports pushing JavaScript changes. You should go through a complete application build to distribute any kind of native changes.

### How does LiveBundle deals with assets

Assets are stored in the storage along with the JavaScript bundle and will be served remotely. This is a bit different to CodePush for example which will store the assets on the device. We don't support this mode yet as it makes things much more complex. If there is a strong ask for a way to store assets on the device we will have a take at it.

### Does LiveBundle reuse the bundle on application restart

No. If the application is restarted after installing a bundle via LiveBundle, the bundle will be cleared as if you a reset was done from the LiveBundle menu. We feel this is a good default behavior. That being said we are planning to introduce a "sticky bundle" functionality to be explicitely enabled if the bundle needs to be kept upon application restart.

### Can I use LiveBundle with Electrode Native

It is indeed possible to use LiveBundle with [Electrode Native][1]. Because with Electrode Native, multiple MiniApps _(React Native applications)_ are composed together in a composite project, you will probably want to run LiveBundle on this composite _(unless you are able to run the MiniApps standlone in the target mobile application, in which case you could just run LiveBundle on each MiniApp)_.<br/>
To achieve this, either from terminal or CI, you should first generate a composite using the [create-composite][2] command, adding the current MiniApp to the composite along with all other MiniApps that should be part of the final composite. Then you can run `livebundle upload` command from the composite directory, using the `--cwd` option to point LiveBundle to the composite directory and the `--config` option to point LiveBundle to the configuration file to use _(most probably just kept within the MiniApp project)_.


[1]: https://github.com/electrode-io/electrode-native
[2]: https://native.electrode.io/cli-commands/create-composite
