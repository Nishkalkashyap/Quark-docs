---
description : 'React is a javascript library for building user interfaces. Examples below describe how you can use React to create views in your project.'
author : nishkal
tags : []
---

# React

<Header />

<!-- [[toc]] -->

<!-- !!! warning Note
This is not a tutorial of the library React itself, but a tutorial on how to consume the library in a Quark project. To learn more about React, read the [official docs from here.](https://reactjs.org/)
!!! -->

<!-- ## Creating Views -->

<!-- ### Using a react functional component. -->

#### Creating and using a react functional component.
```jsx
// setup.js
import { render } from 'react-dom';

function App() {
    const greeting = 'Hello Functional Component!';
    return <h1 style={{margin : '0px'}}>{greeting}</h1>;
}

const view = quark.views.createTabsView('React view');
view.onDidConnectElement = () => {
    view.element.style.backgroundColor = '#f0f0f0';
    view.element.style.height = '100%';
    render(<App />, view.element);
};

view.focus();
```
##### Result
![](~@buildAssets/libraries/react-functional-component-view.png =350x)

#### Render a react component inside another component
```jsx
// setup.js
import { render } from 'react-dom';

function App() {
  return <Headline />;
}

function Headline() {
    const greeting = 'Hello Functional Component!';
    return <h1 style={{margin : '0px'}}>{greeting}</h1>;
}

const view = quark.views.createTabsView('React view');
view.onDidConnectElement = () => {
    view.element.style.backgroundColor = '#f0f0f0';
    view.element.style.height = '100%';
    render(<App />, view.element);
};

view.focus();
```

#### Using import/export statements
```jsx
// headline.js
function Headline() {
    const greeting = 'Hello Functional Component!';
    return <h1 style={{ margin: '0px' }}>{greeting}</h1>;
}

export default Headline;
```
```jsx
// setup.js
import { render } from 'react-dom';
import Headline from './headline';

function App() {
    return <Headline />;
}

const view = quark.views.createTabsView('React view');
view.onDidConnectElement = () => {
    view.element.style.backgroundColor = '#f0f0f0';
    view.element.style.height = '100%';
    render(<App />, view.element);
};

view.focus();
```

#### Creating react class components
```jsx
import { render } from 'react-dom';
import Headline from './import-export/headline';
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <h1 style={{ margin: '0px' }}>{this.props.greeting}</h1>
        );
    }
}

const view = quark.views.createTabsView('React view');
view.onDidConnectElement = () => {
    view.element.style.backgroundColor = '#f0f0f0';
    view.element.style.height = '100%';
    render(<App greeting = 'Hello Functional Component!' />, view.element);
};

view.focus();
```

