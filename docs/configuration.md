---
id: configuration
title: Configuration
sidebar_label: Configuration
---

The [default configuration file](link_to_repo_default_config_file) generated with `livebundle init` command, comes with a set of predefined plugins shipped with LiveBundle, along with their default configuration *(even though not explicitely needed)*.

## File Location

LiveBundle will search for a file named `livebundle.yml` (or `livebundle.yaml`) in:

- `.` *(the working directory, or the directory supplied via `--cwd` option)_
- `/etc/livebundle/`
- `$HOME/`

You can instead choose to load a specific config file using the `--config` command line option.<br />
This option can be of help in case you have different LiveBundle configuration files, for different environments. For example, you could have one default configuration file `livebundle.yml` used to perform uploads from any developer workstation, and a different configuration file `livebundle.ci.yml` for example, to be used when running LiveBundle uploads from a CI environment *(when running LiveBundle for every opened PR)*.

## File Structure

A LiveBundle configuration file is a [`yaml`][1] file, composed of four main sections:

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

Each of these sections represent a specific LiveBundle plugin category *(refer to the [plugins](./plugins.md) documentation for more information about plugins)* and will also in turn contain the following:

- One or more plugin name(s) matching the plugin category
- The configuration *(if any)* of each of these plugins

LiveBundle uses the following convention for naming LiveBundle plugins packages :

`livebundle-[PLUGIN_CATEGORY]-[PLUGIN_NAME]`

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

Under the hood, LiveBundle, when handling this generator configuration, will dynamically load the `livebundle-generator-qrcode` package and initialize it with the supplied configuration *(partial or complete)*.

### Properties as environment variables

Some plugins offer to set some of their configuration properties as environment variables rather than setting them directly in the yaml configuration file.

This can be helpful for example for property values that should not be clearly exposed in the configuration, or should be dynamic.

These environment variables are using the following naming convention

`LB-[PLUGIN_CATEGORY]-[PLUGIN_NAME]-[PROPERTY_NAME]`

For example, the [azure storage plugin][2] allow to set the `sasToken` configuration property through `LB_STORAGE_AZURE_SASTOKEN` environement variable.

:::warning
A configuration property value can either be set directly in the yaml configuration file, or through an environment variable, but not both.
If this happens, LiveBundle upload command will fail and report the ambiguity.
:::

[1]: https://yaml.org/
[2]: https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-azure
