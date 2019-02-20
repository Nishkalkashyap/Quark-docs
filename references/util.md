# Util

[[toc]]

### `util.createContextMenu(items)`
* arguments
  * items [`Array<MenuItem>`](/structures/menu-item.md)
* returns [`ContextMenuRef`](/structures/context-menu-ref.md)

### `util.createElementFromHtml(html)`
Creates an HTML element from string.
* arguments
  * html `string`
* returns `Element`

### `util.createFileSystemWatcher(path[, options])`
Creates a file system watcher.
* arguments
  * path `string | Array<string>`
  * options `WatchOptions`(optional)
* returns [`Watcher`](/)

### `util.createInputBox()`
Creates an Input box
* returns [`InputBox`](/)

### `util.createMainMenuItem(label, items[, priority])`
Creates a main menu item.
* arguments
  * label `string`
  * items [`Array<MenuItem>`](/structures/menu-item.md)
* returns [`MenuRef`](/structures/menu-ref.md)

### `util.createOutputChannel(name)`
Creates an output channel.
* arguments
  * name `string`
* returns [`OutputChannel`](/)

### `util.createQuickView(name)`
Creates a quick view pannel. Similar to the one used by commands.
* arguments
  * name `string`
* returns [`IQuickPick`](/)