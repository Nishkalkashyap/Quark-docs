---
description : 'This section will cover how to use pre-installed libraries and how to install new libraries.'
author : nishkal
tags : []
---

# Using libraries

<Header />

[[toc]]

## Using existing libraries
Quark comes pre-installed with a few libraries. You can check which libraries are pre-installed by going to 
`Help > View Installed Libraries` from the main menu.

![Pre installed libraries](~@buildAssets/libraries/view-preinstalled-libs-menu.png =400x)

__This will open a dialog listing all the pre-installed libraries.__

![Pre installed libraries](~@buildAssets/libraries/installed-libs-list.png =400x)

Some of these libraries are used internally by the software, some of these libraries are proxied and exposed as an API, and some are used by the build system. Nonetheless all of them can be used from your project. Find out specific tutorials of using some of those libraries [here.](/libraries/)

## Installing new libraries
Once you are comfortable with the Quark software and using the built-in functions/features, you may want to extend the ability of your project with additional libraries.

##### Using the built-in npm client
To install a new library in your project you can use the built-in npm client. Click on the `npm` logo in the sideview to open the client, and search for the library you want to use.

![Pre installed libraries](~@buildAssets/libraries/npm-client-search.png =400x)

You can install the library by pressing on the `install` button, or first view the library repository by pressing on the `Repository` button.

After hitting the install button, you will be presented with an install status snackbar. If installing the library fails, you can check the logs from the `Devtools` section in the `output-channel`.

![Pre installed libraries](~@buildAssets/libraries/npm-install-status.png)

##### Using systems package manager
If you happen to have a package manager installed on your machine (e.g. `npm` or `yarn`) you can use that too.

```bash
# e.g. npm
npm install express

# e.g. yarn
yarn add express
```




