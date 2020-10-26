---
id: faq
title: FAQ
sidebar_label: FAQ
---

### Can I use LiveBundle with Electrode Native

It is indeed possible to use LiveBundle with [Electrode Native](https://github.com/electrode-io/electrode-native). Because with Electrode Native, multiple MiniApps _(React Native applications)_ are composed together in a composite project, you will probably want to run LiveBundle on this composite _(unless you are able to run the MiniApps standlone in the target mobile application, in which case you could just run LiveBundle on each MiniApp)_.<br/>
To achieve this, either from terminal or CI, you should first generate a composite using the [create-composite](https://native.electrode.io/cli-commands/create-composite) command, adding the current MiniApp to the composite along with all other MiniApps that should be part of the final composite. Then you can run `livebundle upload` command from the composite directory, using the `--cwd` option to point LiveBundle to the composite directory and the `--config` option to point LiveBundle to the configuration file to use _(most probably just kept within the MiniApp project)_.

### Does LiveBundle supports pushing native code changes

LiveBundle only supports pushing JavaScript changes. You should go through a complete application build to distribute any kind of native changes.
