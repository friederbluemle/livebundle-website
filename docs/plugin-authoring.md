---
id: plugin-authoring
title: Plugin Authoring
sidebar_label: Plugin Authoring
---

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

Internally, LiveBundle will process and validate a plugin configuration as follow

1. Parse the plugin configuration as declared in the YAML configuration file
2. "Reconcilate" the configuration with environment variables. For any configuration properties that can be set as environment variables, LiveBundle will look if any of these environment variables are set and will apply the following reconciliation logic :
    - If the configuration property is defined in the yaml config but not as an env var, then use the configuration property from the yaml config.
    - If the configuration property is defined as an env var, but not in the yaml config, then use the configuration property from the env var.
    - If the configuration property is defined both as the env var and in yaml config, fail configuration loading and report ambiguity.
3. Merge the configuration with the default configuration of the plugin. This means that LiveBundle will use the default value of any missing configuration property.
4. Finally, validate the final configuration against the JSON schema.
