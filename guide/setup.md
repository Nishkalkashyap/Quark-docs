---
description : 'Getting up and running with Quark is quick and easy. It is a small download so you can install in a matter of minutes and give Quark a try.'
author : nishkal
tags : ['guide']
cover : ~@buildAssets/guide/setting-up-quark.png
---

# Setting up Quark

Getting up and running with Quark is quick and easy. It is a small [download](/download/) so you can install in a matter of minutes and give Quark a try.

[[toc]]

## Cross platform

Quark is a free software which runs on the macOS*, Linux and Windows operating systems and has been tested on the following platforms:

* Windows 7 and 10 (64-bit)
* Linux (Debian): Ubuntu Desktop 18.xx

Quark is a small download (~100 MB) and has a disk footprint of ~300 MB. Quark is lightweight and should easily run on today's hardware.

We recommend:

* 1.6 GHz or faster processor
* 1 GB of RAM

## Windows

#### Installation
* Download the Quark installer for Windows from the [download](/download/) page.
* Once it is downloaded, run the installer (`Quark-win-x64-${version}.exe`). This will only take a minute.
* By default, Quark is installed under `C:\users\{username}\AppData\Local\Programs\Quark`.

Alternatively, you can also download a Zip archive, extract it and run Quark from there. On the downside, you will need to manually update Quark for each release.

!!! info NOTE
It is recommended that you download the setup file(`Quark-win-x64-${version}.exe`) instead of the zip archive, since auto-updates are only supported via the .exe file.

If you're prompted by Quark, accept the newest update and it will be installed (you won't need to do anything else to get the latest bits).
!!! 

## Linux

#### Installation
Quark for linux is officially distributed as an AppImage.
* Download Quark for Linux from the [download](/download/) page.
* Once it is downloaded, add the _execute_ permissions to the downloaded file (`Quark-linux-x86_64-${version}.AppImage`).
* Run the appImage to start Quark.

Alternatively, you can also download the .tar.gz archive, extract it and run Quark from there. On the downside, you will need to manually update Quark for each release.

!!! info NOTE
It is recommended that you download the setup file(`Quark-linux-x86_64-${version}.AppImage`) instead of the .tar.gz archive, since auto-updates are only supported via the .AppImage file.
!!!

## Recommended tools

It is recommended that you install the following third party softwares on your PC which can be used with Quark.
* [Node.js](https://nodejs.org)
* [Git](https://git-scm.com/)
* A package manager([npm](https://npmjs.org) or [yarn](https://yarnpkg.com)) 

Node.js is a platform for building fast and scalable server applications using JavaScript. Node.js is the runtime and npm is the Package Manager for Node.js modules.

## Network
A handful of features within Quark require network communication to work, such as the auto-update mechanism, querying and installing node packages. For these features to work properly in a proxy environment, you must have the product correctly configured.

If you are behind a firewall which needs to whitelist domains used by Quark, here's the list of hostnames you should allow communication to go through:

* __`quarkjs.io`__
* __`social.quarkjs.io`__
* __`storage.googleapis.com`__
* __`npmjs.org`__

## Updates
As long as Quark is in the alpha stage of development, we will release a new version every week, and monthly thereafter.

## Versioning
Once Quark releases in beta phase, it will follow [semver](https://semver.org/). Before that no gurantees are made that the API will be changed in a backwards compatible way.

## Next Steps
Once you have installed Quark, these topics will help you learn more about Quark:
* [User Interface](/guide/quark-ide.md): A quick orientation to Quark.
* [Getting Started](/guide/getting-started.md): A "Hello World" example to get you started with Quark.
* [References](/references/app.md): Learn how to use the Quark API.
* [FAQs](/FAQ/glossary.md): Frequently Asked Questions.