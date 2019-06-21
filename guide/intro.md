---
description : 'Quark is a cross-platform, integrated development environment for rapidly building - functional , prototypal projects, written in HTML, CSS and JavaScript with native desktop app like capabilities.'
author : nishkal
tags : ['guide']
cover : ~@public//g-images/guide/introduction.png
# meta:
#   - name: description
#     content: my custom meta description
---

# Introduction

[[toc]]

## What is Quark.js?
Quark is a cross-platform, integrated development environment for rapidly building - functional , prototypal projects, written in HTML, CSS and JavaScript with native desktop app like capabilities. 

<!-- Quark allows you to make multiple dashboards with native app like capabilities without actully building an app -->

Quark achieves this functionality by combining several set of tools in one single package and abstracting away the complexity to setup an environment for every single time you start a new project.

<video muted autoplay loop style="max-width:100%; height:auto" name="media" poster="~@buildAssets/guide/hello-world-intro.png">
  <source src="~@buildAssets/guide/hello-world-intro.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

These are the set of tool merged together in Quark:-

1. __A Code Editor__ - This is the place where you write your code. It uses the same code editor that powers the [VS Code](https://code.visualstudio.com/).
2. __A Build System__ - This is the place that builds and bundles all your code into a single file _(*.build.qrk)_ that can be run withing the __Quark runtime environment__. This is done by the popular [webpack](https://webpack.js.org/) bundler pre-installed inside Quark.
3. __Runtime Environment__ - This is an [Electron](https://electronjs.org) [renderer process](https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes) which executes the build file emitted by the build system. Within the runtime environment, you have access to all the Quark API.

## Understanding through an analogy
If the above description was too much to grasp, here is an analogy that will help you understand what Quark is. Here, we consider an example of developing an Android application:-

1. So let's say you are developing an android application. Even a beginner to programming would understand that you need a place to write your code. That is provided by Android in the form of [Android Studio](https://developer.android.com/studio). This is the official integrated development environment by Android to build your android applications.
2. So now you've written your code and need to build your project, this is done by the magical android __build system__ inside the Android studio that takes all your code and outputs a single file manifested as a __*.apk__ file.
3. This __*.apk__ file is then executed inside of an Android device or an emulator which we can also call a  __runtime environment__ for the *.apk file.

#### In the same sense, let us replicate all the three steps above and see how the process compares with Quark.

1. Just like you write your code in android studio, in the same sence your write your code in the Quark IDE.
2. Now all your code is bundled together by Quark and a single __*.build.qrk__ file is emitted.
3. This __*.build.qrk__ file can then be run within the Quark __runtime environment__. 


| Project Type        |    IDE Used    | Output file type |                 Runtime Environment                 |
| ------------------- | :------------: | :--------------: | :-------------------------------------------------: |
| **Android Project** | Android Studio |      *.apk       |            Android emulator/ Android OS             |
| **Quark Project**   |   Quark IDE    |   *.build.qrk    | [Electron](https://electronjs.org) Renderer Process |


!!! note Note
This is in no way a comparison between Android studio and Quark. The above example is only to illustrate and compare the process of app development both the IDE's.
!!! 


## Why does this project exists?
Initially, the aim of the project was to make programming more accessible to students and budding engineers who do not necessarily want to dig deep into a lower level programming language like C/C++/Java, but would want to learn to code in an easy to use, multi-purpose programming language that would help them build their projects and at the same time bring them into a coding environment.

The idea was to provide them with a set of tools in one single package, that abstracts away the complexity of setting up the environment so that they could directly jump into writing code and building projects.

Later, it was realized that by merging some more set of tools together, Quark could also be used by well established programmers to build their prototypal projects.

<!-- Initially, the aim of the project was to provide students and budding engineers new to coding with a set of tools  -->



## Goals

#### Rapid prototyping and project development
Projects build with Quark should be easy and quick to setup.

#### Cross-platform
Projects build with Quark should run on all platforms such as Windows, Linux and Mac, sharing the same code base.

#### Simplicity
Quark is built with simplicity in mind, so that creating projects with Quark is enjoyable, easy to learn, and accessible to just about anyone with basic programming skills.


<!--  -->

<!-- ## Releases
Quark releases frequently. We release when there are significant bug fixes, new APIs or are updating versions of Electron or Node.js. -->

<!-- ## Versioning
Once Quark releases in beta phase, it will follow [semver](https://semver.org/). Before that no gurantees are made that the API will be changed in a backwards compatible way. -->

## First Steps
To get the most out of Quark, start by reviewing a few introductory topics:
* [Setting up the environment](/guide/setup.md) : Learn how to install Quark and get up and running within minutes.
* [User Interface](/guide/user-interface.md): Get to know how to navigate through the user interface.
* [Showcase](/guide/showcase.md): View example projects made with Quark.



## Join the Community
To learn more, follow our [social network](https://social.quarkjs.io). You can also ask questions and open issues on our [GitHub repo](https://github.com/Nishkalkashyap/Quark-docs).


<!-- Android Studio is the official integrated development environment for Google's Android operating system, built on JetBrains' IntelliJ IDEA software and designed specifically for Android development. It is available for download on Windows, macOS and Linux based operating systems. -->