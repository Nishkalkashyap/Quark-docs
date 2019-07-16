---
description : 'Electron is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS. This guide describes how you can use electron in your projects.'
author : nishkal
tags : []
---

# Electron

<Header />

#### Using the electron's renderer process api.
In your sketches you have access to all of the electron's renderer process API's. Let's see how we can use the [`notifications`](https://electronjs.org/docs/tutorial/notifications) api in your sketches.
```js
// setup.js
import { remote } from 'electron';
import * as path from 'path';

// notificationWithImage
const notificationWithImage = new remote.Notification({
    title: 'Notification with image',
    body: 'Short message plus a custom image',
    icon: path.join(remote.app.getAppPath(), '/appAssets/32x32.png')
});

notificationWithImage.addListener('click', (e, i) => {
    console.log('Notification clicked');
});
notificationWithImage.show();



// notificationWithoutImage
const notificationWithoutImage = new remote.Notification({
    title: 'Basic notification',
    body: 'Short message'
});

notificationWithoutImage.addListener('click', (e, i) => {
    console.log('Notification clicked');
});
notificationWithoutImage.show();
```