---
description : 'This guide shows you how to build and run a simple sketch. The aim of this guide is to help you give an overview of the development workflow.'
author : nishkal
tags : ['guide']
cover : ~@buildAssets/guide/getting-started.png
---

# Getting Started
<Header />

##### Estimated completion time : Less than 5 minutes.

[[toc]]

## Prerequisites
The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. 
<!-- Before you begin, it is recommended that your development environment an npm package manager. Although, it is not strictly required to complete this guide. -->

## Steps
#### Step 1: Installing the Quark IDE
You need to download and install the Quark IDE for your PC from [here.](/download/)

#### Step 2: Starting a new Project
  1.  After installing Quark, open the IDE.
  2.  You will be shown a welcome screen. Click on __"Start a new Project"__

![Landing Page](~@buildAssets/guide/getting-started/start-new-project.png =300x)

  3.  After entering the project name, click on 'Create' button.

![Landing Page](~@buildAssets/guide/getting-started/enter-project-name.png)

  4.  If the project was created successfully, you will be prompted to open the project. Click on __"Open Project"__.

![Landing Page](~@buildAssets/guide/getting-started/open-project.png =300x)

#### Step 3: Navigating through the IDE
  1. After opening the project your view may look something like this.


![An image](~@buildAssets/guide/intro/new-project.png)

  2. On the left hand side is the navigation pane. Use this pane to navigate around files and folders.
  3. Also there is a setup.js file, this file is used as the entry point of your code by the Quark build system while building your sketch.
  4. Double click on the file to open the editor. Your view should look something like this.

![An image](~@buildAssets/guide/intro/setup-editor.png)

#### Step 4: Writing your Code.

  1. Notice that our file already has one line of code, that prints a console message. We'll keep this tutorial to only one line of code.
  2. Let us change the console message to "Hello World, I'm Quark". Your code should now look like this.

```js
console.log("Hello World, I'm Quark");
```

#### Step 5: Building the sketch

  1. To build the sketch, press the __build__ button at the bottom right corner of the IDE.

![Build](~@buildAssets/guide/intro/build.png)

  2. To check the build logs, go to the Output section in Menu bar and select __"Build: Focus"__. This will focus on the build logs output channel.

![Build](~@buildAssets/guide/intro/build-focus.png)

  4. As visible in the output, our build was successful, now lets run the sketch.

#### Step 6: Running the sketch

  1. To run the sketch, press the __run__ button at the bottom right corner _(adjacent to the build button)_ of the IDE.
  2. This should run our sketch and a new window will pop open like so.

![Build](~@buildAssets/guide/intro/run.png)

  3. Notice the console message printed in the devtools output channel. This shows that our code ran properly.

#### The entire process could be summarized in the following video.
We create a new project, build the project, and run the project. __All of which can be done within 15 seconds!!__

<video muted autoplay loop style="max-width:100%; height:auto" name="media" poster="~@buildAssets/getting-started/project-start-demo.jpg" crossOrigin="anonymous">
  <source src="~@buildAssets/getting-started/project-start-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

## Next Steps
Of course this is not all Quark has to offer, checkout the tutorials to learn mode advanced concepts.

