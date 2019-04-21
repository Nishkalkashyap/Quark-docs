# ViewProvider

[[toc]]

## Methods

### dispose()
Removes the view
* returns `void`

### isVisible()
Returns boolean.
* returns `void`

### hide()
Hides the view.
* returns `void`

### show()
Shows the view.
* returns `void`

### isFocused()
Returns `true` if the view is focused.
* returns `boolean`

### blur()
Removes the focus from view and selects previous view.
* returns `boolean`





### onWillCreateElement()
Removes the focus from view and selects previous view.
* returns `void`

### onDidCreateElement()
Removes the focus from view and selects previous view.
* returns `void`

### onDidConnectElement()
Removes the focus from view and selects previous view.
* returns `void`

### onWillRemoveElement()
Removes the focus from view and selects previous view.
* returns `void`

### onDidRemoveElement()
Removes the focus from view and selects previous view.
* returns `void`

### onCanEnterView()
Removes the focus from view and selects previous view.
* returns `Promise<boolean> | boolean`

### onDidEnterView()
Removes the focus from view and selects previous view.
* returns `void`

### onCanRemoveView()
Removes the focus from view and selects previous view.
* returns `Promise<boolean> | boolean`

### onDidRemoveView()
Removes the focus from view and selects previous view.
* returns `void`

### getProgressBarValue()
Removes the focus from view and selects previous view.
* returns `number | 'indeterminate'`


### setProgressBar([value])
Removes the focus from view and selects previous view.
* arguments
  * value `number`
* returns `void`






## Properties

### label
* type `string`

### element
* type `Element`

### keepConnected
* type `boolean`

### busy
* type `boolean`

### badge
* type `string | number`

### icon
* type `string`

### tooltip
* type `string`

### data
* type `any`

### actionIcon
* type `string`

### contextMenu
* type [`ContextMenuRef`](/)

### buttons
* type [`Array<ButtonField>`](/)

### inputField
* type [`InputField`](/)

### selectField
* type [`SelectField`](/)
