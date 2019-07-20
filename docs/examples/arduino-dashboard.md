---
description : 'Create a dashboard and a data logger for Arduino using the serialport library.'
author : nishkal
tags : ['javascript', 'arduino']
sidebarDepth: 2
---

# Arduino dashboard and data logger

<Header />

[[toc]]

##### The project that we are finally going to build, will look something like this:

<video muted autoplay loop style="max-width:100%; height:auto" name="media" crossOrigin="anonymous">
  <source src="https://i.imgur.com/4wnBfnx.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

!!! note Note
The complete project could be found [here](https://github.com/Nishkalkashyap/Quark-samples/tree/master/examples/arduino-dashboard) on the github repo.
!!!

## Features
__Serialport selector:__ A graphical user interface component that allows you to select the serialport for your Arduino.

![screenshot](https://i.imgur.com/fPOeavH.png =500x)

__Dashboard:__ A dashboard that prints the real time values on the screen and also draws charts.

![screenshot](https://i.imgur.com/GuQHONO.png =500x)

__Datalogger:__ A data logger that will read data from arduino and save it on your computer in csv format.

![screenshot](https://i.imgur.com/a7a4CmV.png =500x)

## Getting started
* Clone [this repository](https://github.com/Nishkalkashyap/Quark-samples/tree/master/examples/arduino-dashboard)
* cd `examples/arduino-dashboard`
* Upload the `arduino.ino` file to the arduino.
* Open project file `arduino-dashboard.qrk` to edit project, or build file `arduino-dashboard.build.qrk` to run the project in Quark.

## Running the project
* Open the build file `arduino-dashboard.build.qrk` in Quark.
* Press `ctrl+p` and select the COM port of your arduino from the serial port selector.
* To start the data logger, open the [commands palette](/guide/quark-ide.html#command-palette) by pressing `ctrl+shift+p`, and select `Datalogger: Start` command. You will see a notification on the bottom right of your screen if the logger was started.
* To stop the data logger, open the commands palette and select command `Datalogger: Stop`. This will open a save dialog where you can enter the path of the file where you want to save your data.
