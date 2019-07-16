---
description : 'Simple sketch that shows a doughnut chart of the CPU system, user, and idle activity time.'
author : nishkal
tags : ['javascript']
sidebarDepth: 2
---

# Activity Monitor

<Header />

[[toc]]

##### The project that we are finally going to build, will look something like this:

![screenshot](~@buildAssets/examples-activity-monitor.png =300x)

!!! note
This project could be found [here.](https://github.com/Nishkalkashyap/Quark-samples/tree/master/examples/activity-monitor)
!!!

## Create a new Project
Just like we did it in the [getting started](/guide/getting-started.md) guide, create a new project.

## Creating the directory structure
We need only 2 files, the base `setup.js` file and a `util.js` file. Create the directory structure like so.
```
.
├─ setup.js
└─ util.js
```

## Write the code

##### setup.js
```js
// setup.js
import { drawChart } from './util';
import * as os from 'os';

// create an element for the view
const element = quark.util.createElementFromHtml(`
    <div style="width:100%;height:100%;">
        <canvas id="my-chart"></canvas>
    </div>
`);

// create a view
const view = quark.views.createTabsView('Activity Monitor', element);
view.onDidConnectElement = () => {
    const canvas = document.getElementById('my-chart');
    drawChart(canvas);
}
view.focus();

// optionally hide navbar
// quark.views.tabsviewController.hideNavbar();

// set the app theme
quark.util.setAppTheme({
    "background.dark": "#111111",
    "on.background.dark": "#ffffff",

    "background.default": "#222222",
    "on.background.default": "#ffffff",

    "background.light": "#3e3e3e",
    "on.background.light": "#ffffff",

    "background.divider": "#4D4A4B",

    "primary.default": "rgba(54, 162, 235, 1)",
    "on.primary.default": "#000000",

    "secondary.default": "#ff7246",
    "on.secondary.default": "#000000"
});

const status = quark.util.createStatusBarItem(quark.StatusBarAlignment.Right);
status.text = `Monitoring CPUs: ${os.cpus().length}`;
status.show();
```

##### util.js
```js
// util.js

import * as Chart from 'chart.js';
import * as os from 'os';

var lastMeasureTimes = [];
var chart = null;

function setLastMeasureTimes(cpus) {
    for (let i = 0; i < cpus.length; i++) {
        lastMeasureTimes[i] = getCpuTimes(cpus[i]);
    }
}

function getDatasets() {
    const datasets = [];
    const cpus = os.cpus();

    for (let i = 0; i < cpus.length; i++) {
        const cpu = cpus[i]
        const cpuData = {
            data: getCpuTimes(cpu),
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ]
        }
        datasets.push(cpuData)
    }
    return datasets;
}

function updateDatasets() {
    const cpus = os.cpus()
    for (let i = 0; i < cpus.length; i++) {
        const cpu = cpus[i]
        chart.data.datasets[i].data = getCpuTimes(cpu);
        chart.data.datasets[i].data[0] -= lastMeasureTimes[i][0];
        chart.data.datasets[i].data[1] -= lastMeasureTimes[i][1];
        chart.data.datasets[i].data[2] -= lastMeasureTimes[i][2];
    }
    chart.update();
    setLastMeasureTimes(cpus);
}

function getCpuTimes(cpu) {
    return [
        cpu.times.user,
        cpu.times.sys,
        cpu.times.idle,
    ];
}

export function drawChart(element) {
    chart = new Chart(element, {
        type: 'doughnut',
        data: {
            labels: [
                'User Time (ms)',
                'System Time (ms)',
                'Idle Time (ms)'
            ],
            datasets: getDatasets()
        },
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'CPU Activity',
                fontColor: 'rgb(250, 250, 250)',
                fontSize: 16
            },
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(250, 250, 250)',
                    fontSize: 12
                }
            }
        }
    });
    setInterval(updateDatasets, 1000);
}

setLastMeasureTimes(os.cpus());
```

## Build and run the sketch