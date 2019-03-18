# window

<Header label="Controls for window state of your app."/>

[[toc]]

### `window.blur()`
Removes focus from the window.
* returns `void`

### `window.center()`
Moves window to the center of the screen.
* returns `void`

### `window.close()`
Try to close the window. This has the same effect as a user manually clicking the close button of the window.
* returns `void`

### `window.focus()`
Focuses on the window.
* returns `void`

### `window.getBounds()`
Returns the position and size of the current window.
* returns [`Rectangle`](/)

### `window.getOpacity()`
Gets the opacity of the current wondow.
* returns `number`

### `window.hide()`
Hides the current window.
* returns `void`

### `window.maximize()`
Maximizes the window. This will also show (but not focus) the window if it isn't being displayed already.
* returns `void`

### `window.minimize()`
Minimizes the window. On some platforms the minimized window will be shown in the Dock.
* returns `void`

### `window.reload()`
Reloads the current windiw.
* returns `void`

### `window.restore()`
Restores the window from minimized state to its previous state.
* returns `void`

### `window.setAlwaysOnTop()`
Sets whether the window should show always on top of other windows. After setting this, this window will always stay on top of other windows.
* returns `void`






### `window.setBounds(bounds[, animate])`
Resizes and moves the window to the supplied bounds. Any properties that are not
supplied will default to their current values.
* arguments
  * bounds - [`Rectangle`](/)
  * animate - `boolean`(optional) <Badge text="macOS" type="warn" vertical="middle" />
* returns `void`
* Usage

```js
quark.window.setBounds({
    height : 600,
    width : 600,
    x : 0,
    y : 0
});
```

### `window.setEnabled([enabled])`
Disable or enable the window.
* arguments 
  * enabled `boolean`
* returns `void`
* Usage

```js
quark.window.setEnabled(true);
```

### `window.setOpacity(opacity)`
Sets the opacity of the window. On Linux does nothing. Value must be between 0-1.
* arguments
  * opacity `number`
* returns `void`
*  Usage

```js
quark.window.setOpacity(0.5);
```

### `window.setProgressBar(progress[, mode])`
Focuses on the window.
* arguments
  * progress `number`
  * mode `('none' | 'normal' | 'indeterminate' | 'error' | 'paused')`<Badge text="Windows" type="warn" vertical="middle" />
* returns `void`

```js
quark.window.setProgressBar(0.3);

//Or for windows
quark.window.setProgressBar(0.4, 'error');
```

### `window.isResizable()`
Returns whether the window is resizable or not.
* returns `boolean`

### `window.setResizable(resizable)`
Sets the window as resizable or not resizable.
* argumants
  * resizable `boolean`
* returns `void`

### `window.show()`
Shows and gives focus to the window.
* returns `void`

### `window.unmaximize()`
Unmaximizes the window.
* returns `void`


<!-- Starting webContentsApi -->

### `window.capturePage(callback)`
Captures a snapshot of the whole visible page. Upon completion callback will be 
called with callback(image). The image is an instance of NativeImage that stores
data of the snapshot.
* arguments
  * callback `(image : NativeImage) => void` 
* returns `void`
* Usage

```js
quark.window.capturePage((image) => {
    //your code here, example:
    console.log(image);
});
```

### `window.executeJavaScript(code)`
Evaluates code in page. Returns a promise with the result of the executed code.
* arguments
  * code `string` 
* returns `Promise<any>`
* Usage

```js
const code = `
    console.log('Hello');
`
quark.window.executeJavaScript(code).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err)
});
```

### `window.getFrameRate()`
Returns the frameRate of the window
* returns `void`

### `window.getZoomFactor()`
Gets the current zoom factor and returns a promise that resolves to the value of zoom factor.
* returns `Promise<number>`
* Usage

```js
quark.window.getZoomFactor().then((factor)=>{
    //Your code here; example:
    console.log(factor);
}).catch((err)=>{
    console.log(err)
});
```
### `window.getZoomLevel()`
Gets the current zoom level and returns a promise that resolves to the value of zoom level.
* returns `Promise<number>`
* Usage

```js
quark.window.getZoomLevel().then((level)=>{
    //Your code here; example:
    console.log(level);
}).catch((err)=>{
    console.log(err)
});
```

### `window.insertCSS(css)`
Injects css into the current web page.
* arguments
  * css `string` 
* returns `void`
* Usage
```js
const css = `
    my-element {
        background-color : red;
    }
`
quark.window.insertCSS(css);
```

### `window.setZoomFactor(factor)`
 Changes the zoom factor to the specified factor. Zoom factor is zoom percent divided by 100, so 300% = 3.0.
* arguments
  * factor `number`
* returns `void`
* Usage
```js
quark.window.setZoomFactor(0.3);
```

### `window.setZoomLevel(level)`
Changes the zoom level to the specified level. The original size is 0 and each
increment above or below represents zooming 20% larger or smaller to default
limits of 300% and 50% of original size, respectively. The formula for this is
scale := 1.2 ^ level.
* arguments
  * level `number`
* returns `void`
* Usage
```js
quark.window.setZoomLevel(0.5);
```










