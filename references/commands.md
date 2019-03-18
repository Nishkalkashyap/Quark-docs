# commands

<Header label="Register globally executable commands."/>

[[toc]]

### `commands.registerCommand(id, handle[, thisArg, label])`
Registers a globally executable command.
* arguments
  * id `string`
  * handle `Function`
  * thisArg `any`(optional)
  * label `string`(optional)
* returns [`IKeyBindingRegister`](/structures/IKeyBindingRegister.md)
* Usage


#### Registering a global command
The example below shows how to register a global command that can be invoked using the `commands.executeCommand` function.
```js
quark.commands.registerCommand('my.awesome.command.id', () => {
    console.log('I ran');
});

quark.commands.executeCommand('my.awesome.command.id');
//logs `I ran` to console.
```

#### Passing arguments to the command
```js
quark.commands.registerCommand('my.awesome.command.id', (label) => {
    console.log(label);
});

quark.commands.executeCommand('my.awesome.command.id', 'I ran');
//logs `I ran` to console.
```

#### Adding command to the commands palette
The example below shows how to add a command to the commands palette. The only thing you need to do differently is to provide the label argument to the `commands.registerCommand` function.
```js
quark.commands.registerCommand('my.awesome.command.id', () => {
    console.log('I ran');
}, null, 'My Awesome Command');
```
Now the command should be available in the commands palette like so.

![registered-command](/references/commands/registered-command.png)


### `commands.executeCommand(id, [...args])`
Executes a registered command.
* arguments
  * id `string`
  * ...args `any`
* returns `void`

### commands.getCommand(id)
Returns a registered command with the provided id.
* arguments
  * id `string`
* returns `ICommand | undefined`
* Usage

```js
const command = quark.commands.getCommand('my.awesome.command.id');
```

### commands.getAllCommands()
Returns an array of all the registered commands.
* returns `Array<ICommand>`
* Usage

```js
//e.g. filtering all commands registered in commands palette.
const commands = quark.commands.getAllCommands().map((command) => {
    if(command.label) {
        return command;
    }
});
```

