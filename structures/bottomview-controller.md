---
description : ''
author : nishkal
tags : ['structures', 'api']
view : 'bottomview'
---

# BottomviewController

[[toc]]

### getCurrentView()
Returns the current {{$page.frontmatter.view}}.
* returns [`ViewProvider`](/structures/view-provider.md)

### getCurrentView()
Returns all registered {{$page.frontmatter.view}}s.
* returns `Array<ViewProvider>`


### isNavbarVisible()
Returns boolean.
* returns `boolean`


### toggleNavbar()
Toggles the navbar.
* returns `void`


### hideNavbar()
Hides the navbar.
* returns `void`


### showNavbar()
Shows the navbar.
* returns `void`


### selectNextView()
Selects the next {{$page.frontmatter.view}}.
* returns `void`


### selectPreviousView()
Selects the previous {{$page.frontmatter.view}}.
* returns `void`


### triggerUpdate()
Triggers {{$page.frontmatter.view}} update.
* returns `void`


### removeView(view)
Removed the view.
* arguments
  * view - [`ViewProvider`](/structures/view-provider.md)
* returns `void`

### getViewById(id)
Removed the view.
* arguments
  * id - `string`
* returns `void`

### setView(view)
Removed the view.
* arguments
  * view - [`ViewProvider`](/structures/view-provider.md)
* returns `void`

### isVisible()
Returns boolean
* returns `boolean`

### toggle()
Toggles view visibility.
* returns `void`

### hide()
Hides the view.
* returns `void`

### show()
Shows the view.
* returns `void`

### maximize()
Maximizes the view.
* returns `void`

### minimize()
Minimized the view.
* returns `void`