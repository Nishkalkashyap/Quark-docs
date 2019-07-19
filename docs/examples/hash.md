---
description : 'Simple sketch that shows the hash values of entered text using different algorithms.'
author : nishkal
tags : ['javascript']
sidebarDepth: 2
---

# Hash

<Header />

[[toc]]

##### The project that we are finally going to build, will look something like this:

![screenshot](~@buildAssets/examples-hash.png =500x)

!!! note Note
The complete project could be found [here](https://github.com/Nishkalkashyap/Quark-samples/tree/master/examples/hash) on the github repo.
!!!

## Create a new Project
Just like we did it in the [getting started](/guide/getting-started.md) guide, create a new project.

## Creating the directory structure
Create the following directory structure.
```
.
├─ index.html
├─ setup.js
├─ styles.css
└─ util.js
```

## Write the code

##### index.html
```html
<!-- index.html -->

<div class="container-fluid">

	<!-- Input row -->
	<div class="row">
		<div class="item">
			<h3 class="hash-heading">Input</h3>
			<textarea rows="2" id="text-input" class="form-control text-input" placeholder="Enter text and see it hashed..."></textarea>
		</div>
	</div>

	<!-- MD5 row -->
	<div class="row">
		<div class="item">
			<h3 class="hash-heading">MD5</h3>
			<pre id="md5-output" class="hash-output"> </pre>
		</div>
	</div>

	<!-- SHA-1 row -->
	<div class="row">
		<div class="item">
			<h3 class="hash-heading">SHA-1</h3>
			<pre id="sha1-output" class="hash-output"> </pre>
		</div>
	</div>

	<!-- SHA-256 row -->
	<div class="row">
		<div class="item">
			<h3 class="hash-heading">SHA-256</h3>
			<pre id="sha256-output" class="hash-output"> </pre>
		</div>
	</div>

	<!-- SHA-512 row -->
	<div class="row">
		<div class="item">
			<h3 class="hash-heading">SHA-512</h3>
			<pre id="sha512-output" class="hash-output"> </pre>
		</div>
	</div>

</div>
```

##### setup.js
```js
// setup.js

import html from './index.html';
import { registerUpdateHandle } from './util';
import './styles.css';

// hide the navbar
quark.views.tabsviewController.hideNavbar();

// create view
const element = quark.util.createElementFromHtml(html);
const view = quark.views.createTabsView('Hash', element);
view.onDidConnectElement = () => {
    registerUpdateHandle();
};
view.focus();

// set app theme
quark.util.setAppTheme({
    "primary.default" : "#488aff"
});
```

##### styles.css
```css
/* styles.css */

.container-fluid {
    padding: 20px;
    user-select: text;
    height: 100%;
    background-color: #D6D8DC;
}

pre {
    white-space: pre-wrap;
    word-break: keep-all;
    padding: 8px;
    background-color: #f5f5f5;
    border-radius: 3px;
}

.text-input {
    font-size: 16px;
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 3px;
}

.hash-output {
    color: #626669;
    font-size: 16px;
    letter-spacing: 2px;
    white-space: pre-wrap;
}

.hash-heading {
    color: #626669;
    font-weight: normal;
}
```

##### util.js
```js
// util.js

import * as crypto from 'crypto';

export function registerUpdateHandle() {
    document.getElementById('text-input').addEventListener('input', (ev) => {
        const text = ev.srcElement.value;

        const md5 = crypto.createHash('md5').update(text, 'utf8').digest('hex');
        document.getElementById('md5-output').innerText = md5;

        const sha1 = crypto.createHash('sha1').update(text, 'utf8').digest('hex');
        document.getElementById('sha1-output').innerText = sha1;

        const sha256 = crypto.createHash('sha256').update(text, 'utf8').digest('hex');
        document.getElementById('sha256-output').innerText = sha256;

        const sha512 = crypto.createHash('sha512').update(text, 'utf8').digest('hex');
        document.getElementById('sha512-output').innerText = sha512;
    });
}
```

## Build and run the sketch
* Press the `build` button at the bottorm right side of the status bar. (Or use `ctrl + shift + b`)
* Press the `run` button at the bottorm right side of the status bar. (Or use `ctrl + r`)