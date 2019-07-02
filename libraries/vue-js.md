---
description : 'Vue is a progressive framework for building user interfaces. Examples below describe how you can use Vue.js to create views in your project.'
author : nishkal
tags : []
---

# Vue

<Header />

<!-- !!! warning Note
This is not a tutorial of the framework Vue itself, but a tutorial on how to consume Vue.js in a Quark project. To learn more about Vue, read the [official docs from here.](https://vuejs.org/)
!!! -->
<!-- 

#### Using existing API [`(see)`](/references/util.html#util-createvuewebcomponent-name-data-createelement)
```js
// setup.js
const element = quark.util.createVueWebComponent('my-vue-component', {
    data() {
        return {
            greetings: 'Hello Vue.js'
        }
    },
    template : `<h1>{{greetings}}<h1>`
}, true);

const view = quark.views.createTabsView('My Vue', element);
view.focus();
```

##### Result
![](~@buildAssets/libraries/create-vue-web-component-example.png =350x)

#### Importing external html template.
```html
<h1>{{greetings}}</h1>
```

```js
// setup.js
import htmlTemplate from './template.html';

const element = quark.util.createVueWebComponent('my-vue-component', {
    data() {
        return {
            greetings: 'Hello Vue.js'
        }
    },
    template : htmlTemplate
}, true);

const view = quark.views.createTabsView('My Vue', element);
view.focus();
``` -->

#### Using the esm build
```js
// setup.js
import Vue from 'vue/dist/vue.esm';

const view = quark.views.createTabsView('My Vue');
view.onDidConnectElement = () => {
    const app = new Vue({
        el: view.element,
        data() {
            return {
                greetings: 'Hello Vue.js'
            }
        },
        template: `<h1>{{greetings}}</h1>`
    });
}
view.focus();
```

##### Result
![](~@buildAssets/libraries/create-vue-web-component-example.png =350x)

#### Using multiple components
```js
// setup.js
import Vue from 'vue/dist/vue.esm';

const myComponent = Vue.component('my-component', {
    template : '<h3>Hello parent component</h3>'
});

const view = quark.views.createTabsView('My Vue');
view.onDidConnectElement = () => {
    const app = new Vue({
        el: view.element,
        components : {
            myComponent
        },
        template: `<my-component />`
    });
}
view.focus();
```

#### Importing external html template.
```html
<!-- template.html -->
<h1>{{greetings}}</h1>
```

```js
// setup.js
import Vue from 'vue/dist/vue.esm';
import htmlTemplate from './template.html';

const view = quark.views.createTabsView('My Vue');
view.onDidConnectElement = () => {
    const app = new Vue({
        el: view.element,
        data() {
            return {
                greetings: 'Hello Vue.js'
            }
        },
        template: htmlTemplate
    });
}
view.focus();
```