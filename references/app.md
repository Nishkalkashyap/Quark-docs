# App

[[toc]]

### `app.showItemInFolder([fullPath])`
Show the given file in a file manager. If possible, select the file. If no path is provided, opens the cueernt process path.
* returns `void`

### `app.beep()`
Play the beep sound.
* returns `void`

### `app.getAppMetrics()`
Gets the `ProcessMetric` object;
* returns [`ProcessMetric`](/)

### `app.getAppPath()`
Gets the installation path of the app.
* returns `string`

### `app.getVersion()`
Gets the current version of app.

### `app.showMessageBox(title, message, buttons[, type])`
Shows a message box. Returns the text of the selected button.
* arguments
  * title `string`
  * message `string`
  * buttons `Array<string>` 
  * type `("none" | "info" | "error" | "question" | "warning")` (optional)
* returns `string`
* Usage

```ts

//Javascript Example

quark.app.showMessageBox('Select your hero', 'Goku or Vegeta?', ['Goku', 'Vegeta'], 'question')
.then((hero)=>{
    if(hero == 'Goku'){
        console.log('loser');
    }else {
        console.log('Saiyan prince approves!');
    }
}).catch((err)=>{
    console.log(err);
});

//Typescript example
quark.app.showMessageBox<'Goku' | 'Vegeta'>('Select your hero', 'Goku or Vegeta?', ['Goku', 'Vegeta'], 'question')
.then((hero)=>{
    if(hero == 'Goku'){
        console.log('loser');
    }else {
        console.log('Saiyan prince approves!');
    }
}).catch((err)=>{
    console.log(err);
});
```

### `app.showErrorBox(title, content)`
Shows an error box.
* arguments
  * title `string`
  * content `string`
* returns `void`
* Usage

```js
quark.app.showErrorBox('Connection Failed!','Failed to connect to board at COM port 5');
```

### `app.showOpenDialog([options])`
Shows a file/folder open dialog.
* arguments
  * options [`OpenDialogOptions`](/)(optional)
* returns `Promise<{ filePaths: Array<string>, bookmarks: Array<string> }?`
* Usage

```js
quark.app.showOpenDialog({
    title : 'Open Logs',
    defaultPath : 'C://User/Desktop',
    properties : ['openFile', 'multiSelections']
}).then((result)=>{
    const filePaths = result.filePaths;
    const bookmarks = result.bookmarks;
    console.log(filePaths, bookmarks);
}).catch((err)=>{
    console.log(err);
});
```

### `app.showSaveDialog([options])`
Shows a save dialog
* arguments
  * options [`SaveDialogOptions`](/)
* returns `Promise<{ filename: string, bookmark: string }>` 
* Usage

```js
quark.app.showSaveDialog({
     title : 'Open Logs',
    defaultPath : 'C://User/Desktop'
}).then((result)=>{
    const filename = result.fileName;
    const bookmark = result.bookmark;
    console.log(fileName, bookmark);
}).catch((err)=>{
    console.log('user dismissed the dialog');
});
```

