---
description : "Simple sketch that plays a video of the computer's camera at a maximized size like looking into a mirror. Includes an optional rainbow filter effect that uses CSS animations."
author : nishkal
tags : ['javascript']
sidebarDepth: 2
---

# Mirror

<Header />

[[toc]]

!!! note Note
The complete project could be found [here](https://github.com/Nishkalkashyap/Quark-samples/tree/master/examples/mirror) on the github repo.
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

<div class="video-container">
	<!-- Video that displays the camera feed -->
	<video autoplay></video>

	<!-- Rainbow filter overlay -->
	<div class="rainbow-filter"></div>

	<!-- Rainbow filter checkbox -->
	<label class="filter">
		<input type="checkbox" id="rainbow-toggle"> Rainbow Filter
	</label>
</div>
```
##### setup.js
```js
// setup.js

import html from './index.html';
import './styles.css';
import { startVideo } from './util';

// hide tabs navbar
quark.views.tabsviewController.hideNavbar();

// create view
const element = quark.util.createElementFromHtml(html);
const view = quark.views.createTabsView(`My View`, element);
view.onDidConnectElement = () => {
    startVideo();
}
view.focus();
```

##### styles.css
```css
/* styles.css */

.video-container {
    height: 100%;
    width: 100%;
}

video {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    object-fit: cover;
}

.filter {
    position: absolute;
    right: 15px;
    top: 15px;
    color: white;
    background-color: var(--primary-default);
    padding: 5px 15px;
    border-radius: 3px;
}

.rainbow-filter {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: none;
    opacity: .3;
    animation: 3s linear 0s infinite alternate;
    animation-name: rainbow_background;
}

/* Animate from red to green to blue */
@keyframes rainbow_background {
    0% {
        background: #f00;
    }

    50% {
        background: #0f0;
    }

    100% {
        background: #00f;
    }
}
```

##### util.js
```js
// util.js

import { screen } from 'electron';

export function startVideo() {
    const display = screen.getPrimaryDisplay() // http://electron.atom.io/docs/api/screen

    const constraints = {
        video: {
            width: {
                ideal: display.size.width // Ideal video width is size of screen
            },
            height: {
                ideal: display.size.height // Ideal video height is size of screen
            }
        }
    }

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        const video = document.querySelector('video')
        video.srcObject = stream  // Play stream in <video> element
    }).catch((error) => {
        console.error(error)
    });

    document.getElementById('rainbow-toggle').addEventListener('change', (ev) => {
        const checked = ev.srcElement.checked;

        if (checked) {
            document.querySelector('.rainbow-filter').style.display = 'block';
        } else {
            document.querySelector('.rainbow-filter').style.display = 'none';
        }
    });
}
```

## Build and run the sketch