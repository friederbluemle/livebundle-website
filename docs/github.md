---
id: github
title: GitHub Integration
sidebar_label: GitHub Integration
---

LiveBundle comes with a GitHub integration *(through the Github notifier plugin)* that can be used to generate and upload a LiveBundle package for every opened Pull Request and then post the associated QR Code and Deep Link as a comment on the Pull Request.

This integration will work in different GitHub/CI environments such as :

- GitHub public with GitHb actions
- GitHub public with third party CI provider
- GitHub enterprise with third party CI provider

## Prerequisites

- Complete functional LiveBundle setup *(completed the [Trying it out](./cli.md) section)*
- React Native application hosted in GitHub *(public or enteprise)*

## Adding the GitHub notifier plugin

If you are planning to use LiveBundle from different contexts *(for example running LiveBundle from developer workstation, but also running LiveBundle in CI on every PR)*, you will need to create a different LiveBundle configuration file to be used on CI *(as we don't want the GitHub notifier to be run when using LiveBundle from a developer workstation)*.

For this purpose, you can create a new `livebundle.ci.yml` configuration file. Just duplicate your existing configuration for a start.

Then go ahead and remove the `terminal` and `viewer` notifiers from the `notifiers` section. Indeed, when we run LiveBundle from a CI environment, we don't want to log the QR Code to the terminal, nor to open it in a viewer.

Next, in replacement of these notifiers, let's instead use the `github` notifier plugin

```yaml
github:
  baseUrl: https://api.github.com
```

:::info
The `baseUrl` is set to point to public GitHub API by default. If you are using GitHub enteprise, update the url accordingly.
:::

## Setting up the CI job

Independently of the CI tool used, setting up the CI job just come down to running the `livebundle upload` command from the CI job, for every PR.

### With GitHub actions

This setup can only be achieved on GitHub public, given that GitHub actions are not yet supported in GitHub enterprise.

This is the "go to" setup if your repository is hosted in GitHub public and if you are using GitHub actions to perform your CI.<br/>

Here is a sample of a complete GitHub action workflow to run LiveBundle on every PR to master branch.

```yaml
name: LiveBundle

on:
  pull_request:
    branches: [ master ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2-beta
      with:
        node-version: '12'
    - run: yarn install
    - run: yarn livebundle upload --config livebundle.ci.yaml
      env:
        CI: true
        DEBUG: "*,-babel*"
        LB_STORAGE_AZURE_SASTOKEN: ${{secrets.LB_UPLOAD_AZURE_SASTOKEN}}
        LB_NOTIFIER_GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

If you want to run LiveBundle part of an existing PR workflow, all that's need is to run the `yarn livebundle upload --config livebundle.ci.yaml` command and also have the `LB_STORAGE_AZURE_SASTOKEN` and `LB_NOTIFIER_GITHUB_TOKEN` environment variables properly set. We recommend keeping these variables values as GitHub secrets as to not publicly shared them.

### Without GitHub actions

If your repository is hosted in GitHub enterprise, with no access to GitHub actions, or if your CI is not relying on GitHub actions, you will need to do the following.

- In your CI job set the following environment variables

  - `LB_STORAGE_AZURE_SASTOKEN` *(SAS token to use for uploads to Azure Blob Storage)*
  - `LB_NOTIFIER_GITHUB_TOKEN` *(GitHub API token to use to post comment with QR Code)*
  - `LB_NOTIFIER_GITHUB_PRURL` *(Full URL to the Pull Request. This value is usually exposed in a specific env var in most CI tools)*

As discussed in the setup using GitHub actions, we recommend keeping the token values as secrets.

- In your CI job *(run on every PR)*, just invoke the `livebundle upload` command, for example

```bash
yarn livebundle upload --config livebundle.ci.yaml
```

:::warning
Make sure that `yarn install` *(or `npm install`)* has been run before using `livebundle upload`
:::
