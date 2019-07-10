---
description : 'Quark uses webpack behind the scenes to build your project. You would configure the build process, by adding a webpack config file.'
author : nishkal
tags : ['nodejs', 'javascript']
# title : 'Configuring build process'
---

# Configuring build

<Header />



##### Create the config file
Create a `webpack.config.js` file at the root of your project. e.g.
```
.
├─ setup.js
└─ webpack.config.js
```

##### Add webpack config
[Config reference](https://webpack.js.org)
```js
// webpack.config.js
module.exports = {
    ...
}
```

!!! warning Caveats
Quark uses an in-memory file system with webpack. This requires a little patch behind the scenes. The only thing you need to remember is that:- 
1. The `entry` key must be an object a `src` key. 
2. The value of this key must concat `/src/` in front of the absolute file path of the file you want to be the entry point of your application.

__Example:__ If your entry point file is `index.ts` at the root of your project, your config must look like this-

```js
// .
// ├─ setup.js
// ├─ index.ts
// └─ webpack.config.js
{
    ...
    "entry": {
        "src" : "/src/index.ts"
    }
}
```

__Example:__ If your entry point file is `index.ts` nested inside of a folder (`view`), your config must look like this-

```js
// .
// ├── view
// │   └── index.ts
// ├── setup.js
// └── webpack.config.js
{
    ...
    "entry": {
        "src" : "/src/view/index.ts"
    }
}
```
!!!
