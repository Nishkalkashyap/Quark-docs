---
description : ''
author : nishkal
tags : ['structures', 'api']
cover: ~@buildAssets/api/structures.png
---

# ContextMenuRef

[[toc]]

## Methods

### dispose()
Removed the menu and clears the associated resources.
* returns `void`

### update(menu)
Updates the menu.
* arguments
  * menu [`Array<MenuItem>`](/structures/menu-item.md)
* returns `void`

### show(x, y)
Shows the ContextMenu at the specified x and y positions.
* arguments 
  * x `number`
  * y `number`
* returns `void` 

## Properties

### items
Menu items.
* type [`Array<MenuItem>`](/structures/menu-item.md)

