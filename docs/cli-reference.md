---
id: cli-reference
title: CLI Reference
sidebar_label: CLI
---

# Commands

## upload

Generates and uploads a new LiveBundle package containing one or more JS bundle(s) representing the current application code. Also generate a QR Code and/or Deep Link and surface them using the configured notifiers.

**Options**

`--config`

Path to a specific LiveBundle configuration file to be used.<br/>
If this option is not supplied, LiveBundle will look for a configuration file in default locations. _(See [configuration documentation](./configuration.md) for additional details)_

`--cwd`

Path to a directory from which the command should be run from.<br/>
If this option is not supllied, the command will be run from the current directory.

## live

Starts a LiveBundle live session, generates a QR Code and/or DeepLink and surface them using the configured notifiers.

**Options**

`--config`

Path to a specific LiveBundle configuration file to be used.<br/>
If this option is not supplied, LiveBundle will look for a configuration file in default locations. _(See [configuration documentation](./configuration.md) for additional details)_

`--cwd`

Path to a directory from which the command should be run from.<br/>
If this option is not supllied, the command will be run from the current directory.

:::caution
The computer from which the command is run and the client mobile device have to be connected to the same network.
:::

`--host`

Host on which to start the server.
Defaults to the local network ip address of the machine.

`--port`

Port on which to start the server.
Defaults to `8081`.

Any other options to supply to the underlying server command can also be specified.
For example if using default metro server, you can pass command line option such as `--reset-cache` or `--max-workers` or any other ones.

## init

Generates a default starter LiveBundle configuration file _(livebundle.yml)_ in current directory.<br/>

**Options**

`--cwd`

Path to a directory from which the command should be run from.<br/>
If this option is not supllied, the command will be run from the current directory.
