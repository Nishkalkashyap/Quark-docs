# Introduction

[[toc]]

<!-- Quark is an integrated development environment for rapidly building functional , prototypal projects that run as a desktop application written in HTML, CSS and JavaScript. Quark accomplishes this by combining a subset of tools: -->

Quark is an integrated development environment for rapidly building functional , prototypal projects, written in HTML, CSS and JavaScript.

Quark is basically three distinct components:

1. __A Code Editor__ - This is the place where you write your code.
2. __A Build System__ - This is the place that builds and bundles all your code into a single build file _(*.build.qrk)_ that can be run withing the Quark runtime environment.
3. __Runtime Environment__ - This is an Electron renderer process which executes the build file emitted by the build system. Within the runtime environment, you have access to the Quark API.


## Goals

#### Cross-platform
Projects build with Quark should run on all platforms such as Windows, Linux and Mac, sharing the same code base.

#### Simplicity
Quark is built with simplicity in mind, so that creating projects with Quark is enjoyable, easy to learn, and accessible to just about anyone with web development skills.


<!--  -->

## Releases
Quark releases frequently. We release when there are significant bug fixes, new APIs or are updating versions of Electron or Node.js.

## Versioning
Once Quark releases in beta phase, it will follow [semver](https://semver.org/). Before that no gurantees are made that the API will be changed in a backwards compatible way.

## Join the Community
[social.quarkjs.io](https://social.quarkjs.io)


<!-- Android Studio is the official integrated development environment for Google's Android operating system, built on JetBrains' IntelliJ IDEA software and designed specifically for Android development. It is available for download on Windows, macOS and Linux based operating systems. -->