---
description : 'Simple sketch that shows the current price of oil, gold, and silver using the STOOQ API.'
author : nishkal
tags : ['javascript']
sidebarDepth: 2
---

# Prices

<Header />

[[toc]]

##### The project that we are finally going to build, will look something like this:

![screenshot](~@buildAssets/examples-price.png =400x)

!!! note Note
The complete project could be found [here](https://github.com/Nishkalkashyap/Quark-samples/tree/master/examples/prices) on the github repo.
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

	<!-- Oil Row -->
	<div class="row oil">
		<div class="item">
			<h1>Oil <small>per barrel</small></h1>
			<h2>
				<span id="oil-price" class="price"></span>
				<small id="oil-change" class="change"></small>
			</h2>
		</div>
	</div>

	<!-- Gold Row -->
	<div class="row gold">
		<div class="item">
			<h1>Gold <small>per ounce</small></h1>
			<h2>
				<span id="gold-price" class="price"></span>
				<small id="gold-change" class="change"></small>
			</h2>
		</div>
	</div>

	<!-- Silver Row -->
	<div class="row silver">
		<div class="item">
			<h1 class="silver">Silver <small>per ounce</small></h1>
			<h2>
				<span id="silver-price" class="price"></span>
				<small id="silver-change" class="change"></small>
			</h2>
		</div>
	</div>

</div>
```
##### setup.js
```js
// setup.js

import './styles.css';
import html from './index.html';
import { updatePrices } from './util';

// hide navbar
quark.views.tabsviewController.hideNavbar();

// create view
const element = quark.util.createElementFromHtml(html);
const view = quark.views.createTabsView('Prices', element);
view.onDidConnectElement = () => {
    updatePrices();

    // update every 10 seconds
    setInterval(() => {
        updatePrices();
    }, 10000);
}
view.focus();

// set app theme
quark.util.setAppTheme({
    "background.dark": "#111111",
    "on.background.dark": "#ffffff",

    "background.default": "#222222",
    "on.background.default": "#ffffff",

    "background.light": "#3e3e3e",
    "on.background.light": "#ffffff",

    "background.divider": "#4D4A4B",

    "primary.default": "gold",
});
```

##### styles.css
```css
/* styles.css */

.gold,
.gold small {
    background-color: gold;
    color: #403600;
}

.silver,
.silver small {
    background-color: silver;
    color: #404040;
}

.oil,
.oil small {
    background-color: black;
    color: #E5E5E5;
}

.container-fluid {
    height: 100%;
    display: flex;
    flex-direction: column;
    user-select: text;
}

.row {
    flex-grow: 1;
    padding: 20px;
}

.price {
    padding-right: 5px;
}

/* Add a ( before the change */
.change::before {
    content: '(';
}

/* Add a ) after the change */
.change::after {
    content: ')';
}

/* Add a $ before the price */
.price::before {
    content: '$';
}

/* Hide the price and change when they are empty */
.change:empty,
.price:empty {
    display: none;
}

h1 {
    font-weight: 700;
}
```

##### util.js
```js
// util.js

import * as csv from 'papaparse';

let url
const stocks = {
    'oil': 'CL.F', // Crude oil, https://stooq.com/q/?s=cl.f
    'gold': 'GC.F', // Gold, https://stooq.com/q/?s=gc.f
    'silver': 'SI.F' // Silver,https://stooq.com/q/?s=si.f
};

export function updatePrices() {
    for (let symbol in stocks) {
        url = `https://stooq.com/q/l/?s=${stocks[symbol]}&f=sd2t2ohlc&h&e=csv`

        csv.parse(url, {
            download: true,
            delimiter: ',',
            complete: (results) => {
                // price data is the second array, first is headers
                const prices = results.data[1]
                const previousPrice = parseFloat(prices[3], 10)
                const currentPrice = parseFloat(prices[6], 10)
                let change = Math.round((currentPrice - previousPrice) * 100) / 100

                if (change >= 0) {
                    change = `+${change}`
                }
                
                console.log(`${symbol}-price`);
                document.getElementById(`${symbol}-price`).innerText = (currentPrice.toLocaleString());
                document.getElementById(`${symbol}-change`).innerText = (change)
            }
        })
    };
}
```

## Build and run the sketch
* Press the `build` button at the bottorm right side of the status bar. (Or use `ctrl + shift + b`)
* Press the `run` button at the bottorm right side of the status bar. (Or use `ctrl + r`)