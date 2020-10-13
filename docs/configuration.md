---
id: configuration
title: Configuration
sidebar_label: Configuration
---

## File Location

LiveBundle will search for a file named `livebundle.yml` (or `livebundle.yaml`) in:

- `.` *(the working directory)*
- `/etc/livebundle/`
- `$HOME/`

You can override this with the `--config` command line option which takes a path to a LiveBundle configuration file.

## File Structure

A LiveBundle configuration file is a [`yaml`](https://yaml.org/) file, containing four main sections:

```yaml
# Bundler plugin declaration & configuration
bundler:

# Generator(s) plugin(s) declaration & configuration
generators:

# Storage plugin declaration & configuration
storage:

# Notifier(s) plugin(s) declaration & configuration
notifiers:
```

Each of these sections represent a specific LiveBundle plugin type and will in turn contain the following:

- One or more plugin name(s) matching the plugin type
- The configuration *(if any)* of each of these plugins

LiveBundle uses the following convention for naming LiveBundle plugins packages :

`livebundle-[PLUGIN_TYPE]-[PLUGIN_NAME]`

For example, LiveBundle storage plugin for Azure is named `livebundle-storage-azure`.

LiveBundle internally relies on this naming convention to dynamically load all LiveBundle plugins declared in the configuration.

For example, the following `generators` configuration will cause LiveBundle to use the `qrcode` generator plugin using its default configuration:

```yaml
generators:
  qrcode:
```

Some plugins, like the `qrcode` one, are configurable, so it is also possible to set some configuration properties:

```yaml
generators:
  qrcode:
    margin: 1
    width: 250
```

Any configuration property value, not explicitely set, will be set to the default value coming with the plugin, unless no such default value exist for the property, in which case its value should be explicitely set in the configuration.

Under the hood, LiveBundle, when encounteering this generator configuration, will dynamically load the `livebundle-generator-qrcode` package and initialize it with the supplied configuration *(partial or complete)*.

If you want to learn more about LiveBunddle plugins and implement a new one, you can check our [Plugins documentation](path_to_plugins_section).

