---
description : Convert existing electron app to Quark app.
author : nishkal
tags : ['nodejs', 'javascript']
---

## Convert existing electron app

```ts
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