---
id: plugin-authoring
title: Plugin Authoring
sidebar_label: Plugin Authoring
---

## Where to host plugin implementation

While LiveBundle plugins are independent node packages, loaded dynamically, thus do not strictly have to be present within LiveBundle monorepo, we do recommend to contribute such new plugins directly to LiveBundle monorepo, unless the plugin being implemented cannot be made publicly available. The advantages of keeping new plugins withing LiveBundle monorepo is that we can ship all the plugins with the CLI distribution, guaranteeing plugins compatibility with each new CLI version and in case of changes in the SDK, we can easily update all plugins present in the monorepo immediately.

## Overview

Implementation should be done in TypeScript if the plugin is to be hosted in LiveBundle CLI monorepo. This is not a requirement, and JavaScript can be used for non monorepo hosted plugins.

As detailed in the [plugins overview](./plugins.md) documentation, LiveBundle plugins fall under four categories, respectively `Bundlers`, `Generators`, `Storage` and `Notifiers`.

When it comes to implementing a plugin, the only difference between these categories, is that each plugin category comes with its own interface to implement.

Overall, implementing a new plugin comes down to:

- Create a new node package for this plugin
- Implement the constructor of the plugin
- Implement the interface of the specific plugin category
- Finally, if the plugin can be configured, expose the configuration schema and optionally environment variables mapping

We will go through each of these high level steps in this documentation.

Also to be noted that we are not expecting to see many new `Generators` plugins. These plugins also would require an update to the native module to be able to handle the new representation(s) produced by such Generators.

## Create a new node package for the plugin

The easiest -for now- here would just be to copy/paste an existing plugin package, and replace its implementation.

- To create a new `Storage` provider plugin, you can start from the [`livebundle-storage-fs`](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-fs) plugin.
- To create a new `Bundler` plugin, you can start from the [`livebundle-bundler-metro`](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-bundler-metro) plugin.
- To create a new `Notifier` plugin, you can start from the [`livebundle-notifier-terminal`](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-notifier-terminal) plugin.

## Implement the plugin constructor

Apart from `Generator` plugins, which have an extra parameter, all plugins constructors will be invoked by LiveBundle with a single parameter, being the plugin configuration *(if any)*.

Not much should be done in the plugin constructor, apart from storing a reference to the supplied configuration.

## Implement the plugin interfaces

Here are the interfaces of every plugin categories.

```typescript
interface Bundler {
  bundle(): Promise<LocalBundle[]>;
}
```

```typescript
interface Generator {
  generate({
    id,
    type,
  }: {
    id: string;
    type: LiveBundleContentType;
  }): Promise<Record<string, unknown>>;
}
```

```typescript
export interface Notifier {
  notify({
    generators,
    pkg,
    type,
  }: {
    generators: Record<string, Record<string, unknown>>;
    pkg?: Package;
    type: LiveBundleContentType;
  }): Promise<void>;
}
```

```typescript
interface Storage {
  store(
    content: string,
    contentLength: number,
    targetPath: string,
  ): Promise<string>;
  storeFile(
    filePath: string,
    targetPath: string,
    options?: {
      contentType?: string;
    },
  ): Promise<string>;
  hasFile(filePath: string): Promise<boolean>;
  downloadFile(filePath: string): Promise<Buffer>;
  readonly baseUrl: string;
}
```

## Configurable Plugins

### Implementation

To implement a plugin that can be configured through configuration properties, you should first define a JSON Schema to represent the configuration properties, along with their types and constraints.

You should then expose this schema via the `schema` class property of your plugin implementation.

For example, assuming your parsed configuration schema *(JavaScript object)* is stored in `configSchema` variable, you can expose it this way.

```typescript
public static readonly schema: Record<string, unknown> = configSchema;
```

Also, in case you would like to some configuration properties to be potentially set as environment variables rather than directly set in the yaml configuration file, you should declare an `envVarToConfigKey` class property, containing a map of environement variable name to configuration property name. For example

```typescript
public static readonly envVarToConfigKey: Record<string, string> = {
  LB_STORAGE_AZURE_ACCOUNTURL: "accountUrl",
  LB_STORAGE_AZURE_CONTAINER: "container",
};
```

The convention used by LiveBundle for naming such environment variables is the following

`LB_[PLUGIN_TYPE]_[PLUGIN_NAME]_[PROPERTY_NAME]`

### Configuration processing and validation

Internally, LiveBundle will preprocess and validate each plugin configuration as follow:

1. Parse the plugin configuration as declared in the YAML configuration file
2. "Reconcilate" the configuration with environment variables. For any configuration properties that can be set as environment variables, LiveBundle will look if any of these environment variables are set and will apply the following reconciliation logic :
    - If the configuration property is defined in the yaml config but not as an env var, then use the configuration property from the yaml config.
    - If the configuration property is defined as an env var, but not in the yaml config, then use the configuration property from the env var.
    - If the configuration property is defined both as the env var and in yaml config, fail configuration loading and report ambiguity.
3. Merge the configuration with the default configuration of the plugin. This means that LiveBundle will use the default value of any missing configuration property.
4. Finally, validate the final configuration against the JSON schema.
