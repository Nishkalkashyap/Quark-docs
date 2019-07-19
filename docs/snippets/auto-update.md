---
description : 'A brief introduction of the auto-updates feature.'
author : nishkal
tags : ['nodejs', 'javascript']
# title : 'Configuring build process'
---

# Auto updates

<Header />

Quark comes pre-built with auto-updates feature. But this feature is only supported in a few distributions.

### Auto-updatable distributions
* MacOS: DMG
* Linux: AppImage
* Windows: EXE

Since Quark is currently a __beta software__, we are shipping updates almost daily. It is __highly reccomended__ that you only download these distributions to get the latest features and bug fixes.

### Release channels
We support 2 release channels.
1. __Insiders release:__ Insiders has the most recent code pushes and may lead to the occasional broken build. New releases are published almost every other day.
2. __Stable release:__ Only stable releases are published on this channel. This channel may be updated once a month.

By default, your release channel is set to __Stable__. You will need to change this setting to move to the insiders release.

### Selecting the release channel
You can select the release channel from [settings](/guide/quark-ide.html#settings). (`Settings > General > Auto Updates > Release channel`)

![screenshot](~@buildAssets/release-channel.png =500x)

### Disabling auto-updates
You can optionally choose to disable auto-updates feature from `Settings > General > Auto Updates > Disable auto-updates`

