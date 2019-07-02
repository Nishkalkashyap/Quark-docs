---
description : 'Access serial ports with JavaScript. Examples below describe how you can use node-serialport library in your projects.'
author : nishkal
tags : []
---

# Serialport

<Header />

#### Listing all available serialports
```js
import * as serial from 'serialport';

serial.list().then((list) => {
    list.map((port)=>{
        console.log(`COM name: ${port.comName}, Manufacturer : ${port.manufacturer}`)
    });
}).catch(console.error);
```

##### Result
![](~@buildAssets/libraries/serial-port-list.png =350x)

#### Listing all available ports in DOM
```js
import * as serial from 'serialport';

serial.list().then((list) => {
    list.map((port) => {
        console.log(`COM name: ${port.comName}, Manufacturer : ${port.manufacturer}`)
    });
}).catch(console.error);

const view = quark.views.createTabsView('Serial ports');
view.onDidConnectElement = async () => {
    try {
        const list = await serial.list();
        let html = '<h1>Available Ports</h1>';
        list.map((port) => {
            html = html.concat(`<h3>${port.comName}</h3>`);
        });
        view.element.style.padding = '20px';
        view.element.innerHTML = html;
    } catch (err) {
        console.err(err);
    }
}
view.focus();
```

##### Result
![](~@buildAssets/libraries/serial-port-in-dom.png =350x)
