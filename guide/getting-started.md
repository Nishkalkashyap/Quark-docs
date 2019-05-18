---
description : 'Welcome to Quark. Quark is a flexible software sketchbook that helps you rapidly create functional softwares for your prototypal projects.'
author : nishkal
tags : ['guide']
cover : ~@public/g-images/guide/getting-started.png
---

# Getting Started
Welcome to Quark. Quark is a flexible software sketchbook that helps you rapidly create functional softwares for your prototypal projects.

This guide shows you how to build and run a simple quark sketch. You'll use the [Quark IDE](./user-interface.md) to create and build your sketches.

#### Estimated completion time : Less than 5 minutes.

[[toc]]

## Prerequisites
Before you begin, it is recommended that your development environment an npm package manager. Although, it is not strictly required to complete this guide.

## Steps
### Step 1: Installing the Quark IDE
You need to download and install the Quark IDE for your PC from [here.](/download/)

### Step 2: Starting a new Project
  1.  After installing Quark, open the IDE.
  2.  You will be shown a welcome screen, click on __"Start a new Project"__.
  3.  After entering the project name, click on 'Create' button.
  4.  If the project was created successfully, you will be prompted to open the project. Click on __"Open Project"__.

### Step 3: Navigating through the IDE
  1. After opening the project your view may look something like this.


![An image](~@public/g-images/intro-guide-photos/new-project.png)

  2. On the left hand side is the navigation pane. Use this pane to navigate around files and folders.
  3. Also there is a setup.js file, this file is used as the entry point of your code by the Quark build system while building your sketch.
  4. Double click on the file to open the editor. Your view should look something like this.

![An image](~@public/g-images/intro-guide-photos/setup-editor.png)

### Step 4: Writing your Code.

  1. Notice that our file already has one line of code, that prints a console message. We'll keep this tutorial to only one line of code.
  2. Let us change the console message to "Hello World, I'm Quark". Your code should now look like this.

```js
console.log("Hello World, I'm Quark");
```

### Step 5: Building the sketch

  1. To build the sketch, open the command palette __(defaults to "ctrl+shift+p")__. And select the build command. Your view now should look something like this.

![Build](~@public/g-images/intro-guide-photos/build.png)

  1. Hit the enter key to run the build.
  2. To check the build logs, go to the Output section in Menu bar and select __"Build: Focus"__. This will focus on the build logs output channel.

![Build](~@public/g-images/intro-guide-photos/build-focus.png)

  4. As visible in the output, out build was successful, now lets run out sketch.

### Step 6: Running the sketch

  1. To run the sketch, open the commands panel and select __"Run"__.
  2. This should run our sketch and a new window will pop open like so.

![Build](~@public/g-images/intro-guide-photos/run.png)

  3. Notice the console message printed in the devtools output channel. This proves that our code ran properly.

## Next Steps
Of course this is not all Quark has to offer, checkout the tutorials to learn mode advanced concepts.

