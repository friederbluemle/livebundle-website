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

For problems with the command line CLI, you can [open an issue in livebundle repository][1].<br/>
For problems with the native module, you can [open an issue in react-native-livebundle repository][2].

**Improve documentation**

If you identified a typo in our documentation, or if something is not properly explained or if you just want to contribute new documentation, you can open a Pull Request to the [livebundle-website][3] repository.

**Write a new LiveBundle CLI plugin**

The LiveBundle CLI is highly modular thanks to its [plugin based architecture](./architecture). If you would like to contribute a new plugin to make LiveBundle even better, you can refer to our [plugin authoring documentation](./plugin-authoring.md). When you're ready, just open a PR to [livebundle repository][4].

**Tackle an easy first task**

We label some issues in LiveBundle repositories as `good first issue`. We consider these issues to be easy enough to be tackled by new contributors not yet super familiar with LiveBundle codebase and architecture.

- [LiveBundle CLI good first issues][5]
- [LiveBundle native module good first issues][6]

**Tackle some enhancement**

Similarly to the `good first issue` label, we use the `enhancement` label for any work that would improve LiveBundle. Even though some `enhancement` labelled issues might also be labelled as `good first issue`, most of them will not, and will be challenging. If you feel like you have a good understanding of the LiveBundle codebase, you can tackle these ones or just engage on them to suggest ideas.

- [LiveBundle CLI enchancements][7]
- [LiveBundle native enhancements][8]

**Suggest improvements or new features**

If you have ideas for potential LiveBundle enhancements, but don't feel like implementing these enhancements yourself, you can still contribute by submitting such new ideas.

For suggesting an enhancement to the command line CLI, you can [open an issue in livebundle repository][1].<br/>
For suggesting an enhancement to the native module, you can [open an issue in react-native-livebundle repository][2].

## LiveBundle CLI Development

### Stack

[LiveBundle CLI][4] is written in [TypeScript][9].<br/>
We use [Yarn][9] package manager.<br/>
[Visual Studio Code][17] is our main development IDE. This IDE is not a requirement to work on LiveBundle but it integrates nicely with our development process and tools.<br/>
Our test suites are written using [Mocha][10] and [Sinon.JS][11].
LiveBundle is using [Istanbul][12] to compute test coverage and [CodeCov][13] for online coverage reports.<br/>
We use [ESLint][15] and [Prettier][16] for linting and code styling.

### Development Setup

- Make sure you have [Yarn][9] installed.
- Fork the [LiveBundle CLI][4] repository and clone your fork locally.
- Run `yarn install` from the directory in which you have cloned the project.

### Debugging

Debugging can be achieved within [Visual Studio Code][5].

**CLI**

To debug the CLI, open the LiveBundle project in Visual Studio Code and run `yarn debug` from a Visual Studio code terminal *(important, otherwise Visual Studio code will not auto attach debugger)*.

This is equivalent to running the `livebundle` CLI executable _(as if running `yarn livebundle`)_, but with debugging enabled.
It is thus possible to provide any supported livebundle command and option(s) as if directly running the `livebundle` CLI.

**Tests**

To debug the tests, launch `Mocha Tests` debug configuration from the IDE.

<img alt="Run Mocha Tests" src={useBaseUrl('img/run-mocha-tests.png')} width="250"/>

### Logging

LiveBundle is using the [debug][18] library to for logging.<br/>Please refer to this library documentation for reference.<br/>
In a nutshell, to enable all LiveBundle logs, just set `DEBUG=livebundle*` environment variable.

### Before opening a PR

- Make sure that the code is properly formatted by running `yarn lint`
- Make sure that all tests are passing by running `yarn test`

:::note
We have 100% code coverage for the LiveBundle CLI and would like to keep it at this level.<br/>
Ideally you should add tests to cover all newly introduced code. This is not a strict requirement _(our core team will take care of it otherwise)_ but is always a plus.<br/>To check code coverage you can run `yarn coverage`. The coverage report will be logged to the terminal after running the tests. You can also see the detailed generated report in `coverage/index.html`.
:::

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

## LiveBundle Native Module Development

### Stack

As most standard React Native native modules, [LiveBundle native module][19] is written using a mix of JavaScript, ObjectiveC and Java.<br/>
We unfortunately don't have any tests yet, so testing, is currently limited to manual testing using the example application part of the native module repository.

### Development Setup

- Make sure you have [Yarn][9] installed.
- Fork the [LiveBundle native module][19] repository and clone your fork locally.
- Follow the instructions [in the example app README][20] to get started with development.

[1]: https://github.com/electrode-io/livebundle/issues/new
[2]: https://github.com/electrode-io/react-native-livebundle/issues/new
[3]: https://github.com/electrode-io/livebundle-website
[4]: https://github.com/electrode-io/livebundle
[5]: https://github.com/electrode-io/livebundle/issues?q=is%3Aissue+is%3Aopen+label%3Agood-first-issue
[6]: https://github.com/electrode-io/react-native-livebundle/issues?q=is%3Aissue+is%3Aopen+label%3Agood-first-issue
[7]: https://github.com/electrode-io/livebundle/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement
[8]: https://github.com/electrode-io/react-native-livebundle/issues?q=is%3Aissue+is%3Aopen+label%3Agenhancement
[9]: https://yarnpkg.com/
[10]: https://mochajs.org/
[11]: https://sinonjs.org/
[12]: https://istanbul.js.org/
[13]: https://codecov.io/
[14]: https://yarnpkg.com/
[15]: https://eslint.org/
[16]: https://prettier.io/
[17]: https://code.visualstudio.com/
[18]: https://www.npmjs.com/package/debug
[19]: https://github.com/electrode-io/react-native-livebundle
[20]: https://github.com/electrode-io/react-native-livebundle/blob/master/example/README.md
