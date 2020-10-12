---
id: configuration
title: Configuration
sidebar_label: Configuration
---

### Configuration file

LiveBundle will search for a file named `livebundle.yml` (or `livebundle.yaml`) in:

- `.` *(the working directory)*
- `/etc/livebundle/`
- `$HOME/`

You can override this using the `--config` command line option which takes a path to a LiveBundle configuration file.
