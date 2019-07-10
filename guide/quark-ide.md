---
description : "This guide describes some of the main features of the Quark development environment. This module assumes that you've finished the Getting Started guide."
author : nishkal
tags : ['guide']
cover : ~@buildAssets/guide/quark-ide.png
---


# Quark development environment
<Header />

Now that you've seen Quark in action, let's see how you can configure it to get the most out of it. 

Just like many other code editors, Quark adopts a common user interface and layout of an explorer on the left showing all of the files and folders in your project, an editor on the right showing contents of the file you've opened.

When you launch Quark project for the first time, you should get a screen that looks like this:

<!-- ![UI Overview](~@buildAssets/guide/quark-ide/ui-overview.png) -->
![An image](~@buildAssets/guide/intro/setup-editor.png)

[[toc]]

## Basic Layout 
The IDE comes with a simple and intuitive layout that maximizes the space provided for the editor while leaving ample room to browse and access the full context of your folder or project. The UI is divided into five areas:

  * __Editor__ - The main area to edit your files. You can open as many editors as you like side by side. Quark IDE uses the same code editor that powers the [VS Code](https://code.visualstudio.com/).
  * __Side Bar__ - Contains different views like the Explorer to assist you while working on your project.
  * __Status Bar__ - Information about the opened project and the files you edit.
  * __Activity Bar__ - Located on the far left-hand side, this lets you switch between views.
  * __Panels__ - You can display different panels below the editor region for output or debug information, errors and warnings, or an integrated terminal.

## Code Editor
Quark comes bundled with [Monaco code editor](https://microsoft.github.io/monaco-editor/index.html) which is the same code editor used in VS Code. Monaco editor provides rich IntelliSense, validation and out of the box support for for HTML, CSS, SCSS, JSON, JavaScript and TypeScript.

<video muted autoplay loop style="max-width:100%; height:auto" name="media" poster="~@buildAssets/guide/quark-ide/introduction.png" crossOrigin="anonymous">
  <source src="~@buildAssets/guide/quark-ide/introduction.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

#### Explorer
The Explorer is used to browse, open, and manage all of the files and folders in your project. 

![](~@buildAssets/guide/quark-ide/explorer.png =450x)

Here are the following things you can do in explorer:

* Create, delete, and rename files and folders.
* Move files and folders with drag and drop.
* Use the context menu to explore all options.

#### Virtual File System
One of the unique capabilities of Quark is that is uses virtual file system, sometimes also referred to as in-memory file system. That means all the code that you write and files you create inside the IDE are virtual files with no foot print on your real file system. This is done to make sharing a project as easy as sharing a single file.

## Command Palette
If you press `Ctrl+Shift+P` while focused in an editor pane, the command palette will pop up. This is a search driven menu that gives you access to just about any major task that is possible in Quark. Instead of clicking around all the application menus to look for something, you can press `Ctrl+Shift+P` and search for the command.

![An image](~@buildAssets/command-palette.png =450x)

Not only you can quickly search through hundreds of commands, but you can also see if there is a keybinding associated with it. You can use these keybindings to execute the command.



## Terminal

In Quark, you can open an integrated terminal, initially starting at the root of your project. This can be convenient as you don't have to switch windows or alter the state of an existing terminal to perform a quick command-line task.

To open the terminal:
* Use the `Ctrl+\` keyboard shortcut with the backtick character.
* Navigate to main menu and select `Terminal > Fork Terminal`.
* From the Command Palette (Ctrl+Shift+P), use the `Terminal: Fork Terminal` command.

<video muted autoplay loop style="max-width:100%; height:auto" name="media" poster="~@buildAssets/guide/quark-ide/terminal.png" crossOrigin="anonymous">
  <source src="~@buildAssets/guide/quark-ide/terminal.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

#### Managing multiple terminals
You can create multiple terminals open to different locations and easily navigate between them. Terminal instances can be added by clicking the plus icon on the top-right of the TERMINAL panel or by triggering the ``` Ctrl+Shift+` ``` command. This action creates another entry in the drop-down list that can be used to switch between them.

![](~@buildAssets/guide/quark-ide/multiple-terminals.png =250x)

* Remove terminal instances by pressing the trash can button. The terminal instance last focused on gets deleted.
* You can also split the terminal by triggering the `Ctrl+\` command or by pressing the __Fork Terminal__ button or from the main menu.

#### Configuration 
The shell used defaults to `$SHELL` on Linux and macOS, PowerShell on Windows. This can be changes in settings by going to __Terminal > Process > Shell:*__

## Settings

It is easy to configure Quark to your liking through its various settings. Nearly every part of Quark's editor can be changed to your liking.

Quark provides two different scopes of settings:
* __User Settings__ - Settings that apply globally to any instance of Quark you open.
* __Workspace Settings__ - Settings stored inside your workspace and only apply when the workspace is opened. These settings are stored in the `.quark/${project-name}.store.qrk` file at the root of your project.

You can change the scope of settings by selecting the appropriate option from the select box at the top right corner of the settings window.

!!! note NOTE
Workspace settings take priority over user settings.
!!! 

<video muted autoplay loop style="max-width:100%; height:auto" name="media" poster="~@buildAssets/guide/quark-ide/settings.png" crossOrigin="anonymous">
  <source src="~@buildAssets/guide/quark-ide/settings.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

#### You can open the settings as follows:
* Go to `File > Preferences > Settings` or trigger the `Ctrl+,` command.
* Or, Open the __Command Palette__ and select `Preferences: Open Settings`

#### Settings groups
Common settings are grouped together so that you can navigate through them easily.

![](~@buildAssets/guide/quark-ide/setting-group.png =x300)

#### Edit Settings
Each setting can be edited by either a checkbox, an input or by a drop-down. Simply edit the text or select the option you want to change to the desired settings.

![](~@buildAssets/guide/quark-ide/changed-settings-markers.png =x300)

!!! note NOTE
Note that changed settings have a marker besides them to help you identify them easily.
!!!


## Themes

* Multiple theme support.

<video muted autoplay loop style="max-width:100%; height:auto" name="media" poster="~@buildAssets/guide/quark-ide/themes.png" crossOrigin="anonymous">
  <source src="~@buildAssets/guide/quark-ide/themes.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

## Extensible

* Inbuilt npm client to install node packages for your projects.

<video muted autoplay loop style="max-width:100%; height:auto" name="media" poster="~@buildAssets/guide/quark-ide/extensible.png" crossOrigin="anonymous">
  <source src="~@buildAssets/guide/quark-ide/extensible.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

## Terminology
You can find definitions for all of the various terms that we use throughout this module in our [Glossary](/FAQ/glossary.md).

