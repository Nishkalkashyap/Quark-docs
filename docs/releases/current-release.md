---
description: "Release notes current release: Quark-0.5.x"
title: "Current release: Quark-0.5.x"
author: nishkal
tags: []
sidebarDepth: 4
---


# Release Notes

## Version: Quark-v0.5.x



[[toc]]

<!-- Quark-0.5.1-start -->
## Quark 0.5.1 - July 8, 2019

#### Bug fixes:
* Fixed: Editor executing paste command twice.
* Fixed: command not getting removed from command Palette on dispose issue.

#### Breaking:
* Removed: `keyBindings` namespace from global quark object.

#### Features:
* Added: `addKeybindingCondition` function in `command` namespace



!!! note See SHA-512 Hashes
<DropDown>
<ReleaseNotes :sha='{
    "Quark-win-0.5.1.exe": "8D3K03Se11NP4FqcO1dun975PrKt+ogUSm/B+xnOgm4C6CPHrDtdV6ltbIhhlIOgCZc0CvFSa7IA7OpdGeYJAQ==",
    "Quark-win-x64-0.5.1.msi": "GkvzmnJD9+sVmmIMYSN0DERXKKWqM0/GU75yvf1WdW062W5zxSDWvKdtKAGMiQdrter0crsbRhhVlOPF5zT+fg==",
    "Quark-win-x64-0.5.1.zip": "0aRXGyRW2JATbbkqFA/9A7pQXEUua8yoEv1U+85UgMl9aoRNbb9uo1Or9FAtE5inz3di8hOOvXNgNR+hrTWs8w==",
    "Quark-linux-amd64-0.5.1.deb": "9NZDINUko98fAS6o1CRDEzkAmUa+5Aknb+hXZNjLZZhZRNLDs7oqgUlLHiy4I0iZNXbdE1eibfSrOT7LFPQTZg==",
    "Quark-linux-x64-0.5.1.tar.gz": "QkGXr7SG1XlDSudS7yzQARwDPI4lpJvpYYYDX5wiWDq9bxSZI/JHGzMPhVFT5VsDRito+vcuTymMRB97PIehpw==",
    "Quark-linux-x86_64-0.5.1.AppImage": "FwSC78EFIokphq8NxOIUOTOeErMSu3MfCsQIPOOMsJlHEldQugZGgPhRqKoEQUyZ5wS5SNW0R92lzAMinR9jbg=="
}' />
</DropDown>
!!!

<!-- ---------------------------------------------- -->
<!-- Quark-0.5.1-end -->




<!-- Quark-0.5.0-start -->
## Quark 0.5.0 - July 3, 2019

#### Bug fixes:
* Fixed: Context menu not updating on language change.
* Fixed: Keybindings not getting removed when associated command is disposed.
* Fixed: Keybindings triggers random actions inside monaco-editor issue.
* Fixed: ASAR packager issue. (cannot pack single file)

#### Other changes:
* New files created are automatically opened in the editor.
* Editor is now automatically focused when file is opened.
* Added select-next and select-previous tabs bindings.

#### Breaking:
* Removed: `createVueWebComponent` method from quark.util object.



!!! note See SHA-512 Hashes
<DropDown>
<ReleaseNotes :sha='{
    "Quark-win-0.5.0.exe": "RTxwtMUgpNOztN4wtrJgwcLNzwn5nLXjM7J6Fiqrg90Wrqj/q89D6Sv5WN+Zq5+woiEE8+F5u/VFl2b+bH1xew==",
    "Quark-win-x64-0.5.0.msi": "nyfZICtVjytS4bs6FL4kYTBBrgn5suW2rUghnYLhgicFTmPHSx3SNJVB2wRfa6XBeD6A8IVAwY7h836Mq8fiJw==",
    "Quark-win-x64-0.5.0.zip": "0GS+9/D/92uu0uud8FJ5jy0ueEyV0sjX5el8UMarXn4KObmQydvJc4p2J9fANDknOQBHq6JxJNeL7jVp8PrbJA==",
    "Quark-linux-amd64-0.5.0.deb": "otN1TCzZk8Noy5h8/HkuQ2Bv4hruXwRruNjURVDaH8HdVh2xFJEAhrbWXtuqjdio0lD+0m+XYYiHVqaY+bQ4qw==",
    "Quark-linux-x64-0.5.0.tar.gz": "F+evYuu7oXSr+TdxpnW/GFkaZgvL9+Fe4eqh/YhBrVho56GnLkmiZ+fC7DnOlsZj3TQYm7Y+6PMa1D5xzgM80Q==",
    "Quark-linux-x86_64-0.5.0.AppImage": "9S3dKLlpN4pSxwAVZq78vfxUcFDBGqFcXp4cf3f4dlA13Ctk99Fo/oufGLUtqRKfgb0KCOUig1X96MU1uREkvw=="
}' />
</DropDown>
!!!

<!-- ---------------------------------------------- -->
<!-- Quark-0.5.0-end -->


