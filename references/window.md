<!-- ---
sidebarDepth: 4
--- -->

<!-- [[toc]] -->

<!-- ## Methods -->

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

### `window.show()`
Shows and gives focus to the window.
* returns `void`

### `window.unmaximize()`
Unmaximizes the window.
* returns `void`








