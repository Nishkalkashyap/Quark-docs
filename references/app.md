---
description : Provides methods to perform lower level operations.
author : nishkal
tags : ['api']
---

# app
<Header/>
[[toc]]

### app.showItemInFolder([fullPath])
Show the given file in a file manager. If possible, select the file. If no path is provided, opens the current process path.
* returns `void`

### app.beep()
Play the beep sound.
* returns `void`

### app.getAppMetrics()
Gets the [`ProcessMetric`](/)` object;
* returns [`ProcessMetric`](/)

### app.getAppPath()
Gets the installation path of the app.
* returns `string`

### app.getVersion()
Gets the current version of app.
* returns `string`

### app.showMessageBox(title, message, buttons[, type])
Shows a message box. Returns a promise that resolves to the text of the selected button.
* arguments
  * title `string`
  * message `string`
  * buttons `Array<string>` 
  * type `("none" | "info" | "error" | "question" | "warning")` (optional)
* returns `Promise<string>`
* Usage

```js
quark.app.showMessageBox('Select your hero', 'Superman or Batman?', ['Superman', 'Batman'], 'question')
.then((hero)=>{
    if(hero == 'Superman'){
        console.log('Meh!');
    }else {
        console.log('Yuss!');
    }
}).catch((err)=>{
    console.log(err);
});
```

### app.showErrorBox(title, content)
Shows an error box.
* arguments
  * title `string`
  * content `string`
* returns `void`
* Usage

```js
quark.app.showErrorBox('Connection Failed!','Failed to connect to board at COM port 5');
```

### app.showOpenDialog([options])
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

### app.showSaveDialog([options])
Shows a save dialog.
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