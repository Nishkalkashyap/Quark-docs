---
description : Perform copy and paste operations on the system clipboard.
author : nishkal
tags : ['api', 'references']
cover : ~@buildAssets/api/references.png
---

# clipboard
<Header/>
[[toc]]


### clipboard.readText()
Returns the text saved in clipboard.
* returns `string`

### clipboard.writeText(text)
Writes text to clipboard.
* arguments
  * text `string`
* returns `void`

### clipboard.readHTML()
Returns the markup saved in clipboard.
* returns `string`

### clipboard.writeHTML(text)
Writes markup to the clipboard.
* arguments
  * text `string`
* returns `void`

### clipboard.clear()
Clears the text saved in clipboard.
* returns `void`
