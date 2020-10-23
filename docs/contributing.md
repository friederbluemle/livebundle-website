---
id: contributing
title: Contributing
sidebar_label: Contributing
---

import useBaseUrl from '@docusaurus/useBaseUrl';

LiveBundle is fully open sourced and we welcome contributions !

## Ways to contribute

**Report an issue or bug**

If you are facing an issue or you identified a bug, please open an issue ticket in the adequate repository.

For problems with the command line CLI, you can [open an issue in livebundle repository](https://github.com/electrode-io/livebundle/issues).<br/>
For problems with the native module, you can [open an issue in react-native-livebundle repository](https://github.com/electrode-io/react-native-livebundle/issues).

**Improve documentation**

If you identified a typo in our documentation, or if something is not properly explained or if you just want to contribute new documentation, you can open a Pull Request to the [livebundle-website](https://github.com/electrode-io/livebundle-website) repository.

**Write a new LiveBundle CLI plugin**

The LiveBundle CLI is highly modular thanks to its [plugin based architecture](./architecture). If you would like to contribute a new plugin to make LiveBundle even better, you can refer to our [plugin authoring documentation](./plugin-authoring.md). When you're ready, just open a PR to [livebundle repository](https://github.com/electrode-io/livebundle).

**Tackle an easy first task**

We label some issues in LiveBundle repositories as `good first issue`. We consider these issues to be easy enough to be tackled by new contributors not yet super familiar with LiveBundle codebase and architecture.

- [LiveBundle CLI good first issues](https://github.com/electrode-io/livebundle/issues?q=is%3Aissue+is%3Aopen+label%3Agood-first-issue)
- [LiveBundle native module good first issues](https://github.com/electrode-io/react-native-livebundle/issues?q=is%3Aissue+is%3Aopen+label%3Agood-first-issue)

**Tackle some enhancement**

Similarly to the `good first issue` label, we use the `enhancement` label for any work that would improve LiveBundle. Even though some `enhancement` labelled issues might also be labelled as `good first issue`, most of them will not, and will be challenging. If you feel like you have a good understanding of the LiveBundle codebase, you can tackle these ones or just engage on them to suggest ideas.

- [LiveBundle CLI enchancements](https://github.com/electrode-io/livebundle/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)
- [LiveBundle native enhancements](https://github.com/electrode-io/react-native-livebundle/issues?q=is%3Aissue+is%3Aopen+label%3Agenhancement)

**Suggest new enhancements**

If you have ideas for potential LiveBundle enhancements, but don't feel like implementing these enhancements yourself, you can still contribute by submitting such new ideas.

For suggesting an enhancement to the command line CLI, you can [open an issue in livebundle repository](https://github.com/electrode-io/livebundle/issues).<br/>
For suggesting an enhancement to the native module, you can [open an issue in react-native-livebundle repository](https://github.com/electrode-io/react-native-livebundle/issues).

## Working on LiveBundle CLI

### Stack

LiveBundle CLI is written in [TypeScript][9].<br/>
We use [Yarn](https://yarnpkg.com/) package manager.<br/>
[Visual Studio Code][5] is our main development IDE. This IDE is not a requirement to work on LiveBundle but it integrates nicely with our development process and tools.<br/>
Our test suites are written using [Mocha][10] and [Sinon.JS][11].
LiveBundle is using [Istanbul][12] to compute test coverage and [CodeCov][13] for online coverage reports.<br/>
We use [ESLint][15] and [Prettier][16] for linting and code styling.

### Development Setup

- Make sure you have [Yarn](https://yarnpkg.com/) installed.
- Fork the [LiveBundle CLI](https://github.com/electrode-io/livebundle) repository and clone your fork locally.
- Run `yarn install` from the directory in which you have cloned the project.

### Debugging

Debugging can be achieved directly from [Visual Studio Code][5].

To debug the CLI, open the LiveBundle project in Visual Studio Code and run `yarn debug` from a Visual Studio code terminal *(important, otherwise Visual Studio code will not auto attach debugger)*.

This is equivalent to running the `livebundle` CLI executable _(as if running `yarn livebundle`)_, but with debugging enabled.
It is thus possible to provide any supported livebundle command and option(s) as if directly running the `livebundle` CLI.

### Mocha Tests

To debug mocha tests, launch `Mocha Tests` debug configuration from the IDE.

<img alt="Run Mocha Tests" src={useBaseUrl('img/run-mocha-tests.png')} width="250"/>

### Logging

LiveBundle is using the [debug][6] library to for logging.<br/>Please refer to this library documentation for reference.<br/>
In a nutshell, to enable all LiveBundle logs, just set `DEBUG=livebundle*` environment variable.

### Before opening a PR

- Make sure that the code is properly formatted by running `yarn lint`
- Make sure that all tests are passing by running `yarn test`

Also, we have 100% code coverage for LiveBundle CLI and would like to keep it at this level.<br/>
Ideally you should add tests to cover all introduced code. This is not a strict requirement _(our core team will take care of it otherwise)_ but is always appreciated. To check the code coverage you can run `yarn coverage`. The coverage report will be logged to the terminal after running the tests. You can also open the HTML generated report in `coverage/index.html`.

### Repository structure _(curated)_

```
.
├── lerna.json            // Lerna configuration
├── packages              // Node.js packages
│   ├── livebundle                      // Command line CLI executable
│   ├── livebundle-bunder-metro         // Metro Bundler plugin
│   ├── livebundle-generator-deeplink   // Deep link generator plugin
│   ├── livebundle-generator-qrcode     // QR Code generator plugin
│   ├── livebundle-notifier-github      // GitHub notifier plugin
│   ├── livebundle-notifier-terminal    // Terminal notifier plugin
│   ├── livebundle-notifier-viewer      // Viewer notifier plugin
│   ├── livebundle-sdk                  // SDK
│   ├── livebundle-storage-azure        // Azure Storage plugin
│   ├── livebundle-storage-fs           // File System Storage plugin
│   └── livebundle-utils                // Misc utilities
├── tsconfig.build.json   // TypeScript config used for builds
├── tsconfig.json         // TypeScript config used by monorepo
├── codecov.yml           // Codecov configuration
├── .eslintignore.json    // Files/Directories to exclude from ESLint
├── .eslintrc.js          // ESLint configuration
├── .mocharc.json         // Mocha configuration
├── .nycrc                // nyc (coverage) configuration
├── .prettier.rc          // Prettier configuration
└── .vscode               // VSCode IDE configuration
    └── settings.json     // VSCode workspace configuration
```

## Working on LiveBundle Native Module

**TODO**

[1]: https://github.com/electrode-io/livebundle/workflows/ci/badge.svg
[2]: https://github.com/electrode-io/livebundle/actions
[3]: https://codecov.io/gh/electrode-io/livebundle/branch/master/graph/badge.svg?token=97VWVN63G0
[4]: https://codecov.io/gh/electrode-io/livebundle
[5]: https://code.visualstudio.com/
[6]: https://www.npmjs.com/package/debug
[7]: https://livebundle.io
[8]: https://docs.livebundle.io
[9]: https://www.typescriptlang.org/
[10]: https://mochajs.org/
[11]: https://sinonjs.org/
[12]: https://istanbul.js.org/
[13]: https://codecov.io/
[14]: https://yarnpkg.com/
[15]: https://eslint.org/
[16]: https://prettier.io/
