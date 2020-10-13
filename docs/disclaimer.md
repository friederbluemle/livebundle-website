---
id: disclaimer
title: Disclaimer
sidebar_label: Disclaimer
---

LiveBundle requires a remote storage to store the bundles, and serve them from your mobile application.

It currently ships with [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/) support, via [livebundle-storage-azure](https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-azure) provider plugin.

LiveBundle core team is not planning to implement other storage providers plugins *(unless driven by an internal need)*, but will welcome external contributions of such new plugins.

This means that to use LiveBundle, if you do not have an Azure account, you will need to create one.
On the other hand, if you already have a cloud storage account through a different provider, you can either create an Azure account just for LiveBundle or contribute a new storage provider plugin.
