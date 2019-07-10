---
description : Register globally executable commands that trigger an action on invocation.
author : nishkal
tags : ['api', 'references']
cover : ~@buildAssets/api/references.png
---

# commands
<Header/>
[[toc]]

### commands.registerCommand(id, handle[, thisArg, label])
Registers a globally executable command.
* arguments
  * id `string`
  * handle `Function`
  * thisArg `any`(optional)
  * label `string`(optional)
* returns [`IKeyBindingRegister`](/structures/IKeyBindingRegister.md)
* Usage


#### Registering a command.
```js
quark.commands.registerCommand('my.awesome.command.id', () => {
    console.log('I ran');
});

quark.commands.executeCommand('my.awesome.command.id');
//logs `I ran` to console.
```

#### Adding a KeyBinding to the command.
```js
const register = quark.commands.registerCommand('my.awesome.command.id', () => {
    console.log('I ran');
});
register.addKeyBinding('ctrl+i');
//Now pressing the key combination "ctrl+i" will invoke the command.
```

#### Passing arguments to the command.
```js
quark.commands.registerCommand('my.awesome.command.id', (label) => {
    console.log(label);
});

quark.commands.executeCommand('my.awesome.command.id', 'I ran');
//logs `I ran` to console.
```

#### Adding command to the commands palette.
The example below shows how to add a command to the commands palette. The only thing you need to do differently is to provide the label argument to the `commands.registerCommand` function.
```js
quark.commands.registerCommand('my.awesome.command.id', () => {
    console.log('I ran');
}, null, 'My Awesome Command');
```
Now the command should be available in the commands palette like so.

![registered-command](~@public/references/commands/registered-command.png)


### commands.executeCommand(id, [...args])
Executes a registered command.
* arguments
  * id `string`
  * ...args `any`
* returns `void`

### commands.getCommand(id)
Returns a registered command with the provided id.
* arguments
  * id `string`
* returns [`ICommand`](/structures/ICommand.md) | `undefined`
* Usage

```js
//e.g. Getting a command and then disposing it.
const command = quark.commands.getCommand('my.awesome.command.id');
command.dispose();
//unregisters the command
```

### commands.getAllCommands()
Returns an array of all the registered commands.
* returns [`Array<ICommand>`](/structures/ICommand.md)
* Usage

```js
//e.g. filtering all commands registered in commands palette.
const commands = quark.commands.getAllCommands().map((command) => {
    if(command.label) {
        return command;
    }
});
```

