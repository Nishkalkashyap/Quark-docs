---
description : 'Convert existing electron app to Quark app. In this guide, we are going to load an existing electron application into a webview and also bundle the application as a Quark applet.'
author : nishkal
tags : ['nodejs', 'javascript']
---

# Convert existing electron app

<Header />

##### Write the following code in the entry point of your application. In this case, `index.js` file.
```ts
// index.ts
import * as path from 'path';
import * as fs from 'fs';
import { remote } from 'electron';

quark.views.tabsviewController.hideNavbar();

const indexFilePath = path.resolve(`./${__projectfile}/index.html`);

const view = quark.views.createTabsView('My Electron App', document.createElement('webview'));
view.onDidConnectElement = () => {

    const url = `file://` + indexFilePath;

    let webview: Electron.WebviewTag = view.element as any;
    webview.setAttribute('src', url);
    webview.setAttribute('nodeintegration', '');
    webview.setAttribute('style', "display:flex;height:100%");

    const devtools = quark.util.createOutputChannel('App logs');
    devtools.show();

    webview.getWebContents().on('console-message', (e, level, message, line, sourceId) => {
        devtools.appendLine(message);
    });

    const status = quark.util.createStatusBarItem();
    status.text = 'Toggle dev tools';
    status.show();
    status.command = () => {
        webview.getWebContents().toggleDevTools();
    }
}
view.focus();
```

##### Build and test the application.
First build the application, and then package the application into the archive format. To pack the application, select `Builder: Package` command from the command palette.

If the application was packed successfully, test the app by running the command `Run: Package`.