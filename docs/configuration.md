---
id: configuration
title: Configuration
sidebar_label: Configuration
---

The [default configuration file](link_to_repo_default_config_file) generated with `livebundle init` command, comes with a set of predefined plugins shipped with LiveBundle, along with their default configuration *(even though not explicitely needed)*.

## File Location

LiveBundle will search for a file named `livebundle.yml` (or `livebundle.yaml`) in:

- `.` *(the working directory)*
- `/etc/livebundle/`
- `$HOME/`

You can instead choose to load a specific config file using the `--config` command line option.

## File Structure

A LiveBundle configuration file is a [`yaml`](https://yaml.org/) file, composed of four main sections:

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

## Configuration properties

Some plugins, like the `qrcode` one, are configurable, so it is also possible to set some configuration properties values:

```yaml
generators:
  qrcode:
    margin: 1
    width: 250
```

Any configuration property value, not explicitely set, will be set to the default value coming with the plugin, unless no such default value exist for the property, in which case its value should be explicitely set in the configuration.

Under the hood, LiveBundle, when encounteering this generator configuration, will dynamically load the `livebundle-generator-qrcode` package and initialize it with the supplied configuration *(partial or complete)*.

If you want to learn more about LiveBunddle plugins and implement a new one, you can check our [Plugins documentation](path_to_plugins_section).

### Properties as environment variables

Some plugins offer to set some of their configuration properties as environment variables rather than setting them directly in the yaml configuration file.

This can be helpful for example for property values that should not be clearly exposed in the configuration, or should be dynamic.

These environment variables are using the following naming convention

`LB-[PLUGIN_TYPE]-[PLUGIN_NAME]-[PROPERTY_NAME]`

For example, the [azure storage plugin](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-azure) allow to set the `sasToken` configuration property through `LB_STORAGE_AZURE_SASTOKEN` environement variable.

:::warning
A configuration property value can either be set directly in the yaml configuration file, or through an environment variable, but not both.
If that's the case, LiveBundle will fail and report the ambiguity.


