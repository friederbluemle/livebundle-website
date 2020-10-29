---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

## Enabling debug logs

As much as possible, when facing an issue, LiveBundle will log clear and informative error messages.

However, if running into an issue leading to a very obscure error message, you'll want to get more logs from LiveBundle which might give you a better idea as to where exactly the issue is happening.

LiveBundle is using the popular [debug][1] library for its debug logging.

To enable all logs run any livebundle command with the `DEBUG` environment set to the following value :

```bash
DEBUG=livebundle* livebundle upload
```

[1]: https://www.npmjs.com/package/debug
