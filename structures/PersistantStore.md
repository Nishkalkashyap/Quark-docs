# PersistantStore

[[toc]]

### `get(path[, defaultValue])`
Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place.
* arguments
  * path `string`
  * defaultValue `any`
* returns `any`


### `set(path, value)`
Sets the value at path of object. If a portion of path doesn’t exist it’s created. Arrays are created for missing index properties while objects are created for all other missing properties.
* arguments
  * path `string`
  * value `any`
* returns `any`


### `update(path, updater)`
This method is like `set` except that accepts updater to produce the value to set. 
* arguments
  * path `string`
  * updater `(value) => any`
* returns `any`

### `has(path)`
Checks if path is a direct property of object.
* arguments
  * path `string`
* returns `boolean`


### `delete(path)`
Deletes the property of the object.
* arguments
  * path `string`
* returns `void`


### `size`
Gets the size of collection by returning its length for array-like values or the number of own enumerable properties for objects.
* returns `number`




<!-- Persistant Store part begins -->




### `forceUpdate([, key])`
Writes the store's data to the file system.
* arguments
  * key `string`(optional)
* returns `void`

### `onDidChange(key, callback)`
Watches the given key, calling callback on any changes. When a key is first set oldValue will be undefined, and when a key is deleted newValue will be undefined.
* arguments
  * key `string`
  * callback `(newValue, oldValue) => void`
* returns `void`