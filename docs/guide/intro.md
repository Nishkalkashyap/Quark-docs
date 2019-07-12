---
description : 'Quark is a cross-platform, integrated development environment for rapidly building - functional , prototypal projects, written in HTML, CSS and JavaScript with native desktop app like capabilities.'
author : nishkal
tags : ['guide']
cover : ~@buildAssets/guide/introduction.png
# meta:
#   - name: description
#     content: my custom meta description
---

# Introduction

[[toc]]

## What is Quark ?
Quark is a __general purpose software__ tool specifically designed to help you create projects written in HTML, CSS and JavaScript with native desktop app like capabilities.

<video muted autoplay loop style="max-width:100%; height:auto" name="media" poster="~@buildAssets/guide/hello-world-intro.png" crossOrigin="anonymous">
  <source src="~@buildAssets/guide/hello-world-intro.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

<div style="padding-top:50px"></div>

## How does it work? 🤯
<!-- Simply Said: Quark comes with an __integrated development environment(IDE)__ and a __JavaScript runtime__. You write your code in the IDE and press a button to build your project. That's all! The IDE automatically takes care of transpiling and bundling your project and emits a single output file which you can "double-click" on to open and run your project. We call these output files, __"sketches"__. -->
Simply Said: Quark comes with an __integrated development environment(IDE)__ and a __JavaScript runtime__. You write your code in the IDE and press a button to build your project. That's all! 

The IDE automatically takes care of building your project and emits a single output file which you can "double-click" on to open and run your project. We call these output files, __"sketches"__.


_See the process in action -_

<video muted autoplay loop style="max-width:100%; height:auto" name="media" poster="~@buildAssets/getting-started/project-start-demo.jpg" crossOrigin="anonymous">
  <source src="~@buildAssets/getting-started/project-start-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

<div style="padding-top:50px"></div>

## Quark Sketches 🎨
Quark is built on top of the [Electron framework](https://electronjs.org). Your sketches provide you with all the capabilities of __full fledged electron apps__. The difference here is that they just weigh a __few kilobytes__ instead of __hundreds of megabytes.__

We achieve this functionality by using a __shared JavaScript runtime__ for all your sketches. This runtime, in most cases, accounts for almost 99% of the weight of an electron app. This leaves us with the actual application logic, which usually only weighs a few kilobytes.

The only caveat here is that because of this shared runtime, your sketches have a direct dependency on the Quark software itself to provide for the runtime. Hence we call these projects built with Quark __"sketches" and not applications.__

What this means for you is that you can potentially have hundreds of sketches on your machine providing the functionality as that of full fledged electron apps, while consuming the resources equivalent to only one app!

<!-- We use some witchcraft behind the scenes to make this happen. But you don't need to care about all that stuff, just write your application logic, build the project and you're good to go. Here are some of the key features of Quark sketches- -->

#### Web Technologies
Sketches are built using web technologies like HTML, CSS and Javascript. If you can build a website, you already know how to build a sketch.

#### Power of Electron 💪
Behind the scenes, we use [electron's renderer process](https://electronjs.org/docs/tutorial/application-architecture) as the runtime for your sketches. This means, that you have access to all of the Node.js and Electron's renderer process API's in your sketch.

#### Cross Platform
Another advantage of using web technologies is that your sketches are Compatible with Mac, Windows, and Linux and run on all three platforms. __Write once, run everywhere!__

#### Unopinionated
Anything you like, any way you like, in any style. We have out-of-the-box support for modern JavaScript, React.js, Vue.js and Typescript. Take your pick!

#### Powerful build system
Thanks to the powerful Quark IDE which makes transpiling, bundling and running a project as easy as pressing a button.


<!-- 
#### Small in size
Since every sketch is essentially some bundled javascript code, they are very small in size, usually varying from a few kilobytes to a few megabytes. -->

<!-- Under the hood, Quark achieves this functionality by combining several set of tools in one single package and abstracting away the complexity to setup an environment for every single time you start a new project. -->

<!-- ## Quark development environment.
Quark applications are built using it's __integrated development environment__ that, at the very least, include a text editor and a code compiler. It enables the creation of applications within a carefully designed set of constraints. 

Some of the [features](/guide/quark-ide.md) of Quark IDE include - smart auto completion, "go to definition", find and replace,typescript support, built in package manager and code compiler. -->

<!-- ## Goals

#### Rapid application development
Projects build with Quark should be easy, quick to setup and share.

#### Cross-platform
Projects build with Quark should run on all platforms such as Windows, Linux and Mac, sharing the same code base.

#### Simplicity
Quark is built with simplicity in mind, so that creating projects with Quark is enjoyable, easy to learn, and accessible to just about anyone with basic programming skills. -->


<!--  -->

<!-- ## Releases
Quark releases frequently. We release when there are significant bug fixes, new APIs or are updating versions of Electron or Node.js. -->

<!-- ## Versioning
Once Quark releases in beta phase, it will follow [semver](https://semver.org/). Before that no gurantees are made that the API will be changed in a backwards compatible way. -->

## First Steps
To get the most out of Quark, start by reviewing a few introductory topics:
* [Setting up the environment](/guide/setup.md) : Learn how to install Quark and get up and running within minutes.
* [Quark development environment](/guide/quark-ide.md): Get to know how to navigate through the Quark IDE.
* [Showcase](/guide/showcase.md): View example projects made with Quark.



## Join the Community
To learn more, follow our [social network](https://social.quarkjs.io). You can also ask questions and open issues on our [GitHub repo](https://github.com/Nishkalkashyap/Quark-docs).


<!-- Android Studio is the official integrated development environment for Google's Android operating system, built on JetBrains' IntelliJ IDEA software and designed specifically for Android development. It is available for download on Windows, macOS and Linux based operating systems. -->