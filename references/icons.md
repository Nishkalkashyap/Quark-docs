---
description : Register icons to be used in UI components.
author : nishkal
tags : ['api', 'references']
cover : ~@public/g-images/api/references.png
---

# icons
<Header/>
[[toc]]

### icons.registerIcon(icon)
Registers an icon in global icon namespace.
* arguments 
  * icon [`Icon`](/structures/icon.md)
* returns `void`
* Usage

```js
quark.icons.registerIcon({
    name: 'my-custom-icon',
    path: './my-custom-icon.svg'
});

const view = quark.views.createSideView('my-side-view', document.createElement('my-custom-element'));
view.icon = 'my-custom-icon';
view.focus();
```


### icons.registerIcons(icons)
Registers multiple icons in global icon namespace.
* arguments 
  * icons [`Array<Icon>`](/structures/icon.md)
* returns `void`


### icons.registerIconInNamespace(icon, namespace)
Registers an icon under a namespace.
* arguments 
  * icon [`Icon`](/structures/icon.md)
  * namespace `string`
* returns `void`
* Usage

```js
quark.icons.registerIconInNamespace({
    name: 'my-custom-icon',
    path: './my-custom-icon.svg'
}, 'my-namespace');

const view = quark.views.createSideView('my-side-view', document.createElement('my-custom-element'));
view.icon = 'my-namespace:my-custom-icon';
view.focus();
```


### icons.registerIconsInNamespace(icons, namespace)
Registers multiple icons under a namespace.
* arguments 
  * icons [`Array<Icon>`](/structures/icon.md)
  * namespace `string`
* returns `void`

### Tip
Quark comes pre installed with [Material icons](https://material.io/tools/icons/?style=baseline) and [Ionicons](https://ionicons.com/). You can use them in your views as follows:
```js
/*
 * Using material icons.
 * All material icons are registered under the namespace 'mat'
 */

const view = quark.views.createSideView('my-material-icon-view', document.createElement('my-custom-element'));
view.icon = 'mat:close';

/*
 * Using ionicons.
 * All ionicons are registered under the namespace 'ionicon'
 * 
 * Important: You also have to specify the platform of the icon. i.e. 'md-' or 'ios-' before the name of the icon.
 * e.g. 'ionicon:md-close' would work but 'ionicon:close' would not.
 */

const view = quark.views.createSideView('my-ionicon-view', document.createElement('my-custom-element'));
view.icon = 'ionicon:md-close';
```
