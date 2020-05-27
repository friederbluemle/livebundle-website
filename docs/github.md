---
id: github
title: GitHub Integration
---

LiveBundle comes with a GitHub integration, enabled by a GitHub application.

When installing the LiveBundle application in a GitHub repository, bundles will be auto generated whenever a pull request is opened, and the resulting LiveBundle QR Code will be posted as a pull request comment, making it a breeze for anyone with access to the pull request link, to install and try out the changes !

This GitHub integration guide will walk you through deploying a complete LiveBundle infrastructure locally, in Docker, so that you can try it out before deploying it.

This guide is a bit more advanced than our previous [Quick Start](./quickstart) guide that was only running a LiveBundle store.

If you haven't done it already, clone our [sample application](https://github.com/electrode-io/livebundle-sample). We will need it in a bit.

*BLE: The following steps are manual for the most part. There is a way to automate most of this to make the application creation process as well as smee registration fully automated. That being said, the necessary technology to support this (GitHub app manifest) is not working for me at this moment and seems buggy. I've reached out to GitHub support. Even if we have it fully automated later on, we should still keep these manual steps part of our documentation, as a fallback, in case the automation doesn't work for some users or is down for some reason.*

### Redirecting webhook payloads with Smee

To keep things simple, we will use [smee.io](https://smee.io/) service to redirect GitHub webhook payloads to your machine.

1. Go to https://smee.io and click on `Start a new channel`
2. Copy the `WebHook Proxy URL` *(first field)*
3. Start the Smee client on your machine by running the following in a terminal,

```
// Replace WEBHOOK_PROXY_URL with the url you copied in step 2 
npx smee-client -u WEBHOOK_PROXY_URL -t http://localhost:80/github
```

:::caution 
Keep the smee-client process running.  
Once terminated, webhook payloads will stop being delivered to the LiveBundle application server.
:::

### Registering the GitHub application

We will now register the application with GitHub so that we can install it in our repository later on.

- Navigate to https://github.com/settings/apps/new to create a new GitHub applications
- Populate the following fields

| Field Name      | Value      |
|:----------------|:-----------|
| GitHub App name | LiveBundle |
| Homepage URL    | http://livebundle *(any URL will work)* |
| Webhook URL     | Smee `WebHook Proxy URL` *(from step 2 above)* |

- Set the following permissions

| Permission      | Value      |
|:----------------|:-----------|
| Contents        | Read-only  |
| Metadata        | Read-only  |
| Pull requests   | Read & Write |

- In the `Subscribe to events` section at the end of the page, check the `Pull request` checkbox
- Click on the `Create GitHub app` button

You will then be redirected to the settings page of the GitHub you just created.  

Last step is to generate a private key for this application.

- Click `Generate a private key` at the bottom of the application settings page. This will generate and download the private key file to your machine.

:::note
Keep the the private key file handy. We will need it in our next step.
:::

### Installing the GitHub application
 
- If you haven't done it already, clone the [LiveBundle sample application](https://github.com/electrode-io/livebundle-sample) and push it to a new repository under your GitHub user account.
- From the GitHub application settings page, click `Install App` in the left menu, and install it to your own personal GitHub user account.  
- Finally, only choose to give access to the application to your LiveBundle sample application repository. 

### Launching LiveBundle infrastructure locally

- Clone the following repository on your machine 
https://github.com/belemaire/livebundle-docker
- Open the `config/github.yaml` file and uncomment the whole `github` configuration section
- Replace every value in the `github` configuration with the values from the GitHub application you just created in previous step. All the configuration values can be found on top of your application settings page. The `privateKey` can be copy/pasted from the private key file you previously downloaded.

:::caution
Keep the indenting of the github section in the yaml file identical to the one that was commented.  
yaml is very strict when it comes to proper indentation.
:::

- Finally, run the `up.sh` script.  
This script will download all the LiveBundle docker images and will run `docker compose up` command to create and launch the LiveBundle complete infrastructure locally.

### Trying it out

Now that everything is setup, try to make a change in the LiveBundle sample application, push it to a branch on your GitHub repository and open a Pull Reqest.  
If all goes well, you should see the following :

That's it, you've just seen all the necessary to integrate LiveBundle with GitHub.